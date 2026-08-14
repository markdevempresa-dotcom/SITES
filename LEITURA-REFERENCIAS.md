# LEITURA DAS REFERÊNCIAS

> **Regra de leitura (§4):** do site de referência transfere-se **MEDIDA, MÉTODO e OBRIGAÇÃO**.
> Nunca **VALOR**. O que está aqui vira **piso** do site da Dra. Helena Sampaio Tomé — nunca molde de aparência.

---

## 0. Observação de partida — as referências mudaram de natureza

A PARTE 0 do prompt previa três referências de **advocacia** em caminhos locais. Os caminhos vieram em branco
(`C:\...\...\index.html`) e no lugar deles foram fornecidas **duas URLs**, ambas do próprio setor odontológico.

Isso muda uma coisa importante e vale registrar antes de qualquer número:

| | REF‑1 | REF‑2 |
|---|---|---|
| URL | `canalsemmedo.my.canva.site/canalsemmedo` | `anaceciliaaranha.com.br` |
| Quem é | Dra. Thayná — mentoria de **endodontia para dentistas** | Profa. Dra. Ana Cecília Aranha — marca pessoal **acadêmica** |
| Público | **B2B** (dentista comprando material clínico) | **B2B/B2A** (aluno, leitor, ouvinte de podcast) |
| Gênero | Landing de infoproduto | Hub de conteúdo institucional/acadêmico |
| Paciente é o alvo? | **Não** | **Não** |

**Consequência direta:** nenhuma das duas é um site de **captação de paciente**. Ambas vendem para colegas ou para
alunos. Isso significa que elas **não podem ser lidas como molde de arquitetura de seção** — o argumento de compra
delas é outro. Continuam válidas exatamente como o §4 manda: como **teto de nível técnico e de densidade**.

Registrado também porque tem efeito normativo: sites B2B para dentistas operam sob pressão de conformidade
**muito menor** que um site voltado ao paciente (o Art. 44 do CEO mira a publicidade dirigida ao público leigo).
Copiar o tom delas seria importar liberdade que o nosso site não tem.

---

## 1. Como foram medidas

Não houve leitura de screenshot. As duas foram **baixadas cruas** e medidas por regex sobre o HTML e sobre o CSS
externo real (`Invoke-WebRequest` + contagem). Arquivos capturados:

```
ref1-canva.html    154.563 bytes
ref1-main.css      249.524 bytes
ref1-font.css        1.411 bytes
ref2-aranha.html   126.979 bytes
ref2-theme.css      94.790 bytes
ref2-fonts.css      20.001 bytes
```

---

## 2. Densidade — REF‑1 (Canva)

```
tags totais                : 36
<section>                  : 0
<div>                      : 1
<img> / <svg> / <video>    : 0 / 0 / 0
<a> / <button>             : 0 / 0
<input|select|textarea>    : 0
```

**REF‑1 não tem HTML.** É um shell de 36 tags; todo o conteúdo vive num payload JSON hidratado por JS. O texto só
aparece raspando strings do bundle:

```
| Otimize sua\nRotina Clínica
| Praticidade, segurança jurídica e profissionalismo no seu dia a dia clínico
| Mentoria para dentistas
| Prontuário Endodôntico + TCLE + Recomendações
| Essa mentoria presencial foi desenvolvida exclusivamente para você que tem
  dificuldade na etapa de acesso à cavidade pulpar.
| Quem é Dra Thayná
```

**Isto é uma OBRIGAÇÃO extraída pela negativa** — a categoria mais útil do §4. Um site sem HTML semântico:
não é indexável de forma confiável, não é navegável por leitor de tela, não sobrevive a JS desligado e não tem
`<h1>`. Para um profissional de saúde cuja principal fonte de paciente é busca orgânica local, é um defeito
estrutural, não uma escolha. **O nosso site é HTML semântico primeiro, JS depois.**

## 3. Densidade — REF‑2 (Ana Cecília Aranha)

