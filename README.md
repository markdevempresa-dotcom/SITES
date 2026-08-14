# Sites-modelo — Odontologia

Duas peças independentes de site para cirurgião-dentista, em **HTML, CSS e um ES module**.
Sem framework, sem build, sem `node_modules`.

> ## ⚠ Estas peças são DEMONSTRATIVAS
>
> Profissional, clínica, endereço, telefone e número de CRO são **fictícios** e estão em formato
> obviamente falso (`CRO-XX 00.000`, `Rua Modelo, 000`, `(00) 00000-0000`).
>
> **O retrato é de uma pessoa real**, de banco de imagem com licença livre, usada sob um nome
> inventado. A licença cobre a imagem; **não** cobre autorização de uso de imagem da pessoa.
> Por isso a indexação está bloqueada (`noindex` + `robots.txt` + header `X-Robots-Tag`).
>
> Antes de publicar com dados reais, leia **`COMO-MANTER.md` §3b e §3c**.

---

## As duas peças

| | Pasta | Persona | Direção visual |
|---|---|---|---|
| **v1** | `site/` | Dra. Helena Sampaio Tomé — clínica geral | claro: creme, menta e verde-ardósia; Fraunces + Sora |
| **v2** | `site-clinico-geral/` | Dr. Caio Moretti Salles — clínica geral | "Manual do Paciente": creme, preto e vermelhão; Archivo + Newsreader |

Elas **não compartilham arquivo nenhum**. Editar uma não afeta a outra.

## Rodar localmente

O JavaScript é um **ES module** e navegadores bloqueiam módulos carregados por `file://`.
Não abra o `index.html` com duplo clique — suba um servidor:

```bash
python -m http.server 8777 --directory site
python -m http.server 8778 --directory site-clinico-geral
```

Sem servidor a página ainda aparece inteira e legível (progressive enhancement).
O que se perde é a revelação por rolagem, o stepper, o filtro e o formulário.

## Publicar na Vercel

O `vercel.json` na raiz aponta `outputDirectory` para `site/` (a v1). Para publicar a v2,
crie um segundo projeto na Vercel apontando **Root Directory** para `site-clinico-geral`.

O mesmo `vercel.json` já envia `X-Robots-Tag: noindex, nofollow` em toda resposta —
uma segunda trava, além do `robots.txt` e da metatag.

## Documentação

| Arquivo | O que é |
|---|---|
| `COMO-MANTER.md` | **Comece por aqui.** Como editar sem quebrar: trocar persona, cor, movimento, ligar o formulário |
| `COPY-PADRAO-ODONTO.md` | Playbook de copy para o nicho, com o caso do profissional sem especialidade registrada |
| `DECISOES.md` | Log de decisões e de todos os defeitos encontrados, com o que cada um ensinou |
| `DESIGN-SYSTEM.md` · `-V2.md` | Tokens, escalas e contrastes medidos |
| `MESSAGE-MAP.md` · `-V2.md` | Arquitetura da copy, seção por seção |
| `RELATORIO-CONFORMIDADE.md` · `-V2.md` | Auditorias com a evidência colada |
| `LEITURA-REFERENCIAS.md` · `-V2.md` | Medições das referências usadas |

## Pendências conhecidas

- **O formulário não tem destino.** `data-endpoint=""` de propósito, e ele **declara em tela** que
  nada foi enviado. Ver `COMO-MANTER.md` §4.
- **O retrato precisa ser substituído** pela foto do profissional real antes de qualquer uso
  comercial. Ver §3b.
- **As fotos dos procedimentos** mostram instrumental e equipamento. Ver §3c para o que isso
  implica ao publicar com CRO real.
- **As imagens não estão otimizadas.** Converter para WebP corta o peso em cerca de 75%.
