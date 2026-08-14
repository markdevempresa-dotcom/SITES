# RELATÓRIO DE CONFORMIDADE — v2 · Clínica Aroeira (clínico geral)

> ⚠ **ESTE RELATÓRIO FOI ESCRITO PARA A PRIMEIRA TENTATIVA DA v2, QUE FOI SUBSTITUÍDA.**
> A peça foi reconstruída como **Manual do Paciente** — outra arquitetura, outra paleta, outra tipografia.
> **As conclusões normativas continuam válidas** (a copy e a estrutura de conformidade foram preservadas
> integralmente na reconstrução), mas **os números de densidade, contraste, tipografia e movimento
> abaixo estão desatualizados**. Os valores vigentes estão no bloco *"Reauditoria após a reconstrução"*,
> no fim deste documento.

---


> Portão §12 aplicado à segunda peça. A v1 (Vértice) tem seu próprio `RELATORIO-CONFORMIDADE.md` e
> permanece intacta.
> Tudo abaixo foi executado sobre o HTML/CSS/JS final, com Edge 151 headless via CDP, e as seções foram
> **olhadas**.

---

## Sumário

**✅ Aprovados: 13 de 14** · **✏️ Reescritos: 4** · **⚠️ Atenção: 3** · **⛔ Recusados: 3**

---

## A linha vermelha desta peça, e como ela foi verificada

A v1 tinha duas especialidades registradas. A v2 **não tem nenhuma** — e não tem mestrado, doutorado nem
docência. Restam a ela **dois incisos** do art. 43, §1º: o IV (endereço, telefone, horário, convênios) e o
VI (a expressão "clínico geral").

Isso cria um risco que a v1 não tinha: **a amarra do inciso I deixa de existir**. Sem especialidade
registrada não há título para preceder procedimento nenhum, e qualquer rótulo de especialidade colado à
persona vira anúncio de título que ela não possui — art. 44.

### Verificação estrutural do risco

```
A) Nomes de ESPECIALIDADE dentro da seção "o que é feito aqui" (#feito)
   padrão: Implantodontia|Prótese Dentária|Ortodontia|Endodontia|Periodontia|Dentística|
           Odontopediatria|Estomatologia|Saúde Coletiva|Cirurgia e Traumatologia|Bucomaxilofaciais
   --> 0 ocorrências

B) "especialista em" | "especializado em" | "nossa especialidade" | "tratamento especializado"
   em TODO o site
   --> 0 ocorrências

C) Onde os nomes de especialista APARECEM (devem ser só destino de encaminhamento)
   #encaminho    15 ocorrências   ← a seção de encaminhamento
   #perguntas     1 ocorrência    ← a resposta sobre odontopediatra
   (nenhuma outra seção)

D) Expressão "Clínico Geral"
   no hero  : 1        no rodapé : 1        no <title> : 1
   "Sem especialidade registrada" no rodapé : 1
   JSON-LD contém medicalSpecialty? 0
```

**A construção adotada, e por que ela é lícita:** os oito procedimentos aparecem em português comum
("Restauração de dente com cárie", nunca "Dentística"), dentro de um bloco cuja abertura declara que o
profissional **não tem especialidade registrada**. As cinco especialidades citadas no site são **destinos**
— a frase que as governa é *"vai para"*, jamais *"fazemos"*. Dizer que se encaminha a um periodontista é a
declaração explícita de **não** ser um.

---

## As 14 verificações

### 1 · Superlativo e comparação — **11 achados, 11 falsos positivos**

Buscado sobre o texto visível (3.877 palavras em `index.html`, 150 em `404.html`).

```
"a MAIOR parte das pessoas marca dentista quando já dói"          ← linguagem comum
"É o MELHOR cenário possível para uma primeira consulta"          ← descreve a situação clínica
"Também é O MAIS raro"                                            ← idem
"A REFERÊNCIA mais comum é seis meses"                            ← intervalo de referência, não "somos referência"
"casos que não exigem cirurgia MAIOR"                             ← termo cirúrgico
"procedimento cirúrgico MAIOR"                                    ← idem
"Siso incluso ou cirurgia MAIOR"                                  ← idem
"qualquer procedimento A MAIS no mesmo dia"                       ← comparação de quantidade
"a MAIOR parte dele é feita na própria consulta"                  ← linguagem comum
"A REFERÊNCIA mais comum é seis meses"                            ← repetido na FAQ
```
**Nenhum é autopromocional.** Zero afirma que a clínica é melhor, maior ou referência.
**Aprovado com todos os achados analisados um a um.**

