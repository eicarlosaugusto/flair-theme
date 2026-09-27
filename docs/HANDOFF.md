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

## 6. Pendências

- Corrente "Imperial" 5mm (import de 27/09) em DRAFT: reescrever título, descrição e preço antes de ativar.
- Figaro (não é inox) e "Square Pearl Buddha chain" em rascunho: trocar ou decidir.
- Importar pulseira e corrente cubana para montar kits, e reativar a seção `sets` da home (está `disabled` em `templates/index.json`).
- Fazer um pedido de teste completo.
- Instalar Judge.me.
- Planejar a campanha de teste em Meta e TikTok e trocar o CPA estimado (£8) pelo real.
- Opcional: apagar o CNAME `pt.flairstudio.co.uk` que ainda aponta para o Wix.
