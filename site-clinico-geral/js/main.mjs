/* ===========================================================================
   CLÍNICA AROEIRA — v2 · main.mjs   (ES module nativo, sem build)
   Regras do §9: ZERO listener de scroll · ZERO mousemove.
   A revelação por rolagem é CSS puro (animation-timeline: view()); este arquivo
   só assume onde o recurso não existe.

   Não há menu hambúrguer: a navegação da peça é o SUMÁRIO, e o cabeçalho
   corrido leva até ele. É a diferença estrutural em relação à v1.
   =========================================================================== */

'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const hasView = window.CSS && CSS.supports('animation-timeline: view()');
const hasScrollTL = window.CSS && CSS.supports('animation-timeline: scroll()');

/* ===========================================================================
   1 · REVELAÇÃO
   =========================================================================== */

$$('.draw-line').forEach((p) => {
  if (typeof p.getTotalLength === 'function') p.style.setProperty('--dash', Math.ceil(p.getTotalLength()));
});

if (!hasView) {
  document.documentElement.classList.add('no-vt');
  const alvos = $$('.rv, .draw-line');
  if ('IntersectionObserver' in window && !reduced.matches) {
    const io = new IntersectionObserver((es) => {
      for (const e of es) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }
    }, { rootMargin: '220px 0px -6% 0px', threshold: 0 });
    alvos.forEach((el) => io.observe(el));
  } else {
    alvos.forEach((el) => el.classList.add('is-in'));
  }
}

const cover = $('.cover');
if (cover) {
  if (reduced.matches || !('IntersectionObserver' in window)) cover.classList.add('is-in');
  else new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting) return;
    cover.classList.add('is-in');
    obs.disconnect();
  }, { threshold: 0.05 }).observe(cover);
}

/* ===========================================================================
   2 · CABEÇALHO CORRIDO — mostra o capítulo em que o leitor está.
   É o equivalente ao cabeçalho de página de um livro impresso.
   Sem listener de scroll: tudo por IntersectionObserver.
   =========================================================================== */

const capitulos = $$('main > section[data-cap]');
const agora = $('#runhead-now');
const progresso = $('.runhead__progress');
const tocLinks = $$('.toc__item');

function mostrar(cap) {
  if (!agora) return;
  const n = cap.dataset.cap;
  const t = cap.dataset.titulo || '';
  agora.textContent = n === '00' ? 'Sumário' : `${n} — ${t}`;

  tocLinks.forEach((a) => {
    if (a.getAttribute('href') === `#${cap.id}`) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });

  $$('.marker__dots', cap).forEach((d) => {
    const i = Number(cap.dataset.cap);
    $$('i', d).forEach((dot, k) => { dot.dataset.on = String(k < i); });
  });

  /* progresso: só assume quando animation-timeline: scroll() não existe */
  if (progresso && !hasScrollTL) {
    const idx = capitulos.indexOf(cap);
    const r = capitulos.length > 1 ? (idx + 1) / capitulos.length : 1;
    progresso.style.transform = `scaleX(${r.toFixed(3)})`;
  }
}

