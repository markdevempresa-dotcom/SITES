# COMO MANTER — editar sem quebrar

> **São duas peças independentes.** Tudo neste documento vale para as duas, trocando a pasta.
>
> | | Pasta | Persona | Direção |
> |---|---|---|---|
> | **v1** | `site/` | Dra. Helena Sampaio Tomé — **especialista** (Implantodontia · Prótese Dentária) | escuro, carvão + teal, Fraunces + Sora, raio 3px |
> | **v2** | `site-clinico-geral/` | Dr. Caio Moretti Salles — **clínico geral, sem especialidade** | claro, papel + volt, Bricolage + Instrument, raio 14px |
>
> Elas **não compartilham arquivo nenhum**. Editar uma não afeta a outra.
> Cada uma tem seu conjunto de documentos — os da v2 terminam em `-V2.md`.

---

## 1 · Ver o site rodando

Não abra o `index.html` com duplo clique. O JavaScript é um **ES module**, e navegadores bloqueiam módulos
carregados por `file://`. Suba um servidor local — qualquer um serve:

```bash
# v1 — especialista
python -m http.server 8777 --directory "c:\Users\Aymar\Downloads\dentistas\site"

# v2 — clínico geral
python -m http.server 8778 --directory "c:\Users\Aymar\Downloads\dentistas\site-clinico-geral"
```

Depois: **http://127.0.0.1:8777/** (v1) e **http://127.0.0.1:8778/** (v2)

### As duas já estão publicadas

| | URL | Projeto na Vercel |
|---|---|---|
| **v1** | https://vertice-odontologia-ochre.vercel.app | `vertice-odontologia` |
| **v2** | https://clinica-aroeira.vercel.app | `clinica-aroeira` |

Os dois projetos vivem no time `sites-adc1` e apontam para o mesmo repositório,
`markdevempresa-dotcom/SITES`. **A v1 tem deploy automático a cada `git push`** —
ela foi vinculada ao GitHub. A v2 foi enviada direto pelo CLI; para republicar:

```bash
cd site-clinico-geral && vercel deploy --prod --yes
```

**As duas estão com indexação bloqueada em três camadas** — `noindex` na metatag,
`Disallow: /` no `robots.txt` e `X-Robots-Tag` no header, este último vindo do
`vercel.json` de cada pasta. Ver §3b e §3c para quando e como reverter.

Sem servidor a página ainda **aparece inteira e legível** — o site é construído em progressive enhancement.
O que se perde é a revelação por rolagem, o stepper, o tour e o formulário.

---

## 2 · O mapa dos arquivos

```
site/
├── index.html          a página inteira, incluindo todos os SVGs e os dados dos painéis
├── 404.html            página de erro
├── robots.txt          ← trocar o domínio
├── sitemap.xml         ← trocar o domínio e a data
├── css/
│   ├── tokens.css      ⬅ COMECE AQUI. Cor, espaço, tipo, duração, raio.
│   ├── base.css        reset, tipografia, botões, campos, cartões, cabeçalho, espinha, rodapé
│   ├── sections.css    o estilo específico de cada seção
│   └── motion.css      os 14 @keyframes e o desligamento por prefers-reduced-motion
├── js/
│   └── main.mjs        11 blocos numerados, cada um com um comentário do que faz
└── img/
    ├── favicon.svg
    ├── og-image.svg    o original editável
    └── og-image.png    1200×630, gerado a partir do SVG — é este que vai nas metatags
```

**Regra de ouro:** cor, espaço, duração e raio **só** em `tokens.css`. Se você precisar de um valor que não
existe lá, o certo é criar o token, não escrever o valor solto na regra.

---

## 3 · Trocar a persona (o caso mais comum)

Os dados fictícios aparecem em **6 lugares**. Troque nos seis, ou o site fica inconsistente e — pior —
pode ficar irregular.

