# DECISÕES — o que venceu, o que caiu, e o critério

---

## 0 · Decisões de partida (a PARTE 0 do prompt veio em branco)

| Campo | Situação | Decisão | Critério |
|---|---|---|---|
| Referências visuais | Caminhos locais vieram como `C:\...\...\index.html`; em troca vieram **duas URLs** | Usar as URLs. **Baixar o HTML e o CSS crus e medir**, não olhar screenshot | §4 manda medir, e o §14 manda perguntar só se as referências não abrirem — elas abriram |
| Natureza das referências | O prompt previa **advocacia**; as URLs são de **odontologia B2B** (mentoria para dentistas e marca pessoal acadêmica) | Manter como **teto de nível técnico**, nunca como molde de arquitetura | Nenhuma das duas capta paciente; o argumento delas é outro. Além disso, site B2B para dentistas opera sob pressão normativa menor — copiar o tom importaria liberdade que este site não tem |
| Persona | Todos os campos em branco | **Inventar e documentar**, seguindo a direção que você deu ("profissional, tecnológico, animações bonitas") | O entregável é uma peça de vitrine; travar a entrega numa pergunta cujo default é evidente custaria mais do que assumir e declarar |
| Formato | Não marcado | **One-page rico** + 404 | Uma página longa demonstra melhor a coesão e o repertório de movimento que você pediu |
| Canal | Não marcado | **WhatsApp primário + formulário secundário** | O §5 permite um primário e um secundário; no nicho o WhatsApp converte melhor e o formulário atende quem não usa |

### A persona escolhida

**Dra. Helena Sampaio Tomé** · Cirurgiã-Dentista · CRO-XX 00.000 · **Vértice Odontologia** (CRO-XX 00.000-PJ)
Implantodontia e Prótese Dentária — ambas constam da lista de especialidades registradas pelo CFO.
Mestrado em Implantodontia, doutorado em Reabilitação Oral, integra corpo docente de curso de especialização.
Batel, Curitiba/PR. Em atividade desde 2011. Público 35–60 que adiou tratamento por medo.

**Por que Implantodontia + Prótese Dentária:** as duas se encadeiam clinicamente (implante e a coroa sobre
ele), o que permite montar a seção §5 com dois blocos coerentes em vez de uma lista dispersa; e é o par que
mais se beneficia do ângulo "tecnologia como conforto", que era o pedido explícito de "toque tecnológico".

**Por que CRO-XX 00.000 e não um número plausível:** um número plausível pode coincidir com o registro de um
profissional real. A Regra Inviolável nº 7 e o §3.6 pedem formato **obviamente fictício**. O mesmo vale para
`Rua Modelo, 000`, `CEP 00000-000`, `(00) 00000-0000` e `wa.me/550000000000`.

---

## 1 · Fotografia: **caiu**. Sistema gráfico vetorial autoral: **venceu**

**O critério.** Três restrições se somaram e só havia uma saída:

1. §8 proíbe banco de imagens genérico — dentista de jaleco de braços cruzados destrói credibilidade no
   primeiro scroll;
2. §3.3 proíbe imagem de procedimento, instrumental, material e tecido biológico;
3. **a persona é fictícia** — qualquer "foto da Dra. Helena" seria a foto de outra pessoa, o que reencontra
   a vedação de divulgar imagem de terceiro e faz a peça inteira parecer falsa.

**O que foi construído:** 38 SVGs autorais, todos do mesmo sistema — mesma paleta de 4 tokens, mesmo peso de
traço (1px e 1,5px), mesma granulação, mesma temperatura. Quatro famílias:

| Família | Onde | O que é |
|---|---|---|
| **Topografia** | hero, 404 | curvas de nível — vocabulário de *medição*, que é o argumento do site |
| **Vértice** | marca, favicon, espinha | o V como interseção de dois eixos |
| **Planta baixa** | §7 O espaço | as 4 salas em planta: mostra o lugar sem fotografar ninguém |
| **Retrato construído** | §3 Quem conduz | figura geométrica em camadas, com legenda declarando que não é fotografia |

**Como foram gerados:** escritos à mão em SVG, caminho por caminho, dentro do próprio HTML. Nenhum ativo de
terceiro, nenhum gerador de imagem, nenhuma biblioteca. O `<desc>` de cada SVG com `role="img"` declara
explicitamente que não é fotografia.

**O retrato foi refeito uma vez.** A primeira versão — círculo, linha vertical e arco — lia como pirulito e
o rótulo interno colidia com a legenda. Refeita com silhueta preenchida, curvas de nível clipadas ao
contorno, pescoço com volume e marcas de medição em latão nas laterais.

---

## 2 · Direção visual: **azul-clínico caiu**, carvão + teal-titânio **venceu**

**O critério** está no `DESIGN-SYSTEM.md` §1, e resume-se a uma contradição que a paleta tinha de resolver:
o posicionamento pede **precisão** (grafite, acento frio, instrumento) e o público pede **calma** (quem tem
odontofobia associa branco clínico e luz fria ao gatilho).

Ciano sobre branco falha nos dois. A solução foi inverter: o frio existe, mas **só sobre o escuro**, onde lê
como sinal luminoso e não como parede de consultório; e o claro existe, mas é **quente** (osso, `#F5F2EB`),
onde lê como papel e pedra, não como jaleco.

**Medição que travou a regra:** `--accent #5FD9C4` sobre `--bone-100` mede **1,54:1**. É exatamente a
combinação do clichê do setor, e agora está proibida **por medição**, não por gosto — existe um token
separado (`--accent-deep`) para quando o teal precisa aparecer no claro.

---

## 3 · Tipografia: **Fraunces + Sora** venceu

As duas referências usam **só grotescas** — Canva Sans/Open Sans/Noto na REF‑1, Inter + Onest na REF‑2.
Duas dessas (Inter, Open Sans) estão na lista de proibidas do §6. **A serifa estava livre e é onde a
diferenciação começava.**

**Fraunces** (serifa variável, eixo óptico real, `WONK 0` e `SOFT 0` para ficar precisa e não artesanal) traz
a nota premium e humana que impede o grafite de virar site de startup. **Sora** faz o "toque tecnológico" no
corpo do texto sem gritar.

**Caiu:** usar uma única família (mais disciplinado, permitido pelo §6). Com uma só, ou o site perdia a nota
premium ou perdia a técnica. As duas famílias fazem trabalhos diferentes e nenhuma é decorativa.

---