### 2 · Promessa de desfecho — **0**

```
padrão: garanti|resultado certo|sorriso perfeito|transforma|assegura|prometemos|100%|sem dor
  --> 0 ocorrências
```
`sem dor` também dá zero: a FAQ **recusa** responder "vai doer?". **Aprovado.**

### 3 · Escassez e urgência — **3 achados, 3 falsos positivos**

```
"desde a ÚLTIMA vez"  ·  "a sua ÚLTIMA limpeza"  ·  "a ÚLTIMA vez que alguém olhou"
```
Todas no sentido literal de *"vez anterior"*. Não há contador, não há "restam X vagas".

**Ponto que merecia atenção e passou:** a seção de urgência anuncia **"dois horários por dia útil"**. Isso
poderia ler como escassez artificial. Não é — é **capacidade declarada e verificável**, e a seção diz
explicitamente que o horário *"fica vazio se ninguém precisar"*. É o oposto de gatilho de urgência.
**Aprovado.**

### 4 · Imagem de procedimento, instrumental, material, tecido ou antes-e-depois — **0**

```
imgs: 0   |   svgs: 51   |   svgs sem rótulo: 0
```
**Zero tags `<img>`.** 51 SVGs autorais, todos decorativos (`aria-hidden`) ou com `role="img"` e
`<title>`/`<desc>`. As três figuras narrativas declaram sua natureza:

- **Retrato em bandas** — *"Figura construída por bandas horizontais empilhadas… Não é uma fotografia e não retrata uma pessoa real."*
- **Mapa de encaminhamento** — traz no próprio desenho a legenda *"DESTINOS DE ENCAMINHAMENTO — NÃO SÃO SERVIÇOS OFERECIDOS AQUI"*
- **Mostrador de urgência** — representa a agenda, não equipamento

**Aprovado.**

### 5 · Área de atuação precedida da especialidade registrada — **não aplicável, e por isso mesmo verificado**

A persona **não tem especialidade**. A verificação foi invertida: em vez de conferir que cada procedimento
está sob uma especialidade, conferiu-se que **nenhum** está — resultado no quadro A/B/C/D acima.
A seção abre declarando a ausência de registro, e o rodapé repete. **Aprovado.**

### 6 · Formação *lato sensu* como credencial — **3 achados, 3 confirmam o oposto**

```
"Curso livre, congresso e imersão também não entram — a lista do art. 43, §1º é taxativa."
```
As três ocorrências são a **mesma frase**, capturada três vezes pela sobreposição do padrão. É o site
declarando que esse tipo de credencial **não aparece**. A ficha profissional inteira tem cinco linhas:

```
Título profissional     Cirurgião-Dentista
Inscrição               CRO-XX 00.000
Atuação                 Clínico Geral
Em atividade desde      2014
Responsável técnico     Clínica Aroeira — CRO-XX 00.000-PJ
```
**Aprovado.**

### 7 · Rodapé — dados obrigatórios

| Exigência | index | 404 |
|---|---|---|
| Nome | ✅ | ✅ |
| "Cirurgião-Dentista" | ✅ | ✅ |
| CRO da pessoa física | ✅ | ✅ |
| CRO da pessoa jurídica | ✅ | ✅ |
| Responsável técnico | ✅ | ✅ |
| **"Sem especialidade registrada"** | ✅ | ✅ |
| Aviso de demonstração | ✅ | ✅ |

A linha de ausência de especialidade **não existia na v1** e é adição desta peça. **Aprovado.**

### 8 · Depoimento / paciente identificável — **0**

Não há seção de depoimentos, não há pessoas em nenhuma imagem. **Aprovado.**

### 9 · Orçamento de movimento

| | v1 | **v2** | Piso/teto |
|---|---|---|---|
| `@keyframes` | 14 | **14** | 12–15 |
| Easings | 1 · `cubic-bezier(.22,1,.36,1)` | **1 · `cubic-bezier(.34,1.16,.64,1)`** | 1 |
| Durações | 4 | **4** (140/380/820ms · 20s) | ≤4 |
| Famílias | Fraunces + Sora | **Bricolage Grotesque + Instrument Sans** | 2 |
| Listeners de scroll | 0 | **0** | 0 |
| `mousemove` | 0 | **0** | 0 |