| # | Onde | O que trocar |
|---|---|---|
| 1 | `index.html` → `<head>` | `<title>`, `meta description`, `og:*`, `canonical` |
| 2 | `index.html` → bloco `application/ld+json` | nome, endereço, telefone, horários, `medicalSpecialty`, `employee` |
| 3 | `index.html` → hero, faixa `.hero__creds` | nome, título, CRO, especialidades, endereço |
| 4 | `index.html` → `#profissional`, tabela `.ficha` | os 7 campos |
| 5 | `index.html` → `#atuacao` | **o texto legal com o CRO em cada bloco de especialidade** |
| 6 | `index.html` → `<footer>`, bloco `.legal` | os 5 dados obrigatórios |

Busque e substitua estas cadeias — todas aparecem mais de uma vez:

```
Helena Sampaio Tomé      Vértice Odontologia       CRO-XX 00.000
CRO-XX 00.000-PJ         Rua Modelo, 000           Batel
Curitiba/PR              00000-000                 (00) 00000-0000
550000000000             Implantodontia            Prótese Dentária
```

### ⚠ O que **não** pode ser trocado sem quebrar a conformidade

- A expressão literal **"Cirurgiã-Dentista"** / **"Cirurgião-Dentista"** — é exigência do art. 43, caput.
- O **texto legal dentro de cada bloco de especialidade** (§5). Se o novo profissional não tem especialidade
  registrada, o bloco não vira "lista de serviços": ele **deixa de existir** e o site passa a usar a
  expressão "clínico geral". Ver `COPY-PADRAO-ODONTO.md` Parte VII.
- Os **cinco dados obrigatórios do rodapé**.
- O **aviso de demonstração** — só saia dele ao publicar com dados reais de um profissional real. Enquanto
  os dados forem fictícios, ele é o que separa a peça de uma publicidade falsa.

---

## 3b · A foto da profissional ⚠ **trocar antes de qualquer uso real**

O retrato do hero (`site/img/retrato-demo.jpg`) é uma foto de banco,
recortada por nós a partir de um original de 1400×2098. **A pessoa da foto é real e identificável.**

**Isso não é um detalhe estético — é o ponto mais frágil da peça.** A licença livre cobre o uso da
imagem, mas **não** cobre autorização de uso de imagem da pessoa retratada. Colocar o rosto de alguém
real sob um nome inventado e um CRO fabricado é o único jeito de esta peça virar publicidade falsa,
e nenhum aviso de rodapé conserta isso.

Por isso a foto **tem que ser substituída pela foto do profissional real** antes de publicar.

Enquanto for demonstração, a legenda embaixo do retrato diz, em tela, que a imagem é de demonstração
e que a persona é fictícia — não apague essa linha.

**Ao trocar, o critério de escolha não é só gosto.** Foram descartados vários candidatos por motivos
normativos, e valem para a substituição:

| Descartado | Por quê |
|---|---|
| Sala de atendimento, cadeira, refletor, unidade | Res. CFO-196/2019 veda imagem de equipamento, instrumental e material |
| Estetoscópio | Instrumental — e nem é da profissão |
| Boca aberta, dentes em close, antes-e-depois | Tecido biológico; e antes-e-depois é vedado |
| Jaleco com nome bordado ou brasão de instituição | Identifica um terceiro real |
| Paciente em cena | Expõe terceiro e puxa a peça para o clichê que o site inteiro evita |

O que passou: retrato de meio corpo, fundo neutro, jaleco liso, sem instrumento e sem terceiros.

**Formato.** É **um arquivo só**, em 3 : 4:

| Arquivo | Proporção | Usado em |
|---|---|---|
| `retrato-demo.jpg` | 3 : 4 (1050×1400) | desktop e celular |

Existiu um segundo arquivo em 4 : 3 (`retrato-demo-w.jpg`) para o celular, quando a foto abria a página
em largura cheia. Ela deixou de abrir: no celular o retrato virou assinatura ao lado da ficha, e nesse
formato estreito o corte 3 : 4 serve os dois. O arquivo largo foi removido.

