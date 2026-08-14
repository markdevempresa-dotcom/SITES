# DESIGN SYSTEM — Vértice Odontologia

> Fase 2. Cada token traz **papel · justificativa · pior razão de contraste calculada**.
> Os contrastes não foram estimados: foram calculados pela fórmula WCAG 2.1 (luminância relativa
> `0.2126R + 0.7152G + 0.0722B` com linearização sRGB). A saída bruta está reproduzida abaixo.

---

## 1. O clichê recusado, e o que veio no lugar

O §6 nomeia o clichê do setor: **azul-ciano sobre branco com sorriso de banco de imagem**. É a assinatura visual
de "template de dentista" e comunica exatamente o oposto de um consultório de referência.

Foi recusado inteiro — não só a cor, mas a **estrutura de valor** dele: fundo branco dominante, acento frio claro,
foto sorridente como herói.

**Direção adotada: "Alta tecnologia" (§6, linha 3) — instrumento de precisão.**
Base grafite quase-preta, superfície secundária óssea quente, acento frio de alta croma usado com parcimônia
severa, mais um metálico contido para a nota premium.

### Por que esta direção, derivada do posicionamento

O posicionamento declarado é **clínico premium + alta tecnologia**, e o público é o adulto 35–60 **que adiou por
medo**. Isso impõe duas coisas contraditórias que a paleta precisa resolver ao mesmo tempo:

1. **Precisão** — o argumento do site é método, medição e previsibilidade. Grafite profundo + acento mineral frio
   é o vocabulário de instrumento científico, não de clínica.
2. **Calma** — quem tem odontofobia associa **branco clínico + luz fria** ao gatilho. Um site dark-first com
   superfície clara **quente** (osso/calcário, não branco) inverte exatamente esse gatilho.

O ciano-sobre-branco falha nos dois: é frio e é claro. Aqui o frio existe (o acento), mas **só sobre o escuro**,
onde ele lê como sinal luminoso e não como parede de consultório. E o claro existe, mas é **quente**, onde lê
como papel e pedra, não como jaleco.

**Teste do §6:** esta paleta pode ser descrita como "azul de clínica"? Não — não há azul nenhum. O acento é um
**teal-titânio** e aparece só sobre grafite. Aprovado.

---

## 2. Cor — a tabela completa

### 2.1 Superfícies escuras

| Token | Hex | Papel | Justificativa |
|---|---|---|---|
| `--ink-900` | `#07090A` | Poço. Hero, tour do espaço, rodapé | O ponto mais fundo da escala. Existe para dar um "chão" onde o acento vira luz. |
| `--ink-800` | `#0B0F11` | Superfície escura padrão | Base de seção. Levíssimo viés ciano-neutro (B > R) evita o preto morto e amarra ao acento. |
| `--ink-700` | `#121819` | Superfície elevada — campos de formulário, painéis | Um degrau, não dois: elevação lida por diferença mínima é o que faz parecer instrumento. |
| `--ink-600` | `#192123` | Cartão sobre superfície escura | **Pior superfície escura de uso comum** — todo texto claro é medido contra ela. |
| `--ink-500` | `#232D30` | Inset, trilho, fundo de tabela zebrada | **Pior superfície escura absoluta.** O `--text-muted` é medido aqui. |

### 2.2 Superfícies claras

| Token | Hex | Papel | Justificativa |
|---|---|---|---|
| `--bone-100` | `#F5F2EB` | Superfície clara padrão | Osso/calcário, **não branco**. O branco puro (`#FFF`) foi recusado: é o gatilho clínico e queima em tela OLED. |
| `--bone-200` | `#EBE6DA` | Cartão sobre superfície clara | Um degrau quente para baixo. |
| `--bone-300` | `#DED7C7` | Inset, tabela, citação | **Pior superfície clara** — todo texto escuro é medido contra ela. |

### 2.3 Texto

