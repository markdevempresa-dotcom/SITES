# RELATÓRIO DE CONFORMIDADE — Vértice Odontologia

> Portão final (§12). As 14 verificações foram rodadas uma a uma **sobre o HTML/CSS/JS final**,
> com a saída bruta colada. Nenhuma foi declarada aprovada sem execução.
> As telas foram capturadas por navegador real (Edge 151 headless via CDP) e **olhadas**, não presumidas.

---

## Sumário — as quatro listas

### ✅ APROVADOS (12 de 14)

| # | Verificação | Resultado |
|---|---|---|
| 1 | Superlativo e comparação | **0** em copy |
| 2 | Promessa de desfecho | **0** |
| 3 | Escassez e urgência | **0** (1 falso positivo analisado) |
| 4 | Imagem de procedimento / instrumental / antes-e-depois | **0** — o site não tem `<img>` nenhuma |
| 5 | Área de atuação precedida da especialidade registrada | 10/10 procedimentos amarrados |
| 6 | Formação *lato sensu* como credencial | **0** (1 item reescrito, ver abaixo) |
| 7 | Rodapé com os dados obrigatórios do §3.2 | 6/6 presentes nas 2 páginas |
| 8 | Depoimento com resultado clínico / paciente identificável | **0** — não há depoimentos |
| 9 | Orçamento de movimento | 14 keyframes · 1 easing · 4 durações · 2 famílias |
| 10 | Anti-clone contra as referências | 0 coincidência nos 3 eixos |
| 12 | `prefers-reduced-motion: reduce` | 0 animações acima de 5ms, 0 elementos presos invisíveis |
| 13 | Contraste do menor texto | pior caso **5,73:1** — piso é 4,5:1 |

### ✏️ REESCRITOS (5)

| O que estava | O que ficou | Por quê |
|---|---|---|
| `Professora de curso de especialização em Implantodontia` | `Integra o corpo docente de curso de especialização em Implantodontia` | A primeira forma podia ser lida como **posse de uma especialização lato sensu**, que está fora da lista taxativa do art. 43, §1º. A segunda deixa inequívoco que é **magistério** (inciso III, permitido). |
| Hero com **81 palavras** | Hero com **142 palavras** | Abaixo do piso de 130 do §7. Entrou um parágrafo de nota que carrega três informações reais (consulta cobrada e sem compromisso · mesma profissional do começo ao fim · possibilidade de começar só conversando). |
| `--text-ink-3: #5A6668` | `--text-ink-3: #4E5A5C` | Media **4,14:1** sobre a pior superfície clara. Reprovava. Agora **4,98:1**. |
| `.chip { background: color-mix(...) }` | `.chip { background: transparent }` | O fundo com alfa tornava o contraste do rótulo **impossível de auditar**. Agora mede 5,76:1 contra a superfície real. |
| `.spine__progress { animation: barGrow 1ms ... }` | sem `animation-duration` (padrão `auto`) | O `1ms` criava uma **5ª duração** no orçamento, sem efeito algum — numa linha do tempo de scroll a duração é ignorada. |

### ⚠️ ATENÇÃO (4 — nada bloqueia, tudo precisa de decisão humana)

| Ponto | Situação |
|---|---|
| **A1 — Revisão do inscrito** | Nenhum documento aqui substitui a leitura do cirurgião-dentista responsável. Ver a nota final. |
| **A2 — Formulário sem destino** | `data-endpoint` está vazio de propósito. O formulário **não finge enviar**: ele declara que não há destino e encaminha ao WhatsApp. Precisa ser configurado antes de ir ao ar — `COMO-MANTER.md` §4. |
| **A3 — Links `tel:` com 18px de altura** | Abaixo dos 24px do WCAG 2.5.8, mas cobertos pela **exceção de alvo em linha** (estão dentro de `<address>` e de um parágrafo). Os demais alvos foram corrigidos de 22px para 43px. |
| **A4 — Lista de convênios genérica** | O site diz "lista mantida atualizada nesta seção" sem listar nomes, porque a persona é fictícia e nomear operadoras reais criaria vínculo falso. Ao usar com um profissional real, os nomes entram ali. |

