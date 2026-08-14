/* ===========================================================================
   VÉRTICE ODONTOLOGIA — main.mjs   (ES module nativo, sem build)
   Regras de movimento do §9 aplicadas aqui:
     · ZERO addEventListener('scroll')  — posição é lida por IntersectionObserver
     · ZERO addEventListener('mousemove')
   Progressive enhancement: sem JS a página continua inteira, legível e navegável.
   A classe .js é adicionada inline no <head> para não haver flash de conteúdo.
   =========================================================================== */

'use strict';

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ===========================================================================
   1 · REVELAÇÃO AO ENTRAR NO VIEWPORT
   =========================================================================== */

/* o traçado SVG precisa do comprimento real de cada caminho */
$$('.draw-line').forEach((path) => {
  if (typeof path.getTotalLength !== 'function') return;
  path.style.setProperty('--dash', Math.ceil(path.getTotalLength()));
});

/* .portrait entra aqui para que o retrato anime onde ele estiver — no hero e
   no §2 — em vez de depender de .hero.is-in, que só existe no topo da página */
const revealTargets = $$('.reveal, .hero, .portrait, .draw-line');

if ('IntersectionObserver' in window && !reduced.matches) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
    /* Margem generosa de propósito: a revelação começa 220px ANTES do elemento
       entrar na tela, então nada é visto em branco durante a rolagem. threshold 0
       garante que blocos mais altos que a viewport também disparem. */
  }, { rootMargin: '220px 0px -6% 0px', threshold: 0 });
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-in'));
}

/* ===========================================================================
   2 · POSIÇÃO NO DOCUMENTO — espinha, navegação e cabeçalho
   Dispositivos de coesão nº 1 e nº 5. Nenhum listener de scroll.
   =========================================================================== */

const sections   = $$('main > section[id]');
const navLinks   = $$('[data-nav] a[href^="#"]');
const spineNodes = $$('.spine__node');
const progress   = $('.spine__progress');
const hasScrollTimeline = window.CSS && CSS.supports('animation-timeline: scroll()');

function markCurrent(id) {
  navLinks.forEach((a) => {
    if (a.getAttribute('href') === `#${id}`) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
  spineNodes.forEach((b) => {
    if (b.dataset.target === id) b.setAttribute('aria-current', 'true');
    else b.removeAttribute('aria-current');
  });

  /* progresso da espinha quando animation-timeline não existe — sem scroll listener */
  if (progress && !hasScrollTimeline) {
    const i = sections.findIndex((s) => s.id === id);
    const ratio = sections.length > 1 ? (i + 1) / sections.length : 1;
    progress.style.transform = `scaleY(${ratio.toFixed(3)})`;
  }
}

if ('IntersectionObserver' in window && sections.length) {
  const visible = new Map();
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
    let bestId = null;
    let best = 0;
    visible.forEach((ratio, id) => { if (ratio > best) { best = ratio; bestId = id; } });
    if (bestId) markCurrent(bestId);
  }, { threshold: [0, 0.15, 0.4, 0.75], rootMargin: '-18% 0px -45% 0px' });
  sections.forEach((s) => spy.observe(s));
}

/* cabeçalho compacto: sentinela no topo do documento, não listener de scroll */
const head = $('.head');
const sentinel = $('#inicio-sentinela');
if (head && sentinel && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => {
    head.dataset.scrolled = String(!e.isIntersecting);
  }, { threshold: 0 }).observe(sentinel);
}

spineNodes.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (!target) return;
    target.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'start' });
    const h = target.querySelector('h2, h1');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  });
});

/* ===========================================================================
   3 · MENU COMPACTO (<dialog>)
   =========================================================================== */

const sheet = $('#menu-sheet');
const menuOpen = $('#menu-open');
if (sheet && menuOpen) {
  const closeSheet = () => {
    if (typeof sheet.close === 'function' && sheet.open) sheet.close();
    else sheet.removeAttribute('open');
    menuOpen.setAttribute('aria-expanded', 'false');
  };
  menuOpen.addEventListener('click', () => {
    if (typeof sheet.showModal === 'function') sheet.showModal();
    else sheet.setAttribute('open', '');
    menuOpen.setAttribute('aria-expanded', 'true');
  });
  $('#menu-close')?.addEventListener('click', () => { closeSheet(); menuOpen.focus(); });
  $$('a', sheet).forEach((a) => a.addEventListener('click', closeSheet));
  sheet.addEventListener('close', () => menuOpen.setAttribute('aria-expanded', 'false'));
}

/* ===========================================================================
   4 · CONTROLE SEGMENTADO — §3 Quem conduz
   =========================================================================== */

