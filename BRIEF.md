# BRIEF: Redesign Flair Studio

Método: skill `sites-incriveis` (entrevista → jornada → trava anti-repetição → construção → verificação).
Status: **entrevista concluída. Aguardando "pode ir" para começar o código.**

## Restrições fixas (não se mexe)
- Produtos, variantes, preços, tags (`necklace`, `ring`, `bracelet`, `earrings`, `set`) e coleções: intactos.
- Checkout, carrinho e botões de compra: continuam os nativos da Shopify (nenhum link de checkout é reescrito).
- Menus (`main-menu` e menus do rodapé) e a estrutura de navegação: mesmos itens, mesmos destinos.
- Integração DSers: produto novo entra e já herda o design, sem tratar foto nem configurar nada.
- Apps (Judge.me depois, etc.): o tema mantém os blocos de app do Dawn.

**Escopo:** não é uma landing page que joga para a loja. É o **tema Shopify inteiro** redesenhado: home, coleção, produto, carrinho, cabeçalho e rodapé. As animações entram só onde ajudam a vender, nunca atrapalhando navegar ou comprar.

---

## As 7 respostas

### 1. O que é e pra quem é
- **Negócio:** Flair Studio vende joias de aço unissex com pegada streetwear: duráveis, à prova d'água e que não escurecem.
- **Visitante:** jovem do Reino Unido, 18–30, homem ou mulher, que usa streetwear e quer peças que aguentem o dia a dia sem ficar verdes nem perder o brilho, por um preço acessível.
- **Tráfego:** Instagram Ads e TikTok Ads, ou seja, **celular primeiro**. Muita gente cai direto no produto, não na home.

### 2. Vibe
- **Cru, metálico, noturno, confiante, com um toque de sofisticado.** Tem que ser algo que a pessoa deseja, não só compra.
- **O nome:** FLAIR é o distinto, porém forte. Diferente, mas com estilo.
- **Referências (fora de sites):** estacionamento de Londres à noite (luz dura sobre metal), capa da *i-D*, clipe do Skepta, e a loja/embalagem da Byredo para o lado sofisticado.

### 3. Caminho do visitante
Proposta aprovada, com a cena "Na pele" removida (sem fotos de campanha). Ver jornada abaixo.

**Leitura de lojas do mesmo território:**
- **Vitaly** (aço, genderless, TikTok): vende o aço como engenharia, com promessa curta e repetida → na Flair a promessa vira *prova visual*, não parágrafo.
- **Hatton Labs** (Londres, streetwear): identidade britânica e imagem editorial → sem fotos de campanha, a Flair ganha o lado editorial pela **tipografia e composição**.
- **Missoma / Mejuri**: segunda foto no hover → no celular, troca por toque/deslize.
- **O genérico do mercado:** grid simétrico de 4 colunas, fundo branco, banner com texto centralizado. É disso que a Flair foge.

### 4. O que ele precisa acreditar no final
> **"Tem cara de marca cara, cabe no meu bolso, e eu nunca vou precisar tirar. É a minha assinatura."**

### 5. Energia e pico
Pico escolhido: **a Prova** (água, suor, dia a dia). É a promessa que só a Flair faz e não depende de fotos novas.

### 6. Movimento-assinatura
**"O brilho que segue você"**: uma faixa de luz passa pelo metal acompanhando o dedo (celular) ou o mouse (computador). Feita em código por cima da foto, aplica-se sozinha a **qualquer produto, inclusive os que a DSers importar depois**. Sutil, desligável no editor do tema, desligada para quem pede movimento reduzido.

### 7. Materiais existentes
- **Logo:** não há. Wordmark **FLAIR** em texto, desenhado com a fonte de display.
- **Foto/vídeo de campanha:** não há. A abertura usa a imagem atual do banner + tipografia forte. Nada de imagem gerada.
- **Vitrine:** coleção atual da home (`all`, "Best sellers").
- **Avaliações:** **não vamos inventar avaliações.** Além de ser regra da skill, avaliação falsa é proibida por lei no Reino Unido (DMCC Act 2024, em vigor desde abril de 2025, com multa de até 10% do faturamento pela CMA). Plano no lugar:
  1. Instalar o **Judge.me já no lançamento** (plano grátis). O tema deixa o espaço das estrelas pronto no card e no produto.
  2. O Judge.me consegue **importar as avaliações reais do produto no AliExpress**. Se usar, mostrar de forma transparente (por exemplo "Reviews of this piece from verified buyers worldwide"), nunca como se fossem clientes da Flair UK.
  3. Até lá, a credibilidade vem de coisas **verdadeiras**: frete rastreado, devolução, VAT incluso, prazo com datas, checkout Shopify seguro.

