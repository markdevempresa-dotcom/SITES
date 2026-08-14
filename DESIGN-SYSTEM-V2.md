# DESIGN SYSTEM — v2 · Clínica Aroeira · **Manual do Paciente**

> Segunda peça, **reconstruída**. A primeira tentativa trocou cor, fonte e raio mas manteve o esqueleto da
> v1 — cabeçalho com nav, eyebrow numerada por seção, H2 + lead + cards + convite, trilho de pontos,
> acordeão como interação principal. Era a v1 repintada, e a crítica foi justa.
>
> Esta versão troca a **arquitetura de leitura**. A peça deixa de ser uma landing page e passa a ser um
> **objeto impresso**: capa, sumário, nove capítulos com coluna fixa e notas de margem, colofão.
>
> A v1 (Vértice) segue intacta em `site/` e tem `DESIGN-SYSTEM.md` próprio.

---

## 1. O que mudou, eixo por eixo

| Eixo | v1 — Vértice | v2 — Aroeira (Manual) |
|---|---|---|
| **Gênero** | landing page | **livro / manual técnico** |
| **Navegação** | cabeçalho com 9 links + trilho de pontos | **sumário navegável** + cabeçalho corrido que diz em que capítulo você está |
| **Unidade de conteúdo** | seção com eyebrow → H2 → lead → cards → convite | **capítulo** com marcador fixo, coluna de texto e coluna de margem |
| **Corpo de texto** | sans (Sora) | **serifa (Newsreader)** |
| **Display** | serifa (Fraunces) | **grotesca expandida em caixa-alta (Archivo, `wdth` 112–118)** |
| **Interação principal** | acordeão, stepper, interruptor | **referência cruzada no meio do texto** (`capítulo 05 ↗`) |
| **Aparato editorial** | nenhum | **capitular, nota de margem, citação destacada, ficha numerada, colofão** |
| **Luminosidade** | escuro dominante | **três superfícies em revezamento: creme, tinta e vermelhão chapado** |
| **Geometria** | raio 3px | **raio 0** — impresso não tem canto arredondado |
| **Easing** | desaceleração pura | **assentamento seco, sem ultrapassagem** |
| **Movimento** | halo, respiração, órbita | **cortina, fio que corre, tinta que assenta** — nada pulsa, nada flutua |

**O critério:** um manual impresso não tem menu, tem sumário; não tem "seção", tem capítulo; não tem
"saiba mais", tem referência cruzada. Trocar isso muda a experiência de leitura inteira — trocar a cor,
não.

---

## 2. Cor — creme, tinta e vermelhão

### 2.1 Superfícies

| Token | Hex | Papel |
|---|---|---|
| `--paper-0` | `#F2EDE1` | creme — o papel |
| `--paper-1` | `#E8E1D1` | creme sombreado |
| `--paper-2` | `#DBD2BE` | **pior superfície clara** |
| `--ink` | `#16130F` | preto quente — a tinta |
| `--red` | `#BC2D18` | **vermelhão chapado — a terceira superfície** |

O bloco de vermelhão inteiro é o gesto de risografia, e não existe na v1 nem em nenhuma das cinco
referências medidas. Três capítulos usam essa superfície: **04** (o que é feito), **07** (urgência) e
**09** (contato).

### 2.2 Texto — pior contraste calculado

| Token | Hex | Sobre | **Contraste** |
|---|---|---|---|
| `--ink` | `#16130F` | `--paper-2` | **12,32:1** AAA |
| `--ink-2` | `#3A342B` | `--paper-2` | **8,19:1** AAA |
| `--ink-3` | `#544B3E` | `--paper-2` | **5,70:1** AA |
| `--sand` | `#A79C8A` | `--ink` | **6,85:1** AA |
| `--paper-0` | `#F2EDE1` | `--ink` | **15,85:1** AAA |
| `--paper-0` | `#F2EDE1` | `--red` | **5,10:1** AA |
| `--red` | `#BC2D18` | `--paper-0` | **5,10:1** AA |
| `--red-ink` | `#FF6A4D` | `--ink` | **6,54:1** AA |
| *(na superfície vermelha)* `--fg-muted` | `#F7E9E4` | `--red` | **5,03:1** AA |

> **A decisão que a medição impôs.** O vermelhão que se queria era `#D93A22` — mais vivo. Ele mede
> **3,93:1** com creme, nos **dois** sentidos, e reprova. Foi escurecido até `#BC2D18`, o mais vivo em que
> creme ainda passa. Ganho colateral: a mesma cor serve como **texto sobre creme** e como **bloco com
> texto creme**, o que dispensa um segundo token.

> **Uma reprovação capturada em auditoria:** `--fg-muted` no vermelhão começou em `#F0D6CE` e media
> **4,31:1**. Só apareceu na medição do contraste renderizado, com o fundo composto real. Corrigido para
> `#F7E9E4` (5,03:1).

### 2.3 Bordas