### ⛔ RECUSADOS (3 — pedidos implícitos do gênero que foram negados)

| O que foi recusado | Norma |
|---|---|
| **Fotografia do profissional e da clínica** | Persona fictícia ⇒ qualquer foto seria de terceiro. Reencontra a vedação de divulgar imagem/caso de terceiro (Res. 196/2019) e destrói a credibilidade da peça. Substituído por sistema gráfico vetorial autoral que **declara** não ser fotografia. |
| **Galeria de antes e depois** | Res. 196/2019 + restrição de uso por pessoa jurídica + exigência de consentimento formal. Substituída pela seção **Como conduzimos um caso** (§8). |
| **Selo de garantia / número de "sorrisos transformados" / contador de vagas** | Art. 44 — promessa de resultado e aliciamento. Substituídos por "em atividade desde 2011", "retorno em até 4 horas úteis" e horário real. |

---

# As 14 verificações, com evidência

## 1 · Superlativo e comparação

Buscado sobre o **texto visível** (tags e CSS removidos — a primeira passada acusou 23 ocorrências que eram
todas `margin-top`/`padding-top`/`border-top`, a palavra "top" em CSS inline, não em copy).

```
PALAVRAS DE TEXTO VISIVEL — index.html: 3176 | 404.html: 140

=== 1. SUPERLATIVO/COMPARACAO ===
padrão: melhor|maior|líder|referência|nº 1|top|excelência|imbatível|de ponta|
        última geração|o mais |a mais
  --> OCORRENCIAS EM COPY: 0
```
**Aprovado.**

## 2 · Promessa de desfecho

```
=== 2. PROMESSA DE DESFECHO ===
padrão: garanti|resultado certo|sorriso perfeito|transforma|assegura|prometemos|100%|sem dor
  --> OCORRENCIAS EM COPY: 0
```
**Aprovado.** Vale destacar que `sem dor` também dá zero: a FAQ **recusa explicitamente** responder "vai doer?".

## 3 · Escassez e urgência

```
=== 3. ESCASSEZ/URGENCIA ===
padrão: últimas|vagas|só hoje|expira|restam|corra|imperdível|aproveite|não perca|
        tempo limitado|agora mesmo
  [index.html] ...Quem conduz o seu caso, do primeiro exame à última manutenção...
  --> OCORRENCIAS EM COPY: 1
```
**Aprovado com falso positivo analisado.** A única ocorrência é *"à última manutenção"* — a última consulta
de acompanhamento de um caso. É o oposto semântico de urgência: fala de continuidade de longo prazo.

Duas buscas adicionais, não pedidas pelo §12, mas exigidas pelo art. 44:

```
=== CRITICA A TERCEIRO / CONCORRENCIA DESLEAL ===
padrão: ultrapassad|obsolet|ao contrário de|diferente das clínicas|outras clínicas
  --> OCORRENCIAS EM COPY: 0

=== DIAGNOSTICO A DISTANCIA ===
padrão: descubra qual|faça o teste|seu caso é|você precisa de|indicamos para você|qual tratamento você
  [index.html] ...Se o seu caso é de outra especialidade, você recebe a indicação na primeira consulta...
  [index.html] ...Não sabe em qual dos dois blocos o seu caso entra? Essa resposta é da consulta...
  --> OCORRENCIAS EM COPY: 2
```
Os 2 achados **remetem à consulta em vez de diagnosticar** — é exatamente a conduta que a vedação exige.

```
=== ISCA GRATUITA / SORTEIO / PREMIO ===
padrão: grátis|gratuit|sorteio|brinde|prêmio|desconto|promoção|oferta
  --> OCORRENCIAS: 0
```

## 4 · Imagem de procedimento, instrumental, material, tecido biológico ou antes-e-depois