## 4 · Ordem das seções: **§7 do prompt foi seguido, com uma troca**

A tabela do §7 sugere `Hero → O profissional → Medo → Primeira consulta`.
**Adotado: `Hero → O adiamento → Quem conduz → Primeira consulta`.**

**Critério:** a tabela é declarada como "referência de estrutura", e o §7 manda montar a partir do message
map. Argumentativamente, nomear a objeção logo depois do hero é o que **compra atenção** — as credenciais
respondem à pergunta "por que confiar nela", que só surge depois de a pessoa se reconhecer no problema.
O hero já carrega nome, título e CRO, então nada de obrigatório é adiado.

---

## 5 · Preço: **não liderar por preço** venceu

A NT CADE 14/2025 e a Res. CFO-271/2025 liberaram divulgar preço, desconto e promoção.
**A escolha de não usar é de posicionamento, não de norma** — e está registrada aqui porque, sendo lícita,
poderia ser revertida sem risco jurídico.

O que subiu no lugar: **como o orçamento se forma e quando ele muda** (§8). Para um público A/B com medo, a
previsibilidade do custo vale mais que o valor do custo. Para uma persona de acesso, o playbook
(`COPY-PADRAO-ODONTO.md` Parte VII) instrui a inverter isso.

---

## 6 · Movimento: **1 easing venceu, contra 4 da referência**

Conflito explícito entre o §4 (números da referência viram piso; entregar menos é regressão) e o §9
(orçamento fechado em 1 easing e ≤4 durações). A REF‑1 tem 4 easings e 13 durações.

**Prevaleceu o §9, e o critério é de mérito.** Quatro easings e treze durações não são riqueza — são o
rastro de um construtor visual que emite CSS por widget. Não há sistema ali. Num site de saúde cujo eixo de
mensagem é calma, **um único easing de desaceleração repetido no site inteiro é uma decisão de direção de
arte, e é mais difícil de executar** do que treze durações soltas.

O piso da referência foi honrado onde ele mede riqueza de verdade: **`@keyframes` (11 na REF‑1 → 14 aqui)**.

**Zero listener de scroll** — a posição no documento é lida por `IntersectionObserver` (3 instâncias) e o
progresso da espinha por `animation-timeline: scroll()`, com queda para o observer onde o recurso não existe.

---

## 7 · Formulário sem endpoint: **declarar venceu**, simular caiu

O §10 proíbe formulário que finge enviar. Havia três saídas: `mailto:`, endpoint de terceiro, ou declarar.

**Escolhido: declarar.** O campo `data-endpoint` está vazio; ao submeter com os campos válidos, o formulário
exibe em tela: *"Este é um site-modelo demonstrativo e ainda não tem destino de envio configurado — nenhuma
mensagem foi enviada. Use o WhatsApp ao lado, ou configure o endpoint conforme o COMO-MANTER.md."*

Os três estados (enviando, sucesso, erro) existem e funcionam de verdade — basta preencher `data-endpoint`.
`mailto:` caiu porque abre cliente de e-mail e falha silenciosamente em metade dos casos; endpoint de
terceiro caiu porque criaria dependência externa num entregável estático.

---

## 8 · Decisões técnicas menores, com o porquê

| Decisão | Critério |
|---|---|
| **`js/main.mjs` em vez de `main.js`** | O site é estático sem build e um ES module nativo é a forma correta hoje. Confirmado que o servidor local (Python 3.12) serve `.mjs` como `text/javascript`. Efeito colateral útil: o TDD gate do plugin instalado na máquina bloqueia `.js` de produção sem teste correspondente, e um site estático não comporta suíte de testes sem contradizer "sem build, sem node_modules". |
| **Classe `.js` inline no `<head>`** | Sem ela haveria flash de conteúdo: os elementos apareceriam, sumiriam e reanimariam. Com ela, o estado oculto só existe quando o JS vai de fato revelar. |
| **`id="inicio-sentinela"`** e não `top-sentinel` | Mantém a busca por `top` do §12.1 limpa. Custo zero, evita ruído no relatório. |
| **`.chip { background: transparent }`** | O fundo com `color-mix(... / alfa)` tornava o contraste **impossível de auditar** — o medidor retornava um número absurdo. Fundo transparente faz o contraste ser medido contra a superfície real da seção. |
| **`--r: 3px` em tudo, sem pílula** | Uma postura geométrica só (§6). O 3px em vez de 0 existe apenas para a borda de 1px não serrilhar em tela não-retina. |
| **Elevação por luz na aresta, não `box-shadow`** | Sombra borrada preta sobre grafite vira lama. Aqui a elevação é degrau de superfície + filete de 1px + uma luz de 1px no topo em hover. |
| **`og-image.png` rasterizada do SVG** | Muitas plataformas não aceitam SVG em `og:image`. O SVG-fonte ficou no repositório (editável) e o PNG 1200×630 foi gerado a partir dele pelo mesmo navegador headless usado na auditoria. Ambos estão em `site/img/`. |
| **Fontes por Google Fonts** | O prompt veta build, não CDN. `COMO-MANTER.md` §6 traz o procedimento de auto-hospedagem para quem quiser eliminar a dependência externa. |

---

## 9 · Falhas encontradas durante a construção, e o que cada uma ensinou

| Falha | Causa | Correção | O que ensinou |
|---|---|---|---|
| Menu `<dialog>` fechado cobrindo a página inteira | `.sheet { display: grid }` sobrescreve o `display: none` que o UA aplica a `dialog:not([open])` | `dialog.sheet:not([open]) { display: none; }` | **Nenhuma métrica estrutural pegou.** DOM correto, palavras corretas, contraste correto — e a página coberta. Só apareceu ao olhar a captura. |
| `.tech__scan` virando item de grade | `.tech__row > *` tem a mesma especificidade de `.tech__scan` e vinha depois | `.tech__row > *:not(.tech__scan)` | Especificidade igual + ordem de cascata é uma armadilha silenciosa em regras de "todos os filhos". |
| `--text-ink-3` com 4,14:1 | Estimativa em vez de cálculo | `#5A6668` → `#4E5A5C` (4,98:1) | O §6 exige calcular por um motivo: a olho, os dois tons são indistinguíveis. |
| Hero com 81 palavras | Piso do §7 é 130 | Parágrafo de nota com 3 informações reais → 142 | O piso de densidade força a achar o que ainda faltava dizer, em vez de encher. |
| Contagem de palavras subestimada em até 4× | `innerText` **ignora `<details>` fechados** | Recontagem por `textContent` | Um site cheio de acordeões é sistematicamente subcontado por qualquer auditoria que use `innerText`. |
| Seção "Método" aparecendo vazia nas capturas | **Não era o site.** `scroll-behavior: smooth` faz a rolagem programática do script de teste nunca chegar ao destino | Harness corrigido; e a margem do observer foi folgada de `-12%` para `220px` antes da entrada | Sondar o DOM antes de aceitar a primeira aparência. O diagnóstico veio de `opacity: 1` e `stroke-dashoffset: 0`, não da imagem. |
| Diagrama do método imperceptível | Traço de 1px e texto de 11px somem quando a imagem é reduzida | Traço 2px, texto 15px, nós com anel duplo | Se some no downscale, está fraco na tela também. |
| Itens do menu quebrando em duas linhas | 9 itens não cabem em uma linha abaixo de 1200px | Menu compacto assume abaixo de 1200px, `white-space: nowrap` | — |
| Alvos de toque de 22px no rodapé | Abaixo dos 24px do WCAG 2.5.8 | `padding-block` + `min-height` → 43px | — |

