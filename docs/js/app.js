// Slate mobile home — vanilla JS port of project/Slate Home.dc.html
(function () {
  const ICON_CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/';
  const STORE = 'slate-home-v1';

  const products = [
    { id: 'p1', brand: 'Slate', name: '워시드 리넨 오버셔츠', price: 128000, cat: 'apparel', badge: 'New', colors: ['#3A3F43', '#CFE4EF', '#E1E3E5'] },
    { id: 'p6', brand: 'Haus Ritual', name: '린넨 룸 스프레이 100ml', price: 42000, cat: 'home', badge: 'New' },
    { id: 'p3', brand: 'Kiln & Co', name: '스톤웨어 머그 — 애쉬', price: 32000, cat: 'objects', badge: 'Only here', colors: ['#C8CCCF'] },
    { id: 'p8', brand: 'Slate', name: '메리노 크루넥 니트', price: 148000, cat: 'apparel', colors: ['#E1E3E5', '#565C61'] },
    { id: 'p2', brand: 'Norrby', name: '울 캐시미어 머플러', price: 96000, compareAt: 128000, cat: 'apparel', colors: ['#7A8086', '#1F2224'] },
    { id: 'p7', brand: 'Kiln & Co', name: '오크 서빙 보드', price: 58000, cat: 'objects' },
    { id: 'p4', brand: 'Form Study', name: '알루미늄 데스크 램프', price: 210000, cat: 'home', soldOut: true, colors: ['#A3A8AD'] },
    { id: 'p5', brand: 'Slate', name: '코튼 트윌 와이드 팬츠', price: 118000, cat: 'apparel', colors: ['#2A2E31', '#B3D3E4'] }
  ];
  const cats = [
    { id: 'apparel', label: 'Apparel', count: 48, subs: '아우터 · 셔츠 · 니트 · 팬츠 · 액세서리', imgLabel: 'APPAREL 4:5' },
    { id: 'objects', label: 'Objects', count: 31, subs: '테이블웨어 · 데스크 · 문구 · 케어', imgLabel: 'OBJECTS 4:5' },
    { id: 'home', label: 'Home', count: 26, subs: '향 · 텍스타일 · 조명 · 수납', imgLabel: 'HOME 4:5' }
  ];
  const tabBar = [['home', 'Home', '#top'], ['layout-grid', 'Shop', '#categories'], ['map-pin', 'Pop-up', '#popup'], ['shopping-bag', 'Bag', '#bag'], ['user', 'My', '#my']];
  const footerCols = [
    { title: 'Shop', links: ['Apparel', 'Objects', 'Home', 'Gift card'] },
    { title: 'Visit', links: ['성수 플래그십', 'Pop-up 일정', '키오스크 안내'] },
    { title: 'Help', links: ['배송', '교환 및 반품', '문의하기'] }
  ];

  // Cart and wishlist survive app restarts; storage can be unavailable, so fail soft.
  let state = { cat: 'all', cart: 0, wish: {} };
  try { Object.assign(state, JSON.parse(localStorage.getItem(STORE)) || {}, { cat: 'all' }); } catch (e) {}
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify({ cart: state.cart, wish: state.wish })); } catch (e) {} };

  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const won = n => '₩' + n.toLocaleString('ko-KR');
  const icon = (name, cls) => `<span class="i${cls ? ' ' + cls : ''}" data-i="${name}"></span>`;
  // heart-fill is drawn inline in app.css; everything else comes from Lucide.
  const hydrateIcons = root => root.querySelectorAll('.i[data-i]').forEach(el => {
    if (el.dataset.i !== 'heart-fill') el.style.setProperty('--src', `url("${ICON_CDN}${el.dataset.i}.svg")`);
    el.setAttribute('aria-hidden', 'true');
  });
  const count = c => products.filter(p => c === 'all' || p.cat === c).length;

  function renderCats() {
    $('cats').innerHTML = cats.map(c => `
      <a class="cat" href="#new-in" data-cat="${c.id}">
        <div class="cat-img"><span class="well-label">${c.imgLabel}</span></div>
        <span class="cat-title"><span>${c.label}<span class="mono">${c.count}</span></span><span aria-hidden="true">→</span></span>
        <span class="cat-subs">${c.subs}</span>
      </a>`).join('');
  }

  function renderTabs() {
    const items = [{ id: 'all', label: 'All' }, ...cats];
    $('tabs').innerHTML = items.map(t => `
      <button type="button" role="tab" class="tab" data-cat="${t.id}" aria-selected="${state.cat === t.id}">${t.label}<span class="mono">${count(t.id)}</span></button>`).join('');
  }

  function renderGrid() {
    const list = products.filter(p => state.cat === 'all' || p.cat === state.cat);
    $('grid').innerHTML = list.map(p => {
      const wished = !!state.wish[p.id];
      const pct = p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;
      return `
      <article class="card">
        <div class="card-img">
          <span class="well-label">PRODUCT 4:5</span>
          ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ''}
          <button type="button" class="wish" data-wish="${p.id}" aria-pressed="${wished}" aria-label="${esc(p.name)} 위시리스트${wished ? '에서 빼기' : '에 담기'}">${icon(wished ? 'heart-fill' : 'heart')}</button>
          ${p.soldOut
            ? '<span class="soldout">Sold out</span>'
            : `<button type="button" class="quick" data-add="${p.id}" aria-label="${esc(p.name)} 장바구니에 담기">${icon('plus')}</button>`}
        </div>
        <div class="card-info">
          <span class="brand">${esc(p.brand)}</span>
          <span class="name">${esc(p.name)}</span>
          <span class="price">${p.compareAt ? `<span class="sale">${pct}%</span>` : ''}${won(p.price)}${p.compareAt ? `<s>${won(p.compareAt)}</s>` : ''}</span>
          ${p.colors ? `<span class="swatches" aria-label="색상 ${p.colors.length}가지">${p.colors.map(c => `<span style="background:${c}"></span>`).join('')}</span>` : ''}
        </div>
      </article>`;
    }).join('');
    $('empty').hidden = list.length > 0;
    hydrateIcons($('grid'));
  }

  function renderBag() {
    const el = $('bagCount');
    el.textContent = state.cart;
    el.hidden = state.cart === 0;
    $('bagBtn').setAttribute('aria-label', `장바구니 ${state.cart}개`);
  }

  function renderStatic() {
    $('tabbar').innerHTML = tabBar.map(([i, label, href], n) =>
      `<a href="${href}"${n === 0 ? ' aria-current="page"' : ''}>${icon(i)}<span>${label}</span></a>`).join('');
    $('footerCols').innerHTML = footerCols.map(col => `
      <div class="footer-col"><span class="label">${col.title}</span>${col.links.map(l => `<a href="#">${l}</a>`).join('')}</div>`).join('');
  }

  let toastTimer;
  function toast(msg) {
    clearTimeout(toastTimer);
    $('toastMsg').textContent = msg;
    $('toast').hidden = false;
    toastTimer = setTimeout(() => { $('toast').hidden = true; }, 2600);
  }

  function setCat(id) {
    state.cat = id;
    renderTabs();
    renderGrid();
  }

  // Events
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-cat],[data-wish],[data-add],.tabbar a');
    if (!t) return;
    if (t.dataset.cat) { setCat(t.dataset.cat); return; }
    if (t.dataset.wish) {
      const id = t.dataset.wish;
      state.wish[id] = !state.wish[id];
      save(); renderGrid();
      toast(state.wish[id] ? '위시리스트에 담았습니다.' : '위시리스트에서 뺐습니다.');
      return;
    }
    if (t.dataset.add) {
      state.cart += 1;
      save(); renderBag();
      toast('장바구니에 담았습니다.');
      return;
    }
    const href = t.getAttribute('href');
    if (href === '#bag' || href === '#my') {
      e.preventDefault();
      toast(href === '#bag' ? `장바구니에 ${state.cart}개가 있습니다.` : '준비 중입니다.');
    }
    document.querySelectorAll('.tabbar a').forEach(a => a.toggleAttribute('aria-current', a === t));
    if (t.hasAttribute('aria-current')) t.setAttribute('aria-current', 'page');
  });
  $('bagBtn').addEventListener('click', () => toast(`장바구니에 ${state.cart}개가 있습니다.`));
  $('toastAction').addEventListener('click', () => { $('toast').hidden = true; });
  $('reserveBtn').addEventListener('click', () => toast('방문 예약은 준비 중입니다.'));

  renderStatic();
  renderCats();
  renderTabs();
  renderGrid();
  renderBag();
  hydrateIcons(document);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