```
acessibilidade: { "imgsTotal": 0, "imgsSemAlt": 0,
                  "svgsDecorativos": 36, "svgsComRoleImg": 2, "svgsSemRotulo": 0 }
```

**O site não contém uma única tag `<img>`.** Todo o material visual são **38 SVGs autorais**: 36 decorativos
(`aria-hidden`) e 2 com `role="img"` e rótulo — o retrato construído e a planta baixa.

- **Retrato construído** — figura geométrica em camadas com curvas de nível e marcas de medição. O `<desc>`
  declara: *"Ilustração vetorial geométrica em camadas, construída para este site-modelo. Não é uma fotografia
  e não retrata uma pessoa real."*
- **Planta baixa** — as 4 salas em planta. O `<desc>` declara: *"Não há pessoas, equipamentos ou instrumental
  representados."* A esterilização aparece como **área e fluxo**, nunca como material.

```
=== ANTES-E-DEPOIS / DEPOIMENTO ===
  [index.html:825] Esta seção ocupa o lugar que normalmente seria de um "antes e depois"...
  [index.html:918] Por que não há "antes e depois" neste site: a Resolução CFO-196/2019 restringe...
  --> OCORRENCIAS: 2
```
As 2 ocorrências são o site **explicando por que não há** galeria. **Aprovado.**

## 5 · Área de atuação precedida da especialidade registrada (art. 43, §1º, I)

Estrutura conferida no HTML final:

| Bloco | Título | Chip | Texto legal | Procedimentos |
|---|---|---|---|---|
| 1 | **Implantodontia** | "Especialidade registrada" | "Especialidade inscrita no Conselho Regional de Odontologia sob CRO-XX 00.000. Os procedimentos abaixo estão contidos nesta especialidade." | 5 |
| 2 | **Prótese Dentária** | "Especialidade registrada" | idem | 5 |

**10 de 10 procedimentos** estão dentro de um dos dois blocos. **Nenhum procedimento aparece solto no site** —
inclusive no rodapé, no `<title>`, na meta description e no JSON-LD, onde só aparecem os nomes das duas
especialidades. **Aprovado.**

## 6 · Formação *lato sensu*, MBA, curso livre ou congresso como credencial

```
=== FORMACAO LATO SENSU / CURSO LIVRE / CONGRESSO ===
padrão: lato sensu|MBA|especialização em|curso livre|imersão|certificação internacional|
        congresso|workshop|treinamento|formação continuada
  index.html:410: <dd>Professora de curso de especialização em Implantodontia</dd>
  --> OCORRENCIAS: 1
```

**Único achado, e foi reescrito.** A linha estava sob o rótulo `Magistério` — logo, inciso III, permitido —
mas a redação `Professora de curso de especialização` podia ser lida como *posse* de uma especialização
lato sensu. Reescrita para **`Integra o corpo docente de curso de especialização em Implantodontia`**,
que só admite a leitura de docência.

A ficha profissional completa contém **exclusivamente** itens dos incisos I a IV:

```
Título profissional        Cirurgiã-Dentista
Inscrição                  CRO-XX 00.000
Especialidades registradas Implantodontia · Prótese Dentária
Formação stricto sensu     Mestrado em Implantodontia · Doutorado em Reabilitação Oral
Magistério                 Integra o corpo docente de curso de especialização em Implantodontia
Em atividade desde         2011
Responsável técnica        Vértice Odontologia — CRO-XX 00.000-PJ
```
**Aprovado após reescrita.**

## 7 · Rodapé — dados obrigatórios do §3.2

| Exigência | `index.html` | `404.html` |
|---|---|---|
| Nome do profissional | ✅ Dra. Helena Sampaio Tomé | ✅ |
| Expressão "Cirurgiã-Dentista" | ✅ | ✅ |
| CRO da pessoa física | ✅ CRO-XX 00.000 | ✅ |
| CRO da pessoa jurídica | ✅ CRO-XX 00.000-PJ | ✅ |
| Responsável técnico identificado | ✅ | ✅ |
| Aviso de demonstração | ✅ | ✅ |

