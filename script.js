/* ─── Arte Vegetal — Script ─── */

'use strict';

/* ─── Marquee Products ─── */
const marqueeProducts = [
  { name: 'Crema de Maní',        icon: 'images/icon-crema-mani.svg',       img: 'images/crema_de_mani.jpg' },
  { name: 'Crema de Almendras',   icon: 'images/icon-crema-almendras.svg',   img: 'images/crema_de_almendras.jpg' },
  { name: 'Crema de Avellanas',   icon: 'images/icon-crema-avellanas.svg',   img: 'images/crema_de_avellanas.jpg' },
  { name: 'Crema de Marañón',     icon: null,                                img: 'images/crema_de_maranon.jpg' },
  { name: 'Crema de Macadamia',   icon: null,                                img: 'images/crema_de_macadamia.jpg' },
  { name: 'Crema de Pistacho',    icon: null,                                img: 'images/crema_de_pistacho.jpg' },
  { name: 'Granola de Matcha',    icon: null,                                img: 'images/granola_matcha_y_chocolate.jpg' },
  { name: 'Granola de Chocolate', icon: null,                                img: 'images/granola_matcha_y_chocolate.jpg' },
  { name: 'Mantequilla Ghee',     icon: null,                                img: 'images/mantequilla_ghee.jpg' },
  { name: 'Miel Cruda',           icon: 'images/icon-miel-cruda.svg',        img: 'images/miel_cruda.jpg' },
  { name: 'Miel en Panal',        icon: 'images/icon-miel-panal.svg',        img: 'images/miel_en_panal.jpg' },
  { name: 'Propóleo en Spray',    icon: 'images/icon-propoleo.svg',          img: 'images/propoleo_spray.jpg' },
  { name: 'Polen de Abejas',      icon: null,                                img: 'images/polen_de_abeja.jpg' },
  { name: 'Hidratante de Labios', icon: null,                                img: 'images/hidratante_de_labios.jpg' },
  { name: 'Chocolate al 85%',     icon: null,                                img: 'images/chocolate_85_porciento.jpg' },
  { name: 'Cacao al 100%',        icon: null,                                img: 'images/cacao_100_porciento.jpg' },
  { name: 'Nibs de Cacao',        icon: null,                                img: 'images/nibs_de_cacao.jpg' },
  { name: 'Café de Origen',       icon: null,                                img: 'images/cafe_de_origen.jpg' },
];

/* ─── Products Catalogue ─── */
const catalogueProducts = [
  { name: 'Crema de Maní',        category: 'Cremas de Nueces',     price: '$15.000', size: '200 g',  img: 'images/crema_de_mani.jpg' },
  { name: 'Crema de Almendras',   category: 'Cremas de Nueces',     price: '$15.000', size: '100 g',  img: 'images/crema_de_almendras.jpg',
    sizes: ['100 g', '200 g'], prices: ['$15.000', '$30.000'] },
  { name: 'Crema de Avellanas',   category: 'Cremas de Nueces',     price: '$15.000', size: '100 g',  img: 'images/crema_de_avellanas.jpg',
    sizes: ['100 g', '200 g'], prices: ['$15.000', '$30.000'] },
  { name: 'Crema de Marañón',     category: 'Cremas de Nueces',     price: '$18.000', size: '100 g',  img: 'images/crema_de_maranon.jpg',
    sizes: ['100 g', '200 g'], prices: ['$18.000', '$35.000'] },
  { name: 'Crema de Macadamia',   category: 'Cremas de Nueces',     price: '$18.000', size: '100 g',  img: 'images/crema_de_macadamia.jpg',
    sizes: ['100 g', '200 g'], prices: ['$18.000', '$35.000'] },
  { name: 'Crema de Pistacho',    category: 'Cremas de Nueces',     price: '$30.000', size: '100 g',  img: 'images/crema_de_pistacho.jpg',
    sizes: ['100 g', '200 g'], prices: ['$30.000', '$55.000'] },
  { name: 'Granola de Matcha',    category: 'Granolas Artesanales', price: '$15.000', size: '180 g',  img: 'images/granola_matcha_y_chocolate.jpg',
    sizes: ['180 g', '400 g'], prices: ['$15.000', '$30.000'] },
  { name: 'Granola de Chocolate', category: 'Granolas Artesanales', price: '$15.000', size: '180 g',  img: 'images/granola_matcha_y_chocolate.jpg',
    sizes: ['180 g', '400 g'], prices: ['$15.000', '$30.000'] },
  { name: 'Mantequilla Ghee',     category: 'Mantequilla Ghee',     price: '$16.000', size: '150 g',  img: 'images/mantequilla_ghee.jpg',
    sizes: ['150 g', '400 g'], prices: ['$16.000', '$40.000'] },
  { name: 'Miel Cruda',           category: 'Productos Apícolas',   price: '$18.000', size: '300 g',  img: 'images/miel_cruda.jpg',
    sizes: ['300 g', '600 g'], prices: ['$18.000', '$36.000'] },
  { name: 'Miel en Panal',        category: 'Productos Apícolas',   price: '$23.000', size: '~280 g', img: 'images/miel_en_panal.jpg' },
  { name: 'Propóleo en Spray',    category: 'Productos Apícolas',   price: '$30.000', size: '30 ml',  img: 'images/propoleo_spray.jpg' },
  { name: 'Polen de Abejas',      category: 'Productos Apícolas',   price: '$20.000', size: '150 g',  img: 'images/polen_de_abeja.jpg',
    sizes: ['150 g', '300 g'], prices: ['$20.000', '$35.000'] },
  { name: 'Hidratante de Labios', category: 'Productos Apícolas',   price: '$20.000', size: '7 g',    img: 'images/hidratante_de_labios.jpg',
    flavors: ['Coco', 'Vainilla', 'Miel', 'Rosas', 'Menta', 'Cítricos', 'Cereza', 'Chocolate', 'Frutos Rojos', 'Propóleo'] },
  { name: 'Chocolate al 85%',     category: 'Productos de Cacao',   price: '$15.000', size: '85 g',   img: 'images/chocolate_85_porciento.jpg' },
  { name: 'Cacao al 100%',        category: 'Productos de Cacao',   price: '$17.000', size: '125 g',  img: 'images/cacao_100_porciento.jpg' },
  { name: 'Nibs de Cacao',        category: 'Productos de Cacao',   price: '$20.000', size: '200 g',  img: 'images/nibs_de_cacao.jpg' },
  { name: 'Café de Origen',       category: 'Café de Origen',       price: '$40.000', size: '500 g',  img: 'images/cafe_de_origen.jpg' },
];