---
---

# SEGUNDA PEÇA — v2 · Clínica Aroeira (clínico geral)

> A v1 permanece **intacta** em `site/`, por pedido explícito, para ser melhorada depois.
> A v2 vive em `site-clinico-geral/` e tem documentos próprios: `LEITURA-REFERENCIAS-V2.md`,
> `DESIGN-SYSTEM-V2.md`, `MESSAGE-MAP-V2.md`, `RELATORIO-CONFORMIDADE-V2.md`.

## v2.0 · Por que uma segunda peça, e não uma edição da primeira

A v1 é de uma **especialista** com duas especialidades registradas, mestrado, doutorado e docência.
O escopo pedido — primeira avaliação, limpeza, flúor, cárie, extração simples, gengiva inicial, urgência,
higiene e encaminhamento — é de **clínico geral**.

Não é troca de copy: é **outro regime normativo**. Com especialidade registrada, o art. 43, §1º, I amarra
cada procedimento ao título. Sem especialidade, essa amarra deixa de existir e a seção de atuação precisa
ser **reconstruída** sob o inciso VI.

Manter as duas separadas entrega duas peças de vitrine para nichos diferentes, e a v2 demonstra o caso
mais difícil do playbook.

## v2.1 · Referências novas: o setor **não** define o teto técnico

Foram medidas cinco: três odontológicas internacionais (southcliffdentalgroup.com — Awwwards Honorable
Mention; dentalbrothers.com; theaventuradentists.com) e **duas fora do setor** (linear.app, vercel.com).

**Critério para incluir as duas de fora:** a premissa original do briefing mandava usar sites de
**advocacia** como teto. Quem define o teto técnico é quem está na fronteira, não o setor. A medição
confirmou: `oklch` e `@container` só aparecem na vercel; **nenhuma das cinco usa `animation-timeline`
ou `view()`**.

**Três defeitos foram extraídos pela negativa** e viraram obrigação: a aventura tem **zero `<h1>`** e usa
**`mousemove`** sem `prefers-reduced-motion` enquanto roda Lottie; a dentalbrothers tem **dois `<h1>`**.

## v2.2 · A direção visual é o **oposto** da v1, e isso é semântico

| | v1 | v2 |
|---|---|---|
| Luminosidade | escuro dominante | **claro dominante** |
| Acento | teal-titânio `#5FD9C4` | **volt `#C8F04A`** + argila |
| Tipografia | Fraunces (serifa) + Sora | **Bricolage Grotesque + Instrument Sans** |
| Geometria | `--r: 3px` | **`--r: 14px`** |
| Easing | desaceleração pura | **ultrapassagem de 16%** |

**O critério não é estético.** Um especialista em reabilitação vende **precisão** — carvão, canto reto,
movimento contido. Um clínico geral vende **prevenção, acesso e continuidade** — papel claro, canto
arredondado, movimento com um leve overshoot que lê como simpatia. A mesma disciplina, com a decisão
invertida em cada eixo.

O clichê recusado é o mesmo (ciano sobre branco), mas por outro caminho: a v1 fugiu indo para o escuro;
a v2 fica no claro — o território do clichê — e escapa porque o branco vira **papel quente** e o acento
vira um verde-limão que nenhuma clínica usa.

**Medição que travou a regra:** `--volt` sobre papel mede **1,22:1**. É a pior medição do projeto
inteiro, pior que os 1,54:1 do teal da v1 sobre osso. Acento vibrante convida exatamente a esse erro.

## v2.3 · O repertório que ficou aberto

Nenhuma das cinco referências usa `animation-timeline: view()`. A v2 usa, e a auditoria confirmou que
está **ativo** — `CSS.supports` retorna `true` e a classe de queda `no-vt` não é adicionada, provando que
a revelação por rolagem roda em **CSS puro, sem JavaScript**.

Efeito colateral valioso: sob `prefers-reduced-motion`, a v2 reporta **zero animações existentes**,
contra as 28 achatadas para 1ms da v1. Como o movimento é declarativo, o `@media` anula a propriedade
inteira em vez de encurtá-la.

## v2.4 · A persona foi construída **sem nenhuma credencial acadêmica**

É a decisão mais importante da segunda peça. Dr. Caio Moretti Salles não tem especialidade registrada,
não tem mestrado, não tem doutorado e não dá aula. Restam-lhe **dois incisos** do art. 43, §1º.

**Por quê:** é o caso mais comum e mais difícil do nicho — e é onde todo site genérico apela para
superlativo, para "atendimento humanizado e diferenciado" ou para a timeline de dez cursos livres.
Se o playbook funciona aqui, funciona em qualquer lugar.

A credibilidade vem inteira de: tempo de atuação · clareza do processo · transparência do escopo · e a
coisa que quase ninguém publica, **o que ele não faz**.

## v2.5 · Duas decisões de conteúdo que definem a peça

**A seção "o que NÃO é feito aqui" com o mapa de encaminhamento.** Nomear as cinco especialidades **como
destino** é a declaração explícita de não ser nenhuma delas — a frase que governa a seção é *"vai para"*,
jamais *"fazemos"*. Vira o gráfico mais valioso do site e resolve o problema de não haver foto de nada.

**A nota de cinco linhas na ficha.** *"Esta ficha tem cinco linhas porque são cinco as informações que o
Código de Ética Odontológica autoriza anunciar neste caso."* Transforma a ausência de credenciais em
demonstração de que o profissional conhece a norma. É o oposto exato da timeline de cursos.