Verificação automática: `p404 -> { h1: 1, titulo: "Página não encontrada — Vértice Odontologia", rodape: true }`

O título profissional e o CRO aparecem também **na dobra do hero**, na faixa de credenciais, além do rodapé.
**Aprovado.**

## 8 · Depoimento com resultado clínico / paciente identificável

**Não existe seção de depoimentos no site.** Foi cortada na Fase 1, não redesenhada — ver
`MESSAGE-MAP.md` §7. O lugar dela é ocupado pela seção **O espaço** (§7), que é a prova social permitida.
Zero pessoas representadas em qualquer imagem. **Aprovado.**

## 9 · Orçamento de movimento — contagem real

```
=== @keyframes ===
  total: 14   (piso REF-1 = 11 | teto §9 = 15)
  nomes: rise, fadeIn, veil, draw, drift, orbit, sheen, nodePing,
         scan, breathe, barGrow, loadBar, grain, nudge

=== easings ===
  cubic-bezier distintos: 1 -> cubic-bezier(.22, 1, .36, 1)
  palavras-chave de easing (ease/linear/steps): 0 -> nenhuma

=== durações ===
  tokens: 4 -> 160ms  420ms  900ms  24s
  hard-coded fora dos tokens: 1 -> 1ms
      motion.css:182: animation-duration: 1ms !important;
      motion.css:185: transition-duration: 1ms !important;

=== famílias tipográficas ===
  dominantes: 2 -> Fraunces | Sora
  Inter: 0 · Roboto: 0 · Arial: 0 · Open Sans: 0 · Lato: 0 · Montserrat: 0 · Poppins: 0
  renderizado em navegador: Sora + Fraunces  (exatamente 2)

=== propriedades animadas dentro de cada @keyframes ===
  rise -> opacity, transform          fadeIn -> opacity
  veil -> clip-path, transform        draw -> stroke-dashoffset
  drift -> transform                  orbit -> transform
  sheen -> transform                  nodePing -> opacity, transform
  scan -> transform                   breathe -> opacity, transform
  barGrow -> transform                loadBar -> transform
  grain -> transform                  nudge -> transform
  UNIÃO: clip-path, opacity, stroke-dashoffset, transform
  FORA DO PERMITIDO PELO §9: NENHUMA

=== listeners ===
  addEventListener('scroll'): 0 reais
  addEventListener('mousemove'): 0 reais
  IntersectionObserver: 3 instâncias
```

> **Nota sobre o `1ms`:** as duas únicas ocorrências estão dentro de `@media (prefers-reduced-motion: reduce)`
> e existem para **abolir** movimento, não para produzi-lo. Usa-se 1ms em vez de 0 para que eventos
> `animationend`/`transitionend` continuem disparando. Não integra o orçamento de movimento.

**Comparação com o piso medido nas referências (`LEITURA-REFERENCIAS.md` §4):**

| | REF‑1 | REF‑2 | Nosso |
|---|---|---|---|
| `@keyframes` | 11 | 1 | **14** ✅ acima do piso |
| easings distintos | 4 | 0 | **1** ✅ decisão do §9, registrada |
| durações | 13 | 9 | **4** ✅ decisão do §9, registrada |
| famílias | 6 | 2 | **2** ✅ |
| `prefers-reduced-motion` | 1 | 0 | **global** ✅ |

**Aprovado.**

## 10 · Anti-clone — paleta, tipografia e direção visual

| Eixo | REF‑1 (Canva) | REF‑2 (Aranha) | Vértice | Coincide? |
|---|---|---|---|---|
| Base | branco, tema `light classic` | branco WordPress/Inspiro | **carvão `#07090A`, dark-first** | **não** |
| Tipografia | Canva Sans, Open Sans, Noto (6) | Inter + Onest | **Fraunces + Sora** | **não** |
| Acento | azul/roxo padrão Canva | preto e branco + fotos | **teal-titânio `#5FD9C4` + latão `#D9B461`** | **não** |
| Direção | landing de infoproduto | hub editorial com fotos | **instrumento de precisão, vetorial, zero fotografia** | **não** |