/* ─── Category Tabs data ─── */
const categoryTabs = [
  {
    name: 'Cremas de Nueces',
    icon: '🥜',
    desc: 'Seis variedades 100% nuez pura. Sin aceites, sin sal, sin azúcar. Maní, Almendras, Avellanas, Marañón, Macadamia y Pistacho. Perfectas para untar o hacer leche vegetal: 1 cucharada + vaso de agua.',
    img:  'images/crema_de_almendras.jpg',
  },
  {
    name: 'Granolas Artesanales',
    icon: '🌾',
    desc: 'Avena, almendras, nueces, semillas de chía y linaza, crema de maní, mantequilla ghee y miel. Alta en proteínas y fibra. Sin azúcar añadida. Dos sabores: Matcha y Chocolate 85%.',
    img:  'images/granola_matcha_y_chocolate.jpg',
  },
  {
    name: 'Mantequilla Ghee',
    icon: '🧈',
    desc: 'Elaborada de vacas de libre pastoreo de campesinos en Neira, Caldas. Proceso artesanal de clarificación de 6 a 8 horas. Sin lactosa, sin proteínas de leche. No requiere refrigeración. Alto punto de humo.',
    img:  'images/mantequilla_ghee.jpg',
  },
  {
    name: 'Productos Apícolas',
    icon: '🍯',
    desc: 'Nuestro apiario aloja abejas rescatadas en la reserva forestal. Miel cruda, miel en panal, propóleo en spray, polen y labiales naturales con cera de abejas. Una colmena completa en tu despensa.',
    img:  'images/miel_cruda.jpg',
  },
  {
    name: 'Productos de Cacao',
    icon: '🍫',
    desc: 'Cacao criollo colombiano cultivado sin agroquímicos. Chocolate al 85%, cacao al 100% de mesa y nibs tostados endulzados con panela. Sin aditivos. Origen Colombia.',
    img:  'images/chocolate_85_porciento.jpg',
  },
  {
    name: 'Café de Origen',
    icon: '☕',
    desc: 'Altura 1800 msnm, variedad Castillo, proceso lavado, tostión media. Notas de naranja y caramelo, dulzor de caña panelera, acidez media y cuerpo moderado. Disponible molido o en grano. 500 g · $40.000.',
    img:  'images/cafe_de_origen.jpg',
  },
];

/* ─────────────────────────────────────────
   CART STATE
───────────────────────────────────────── */
const WA_NUMBER = '573103811104';