| Token | Hex | Contraste | Piso |
|---|---|---|---|
| `--ctl-lite` | `#7E7464` sobre creme | **3,93:1** | WCAG 1.4.11 (3:1) |
| `--ctl-dark` | `#766B5C` sobre tinta | **3,40:1** | idem — `#5E6857` dava **2,53** e reprovou |

### 2.4 Revezamento de superfície

Nenhum capítulo adjacente repete superfície. Verificado no navegador: **0 pares iguais** em 11 transições.

```
capa      paper
sumário   ink
01        paper      05        paper
02        ink        06        ink
03        paper      07        red
04        red        08        paper
                     09        red      colofão   ink
```

---

## 3. Tipografia — grotesca expandida + serifa

| Papel | Família | Por quê |
|---|---|---|
| **Display** | **Archivo** (variável, eixo `wdth` 62–125) | Levada a `wdth` 112–118 e `wght` 700–800, em caixa-alta, vira tipo de cartaz. É o que dá à capa e aos números de capítulo a presença de impresso. |
| **Corpo** | **Newsreader** (serifa variável, eixo `opsz`) | **Serifa no corpo é a mudança estrutural mais forte:** a v1 e a primeira tentativa da v2 usam sans no corpo. Serifa em coluna medida de 62ch lê como página de livro. |

Corpo em `clamp(1.125rem, 1.03rem + .38vw, 1.3rem)` — maior que a v1, porque serifa pede corpo maior e
porque o público inclui idosos.

Proibidas e ausentes: Inter, Roboto, Arial, Open Sans, Lato, Montserrat, Poppins.
Também evitadas por já estarem em uso: Fraunces e Sora (v1), Bricolage Grotesque e Instrument Sans
(primeira tentativa da v2), Century Gothic, Asap, Nanum Myeongjo, Quicksand (referências).

---

## 4. A grade do capítulo

```
┌──────────┬─────────────────────────────┬──────────────┐
│  FIXO    │  COLUNA DE TEXTO (62ch)     │   MARGEM     │
│          │                             │              │
│   04     │  ┌ capitular                │  ┌ nota      │
│  ────    │  O Dr. Caio atua como…      │  │ POR QUE   │
│  O QUE É │  …capítulo 05 ↗…            │  │ IMPORTA   │
│  FEITO   │                             │  └           │
│          │  ▬▬▬▬ citação destacada      │              │
│  ■■■□□□  │                             │              │
│   ⊞      │  01 ficha  02 ficha         │              │
└──────────┴─────────────────────────────┴──────────────┘
   sticky            max 62ch                 13rem
```

- **Coluna fixa** (`position: sticky`) com número do capítulo, fio, rótulo, pontos de progresso e uma
  figura de marcação. Some no celular, onde vira um bloco no topo.
- **Coluna de margem** com as notas. No celular a nota cai abaixo do parágrafo, com fio à esquerda.
- **Capitular** na primeira letra do primeiro parágrafo de cada capítulo.

---

## 5. Movimento

| Item | Valor |
|---|---|
| Easing | **1** — `cubic-bezier(.16, .84, .28, 1)`, assentamento seco, **sem ultrapassagem** |
| Durações | **4** — 120ms · 340ms · 760ms · 18s |
| `@keyframes` | **14** |
| Listeners de scroll | **0** |
| `mousemove` | **0** |
| Propriedades animadas | só `transform`, `opacity`, `clip-path`, `stroke-dashoffset` |

**Revelação por rolagem em CSS puro** com `animation-timeline: view()`; a barra de leitura do cabeçalho
corrido usa `animation-timeline: scroll(root)`. O `IntersectionObserver` só entra onde o recurso não
existe (`html.no-vt`). Confirmado no navegador: `CSS.supports` retorna `true` e a classe de queda **não**
é adicionada.

**O vocabulário do movimento mudou junto com o gênero.** A v1 tem `breathe`, `orbit` e `glow` — halo,
respiração, brilho. Esta tem `curtain`, `ruleRun`, `inkDraw`, `press` — cortina, fio que corre, tinta que
traça, bloco que assenta. Nada pulsa e nada flutua: só a granulação do papel se move, muito devagar.

Sob `prefers-reduced-motion: reduce`, a página reporta **0 animações existentes** e **0 elementos presos
invisíveis**.

---

## 6. Portão da fase

| Critério | Situação |
|---|---|
| Estrutura diferente da v1 | ✅ 11 eixos trocados (§1) |
| Paleta diferente da v1 e das 5 referências | ✅ creme + tinta + vermelhão chapado |
| Contraste calculado por token | ✅ §2, com 2 reprovações capturadas e corrigidas |
| Exatamente 2 famílias, nenhuma repetida | ✅ Archivo + Newsreader |
| Uma postura geométrica | ✅ raio **0** em tudo |
| Revezamento de superfície com regra | ✅ 0 adjacentes iguais |
| Orçamento de movimento | ✅ 1 easing · 4 durações · 14 keyframes · 0 listener |
| Densidade §7 | ✅ 11 de 11 capítulos acima do piso |