As duas famílias proibidas pelo §6 que as referências usam — **Inter** (REF‑2) e **Open Sans** (REF‑1) —
dão **0 ocorrências** no nosso CSS. Nenhum ativo foi copiado: nem foto, nem texto, nem fonte, nem CSS.
**Aprovado.**

## 11 · Densidade por seção — medida no navegador, seção a seção

Piso do §7: ≥35 tags · ≥130 palavras · ≥1 imagem ou sistema gráfico próprio · ≥2 controles interativos.
Palavras contadas por `textContent`, o que **inclui o conteúdo dos `<details>` fechados** (a primeira
medição usou `innerText` e subcontava as seções de acordeão em até 4×).

```
SECAO          SUPERF.     TAGS  PALAVRAS  GRAFICO  CONTROLES
--------------------------------------------------------------
inicio         deep          56       142        3          3
adiamento      light         48       333        4          4
profissional   dark          97       297        2          3
consulta       light         56       216        1          6
atuacao        dark         120       415        5         13
tecnologia     light-2       62       223        1          5
espaco         deep          69       186        2          9
metodo         light        108       479        2          5
pratico        dark          63       156        8          3
perguntas      light         57       344        1          9
contato        dark          66       203        5          7
--------------------------------------------------------------
MÍNIMO                       48       142        1          3
PISO §7                      35       130        1          2
```

**11 de 11 seções acima do piso em todos os quatro critérios.**

O `inicio` reprovava com **81 palavras** e foi corrigido para **142** (ver lista de reescritos).

**Ritmo alternado (§7):** as densidades em palavras seguem
`142 → 333 → 297 → 216 → 415 → 223 → 186 → 479 → 156 → 344 → 203`.
Não há três seções seguidas na mesma faixa de densidade.

**Alternância cromática (`DESIGN-SYSTEM.md` §3):**
```
adjacentes com superfície IGUAL: 0   (11 transições verificadas, incluindo contato → rodapé)
```

**Totais da página** contra o piso da REF‑2 (592 tags, 48 controles):
**802 tags** nas seções + cabeçalho/rodapé, **67 controles interativos**, **38 SVGs**. Acima em todos.
**Aprovado.**

## 12 · `prefers-reduced-motion: reduce`

Emulado via CDP (`Emulation.setEmulatedMedia`), página recarregada sob a preferência:

```
{
  "mq": true,
  "totalAnimacoes": 28,
  "rodando": 1,
  "comDuracaoMaiorQue5ms": 0,
  "amostraLongos": [],
  "elementosInvisiveis": 0
}
```

Três leituras:
1. **`comDuracaoMaiorQue5ms: 0`** — nenhuma animação com duração real. Todas foram achatadas para 1ms.
2. **`elementosInvisiveis: 0`** — nenhum `.reveal`, `.hero__line` ou `.hero__after` ficou preso em
   `opacity: 0`. Este é o modo de falha clássico de sites com revelação por scroll: desligar a animação e
   deixar o conteúdo invisível. O bloco `@media` reafirma `opacity: 1 !important` justamente para isso.
3. As camadas de ambiente, o pulso do nó da espinha, a varredura do botão e a barra de envio têm
   `animation: none !important`.

**Aprovado.**

## 13 · Contraste do menor texto sobre cada superfície

Medido no navegador, com a cor **efetivamente renderizada** e o fundo composto real:

```
SELETOR             TAM.   COR                  FUNDO                RAZÃO
.eyebrow            12px   rgb(78, 90, 92)      rgb(245, 242, 235)   6,39
.field__label       12px   rgb(155, 167, 166)   rgb(25, 33, 35)      6,60
.legal              12px   rgb(155, 167, 166)   rgb(7, 9, 10)        8,05
.chip               12px   rgb(11, 99, 85)      rgb(235, 230, 218)   5,76
.spec__legal        12px   rgb(155, 167, 166)   rgb(25, 33, 35)      6,60
.tech__label        12px   rgb(11, 99, 85)      rgb(245, 242, 235)   6,41
.stage__decide      14px   rgb(78, 90, 92)      rgb(235, 230, 218)   5,73
.privacy            12px   rgb(155, 167, 166)   rgb(25, 33, 35)      6,60
.step-btn__d        12px   rgb(78, 90, 92)      rgb(235, 230, 218)   5,73
.foot p             14px   rgb(155, 167, 166)   rgb(7, 9, 10)        8,05
.card p             14px   rgb(195, 204, 203)   rgb(25, 33, 35)      9,99
.disc__body p       14px   rgb(57, 68, 70)      rgb(235, 230, 218)   8,07
.plans-list li      14px   rgb(195, 204, 203)   rgb(11, 15, 17)     11,75
.hours dt           14px   rgb(95, 217, 196)    rgb(11, 15, 17)     11,19
```

**Pior caso: 5,73:1.** Piso exigido: 4,5:1. Margem de 27%.

Bordas de controle (WCAG 1.4.11, piso 3:1): `#657375` sobre escuro = **3,64:1** ·
`#8A8270` sobre claro = **3,41:1**. Anéis de foco: **11,19:1** e **6,41:1**.

**Aprovado.** A tabela completa por token, com o cálculo, está em `DESIGN-SYSTEM.md` §2 e §6.

## 14 · Abrir em 390 · 768 · 1440 · 1920 e olhar cada seção

Capturado com Edge 151 headless. **Duas falhas reais foram encontradas aqui e em nenhum outro lugar** —
é a verificação que mais rendeu.

### Medições estruturais

```
largura   h1   overflow horizontal   altura do documento
390        1   não                   25.4k px
768        1   não                   21.3k px
1440       1   não                   16.2k px
1920       1   não                   17.1k px
```

### O que foi visto, seção a seção (1440 px)

| Seção | O que apareceu na tela |
|---|---|
| **Hero** | H1 em Fraunces sobre carvão, "é o dente." em teal. Malha topográfica visível ao fundo, halo cônico à direita. Faixa de credenciais em 4 colunas alinhadas ao rodapé da dobra. Espinha à esquerda com nó ativo em losango. Lê como peça editorial, não como template. |
| **O adiamento** | Corte para osso quente. 3 acordeões lado a lado, bloco "três coisas que não acontecem" com filete teal à esquerda. |
| **Quem conduz** | Retrato construído à esquerda: silhueta com curvas de nível clipadas, contorno teal traçado, marcas de medição em latão, legenda declarando que não é fotografia. Texto + controle segmentado + 2 cartões à direita. |
| **A primeira consulta** | Stepper de 5 etapas à esquerda com a 01 marcada em teal; painel à direita com chips de duração, texto e 4 marcadores. Faixa "o que você leva para casa" em 3 colunas. |
| **Áreas de atuação** | 2 cartões, cada um com o nome da especialidade, chip "Especialidade registrada", o texto legal com o CRO, um grafismo próprio e 5 acordeões. A amarra do art. 43 é visualmente óbvia. |
| **Tecnologia** | 4 linhas em 3 colunas, cada uma com interruptor "Antes/Agora" funcionando. Nota sobre a Res. 196/2019 ao pé. |
| **O espaço** | Planta baixa das 4 salas, recepção destacada em teal, lista de salas à direita e painel com área e luz. |
| **Como conduzimos um caso** | Diagrama horizontal de 4 nós ligados, com "você aprova" entre eles, seguido de 4 cartões de etapa e o bloco de orçamento com a explicação do porquê não há antes e depois. |
| **Convênios e horários** | 3 colunas: horário com indicador **"Aberto agora"** aceso em verde e o dia corrente destacado em teal; convênios; endereço com botão de copiar. |
| **Perguntas frequentes** | 8 acordeões em 2 colunas. |
| **Contato** | Bloco WhatsApp com brilho de acento à esquerda, formulário de 4 campos à direita. |