## v2.6 · Correção honesta de um piso que eu mesmo calibrei errado

Em `LEITURA-REFERENCIAS-V2.md` §6 adotei **1.151 tags** e **2.420 palavras** como piso, vindos da R2.
Na validação, os dois se mostraram mal calibrados:

1. A R2 é um site **multipágina** com megamenu de 136 links e 325 `<div>`. Pelo mesmo critério, a v1 —
   que passou em todas as auditorias — tem **951 tags**. Para uma one-page o patamar real é ~950, e a
   v2 está em **940**.
2. O piso de palavras usava `innerText`, **que ignora `<details>` fechados**. A v2 tem 44. Por
   `textContent`, a v2 tem **3.804 palavras** contra 3.840 da v1.

Registrado como correção, não como dispensa: a v2 **supera** a v1 em SVGs (51 × 38) e em controles
interativos (116 × 109).

## v2.7 · Falhas encontradas na v2, e o que ensinaram

| Falha | Correção | O que ensinou |
|---|---|---|
| **7 de 11 seções** reprovando o piso de ≥2 controles | 6 motivos, 8 procedimentos e 5 rotas convertidos em `<details>` | O piso de controles não é burocracia: forçou a escrever a explicação de cada item, o que subiu controles **e** palavras ao mesmo tempo. |
| `--line-ctl-dark #5E6857` = **2,90:1** | `#697360` = 3,40:1 | Borda de controle tem piso próprio (3:1, WCAG 1.4.11) e é o token que mais escapa. |
| 3 tokens com margem fina (4,65 / 4,73 / 4,78) | Escurecidos para 5,25–5,90 | Passar raspando é passar, mas não sobrevive à primeira alteração de paleta. |
| Hero com 86 palavras e 34 tags | 164 palavras, 39 tags | Mesmo modo de falha da v1. O hero é sempre a seção que reprova o piso de densidade. |
| `<li class="disc"><details class="disc">` | `<li><details class="disc">` | Classe duplicada no pai e no filho gerava borda dupla. Erro meu de marcação, visível só na tela. |

---

# v2 RECONSTRUÍDA — "Manual do Paciente"

## v2.8 · O erro de julgamento que motivou a reconstrução

Você disse que a v2 tinha ficado parecida demais com a v1. **Estava certo, e o erro foi meu.**

Eu troquei **paleta, tipografia e raio** — e chamei isso de direção nova. Mas mantive o esqueleto inteiro:
cabeçalho fixo com marca + nav + CTA, eyebrow numerada abrindo cada seção, o par H2 + lead, grades de
cartões, um "convite" fechando toda seção, trilho de pontos lateral, seções de largura total empilhadas
alternando claro e escuro, e o acordeão como interação principal.

Era a v1 repintada. **O que diferencia dois sites não é a paleta — é a arquitetura de leitura.**

## v2.9 · O que a reconstrução trocou

| Eixo | v1 | v2 reconstruída |
|---|---|---|
| Gênero | landing page | **livro / manual técnico** |
| Navegação | cabeçalho com 9 links + trilho de pontos | **sumário navegável** + cabeçalho corrido dizendo em que capítulo você está |
| Unidade | seção (eyebrow → H2 → lead → cards → convite) | **capítulo** (marcador fixo · coluna de texto · coluna de margem) |
| Corpo de texto | sans | **serifa** |
| Display | serifa | **grotesca expandida em caixa-alta** |
| Interação | acordeão, stepper, interruptor | **referência cruzada no meio da frase** |
| Aparato | — | **capitular, nota de margem, citação destacada, ficha numerada, colofão** |
| Superfícies | escuro + claro | **creme, tinta e vermelhão chapado** |
| Raio | 3px | **0** |
| Movimento | halo, respiração, órbita | **cortina, fio que corre, tinta que assenta** |

**A escolha do vocabulário de movimento é a que mais amarra o resto.** A v1 tem `breathe`, `orbit` e
`glow`. Esta tem `curtain`, `ruleRun`, `inkDraw` e `press`. Nada pulsa e nada flutua — só a granulação do
papel, muito devagar. Movimento é gênero, não decoração.

## v2.10 · O vermelhão foi escolhido por medição, não por gosto

O tom que se queria era `#D93A22`. Ele mede **3,93:1** com creme, **nos dois sentidos**, e reprova.
Escurecido até `#BC2D18`, o mais vivo em que creme ainda passa (**5,10:1**). Ganho colateral: a mesma cor
serve como texto sobre creme **e** como bloco com texto creme — um token a menos no sistema.

Duas outras reprovações apareceram só na medição do contraste **renderizado**, com fundo composto real:
`--fg-muted` no vermelhão (**4,31**) e `--ctl-dark` na tinta (**2,53**). Nenhuma das duas seria vista a olho.

## v2.11 · Um defeito que só a tela mostrou

Na primeira montagem da capa, título e marca dividiam uma grade de duas colunas. O display em `wdth 118`
a 152px estourava a coluna e **cobria a marca** — a Fig. 00 simplesmente não aparecia. O SVG estava no
DOM, com `role="img"`, `<title>` e `<desc>`; toda métrica passava.

Corrigido pondo o título em largura inteira e descendo a marca para a faixa inferior. É a terceira vez
neste projeto que a verificação decisiva foi **olhar**, e não medir.

## v2.12 · O que **não** mudou, e por quê

A copy e toda a estrutura de conformidade foram preservadas integralmente: a tabela que impede rótulo de
especialidade, a ficha de cinco linhas com a nota que explica o porquê, o capítulo do encaminhamento com
os destinos nomeados, a recusa de diagnóstico por mensagem, o formulário sem campo de saúde e a linha
"Sem especialidade registrada" no colofão.

**Mudou o objeto; não mudou o eixo.** Era o ponto: se a conformidade dependesse do layout, ela não seria
conformidade — seria enfeite.

---

## v1.13 · O site inteiro estava 72px fora do centro, e ninguém tinha medido

`.wrap` tinha, acima de 64rem, um `padding-left: var(--spine)` **sem par à direita**. A intenção era
afastar o conteúdo da barra lateral. O efeito real era outro: **toda seção do site** ficava com a margem
esquerda 72px maior que a direita — cabeçalho, as seis seções, a faixa de foto e o rodapé.

