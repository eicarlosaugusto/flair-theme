# Flair — handoff para outras sessões

Estado da loja e regras de negócio em 27/09/2026. Leia antes de mexer em preço, produto, texto ou tema.
Complementa `BRAND.md` (marca), `BRIEF.md` (redesign da home) e `docs/policies.md` (textos das políticas).

## 1. A loja

- Shopify, domínio **flairstudio.co.uk**. Dropshipping AliExpress → Reino Unido via **DSers**.
- Tema: este repositório (Dawn customizado). Push em `main` sincroniza com o tema publicado `flair-theme/main`.
  Sempre `git pull --rebase` antes de editar, porque o editor da Shopify e outras sessões também fazem commit.
- Mercado ativo: **United Kingdom** (GBP). O mercado Brasil está em rascunho, por isso quem abre do Brasil vê "Sold out". Isso é esperado.
- Pagamento: **Stripe** (conta Brasil, CPF). Sem PayPal.
- Idioma do site: inglês britânico (jewellery, colour, tarnish-resistant).

## 2. Regra de trabalho do Carlos

- Não usar captura de tela, navegador nem automação visual (Playwright, Puppeteer, Computer Use).
  Trabalhar por código, API (Shopify GraphQL via MCP) e `shopify theme check`.
- Respostas para ele em português. Textos da loja em inglês.

## 3. Como o preço é calculado