### Falhas encontradas **por olhar** e corrigidas

**Falha A — o menu `<dialog>` fechado cobria a página inteira.**
`.sheet { display: grid }` sobrescrevia o `display: none` que o navegador aplica a `dialog:not([open])`.
Na primeira captura o hero aparecia coberto pelo menu e a seção de convênios saía como um retângulo preto
de 9 KB. Nenhuma medição estrutural pegou isso — a seção existia no DOM, com todas as tags e palavras.
Corrigido com `dialog.sheet:not([open]) { display: none; }`.

**Falha B — `.tech__scan` virou item de grade.**
`.tech__row > * { position: relative }` tem a mesma especificidade de `.tech__scan { position: absolute }`
e vinha depois, então vencia. O overlay de varredura passou a ocupar a primeira coluna como uma barra
cinza e empurrou o conteúdo. Corrigido com `.tech__row > *:not(.tech__scan)`.

**Falhas C e D — polimento**, também só visíveis na tela: os itens do menu quebravam em duas linhas
entre 992px e 1200px (agora o menu compacto assume abaixo de 1200px), e os `.chip` esticavam a largura
da coluna e passavam a parecer campos de formulário (agora `justify-items: start`).

### Verificação por interação, não só por captura

```
stepper       -> clicando na etapa 03: "Imagem, se necessário" | chips: ~10 minutos · Etapa 3 de 5 · Sala clínica
tour          -> clicando na sala D: "Área de esterilização" | sala ativa na planta: esteril
tecnologia    -> alternando o interruptor: rótulo "Como costumava ser", texto trocado corretamente
segmentado    -> "Ficha completa" exibida, painel "Em resumo" ocultado
acordeão      -> abre e fecha
menu <dialog> -> abre (display: grid, aria-expanded: true, foco vai para "Fechar")
                 fecha (display: none, aria-expanded: false)
formulário    -> vazio:  estado "error" · "Faltou preencher um campo obrigatório." · 1 campo aria-invalid
                 cheio:  estado "error" · "Este é um site-modelo demonstrativo e ainda não tem destino de
                         envio configurado — nenhuma mensagem foi enviada. Use o WhatsApp ao lado..."
teclado       -> 1º Tab: "Ir direto para o conteúdo" | 7º Tab: item de navegação
aria-current  -> rolando até Tecnologia: nav e espinha acompanham; até Método: idem
390 px        -> sem overflow horizontal · menu compacto funcional · planta baixa legível
                 alvos de toque do rodapé de 22px → 43px
```

**Aprovado após as quatro correções.**

---

# Observação metodológica

Duas das três falhas mais graves deste projeto **não apareceram em nenhuma medição estrutural**. O DOM tinha
as tags certas, a contagem de palavras batia, o contraste passava e a acessibilidade estava limpa — e a página
estava coberta por um menu invisível ao teste. Só apareceram porque o §12.14 obriga a **olhar**.

A terceira — o diagrama de método fraco demais — só apareceu porque a imagem, ao ser reduzida para leitura,
apagou traços de 1px e texto de 11px. O diagrama foi refeito com traço de 2px e texto de 15px.

Houve também um **falso alarme instrutivo**: a seção "Como conduzimos um caso" aparecia vazia nas capturas.
A causa não era o site, e sim o arranjo de teste — o `scroll-behavior: smooth` da página faz com que rolagem
programática nunca chegue ao destino dentro do tempo de espera do script. Foi diagnosticado sondando o DOM
(`opacity: 1`, `stroke-dashoffset: 0`, cores corretas) em vez de aceitar a primeira aparência. Aproveitou-se
para folgar a margem do `IntersectionObserver` de `-12%` para `220px` antes da entrada, o que faz o conteúdo
começar a revelar antes de chegar à tela.

---

*Revisão final é responsabilidade do cirurgião-dentista inscrito. Este documento não constitui parecer sobre
conformidade ética.*