let cartItems = new Map(); // productName → { product, qty }

function parsePriceCOP(priceStr) {
  return parseInt(priceStr.replace(/[$\s.]/g, ''), 10) || 0;
}

function loadCart() {
  try {
    const saved = localStorage.getItem('av_cart');
    if (saved) cartItems = new Map(JSON.parse(saved));
  } catch (_) { cartItems = new Map(); }
}

function saveCart() {
  try {
    localStorage.setItem('av_cart', JSON.stringify([...cartItems]));
  } catch (_) {}
}

function addToCart(product) {
  const id = product._cartKey || product.name;
  if (cartItems.has(id)) {
    cartItems.get(id).qty += 1;
  } else {
    cartItems.set(id, { product, qty: 1 });
  }
  saveCart();
  refreshCartUI();
}

function removeFromCart(id) {
  cartItems.delete(id);
  saveCart();
  refreshCartUI();
}

function updateQty(id, delta) {
  if (!cartItems.has(id)) return;
  const item = cartItems.get(id);
  const newQty = item.qty + delta;
  if (newQty < 1) { removeFromCart(id); return; }
  item.qty = newQty;
  saveCart();
  refreshCartUI();
}

function getTotal() {
  let total = 0;
  for (const { product, qty } of cartItems.values()) {
    total += parsePriceCOP(product.price) * qty;
  }
  return total;
}

function getCount() {
  let count = 0;
  for (const { qty } of cartItems.values()) count += qty;
  return count;
}

function clearCart() {
  cartItems.clear();
  saveCart();
  refreshCartUI();
}

function refreshCartUI() {
  renderCart();
  updateCartBadge();
  updateCardStates();
}

function buildWhatsAppURL(paymentLabel, formData) {
  const lines = ['Hola Arte Vegetal! 🌿 Quiero hacer el siguiente pedido:\n'];
  for (const { product, qty } of cartItems.values()) {
    const subtotal = parsePriceCOP(product.price) * qty;
    lines.push(`• ${qty}x ${product.name} (${product.size}) — $${subtotal.toLocaleString('de-DE')}`);
  }
  lines.push(`\n*Total: $${getTotal().toLocaleString('de-DE')}*`);
  lines.push(`\nMétodo de pago: ${paymentLabel}`);
  if (formData) {
    lines.push('\n*Datos de entrega:*');
    lines.push(`Nombre: ${formData.name}`);
    lines.push(`Ciudad: ${formData.city}`);
    lines.push(`Teléfono: ${formData.phone}`);
    lines.push(`Dirección: ${formData.address}`);
  }
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/* ─── DOM Ready ─── */
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  initMarquee();
  initCatalogue();
  initCatalogueFilter();
  initCategoryTabs();
  initCartDrawer();
  initCheckoutModal();
  initMobileNav();
  initReveal();
  initHeroAnimation();
  initNavbarScroll();
  initStatCounters();
  initReviews();
  initReviewModal();
  refreshCartUI();
});

/* ─── Marquee ─── */
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;

  const doubled = [...marqueeProducts, ...marqueeProducts];
  track.innerHTML = doubled.map(p => {
    const iconHtml = p.icon
      ? `<img src="${p.icon}" alt="${p.name}" width="28" height="28">`
      : `<img src="${p.img}" alt="${p.name}" width="28" height="28" class="marquee-photo">`;
    return `<div class="marquee-item">
      ${iconHtml}
      <span>${p.name}</span>
      <span class="marquee-dot"></span>
    </div>`;
  }).join('');
}

/* ─── Catalogue Grid ─── */
function buildVariantKey(name, variant) {
  return variant ? `${name}::${variant}` : name;
}