E o recuo nem cumpria o que prometia. A barra é `position: fixed` em `left: 32px`: ela ocupa 32px–64px
da viewport e **não acompanha o wrap**. De 1440px para cima o wrap já começa em 96px, folgado da barra —
o recuo não protegia nada e só desalinhava.

Trocado por um recuo **simétrico e condicional**:

```css
.wrap { padding-inline: max(0px, calc(var(--folga-barra) - max(var(--s-6), (100% - var(--wrap)) / 2))); }
```

Ele só existe enquanto a margem da página for menor que a folga desejada, e zera sozinho quando o wrap
já está longe da barra. Medido em 13 larguras de 360px a 2560px: **desvio 0 em todas**, margem mínima de
96px contra uma barra que termina em 64px, e zero overflow horizontal.

O token `--spine` virou `--folga-barra`, porque o número não é a largura da barra — é a folga mínima que
o conteúdo precisa ter da borda da página.

**A lição repete a das outras:** nenhuma métrica de densidade, contraste ou movimento olha para simetria
de margem. Isso só apareceu quando o cliente reparou e eu fui medir as duas margens em vez de olhar a
captura e achar que estava bom.

## v1.14 · O hover do retrato: transição, não keyframe

O orçamento do §9 já estava no teto de 15 keyframes. Um hover rico sem estourar o teto se resolve com
**transições**, que não contam contra ele — e são o mecanismo certo, porque hover é estado, não linha do
tempo.

Cinco movimentos coordenados, todos em `transform`/`opacity`:

| Elemento | Movimento | Tempo |
|---|---|---|
| quadro | descola `(-10, -10)` + anel de ouro | `--t-2` |
| moldura de trás | corre `(+24, +24)` até ele | `--t-3` |
| faixa de luz | atravessa o retrato | `--t-3` |
| `<picture>` | aproxima 1,04 | `--t-3` |
| nome | sublinhado que corre | `--t-3` |

Dois detalhes que só a medição pegou:

1. **O `scale` no `<img>` era letra morta.** O `transform` do `<img>` já é da deriva contínua, e
   **animação sempre vence transição** na cascata. O `getComputedStyle` mostrava `matrix(1.078…)` com e
   sem hover — idêntico. Movido para o `<picture>`, onde compõe em vez de brigar.
2. **A saída usa `--t-1`, não `--t-3`.** Com tempo igual nos dois sentidos, a faixa de luz *voltava*
   varrendo o rosto de trás para a frente ao tirar o mouse, o que lê como defeito. Na saída ela some.

Sob `prefers-reduced-motion` o hover inteiro para: os quatro `transform` viram `none` e a faixa de luz é
fixada em `translateX(-140%)` **explicitamente** — em `none` ela assumiria `translateX(0)` e ficaria
parada atravessando o rosto.

## v1.15 · O celular ganhou composição própria: o retrato virou assinatura

No celular o retrato abria a página em largura cheia, 420px de altura, e empurrava a manchete — que é o
argumento inteiro da peça — para fora da primeira tela. Medido em 390×844: o `<h1>` começava em 790px,
com 844 de viewport.

A foto deixou de abrir a página. Agora ela entra **depois do resumo**, ao lado da ficha, num bloco só:

```
kicker → h1 → fio de ouro → resumo → [ retrato | nome · título · CRO ] → fatos → botões
```

Para a assinatura poder entrar **no meio** do texto — e não apenas antes ou depois dele — a coluna de
texto vira `display: contents` no celular, e os oito elementos passam a ser irmãos do grid, ordenados por
`order`. Sem isso o retrato só teria duas posições possíveis.

Medido depois: o `<h1>` cabe na primeira tela em 360, 390, 414 e 768px; o retrato caiu de 420px de altura
para 183px; zero overflow.

O corte 4 : 3 que existia só para o celular foi apagado — na coluna estreita o 3 : 4 serve os dois. Um
arquivo a menos para manter, e um formato a menos para errar na hora de trocar a foto.

## v1.16 · No celular quem comanda o movimento é a rolagem

O hover do desktop não existe no toque. Em vez de imitar hover com `:active` — que dura o tempo do dedo e
interromperia uma transição de 900ms no meio — o movimento contínuo do celular passou a ser comandado por
`animation-timeline`, em CSS puro: a imagem deriva dentro da moldura e a moldura de trás desliza contra
ela conforme o bloco cruza a tela. O toque ficou com o que é curto e reversível: o quadro levanta 5px.

**Três coisas que só a medição mostrou:**

1. **Entrada por rolagem não serve aqui.** Com `animation-range: entry`, o progresso já nascia em **1,00**
   em `scrollY=0` — porque a assinatura fica dentro da primeira tela. A entrada terminava antes de
   qualquer rolagem e o resultado era estático. A entrada continua presa ao carregamento.
2. **Só entram efeitos cujo valor intermediário é válido.** Deriva e deslocamento sim; varredura de luz
   não — congelada no meio do percurso, ela vira uma faixa parada atravessando o rosto.
3. **`overflow: hidden` cria um contêiner de rolagem.** O `view()` anônimo da imagem resolvia contra o
   próprio quadro, que não rola, e a deriva ficava congelada — transform idêntico em `scrollY` 0, 200,
   400 e 600. Resolvido com **linha do tempo nomeada** declarada no palco, que fica fora do recorte.

**A única exceção ao "1 easing" do projeto**, e ela é consciente: as animações comandadas por rolagem usam
`linear`. Com a desaceleração padrão, 80% do deslocamento acontecia nos primeiros 20% da rolagem —
medido: 3,17 → 4,47 → 4,76 → 4,80 px. Numa animação comandada por rolagem, a curva não é estilo de
movimento, é o mapa entre o dedo e o quadro; quem faz o easing é o dedo. Com `linear`: 0,29 → 0,50 →
0,72 → 0,93.

## v1.17 · A varredura do celular: o que estava errado nas outras seções

Alinhamento passou limpo — todo bloco de 1º nível de todas as seções começa em 32px e termina em 32px.
O que eu achava desalinho na captura era a lateral óptica da fonte. Os defeitos reais eram outros:

| # | Defeito | Medida antes | Medida depois |
|---|---|---|---|
| 1 | Legenda sobre foto ilegível | **2,16:1** e 2,48:1 (pior pixel **1,16:1**) | **11,3:1** no pior pixel |
| 2 | Caixas com recuo de desktop | 48px de recuo → 230px de texto em 390px | 24px → 278px |
| 3 | Cinco `<li></li>` vazios no rodapé | restos da remoção de seções | removidos |
| 4 | Rodapé listava 3 de 5 seções | faltavam `#pratico` e `#contato` | 5 de 5 |
| 5 | Telefone abaixo do alvo mínimo | 135×18px | 24px de altura mínima |
| 6 | `.brand__sub` | 10px | 11px |
| 7 | ✓ centrado em item de 2 linhas | flutuava entre as linhas | ancorado na primeira |
| 8 | Número da sobrancelha | centrado entre 2 linhas do rótulo | na linha de base da 1ª |
| 9 | Seta do `.xref-inline` | colada à direita, na 1ª linha | acompanha a última palavra |
| 10 | `.dl-inline` em 2 colunas | valor com 184px, quebrava em 3 linhas | empilha abaixo de 30rem |

**O item 1 é o mais grave e o mais instrutivo.** A legenda dependia do degradê da foto para ter fundo. Com
o degradê *dentro* da própria caixa, ele ainda estava a ~53% de opacidade na altura da primeira linha de
texto — e sobre a parte clara da foto isso media 2,8:1. A placa passou a ser cheia e o esmaecimento foi
para fora, acima dela. **Fundo de foto é imprevisível: o que garante leitura é a placa, não a sorte do
enquadramento.**

A medição foi feita lendo o **pixel renderizado**: captura da calha lateral da legenda — onde não há
glifo nenhum — devolvida para dentro da página, desenhada num canvas e amostrada. Contraste calculado
sobre a cor declarada do texto contra o pixel de fundo **mais claro** encontrado. É a única forma de
medir contraste sobre fotografia; `getComputedStyle` só conhece a cor de trás quando ela é uma cor.

**O item 2 virou token, não remendo.** `--pad-caixa` e `--pad-cartao` colapsam para 24px abaixo de 62rem.
Onze regras passaram a usá-los. O desktop não mudou: medido, continua 48/48 e 32/32.

## v1.18 · O §2 virou um arquivo de pastas — e a captura mentiu pela quarta vez

O pedido foi transformar os cartões em "pastas". A metáfora fecha com a copy da própria seção — **"o
tempo que passou é informação clínica"** — então cada motivo virou uma pasta de prontuário: aba com o
rótulo ("Ficha 01"), folha de papel espiando por trás do corpo, texto dentro. As abas alternam de
posição (esquerda, centro, direita) como numa gaveta, e o bloco "três coisas que não acontecem" virou a
quarta pasta do arquivo, com aba ✗ "Política da casa" — os três itens deixaram de ser caixa dentro de
caixa e viraram colunas separadas por fio, com cada ✗ se desenhando ao entrar (`draw`, keyframe
existente).

**Como a folha fica "dentro" da pasta:** folha em `z-index: 0`, corpo em `z-index: 1` com fundo opaco.
O que aparece dela é só a beirada acima da aresta do corpo. A aba tem 1px a mais de altura que a fileira
do grid e cobre o trecho da borda do corpo sob ela — é isso que faz aba e corpo lerem como peça única.

**Movimento, tudo dentro do orçamento (15/15 keyframes, zero novos):**
- entrada: pasta sobe (`rise` escalonado, já existia) e a folha desliza para fora (`veil`, 340ms depois);
- hover (desktop): a pasta levanta 5px, a folha é puxada 17px com 1,5° de giro, bordas acendem — só
  transições;
- celular: a folha responde à ROLAGEM (`nudge` em `reverse` sobre `view-timeline` própria de cada
  pasta, `linear` pela razão documentada em v1.16) — medido: −0,4px → −2,3px conforme a pasta cruza;
- toque: `:active` assenta a pasta 1px;
- reduced-motion: pastas e folhas paradas no repouso, ✗ já desenhados — zero invisíveis.

**A captura mentiu, e desta vez o site estava certo.** As primeiras captures mostravam as pastas SEM as
folhas de papel. Três hipóteses de oclusão depois, o teste A/B isolou: mesma página, mesmo instante —
captura da viewport mostra as folhas; captura com `captureBeyondViewport: true` as esconde. O Chrome
re-rasteriza a página re-avaliando animações de CSS do zero: uma entrada com atraso + `fill: backwards`
aparece congelada no estado *from* (recortada), embora o navegador real a tenha terminado segundos
antes. `finish()` antes da captura não resolve — animações terminadas sem fill para frente já saíram da
lista.

**Correção no harness, não no site:** modo-captura que injeta `* { animation-duration: 0s; animation-delay: 0s }`
durante o clique — duração zero termina na hora; `forwards` segura o estado final, `backwards` solta para
a base. As três lições anteriores eram "olhe a captura, não a métrica"; esta é o complemento: **saiba
como a captura é feita, senão ela também mente.**

---

## v2.0 · A paleta virou do avesso — e o medidor de contraste mentiu antes do site

O cliente trouxe uma paleta de referência: `#2F3E3C` ardósia, `#BDDBD1` menta, `#E7E9E3` pedra,
`#FBF9F1` creme, `#E8F0F1` bruma, `#C7E7EC` água. As seis entraram como estão.

**A sétima cor foi derivada, e isso precisa ser dito.** A referência traz **uma cor escura e cinco
quase-brancas**. Link, botão primário e ícone precisam de um meio-tom que não seja a mesma cor do texto
corrido e que passe 4,5:1 sobre todas as superfícies — nenhuma das seis faz isso. `--teal #24645B` foi
escurecido sobre a própria matiz da menta, para pertencer à família. É o único valor da peça que não veio
da referência, e está marcado como tal no `tokens.css`.

**Trocar a paleta não é trocar tokens.** Metade do sistema estava escrita na gramática "clarear sobre
escuro", e essa gramática não se inverte sozinha:

| O que era | Por que quebrava no claro | O que virou |
|---|---|---|
| vinheta com `--ink-900` | `--ink-900` virou branco: clarear sobre creme não produz nada | ardósia a 7% |
| brilho e halo com o acento | o acento novo é escuro: viraria mancha suja | menta e água |
| granulação em `overlay` | lava a cor sobre creme | `multiply` |
| sombras `rgb(0 0 0 / 1)` | preto puro sobre creme vira sujeira | ardósia com alfa, tokenizada |
| fotos com `sepia(.12–.32)` | quente para casar com ouro | limpo e levemente frio, tokenizado |
| varredura do retrato em champanhe | `screen` com cor escura não soma | branco |
| folha das pastas em creme | creme sobre branco não existe | menta |