A troca é só substituir o arquivo mantendo a proporção — o CSS não precisa de ajuste. Se a nova foto vier
noutra proporção, **recorte antes**; não resolva com `transform: scale()` no CSS, que foi o remendo que
essa versão eliminou.

**Peso.** ~132 KB sem otimizar. Converter para WebP corta para ~35 KB.

---

## 3c · As fotos dos procedimentos ⚠ **decisão do cliente, com efeito normativo**

Os oito cartões do §4 usam **fotos literais de procedimento**: raspagem com espelho e cureta, caneta de
alta rotação, bandeja de instrumentos, boca aberta em close, paciente na cadeira.

**Isso foi decisão explícita do cliente, reafirmada três vezes, e desativa uma barreira que o resto da
peça mantém.** Está aqui para quem for publicar não descobrir depois:

- A **Res. CFO-196/2019** veda, na publicidade de cirurgião-dentista, imagem que identifique
  **equipamento, instrumental e material** odontológico. Cadeira, refletor, caneta, espelho, cureta e
  bandeja aparecem nas oito.
- **Tecido biológico** — boca aberta, gengiva e dentes em close — aparece em quatro delas.
- O **art. 44** do Código de Ética veda antes-e-depois. **Nenhuma das oito é antes-e-depois**, e essa
  linha não deve ser cruzada em hipótese alguma.

Enquanto a peça é **demonstrativa e a persona é fictícia**, isso é um site-modelo, não publicidade de um
profissional registrado. **No momento em que entrarem nome, CRO e endereço reais, estas oito fotos passam
a ser publicidade de profissional registrado e devem ser reavaliadas com o CRO do estado.**

Se o CRO apontar problema, há dois caminhos, nesta ordem:

1. **Fotografar a própria clínica** com enquadramentos sem instrumental à vista, sem equipamento
   identificável e sem boca aberta. É material próprio, autorizado, e resolve de vez.
2. **Voltar para fotografia de ambiente e material.** O histórico desse conjunto — água, botânica e
   espaços — está em `DECISOES.md` v2.3 e v2.5, com os motivos de cada descarte.