function initCatalogue() {
  const grid = document.querySelector('.apps-grid');
  if (!grid) return;

  grid.innerHTML = catalogueProducts.map(p => {
    const hasSizes   = p.sizes && p.sizes.length > 1;
    const hasFlavors = p.flavors && p.flavors.length > 0;
    const defaultVariant = hasSizes ? p.sizes[0] : (hasFlavors ? '' : '');
    const pricesAttr = hasSizes ? `data-prices='${JSON.stringify(p.prices)}'` : '';

    const sizePicker = hasSizes ? `
      <div class="variant-picker size-picker">
        ${p.sizes.map((s, i) =>
          `<button class="size-pill${i === 0 ? ' active' : ''}" data-size="${s}" data-price="${p.prices[i]}">${s}</button>`
        ).join('')}
      </div>` : '';

    const flavorPicker = hasFlavors ? `
      <div class="variant-picker flavor-picker">
        <select class="flavor-select" aria-label="Elige el sabor de ${p.name}">
          <option value="">— Elige sabor —</option>
          ${p.flavors.map(f => `<option value="${f}">${f}</option>`).join('')}
        </select>
      </div>` : '';

    return `
    <div class="app-card-wrap" data-category="${p.category}" ${pricesAttr}>
      <a class="app-card"
         href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola! Me interesa ' + p.name)}"
         target="_blank" rel="noopener"
         title="${p.name} — Arte Vegetal">
        <div class="app-card-photo">
          <img src="${p.img}" alt="${p.name} — Arte Vegetal" loading="lazy">
          <div class="app-card-overlay">
            <span class="app-card-price">${p.price}</span>
          </div>
        </div>
        <div class="app-card-info">
          <div class="app-name">${p.name}</div>
          <div class="app-category">${p.category}</div>
          ${!hasSizes && !hasFlavors ? `<div class="app-size">${p.size}</div>` : ''}
        </div>
      </a>
      ${sizePicker}
      ${flavorPicker}
      <button class="card-add-btn" data-product-name="${p.name}" data-variant="${defaultVariant}" data-price="${p.price}"
              aria-label="Agregar ${p.name} al carrito">
        + Agregar
      </button>
    </div>`;
  }).join('');

  // Size pill clicks — update active pill, displayed price, and button data-variant
  grid.addEventListener('click', e => {
    const pill = e.target.closest('.size-pill');
    if (pill) {
      const wrap = pill.closest('.app-card-wrap');
      wrap.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const btn = wrap.querySelector('.card-add-btn');
      if (btn) {
        btn.dataset.variant = pill.dataset.size;
        btn.dataset.price   = pill.dataset.price;
      }
      // Update visible price badge
      const priceEl = wrap.querySelector('.app-card-price');
      if (priceEl) priceEl.textContent = pill.dataset.price;
      updateCardStates();
      return;
    }

    // Add to cart button
    const addBtn = e.target.closest('.card-add-btn');
    if (!addBtn) return;
    e.preventDefault();
    const name = addBtn.dataset.productName;
    const wrap = addBtn.closest('.app-card-wrap');
    const base = catalogueProducts.find(p => p.name === name);
    if (!base) return;

    // For flavor products, read the select
    if (base.flavors) {
      const sel = wrap.querySelector('.flavor-select');
      const flavor = sel ? sel.value : '';
      if (!flavor) { sel && (sel.style.outline = '2px solid #e05c2a'); sel && setTimeout(() => sel.style.outline = '', 1200); return; }
      addBtn.dataset.variant = flavor;
    }

    const variant = addBtn.dataset.variant || '';
    const selectedPrice = addBtn.dataset.price || base.price;
    const cartProduct = { ...base, price: selectedPrice, size: variant || base.size, _cartKey: buildVariantKey(name, variant) };
    addToCart(cartProduct);
  });

  // Flavor select change — update button data-variant
  grid.addEventListener('change', e => {
    const sel = e.target.closest('.flavor-select');
    if (!sel) return;
    const wrap = sel.closest('.app-card-wrap');
    const btn = wrap?.querySelector('.card-add-btn');
    if (btn) btn.dataset.variant = sel.value;
    updateCardStates();
  });
}

/* ─── Catalogue Filter ─── */
function initCatalogueFilter() {
  const filterBar = document.querySelector('.catalogue-filter');
  const grid = document.querySelector('.apps-grid');
  if (!filterBar || !grid) return;

  filterBar.addEventListener('click', e => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;

    filterBar.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-selected', 'false');
    });
    pill.classList.add('active');
    pill.setAttribute('aria-selected', 'true');

    const filter = pill.dataset.filter;
    grid.querySelectorAll('.app-card-wrap').forEach(wrap => {
      if (filter === 'all' || wrap.dataset.category === filter) {
        wrap.classList.remove('cat-hidden');
      } else {
        wrap.classList.add('cat-hidden');
      }
    });
  });
}

/* ─── Sync card button states with cart ─── */
function updateCardStates() {
  document.querySelectorAll('.card-add-btn').forEach(btn => {
    const name    = btn.dataset.productName;
    const variant = btn.dataset.variant || '';
    const id      = buildVariantKey(name, variant);
    const inCart  = cartItems.has(id);
    btn.textContent = inCart ? '✓ En carrito' : '+ Agregar';
    btn.classList.toggle('in-cart', inCart);
  });
}