if ('IntersectionObserver' in window && capitulos.length) {
  const vis = new Map();
  const spy = new IntersectionObserver((es) => {
    es.forEach((e) => vis.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
    let melhor = 0, alvo = null;
    vis.forEach((r, id) => { if (r > melhor) { melhor = r; alvo = id; } });
    const cap = alvo && document.getElementById(alvo);
    if (cap) mostrar(cap);
  }, { threshold: [0, 0.12, 0.4, 0.7], rootMargin: '-14% 0px -50% 0px' });
  capitulos.forEach((c) => spy.observe(c));
}

/* preenche os pontos do marcador de cada capítulo */
$$('.marker__dots').forEach((d) => {
  const total = capitulos.length;
  const frag = document.createDocumentFragment();
  for (let k = 0; k < total; k++) frag.appendChild(document.createElement('i'));
  d.appendChild(frag);
});

/* ===========================================================================
   3 · CALENDÁRIO DO ANO — capítulo 06
   =========================================================================== */

const ano = $('#calendario');
if (ano) {
  const letras = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const frag = document.createDocumentFragment();
  letras.forEach((l, i) => {
    const c = document.createElement('div');
    c.className = 'year__m is-on';
    c.style.setProperty('--i', String(i));
    c.textContent = l;
    const visita = i === 0 || i === 6;
    c.dataset.visit = String(visita);
    c.setAttribute('aria-label', `Mês ${i + 1}: ${visita ? 'consulta na clínica' : 'rotina em casa'}`);
    frag.appendChild(c);
  });
  ano.appendChild(frag);
}

/* ===========================================================================
   4 · HORÁRIO
   =========================================================================== */

const flag = $('#flag');
if (flag) {
  const d = new Date();
  const dia = d.getDay();
  const min = d.getHours() * 60 + d.getMinutes();
  const tab = { 1: [480, 1200], 2: [480, 1200], 3: [480, 1200], 4: [480, 1200], 5: [480, 1200], 6: [480, 780] };
  const hoje = tab[dia];
  const aberto = Boolean(hoje && min >= hoje[0] && min < hoje[1]);
  flag.dataset.open = String(aberto);
  $('#flag-text').textContent = aberto ? 'Aberto agora' : 'Fechado agora';
  const chave = dia === 0 ? 'dom' : dia === 6 ? 'sab' : 'semana';
  $$('.hours div').forEach((x) => { x.dataset.today = String(x.dataset.day === chave); });
}

/* ===========================================================================
   5 · COPIAR ENDEREÇO
   =========================================================================== */

const copiar = $('#copy-addr');
if (copiar) {
  if (navigator.clipboard) {
    const out = $('#copy-msg');
    copiar.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(copiar.dataset.value); out.textContent = 'Endereço copiado.'; }
      catch { out.textContent = 'Não foi possível copiar — selecione o endereço acima.'; }
    });
  } else { copiar.hidden = true; }
}

/* ===========================================================================
   6 · FORMULÁRIO — três estados reais, nenhum envio simulado
   =========================================================================== */

const form = $('#form-contato');
if (form) {
  const status = $('#form-status');
  const enviar = $('#form-submit');
  const endpoint = (form.dataset.endpoint || '').trim();

  const setStatus = (estado, texto) => {
    status.hidden = false;
    status.dataset.state = estado;
    $('[data-status-text]', status).textContent = texto;
    enviar.classList.toggle('is-sending', estado === 'sending');
    enviar.disabled = estado === 'sending';
    enviar.dataset.state = estado === 'error' ? 'error' : '';
  };

  const conferir = (el) => {
    const ruim = el.required && !el.value.trim();
    el.setAttribute('aria-invalid', String(ruim));
    return !ruim;
  };

  const campos = $$('.field[data-validate] .input, .field[data-validate] .textarea, .field[data-validate] .select', form);
  campos.forEach((el) => el.addEventListener('blur', () => conferir(el)));

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const ruim = campos.find((el) => !conferir(el));
    if (ruim) { ruim.focus(); setStatus('error', 'Faltou preencher um campo obrigatório.'); return; }

    if (!endpoint) {
      setStatus('error',
        'Este é um site-modelo demonstrativo e ainda não tem destino de envio configurado — '
        + 'nenhuma mensagem foi enviada. Use o WhatsApp ao lado, ou configure o endpoint conforme o COMO-MANTER.md.');
      return;
    }

    setStatus('sending', 'Enviando…');
    try {
      const res = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('ok', 'Mensagem recebida. O retorno é em até 3 horas úteis.');
    } catch {
      setStatus('error', 'Não foi possível enviar agora. Use o WhatsApp ao lado ou o telefone da clínica.');
    }
  });
}

/* ===========================================================================
   7 · ANO CORRENTE
   =========================================================================== */

const y = $('#year');
if (y) y.textContent = String(new Date().getFullYear());