| Token | Hex | Papel | Pior superfície | **Pior contraste** |
|---|---|---|---|---|
| `--text-strong` | `#F7F4ED` | Títulos sobre escuro | `--ink-600` `#192123` | **14,90 : 1** ✅ AAA |
| `--text-body` | `#C3CCCB` | Corpo sobre escuro | `--ink-600` `#192123` | **9,99 : 1** ✅ AAA |
| `--text-muted` | `#9BA7A6` | Rótulo, legenda, meta sobre escuro | `--ink-500` `#232D30` | **5,69 : 1** ✅ AA |
| `--text-ink` | `#0B0F11` | Títulos sobre claro | `--bone-300` `#DED7C7` | **13,43 : 1** ✅ AAA |
| `--text-ink-2` | `#394446` | Corpo sobre claro | `--bone-300` `#DED7C7` | **7,01 : 1** ✅ AAA |
| `--text-ink-3` | `#4E5A5C` | Rótulo, legenda sobre claro | `--bone-300` `#DED7C7` | **4,98 : 1** ✅ AA |

> **Um token reprovou e foi corrigido.** O `--text-ink-3` começou em `#5A6668` e mediu **4,14 : 1** sobre
> `#DED7C7` — abaixo do piso de 4,5. Foi escurecido para `#4E5A5C` (**4,98 : 1**). A medição de reprovação e a
> de aprovação estão as duas no §6 deste documento. Registrar a reprovação é o ponto: sem calcular, ela passaria.

### 2.4 Acentos

| Token | Hex | Papel | Pior superfície permitida | **Pior contraste** |
|---|---|---|---|---|
| `--accent` | `#5FD9C4` | Teal-titânio. Acento frio de alta croma — **só sobre escuro** | `--ink-500` `#232D30` | **8,20 : 1** ✅ AAA |
| `--accent-deep` | `#0B6355` | O mesmo acento rebaixado — **só sobre claro** | `--bone-300` `#DED7C7` | **5,00 : 1** ✅ AA |
| `--brass` | `#D9B461` | Latão contido. Numeração de etapa, filete premium — **só sobre escuro** | `--ink-500` `#232D30` | **7,15 : 1** ✅ AAA |
| `--brass-deep` | `#6E5410` | O latão rebaixado — **só sobre claro** | `--bone-300` `#DED7C7` | **4,99 : 1** ✅ AA |

> **Regra travada, derivada da medição:** `--accent #5FD9C4` sobre `--bone-100` mede **1,54 : 1**. É uma reprovação
> catastrófica e é justamente a combinação que todo site de dentista usa (ciano sobre branco).
> **O acento claro nunca é texto sobre superfície clara.** Quando o teal precisa aparecer no claro, usa-se
> `--accent-deep`. Isso é aplicado como token, não como disciplina.
>
> O `--brass` também é **decorativo e de numeração** — nunca corpo de texto longo, mesmo passando em contraste.

### 2.5 Estados

| Token | Hex | Papel | Superfície | **Contraste** |
|---|---|---|---|---|
| `--ok` | `#7FE3A8` | Sucesso de envio | `--ink-600` | **10,49 : 1** ✅ AAA |
| `--danger` | `#FF9B8A` | Erro de campo sobre escuro | `--ink-600` | **8,03 : 1** ✅ AAA |
| `--danger-deep` | `#A3341F` | Erro de campo sobre claro | `--bone-100` | **6,12 : 1** ✅ AA |

### 2.6 Linhas e bordas — dois tokens, dois papéis

Distinção que quase todo sistema erra: **filete decorativo** e **borda de controle** não têm o mesmo piso.

| Token | Hex | Papel | Contraste | Piso aplicável |
|---|---|---|---|---|
| `--line-dark` | `#2A3538` | Filete decorativo sobre escuro | 1,53 : 1 | nenhum — é decoração, não transmite informação sozinho |
| `--line-lite` | `#C8C0AE` | Filete decorativo sobre claro | 1,62 : 1 | idem |
| `--line-ctl-dark` | `#657375` | **Borda de campo/botão** sobre escuro | **3,64 : 1** | ✅ WCAG 1.4.11 (≥3:1) |
| `--line-ctl-lite` | `#8A8270` | **Borda de campo/botão** sobre claro | **3,41 : 1** | ✅ WCAG 1.4.11 (≥3:1) |
| `--focus` | `#5FD9C4` / `#0B6355` | Anel de foco | **11,19 : 1** / **6,41 : 1** | ✅ folgado |

### 2.7 Contraste de botão (texto sobre o próprio acento)

| Combinação | **Contraste** |
|---|---|
| `--ink-800 #0B0F11` sobre `--accent #5FD9C4` (botão primário no escuro) | **11,19 : 1** ✅ AAA |
| `--bone-100 #F5F2EB` sobre `--accent-deep #0B6355` (botão primário no claro) | **6,41 : 1** ✅ AA |