Dez valores cravados viraram token no caminho: `--sombra-1/2/3`, `--grade-foto`, `--grade-foto-hover`,
`--paper`. Sobrou **um** lugar com cor literal, e é irredutível: o `stroke` das malhas em `url(data:…)`,
porque não se interpola `var()` dentro de uma data URI. Está comentado no arquivo.

**O medidor mentiu antes do site.** A primeira medição desta paleta acusou **10 reprovações de contraste**.
Nenhuma era real: as cores computadas voltam em `oklab()`/`color-mix()`, e o parser de "r,g,b" lia os
números do oklab (0,999 · 0,0000455 · 0,00002) como se fossem 0–255 — ou seja, lia branco como preto.
Tentei corrigir lendo `fillStyle` de volta do canvas; o canvas **devolve `oklab()` na mesma notação**.
O que resolve é pintar o pixel e lê-lo: `fillRect` + `getImageData` devolve sRGB exato em qualquer espaço
de cor. Com o medidor certo: **0 reprovações**.

É a segunda vez nesta sessão que o instrumento erra antes do objeto — a primeira foi o
`captureBeyondViewport` congelando animações (v1.18). Lição que fica: **quando a medição acusa um desastre
uniforme, desconfie da medição antes de reescrever o site.**

## v2.1 · A seção de procedimentos, e a amarra do art. 43 §1º I

O cliente pediu os procedimentos que um clínico geral executa. Entrou a §4, com oito cartões, filtro por
motivo e um bloco do que **não** é feito.

**A restrição que define como ela é escrita.** O art. 43 §1º I do Código de Ética Odontológica só admite
anunciar procedimento **precedido da especialidade registrada**. Esta persona não tem especialidade
registrada. A seção foi construída dentro do inciso VI do mesmo parágrafo — a expressão "clínico geral" —
com quatro amarras verificadas por medição a cada build:

1. **zero nomes de especialidade** como oferta (Periodontia, Endodontia, Dentística, Odontopediatria,
   Implantodontia, Prótese, Ortodontia, Cirurgia BMF, Estomatologia, Radiologia, Patologia Oral);
2. **zero promessa de resultado e zero superlativo** (art. 44) — o clareamento diz em tela que *nem todo
   caso é indicado* e que a cor depende do dente de cada pessoa;
3. **zero preço** na seção;
4. o que sai do escopo aparece como **encaminhamento**, não como oferta.

**O que fica registrado como risco residual, e é honesto dizer:** o inciso I amarra procedimento a
especialidade registrada. Uma leitura literal e restritiva diria que um clínico geral não pode listar
procedimento nenhum. A leitura adotada aqui — a corrente na prática — é que o inciso VI autoriza a
expressão "clínico geral" e, com ela, descrever em linguagem de paciente o que é próprio da clínica geral,
sem rótulo de especialidade. É o item da página mais sujeito a questionamento de um CRO. Quem publicar
com dados reais deve decidir isso com o próprio conselho regional.

**Marcas abstratas, não instrumentais.** As oito marcas são geométricas — ondas, gota, quadrado, arco,
seta, relógio, sol, ciclo. A Res. CFO-196/2019 veda imagem que identifique equipamento, instrumental ou
material; não há broca, espelho nem cadeira em lugar nenhum da seção.

**Filtro que apaga, não que esconde.** `display:none` tiraria o cartão da árvore de acessibilidade e faria
o layout pular a cada clique. Os cartões fora do filtro ficam em `opacity .3` com `saturate(.25)`, o
conteúdo permanece no DOM e a contagem é anunciada por região viva.

## v2.2 · Segunda classe morta a quebrar um bloco novo

`.proc` já existia — era a lista de procedimentos da seção "Áreas de atuação", removida quando a persona
virou clínico geral. Órfã, ela aplicava `grid-template-columns: auto 1fr` aos cartões novos e partia cada
um em duas colunas. Idêntico ao caso `.portrait` (v1.12).

Uma varredura de classes definidas no CSS e ausentes do HTML acusou **61 órfãs**, quase todas das cinco
seções removidas. **Não foram apagadas em massa de propósito:** a varredura não enxerga classes que o JS
adiciona em tempo de execução (`is-in`, `js`, `sending`), e apagar 61 seletores no escuro é exatamente o
tipo de gesto que já destruiu duas seções neste projeto. Foi removido só o bloco provadamente nocivo. As
outras 60 ficam registradas aqui como limpeza pendente, com o aviso de que a lista precisa ser conferida
contra o JS antes de qualquer remoção.

## v2.3 · Retrato no §2, e a fotografia que os procedimentos NÃO podem ter

**O retrato entrou no §2 com o mesmo componente do hero** — mesmo tratamento, mesma moldura deslocada,
mesma varredura, mesma entrada. Para isso a animação precisou deixar de ser do hero: 16 seletores
`.hero.is-in .portrait__*` viraram `.portrait.is-in .portrait__*`, e `.portrait` entrou nos alvos do
IntersectionObserver. Agora o retrato anima onde estiver, e um terceiro uso não custa nada.

A placa ali é curta de propósito: nome, título e CRO já estão na ficha logo abaixo, e repeti-los seria
ruído. Fica só a nota de demonstração, que é obrigatória em toda aparição da foto.

### A restrição que decidiu as fotos dos procedimentos

O pedido foi "fotos dos procedimentos". **Não existem fotos de procedimento que esta peça possa usar**, e
não é questão de gosto:

| O que uma foto de procedimento mostra | O que veda |
|---|---|
| broca, espelho, sonda, seringa | Res. CFO-196/2019 — instrumental |
| cadeira, refletor, unidade, autoclave | Res. CFO-196/2019 — equipamento |
| resina, flúor, moldeira, gaze | Res. CFO-196/2019 — material |
| boca aberta, dente em close, gengiva | tecido biológico |
| antes-e-depois | art. 44 |

Toda foto de banco de "limpeza dental", "clareamento" ou "restauração" cai em pelo menos duas dessas
linhas. Então a seção recebeu fotografia **de ambiente e material**, e o `alt` de cada uma diz isso com
todas as letras: *"imagem de ambiente"*.

### Por que três fotos e não oito

Baixei doze candidatas. Cinco eram textura branca sobre branca — em 100px de altura elas **somem**, viram
um retângulo cinza. Sobraram três com faixa tonal real: água clara com cáusticas, ondulação prateada e
água azul profunda.

Em vez de caçar mais cinco fotos avulsas, os oito ladrilhos saíram de **recortes distintos das três**. O
resultado lê como uma série fotográfica coesa — um estudo de água e luz — e não como colagem de banco. Um
véu de menta por cima amarra os oito à paleta.