/* ─── Render Cart ─── */
function renderCart() {
  const list = document.querySelector('.cart-list');
  const emptyEl = document.querySelector('.cart-empty');
  const footer = document.querySelector('.cart-footer');
  const totalEl = document.querySelector('.cart-total-amount');
  if (!list) return;

  if (cartItems.size === 0) {
    list.innerHTML = '';
    emptyEl?.classList.remove('hidden');
    footer?.classList.add('hidden');
    return;
  }

  emptyEl?.classList.add('hidden');
  footer?.classList.remove('hidden');

  list.innerHTML = [...cartItems.entries()].map(([id, { product, qty }]) => `
    <li class="cart-item">
      <div class="cart-item-photo">
        <img src="${product.img}" alt="${product.name}" loading="lazy">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${product.name}</div>
        <div class="cart-item-size">${product.size}</div>
        <div class="cart-item-price">$${(parsePriceCOP(product.price) * qty).toLocaleString('de-DE')}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn qty-inc" data-id="${id}" aria-label="Aumentar cantidad de ${product.name}">+</button>
        <span class="qty-val" aria-live="polite">${qty}</span>
        <button class="qty-btn qty-dec" data-id="${id}" aria-label="Disminuir cantidad de ${product.name}">−</button>
        <button class="cart-remove" data-id="${id}" aria-label="Eliminar ${product.name} del carrito">✕</button>
      </div>
    </li>
  `).join('');

  if (totalEl) totalEl.textContent = `$${getTotal().toLocaleString('de-DE')}`;
}