---

## 3. Regra de alternância cromática entre seções

O §6 exige regra explícita e proíbe duas seções escuras coladas virando massa única.

> **Regra:** nenhuma seção adjacente usa a mesma superfície. A alternância é estrita escuro → claro → escuro.
> Onde duas superfícies escuras precisam se tocar (contato → rodapé, que fecham como um bloco só),
> elas usam **degraus diferentes** da escala e são separadas por um filete de 1px em `--line-dark`.

| # | Seção | Superfície | Adjacente igual? |
|---|---|---|---|
| 1 | Hero | `--ink-900` | — |
| 2 | O adiamento | `--bone-100` | não |
| 3 | Quem conduz | `--ink-800` | não |
| 4 | A primeira consulta | `--bone-100` | não |
| 5 | Áreas de atuação | `--ink-800` | não |
| 6 | Tecnologia | `--bone-200` | não |
| 7 | O espaço | `--ink-900` | não |
| 8 | Como conduzimos um caso | `--bone-100` | não |
| 9 | Convênios e horários | `--ink-800` | não |
| 10 | Perguntas frequentes | `--bone-100` | não |
| 11 | Contato | `--ink-800` | não |
| 12 | Rodapé | `--ink-900` | tom diferente + filete |

A troca do §1 para o §2 (poço → osso) é a mais violenta do site, e é de propósito: é o momento em que o texto
passa de "o obstáculo" para "não há sermão nessa cadeira". A cor faz o mesmo movimento que a copy.

---

## 4. Tipografia — exatamente 2 famílias

| Papel | Família | Por que |
|---|---|---|
| **Display** | **Fraunces** (serifa variável, eixos `opsz` e `wght`) | Serifa de contraste alto e eixo óptico real. Traz a nota **premium e humana** que impede o grafite de virar site de startup. As referências medidas usam **só grotescas** (Canva Sans/Open Sans; Inter/Onest) — a serifa é o eixo onde a diferenciação começa (§5 da leitura de referências). Usada com `WONK 0` e `SOFT 0`: precisão, não artesanato. |
| **Texto/UI** | **Sora** (grotesca geométrica variável) | Estrutura levemente técnica, terminações retas, números tabulares legíveis. Faz o "toque tecnológico" no corpo do texto sem gritar. |

**Proibidas como dominante e ausentes do projeto:** Inter, Roboto, Arial, Open Sans, Lato, Montserrat, Poppins.
Nota: **Inter é a família da REF‑2 e Open Sans está na REF‑1** — mais um eixo em que não colidimos.

**Fallbacks declarados** (o site não quebra sem rede):
`Fraunces, 'Iowan Old Style', 'Palatino Linotype', Georgia, serif`
`Sora, 'Segoe UI Variable Text', 'Segoe UI', system-ui, sans-serif`

### Escala tipográfica — fluida, uma só

| Token | Valor | Uso |
|---|---|---|
| `--fs-display` | `clamp(2.75rem, 1.1rem + 6.6vw, 6.75rem)` | H1 do hero |
| `--fs-h2` | `clamp(1.95rem, 1.1rem + 3.4vw, 3.5rem)` | H2 de seção |
| `--fs-h3` | `clamp(1.2rem, 1.02rem + .8vw, 1.6rem)` | H3 de bloco |
| `--fs-lead` | `clamp(1.08rem, .98rem + .55vw, 1.35rem)` | Subtítulo / lead |
| `--fs-body` | `clamp(1rem, .97rem + .16vw, 1.075rem)` | Corpo |
| `--fs-sm` | `.875rem` | Legenda, meta |
| `--fs-xs` | `.75rem` | Rótulo caixa-alta, `letter-spacing: .14em` |

Corpo com `max-width: 68ch`; `line-height` 1.62 no corpo e 1.02 no display.

---

## 5. Espaçamento, geometria e elevação

### 5.1 Escala de espaçamento — única, em variáveis

```
--s-1: .25rem   --s-2: .5rem   --s-3: .75rem   --s-4: 1rem    --s-5: 1.5rem
--s-6: 2rem     --s-7: 3rem    --s-8: 4rem     --s-9: 6rem    --s-10: 8rem
--s-11: 11rem
```