```
tags totais                : 592
<section>                  : 4
<div>                      : 189
<img>                      : 11
<svg>                      : 7
<video>                    : 1
<a>                        : 39
<button>                   : 5
<input|select|textarea>    : 4
palavras visíveis (body)   : 1.167
```

Duas leituras de densidade textual, porque a marcação distorce:

| Base de divisão | Palavras/seção |
|---|---|
| por `<section>` (4 wrappers gigantes) | **292** |
| por bloco de heading (17 headings) | **69** |

O número honesto de trabalho é o segundo: os 4 `<section>` são wrappers de tema, não seções de argumento.

**Recursos de performance já em uso (piso a igualar):** `loading="lazy"` × **71**, `srcset` × **11**,
`object-fit` × **12**, `IntersectionObserver` × **1**, `aria-current` × **1**.

---

## 4. Orçamento de movimento medido

| | REF‑1 | REF‑2 | **Nosso piso/teto** |
|---|---|---|---|
| `@keyframes` | **11** | **1** (`pulsate`) | **12 a 15** |
| easings `cubic-bezier` distintos | **4** | **0** (só palavras-chave) | **1** |
| durações distintas | **13** | **9** | **≤4** |
| `@font-face` famílias | **6** | **2** | **2** |
| `prefers-reduced-motion` | 1 ocorrência | **0 ocorrências** | obrigatório, global |

Easings da REF‑1, para registro:
`cubic-bezier(.4,0,.2,1)` · `cubic-bezier(.68,0,.23,1)` · `cubic-bezier(0,0,.58,1)` · `cubic-bezier(0,0,.13,1)`

Durações da REF‑1: `0s 83.3333ms 1s 1.4s 2s 2.5s 3s 5s 6s 15s 25s 28s 35s`

### Conflito §4 × §9 — resolvido e registrado

O §4 diz que os números da referência viram piso e que entregar menos é regressão. O §9 fecha o orçamento em
**1 easing, ≤4 durações, ≤15 keyframes**. Nos easings e durações os dois se contradizem: a REF‑1 tem 4 easings e
13 durações.

**Decisão: prevalece o §9, e isso não é regressão.** O motivo é de mérito, não de preguiça — 4 easings e 13
durações não são riqueza, são ausência de sistema (é o rastro de um construtor visual que emite CSS por widget,
não uma direção de movimento). Num site de saúde cujo eixo de mensagem é *calma*, um único easing repetido no site
inteiro é uma decisão de direção de arte, e é **mais difícil** de executar do que treze durações soltas.

O piso da referência é honrado onde ele realmente mede riqueza: **`@keyframes` (11 → nós 12–15)** e densidade.

---

## 5. Tipografia medida

| | Famílias |
|---|---|
| REF‑1 | `Canva Sans`, `Noto Sans`, `Noto Sans Variable`, `Noto Sans Vietnamese`, `Open Sans`, `calibrate` — **6** |
| REF‑2 | `Inter`, `Onest` — **2** |

REF‑2 usa **Inter**, que o §6 proíbe como dominante. REF‑1 usa **Open Sans**, idem. Nenhuma das duas usa serifa
como display. **A serifa está livre e é onde a diferenciação começa.**

---

## 6. Repertório técnico disponível (o que transfere)

Encontrado em uso nas referências — logo, é repertório legítimo e esperado neste nível:

| Recurso | REF‑1 | REF‑2 |
|---|---|---|
| `clip-path` | 11 | — |
| `backdrop-filter` | 10 | — |
| `mask-image` | 6 | — |
| `position: sticky` | 12 | — |
| `will-change` | 4 | — |
| `@supports` | 9 | 1 |
| `:focus-visible` | 1 | — |
| `object-fit` | — | 12 |
| `srcset` / `loading="lazy"` | — | 11 / 71 |
| `IntersectionObserver` | — | 1 |
| `aria-current` | — | 1 |

**Onde ele foi aplicado, ignoramos. Que ele está disponível, transferimos.** Ao repertório acima o nosso site
acrescenta o que nenhuma das duas usa e que é o estado da arte hoje: `:has()`, `animation-timeline` + `view()`
(scroll-driven), `color-mix()`, `conic-gradient`, `aspect-ratio`, `@container`, `-webkit-text-stroke`,
`scroll-snap`, `<dialog>`, `popover`.