/* ─── Update cart badge on FAB ─── */
function updateCartBadge() {
  const badge = document.querySelector('.cart-fab-badge');
  if (!badge) return;
  const count = getCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

/* ─── Cart Drawer ─── */
function initCartDrawer() {
  const fab = document.querySelector('.cart-fab');
  const drawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.cart-overlay');
  const closeBtn = document.querySelector('.cart-drawer-close');
  const checkoutBtn = document.querySelector('.cart-checkout-btn');
  if (!fab || !drawer) return;

  function openDrawer() {
    drawer.removeAttribute('hidden');
    requestAnimationFrame(() => drawer.classList.add('open'));
    overlay?.classList.add('visible');
    fab.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
    renderCart();
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay?.classList.remove('visible');
    fab.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    fab.focus();
    drawer.addEventListener('transitionend', e => {
      if (e.propertyName !== 'transform') return;
      drawer.setAttribute('hidden', '');
    }, { once: true });
  }

  fab.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  // qty and remove buttons (event delegation)
  drawer.addEventListener('click', e => {
    if (e.target.closest('.qty-inc')) updateQty(e.target.closest('.qty-inc').dataset.id, 1);
    if (e.target.closest('.qty-dec')) updateQty(e.target.closest('.qty-dec').dataset.id, -1);
    if (e.target.closest('.cart-remove')) removeFromCart(e.target.closest('.cart-remove').dataset.id);
  });

  // Escape key
  drawer.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeDrawer(); return; }
    if (e.key !== 'Tab' || !drawer.classList.contains('open')) return;
    const focusable = [...drawer.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // "Ir a pagar" → open checkout
  checkoutBtn?.addEventListener('click', () => { closeDrawer(); setTimeout(openCheckoutModal, 350); });
}

/* ─── Category Tabs ─── */
function initCategoryTabs() {
  const tabsContainer = document.querySelector('.features-tabs');
  const panelsContainer = document.querySelector('.features-panels');
  if (!tabsContainer || !panelsContainer) return;

  // Build tabs
  tabsContainer.innerHTML = categoryTabs.map((t, i) =>
    `<button class="feature-tab${i === 0 ? ' active' : ''}" data-tab="${i}">
      <img class="tab-icon" src="${t.img}" alt="${t.name}" width="24" height="24" loading="lazy">
      <span>${t.name}</span>
    </button>`
  ).join('');

  // Build panels
  panelsContainer.innerHTML = categoryTabs.map((t, i) => {
    const imgHtml = t.img
      ? `<img src="${t.img}" alt="${t.name}">`
      : `<div class="panel-emoji-placeholder">${t.icon}</div>`;
    return `<div class="features-panel${i === 0 ? ' active' : ''}" data-panel="${i}">
      <div class="panel-text">
        <div class="panel-category-label">Lo que producimos</div>
        <h3 class="panel-title">${t.name}</h3>
        <p class="panel-desc">${t.desc}</p>
        <a class="btn btn-primary" href="https://wa.me/573103811104" target="_blank" rel="noopener">
          Pedir por WhatsApp ↗
        </a>
      </div>
      <div class="panel-image">${imgHtml}</div>
    </div>`;
  }).join('');

  // Event listeners
  tabsContainer.addEventListener('click', e => {
    const btn = e.target.closest('.feature-tab');
    if (!btn) return;
    const idx = btn.dataset.tab;

    tabsContainer.querySelectorAll('.feature-tab').forEach(b => b.classList.remove('active'));
    panelsContainer.querySelectorAll('.features-panel').forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    panelsContainer.querySelector(`[data-panel="${idx}"]`).classList.add('active');
  });
}

/* ─── Checkout Modal ─── */
function goToCheckoutStep(step) {
  const modal = document.querySelector('.checkout-modal');
  if (!modal) return;
  modal.querySelectorAll('.checkout-panel').forEach(p => p.classList.remove('active'));
  const activePanel = modal.querySelector(`[data-panel="${step}"]`);
  activePanel?.classList.add('active');
  const panelTitle = activePanel?.querySelector('.checkout-panel-title');
  if (panelTitle) { panelTitle.setAttribute('tabindex', '-1'); panelTitle.focus(); }
  modal.querySelectorAll('.cs-dot').forEach(dot => {
    const n = parseInt(dot.dataset.step, 10);
    dot.classList.remove('active', 'done');
    if (n < step) dot.classList.add('done');
    else if (n === step) dot.classList.add('active');
  });
}

function openCheckoutModal() {
  const modal = document.querySelector('.checkout-modal');
  const overlay = document.querySelector('.checkout-overlay');
  if (!modal) return;

  const summaryList = modal.querySelector('.checkout-summary-list');
  const totalEl = modal.querySelector('.checkout-total-amount');
  if (summaryList) {
    summaryList.innerHTML = [...cartItems.values()].map(({ product, qty }) => `
      <li class="checkout-summary-item">
        <span>${qty}× ${product.name} (${product.size})</span>
        <strong>$${(parsePriceCOP(product.price) * qty).toLocaleString('de-DE')}</strong>
      </li>
    `).join('');
  }
  if (totalEl) totalEl.textContent = `$${getTotal().toLocaleString('de-DE')}`;

  goToCheckoutStep(1);
  modal.removeAttribute('hidden');
  requestAnimationFrame(() => modal.classList.add('open'));
  overlay?.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const modal = document.querySelector('.checkout-modal');
  const overlay = document.querySelector('.checkout-overlay');
  modal?.classList.remove('open');
  overlay?.classList.remove('visible');
  document.body.style.overflow = '';
  modal?.addEventListener('transitionend', e => {
    if (e.propertyName !== 'opacity') return;
    modal.setAttribute('hidden', '');
  }, { once: true });
  document.querySelector('.cart-fab')?.focus();
}

function validateDeliveryForm(form) {
  let valid = true;
  form.querySelectorAll('input[required]').forEach(input => {
    const errorEl = input.nextElementSibling;
    if (!input.value.trim()) {
      input.classList.add('error');
      if (errorEl) errorEl.textContent = 'Este campo es requerido.';
      valid = false;
    } else {
      input.classList.remove('error');
      if (errorEl) errorEl.textContent = '';
    }
  });
  if (!valid) form.querySelector('input.error')?.focus();
  return valid;
}

function initCheckoutModal() {
  const modal = document.querySelector('.checkout-modal');
  const overlay = document.querySelector('.checkout-overlay');
  if (!modal) return;

  modal.querySelector('.checkout-close')?.addEventListener('click', closeCheckoutModal);
  overlay?.addEventListener('click', closeCheckoutModal);

  modal.querySelector('.checkout-next-btn')?.addEventListener('click', () => goToCheckoutStep(2));

  modal.querySelectorAll('.payment-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const method = btn.dataset.method;
      if (method === 'bancolombia') {
        window.open(buildWhatsAppURL('Botón de Bancolombia'), '_blank', 'noopener');
        closeCheckoutModal();
        clearCart();
      } else if (method === 'otros') {
        window.open(buildWhatsAppURL('Otros medios de pago (Nequi, Daviplata, efectivo)'), '_blank', 'noopener');
        closeCheckoutModal();
        clearCart();
      } else if (method === 'contra-entrega') {
        goToCheckoutStep(3);
      }
    });
  });

  const form = modal.querySelector('#delivery-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateDeliveryForm(form)) return;
    const data = Object.fromEntries(new FormData(form));
    window.open(buildWhatsAppURL('Pago contra entrega', data), '_blank', 'noopener');
    form.reset();
    closeCheckoutModal();
    clearCart();
  });

  // Escape + focus trap
  modal.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeCheckoutModal(); return; }
    if (e.key !== 'Tab' || !modal.classList.contains('open')) return;
    const focusable = [...modal.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled && el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* ─── Mobile Nav ─── */
function initMobileNav() {
  const toggle = document.querySelector('.navbar-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!toggle || !mobileNav) return;

  const closeBtn = mobileNav.querySelector('.mobile-nav-close');

  function openNav() {
    mobileNav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    const spans = toggle.querySelectorAll('span');
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    // Move focus into dialog
    if (closeBtn) closeBtn.focus();
  }

  function closeNav() {
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    const spans = toggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
    toggle.focus();
  }

  toggle.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close button
  if (closeBtn) closeBtn.addEventListener('click', closeNav);

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });

  // Focus trap
  mobileNav.addEventListener('keydown', e => {
    if (!mobileNav.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeNav();
      return;
    }

    if (e.key !== 'Tab') return;

    const focusable = Array.from(
      mobileNav.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])')
    ).filter(el => !el.disabled);

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ─── Scroll Reveal ─── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}