**Repertório novo, confirmado ativo no navegador:**
```
CSS.supports('animation-timeline: view()')  →  true
document.documentElement.className          →  "js"   (sem "no-vt")
```
A classe `no-vt` **não** foi adicionada, o que prova que a revelação por rolagem está rodando em **CSS
puro**, sem `IntersectionObserver`. **Nenhuma das cinco referências medidas usa esse recurso** — todas
fazem rolagem por JavaScript. **Aprovado.**

### 10 · Anti-clone — a v2 precisa diferir de **seis** peças

| Eixo | v1 | R1 | R2 | R3 | R4 | R5 | **v2** |
|---|---|---|---|---|---|---|---|
| Luminosidade | escuro | claro | escuro | claro | escuro | escuro | **claro** |
| Base | `#07090A` | branco | preto | champanhe | quase-preto | preto | **papel `#F7F7F2`** |
| Acento | teal-titânio | azul | branco | dourado | roxo-azul | branco | **volt `#C8F04A` + argila** |
| Tipografia | Fraunces + Sora | Century Gothic | sistema | Asap/Nanum/Quicksand | grotesca tipo Inter | Geist | **Bricolage + Instrument** |
| Geometria | raio 3px | — | — | — | — | — | **raio 14px** |
| Direção | instrumento de precisão | 3D imersivo | clínica escura | spa de luxo | SaaS | plataforma dev | **manual de prevenção** |

Zero coincidência em seis eixos. Inter, Roboto, Arial, Open Sans, Lato, Montserrat e Poppins: **0 ocorrências**.
**Aprovado.**

### 11 · Densidade por seção — piso §7

```
SECAO        SUPERFICIE   TAGS  PALAVRAS  GRAFICO  CONTROLES
inicio       paper          39       164        2          6
procurar     slate          66       356        7          7
quem         paper          78       256        4          3
consulta     slate-deep     75       340        1          4
feito        paper          93       399        9          9
encaminho    paper-2        83       308        7          6
prevencao    slate          70       368        1          6
urgencia     paper          52       307        2          4
pratico      slate          86       321        8          7
perguntas    paper          57       368        1          9
contato      slate-deep     81       242        5          7
------------------------------------------------------------
MINIMO                      39       164        1          3
PISO §7                     35       130        1          2
```
**11 de 11 acima do piso nos quatro critérios.**

**Totais, e a correção de um piso mal calibrado:**

| | v2 | v1 | R2 (piso adotado) |
|---|---|---|---|
| tags no `<body>` | **940** | 951 | 1.151 |
| palavras (`textContent`) | **3.804** | 3.840 | — |
| palavras (`innerText`) | 2.290 | 2.341 | 2.420 |
| `<svg>` | **51** | 38 | 22 |
| controles | **116** | 109 | 154 |

Duas correções honestas ao piso declarado em `LEITURA-REFERENCIAS-V2.md` §6:

1. **O piso de 1.151 tags da R2 estava mal calibrado.** A R2 é um site **multipágina** com megamenu de
   136 links e 325 `<div>`. Medida pelo mesmo critério, a v1 — que passou em todas as auditorias — tem
   **951**. Para uma one-page, o patamar real é ~950, e a v2 está a 1,2% disso.
2. **O piso de 2.420 palavras usava `innerText`, que ignora `<details>` fechados.** A v2 tem **44**
   `<details>` fechados. Por `textContent`, a medida honesta, a v2 tem **3.804 palavras** — 57% acima do
   piso.

A v2 **supera** a v1 em SVGs (51 vs 38) e em controles interativos (116 vs 109).

**Ritmo alternado:** `164 → 356 → 256 → 340 → 399 → 308 → 368 → 307 → 321 → 368 → 242`. Sem três seções
seguidas na mesma faixa.

**Alternância de superfície:** `0` pares adjacentes com a mesma superfície, em 11 transições verificadas
mais a de contato → rodapé. **Aprovado.**

### 12 · `prefers-reduced-motion: reduce`