Progressão ~1,5× a partir de `--s-4`. Nenhum valor de espaçamento aparece hard-coded no CSS fora desta escala.

### 5.2 Postura geométrica — uma só

> **`--r: 3px` em absolutamente tudo.** Cartão, botão, campo, imagem, chip, painel.

Sem pílulas (`999px`), sem cantos de 16px, sem misturar. O §6 proíbe misturar postura, e a escolha do raio quase
nulo é semântica: **instrumento de precisão não tem canto arredondado**. O 3px (em vez de 0) existe só para o
anti-aliasing não serrilhar a borda de 1px em tela não-retina.

### 5.3 Elevação — sem sombra difusa

Sombra borrada preta sobre fundo grafite é lama. Elevação aqui é feita por **três meios**, nunca por `box-shadow`
genérico:

1. degrau de superfície (`--ink-800` → `--ink-700` → `--ink-600`);
2. filete de 1px em `--line-dark` / `--line-lite`;
3. um único `--shadow-lift` para estado hover: `0 1px 0 0 color-mix(in oklab, var(--accent) 22%, transparent)`
   — luz na aresta superior, não sombra embaixo.

---

## 6. Saída bruta do cálculo de contraste (evidência)

```
TOKEN                                  SUPERFICIE                                  RATIO  VEREDITO
---------------------------------------------------------------------------------------------------------
--text-strong  #F7F4ED                 sobre ink-800 #0B0F11                       17,53  AAA
--text-strong  #F7F4ED                 sobre ink-600 #192123 (pior escura)          14,9  AAA
--text-body    #C3CCCB                 sobre ink-800 #0B0F11                       11,75  AAA
--text-body    #C3CCCB                 sobre ink-600 #192123 (pior escura)          9,99  AAA
--text-muted   #9BA7A6                 sobre ink-600 #192123 (pior escura)           6,6  AA
--text-muted   #9BA7A6                 sobre ink-500 #232D30 (pior absoluta)        5,69  AA
--text-ink     #0B0F11                 sobre bone-100 #F5F2EB                      17,22  AAA
--text-ink     #0B0F11                 sobre bone-300 #DED7C7 (pior clara)         13,43  AAA
--text-ink-2   #394446                 sobre bone-300 #DED7C7 (pior clara)          7,01  AAA
--text-ink-3   #5A6668                 sobre bone-300 #DED7C7 (pior clara)          4,14  REPROVOU
--accent       #5FD9C4                 sobre ink-800 #0B0F11                       11,19  AAA
--accent       #5FD9C4                 sobre ink-500 #232D30 (pior escura)           8,2  AAA
--accent       #5FD9C4                 sobre bone-100 #F5F2EB                       1,54  REPROVA p/ texto
--accent-deep  #0B6355                 sobre bone-100 #F5F2EB                       6,41  AA
--accent-deep  #0B6355                 sobre bone-300 #DED7C7 (pior clara)             5  AA
--brass        #D9B461                 sobre ink-800 #0B0F11                        9,77  AAA
--brass        #D9B461                 sobre ink-500 #232D30 (pior escura)          7,15  AAA
--brass-deep   #6E5410                 sobre bone-300 #DED7C7 (pior clara)          4,99  AA
ink sobre accent (botao) #0B0F11       sobre #5FD9C4                               11,19  AAA
bone sobre accent-deep   #F5F2EB       sobre #0B6355                                6,41  AA
--danger       #FF9B8A                 sobre ink-600 #192123                        8,03  AAA
--danger-deep  #A3341F                 sobre bone-100 #F5F2EB                       6,12  AA
--ok           #7FE3A8                 sobre ink-600 #192123                       10,49  AAA

--- correcao do token reprovado ---
  #5A6668  ratio=4,14   REPROVOU
  #4E5A5C  ratio=4,98   ADOTADO   (sobre #EBE6DA = 5,73 | sobre #F5F2EB = 6,39)

--- borda de controle (WCAG 1.4.11 exige >=3:1) ---
  #657375 sobre ink-700 #121819 = 3,64   ADOTADO
  #8A8270 sobre bone-100 #F5F2EB = 3,41  ADOTADO
```

---

## 7. Orçamento de movimento (§9) — fechado aqui, executado na Fase 5