/* ─── Hero Animated Headline ─── */
function initHeroAnimation() {
  const items = document.querySelectorAll('.hero-animated-text');
  if (!items.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let current = 0;
  items[0].classList.add('active');

  setInterval(() => {
    items[current].classList.remove('active');
    items[current].classList.add('exit');
    setTimeout(() => items[current].classList.remove('exit'), 500);

    current = (current + 1) % items.length;
    items[current].classList.add('active');
  }, 2800);
}

/* ─── Navbar scroll shadow ─── */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const update = () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 2px 20px rgba(28,28,26,0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ─── Stat counter animation ─── */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const raw = el.dataset.target;
        // If non-numeric (like "0"), just animate opacity
        const numMatch = raw.replace(/\./g, '').match(/\d+/);
        if (!numMatch) return;

        const end = parseInt(numMatch[0], 10);
        const suffix = raw.replace(/[\d.]/g, '').trim();
        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * end);
          // Format with dots for thousands
          el.textContent = current.toLocaleString('de-DE') + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = raw; // restore original formatted string
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => io.observe(el));
}

/* ─── Reviews ─── */
const reviewsData = [
  { handle: '@natalia.verde',  rating: 5, comment: 'La crema de maní es increíble — solo maní puro sin nada más. Llevo 3 meses pidiéndola cada semana y nunca ha fallado.' },
  { handle: '@saludable.co',   rating: 5, comment: 'El ghee llegó perfectamente empacado. Se nota la calidad artesanal en el sabor. Ya pedí el segundo frasco.' },
  { handle: '@maria.g.89',     rating: 5, comment: 'La miel en panal es de otro nivel. La entrega llegó en 2 días, muy bien empacada y en perfecto estado.' },
  { handle: '@danielfit_',     rating: 4, comment: 'La granola de matcha es deliciosa. Mezcla perfecta de sabores, sin azúcar añadida. Una de las mejores que he probado.' },
  { handle: '@elisa_natural',  rating: 5, comment: 'El chocolate al 85% es lo mejor que he probado. Delivery rapidísimo y la presentación es muy cuidada.' },
  { handle: '@co.foodie',      rating: 5, comment: 'El café de origen tiene unas notas increíbles de naranja y caramelo. Totalmente diferente al café de supermercado.' },
];