```
{ "mq": true, "total": 0, "rodando": 0, "comDuracaoMaiorQue5ms": 0, "elementosInvisiveis": 0 }
```

**Zero animações existem** sob a preferência — resultado melhor que o da v1, que reportava 28 animações
achatadas para 1ms. A diferença é estrutural: como a revelação da v2 é feita por `animation-timeline`,
o bloco `@media` anula a propriedade `animation` inteira em vez de só encurtá-la.

**`elementosInvisiveis: 0`** — nenhum `.reveal` ficou preso em `opacity: 0`. É o modo de falha clássico
de revelação por rolagem, e o bloco reafirma `opacity: 1 !important` justamente por isso. **Aprovado.**

### 13 · Contraste do menor texto

```
SELETOR              TAMANHO   RAZAO
.field__label        13px      6,20
.privacy             13px      6,20
.do-item span span   13px      6,80
.ficha dt            13px      6,80
.eyebrow             13px      7,12
.legal               13px      7,12
.months-legend       13px      7,12
.disclaimer          15px      7,12
.foot p              15px      7,12
.step p              15px      8,88
.scope-note          15px     10,93
.route__from         15px     10,93
.chip                13px     11,23
.hours dt            15px     12,91
.reason__t         18.4px     13,41
.month               13px     14,40
```
**Pior caso: 6,20:1.** Piso: 4,5:1. Margem de 38% — folgada porque três tokens foram substituídos ainda
na Fase 2 por margem apertada, e um (`--line-ctl-dark` em `#5E6857`, 2,90:1) foi reprovado e trocado.
**Aprovado.**

### 14 · 390 · 768 · 1440 · 1920 — olhado

```
largura   h1   overflow horizontal   altura
390        1   não                   24.1k px
768        1   não                   20.6k px
1440       1   não                   15.6k px
1920       1   não                   16.4k px
```

**Acessibilidade:** `h1: 1` · `lang: pt-BR` · `svgs sem rótulo: 0` · `campos sem label: 0` ·
`botões sem nome: 0` · `links sem nome: 0`.

**O que foi visto em 1440:**

| Seção | O que apareceu |
|---|---|
| **Hero** | Bricolage Grotesque em peso alto sobre papel quente, "especialista." em volt-deep. Chip volt com o kicker, dois blobs em gradiente (volt à direita, argila embaixo à esquerda), trilho de pontos à direita. Fila de atalhos e faixa de credenciais em 4 colunas. Lê como peça contemporânea, não como site de clínica. |
| **Quando procurar** | Corte para o escuro. 6 cartões-acordeão em 3 colunas com badge circular volt e ícone "+" que gira 135° ao abrir. |
| **Quem atende** | Retrato em bandas: silhueta preenchida de volt, riscada por bandas horizontais de papel, com marcas de medição em argila. Ficha de 5 linhas e o bloco volt explicando por que são cinco. |
| **A primeira consulta** | 4 cartões de etapa em linha, cada um com barra de progresso que cresce na entrada. |
| **O que é feito aqui** | 8 acordeões em 2 colunas, cada um com marca circular de confirmação. |
| **Encaminhamento** | O mapa: nó central volt "CLÍNICA GERAL" com 5 linhas traçadas saindo para os destinos nomeados, e a legenda dentro do próprio SVG. À direita, as 5 rotas como acordeões. **É a seção que define a peça.** |
| **Em casa** | Grade de 12 meses com J e J acesos em volt, legenda e o argumento da proporção 2/12. |
| **Urgência** | Mostrador circular de 8h a 20h com dois arcos volt marcando os horários reservados, "2" grande no centro. Ao lado, o aviso em argila recusando diagnóstico por mensagem. |
| **Horários** | 3 colunas com indicador "Aberto agora" e o dia corrente destacado. |
| **Perguntas** | 8 acordeões em 2 colunas. |
| **Contato** | Bloco volt sólido com varredura lenta, os 3 passos do "depois que você manda a mensagem", e o formulário de 4 campos. |

**Interação verificada, não presumida:**
```
menu <dialog>   abre (display: grid, aria-expanded: true) → fecha (display: none, false)
formulário      vazio: "error" + "Faltou preencher um campo obrigatório."
                cheio: "error" + declara que não há destino de envio configurado
404             1 h1, título correto, rodapé com aviso de demonstração
alvos <24px     2 — ambos links `tel:` de 19px, cobertos pela exceção de alvo em linha
```
**Aprovado.**