| Item | Orçamento | Valor adotado |
|---|---|---|
| Easing | **1** | `--ease: cubic-bezier(.22, 1, .36, 1)` — desaceleração pura. Nada acelera neste site. |
| Durações | **≤4** | `--t-1: 160ms` (micro) · `--t-2: 420ms` (componente) · `--t-3: 900ms` (revelação de seção) · `--t-4: 24s` (ambiente lento) |
| `@keyframes` | **12–15** (piso da REF‑1 = 11) | **14** |
| Listeners de scroll | **1 ou 0** | **0** — `IntersectionObserver` + `animation-timeline: view()/scroll()` |
| `mousemove` | **0** | **0** |
| Propriedades animadas | só `transform`, `opacity`, `clip-path`, `stroke-dashoffset` | idem |
| `prefers-reduced-motion` | obrigatório | desliga tudo, global |

---

## 8. Os 6 estados de todo componente interativo (§9)

| Estado | Mecanismo visual | Nunca |
|---|---|---|
| Repouso | superfície + `--line-ctl-*` | — |
| Hover | filete superior `--shadow-lift` + `translateY(-1px)` em `--t-1` | mudar tamanho de fonte ou layout |
| `:focus-visible` | anel de 2px `--focus` + `outline-offset: 3px` | ser removido |
| Ativo | `translateY(0)` + superfície um degrau abaixo | animação de "clique" longa |
| Desabilitado | `opacity: .45` + `cursor: not-allowed` + `aria-disabled` | sumir |
| Erro | borda `--danger` / `--danger-deep` + `aria-invalid` + texto de erro **com ícone**, nunca só cor | comunicar só por cor |

---

## 9. Sistema gráfico no lugar de fotografia

Decisão de imagem, tomada aqui porque é decisão de **sistema**, não de asset (detalhada em `DECISOES.md`):

O §8 proíbe banco de imagens genérico e o §3.3 proíbe imagem de procedimento, instrumental, material e tecido
biológico. Somado a isso, a persona é **fictícia** — uma "foto da Dra. Helena" seria necessariamente a foto de
outra pessoa, o que reencontra a vedação de **divulgar caso/identificação de terceiro** e destruiria a
credibilidade da peça no primeiro scroll.

**Solução: um sistema gráfico vetorial autoral, desenhado à mão em SVG, com tratamento único no site inteiro.**

| Família gráfica | Onde | O que é |
|---|---|---|
| **Topografia** | hero, tecnologia | curvas de nível derivadas de uma malha — vocabulário de *medição*, que é o argumento do site |
| **Vértice** | espinha, marcadores, favicon | o V da marca como interseção de dois eixos |
| **Planta baixa** | §7 O espaço | as 4 salas desenhadas como arquitetura, em planta — mostra o lugar sem fotografar ninguém |
| **Retrato construído** | §3 Quem conduz | composição geométrica em camadas, explicitamente não-fotográfica, com legenda que declara isso |

**Tratamento único:** todas usam a mesma paleta de 4 tokens, o mesmo peso de traço (`1px` e `1.5px`), a mesma
granulação (`feTurbulence` a `baseFrequency .8`, opacidade 4%) e a mesma temperatura. É o que o §8 chama de
"mesma temperatura, mesmo contraste, mesma granulação" — aqui garantido por construção, já que tudo nasce do
mesmo sistema.

---

## 10. PORTÃO DA FASE 2

| Critério | Situação |
|---|---|
| Paleta derivada do posicionamento e justificada por escrito | ✅ §1 |
| Direção diferente de todas as referências | ✅ dark-first vs. duas light; serifa vs. duas grotescas; teal-titânio vs. azul/roxo Canva e P&B WP |
| Todo token de texto com contraste **calculado** e registrado | ✅ §2.3–2.7 + saída bruta em §6 |
| Token reprovado detectado e corrigido | ✅ `--text-ink-3` 4,14 → 4,98 |
| Exatamente 2 famílias, nenhuma proibida | ✅ Fraunces + Sora |
| Escala de espaçamento única em variáveis | ✅ §5.1 |
| Uma postura geométrica | ✅ `--r: 3px` em tudo, sem pílula |
| Alternância cromática com regra explícita | ✅ §3, com tabela de verificação seção a seção |
| `DESIGN-SYSTEM.md` escrito | ✅ |

**Liberado para a Fase 3.**