---

## 7. Esqueleto da REF‑2 lido em voz alta (teste do §5 aplicado à referência)

```
H1  CUIDADO. SORRISOS. CIÊNCIA.
H2  Um ecossistema de ciência, cuidado e coragem
H3  CURSOS
H3  C.A.R.E.
H3  LIVROS E ARTIGOS
H3  LILIBETE
H3  PODCASTS
H3  NEWSLETTER
H2  O que nossos alunos dizem
H2  Onde o Conhecimento Ganha Forma
H3  GRUPO SPDS
H1  INSCREVA-SE NA NOSSA NEWSLETTER
H2  SOBRE A PROFA. DRA.
H2  Contato
H2  nos siga nas redes
```

**Reprova no teste do esqueleto.** De 15 headings, **12 são rótulos de categoria** (`CURSOS`, `PODCASTS`,
`Contato`, `nos siga nas redes`). Lido em voz alta não forma argumento — forma um índice. Só duas linhas afirmam
algo: *"Um ecossistema de ciência, cuidado e coragem"* e *"Onde o Conhecimento Ganha Forma"*.

**Dois defeitos técnicos a não repetir:**
1. **Dois `<h1>` na mesma página** (`CUIDADO. SORRISOS. CIÊNCIA.` e `INSCREVA-SE NA NOSSA NEWSLETTER`).
   O §11 exige um único `h1` por página.
2. `H2 "Recent Posts"` órfão antes do `<h1>` — hierarquia quebrada na origem.

---

## 8. O piso consolidado do nosso site

| Métrica | Melhor referência | **Piso adotado** | Origem |
|---|---|---|---|
| tags totais na página | 592 (REF‑2) | **≥ 592** | §4 |
| tags por seção | — | **≥ 35** | §7 |
| palavras por seção | 69–292 (REF‑2) | **≥ 130**, alvo 200–350 | §7 |
| imagens/sistema gráfico por seção | — | **≥ 1** | §7 |
| controles interativos | 48 (REF‑2) | **≥ 48** | §4 |
| `@keyframes` | 11 (REF‑1) | **12 a 15** | §4 piso + §9 teto |
| easings distintos | 4 (REF‑1) | **exatamente 1** | §9 (ver §4 acima) |
| durações distintas | 13 (REF‑1) | **≤ 4** | §9 |
| famílias tipográficas | 6 (REF‑1) | **exatamente 2** | §6 |
| `loading="lazy"` | 71 (REF‑2) | toda imagem abaixo da dobra | §8 |
| `prefers-reduced-motion` | 1 / 0 | **global e obrigatório** | §9 |
| dispositivos de coesão | ~1 (REF‑2: `aria-current`) | **≥ 3** | §7 |

---

## 9. Portão anti-clone (§4)

Reprovaria se coincidíssemos com qualquer referência em **paleta + tipografia + direção visual**.

| Eixo | REF‑1 | REF‑2 | **Nosso site** | Colide? |
|---|---|---|---|---|
| Base | branco Canva, tema `light classic` | branco WordPress/Inspiro | **carvão quase-preto `#0A0E0F`, dark-first** | não |
| Tipografia | Canva Sans / Open Sans (grotescas) | Inter + Onest (grotescas) | **Fraunces (serifa variável) + Sora** | não |
| Direção | landing de infoproduto, blocos empilhados | hub editorial com grade de cards e fotos | **instrumento de precisão: escuro, medido, sistema gráfico vetorial próprio, zero foto de banco** | não |
| Acento | azul/roxo Canva default | preto/branco + fotos | **teal-titânio `#5FD9C4` + latão `#C9A227`** | não |

**Aprovado.** Nenhum eixo coincide. Nenhum ativo (foto, texto, CSS, fonte) foi copiado — só medida, método e
obrigação, conforme a Regra Inviolável nº 4.