$$('[data-seg]').forEach((seg) => {
  const buttons = $$('button[role="tab"]', seg);
  const select = (id) => {
    buttons.forEach((b) => {
      const on = b.dataset.panel === id;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
      const p = document.getElementById(b.dataset.panel);
      if (p) p.hidden = !on;
    });
  };
  buttons.forEach((b, i) => {
    b.addEventListener('click', () => select(b.dataset.panel));
    b.addEventListener('keydown', (ev) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[ev.key];
      if (!step) return;
      ev.preventDefault();
      const next = buttons[(i + step + buttons.length) % buttons.length];
      next.focus();
      select(next.dataset.panel);
    });
  });
});

/* ===========================================================================
   5 · STEPPER — §4 A primeira consulta
   =========================================================================== */

const stepper = $('[data-stepper]');
if (stepper) {
  const buttons = $$('.step-btn', stepper);
  const panel = $('#step-panel', stepper);
  const data = JSON.parse($('#step-data').textContent);

  const render = (key) => {
    const d = data[key];
    if (!d) return;
    panel.replaceChildren();
    panel.insertAdjacentHTML('beforeend', `
      <h3>${d.titulo}</h3>
      <div class="steps__meta">
        <span class="chip chip--tint"><span class="chip__dot"></span>${d.duracao}</span>
        <span class="chip">Etapa ${d.n} de 5</span>
        <span class="chip">${d.onde}</span>
      </div>
      <p>${d.texto}</p>
      <ul class="stack stack--tight steps__points">${d.pontos.map((p) => `<li>${p}</li>`).join('')}</ul>`);
    buttons.forEach((b) => {
      const on = b.dataset.step === key;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
    });
  };

  buttons.forEach((b, i) => {
    b.addEventListener('click', () => render(b.dataset.step));
    b.addEventListener('keydown', (ev) => {
      const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[ev.key];
      if (!step) return;
      ev.preventDefault();
      const next = buttons[(i + step + buttons.length) % buttons.length];
      next.focus();
      render(next.dataset.step);
    });
  });
  render('01');
}

/* ===========================================================================
   6 · TECNOLOGIA — interruptor "antes / agora"
   =========================================================================== */

$$('.tech__row').forEach((row) => {
  const btn = $('.switch', row);
  const label = $('.tech__label', row);
  const value = $('.tech__value', row);
  const word = btn && $('[data-switch-word]', btn);
  if (!btn || !label || !value || !word) return;

  const apply = (now) => {
    row.dataset.state = now ? 'now' : 'before';
    btn.setAttribute('aria-pressed', String(now));
    label.textContent = now ? 'Como é aqui' : 'Como costumava ser';
    value.textContent = now ? btn.dataset.now : btn.dataset.before;
    word.textContent = now ? 'Agora' : 'Antes';
  };
  btn.addEventListener('click', () => apply(btn.getAttribute('aria-pressed') !== 'true'));
  apply(true);
});

/* ===========================================================================
   7 · TOUR DO ESPAÇO — planta baixa
   =========================================================================== */

const tour = $('[data-tour]');
if (tour) {
  const buttons = $$('.step-btn', tour);
  const hits = $$('.plan__hit', tour);
  const panel = $('#tour-panel', tour);
  const data = JSON.parse($('#tour-data').textContent);

  const show = (key) => {
    const d = data[key];
    if (!d) return;
    panel.replaceChildren();
    panel.insertAdjacentHTML('beforeend', `
      <h3>${d.titulo}</h3>
      <div class="steps__meta">
        <span class="chip chip--tint"><span class="chip__dot"></span>${d.area}</span>
        <span class="chip">${d.luz}</span>
      </div>
      <p>${d.texto}</p>`);
    buttons.forEach((b) => b.setAttribute('aria-selected', String(b.dataset.room === key)));
    $$('.plan__room', tour).forEach((r) => { r.dataset.active = String(r.dataset.room === key); });
    $$('.plan__tag', tour).forEach((t) => { t.dataset.active = String(t.dataset.room === key); });
  };

  buttons.forEach((b) => b.addEventListener('click', () => show(b.dataset.room)));
  hits.forEach((h) => {
    h.addEventListener('click', () => show(h.dataset.room));
    h.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); show(h.dataset.room); }
    });
  });
  show('recepcao');
}

/* ===========================================================================
   8 · HORÁRIO — estado de funcionamento, calculado no cliente
   Informa; não promete. Marca também a linha do dia corrente.
   =========================================================================== */