---

## A jornada da home em cenas

| # | Cena | O que VÊ | O que SENTE | O que passa a ACREDITAR | Energia | Efeito |
|---|---|---|---|---|---|---|
| 1 | **Abertura noturna** | Tela escura, FLAIR gigante, "Steel that keeps its shine" se montando palavra por palavra, imagem do banner atual com luz dura | "Isso não é loja de bijuteria" | Tem cara de marca cara | Alta | Texto que se monta |
| 2 | **A Prova** *(pico)* | Seção presa na tela por ~4 telas de rolagem. Uma peça real da loja no centro; a palavra de fundo troca: **SHOWER → GYM → SEA → EVERY DAY**; a cada passo o brilho passa pela peça de novo | Tensão, depois alívio | Nunca vou precisar tirar | **Pico** | Cena fixa + assinatura |
| 3 | **Vitrine** | Grid assimétrico: 1 peça grande + as outras em ritmo quebrado, fundo Chalk. Preço sempre visível | Desejo com os pés no chão | Cabe no meu bolso | Média | Revelação subindo |
| 4 | **Garantias** | Faixa calma: frete rastreado UK, grátis acima de £35, devolução, VAT incluso | Segurança | Posso comprar sem medo | Calma | Nenhum (respiro) |
| 5 | **Por categoria** | NECKLACES / RINGS / EARRINGS em tipo enorme, alinhado à esquerda; a foto aparece ao tocar/passar o mouse | Curiosidade, escolha | Tem a minha peça aqui | Média-alta | Foto revelada no toque |
| 6 | **Fechamento** | Fundo Ink, uma frase e **um** botão: Shop all. Rodapé com newsletter e links | Decisão | É a minha assinatura | Calma | Nenhum |

Cenas vizinhas nunca repetem energia nem família de efeito. "Sets & stacks" continua desativada, como está hoje, até ter produtos.

## Páginas além da home
- **Produto** (onde o anúncio cai): galeria grande com deslize no celular, título em display, preço grande, botão fixo no celular (já existe), promessas logo abaixo do botão, abas de detalhes/entrega/devolução (já existem), "combina com" no fim. Brilho-assinatura na galeria.
- **Coleção:** cabeçalho editorial (nome enorme + contagem de peças), grid 2 colunas no celular e 3 no computador com ritmo quebrado a cada 7 peças, segunda foto ligada, filtros atuais mantidos.
- **Carrinho (drawer):** barra de frete grátis (já existe) com a nova identidade, resumo limpo, checkout nativo.
- **Cabeçalho:** wordmark FLAIR central, menu atual, fundo que escurece ao rolar. **Rodapé:** Ink, fechamento forte.

---

## Direção de design

### Tipografia (Google Fonts)
A dupla atual (Bricolage Grotesque + Instrument Sans) é boa, mas "simpática" demais para *cru, metálico, noturno*. Proposta:

- **Display: Archivo**, eixo de largura variável (62–125) e peso 800. Condensada nos títulos grandes (industrial, streetwear), **expandida** no wordmark FLAIR com espaçamento largo: *distinto, porém forte*.
- **Texto: Geist**, 400/500/600. Grotesca técnica e limpa, com números tabulares para preço, que dá o toque sofisticado.
- Escala (px): 13 / 15 / 18 / 24 / 36 / 56 / 88 / 140 (a abertura pode passar disso no computador). Texto corrido nunca abaixo de 15px.
- Rótulos pequenos em caixa alta com espaçamento ~0.08em.