**O `alt` de cada foto descreve o que ela mostra de fato** ("Raspagem: espelho clínico e cureta sobre os
dentes"). Não troque por descrição vaga: leitor de tela precisa da descrição real, e é o `alt` que deixa
explícito o que está na página.

**Formato.** Oito arquivos em `site/img/proc/`, todos 640×400 (16:10), somando ~274 KB, com
`loading="lazy"`. Os nomes casam com o cartão: `limpeza`, `fluor`, `restauracao`, `gengiva`, `extracao`,
`urgencia`, `clareamento`, `higiene`.

---

## 4 · Ligar o formulário ⚠ **pendência conhecida**

**O formulário está sem destino de propósito e ele diz isso em tela.** Não há envio simulado.

Para ligar, edite **uma linha** em `index.html`:

```html
<form class="contact__form" id="contato-form" data-endpoint="" novalidate>
                                              ↑ coloque a URL aqui
```

Ele faz `POST` com `FormData` e espera um `2xx`. Funciona direto com Formspree, Basin, Web3Forms, Getform ou
qualquer endpoint próprio. Exemplo:

```html
data-endpoint="https://formspree.io/f/SEU_ID"
```

Os três estados já existem e são reais: **enviando** (barra de progresso no botão), **sucesso** (limpa o
formulário e informa o prazo de retorno) e **erro** (encaminha ao WhatsApp e ao telefone).

### ⚠ LGPD — não afrouxe isto

O formulário tem **4 campos** e **nenhum de saúde**. O texto de privacidade instrui explicitamente a não
enviar sintoma, diagnóstico ou histórico clínico. **Não adicione** campos como "qual seu problema",
"descreva sua dor" ou "qual tratamento procura": dado de saúde é dado sensível e não se coleta em formulário
público. Se o cliente pedir, a resposta é que isso é conversado na consulta.

Ao ligar o endpoint, ajuste também o prazo de retorno prometido (**4 horas úteis**) para um que a clínica
consiga cumprir. Prazo publicado e não cumprido é publicidade enganosa.

---

## 5 · Trocar o WhatsApp

São **9 links** `wa.me`, cada um com texto pré-preenchido próprio. Busque por `wa.me/550000000000`.

O formato é `https://wa.me/55DDDNUMERO?text=MENSAGEM_URL_ENCODED`.

> **O `55` é o erro clássico do setor.** Sem o código do país o link não abre para ninguém. Depois de
> trocar, **clique em cada um** — não confie na leitura.

Os textos são diferentes de propósito: o do §2 é uma **dúvida** (`tenho uma dúvida antes de marcar`), não um
agendamento. Isso baixa o custo psicológico do clique para quem tem medo. Mantenha a distinção.

---

## 6 · Fontes

Vêm do Google Fonts por `<link>` (não há build). Para auto-hospedar e eliminar a dependência externa:

1. Baixe **Fraunces** e **Sora** em variável (`.woff2`) e coloque em `site/fonts/`.
2. Troque o `<link>` do Google por `@font-face` com `font-display: swap` e `unicode-range` latino.
3. Ajuste `--font-display` e `--font-text` em `tokens.css` se o nome da família mudar.

Os fallbacks já estão declarados — o site não quebra sem rede, só perde o desenho da letra.

**Não troque** por Inter, Roboto, Arial, Open Sans, Lato, Montserrat ou Poppins como dominante: além de
serem vetadas pelo briefing, duas delas são as fontes das referências e o site deixaria de se diferenciar.

---

## 7 · Mexer em cor

Tudo em `tokens.css`. A paleta é **clara**: creme e menta com um verde-ardósia escuro para o texto.

### As sete cores, e por que uma delas não veio da referência

| Token | Valor | Papel |
|---|---|---|
| `--ardosia` | `#2F3E3C` | texto forte |
| `--menta` | `#BDDBD1` | superfície de foto, folha das pastas, marcas |
| `--pedra` | `#E7E9E3` | superfície `raised` |
| `--creme` | `#FBF9F1` | superfície padrão |
| `--bruma` | `#E8F0F1` | superfície `deep` |
| `--agua` | `#C7E7EC` | brilho de ambiente |
| **`--teal`** | **`#24645B`** | **derivado — link, botão primário, ícone** |

As seis primeiras são a paleta de referência, sem alteração. A sétima **foi derivada** e é o único valor que
não veio de lá. Motivo: a referência traz **uma cor escura e cinco quase-brancas**. Link, botão e ícone
precisam de um meio-tom que não seja a mesma cor do texto corrido e que passe 4,5:1 sobre **todas** as
superfícies — nenhuma das seis faz isso. O tom foi escurecido sobre a própria matiz da menta.

Existe ainda `--teal-lite` (`#4E9A8C`): **3,15:1 sobre o creme**. Acima do piso de 3:1 do WCAG 1.4.11 para
componente de interface, abaixo do piso de 4,5:1 para texto. **Só decorativo — fios e ícones. Nunca texto.**

### Duas regras que não são estéticas

1. **Todo token de texto ≥ 4,5:1 sobre a pior superfície em que aparece.** A pior aqui é a água
   (`#C7E7EC`), não o creme. Trocou uma cor? Meça de novo.
2. **Nunca meça contraste no papel nem lendo `getComputedStyle`.** As cores computadas voltam em
   `oklab()` e `color-mix()`; um parser de "r,g,b" lê os números do oklab como se fossem 0–255 e devolve
   lixo. Na primeira medição desta paleta isso produziu **10 reprovações falsas**. O jeito certo é pintar
   a cor num canvas e ler o pixel:

```js
const cv = document.createElement('canvas'); cv.width = cv.height = 1;
const g = cv.getContext('2d', { willReadFrequently: true });
const rgba = c => { g.clearRect(0,0,1,1); g.fillStyle = c; g.fillRect(0,0,1,1);
  const d = g.getImageData(0,0,1,1).data; return [d[0], d[1], d[2], d[3]/255]; };
// depois componha a pilha de fundos da raiz para baixo, respeitando alfa
```

### Onde a cor fica cravada, e por quê

Um lugar só: os `stroke` das malhas topográficas em `sections.css`, porque **não dá para interpolar
`var()` dentro de `url(data:…)`**. Se você trocar `--teal` e `--teal-lite`, troque também `%2324645B` e
`%234E9A8C` nas duas malhas. Fora isso, sombra, tratamento de foto e papel são todos token.

### Regra de alternância entre seções

**Nenhuma seção adjacente pode usar a mesma superfície.** Cada `<section>` declara `data-surface` com um de
quatro valores: `deep` · `dark` · `raised` · `photo`. A sequência atual é:

```
inicio deep → adiamento raised → profissional dark → consulta raised
     → procedimentos deep → [faixa de foto] → pratico dark → contato deep
```

Se você reordenar ou inserir seções, confira a alternância.

---

## 8 · Mexer em movimento — o orçamento é fechado

| Item | Limite | Onde |
|---|---|---|
| Easings | **1** | `--ease` em `tokens.css`. Não introduza `ease`, `linear` ou outro `cubic-bezier`. |
| Durações | **4** | `--t-1` 160ms · `--t-2` 420ms · `--t-3` 900ms · `--t-4` 24s |
| `@keyframes` | **≤15** (hoje: 14) | `motion.css` |
| Propriedades animadas | só `transform`, `opacity`, `clip-path`, `stroke-dashoffset` | — |
| Listeners de scroll | **0** | posição vem de `IntersectionObserver` |
| `mousemove` | **0** | — |

**Se adicionar qualquer animação, adicione também o desligamento** no bloco
`@media (prefers-reduced-motion: reduce)` no fim de `motion.css`.

> **O erro clássico, e ele é grave:** desligar a animação e esquecer que o elemento estava em `opacity: 0`.
> O conteúdo some justamente para quem ativou a preferência. O bloco reafirma `opacity: 1 !important` nos
> elementos de revelação por isso. **Sempre teste** com a preferência ligada:
> DevTools → `Ctrl+Shift+P` → *"Emulate CSS prefers-reduced-motion: reduce"*.

Auditoria do orçamento:

```powershell
$all = (Get-ChildItem "site\css" -Filter *.css | ForEach-Object { Get-Content $_.FullName -Raw }) -join "`n"
"keyframes: " + ([regex]::Matches($all,'@keyframes')).Count
"easings:   " + (([regex]::Matches($all,'cubic-bezier\([^)]*\)') | ForEach-Object {$_.Value} | Sort-Object -Unique) -join ' ')
```

---

## 9 · Editar conteúdo dos painéis

O texto do **stepper da primeira consulta** e do **tour do espaço** não está no HTML visível: está em dois
blocos `<script type="application/json">`, logo depois de cada seção.

```
#step-data   →  5 etapas: n, titulo, duracao, onde, texto, pontos[]
#tour-data   →  4 salas:  titulo, area, luz, texto
```

É JSON puro. Erro de vírgula **derruba a seção inteira** — valide antes de salvar. Para adicionar uma etapa,
acrescente a chave no JSON **e** um `<button class="step-btn">` correspondente na lista, com o mesmo
`data-step`.

---

## 10 · Antes de publicar — a lista curta

- [ ] `data-endpoint` do formulário preenchido, e testado de verdade (§4)
- [ ] Todos os `wa.me` com o número real **e o 55**, clicados um a um (§5)
- [ ] Domínio real em `robots.txt`, `sitemap.xml`, `canonical` e `og:url`
- [ ] `og-image.png` regerada se o texto do hero mudou
- [ ] **Aviso de demonstração removido do rodapé** — e só se os dados forem reais
- [ ] Rodapé com nome · "Cirurgião-Dentista" · CRO PF · CRO PJ · responsável técnico
- [ ] Todo procedimento sob um bloco de especialidade registrada — inclusive no `<title>` e no JSON-LD
- [ ] Nenhuma credencial fora de: especialidade registrada, stricto sensu, magistério, tempo de atuação
- [ ] `prefers-reduced-motion` testado, sem conteúdo invisível
- [ ] Aberto em 390, 768, 1440 e 1920, **olhando cada seção**
- [ ] Checklist completo do nicho em `COPY-PADRAO-ODONTO.md` Parte VI

---

## 11 · O que é específico da v2 (`site-clinico-geral/`)

A v2 é de um profissional **sem especialidade registrada**, e isso cria regras que a v1 não tem.

### ⚠ A regra que não pode ser afrouxada

**Nenhum procedimento pode receber o nome de uma especialidade do CFO.** O escopo de clínica geral colide
com cinco delas. Se alguém "melhorar" a copy trocando as palavras comuns pelos termos técnicos, o site
passa a anunciar títulos que o profissional não tem — art. 44.

| Está escrito assim | ❌ Não troque por |
|---|---|
| Restauração de dente com cárie | ~~Dentística~~ |
| Limpeza: remoção de tártaro e placa | ~~Periodontia~~ |
| Tratamento inicial de gengiva inflamada | ~~Periodontia~~ |
| Extração simples de dente | ~~Cirurgia Bucomaxilofacial~~ |
| Atendimento de urgência para dor | ~~Endodontia~~ · ~~canal~~ |
| Aplicação de flúor / orientação de higiene | ~~Saúde Coletiva~~ |

As cinco especialidades **aparecem** no site, mas só na seção de encaminhamento e como **destino**.
A frase que as governa é *"vai para"*. Nunca *"fazemos"*.

Também não pode entrar: "especialista em", "especializado em", "tratamento especializado".

Conferência rápida:

```powershell
$h = Get-Content "site-clinico-geral\index.html" -Raw
$i = $h.IndexOf('id="feito"'); $j = $h.IndexOf('</section>', $i)
$bloco = $h.Substring($i, $j-$i)
([regex]::Matches($bloco,'(?i)Dentística|Periodontia|Endodontia|Bucomaxilofacia|Odontopediatria|Saúde Coletiva')).Count
# esperado: 0
([regex]::Matches($h,'(?i)especialista em|especializado em')).Count
# esperado: 0
```

### Se o profissional obtiver uma especialidade

Aí a v2 muda de regime e passa a seguir as regras da v1:
1. A seção `#feito` vira blocos por especialidade, cada um com o texto legal e o CRO (modelo: v1 §5).
2. Some a linha "Sem especialidade registrada" do rodapé.
3. Entra `medicalSpecialty` no JSON-LD.
4. A rota correspondente sai da seção de encaminhamento.
5. A ficha ganha as linhas de especialidade e, se houver, de stricto sensu.

### Diferenças técnicas da v2

| | Detalhe |
|---|---|
| Revelação por rolagem | Feita em **CSS puro** com `animation-timeline: view()`. O `IntersectionObserver` só entra onde o recurso não existe, e nesse caso o JS adiciona `no-vt` ao `<html>`. Se você mexer em `motion.css`, mantenha os **dois** caminhos. |
| Grade de meses | Gerada por JS em `main.mjs` §4. Os meses 1 e 7 são marcados como consulta. |
| Mostrador de urgência | SVG estático em `index.html`, dois arcos. Se o número de horários mudar, mude o arco **e** o número no centro. |
| Geometria | `--r: 14px`. Não misture com o 3px da v1 — são sistemas separados. |
| Easing | `cubic-bezier(.34, 1.16, .64, 1)`, com ultrapassagem. A v1 usa desaceleração pura. Não unifique. |

---

> **A última linha é a mais importante:** revisão final é responsabilidade do cirurgião-dentista inscrito,
> que responde pela publicidade solidariamente com o responsável técnico (art. 45 do Código de Ética
> Odontológica). Nenhum documento deste conjunto é parecer jurídico.