const flag = $('#open-flag');
if (flag) {
  const now = new Date();
  const day = now.getDay();                     /* 0 domingo … 6 sábado */
  const mins = now.getHours() * 60 + now.getMinutes();
  const table = { 1: [480, 1140], 2: [480, 1140], 3: [480, 1140], 4: [480, 1140], 5: [480, 1140], 6: [480, 720] };
  const today = table[day];
  const open = Boolean(today && mins >= today[0] && mins < today[1]);

  flag.dataset.open = String(open);
  $('#open-flag-text').textContent = open ? 'Aberto agora' : 'Fechado agora';

  const rowKey = day === 0 ? 'dom' : day === 6 ? 'sab' : 'semana';
  $$('.hours div').forEach((d) => { d.dataset.today = String(d.dataset.day === rowKey); });
}

/* ===========================================================================
   9 · COPIAR ENDEREÇO
   =========================================================================== */

const copyBtn = $('#copy-addr');
if (copyBtn) {
  if (navigator.clipboard) {
    const out = $('#copy-msg');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.value);
        out.textContent = 'Endereço copiado.';
      } catch {
        out.textContent = 'Não foi possível copiar — selecione o endereço acima.';
      }
    });
  } else {
    copyBtn.hidden = true;
  }
}

/* ===========================================================================
   10 · FORMULÁRIO — três estados reais, nenhum envio simulado
   O §10 proíbe formulário que finge enviar. Sem data-endpoint configurado, o
   formulário DIZ que não há destino e encaminha ao WhatsApp. Ver COMO-MANTER.md §4.
   =========================================================================== */

const form = $('#contato-form');
if (form) {
  const status = $('#form-status');
  const submit = $('#form-submit');
  const endpoint = (form.dataset.endpoint || '').trim();

  const setStatus = (state, text) => {
    status.hidden = false;
    status.dataset.state = state;
    $('[data-status-text]', status).textContent = text;
    submit.classList.toggle('sending', state === 'sending');
    submit.disabled = state === 'sending';
    submit.dataset.state = state === 'error' ? 'error' : '';
  };

  const checkField = (el) => {
    const field = el.closest('.field');
    const bad = el.required && !el.value.trim();
    field.dataset.invalid = String(bad);
    el.setAttribute('aria-invalid', String(bad));
    return !bad;
  };

  const controls = $$('.field[data-validate] .input, .field[data-validate] .textarea, .field[data-validate] .select', form);
  controls.forEach((el) => el.addEventListener('blur', () => checkField(el)));

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const firstBad = controls.find((el) => !checkField(el));
    if (firstBad) {
      firstBad.focus();
      setStatus('error', 'Faltou preencher um campo obrigatório.');
      return;
    }

    if (!endpoint) {
      setStatus('error',
        'Este é um site-modelo demonstrativo e ainda não tem destino de envio configurado — '
        + 'nenhuma mensagem foi enviada. Use o WhatsApp ao lado, ou configure o endpoint conforme o COMO-MANTER.md.');
      return;
    }

    setStatus('sending', 'Enviando…');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('ok', 'Mensagem recebida. O retorno é em até 4 horas úteis.');
    } catch {
      setStatus('error', 'Não foi possível enviar agora. Use o WhatsApp ao lado ou o telefone da clínica.');
    }
  });
}

/* ===========================================================================
   11 · ANO CORRENTE NO RODAPÉ
   =========================================================================== */

const year = $('#year');
if (year) year.textContent = String(new Date().getFullYear());

/* ===========================================================================
   12 · FILTRO DE PROCEDIMENTOS — §4
   Apaga em vez de esconder: `display:none` tiraria o cartão da árvore de
   acessibilidade e faria o layout pular a cada clique. Aqui o conteúdo
   permanece no DOM, e o estado é anunciado por uma região viva.
   =========================================================================== */

const filtro = $('[data-filtro]');
if (filtro) {
  const chips = $$('.chip-f', filtro);
  const cards = $$('.proc');
  const conta = $('[data-filtro-conta]');

  const aplicar = (tag) => {
    let visiveis = 0;
    cards.forEach((c) => {
      const bate = tag === 'tudo' || (c.dataset.tags || '').split(' ').includes(tag);
      c.dataset.fora = String(!bate);
      if (bate) visiveis++;
    });
    chips.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.tag === tag)));
    const rotulo = chips.find((b) => b.dataset.tag === tag)?.textContent.trim() ?? 'Tudo';
    conta.textContent = tag === 'tudo'
      ? `${visiveis} de ${cards.length} em exibição`
      : `${visiveis} de ${cards.length} em exibição · ${rotulo}`;
  };

  chips.forEach((b) => b.addEventListener('click', () => aplicar(b.dataset.tag)));
  aplicar('tudo');
}