### Cor
A paleta do `BRAND.md` se mantém, com os papéis afinados:
- **Ink #111315**: fundo das cenas noturnas (abertura, prova, fechamento) e o texto.
- **Chalk #F2F3F1**: fundo principal das cenas de compra (vitrine, coleção, produto).
- **Stone #E3E5E3**: fundo das fotos de produto. As fotos brancas da DSers se fundem nele (`mix-blend-mode: multiply`), unificando o catálogo sem tratar imagem.
- **Gold #C9A45C**: o **único** acento. Aparece poucas vezes: botão na seção escura, a faixa de brilho e a barra de frete.
- **Oxblood #6E1F24**: só o selo de promoção.

### Micro-interações nos produtos
- Brilho-assinatura passando pelo metal (toque/mouse).
- Segunda foto ao passar o mouse ou tocar, no celular por deslize.
- Nome e preço com sublinhado que "corre" no hover; botão Quick add aparece por baixo.
- Tudo animado só com `transform`/`opacity`; nada disso roda para quem pede movimento reduzido.

---

## Auditoria: onde a loja atual tem cara de template

| Componente atual | Onde está genérico | O que muda |
|---|---|---|
| **Tema base** | É o Dawn 16 com uma camada de 109 linhas de CSS (`assets/flair.css`). A estrutura de todas as páginas é a do Dawn. | Nova camada de design completa + seções próprias da Flair; o Dawn continua por baixo (checkout, carrinho, filtros e apps seguem funcionando). |
| **Fontes** | `settings_data.json` ainda aponta para Assistant; Bricolage/Instrument Sans entram por cima via CSS, com risco de "piscar" a fonte errada. | Uma fonte de display e uma de texto, carregadas uma vez só, com pré-conexão. |
| **Home: banner** (`image-with-text`) | Layout padrão do Dawn: imagem de um lado, texto do outro, título + botão. | Abertura noturna em tela cheia, tipográfica (cena 1). |
| **Home: diferenciais** (`multicolumn`) | O clássico "3 ícones/colunas centralizados", é a cara mais reconhecível de template. | Vira a cena da Prova (pico) + a faixa de Garantias. |
| **Home: "Shop by piece"** (`collection-list`) | 3 cartões iguais com título sobre degradê. | Lista tipográfica grande com foto revelada (cena 5). |
| **Home: "Best sellers"** (`featured-collection`) | Grid simétrico de 4 colunas × 2 linhas, igual a milhares de lojas. | Vitrine assimétrica (cena 3). |
| **Cards de produto** | Zoom de 3% no hover, sem segunda foto, fundos de foto desiguais vindos da DSers. | Fundo Stone unificado, segunda foto, brilho-assinatura, preço e nome com hierarquia melhor. |
| **Coleção** | Banner padrão + grid de 4, `show_secondary_image` desligado, proporção "adapt" (cada foto de um tamanho). | Cabeçalho editorial, proporção fixa, grid com ritmo, segunda foto ligada. |
| **Produto** | Galeria com miniaturas padrão, título e preço no tamanho padrão do Dawn. | Galeria maior com deslize, título em display, preço em destaque, promessas perto do botão. |
| **Cabeçalho** | FLAIR em Bricolage, header branco padrão. | Wordmark desenhado em Archivo expandida; comportamento noturno sobre a abertura. |
| **Rodapé** | Rodapé Dawn com colunas de links. | Fechamento em Ink com hierarquia clara; mesmos links. |

---

## Trava anti-repetição (`construcoes.md`)
O registro da skill está vazio, então este é o primeiro build e não há conflito. Ao final, a linha desta construção entra no registro: abertura tipográfica noturna · pico em cena fixa com palavras trocando · brilho que segue o dedo · Ink/Chalk/Gold · 6 cenas.

## Próximos passos (depois do "pode ir")
1. Construção na branch `claude/inspiring-wozniak-4t064k`, em commits pequenos por página.
2. Verificação com screenshots rolando (celular, computador e movimento reduzido), usando os scripts da skill.
3. Você publica numa **cópia do tema** na Shopify para revisar antes de ativar.
4. Registrar a construção no `construcoes.md` e atualizar o `BRAND.md` com a tipografia nova.