A fórmula é a da calculadora "Margem Flair UK" (artefato https://claude.ai/artifact/NYmoSmZ1q6BBE94U48m7Rb).

### Premissas

| Item | Valor | Origem |
|---|---|---|
| VAT | 20% incluso no preço → **1/6 do preço** vai para o HMRC | Venda B2C no Reino Unido a partir de fora exige registro no VAT desde a 1ª venda |
| Taxas de pagamento | **10% do preço + £0.06** | Stripe Brasil ~3.99% + R$0.39, +2% internacional, +2% conversão, +2% Shopify (sem Shopify Payments) |
| Reserva para devoluções | **5% do preço** | Direito de cancelar em 14 dias (Consumer Contracts Regulations) |
| Frete real | **£2.70 por peça** | AliExpress Standard Shipping para o Reino Unido, ~7–14 dias |
| Custo de anúncio (CPA) | **£8 por venda** (estimativa) | Trocar pelo valor real depois do primeiro teste de Meta/TikTok |
| Margem líquida alvo | **15%** | |
| VAT cobrado pela AliExpress | **Não** abatido por padrão | Só abater se um contador confirmar |

O frete cobrado do cliente (£2.99 abaixo de £35) **não** entra no cálculo. É uma folga de segurança.

### Fórmula

```
vat        = preço / 6
taxas      = preço × 0.10 + 0.06 + preço × 0.05        (pagamento + devoluções)
lucro_pre  = preço − vat − taxas − custo_ali − 2.70     (antes do anúncio)
lucro      = lucro_pre − CPA
margem     = lucro / preço

preço_para_meta = (0.06 + custo_ali + 2.70 + CPA) / (1 − 1/6 − 0.10 − 0.05 − meta)
                = (0.06 + custo + 2.70 + CPA) / 0.5333      com meta de 15%
```

### Regras práticas

- Terminar o preço em **.99**.
- **Nunca deixar produto ativo com o preço que o DSers empurra.** O DSers publica com preço = custo.
  Todo import novo fica em **DRAFT** até ter título reescrito, descrição e preço calculado.
  Isso já aconteceu duas vezes (a última foi a corrente "Imperial" 5mm a £3.43, colocada em rascunho em 27/09).
- Uma peça sozinha paga o próprio frete e as taxas, mas **não paga £8 de anúncio**.
  Por isso o carrinho precisa subir: frete grátis a partir de **£35** e kits ("Sets & stacks").
  Sem kits e sem ticket maior, o anúncio precisa custar menos de ~£6 por venda.

### Preços atuais (produtos ativos)

Custo AliExpress aproximado por peça. Confirmar no DSers antes de repreçar.

| Produto | Preço | Custo Ali | Lucro antes do anúncio | Com £8 de anúncio |
|---|---|---|---|---|
| Box Chain Necklace 1mm | £16.99 | ~£2.30 | £6.55 (39%) | −£1.45 |
| Box Chain Necklace 2mm | £18.99 | ~£2.30 | £7.92 (42%) | −£0.08 |
| Box Chain Necklace 3mm | £19.99 | confirmar | | |
| Link Chain Necklace (todas) | £18.99 | ~£2.40 | £7.82 (41%) | −£0.18 |
| Black Stone Signet Ring | £29.99 | ~£9.43 | £8.30 (28%) | +£0.30 |
| Textured Band Ring | £18.99 | ~£3.61 | £6.61 (35%) | −£1.39 |
| Huggie Hoop Earrings | £14.99 | ~£1.40 | £6.08 (41%) | −£1.92 |
| Imperial Chain Necklace 5mm, 60cm | £27.99 | £3.43 | £12.94 (46%) | +£4.94 (18%) |
| Imperial Chain Necklace 5mm, 70cm | £27.99 | £3.71 | £12.66 (45%) | +£4.66 (17%) |

| Snake Chain Bracelet 2–4mm | £21.99 | £0.35–0.50 | £11.77 (54%) | +£3.77 (17%) |
| Snake Chain Bracelet 6mm | £23.99 | £1.96 | £11.67 (49%) | +£3.67 (15%) |
| Emperor Chain Bracelet 10mm | £27.99 | £3.79 | £12.58 (45%) | +£4.58 (16%) |
| Möbius Cuff Bracelet | £29.99 | £4.81 | £12.92 (43%) | +£4.92 (16%) |
| Statement Hoop Earrings 30–60mm | £28.99 | £3.51–4.45 | £12.60 (43%) | +£4.60 (16%) |
| Faceted Dome Ring 6mm | £23.99 | £1.23 | £12.40 (52%) | +£4.40 (18%) |
| Hollow Chain Ring | £27.99 | £3.99 | £12.38 (44%) | +£4.38 (16%) |

Pedido de 2 peças (ex.: £37.98, 2 × £2.70 de frete) com um único CPA de £8 fica positivo. Esse é o motivo do frete grátis em £35.

## 4. Frete e prazos exibidos

- Taxa de envio na Shopify: **£2.99**, grátis acima de **£35**, descrita como "Usually 8–15 working days".
- Página de produto calcula as datas de entrega (8–15 dias úteis) no bloco `delivery_eta` de `templates/product.json`.
- Barra de progresso do frete grátis: `snippets/flair-free-shipping.liquid` (limite 3500 pence). Se mudar o limite, mudar nos dois lugares.

## 5. Regras de texto (claims)

- **Não usar "stainless steel" / "steel" em títulos, headlines nem anúncios.** O Carlos acha que diminui o valor percebido.
  Falar de durabilidade: waterproof, tarnish-resistant, won't turn your skin green, made for everyday wear.
  Pendente: os títulos de SEO dos produtos ainda têm "Stainless Steel". Ele ainda não decidiu se tira.
- Nada de promessas absolutas para peças banhadas: usar **"tarnish-resistant"**, não "won't tarnish" nem "never fades".
- Não prometer uso no mar ou na piscina, nem embalagem de presente (não foi confirmado).
- **Nada de avaliações falsas** (ilegal no Reino Unido pelo DMCC Act). Avaliações reais só via Judge.me (ainda não instalado).
- Devolução: 14 dias a partir da entrega. Páginas `/pages/returns` e `/pages/delivery`.

## 6. Oferta de boas-vindas e redes

- Código **WELCOME5**: 5% em tudo, uma vez por cliente, não acumula com outros descontos, sem data de fim.
  Aparece no rodapé ("5% off your first order") e é mostrado na mensagem de sucesso depois do cadastro (`sections/footer.liquid`, textos em `sections/footer-group.json`).
  Numa peça só, 5% tira ~£0.75–£1.50 do lucro; num pedido de £35+ o pedido segue positivo com o CPA de £8.
- Instagram: https://www.instagram.com/studios.flair/ (`social_instagram_link` em `config/settings_data.json`). TikTok ainda vazio.

## 6b. Só cor do aço (27/09)

- Decisão do Carlos: **nada dourado, rosé, preto ou arco-íris**. Só o tom prateado natural do aço (menos desgaste).
- Variações coloridas apagadas de todos os produtos; fotos douradas removidas (as ligadas às variações e as que o Carlos marcou).
- Descrições dizem "Finish: silver tone, the natural colour of the steel". Import novo: apagar variações coloridas e checar as fotos antes de publicar.
- Imports de 27/09: 7 publicados (pulseiras snake 2–4mm e 6mm, emperor 10mm, Möbius cuff, argolas 30–60mm, anel domo facetado, anel corrente). 18 em DRAFT por estilo (Viking/celta/turco, religiosos, Medusa, lobo), alegação de saúde ("anti anxiety"), opções sem descrição (A/B/C, 35 "styles") ou pulseira PVD dourada.

## 6c. Lei no Reino Unido — estado em 27/09

Feito: devolução alinhada às Consumer Contracts Regulations (redução por uso em vez de recusa; reembolso em 14 dias do recebimento **ou da prova de envio**; menção ao Consumer Rights Act após 30 dias), brincos com a exceção de higiene correta (só se lacrados), valor do frete (£2.99) na página de produto, sem avaliações falsas, sem "Best sellers" sem base, sem promessas absolutas, sem "silver/925".
Pendente (Carlos):
- Colar o texto novo de devolução em **Configurações → Políticas → Reembolso** (a API não tem permissão): o texto está em `docs/policies.md`.
- **Identificação do vendedor** no site (Electronic Commerce Regulations 2002): nome legal, endereço geográfico e e-mail na página Contact ou em "Informações de contato" (Configurações → Políticas).
- **VAT**: registro no HMRC desde a 1ª venda (vendedor de fora, pedidos ≤ £135) e número de VAT no site depois de registrar.
- **Dados pessoais (UK GDPR)**: taxa anual do ICO; avaliar **representante no Reino Unido** (art. 27) por ser controlador fora do UK; banner de cookies ativo para o Reino Unido antes de ligar pixels de Meta/TikTok; na política de privacidade, citar o ICO como autoridade (hoje cita só a lista da UE).
- **Segurança do produto**: pedir aos fornecedores laudo de níquel (REACH/EN1811), chumbo e cádmio. Brinco e anel ficam em contato prolongado com a pele.
- Idioma da loja em inglês (os títulos das políticas aparecem em português no checkout).

## 7. SEO (27/09)

- Produtos: título/descrição de SEO e texto alternativo em todas as fotos dos 6 ativos.
- Coleções Necklaces, Rings e Earrings: descrição de ~70 palavras (aparece no topo da coleção) + título/descrição de SEO próprios, sem "steel" e sem absolutos.
- Página **/pages/size-guide** (anel US→UK, comprimentos de colar, hoops), no menu do rodapé e linkada na página de produto (anéis, colares, brincos) pelo bloco `size_guide` em `templates/product.json`.
- Home: enquanto *Loja virtual → Preferências* não tiver título/descrição, o tema usa `flair_home_title` / `flair_home_description` (Tema → Configurações → Flair). Também vale para o compartilhamento em redes (`snippets/meta-tags.liquid`).
- Decisões do Carlos pendentes: tirar do ar Bracelets, Sets & Stacks e "Página inicial" (vazias); página "Política de Privacidade — Protocolo: Nutrição e Treino" publicada no domínio; renomear a loja para "Flair Studio"; manter ou não "stainless steel" nos títulos de SEO dos produtos.
- A fazer fora do código: Google Search Console (enviar `/sitemap.xml`), Google Merchant Center, apagar o CNAME `pt.` do Wix.

## 8. Pendências

- ~~Corrente "Imperial" 5mm~~ resolvida em 27/09: título, descrição, SEO, tags (`necklace` → coleção Necklaces), handle `imperial-chain-necklace` e preço £27.99 pela fórmula; ativa e publicada na loja virtual.
- Figaro (não é inox) e "Square Pearl Buddha chain" em rascunho: trocar ou decidir.
- Importar pulseira e corrente cubana para montar kits, e reativar a seção `sets` da home (está `disabled` em `templates/index.json`).
- Fazer um pedido de teste completo.
- Instalar Judge.me.
- Planejar a campanha de teste em Meta e TikTok e trocar o CPA estimado (£8) pelo real.
- Opcional: apagar o CNAME `pt.flairstudio.co.uk` que ainda aponta para o Wix.
