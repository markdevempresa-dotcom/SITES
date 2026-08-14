# LEITURA DAS REFERÊNCIAS — v2 (clínico geral)

> Referências novas, pedidas para a segunda peça: internacionais, atuais, com animação.
> Mesma regra do §4: transfere-se **MEDIDA, MÉTODO e OBRIGAÇÃO**; nunca **VALOR**.
> Todas foram **baixadas cruas** (HTML + folhas de estilo externas) e medidas por contagem — nenhuma leitura
> de screenshot.

---

## 1. As cinco referências e por que cada uma entrou

| | Site | País | Por que entrou |
|---|---|---|---|
| **R1** | [southcliffdentalgroup.com](https://southcliffdentalgroup.com/) | Reino Unido | Awwwards *Honorable Mention*. Experiência 3D interativa — usa `canvas`. |
| **R2** | [dentalbrothers.com](https://dentalbrothers.com/) | EUA (Mesa, AZ) | Citado em várias listas de 2026 por transição de rolagem e fundo escuro. É o mais **denso** dos odontológicos. |
| **R3** | [theaventuradentists.com](https://theaventuradentists.com/) | EUA (Miami, FL) | Citado como referência de *luxury branding* em odontologia: neutros champanhe e serifa. |
| **R4** | [linear.app](https://linear.app/) | EUA | Fora do setor, e de propósito: é hoje o **teto técnico** de interface animada e contida. |
| **R5** | [vercel.com](https://vercel.com/) | EUA | Fora do setor. Entrou pelo **CSS moderno de produção**: `oklch`, container queries. |

> Incluir duas referências fora da odontologia segue a premissa original do briefing, que mandava usar
> **sites de advocacia** como teto de nível. O setor não define o teto técnico; quem define é quem está
> na fronteira.

## 2. Densidade e estrutura — medido

```
                      tags   palavras   <svg>  <img>  <a>   <button>  campos  <h1>
R1  southcliff          445       610      9     14     20      4        0      1
R2  dentalbrothers    1.151     2.420     22     25    136      1       17      2  ← defeito
R3  aventura            466       658      0     29     33      0        0      0  ← defeito
R4  linear             4.354     1.590    180     32     76     89        5      1
R5  vercel             1.085       543     46     19    165     11        3      1
```

## 3. Movimento — medido no CSS externo real

```
                    @keyframes   easings distintos   durações distintas   @font-face   reduced-motion
R1  southcliff            5              3                  12                1              1
R2  dentalbrothers        2              0                  12                0              2
R3  aventura              0              0                   0                3              0   ← defeito
R4  linear              350              0                   —                —              —
R5  vercel                2              2                   —                —              —
```

Easings da R1: `cubic-bezier(.4,0,.2,1)` · `cubic-bezier(.4,0,1,1)` · `cubic-bezier(0,0,.2,1)`
Durações da R1: `1s 2s 2.5s 3s 4s 5s 6s 8s 15s 20s 22s 35s`
Durações da R2: `10ms 0.3s 1s 1.25s 2s 3s 5s 7s 10s 20s 75s`
Fontes da R3: `Asap` · `Nanum Myeongjo` · `Quicksand`
Fonte da R1: `Century Gothic`

> **Os 350 `@keyframes` da R4 não são 350 animações.** É o sistema de design inteiro da Linear entregue
> como CSS crítico inline. O número mede **repertório disponível**, não movimento na tela — e é justamente
> a distinção que o §4 manda fazer entre medida e valor.

## 4. Repertório técnico em uso

| Recurso | R1 | R2 | R3 | R4 | R5 |
|---|---|---|---|---|---|
| `canvas` | 4 | 23 | — | — | 4 |
| `lottie` / `rive` | — | 4 | 2 | 5 | — |
| `:has()` | — | 2 | 3 | — | — |
| `clip-path` | — | — | — | 15 | 1 |
| `position: sticky` | — | 14 | — | — | 4 |
| `mix-blend-mode` | — | — | — | — | 3 |
| **`oklch()`** | — | — | — | — | **18** |
| **`@container`** | — | — | — | — | **5** |
| `requestAnimationFrame` | — | — | — | — | 10 |
| `IntersectionObserver` | — | — | 1 | — | — |
| `matchMedia` | — | 1 | 2 | 1 | 1 |
| `aria-current` | — | 2 | — | — | — |
| `loading="lazy"` | 4 | 50 | — | 30 | 12 |
| `srcset` | — | 7 | 61 | — | — |
| `.webp` | 46 | 47 | 82 | — | 59 |
| **`mousemove`** | — | — | **2** | — | — |
| `animation-timeline` / `view()` | — | — | — | — | — |
| `view-transition` | — | — | — | — | — |

**Duas leituras que valem mais que o resto da tabela:**

1. **Nenhuma das cinco usa `animation-timeline` ou `view()`.** A animação orientada por rolagem, hoje nativa
   em CSS, ainda é feita por JS em todas elas. É espaço aberto.
2. **`oklch` e `@container` só aparecem na R5**, que é a única fora do setor. Nenhum site odontológico
   medido usa CSS de cor moderno.

## 5. Obrigações extraídas **pela negativa** — os defeitos a não repetir

| Defeito | Onde | Por que importa |
|---|---|---|
| **Zero `<h1>` na página** | R3 aventura | Quebra hierarquia semântica e indexação. Uma clínica cuja principal fonte de paciente é busca local não pode se dar a isso. |
| **Dois `<h1>`** | R2 dentalbrothers | Mesmo problema pelo outro lado. O §11 exige um único `h1` por página. |
| **`mousemove` em uso** | R3 aventura | O §9 proíbe explicitamente. É o listener mais caro que existe e não entrega nada que `:hover` não entregue. |
| **`prefers-reduced-motion` ausente** | R3 aventura | E ela roda animação Lottie. Movimento involuntário para quem pediu para não ter. |
| **Zero campo de formulário** | R1, R3 | O único caminho de contato é telefone. Perde quem não liga — que é boa parte do público que **tem medo**. |

## 6. O piso consolidado da v2

| Métrica | Melhor referência | Piso adotado na v2 | Origem |
|---|---|---|---|
| tags na página | **1.151** (R2, o melhor odontológico) | **≥ 1.151** | §4 |
| palavras visíveis | **2.420** (R2) | **≥ 2.420** | §4 |
| `<svg>` | **180** (R4) · 46 (R5) | **≥ 46** | §4 — a v1 tinha 38; o piso sobe |
| controles interativos | **154** (R2: 136 a + 1 button + 17 campos) | **≥ 60** *(ver nota)* | §4 |
| `@keyframes` | 350 (R4) · 5 (R1) | **14 a 15** | piso §4 vs. teto §9 |
| easings distintos | 3 (R1) | **1** | §9 |
| durações distintas | 12 (R1 e R2) | **≤ 4** | §9 |
| famílias tipográficas | 3 (R3) | **exatamente 2** | §6 |
| `prefers-reduced-motion` | 2 (R2) | **global** | §9 |
| `oklch` / `@container` | só R5 | **adotar** | repertório disponível |
| `animation-timeline` / `view()` | **nenhuma** | **adotar** | espaço aberto |

> **Nota sobre os 154 controles da R2.** O número é inflado por menu mega-drop com 136 links — é arquitetura
> de site institucional grande, não densidade de interação. O piso honesto para uma one-page é o da v1
> (67 controles), e a v2 mira **acima de 60** com interações reais, não com links de menu.

## 7. Portão anti-clone — a v2 precisa diferir de **seis** peças

Diferente da v1, que só precisava não colidir com as referências, a v2 também não pode colidir com a **v1**.

| Eixo | v1 (Vértice) | R1 | R2 | R3 | R4 | R5 | **v2 (proposta)** |
|---|---|---|---|---|---|---|---|
| Luminosidade | **escuro** | claro | escuro | claro | escuro | escuro | **claro** |
| Base | carvão `#07090A` | branco | preto | champanhe | quase-preto | preto | **papel neutro quente** |
| Acento | teal-titânio | azul institucional | branco | dourado/champanhe | roxo-azul | branco/gradiente | **volt (verde-limão) + argila** |
| Tipografia | Fraunces (serifa) + Sora | Century Gothic | ícones + sistema | Asap + Nanum Myeongjo + Quicksand | grotesca tipo Inter | Geist | **Bricolage Grotesque + Instrument Sans** |
| Direção | instrumento de precisão | 3D imersivo | clínica moderna escura | spa de luxo | produto SaaS | plataforma dev | **manual de prevenção, claro e didático** |

Nenhum eixo coincide com nenhuma das seis. **Aprovado para a Fase 2.**

O ponto mais importante desta tabela: a v1 é **escura, premium e de especialista**; a v2 é **clara, didática
e de porta de entrada**. A diferença visual não é decorativa — ela espelha a diferença de posicionamento
entre um cirurgião-dentista com duas especialidades registradas e um clínico geral que atende urgência,
faz prevenção e **encaminha**.
