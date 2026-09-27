# BRIEF — Redesign Flair Studio

Entrevista da skill `sites-incriveis` (respostas como a pessoa falou).
Restrições fixas: manter 100% dos produtos, tags, coleções, links de checkout da Shopify e navegação existentes.

**Escopo:** não é uma landing page que joga para a loja. É o **tema Shopify inteiro** redesenhado — home, coleção, produto, carrinho, header/footer — como um site bem feito e atrativo. Os princípios da skill (jornada em cenas, um pico, movimento-assinatura, anti-template) valem para o site todo; as animações de rolagem entram onde ajudam a vender, sem atrapalhar navegação e compra.

## 1. O que é isso e pra quem é?
- **Negócio:** Flair Studio vende joias de aço unissex com pegada streetwear: duráveis, à prova d'água e que não escurecem.
- **Visitante:** jovem do Reino Unido, homem ou mulher, entre 18 e 30 anos, que usa streetwear e quer peças que aguentem o dia a dia sem ficar verdes nem perder o brilho, por um preço acessível.
- **Origem do tráfego:** Instagram Ads e TikTok Ads → visita majoritariamente no celular, vinda de vídeo curto, muitas vezes caindo direto em produto ou coleção.

## 2. Vibe
- **Palavras:** cru, metálico, noturno, confiante — com um toque de sofisticado.
- **Desejo:** a peça tem que parecer algo que a pessoa quer e deseja, não só compra.
- **Referências fora de sites (propostas, a confirmar):** estacionamento de Londres à noite (luz dura sobre metal), capa da revista *i-D*, clipe do Skepta; e, para o toque sofisticado, a embalagem/loja da Byredo.

## 3. Caminho do visitante
Aprovado: seguir a proposta.

**Home**
1. Abertura noturna: uma peça brilhando no escuro, com a frase "Steel that keeps its shine".
2. Prova: água, suor e o dia a dia, sem escurecer (o desejo vira confiança).
3. Vitrine: mais vendidos em grid assimétrico, uma peça grande e as outras em volta.
4. Por categoria: Necklaces, Rings e Earrings (coleções e tags atuais, sem mudança).
5. ~~Na pele~~ — **removida** (exigiria sessão de fotos/IA que não existe).
5. Garantias: frete rastreado para todo o UK, devolução, preço com VAT incluso.
6. Por categoria entra depois das garantias, como lista tipográfica grande (ver pergunta 5).
7. Fechamento: uma chamada só, levando para a loja.

**Página de produto** (onde cai boa parte do tráfego de anúncio): galeria grande → preço e comprar → promessas (à prova d'água, não escurece) → detalhes e combinações.

**Leitura de referências (lojas do mesmo território)**
- **Vitaly** (Toronto, aço, genderless, forte no TikTok): vende o aço como "engenharia" — tarnishproof, waterproof, garantia. Promessa técnica curta, repetida. → Flair já tem a promessa; ela precisa aparecer como *prova visual*, não como parágrafo.
- **Hatton Labs** (Londres, streetwear, vendida em End./SSENSE/Selfridges): britanicidade + cultura pop; imagem de campanha editorial, peça em pele e roupa real. → cena "Na pele" é onde a Flair ganha o desejo.
- **Missoma / Mejuri**: vitrine limpa, segunda foto no hover, página contando como a peça é feita. → no celular não existe hover: a troca de foto precisa funcionar por toque/deslize.
- **Padrão comum de mercado:** grid simétrico de 4 colunas, fundo branco, banner com texto centralizado — é exatamente o que tira a cara de "template"; a Flair deve fugir disso na home e manter a clareza no produto.

## 4. O que ele precisa acreditar no final
As três convicções, fundidas em uma frase:

> **"Tem cara de marca cara, cabe no meu bolso, e eu nunca vou precisar tirar — é a minha assinatura."**

- Desejo (cara de marca cara) → direção de arte, tipografia, fotografia.
- Acessível (cabe no bolso) → preço visível e sem vergonha, frete grátis acima de £35.
- Durável (nunca tirar) → prova visual: água, suor, dia a dia.
- Assinatura (identidade) → peça na pele, styling streetwear.

## 5. Energia e o pico
Decisão: seguir a recomendação — **pico = A. A prova.**
Motivo: é o que separa a Flair das outras (Hatton Labs e Vitaly vendem desejo; a prova de que não escurece é a promessa da marca) e não depende de fotos que talvez ainda não existam.

| Cena | Energia |
|---|---|
| 1. Abertura noturna | Alta |
| 2. Prova (água, suor, dia a dia) | **PICO** — seção presa na tela, rolagem longa |
| 3. Vitrine assimétrica | Média |
| 4. Garantias | Calma |
| 5. Por categoria (lista tipográfica grande, foto aparece no toque/hover) | Média-alta |
| 6. Fechamento | Calma, uma chamada só |

Revisão: cena "Na pele" removida. Categorias trocou de lugar com Garantias e ganhou tratamento editorial para não haver duas cenas calmas vizinhas.

Cenas vizinhas nunca repetem a mesma energia.

## 6. O que só essa página faz (movimento-assinatura)
Proposta: **"O brilho que segue você"** — reflexo de luz passando pelo metal, acompanhando dedo/mouse; no pico, o mesmo reflexo atravessa água e suor.

Preocupação da pessoa: produtos entram pela DSers a qualquer momento, com fotos variadas; não dá para tratar imagem por imagem.
Resposta técnica: o reflexo é uma camada de CSS por cima da foto (faixa de luz com `mix-blend-mode`), aplicada automaticamente em qualquer imagem de produto — zero tratamento de imagem, funciona com produto novo no dia em que entra. Em fundo branco quase não aparece; em metal, aparece como brilho. Intensidade baixa, desligável no editor do tema, respeita movimento-reduzido.
_(aguardando aprovação)_

## 7. Materiais que já existem
_(pendente)_