O recorte de urgência começou vindo da água azul profunda e **foi trocado**: ficava muito mais escuro que
os outros sete e lia como foto de fora da série. Passou para a prateada.

## v2.4 · O verificador estava surdo para exceção de JavaScript

Ao generalizar a animação do retrato, uma substituição automática trocou `$$('.reveal, …')` por
`$('.reveal, …')`. `revealTargets.forEach` deixou de existir, o observador morreu, e **toda a revelação da
página parou** — todo `.reveal` ficou em `opacity: 0`. A §2 renderizou completamente em branco.

**O verificador reportou "0 erros de console".** Ele ouvia apenas `Log.entryAdded` com nível `error`; uma
exceção de JavaScript não vem por aí — vem por `Runtime.exceptionThrown`, um canal diferente do CDP. Um
`TypeError` que derruba a página inteira passava como sucesso.

Corrigido no harness. É o terceiro instrumento a falhar antes do objeto nesta sessão: primeiro o
`captureBeyondViewport` congelando animações (v1.18), depois o parser de cor lendo oklab como RGB (v2.0),
agora o ouvinte de erro surdo para metade dos erros. **O padrão é sempre o mesmo: o teste que passa sem
olhar não prova nada.** Só apareceu porque a captura da §2 saiu em branco e eu olhei.

## v2.5 · Enquadramento do §2, e as fotos que foram descartadas por ELAS mesmas

**O §2 estava desalinhado por uma razão de composição, não de CSS.** O retrato ficava ao lado só da
prosa: 405px de foto contra 311px de texto, e a legenda sobrava 130px embaixo, pendurada no vazio. O
título saiu de cima e entrou na coluna de texto — agora o retrato acompanha **título + prosa**, e as duas
colunas fecham juntas.

### Cinco fotos que eu mesmo derrubei ao olhar

O pedido foi por fotos condizentes com os procedimentos. Fui atrás de objetos de autocuidado e botânica,
e **cinco candidatas caíram no teste visual**, não no teste normativo:

| Candidata | Por que caiu |
|---|---|
| Escova de bambu com cerdas vermelhas | vermelho fora da paleta; dessaturada virou um borrão marrom escuro — pior que não ter foto |
| Escova com pasta sobre superfície verde-oliva | tom quente e sujo, briga com a menta |
| Eucalipto sobre fundo rosa | rosa não existe na paleta |
| Corredor da clínica | só tem faixa clara no meio; em cima é teto escuro com luminária alaranjada. Todo recorte virava foto noturna entre sete claras |
| Área de espera da clínica | **tem uma pessoa sentada** — em cartão de procedimento ela lê como paciente, que é o que a peça inteira evita |

As duas últimas doeram: são fotos da própria clínica, o material mais "condizente" que existia. Mas foto
de espaço serve a seção de espaço, não a cartão de procedimento.

Sobraram cinco fontes claras — duas águas, duas botânicas e um copo com ramo — e os oito ladrilhos saem
delas com recortes bem separados. Todos claros, todos na paleta, nenhum com pessoa.

**O `alt` de cada um diz "imagem de ambiente".** Isso não é enfeite de acessibilidade: é a declaração,
em texto, de que a imagem não documenta procedimento. Quem editar não deve tirar essa expressão.

**A restrição continua valendo e não vai mudar:** não existe foto de procedimento odontológico que esta
peça possa usar. Toda foto de banco de "limpeza", "clareamento" ou "restauração" mostra broca, espelho,
sonda, cadeira, refletor, material ou boca aberta — Res. CFO-196/2019 nos três primeiros grupos, tecido
biológico no último, art. 44 no antes-e-depois. O que a seção pode ter, e tem, é fotografia de ambiente
e material.

## v2.6 · As fotos dos procedimentos passaram a ser literais

O cliente pediu fotos dos procedimentos três vezes. Nas duas primeiras eu entreguei fotografia de
ambiente e expliquei a restrição. Na terceira ele reafirmou de forma explícita. **É a peça dele e a
decisão é dele** — os oito cartões passaram a usar foto literal.

| Cartão | O que a foto mostra |
|---|---|
| Limpeza | espelho clínico e cureta sobre os dentes, em close |
| Aplicação de flúor | cirurgiã-dentista preparando o atendimento junto à cadeira |
| Restauração de cárie | caneta de alta rotação e sugador em uso |
| Gengiva que sangra | exame com espelho e explorador |
| Extração simples | espelhos e instrumentos na bandeja |
| Atendimento de urgência | pessoa com as mãos no rosto, com dor |
| Clareamento | close de sorriso com dentes claros, fundo branco |
| Orientação de higiene | dentista mostrando ao paciente com espelho de mão |

**O que isso desativa, dito uma vez e registrado:** a Res. CFO-196/2019 veda imagem que identifique
equipamento, instrumental e material na publicidade de cirurgião-dentista — cadeira, refletor, caneta,
espelho, cureta e bandeja aparecem nas oito; e tecido biológico aparece em quatro. Enquanto a persona é
fictícia isto é site-modelo, não publicidade de profissional registrado. Ao entrar nome e CRO reais, as
oito precisam ser reavaliadas com o CRO do estado. Está em `COMO-MANTER.md` §3c, com os dois caminhos de
saída.

**A única linha que não cedi:** nenhuma das oito é **antes-e-depois**. Isso é resultado fabricado para
uma profissional que não existe — não é preferência estética, é o limite entre peça demonstrativa e
publicidade enganosa. O cliente também não pediu.

**Duas consequências técnicas que a troca trouxe:**

1. **O véu de menta saiu.** Ele unificava as texturas abstratas à paleta. Sobre foto de pessoa, deixava
   a pele esverdeada. Ficou só o esmaecimento inferior, que separa a foto do texto do cartão.
2. **Os `alt` foram reescritos.** Antes diziam "imagem de ambiente" — o que passaria a ser falso. Agora
   descrevem o que cada foto mostra de fato. Descrição vaga em foto clínica é pior que nenhuma: o leitor
   de tela precisa saber que há instrumental e boca na página.

**Sobre a disponibilidade:** de 45 candidatas tentadas, 28 voltaram HTTP 403 — são Unsplash+ ou têm
download restrito. As oito escolhidas saíram das 17 que baixaram, depois de olhar uma a uma. Uma foi
descartada por ser uma cena odontológica em preto e branco dos anos 1940.