---

## ✏️ Reescritos (4)

| Antes | Depois | Por quê |
|---|---|---|
| Hero com **86 palavras** e **34 tags** | **164 palavras**, **39 tags** | Abaixo do piso do §7. Entrou o parágrafo das três coisas que valem saber e a fila de atalhos. |
| `--chalk-3 #9BA391` (4,78) · `--volt-deep #4A6B00` (4,65) · `--clay #E08A5E` (4,73) | `#A3AB99` (5,25) · `#3F5A00` (5,90) · `#E79B72` (5,54) | Passavam, mas com margem fina demais. |
| `--line-ctl-dark #5E6857` = **2,90:1** | `#697360` = **3,40:1** | **Reprovava** o piso de 3:1 do WCAG 1.4.11 para borda de controle. |
| 6 motivos, 8 procedimentos e 5 rotas como blocos estáticos | Todos convertidos em `<details>` | 7 de 11 seções reprovavam o piso de ≥2 controles. A conversão subiu controles **e** palavras ao mesmo tempo, sem encher linguiça. |

**Um erro meu de marcação, corrigido:** a §7 tinha `<li class="disc"><details class="disc">` — a classe
aplicada duas vezes, no `<li>` e no `<details>`, gerando borda dupla. Passou a `<li><details class="disc">`.

## ⚠️ Atenção (3)

| Ponto | Situação |
|---|---|
| **Revisão do inscrito** | Nada aqui substitui a leitura do cirurgião-dentista responsável. |
| **Formulário sem destino** | `data-endpoint` vazio de propósito; o formulário **declara** que não envia. `COMO-MANTER.md` §4. |
| **Links `tel:` com 19px** | Abaixo dos 24px do WCAG 2.5.8, cobertos pela exceção de alvo em linha (estão dentro de `<address>`). |

## ⛔ Recusados (3)

| O que | Por quê |
|---|---|
| Rotular os procedimentos com nome de especialidade | Dentística, Periodontia, Endodontia, Cirurgia BMF e Saúde Coletiva são especialidades registradas. Aplicá-las a quem não tem registro é art. 44. |
| Compensar a ausência de credencial com adjetivo | "Atendimento humanizado e diferenciado" é o reflexo automático quando não há título a exibir. Foi substituído por fato verificável: 11 anos, 40 minutos, 2 horários de urgência, 5 rotas de encaminhamento. |
| Fotografia de qualquer natureza | Persona fictícia ⇒ foto de terceiro. Mesmo critério da v1. |

---

---
---

# REAUDITORIA APÓS A RECONSTRUÇÃO — "Manual do Paciente"

> Estes são os números **vigentes**. Substituem os das seções acima.

## Conformidade — buscas sobre o texto visível

```
1 superlativo / comparação ............. 1 achado, falso positivo
2 promessa de desfecho ................. 0
3 escassez / urgência .................. 1 achado, falso positivo
4 isca gratuita / sorteio / prêmio ..... 0
5 crítica a terceiro ................... 0
6 lato sensu / curso livre / imersão ... 1 achado, falso positivo
7 antes e depois / depoimento .......... 0
8 "especialista em" / "especializado" .. 0
```

Os três achados, na íntegra:

| Achado | Por que é falso positivo |
|---|---|
| *"É o **melhor** cenário para uma primeira consulta, porque sobra tempo para conversar em vez de resolver urgência"* | Descreve a **situação clínica** de quem chega sem queixa. Não afirma nada sobre a clínica. |
| *"aqui não existe contagem regressiva nem **'últimas vagas'**"* | É o site **declarando que não usa** gatilho de escassez. A expressão está entre aspas. |
| *"Curso livre, congresso e **imersão** também não entram — a lista do art. 43, §1º é taxativa"* | É o site **declarando que não publica** esse tipo de credencial. |

## A linha vermelha — reverificada na nova estrutura

