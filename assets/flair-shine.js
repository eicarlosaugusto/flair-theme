/* Flair signature: "the shine that follows you".
 * A band of light crosses the metal where the finger or cursor is. It is a CSS
 * layer over the photo (see flair.css), so it works on every product image,
 * including pieces imported later, with no image editing.
 *   - fine pointer: the band follows the cursor over any product photo
 *   - touch: the band sweeps once as a card reaches the middle of the screen,
 *     and the card swaps to its second photo while it sits there
 *   - proof scene: the band sweeps the piece again at every step
 * Nothing runs for visitors who prefer reduced motion.
 */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var TARGETS = '.flair-shine, .card__media .media, .product__media-item .media';
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function sweep(el) {
    el.classList.remove('is-sweeping');
    void el.offsetWidth; // restart the animation
    el.classList.add('is-sweeping');
  }

  document.addEventListener('animationend', function (e) {
    if (e.animationName === 'flair-sweep') e.target.classList.remove('is-sweeping');
  });

  if (fine) {
    var lit = null;
    document.addEventListener('pointermove', function (e) {
      var el = e.target.closest && e.target.closest(TARGETS);
      var box;
      if (!el && e.target.closest) {
        // Product cards are covered by their full-card link, so the photo is never the target.
        var card = e.target.closest('.card-wrapper');
        var media = card && card.querySelector('.card__media .media');
        if (media) {
          box = media.getBoundingClientRect();
          if (e.clientX >= box.left && e.clientX <= box.right && e.clientY >= box.top && e.clientY <= box.bottom) el = media;
        }
      }
      if (lit && lit !== el) lit.classList.remove('is-lit');
      lit = el;
      if (!el) return;
      box = el.getBoundingClientRect();
      el.style.setProperty('--shine-x', (((e.clientX - box.left) / box.width) * 100).toFixed(1) + '%');
      el.classList.add('is-lit');
    }, { passive: true });
    document.addEventListener('pointerleave', function () {
      if (lit) lit.classList.remove('is-lit');
      lit = null;
    });
  } else if ('IntersectionObserver' in window) {
    var seen = new WeakSet();
    var middle = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var card = entry.target;
        card.classList.toggle('is-centered', entry.isIntersecting);
        if (entry.isIntersecting) sweep(card.querySelector('.media') || card);
      });
    }, { rootMargin: '-38% 0px -38% 0px' });

    var watch = function () {
      document.querySelectorAll('.card-wrapper, .flair-shine').forEach(function (el) {
        if (seen.has(el)) return;
        seen.add(el);
        middle.observe(el);
      });
    };
    watch();
    // Filters, pagination and quick add re-render cards: pick up the new ones.
    new MutationObserver(function () {
      window.requestAnimationFrame(watch);
    }).observe(document.body, { childList: true, subtree: true });
  }

  // Proof scene: one sweep per step.
  document.querySelectorAll('.flair-proof').forEach(function (scene) {
    var piece = scene.querySelector('.flair-shine--scene');
    if (!piece) return;
    new MutationObserver(function () {
      sweep(piece);
    }).observe(scene, { attributes: true, attributeFilter: ['data-etapa'] });
  });
})();