function renderStars(rating, size) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="review-star${i < rating ? ' filled' : ''}" aria-hidden="true">★</span>`
  ).join('');
}

function initReviews() {
  const track = document.getElementById('reviews-track');
  const dotsContainer = document.getElementById('reviews-dots');
  if (!track) return;

  let current = 0;

  function perPage() {
    return window.innerWidth >= 900 ? 3 : window.innerWidth >= 600 ? 2 : 1;
  }

  function buildCards() {
    track.innerHTML = reviewsData.map((r, i) => `
      <div class="review-card" data-index="${i}">
        <div class="review-stars" aria-label="Calificación: ${r.rating} de 5 estrellas">${renderStars(r.rating)}</div>
        <p class="review-text">${r.comment}</p>
        <div class="review-author">
          <span class="review-ig-icon" aria-hidden="true">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </span>
          <span class="review-handle">${r.handle}</span>
        </div>
      </div>
    `).join('');
  }

  function buildDots() {
    if (!dotsContainer) return;
    const pages = Math.ceil(reviewsData.length / perPage());
    dotsContainer.innerHTML = Array.from({ length: pages }, (_, i) =>
      `<button class="reviews-dot${i === 0 ? ' active' : ''}" data-page="${i}" aria-label="Página ${i + 1}"></button>`
    ).join('');
  }

  function showPage(page) {
    const pp = perPage();
    const pages = Math.ceil(reviewsData.length / pp);
    current = ((page % pages) + pages) % pages;
    const offset = current * pp;
    track.querySelectorAll('.review-card').forEach((card, i) => {
      card.classList.toggle('review-card--hidden', i < offset || i >= offset + pp);
    });
    dotsContainer?.querySelectorAll('.reviews-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  buildCards();
  buildDots();
  showPage(0);

  // Autoplay — se detiene permanentemente cuando el usuario hace clic en una tarjeta
  let autoTimer = setInterval(() => showPage(current + 1), 4000);

  function stopAutoplay() {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  track.addEventListener('click', e => {
    if (e.target.closest('.review-card') && autoTimer) stopAutoplay();
  });

  document.getElementById('reviews-prev')?.addEventListener('click', () => showPage(current - 1));
  document.getElementById('reviews-next')?.addEventListener('click', () => showPage(current + 1));
  dotsContainer?.addEventListener('click', e => {
    const dot = e.target.closest('.reviews-dot');
    if (dot) showPage(parseInt(dot.dataset.page, 10));
  });

  let debounceTimer;
  window.addEventListener('resize', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => { buildDots(); showPage(0); }, 200);
  }, { passive: true });
}

function initReviewModal() {
  const modal = document.getElementById('review-modal');
  const overlay = document.getElementById('review-overlay');
  const openBtn = document.getElementById('leave-review-btn');
  const closeBtn = document.getElementById('review-modal-close');
  const form = document.getElementById('review-form');
  const starPicker = document.getElementById('star-picker');
  const toast = document.getElementById('review-toast');
  if (!modal) return;

  let selectedRating = 0;

  function openModal() {
    modal.removeAttribute('hidden');
    requestAnimationFrame(() => modal.classList.add('open'));
    overlay?.classList.add('visible');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('review-contact')?.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('open');
    overlay?.classList.remove('visible');
    document.body.style.overflow = '';
    modal.addEventListener('transitionend', e => {
      if (e.propertyName !== 'opacity') return;
      modal.setAttribute('hidden', '');
    }, { once: true });
    openBtn?.focus();
  }

  openBtn?.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', closeModal);

  starPicker?.addEventListener('click', e => {
    const btn = e.target.closest('.star-btn');
    if (!btn) return;
    selectedRating = parseInt(btn.dataset.value, 10);
    starPicker.querySelectorAll('.star-btn').forEach((b, i) => b.classList.toggle('selected', i < selectedRating));
    document.getElementById('star-error').textContent = '';
  });

  starPicker?.addEventListener('mouseover', e => {
    const btn = e.target.closest('.star-btn');
    if (!btn) return;
    const val = parseInt(btn.dataset.value, 10);
    starPicker.querySelectorAll('.star-btn').forEach((b, i) => b.classList.toggle('hovered', i < val));
  });
  starPicker?.addEventListener('mouseleave', () => {
    starPicker.querySelectorAll('.star-btn').forEach(b => b.classList.remove('hovered'));
  });

  form?.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    const contactInput = document.getElementById('review-contact');
    const textInput = document.getElementById('review-text');
    const starError = document.getElementById('star-error');

    [contactInput, textInput].forEach(input => {
      const err = input.nextElementSibling;
      if (!input.value.trim()) {
        input.classList.add('error');
        if (err) err.textContent = 'Este campo es requerido.';
        valid = false;
      } else {
        input.classList.remove('error');
        if (err) err.textContent = '';
      }
    });

    if (!selectedRating) {
      starError.textContent = 'Por favor selecciona una calificación.';
      valid = false;
    } else {
      starError.textContent = '';
    }

    if (!valid) { form.querySelector('.error')?.focus(); return; }

    form.reset();
    selectedRating = 0;
    starPicker?.querySelectorAll('.star-btn').forEach(b => b.classList.remove('selected'));
    closeModal();

    if (toast) {
      toast.removeAttribute('hidden');
      setTimeout(() => toast.setAttribute('hidden', ''), 4500);
    }
  });

  modal.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key !== 'Tab' || !modal.classList.contains('open')) return;
    const focusable = [...modal.querySelectorAll('button, input, textarea, [tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled && el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}