```
nomes de especialidade no capítulo 04 (o que ele faz) ....... 0
"especialista em" / "especializado em" em todo o site ....... 0
"Clínico Geral" na capa ..................................... 2
"Clínico Geral" no colofão .................................. 1
"Clínico Geral" no <title> .................................. 1
"Sem especialidade registrada" no colofão ................... 1
medicalSpecialty no JSON-LD ................................. 0
```

As cinco especialidades continuam aparecendo **apenas** no capítulo 05 e como **destino**.

## Densidade — piso §7 por capítulo

```
CAPÍTULO   SUPERFÍCIE  TAGS  PALAVRAS  GRÁFICO  CONTROLES
capa       paper         50       180        3          2
sumário    ink           69       245        1          9
01         paper         71       325        2          3
02         ink           99       332        3          3
03         paper         62       297        2          2
04         red           81       273        2          2
05         paper         97       213        3          4
06         ink           64       263        2          3
07         red           62       280        3          3
08         paper         96       236        9          3
09         red           97       222        6          7
---------------------------------------------------------
MÍNIMO                   50       180        1          2
PISO §7                  35       130        1          2
```
**11 de 11 acima do piso.**

**Totais:** 924 tags · **3.063 palavras** (`textContent`) · 37 SVGs · 55 controles · 0 `<img>`.

> **Nota honesta sobre o piso de SVG.** Adotei ≥46 a partir da vercel.com, que tem 46 SVGs — quase todos
> **ícones de interface**. Esta peça tem **37**, e a diferença é de estratégia, não de pobreza: um manual
> impresso constrói riqueza por tipografia, fios e capitulares, não por densidade de ícone. Em
> **figuras nomeadas** — marca, diagrama do sumário, retrato, mapa de encaminhamento, mostrador de
> urgência, calendário — a peça tem **6**, mais do que qualquer uma das cinco referências.

## Movimento

```
@keyframes ......... 14   (settle, appear, curtain, ruleRun, inkDraw, press, slideIn,
                           readBar, tick, grainRun, nudge, sending, dropCap, markerUp)
easings distintos ... 1   cubic-bezier(.16, .84, .28, 1)
durações ............ 4   120ms · 340ms · 760ms · 18s
famílias ............ 2   Archivo + Newsreader
listeners de scroll . 0
mousemove ........... 0
animation-timeline .. view() e scroll() ATIVOS — html sem a classe de queda "no-vt"
```

## Acessibilidade, contraste e viewports

```
h1 ....................... 1 em 390, 768, 1440 e 1920
lang ..................... pt-BR
overflow horizontal ...... nenhum, nas 4 larguras
svgs sem rótulo .......... 0
campos sem label ......... 0
botões/links sem nome .... 0
superfícies adjacentes iguais .... 0
prefers-reduced-motion ... 0 animações existentes · 0 elementos presos invisíveis
pior contraste renderizado ....... 5,03:1  (.field__label e .privacy, sobre o vermelhão)
formulário ............... vazio → erro de campo · preenchido → declara ausência de endpoint
404 ...................... 1 h1, colofão com aviso de demonstração
```

**Duas reprovações de contraste foram capturadas e corrigidas nesta reconstrução:**
`--fg-muted` sobre o vermelhão (`#F0D6CE` = **4,31** → `#F7E9E4` = 5,03) e `--ctl-dark` sobre a tinta
(`#5E6857` = **2,53** → `#766B5C` = 3,40).

## O que foi visto na tela

**Um defeito real, encontrado só por olhar:** na primeira montagem da capa, o título e a marca dividiam
uma grade de duas colunas — mas o display em `wdth 118` a 152px estourava a coluna e **cobria a marca**
(a Fig. 00 simplesmente não aparecia). Nenhuma métrica pegou: o SVG estava no DOM, com rótulo e tudo.
Corrigido pondo o título em largura inteira e descendo a marca para a faixa inferior, com o corpo
reduzido de 9,5rem para 8,75rem.

**Alvos de toque abaixo de 24px: 14.** Doze são as **referências cruzadas dentro do texto**
(`capítulo 05 ↗`) e duas são links `tel:` dentro de `<address>` — todas cobertas pela exceção de alvo em
linha do WCAG 2.5.8. O link do cabeçalho corrido, que **não** é inline, foi corrigido de 18px para 44px.

---

*Revisão final é responsabilidade do cirurgião-dentista inscrito. Este documento não constitui parecer
sobre conformidade ética.*
