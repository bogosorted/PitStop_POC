/**
 * PitStop - Modern & Comfy Canteen Management Application (CESAR School)
 * Conceptual Integrity:
 * - English code identifiers, clean Portuguese UI.
 * - Real bakery photography, zero emojis, tree navigation, strict order flow.
 * - In-app alerts (no fourth-wall breakage), cumulative delay metrics,
 *   product search & details with ingredients, comfy modern aesthetic.
 */

// --- Clean SVG Icons Helper (Zero Emojis) ---
const ICONS = {
  bell: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  bellRing: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  alertCircle: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  box: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  tv: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  layout: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
  shoppingBag: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
};

// --- Web Audio Synthesizer (Pure Chimes) ---
class SoundNotifier {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  _initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  play(type = 'newOrder') {
    if (!this.enabled) return;
    try {
      this._initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';

      if (type === 'newOrder') {
        osc.frequency.setValueAtTime(587.33, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'ready') {
        osc.frequency.setValueAtTime(659.25, now);
        osc.frequency.setValueAtTime(1046.50, now + 0.12);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === 'call') {
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc.frequency.setValueAtTime(783.99, now);
        osc.frequency.setValueAtTime(1046.50, now + 0.14);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(783.99, now + 0.22);
        osc2.frequency.setValueAtTime(1046.50, now + 0.36);
        gain2.gain.setValueAtTime(0.10, now + 0.22);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.5);
        osc2.start(now + 0.22);
        osc2.stop(now + 0.7);
      } else if (type === 'warning') {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.linearRampToValueAtTime(370, now + 0.2);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch (_) {}
  }
}

const sounds = new SoundNotifier();

// --- Application State ---
const state = {
  viewMode: 'split', // 'split' | 'student' | 'staff' | 'staff-mobile' | 'tv'
  studentTab: 'order', // 'order' | 'my-orders' | 'notifications' | 'projections'
  studentOrderStep: 'setup', // 'setup' | 'menu' | 'checkout' (strictly linear!)
  staffSection: 'queue', // 'queue' | 'metrics' | 'inventory'
  staffMobileTab: 'queue', // 'queue' | 'preparing' | 'ready' | 'inventory'
  selectedCategory: 'Todos',
  searchQuery: '',
  cart: {}, // { [productId]: quantity }
  studentName: '', // Starts empty — user enters their own name
  selectedLocation: null, // Starts as null — user must select
  selectedTimeSlot: null, // Starts as null — user must select
  projectionLocation: 'APOLO', // 'APOLO' | 'BRUM' | 'TIRADENTES' for Student Projections Tab
  staffMetricsLocation: 'ALL', // 'ALL' | 'APOLO' | 'BRUM' | 'TIRADENTES' for Staff Forecast Chart
  selectedPayment: 'PIX', // 'PIX' | 'BALCAO'
  studentOrderIds: [], // All active order IDs placed by this student
  currentOrder: null, // STRICT: starts clean as null! Only set when student orders!
  selectedProductModal: null, // Product object for ingredients modal
  showNotificationsDrawer: false,
  studentAlert: null, // In-app notification for student { title, text, type }
  staffAlert: null, // In-app notification for staff { title, text, type }
  notifications: [
    {
      id: 1,
      title: 'Bem-vindo ao PitStop CESAR',
      text: 'Cardápio renovado com bolos artesanais, salgados quentes e bebidas geladas.',
      time: '15:30',
      read: true,
      type: 'info'
    },
    {
      id: 2,
      title: 'Horário do Intervalo',
      text: 'Agende seu lanche com antecedência e retire sem fila no balcão.',
      time: '15:35',
      read: true,
      type: 'tip'
    }
  ],
  studentLoading: null,
  staffLoading: null,
  tvClock: '15:45:00',
  data: null
};

// --- In-App Alert Helpers (Strictly Scoped: Student alerts only update Student DOM, Staff alerts only update Staff DOM) ---
function showStudentAlert(title, text, type = 'info') {
  state.studentAlert = { title, text, type };
  renderStudentOnly();
  setTimeout(() => {
    if (state.studentAlert && state.studentAlert.title === title) {
      state.studentAlert = null;
      renderStudentOnly();
    }
  }, 4000);
}

function showStaffAlert(title, text, type = 'info') {
  state.staffAlert = { title, text, type };
  renderStaffOnly();
  setTimeout(() => {
    if (state.staffAlert && state.staffAlert.title === title) {
      state.staffAlert = null;
      renderStaffOnly();
    }
  }, 4000);
}

function pushStudentNotification(title, text, type = 'order') {
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  state.notifications.unshift({
    id: Date.now() + Math.random(),
    title,
    text,
    time: timeStr,
    read: false,
    type
  });
}

function getUnreadNotificationsCount() {
  return state.notifications.filter(n => !n.read).length;
}

function markAllNotificationsRead() {
  state.notifications.forEach(n => n.read = true);
  renderStudentOnly();
}

// --- Navigation Guards (Zero reload/flicker when clicking current tab; strictly scoped to own panel) ---
function switchStudentTab(tab) {
  if (state.studentTab === tab) return;
  state.studentTab = tab;
  renderStudentOnly();
}

function switchViewMode(mode) {
  if (state.viewMode === mode) return;
  state.viewMode = mode;
  render();
}

function switchStaffSection(sec) {
  if (state.staffSection === sec) return;
  state.staffSection = sec;
  renderStaffOnly();
}

function switchStaffMobileTab(tab) {
  if (state.staffMobileTab === tab) return;
  state.staffMobileTab = tab;
  renderStaffOnly();
}

// --- Student In-Progress Orders Lookup ---
function getStudentActiveOrders() {
  if (!state.data || !state.data.dashboard || !state.data.dashboard.orders) return [];
  const { orders } = state.data.dashboard;
  const currentName = (state.studentName || '').toLowerCase().trim();

  return orders.filter(o => {
    const isMine = (state.studentOrderIds && state.studentOrderIds.includes(o.id)) ||
      (currentName && o.student_name && o.student_name.toLowerCase().trim() === currentName);
    const inProgress = o.status === 'QUEUED' || o.status === 'PREPARING' || o.status === 'READY';
    return isMine && inProgress;
  });
}

// --- In-App Scoped Loading Simulation Helpers (Strictly isolated to their own panel) ---
async function withStudentLoading(message, asyncFn) {
  state.studentLoading = message;
  updateStudentLoadingOverlay();
  try {
    const minDelay = new Promise(resolve => setTimeout(resolve, 340));
    const [result] = await Promise.all([asyncFn(), minDelay]);
    return result;
  } finally {
    state.studentLoading = null;
    render();
  }
}

async function withStaffLoading(message, asyncFn) {
  state.staffLoading = message;
  updateStaffLoadingOverlay();
  try {
    const minDelay = new Promise(resolve => setTimeout(resolve, 340));
    const [result] = await Promise.all([asyncFn(), minDelay]);
    return result;
  } finally {
    state.staffLoading = null;
    render();
  }
}

// --- Data Fetching ---
async function fetchServerState() {
  try {
    const res = await fetch('/api/state').then(r => r.json());
    state.data = res;
    // NOTE: state.currentOrder is NOT auto-set to Camila Rocha's order!
    // It remains null until the student places their own order.
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

// --- Live Clock Ticker ---
setInterval(() => {
  const d = new Date();
  state.tvClock = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
  if (state.viewMode === 'tv') {
    const el = document.getElementById('tv-live-clock');
    if (el) el.textContent = state.tvClock;
  }
}, 1000);

// --- Realtime Poller ---
async function startPoller() {
  setInterval(async () => {
    if (!state.data) return;
    try {
      const fresh = await fetch('/api/state').then(r => r.json());
      const oldOrders = state.data.dashboard.orders;
      const oldIds = new Set(oldOrders.map(o => o.id));
      const hasNew = fresh.dashboard.orders.some(o => !oldIds.has(o.id));

      const prevActiveDelayed = state.data.dashboard.summary.active_delayed_count || 0;
      const currActiveDelayed = fresh.dashboard.summary.active_delayed_count || 0;

      // Track active order updates for student across all in-progress tickets
      const myActiveOrders = getStudentActiveOrders();
      for (const myOrder of myActiveOrders) {
        const prevOrder = state.data.dashboard.orders.find(o => o.id === myOrder.id);
        const updated = fresh.dashboard.orders.find(o => o.id === myOrder.id);
        if (updated) {
          if (updated.status === 'READY' && (!prevOrder || prevOrder.status !== 'READY')) {
            sounds.play('ready');
            showStudentAlert('Lanche Pronto!', `Pedido #${updated.ticket_code} PRONTO! Retire no balcão ${updated.location_name}`);
            pushStudentNotification(
              `Pedido #${updated.ticket_code} PRONTO!`,
              `Seu lanche acabou de sair da cozinha. Retire no balcão ${updated.location_name}.`,
              'ready'
            );
          }
          if (prevOrder && (updated.call_count || 0) > (prevOrder.call_count || 0)) {
            sounds.play('call');
            showStudentAlert(`Chamada no Balcão!`, `Pedido #${updated.ticket_code} sendo chamado no balcão ${updated.location_name}!`, 'call');
            pushStudentNotification(
              `Chamada no Balcão (#${updated.ticket_code})`,
              `A cantina está te chamando para retirar seu lanche no balcão ${updated.location_name}.`,
              'call'
            );
          }
        }
      }

      state.data = fresh;

      if (hasNew) {
        sounds.play('newOrder');
        showStaffAlert('Novo Pedido', 'Um lanche acabou de ser agendado na fila.');
      } else if (currActiveDelayed > prevActiveDelayed) {
        sounds.play('warning');
        showStaffAlert('Alerta de Atraso', 'Um pedido excedeu o limite de SLA.', 'warning');
      }

      const activeEl = document.activeElement;
      const isInput = activeEl && ['INPUT', 'SELECT', 'TEXTAREA'].includes(activeEl.tagName);
      if (!isInput && !state.studentLoading && !state.staffLoading && !state.selectedProductModal) {
        render();
      }
    } catch (_) {}
  }, 3500);
}

// --- Cart Helpers ---
function updateCart(productId, delta) {
  const product = state.data.catalog.find(p => p.id === productId);
  if (!product) return;
  const current = state.cart[productId] || 0;
  const next = current + delta;

  if (next <= 0) {
    delete state.cart[productId];
  } else if (next <= product.stock) {
    state.cart[productId] = next;
  } else {
    showStudentAlert('Estoque insuficiente', `Restam apenas ${product.stock} un. deste item.`);
    return;
  }
  // If user removed the last item while on checkout step, smoothly return to menu
  if (Object.keys(state.cart).length === 0 && state.studentOrderStep === 'checkout') {
    state.studentOrderStep = 'menu';
  }
  renderStudentOnly();
}

function clearCart() {
  state.cart = {};
  renderStudentOnly();
}

function getCartMetrics() {
  let subtotal = 0;
  let count = 0;
  let maxPrep = 2;
  if (!state.data) return { subtotal, count, maxPrep, discount: 0, total: 0 };

  Object.entries(state.cart).forEach(([pid, qty]) => {
    const item = state.data.catalog.find(p => p.id === Number(pid));
    if (item) {
      subtotal += item.price * qty;
      count += qty;
      maxPrep = Math.max(maxPrep, item.prep_time_min);
    }
  });

  let discountRate = 0;
  if (state.selectedPayment === 'PITSTOP_WALLET') discountRate = 0.05;
  if (state.selectedPayment === 'RESIDENCY_VOUCHER') discountRate = 0.12;

  const discount = subtotal * discountRate;
  const total = Math.max(0, subtotal - discount);

  return { subtotal, count, maxPrep, discount, total };
}

// --- Dynamic Estimation Calculation for Checkout ---
function calculateEstimatedDelivery() {
  if (!state.data) return { queueOrdersCount: 0, waitMin: 4, readyTimeStr: '15:49', isSafeForBreak: true };

  const { orders } = state.data.dashboard;
  const targetLocation = state.selectedLocation || 'APOLO';
  const activeOrdersInLocation = orders.filter(
    o => (o.status === 'QUEUED' || o.status === 'PREPARING') && o.pickup_location === targetLocation
  );

  const cartMetrics = getCartMetrics();
  const queueOrdersCount = activeOrdersInLocation.length;
  const waitMin = Math.max(3, Math.ceil(queueOrdersCount * 1.5) + cartMetrics.maxPrep);

  const now = new Date();
  const readyDate = new Date(now.getTime() + waitMin * 60000);
  const readyTimeStr = `${String(readyDate.getHours()).padStart(2, '0')}:${String(readyDate.getMinutes()).padStart(2, '0')}`;
  const isSafeForBreak = waitMin <= 12;

  return { queueOrdersCount, waitMin, readyTimeStr, isSafeForBreak };
}

// --- Order Submission ---
async function handleOrderSubmit() {
  const items = Object.entries(state.cart).map(([pid, qty]) => ({
    product_id: Number(pid),
    quantity: Number(qty)
  }));

  if (items.length === 0) {
    showStudentAlert('Sacola vazia', 'Adicione pelo menos 1 item para agendar.');
    return;
  }

  const nameInput = document.getElementById('student-name-input');
  if (nameInput && nameInput.value.trim()) {
    state.studentName = nameInput.value.trim();
  }

  const payload = {
    student_name: state.studentName,
    pickup_location: state.selectedLocation,
    time_slot: state.selectedTimeSlot,
    payment_method: state.selectedPayment,
    items
  };

  await withStudentLoading('Confirmando e agendando seu lanche...', async () => {
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      if (!res.ok) {
        showStudentAlert('Falha no agendamento', result.error || 'Erro ao processar pedido.');
        return;
      }
      state.cart = {};
      state.data = result.state;
      if (!state.studentOrderIds) state.studentOrderIds = [];
      state.studentOrderIds.push(result.order.id);
      state.currentOrder = result.order;
      state.studentTab = 'my-orders';
      state.studentOrderStep = 'setup';
      sounds.play('newOrder');
      pushStudentNotification(
        `Pedido #${result.order.ticket_code} Agendado!`,
        `Seu pedido foi enviado para a cozinha no balcão ${result.order.location_name}.`,
        'queued'
      );
      showStudentAlert(`Pedido agendado (#${result.order.ticket_code})`, `Retirada às ${result.order.time_slot} no balcão ${result.order.location_name}`);
    } catch (err) {
      showStudentAlert('Erro de conexão', 'Não foi possível enviar o pedido.');
    }
  });
}

// --- Staff Action Handlers ---
async function handleAdvanceOrder(orderId) {
  await withStaffLoading('Atualizando etapa do pedido...', async () => {
    try {
      const res = await fetch('/api/orders/advance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order_id: orderId })
      });
      const result = await res.json();
      if (!res.ok) {
        showStaffAlert('Aviso', result.error || 'Erro ao atualizar pedido');
        return;
      }
      state.data = result.state;
      if (result.order.status === 'READY') {
        sounds.play('ready');
        showStaffAlert(`Pedido #${result.order.ticket_code} PRONTO`, `Aviso enviado ao aluno para retirada no balcão.`);
        if (state.currentOrder && state.currentOrder.id === orderId) {
          state.currentOrder = result.order;
          pushStudentNotification(
            `Pedido #${result.order.ticket_code} PRONTO!`,
            `Seu lanche acabou de sair. Retire no balcão ${result.order.location_name}.`,
            'ready'
          );
        }
      } else if (result.order.status === 'DELIVERED') {
        sounds.play('check');
        showStaffAlert(`Pedido #${result.order.ticket_code} ENTREGUE`, `Lanche entregue com sucesso.`);
        if (state.currentOrder && state.currentOrder.id === orderId) {
          state.currentOrder = result.order;
          pushStudentNotification(
            `Pedido #${result.order.ticket_code} Entregue`,
            `Lanche retirado no balcão ${result.order.location_name}. Bom lanche!`,
            'delivered'
          );
        }
      } else {
        showStaffAlert(`Em Preparo`, `Pedido #${result.order.ticket_code} iniciado na cozinha.`);
      }
    } catch (_) {}
  });
}

// --- Reavisar Aluno no Balcão ---
async function handleReNotifyOrder(orderId) {
  await withStaffLoading('Rechamando aluno no balcão...', async () => {
    try {
      const res = await fetch('/api/orders/re-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order_id: orderId })
      });
      const result = await res.json();
      if (!res.ok) {
        showStaffAlert('Erro', result.error || 'Falha ao rechamar aluno.');
        return;
      }
      state.data = result.state;
      sounds.play('call');
      showStaffAlert(`Aluno rechamado (#${result.order.ticket_code})`, `Chamada sonora e notificação enviadas para o balcão ${result.order.location_name}.`);

      if (state.currentOrder && state.currentOrder.id === orderId) {
        state.currentOrder = result.order;
        pushStudentNotification(
          `Chamada no Balcão (#${result.order.ticket_code})`,
          `A cantina está chamando pelo seu pedido no balcão ${result.order.location_name}. Favor retirar seu lanche!`,
          'call'
        );
      }
    } catch (_) {
      showStaffAlert('Erro', 'Não foi possível enviar chamada ao balcão.');
    }
  });
}

// --- Requisitar Estoque ---
async function handleRequestStock(productId, delta = 10) {
  const product = state.data.catalog.find(p => p.id === productId);
  if (!product) return;
  const newStock = product.stock + delta;

  await withStaffLoading(`Requisitando estoque para ${product.name}...`, async () => {
    try {
      const res = await fetch('/api/products/stock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: productId, new_stock: newStock })
      });
      const result = await res.json();
      if (res.ok) {
        state.data = result.state;
        sounds.play('newOrder');
        showStaffAlert('Estoque requisitado', `+${delta} un. adicionadas a ${result.product.name} (Total: ${result.product.stock}).`);
      }
    } catch (_) {}
  });
}

async function handleUpdateStock(productId, newStock) {
  try {
    const res = await fetch('/api/products/stock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_id: productId, new_stock: Math.max(0, newStock) })
    });
    const result = await res.json();
    if (res.ok) {
      state.data = result.state;
      showStaffAlert('Estoque atualizado', `${result.product.name}: ${result.product.stock} un.`);
      render();
    }
  } catch (_) {}
}

async function handleCreateProduct(e) {
  e.preventDefault();
  const form = e.target;
  const payload = {
    name: form.name.value.trim(),
    category: form.category.value,
    price: parseFloat(form.price.value || '8.50'),
    prep_time_min: parseInt(form.prep_time.value || '2', 10),
    stock: parseInt(form.stock.value || '15', 10),
    image_url: form.image_url.value || '/static/images/coxinha.jpg',
    badge: form.badge.value.trim() || 'Artesanal',
    description: form.description.value.trim() || 'Feito artesanalmente na cozinha da cantina.',
    ingredients: form.ingredients.value.trim() || 'Ingredientes selecionados frescos.'
  };

  await withStaffLoading('Cadastrando novo produto...', async () => {
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      if (res.ok) {
        state.data = result.state;
        form.reset();
        sounds.play('newOrder');
        showStaffAlert('Produto cadastrado', `${result.product.name} adicionado ao cardápio.`);
      }
    } catch (_) {}
  });
}

async function handleResetData() {
  await withStaffLoading('Restaurando dados...', async () => {
    const res = await fetch('/api/reset', { method: 'POST' });
    if (res.ok) {
      const data = await res.json();
      state.cart = {};
      state.data = data.state;
      state.studentName = '';
      state.selectedLocation = null;
      state.selectedTimeSlot = null;
      state.studentOrderIds = [];
      state.studentTab = 'order';
      state.studentOrderStep = 'setup';
      state.currentOrder = null;
      state.selectedProductModal = null;
      showStudentAlert('Dados restaurados', 'Cardápio padrão carregado.');
    }
  });
}

// ============================================================================
// --- UI RENDERING (Clean, Modern, Comfy, Zero Brutalism) ---
// ============================================================================

// --- Brand Typography Wordmark (where the "O" is the PitStop Stopwatch) ---
function renderPitStopBrand({ size = 'base', light = false, extra = '' } = {}) {
  const sizeMap = {
    xs: { text: 'text-xs' },
    sm: { text: 'text-sm' },
    base: { text: 'text-base sm:text-lg' },
    lg: { text: 'text-lg sm:text-xl' },
    '2xl': { text: 'text-2xl sm:text-3xl' },
    '3xl': { text: 'text-3xl sm:text-4xl' }
  };
  const cfg = sizeMap[size] || sizeMap.base;
  const textColor = light ? 'text-neutral-900' : 'text-white';
  const gradClass = light ? 'text-amber-gradient-dark' : 'text-amber-gradient';
  const dotFill = light ? '#0A0A0A' : '#FFFFFF';
  const gradId = light ? 'ps-grad-light' : 'ps-grad-dark';
  const stop1 = light ? '#F59E0B' : '#FDE047';
  const stop2 = light ? '#D97706' : '#FBBF24';
  const stop3 = light ? '#B45309' : '#F59E0B';

  const inlineStopwatchO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="12.75 8 38.5 47.25" fill="none" aria-label="o" class="inline-block select-none pointer-events-none shrink-0" style="width: 0.58em; height: 0.68em; margin-left: 0.115em; margin-right: -0.075em; transform: translateY(0.02em) skewX(-11deg);"><defs><linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${stop1}"/><stop offset="50%" stop-color="${stop2}"/><stop offset="100%" stop-color="${stop3}"/></linearGradient></defs><rect x="27" y="8" width="10" height="5" rx="2.5" fill="url(#${gradId})"/><rect x="43.5" y="15" width="6" height="4" rx="2" transform="rotate(45 46.5 17)" fill="${dotFill}"/><circle cx="32" cy="36" r="17" stroke="url(#${gradId})" stroke-width="4.5"/><path d="M32 36V24a12 12 0 0 1 12 12H32Z" fill="url(#${gradId})"/><circle cx="32" cy="36" r="2.5" fill="${dotFill}"/></svg>`;

  return `
    <div class="inline-flex items-baseline gap-1.5 select-none">
      <span class="font-extrabold tracking-tight ${cfg.text} ${textColor} inline-flex items-baseline leading-none">
        <span>Pit</span><span class="italic inline-flex items-baseline ml-[0.015em] pr-[0.04em]"><span class="${gradClass}">St</span>${inlineStopwatchO}<span class="${gradClass}">p</span></span>
      </span>
      ${extra ? `<span class="font-bold ${cfg.text} ${textColor} leading-none">${extra}</span>` : ''}
    </div>
  `;
}

// Top Minimal View Navigation
function renderTopBar() {
  return `
    <nav class="bg-neutral-900/95 backdrop-blur-md text-neutral-300 py-2.5 px-4 border-b border-neutral-800">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <!-- Brand Identity with Stopwatch as "O" -->
        <div class="flex items-center gap-2.5">
          <img src="/static/logo.svg" alt="PitStop" class="w-6 h-6 rounded-lg shadow-sm object-contain" />
          ${renderPitStopBrand({ size: 'sm' })}
        </div>

        <!-- View Switcher -->
        <div class="flex items-center bg-neutral-800/90 p-0.5 rounded-xl text-xs flex-wrap gap-1">
          <button onclick="switchViewMode('split');" 
            class="px-3 py-1 rounded-lg transition flex items-center gap-1.5 ${state.viewMode === 'split' ? 'bg-white text-neutral-900 font-bold shadow-sm' : 'text-neutral-400 hover:text-white'}">
            ${ICONS.layout}
            <span>Lado a Lado</span>
          </button>
          <button onclick="switchViewMode('student');" 
            class="px-3 py-1 rounded-lg transition flex items-center gap-1.5 ${state.viewMode === 'student' ? 'bg-white text-neutral-900 font-bold shadow-sm' : 'text-neutral-400 hover:text-white'}">
            ${ICONS.shoppingBag}
            <span>App Aluno</span>
          </button>
          <button onclick="switchViewMode('staff');" 
            class="px-3 py-1 rounded-lg transition flex items-center gap-1.5 ${state.viewMode === 'staff' ? 'bg-white text-neutral-900 font-bold shadow-sm' : 'text-neutral-400 hover:text-white'}">
            ${ICONS.box}
            <span>Painel Cantina</span>
          </button>
          <button onclick="switchViewMode('staff-mobile');" 
            class="px-3 py-1 rounded-lg transition flex items-center gap-1.5 ${state.viewMode === 'staff-mobile' ? 'bg-white text-neutral-900 font-bold shadow-sm' : 'text-neutral-400 hover:text-white'}">
            ${ICONS.smartphone}
            <span>Celular Balcão</span>
          </button>
          <button onclick="switchViewMode('tv');" 
            class="px-3 py-1 rounded-lg transition flex items-center gap-1.5 ${state.viewMode === 'tv' ? 'bg-brand text-neutral-950 font-bold shadow-sm' : 'text-amber-400 hover:text-white'}">
            ${ICONS.tv}
            <span>Modo TV</span>
          </button>
        </div>

        <!-- Audio & Reset Controls -->
        <div class="flex items-center gap-2">
          <button onclick="sounds.enabled = !sounds.enabled; showStaffAlert(sounds.enabled ? 'Sons ativados' : 'Sons silenciados'); render();"
            class="px-2.5 py-1 rounded-lg border border-neutral-700 text-neutral-400 hover:text-white text-[11px] transition">
            ${sounds.enabled ? 'Som Ativo' : 'Mudo'}
          </button>
          <button onclick="handleResetData();" 
            class="px-2.5 py-1 rounded-lg border border-neutral-700 text-neutral-400 hover:text-white text-[11px] transition">
            Restaurar
          </button>
        </div>
      </div>
    </nav>
  `;
}

// Student Header with Sleek Dark Style & 4 Tabs (Pedir, Pedidos, Avisos, Horários)
function renderStudentHeader() {
  const { summary } = state.data.dashboard;
  const unreadCount = getUnreadNotificationsCount();
  const myActiveOrders = getStudentActiveOrders();
  const hasReadyOrder = myActiveOrders.some(o => o.status === 'READY');
  const shouldAnimateAlert = state.studentAlert && state._animatedStudentAlertRef !== state.studentAlert;
  state._animatedStudentAlertRef = state.studentAlert || null;

  return `
    <div class="p-4 sm:p-5 border-b border-neutral-800 bg-neutral-900 text-white">
      <div class="flex items-center justify-between gap-3 mb-3">
        <div class="flex items-center gap-2.5">
          <img src="/static/logo.svg" alt="PitStop" class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-neutral-800 shadow-sm object-contain shrink-0" />
          <div>
            <div class="flex items-center gap-1.5">
              ${renderPitStopBrand({ size: 'base' })}
            </div>
            <p class="text-[11px] text-neutral-400">Cantina rápida sem fila</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div class="text-right">
            <p class="text-[9px] font-mono uppercase text-neutral-400 font-semibold leading-none">Fila Média</p>
            <p class="text-xs font-bold text-amber-400 mt-0.5 font-mono">~${summary.estimated_wait_min}m</p>
          </div>
        </div>
      </div>

      <!-- In-App Sliding Down Notification Banner (Aluno Chamado / Alertas) -->
      ${state.studentAlert ? `
        <div class="mb-3 ${shouldAnimateAlert ? 'slide-down-alert' : ''}">
          <div class="p-3.5 rounded-2xl bg-amber-400 text-neutral-950 text-xs font-bold flex items-center justify-between shadow-xl border-2 border-neutral-950">
            <div class="flex items-center gap-2.5">
              <span class="p-1.5 bg-neutral-950 text-amber-400 rounded-xl animate-bounce flex-shrink-0">
                ${ICONS.bellRing}
              </span>
              <div>
                <p class="font-black uppercase tracking-wider leading-tight">${state.studentAlert.title}</p>
                ${state.studentAlert.text ? `<p class="text-[11px] text-neutral-900 font-semibold mt-0.5 leading-snug">${state.studentAlert.text}</p>` : ''}
              </div>
            </div>
            <button onclick="state.studentAlert = null; renderStudentOnly();" class="p-1 text-neutral-950 hover:bg-black/10 rounded-lg flex-shrink-0">${ICONS.x}</button>
          </div>
        </div>
      ` : ''}

      <!-- 4 Sleek Dark Tabs: Pedir, Pedidos, Avisos, Horários -->
      <nav class="flex items-center bg-neutral-800/90 p-1 rounded-2xl text-xs font-semibold border border-neutral-700/60">
        <button onclick="switchStudentTab('order');"
          class="flex-1 py-2 rounded-xl transition text-center flex items-center justify-center gap-1.5 ${
            state.studentTab === 'order'
              ? 'bg-white text-neutral-950 font-bold shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }">
          ${ICONS.shoppingBag}
          <span>Pedir</span>
        </button>

        <button onclick="switchStudentTab('my-orders');"
          class="flex-1 py-2 rounded-xl transition text-center flex items-center justify-center gap-1.5 ${
            state.studentTab === 'my-orders'
              ? 'bg-white text-neutral-950 font-bold shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }">
          ${ICONS.clock}
          <span>Pedidos</span>
          ${hasReadyOrder ? `
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          ` : myActiveOrders.length > 0 ? `
            <span class="px-1.5 py-0.2 rounded-md bg-amber-400 text-neutral-950 font-mono text-[9px] font-bold">${myActiveOrders.length}</span>
          ` : ''}
        </button>

        <button onclick="switchStudentTab('notifications');"
          class="flex-1 py-2 rounded-xl transition text-center flex items-center justify-center gap-1.5 ${
            state.studentTab === 'notifications'
              ? 'bg-white text-neutral-950 font-bold shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }">
          ${unreadCount > 0 ? ICONS.bellRing : ICONS.bell}
          <span>Avisos</span>
          ${unreadCount > 0 ? `
            <span class="px-1.5 py-0.2 rounded-full bg-amber-400 text-neutral-950 font-mono text-[10px] font-bold">
              ${unreadCount}
            </span>
          ` : ''}
        </button>

        <button onclick="switchStudentTab('projections');"
          class="flex-1 py-2 rounded-xl transition text-center flex items-center justify-center gap-1.5 ${
            state.studentTab === 'projections'
              ? 'bg-white text-neutral-950 font-bold shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          <span>Horários</span>
        </button>
      </nav>
    </div>
  `;
}

// Instantaneous Location, Time Slot & Name Selection (Zero loading, Toggleable, Scoped strictly to Student)
function selectStudentLocation(code) {
  const nameInput = document.getElementById('start-student-name-input');
  if (nameInput) {
    state.studentName = nameInput.value;
  }
  state.selectedLocation = (state.selectedLocation === code) ? null : code;
  renderStudentOnly();
}

function selectStudentTimeSlot(slot) {
  const nameInput = document.getElementById('start-student-name-input');
  if (nameInput) {
    state.studentName = nameInput.value;
  }
  state.selectedTimeSlot = (state.selectedTimeSlot === slot) ? null : slot;
  renderStudentOnly();
}

function handleStudentNameInput(value) {
  state.studentName = value;
  const ctaMount = document.getElementById('student-setup-cta-mount');
  if (ctaMount) {
    ctaMount.innerHTML = renderStudentSetupCta();
  }
}

function handleStudentSearchInput(value) {
  state.searchQuery = value;
  const gridMount = document.getElementById('student-products-grid-mount');
  const clearBtn = document.getElementById('student-search-clear-btn');
  if (clearBtn) {
    clearBtn.style.display = value ? 'flex' : 'none';
  }
  if (gridMount) {
    gridMount.innerHTML = renderStudentProductsGrid();
  }
}

function clearStudentSearch() {
  state.searchQuery = '';
  const searchInput = document.getElementById('student-search-input');
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  handleStudentSearchInput('');
}

function openProductModal(productId) {
  state.selectedProductModal = state.data.catalog.find(p => p.id === productId) || null;
  updateStudentModalMount();
}

function closeProductModal() {
  state.selectedProductModal = null;
  state._modalAnimatedProductId = null;
  updateStudentModalMount();
}

// 3-Step Visual Funnel Progress Bar for Student Order Flow
function renderStudentOrderStepper() {
  const steps = [
    { key: 'setup', num: '1', label: 'Retirada' },
    { key: 'menu', num: '2', label: 'Cardápio' },
    { key: 'checkout', num: '3', label: 'Confirmação' }
  ];
  const orderIndex = { setup: 0, menu: 1, checkout: 2 }[state.studentOrderStep] || 0;

  return `
    <div class="px-5 pt-3.5 pb-2 border-b border-neutral-100 bg-neutral-50/50 flex items-center justify-between gap-2 text-[11px]">
      ${steps.map((s, idx) => {
        const isDone = idx < orderIndex;
        const isCurrent = idx === orderIndex;
        const canClickBack = isDone;
        return `
          <button ${canClickBack ? `onclick="state.studentOrderStep = '${s.key}'; renderStudentOnly();"` : 'disabled'}
            class="flex items-center gap-1.5 ${canClickBack ? 'cursor-pointer hover:text-neutral-950' : 'cursor-default'} transition">
            <span class="w-4 h-4 rounded-full text-[9px] font-mono font-bold flex items-center justify-center ${
              isCurrent
                ? 'bg-neutral-900 text-amber-400 ring-2 ring-amber-400/30'
                : isDone
                ? 'bg-emerald-500 text-white'
                : 'bg-neutral-200 text-neutral-500'
            }">
              ${isDone ? '✓' : s.num}
            </span>
            <span class="${isCurrent ? 'font-bold text-neutral-900' : isDone ? 'font-semibold text-neutral-700' : 'text-neutral-400'}">
              ${s.label}
            </span>
          </button>
          ${idx < steps.length - 1 ? `<div class="flex-1 h-[1.5px] ${isDone ? 'bg-emerald-400' : 'bg-neutral-200'}"></div>` : ''}
        `;
      }).join('')}
    </div>
  `;
}

function renderStudentSetupCta() {
  const { pickup_locations } = state.data.dashboard;
  const currentLocObj = state.selectedLocation ? pickup_locations.find(l => l.code === state.selectedLocation) : null;
  const hasName = Boolean(state.studentName && state.studentName.trim().length > 0);
  const hasLoc = Boolean(state.selectedLocation);
  const hasSlot = Boolean(state.selectedTimeSlot);
  const canContinue = hasName && hasLoc && hasSlot;

  let missingHint = 'Preencha seu nome, balcão e horário para continuar';
  if (!hasName && hasLoc && hasSlot) missingHint = 'Digite seu nome acima para continuar';
  else if (hasName && !hasLoc && hasSlot) missingHint = 'Escolha o balcão de retirada para continuar';
  else if (hasName && hasLoc && !hasSlot) missingHint = 'Escolha o horário do intervalo para continuar';
  else if (hasName && !hasLoc && !hasSlot) missingHint = 'Selecione o balcão e o horário para continuar';

  return canContinue ? `
    <button onclick="
      const input = document.getElementById('start-student-name-input');
      if (input && input.value.trim()) state.studentName = input.value.trim();
      state.studentOrderStep = 'menu';
      renderStudentOnly();"
      class="w-full py-3.5 px-5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition shadow-md flex items-center justify-between group cursor-pointer">
      <div class="flex items-center gap-2 truncate">
        <span class="truncate">Continuar para o Cardápio · Balcão ${currentLocObj ? currentLocObj.name : ''} (${state.selectedTimeSlot})</span>
      </div>
      <span class="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 ml-2">
        <span>Ver Lanches</span>
        ${ICONS.arrowRight}
      </span>
    </button>
  ` : `
    <button disabled
      class="w-full py-3.5 px-5 rounded-2xl bg-neutral-100 text-neutral-400 text-xs font-semibold border border-neutral-200 cursor-not-allowed flex items-center justify-between">
      <span class="truncate">${missingHint}</span>
      <span class="text-neutral-300 flex items-center gap-1 shrink-0 ml-2">
        <span>Ver Lanches</span>
        ${ICONS.arrowRight}
      </span>
    </button>
  `;
}

// Student Welcome & Campus Setup Screen (Linear Funnel Step 1)
function renderStudentSetupStep() {
  const { dashboard } = state.data;
  const { pickup_locations, orders } = dashboard;

  return `
    ${renderStudentOrderStepper()}
    <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
      <div class="space-y-4">
        <!-- Welcome Hero (Sleek Dark Card matching Queue Chart) -->
        <div class="p-4 sm:p-5 rounded-2xl bg-neutral-900 text-white shadow-sm border border-neutral-800">
          <h2 class="text-base sm:text-lg font-extrabold text-white leading-snug tracking-tight">
            Seu lanche pronto, <span class="text-amber-gradient">o mais rápido possível.</span>
          </h2>
          <p class="text-xs text-neutral-400 mt-1.5 leading-relaxed">
            Escolha seu balcão e horário de retirada para encontrar seu lanche fresco esperando por você com a senha.
          </p>
        </div>

        <!-- Student Identification -->
        <div>
          <label for="start-student-name-input" class="block text-xs font-bold text-neutral-800 mb-1">
            Seu Nome (para chamada da senha no balcão)
          </label>
          <input type="text" id="start-student-name-input" value="${state.studentName}"
            oninput="handleStudentNameInput(this.value);"
            placeholder="Ex: Maria Clara"
            autocomplete="off"
            class="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-900 bg-neutral-50/70 focus:bg-white focus:outline-none focus:border-neutral-900 transition" />
        </div>

        <!-- Campus / Balcão Selection -->
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label class="block text-xs font-bold text-neutral-800">
              Escolha o Balcão CESAR para Retirada
            </label>
            <span class="text-[10px] text-neutral-400 font-mono">Toque para marcar ou desmarcar</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            ${pickup_locations.map(loc => {
              const activeOrders = orders.filter(
                o => (o.status === 'QUEUED' || o.status === 'PREPARING') && o.pickup_location === loc.code
              );
              const waitMin = Math.max(2, Math.ceil(activeOrders.length * 1.5) + loc.target_sla_min);
              const isSelected = state.selectedLocation === loc.code;

              return `
                <div onclick="selectStudentLocation('${loc.code}');"
                  class="p-3 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected 
                      ? 'border-neutral-900 bg-neutral-900 text-white shadow-md ring-2 ring-neutral-900/10' 
                      : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/50'
                  }">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs font-bold ${isSelected ? 'text-white' : 'text-neutral-900'}">${loc.name}</span>
                      ${isSelected ? `<span class="text-amber-400">${ICONS.check}</span>` : ''}
                    </div>
                    <p class="text-[10px] ${isSelected ? 'text-neutral-300' : 'text-neutral-500'} leading-tight line-clamp-1">${loc.floor}</p>
                  </div>

                  <div class="mt-2.5 pt-2 border-t ${isSelected ? 'border-neutral-800' : 'border-neutral-100'}">
                    <span class="inline-block text-[9px] font-mono px-2 py-0.5 rounded-md font-semibold ${
                      isSelected 
                        ? 'bg-neutral-800 text-amber-300' 
                        : activeOrders.length === 0 
                        ? 'bg-emerald-50 text-emerald-800' 
                        : 'bg-amber-50 text-amber-800'
                    }">
                      ${activeOrders.length === 0 ? 'Fila livre · ~' + waitMin + 'm' : activeOrders.length + ' na fila · ~' + waitMin + 'm'}
                    </span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Target Time Slot -->
        <div>
          <label class="block text-xs font-bold text-neutral-800 mb-1">
            Horário do Intervalo
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            ${[
              { slot: '15:45', label: '15:45 (Tarde)', hint: 'Recomendado' },
              { slot: '09:45', label: '09:45 (Manhã)', hint: 'Manhã' },
              { slot: '11:30', label: '11:30 (Almoço)', hint: 'Pausa' },
              { slot: '18:30', label: '18:30 (Noite)', hint: 'Aulas' }
            ].map(item => {
              const isSelected = state.selectedTimeSlot === item.slot;
              return `
                <button onclick="selectStudentTimeSlot('${item.slot}');"
                  class="py-2 px-2.5 rounded-xl border text-xs font-semibold transition text-left flex flex-col justify-center ${
                    isSelected 
                      ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm' 
                      : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                  }">
                  <span class="font-bold">${item.label}</span>
                  <span class="text-[9px] font-mono ${isSelected ? 'text-amber-400' : 'text-neutral-400'}">${item.hint}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Linear Step 1 -> Step 2 Button (Updated dynamically as user types/selects) -->
      <div id="student-setup-cta-mount" class="pt-3 border-t border-neutral-100">
        ${renderStudentSetupCta()}
      </div>
    </div>
  `;
}

function renderStudentProductsGrid() {
  const { catalog } = state.data;
  const query = state.searchQuery.toLowerCase().trim();
  const filteredProducts = catalog.filter(p => {
    const matchesCat = state.selectedCategory === 'Todos' || p.category === state.selectedCategory;
    const matchesSearch = !query || 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      (p.description && p.description.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    return `
      <div class="col-span-full py-14 text-center text-neutral-400 text-xs space-y-2">
        <p>Nenhum item encontrado para "<strong>${state.searchQuery}</strong>".</p>
        <button onclick="clearStudentSearch();" class="text-amber-600 font-semibold hover:underline">Limpar busca</button>
      </div>
    `;
  }

  return filteredProducts.map(product => {
    const inCart = state.cart[product.id] || 0;
    const isOut = product.is_out_of_stock;
    return `
      <div class="rounded-2xl border transition-all overflow-hidden flex flex-col justify-between bg-white ${
        isOut 
          ? 'border-neutral-200/80 opacity-60' 
          : inCart > 0 
          ? 'border-amber-400 ring-1 ring-amber-400 shadow-sm' 
          : 'border-neutral-200/70 hover:border-neutral-300 hover:shadow-card'
      }">
        <!-- Real Photo -->
        <div onclick="openProductModal(${product.id});"
          class="relative w-full h-36 bg-neutral-100 overflow-hidden flex-shrink-0 cursor-pointer group">
          <img src="${product.image_url}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          
          <div class="absolute top-2 right-2">
            ${isOut ? `
              <span class="text-[9px] font-mono uppercase bg-neutral-900/90 text-white px-2 py-0.5 rounded-md font-semibold">Em Falta</span>
            ` : product.is_low_stock ? `
              <span class="text-[9px] font-mono bg-amber-500 text-white px-2 py-0.5 rounded-md font-semibold">Só ${product.stock} un.</span>
            ` : `
              <span class="text-[9px] font-mono bg-black/60 text-white px-2 py-0.5 rounded-md backdrop-blur-sm">~${product.prep_time_min}m</span>
            `}
          </div>

          <div class="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition">
            <span class="text-[10px] bg-white/95 text-neutral-800 px-2 py-0.5 rounded-md font-semibold shadow-sm flex items-center gap-1">
              ${ICONS.info} Ver ingredientes
            </span>
          </div>
        </div>

        <!-- Details -->
        <div class="p-3.5 flex-1 flex flex-col justify-between">
          <div onclick="openProductModal(${product.id});" class="cursor-pointer">
            <h4 class="text-xs font-bold text-neutral-900 leading-snug line-clamp-1 hover:text-amber-600 transition">${product.name}</h4>
            <p class="text-[10px] text-neutral-400 mt-0.5 truncate">${product.badge || product.category}</p>
          </div>

          <div class="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-between">
            <span class="font-extrabold text-xs text-neutral-900">
              R$ ${product.price.toFixed(2).replace('.', ',')}
            </span>

            ${isOut ? `
              <span class="text-[11px] text-neutral-400 font-medium">Esgotado</span>
            ` : inCart > 0 ? `
              <div class="flex items-center gap-2 bg-neutral-900 text-white px-2 py-0.5 rounded-xl text-xs font-semibold">
                <button onclick="updateCart(${product.id}, -1)" class="w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-white">-</button>
                <span class="w-4 text-center font-mono text-[11px]">${inCart}</span>
                <button onclick="updateCart(${product.id}, 1)" class="w-4 h-4 flex items-center justify-center text-amber-400 hover:text-amber-300">+</button>
              </div>
            ` : `
              <button onclick="updateCart(${product.id}, 1)" 
                class="px-3 py-1 rounded-xl bg-neutral-100 hover:bg-amber-400 hover:text-neutral-900 text-neutral-800 text-[11px] font-semibold transition">
                Adicionar
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Student Menu Screen (Linear Funnel Step 2)
function renderStudentMenuStep() {
  const cartInfo = getCartMetrics();
  const categories = ['Todos', 'Salgados & Forno', 'Doces & Bolos', 'Bebidas'];

  return `
    ${renderStudentOrderStepper()}
    <div class="p-5 flex-1 flex flex-col justify-between">
      <div>
        <!-- Linear Back Button & Active Location Strip -->
        <div class="mb-3 px-3.5 py-2.5 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-between text-xs">
          <button onclick="state.studentOrderStep = 'setup'; renderStudentOnly();" 
            class="font-semibold text-neutral-700 hover:text-neutral-950 flex items-center gap-1 transition">
            <span>← Voltar</span>
          </button>
          <div class="flex items-center gap-2 truncate">
            <span class="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
            <span class="text-neutral-600 truncate"><strong class="text-neutral-900">${state.studentName || 'Aluno'}</strong> · Balcão <strong class="text-neutral-900">${state.selectedLocation}</strong> (${state.selectedTimeSlot})</span>
          </div>
        </div>

        <!-- Real-time Search Bar (Zero focus loss while typing) -->
        <div class="relative mb-3">
          <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
            ${ICONS.search}
          </span>
          <input type="text" id="student-search-input" value="${state.searchQuery}" 
            oninput="handleStudentSearchInput(this.value);"
            placeholder="Buscar lanches, bolos, café, sucos..."
            autocomplete="off"
            class="w-full pl-10 pr-8 py-2 rounded-2xl border border-neutral-200 text-xs bg-neutral-50/60 focus:bg-white focus:outline-none focus:border-neutral-800 transition" />
          <button id="student-search-clear-btn" onclick="clearStudentSearch();"
            style="display: ${state.searchQuery ? 'flex' : 'none'};"
            class="absolute inset-y-0 right-0 pr-3 items-center text-neutral-400 hover:text-neutral-700">
            ${ICONS.x}
          </button>
        </div>

        <!-- Category Pills Bar -->
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 border-b border-neutral-100">
          ${categories.map(cat => `
            <button onclick="state.selectedCategory = '${cat}'; renderStudentOnly();"
              class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${state.selectedCategory === cat ? 'bg-neutral-900 text-white shadow-sm' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70'}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- Product Cards Grid -->
        <div id="student-products-grid-mount" class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-3.5 max-h-[440px] overflow-y-auto no-scrollbar pr-0.5">
          ${renderStudentProductsGrid()}
        </div>
      </div>

      <!-- Linear Step 2 -> Step 3 Button -->
      ${cartInfo.count > 0 ? `
        <div class="mt-4 pt-3.5 border-t border-neutral-100 flex items-center justify-between gap-3">
          <div>
            <p class="text-xs text-neutral-500 font-medium">${cartInfo.count} ${cartInfo.count === 1 ? 'item na sacola' : 'itens na sacola'}</p>
            <p class="text-sm font-extrabold text-neutral-900">Total: R$ ${cartInfo.total.toFixed(2).replace('.', ',')}</p>
          </div>
          <button onclick="state.studentOrderStep = 'checkout'; renderStudentOnly();" 
            class="px-5 py-2.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition shadow-sm flex items-center gap-2">
            <span>Revisar e Agendar</span>
            <span class="text-amber-400">${ICONS.arrowRight}</span>
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

// Student Checkout Screen (Linear Funnel Step 3)
function renderStudentCheckoutStep() {
  const { catalog, payment_methods } = state.data;
  const cartInfo = getCartMetrics();
  const estimation = calculateEstimatedDelivery();
  const cartEntries = Object.entries(state.cart)
    .map(([pid, qty]) => ({ product: catalog.find(p => p.id === Number(pid)), qty }))
    .filter(x => x.product && x.qty > 0);

  return `
    ${renderStudentOrderStepper()}
    <div class="p-5 flex-1 flex flex-col justify-between">
      <div class="space-y-3.5">
        <!-- Linear Back Button -->
        <div class="flex items-center justify-between">
          <button onclick="state.studentOrderStep = 'menu'; renderStudentOnly();" 
            class="font-semibold text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1 transition">
            <span>← Voltar ao Cardápio</span>
          </button>
          <button onclick="state.studentOrderStep = 'setup'; renderStudentOnly();" class="text-[11px] font-semibold text-amber-600 hover:underline">
            Alterar Local (${state.selectedLocation} · ${state.selectedTimeSlot})
          </button>
        </div>

        <!-- Interactive Items Summary (Can adjust quantities directly in checkout) -->
        <div class="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2">
          <div class="flex items-center justify-between text-[11px] text-neutral-500 pb-1.5 border-b border-neutral-200/60">
            <span>Resumo do Pedido de <strong class="text-neutral-900">${state.studentName || 'Aluno'}</strong></span>
            <span>${cartInfo.count} ${cartInfo.count === 1 ? 'item' : 'itens'}</span>
          </div>
          <div class="space-y-1.5 max-h-32 overflow-y-auto no-scrollbar">
            ${cartEntries.map(({ product, qty }) => `
              <div class="flex items-center justify-between gap-2 text-xs">
                <span class="font-semibold text-neutral-800 truncate">${product.name}</span>
                <div class="flex items-center gap-2 shrink-0">
                  <span class="font-mono text-[11px] text-neutral-500">R$ ${(product.price * qty).toFixed(2).replace('.', ',')}</span>
                  <div class="flex items-center gap-1.5 bg-white border border-neutral-200 px-1.5 py-0.5 rounded-lg text-[11px] font-semibold">
                    <button onclick="updateCart(${product.id}, -1)" class="w-4 h-4 flex items-center justify-center text-neutral-500 hover:text-neutral-900">-</button>
                    <span class="w-3 text-center font-mono">${qty}</span>
                    <button onclick="updateCart(${product.id}, 1)" class="w-4 h-4 flex items-center justify-center text-amber-600 hover:text-amber-500">+</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- SMART QUEUE ESTIMATION CARD -->
        <div class="p-4 rounded-2xl bg-neutral-900 text-white shadow-sm border border-neutral-800">
          <div class="flex items-center justify-between text-xs pb-2.5 border-b border-neutral-800">
            <span class="font-bold flex items-center gap-2 text-white">
              <span class="text-amber-400">${ICONS.clock}</span>
              <span>Estimativa da Fila · Balcão ${state.selectedLocation}</span>
            </span>
            <span class="text-[11px] font-mono text-neutral-400">
              ${estimation.queueOrdersCount === 0 ? 'Fila livre' : `${estimation.queueOrdersCount} na fila`}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-3 pt-0.5">
            <div class="p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
              <p class="text-[10px] text-neutral-400 font-mono">Tempo de Preparo</p>
              <p class="text-sm font-extrabold text-white mt-0.5 font-mono">~${estimation.waitMin} min</p>
            </div>
            <div class="p-2.5 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
              <p class="text-[10px] text-neutral-400 font-mono">Previsão de Retirada</p>
              <p class="text-sm font-extrabold text-amber-400 mt-0.5 font-mono">às ~${estimation.readyTimeStr}</p>
            </div>
          </div>
          <p class="text-[11px] text-neutral-400 mt-2.5 text-center">
            ${estimation.queueOrdersCount === 0 
              ? 'Balcão sem espera. Seu lanche começará a ser feito de imediato.' 
              : `Há ${estimation.queueOrdersCount} pedido(s) sendo preparados neste balcão.`}
          </p>
        </div>

        <!-- Payment Options (Pix ou Pagar na Hora) -->
        <div>
          <label class="block text-xs font-semibold text-neutral-700 mb-1">Forma de Pagamento</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${payment_methods.map(pm => {
              const isSel = state.selectedPayment === pm.code;
              return `
                <label class="p-3 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  isSel ? 'border-neutral-900 bg-neutral-900 text-white shadow-sm' : 'border-neutral-200 bg-white hover:border-neutral-300'
                }">
                  <div class="flex items-center gap-2.5">
                    <input type="radio" name="payment_method" value="${pm.code}" 
                      ${isSel ? 'checked' : ''} 
                      onchange="state.selectedPayment = this.value; renderStudentOnly();" 
                      class="accent-amber-400" />
                    <div>
                      <p class="text-xs font-bold ${isSel ? 'text-white' : 'text-neutral-900'}">${pm.name}</p>
                      <p class="text-[10px] ${isSel ? 'text-neutral-300' : 'text-neutral-500'}">${pm.description}</p>
                    </div>
                  </div>
                </label>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Total Bar -->
        <div class="px-3.5 py-2.5 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-between text-xs">
          <span class="font-bold text-neutral-700">Total a Pagar</span>
          <span class="text-sm font-extrabold text-neutral-900">R$ ${cartInfo.total.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>

      <!-- Linear Step 3 Submit Button -->
      <div class="pt-3.5 mt-3.5 border-t border-neutral-100 flex items-center justify-between gap-3">
        <button onclick="state.studentOrderStep = 'menu'; renderStudentOnly();" 
          class="px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-600 hover:bg-neutral-50">
          ← + Itens
        </button>
        <button onclick="handleOrderSubmit();" 
          class="flex-1 py-2.5 px-5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-amber-400 text-xs font-bold transition shadow-sm text-center">
          Confirmar Pedido (R$ ${cartInfo.total.toFixed(2).replace('.', ',')}) →
        </button>
      </div>
    </div>
  `;
}

// Student My Orders Tab (Tracking All In-Progress Orders)
function renderStudentMyOrdersTab() {
  const activeOrders = getStudentActiveOrders();

  return `
    <div class="p-5 flex-1 flex flex-col justify-between">
      ${activeOrders.length === 0 ? `
        <div class="py-20 flex flex-col items-center justify-center text-center">
          <div class="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400 mb-3">
            ${ICONS.clock}
          </div>
          <h4 class="text-sm font-bold text-neutral-800">Você não tem pedidos em andamento</h4>
          <p class="text-xs text-neutral-500 mt-1 max-w-xs">Faça seu pedido para acompanhar a senha e receber o aviso de retirada no balcão.</p>
          <button onclick="state.studentOrderStep = 'setup'; switchStudentTab('order'); renderStudentOnly();" 
            class="mt-4 px-5 py-2.5 rounded-2xl bg-neutral-900 text-amber-400 text-xs font-bold hover:bg-neutral-800 transition">
            Iniciar Pedido Agora →
          </button>
        </div>
      ` : `
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-2 border-b border-neutral-100">
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-800">Seus Pedidos em Andamento</h3>
              <p class="text-[11px] text-neutral-400">Acompanhe a senha e retire no balcão indicado</p>
            </div>
            <span class="text-[11px] font-mono text-neutral-500 font-semibold">
              ${activeOrders.length} ${activeOrders.length === 1 ? 'ativo' : 'ativos'}
            </span>
          </div>

          <div class="space-y-3.5 max-h-[480px] overflow-y-auto no-scrollbar pr-0.5">
            ${activeOrders.map(order => {
              const isReady = order.status === 'READY';
              const isPreparing = order.status === 'PREPARING';
              const isQueued = order.status === 'QUEUED';

              return `
                <div class="p-4 rounded-2xl border ${
                  isReady 
                    ? 'border-amber-400 ring-2 ring-amber-400/20 bg-amber-50/20 shadow-sm' 
                    : 'border-neutral-200 bg-white shadow-sm'
                } text-left">
                  
                  <!-- Top Row: Code + Status Badge -->
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <span class="font-mono font-extrabold text-sm ${isReady ? 'text-amber-600' : 'text-neutral-900'}">
                        SENHA #${order.ticket_code}
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded-md font-bold ${
                        isReady 
                          ? 'bg-amber-400 text-neutral-950 animate-pulse' 
                          : isPreparing 
                          ? 'bg-neutral-900 text-amber-300' 
                          : 'bg-neutral-100 text-neutral-700'
                      }">
                        ${isReady ? 'PRONTO NO BALCÃO' : isPreparing ? 'EM PREPARO' : 'NA FILA'}
                      </span>
                    </div>
                    <span class="text-[10px] font-mono text-neutral-400">${order.time_slot}</span>
                  </div>

                  <p class="text-xs text-neutral-600 mt-1">
                    Retirada no <strong>Balcão ${order.location_name}</strong>
                  </p>

                  <!-- Reaviso / Callout Banner if staff re-called this order -->
                  ${order.call_count > 0 ? `
                    <div class="p-3 my-2.5 rounded-xl bg-amber-400 text-neutral-950 text-xs font-bold flex items-center justify-between shadow-sm animate-pulse">
                      <div class="flex items-center gap-2 text-left">
                        ${ICONS.bellRing}
                        <div>
                          <p class="font-extrabold">CHAMADA NO BALCÃO (${order.call_count}x)</p>
                          <p class="text-[10px] font-semibold">A cantina está te chamando para retirar agora!</p>
                        </div>
                      </div>
                      <span class="text-[9px] font-mono bg-neutral-950 text-amber-400 px-2 py-0.5 rounded font-bold">Retirar</span>
                    </div>
                  ` : ''}

                  <!-- 3-Stage Mini Stepper -->
                  <div class="grid grid-cols-3 gap-1.5 my-3 text-center text-[10px]">
                    <div class="p-1.5 rounded-xl flex flex-col items-center justify-center font-bold ${
                      isQueued || isPreparing || isReady ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-400'
                    }">
                      <span>1. Na Fila</span>
                    </div>
                    <div class="p-1.5 rounded-xl flex flex-col items-center justify-center font-bold ${
                      isPreparing || isReady ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-400'
                    }">
                      <span>2. Em Preparo</span>
                    </div>
                    <div class="p-1.5 rounded-xl flex flex-col items-center justify-center font-bold ${
                      isReady ? 'bg-amber-400 text-neutral-950 ring-2 ring-amber-400/40 animate-pulse' : 'bg-neutral-100 text-neutral-400'
                    }">
                      <span>3. Pronto</span>
                    </div>
                  </div>

                  <!-- Items breakdown -->
                  <div class="mt-2.5 pt-2 border-t border-neutral-100 text-xs text-neutral-700 space-y-1">
                    ${order.items.map(i => `
                      <div class="flex justify-between items-center text-[11px]">
                        <span class="font-medium">${i.quantity}x ${i.product_name}</span>
                        <span class="font-mono text-neutral-500">R$ ${i.subtotal.toFixed(2).replace('.', ',')}</span>
                      </div>
                    `).join('')}
                    <div class="mt-1 pt-1.5 border-t border-dashed border-neutral-200 flex justify-between font-bold text-neutral-900 text-xs">
                      <span>Total Pago (${order.payment_method})</span>
                      <span>R$ ${order.final_amount.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Bottom Action -->
          <div class="pt-3 border-t border-neutral-100 flex items-center justify-center gap-3">
            <button onclick="clearCart(); state.studentOrderStep = 'setup'; switchStudentTab('order'); renderStudentOnly();" 
              class="px-5 py-2.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-amber-400 text-xs font-bold transition shadow-sm flex items-center gap-2">
              <span>+ Fazer Outro Pedido</span>
              <span>${ICONS.arrowRight}</span>
            </button>
          </div>
        </div>
      `}
    </div>
  `;
}

// Student Notifications Tab
function renderStudentNotificationsTab() {
  const unreadCount = getUnreadNotificationsCount();

  return `
    <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
      <div>
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-800">Avisos da Cantina</h3>
            <p class="text-[11px] text-neutral-400">Atualizações de pedidos e chamadas no balcão</p>
          </div>
          ${unreadCount > 0 ? `
            <button onclick="markAllNotificationsRead();" class="text-xs font-semibold text-amber-600 hover:underline">
              Marcar lidas
            </button>
          ` : ''}
        </div>

        <div class="space-y-2.5 max-h-[480px] overflow-y-auto no-scrollbar">
          ${state.notifications.map(n => `
            <div class="p-3.5 rounded-2xl border transition-all ${
              n.read ? 'bg-neutral-50 border-neutral-100 text-neutral-600' : 'bg-amber-50/70 border-amber-200 text-neutral-900 shadow-sm'
            }">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold">${n.title}</span>
                <span class="text-[10px] font-mono text-neutral-400">${n.time}</span>
              </div>
              <p class="text-xs mt-1 leading-snug">${n.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// Student Queue Wait Projection Tab (Graphic projection by time slot & region: Apolo, Brum, Tiradentes)
function renderStudentProjectionsTab() {
  const { pickup_locations, orders } = state.data.dashboard;
  const currentSlot = state.selectedTimeSlot || '15:45';
  const activeLocCode = state.projectionLocation || state.selectedLocation || 'APOLO';
  const locObj = pickup_locations.find(l => l.code === activeLocCode) || pickup_locations[0];

  // Live orders currently in queue at each location
  const getLiveCount = (code) => orders.filter(
    o => (o.status === 'QUEUED' || o.status === 'PREPARING') && o.pickup_location === code
  ).length;

  const liveActiveHere = getLiveCount(activeLocCode);
  const liveExtraWait = Math.ceil(liveActiveHere * 1.5);

  const regionalProjections = {
    APOLO: {
      peakSlot: '15:45',
      bestSlots: '09:45 ou 20:30',
      bestDesc: 'Espera média abaixo de 3 min no Térreo.',
      tipTitle: 'Horário de Pico no Apolo',
      tipDesc: 'Às 15:45 o fluxo dobra; peça 10 min antes.',
      slots: [
        { slot: '09:45', waitMin: 3, heightPct: 35 },
        { slot: '11:30', waitMin: 6, heightPct: 62 },
        { slot: '15:45', waitMin: 8 + liveExtraWait, heightPct: 92, isPeak: true },
        { slot: '18:30', waitMin: 5, heightPct: 52 },
        { slot: '20:30', waitMin: 2, heightPct: 24 },
      ]
    },
    BRUM: {
      peakSlot: '09:45',
      bestSlots: '11:30 ou 18:30',
      bestDesc: 'Retirada rápida no 2º andar sem fila.',
      tipTitle: 'Manhã Movimentada no Brum',
      tipDesc: 'O intervalo de 09:45 concentra mais turmas.',
      slots: [
        { slot: '09:45', waitMin: 7, heightPct: 88, isPeak: true },
        { slot: '11:30', waitMin: 4, heightPct: 44 },
        { slot: '15:45', waitMin: 5 + liveExtraWait, heightPct: Math.min(85, 55 + liveActiveHere * 8) },
        { slot: '18:30', waitMin: 3, heightPct: 34 },
        { slot: '20:30', waitMin: 2, heightPct: 22 },
      ]
    },
    TIRADENTES: {
      peakSlot: '18:30',
      bestSlots: '09:45 ou 15:45',
      bestDesc: 'Pátio livre durante a manhã e tarde.',
      tipTitle: 'Fluxo Noturno no Tiradentes',
      tipDesc: 'Às 18:30 há maior procura antes das aulas.',
      slots: [
        { slot: '09:45', waitMin: 3, heightPct: 32 },
        { slot: '11:30', waitMin: 5, heightPct: 52 },
        { slot: '15:45', waitMin: 4 + liveExtraWait, heightPct: Math.min(80, 44 + liveActiveHere * 8) },
        { slot: '18:30', waitMin: 8, heightPct: 90, isPeak: true },
        { slot: '20:30', waitMin: 3, heightPct: 32 },
      ]
    }
  };

  const regionData = regionalProjections[activeLocCode] || regionalProjections.APOLO;
  const timeSlotProjections = regionData.slots;

  return `
    <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <div class="pb-3 mb-3 border-b border-neutral-100">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-800">
                Projeção de Fila por Unidade
              </h3>
              <p class="text-[11px] text-neutral-400 mt-0.5">Compare o tempo estimado em Apolo, Brum e Tiradentes</p>
            </div>
            <span class="text-[11px] font-mono text-neutral-500">
              ${liveActiveHere === 0 ? 'Fila livre agora' : `${liveActiveHere} na fila agora`}
            </span>
          </div>

          <!-- Region / Balcão Selector (Apolo, Brum, Tiradentes) -->
          <div class="grid grid-cols-3 gap-1.5 mt-3 bg-neutral-100 p-1 rounded-xl">
            ${pickup_locations.map(loc => {
              const isSelected = loc.code === activeLocCode;
              const count = getLiveCount(loc.code);
              return `
                <button onclick="state.projectionLocation = '${loc.code}'; renderStudentOnly();"
                  class="py-1.5 px-2 rounded-lg text-xs font-semibold transition flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'bg-neutral-900 text-white font-bold shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }">
                  <span>${loc.name}</span>
                  <span class="text-[9px] font-mono ${isSelected ? 'text-amber-400' : 'text-neutral-400'}">(${count})</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Visual Bar Chart -->
        <div class="p-4 rounded-2xl bg-neutral-900 text-white shadow-sm border border-neutral-800">
          <div class="flex items-center justify-between mb-3 text-[11px] text-neutral-400 font-mono">
            <span>Balcão ${locObj.name} · ${locObj.floor}</span>
            <span class="text-amber-400 font-bold">● Pico às ${regionData.peakSlot}</span>
          </div>

          <!-- Chart Area -->
          <div class="h-40 flex items-end justify-between gap-2 pt-6 pb-2 border-b border-neutral-800">
            ${timeSlotProjections.map(item => {
              return `
                <div class="flex-1 flex flex-col items-center h-full justify-end group">
                  <span class="text-[10px] font-mono font-bold mb-1 transition-all group-hover:scale-110 ${
                    item.isPeak ? 'text-amber-400' : 'text-neutral-400'
                  }">
                    ~${item.waitMin}m
                  </span>
                  
                  <div class="w-full max-w-[36px] rounded-t-xl transition-all duration-300 ${
                    item.isPeak 
                      ? 'bg-amber-400 shadow-md group-hover:brightness-110' 
                      : 'bg-neutral-700 group-hover:bg-neutral-600'
                  }" style="height: ${item.heightPct}%;">
                  </div>

                  <span class="text-[10px] font-mono font-semibold mt-2 ${
                    item.isPeak ? 'text-amber-400 font-bold' : 'text-neutral-400'
                  }">
                    ${item.slot}
                  </span>
                </div>
              `;
            }).join('')}
          </div>

          <div class="flex items-center justify-between mt-3 text-[10px] text-neutral-400">
            <span>Unidade: <strong class="text-white">${locObj.name}</strong></span>
            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-400"></span> Pico</span>
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-neutral-700"></span> Fila Rápida</span>
            </div>
          </div>
        </div>

        <!-- Insight & Advice Cards per Region -->
        <div class="grid grid-cols-2 gap-2.5 mt-3">
          <div class="p-3 rounded-2xl bg-neutral-50 border border-neutral-100">
            <span class="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Melhor no ${locObj.name}</span>
            <p class="text-xs font-bold text-neutral-900 mt-0.5">${regionData.bestSlots}</p>
            <p class="text-[10px] text-neutral-500 mt-0.5">${regionData.bestDesc}</p>
          </div>
          <div class="p-3 rounded-2xl bg-neutral-50 border border-neutral-100">
            <span class="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">${regionData.tipTitle}</span>
            <p class="text-xs font-bold text-neutral-900 mt-0.5">Peça com antecedência</p>
            <p class="text-[10px] text-neutral-500 mt-0.5">${regionData.tipDesc}</p>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="pt-3 border-t border-neutral-100">
        <button onclick="state.selectedLocation = '${locObj.code}'; state.studentOrderStep = 'setup'; switchStudentTab('order'); renderStudentOnly();" 
          class="w-full py-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-amber-400 text-xs font-bold transition flex items-center justify-center gap-2">
          <span>Agendar Lanche no Balcão ${locObj.name}</span>
          <span>${ICONS.arrowRight}</span>
        </button>
      </div>
    </div>
  `;
}

// Product Details & Ingredients Modal
function renderProductModal() {
  const product = state.selectedProductModal;
  if (!product) {
    state._modalAnimatedProductId = null;
    return '';
  }
  const inCart = state.cart[product.id] || 0;
  const shouldAnimate = state._modalAnimatedProductId !== product.id;
  state._modalAnimatedProductId = product.id;

  return `
    <div onclick="if (event.target === this) closeProductModal();"
      class="absolute inset-0 z-40 bg-neutral-900/40 backdrop-blur-sm rounded-3xl p-4 flex items-center justify-center ${shouldAnimate ? 'fade-in' : ''}">
      <div class="bg-white rounded-3xl w-full max-w-sm max-h-[92%] overflow-y-auto no-scrollbar p-5 border border-neutral-100 shadow-2xl flex flex-col justify-between">
        <div>
          <div class="relative w-full h-44 rounded-2xl overflow-hidden bg-neutral-100 mb-4 shadow-sm">
            <img src="${product.image_url}" alt="${product.name}" class="w-full h-full object-cover" />
            <button onclick="closeProductModal();" 
              class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-neutral-700 hover:text-neutral-950 flex items-center justify-center shadow-sm">
              ${ICONS.x}
            </button>
            <div class="absolute bottom-2.5 left-2.5">
              <span class="text-[10px] font-mono bg-neutral-900/80 text-white px-2 py-0.5 rounded-md backdrop-blur-sm">
                ~${product.prep_time_min} min de preparo
              </span>
            </div>
          </div>

          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-[10px] font-semibold uppercase tracking-wider text-amber-600">${product.category}</span>
              <h3 class="text-base font-bold text-neutral-900 leading-tight mt-0.5">${product.name}</h3>
            </div>
            <span class="text-base font-extrabold text-neutral-900 whitespace-nowrap">
              R$ ${product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <p class="text-xs text-neutral-600 mt-2 leading-relaxed">
            ${product.description || 'Lanche fresco preparado com carinho pela equipe da cantina.'}
          </p>

          <div class="mt-4 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100">
            <h4 class="text-[11px] font-bold text-neutral-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              ${ICONS.info}
              <span>Ingredientes Selecionados</span>
            </h4>
            <p class="text-xs text-neutral-600 leading-snug">
              ${product.ingredients || 'Ingredientes frescos de alta qualidade.'}
            </p>
          </div>

          <div class="mt-3 flex items-center justify-between text-xs text-neutral-500">
            <span>Estoque no Balcão:</span>
            <span class="font-bold text-neutral-800">${product.stock} un. disponíveis</span>
          </div>
        </div>

        <div class="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between gap-3">
          ${product.is_out_of_stock ? `
            <span class="w-full text-center py-2.5 rounded-2xl bg-neutral-100 text-neutral-400 font-semibold text-xs">
              Item Esgotado no Momento
            </span>
          ` : inCart > 0 ? `
            <div class="flex items-center gap-3 bg-neutral-900 text-white px-4 py-2 rounded-2xl text-xs font-semibold">
              <button onclick="updateCart(${product.id}, -1); state.selectedProductModal = state.data.catalog.find(p=>p.id===${product.id}); updateStudentModalMount();" class="text-neutral-400 hover:text-white">-</button>
              <span class="font-mono font-bold w-4 text-center">${inCart}</span>
              <button onclick="updateCart(${product.id}, 1); state.selectedProductModal = state.data.catalog.find(p=>p.id===${product.id}); updateStudentModalMount();" class="text-amber-400 hover:text-amber-300">+</button>
            </div>
            <button onclick="closeProductModal();" 
              class="flex-1 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-neutral-900 text-xs font-bold transition">
              Pronto (${inCart} na sacola)
            </button>
          ` : `
            <button onclick="updateCart(${product.id}, 1); state.selectedProductModal = state.data.catalog.find(p=>p.id===${product.id}); updateStudentModalMount();" 
              class="w-full py-2.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition flex items-center justify-center gap-2">
              <span>Adicionar à Sacola</span>
              <span>·</span>
              <span class="text-amber-400">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
            </button>
          `}
        </div>
      </div>
    </div>
  `;
}

function renderStudentLoadingHtml() {
  if (!state.studentLoading) return '';
  return `
    <div class="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-30 flex items-center justify-center fade-in rounded-3xl">
      <div class="bg-neutral-900 text-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 border border-neutral-800">
        <div class="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-xs font-semibold text-neutral-100">${state.studentLoading}</span>
      </div>
    </div>
  `;
}

function renderStaffLoadingHtml() {
  if (!state.staffLoading) return '';
  return `
    <div class="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-30 flex items-center justify-center fade-in rounded-3xl">
      <div class="bg-neutral-900 text-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 border border-neutral-800">
        <div class="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <span class="text-xs font-semibold text-neutral-100">${state.staffLoading}</span>
      </div>
    </div>
  `;
}

function updateStudentLoadingOverlay() {
  const el = document.getElementById('student-loading-mount');
  if (el) el.innerHTML = renderStudentLoadingHtml();
}

function updateStaffLoadingOverlay() {
  const el = document.getElementById('staff-loading-mount');
  if (el) el.innerHTML = renderStaffLoadingHtml();
}

function updateStudentModalMount() {
  const el = document.getElementById('student-modal-mount');
  if (el) el.innerHTML = renderProductModal();
}

// Student App Body
function renderStudentSection() {
  return `
    <div class="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden flex flex-col relative min-h-[640px]">
      ${renderStudentHeader()}

      <!-- In-App Scoped Loading Overlay (Confined strictly to Student App) -->
      <div id="student-loading-mount">${renderStudentLoadingHtml()}</div>

      <!-- TAB 1: PEDIR (Linear: Setup -> Menu -> Checkout) -->
      ${state.studentTab === 'order' ? `
        ${state.studentOrderStep === 'setup' ? renderStudentSetupStep() : ''}
        ${state.studentOrderStep === 'menu' ? renderStudentMenuStep() : ''}
        ${state.studentOrderStep === 'checkout' ? renderStudentCheckoutStep() : ''}
      ` : ''}

      <!-- TAB 2: MEUS PEDIDOS -->
      ${state.studentTab === 'my-orders' ? renderStudentMyOrdersTab() : ''}

      <!-- TAB 3: NOTIFICAÇÕES -->
      ${state.studentTab === 'notifications' ? renderStudentNotificationsTab() : ''}

      <!-- TAB 4: HORÁRIOS / PROJEÇÃO DE FILA -->
      ${state.studentTab === 'projections' ? renderStudentProjectionsTab() : ''}

      <!-- Ingredients Modal (Isolated Mount) -->
      <div id="student-modal-mount">${renderProductModal()}</div>
    </div>
  `;
}

// Staff Internal Header (Matching sleek black aesthetic)
function renderStaffAppHeader() {
  const { summary } = state.data.dashboard;
  const shouldAnimateStaffAlert = state.staffAlert && state._animatedStaffAlertRef !== state.staffAlert;
  state._animatedStaffAlertRef = state.staffAlert || null;

  return `
    <div class="p-4 sm:p-5 border-b border-neutral-800 bg-neutral-900 text-white">
      <div class="flex flex-wrap items-center justify-between gap-2.5 mb-1">
        <div class="flex items-center gap-2.5">
          <img src="/static/logo.svg" alt="PitStop" class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-neutral-800 shadow-sm object-contain shrink-0" />
          <div>
            <div class="flex items-center gap-2">
              ${renderPitStopBrand({ size: 'base', extra: 'Cantina' })}
            </div>
            <p class="text-[11px] text-neutral-400">Controle operacional em tempo real</p>
          </div>
        </div>

        <!-- Section Switcher (Tree Navigation) -->
        <nav class="flex flex-wrap items-center bg-neutral-800/90 p-1 rounded-xl text-[11px] font-semibold border border-neutral-700/60 gap-1">
          <button onclick="switchStaffSection('queue');" 
            class="px-2.5 py-1.5 rounded-lg transition ${state.staffSection === 'queue' ? 'bg-white text-neutral-950 font-bold shadow-sm' : 'text-neutral-400 hover:text-white'}">
            Fila ao Vivo (${summary.customers_in_queue})
          </button>
          <button onclick="switchStaffSection('metrics');" 
            class="px-2.5 py-1.5 rounded-lg transition ${state.staffSection === 'metrics' ? 'bg-white text-neutral-950 font-bold shadow-sm' : 'text-neutral-400 hover:text-white'}">
            Previsão & Métricas
          </button>
          <button onclick="switchStaffSection('inventory');" 
            class="px-2.5 py-1.5 rounded-lg transition ${state.staffSection === 'inventory' ? 'bg-white text-neutral-950 font-bold shadow-sm' : 'text-neutral-400 hover:text-white'}">
            Estoque (${summary.out_of_stock_count} em falta)
          </button>
        </nav>
      </div>

      <!-- In-App Staff Alert Banner -->
      ${state.staffAlert ? `
        <div class="mt-2 p-3 rounded-2xl bg-amber-400 text-neutral-950 text-xs flex items-center justify-between ${shouldAnimateStaffAlert ? 'fade-in' : ''} shadow-sm font-semibold">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-neutral-950"></span>
            <div>
              <p class="font-bold leading-tight">${state.staffAlert.title}</p>
              ${state.staffAlert.text ? `<p class="text-[11px] text-neutral-800 mt-0.5">${state.staffAlert.text}</p>` : ''}
            </div>
          </div>
          <button onclick="state.staffAlert = null; renderStaffOnly();" class="text-neutral-900 hover:text-neutral-700">${ICONS.x}</button>
        </div>
      ` : ''}
    </div>
  `;
}

// Staff App Body
function renderStaffSection() {
  const { catalog, dashboard } = state.data;
  const { summary, hourly_chart, orders } = dashboard;

  const queuedOrders = orders.filter(o => o.status === 'QUEUED');
  const preparingOrders = orders.filter(o => o.status === 'PREPARING');
  const readyOrders = orders.filter(o => o.status === 'READY');

  return `
    <div class="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden flex flex-col min-h-[640px] relative">
      ${renderStaffAppHeader()}

      <!-- In-App Scoped Loading Overlay (Confined strictly to Staff App) -->
      <div id="staff-loading-mount">${renderStaffLoadingHtml()}</div>

      <div class="p-3.5 sm:p-4 flex-1 min-w-0">
        
        <!-- SECTION 1: KANBAN DE FILA AO VIVO (Responsivo, sem scroll lateral) -->
        ${state.staffSection === 'queue' ? `
          <div class="space-y-3 min-w-0">
            <div class="px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-[11px]">
              <span class="text-neutral-600 font-medium">${summary.predictive_tip}</span>
              <button onclick="switchStaffSection('metrics');" class="text-neutral-900 font-bold hover:underline shrink-0">
                Ver previsão de horários →
              </button>
            </div>

            <!-- 3 Responsive Kanban Columns (Zero Horizontal Scroll) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 min-w-0">
              
              <!-- 1. Na Fila -->
              <div class="p-2.5 rounded-2xl bg-neutral-50/70 border border-neutral-100 flex flex-col min-w-0 overflow-hidden">
                <div class="flex justify-between items-center gap-1 mb-2.5 px-0.5">
                  <span class="text-[11px] font-bold text-neutral-700 truncate">1. Na Fila</span>
                  <span class="px-1.5 py-0.5 rounded-md bg-neutral-200/80 text-neutral-800 text-[10px] font-mono font-bold shrink-0">${queuedOrders.length}</span>
                </div>
                <div class="space-y-2 max-h-[460px] overflow-y-auto overflow-x-hidden no-scrollbar min-w-0">
                  ${queuedOrders.length === 0 ? `<p class="text-[11px] text-neutral-400 py-12 text-center">Fila vazia</p>` : queuedOrders.map(o => renderStaffOrderCard(o)).join('')}
                </div>
              </div>

              <!-- 2. Em Preparo -->
              <div class="p-2.5 rounded-2xl bg-neutral-50/70 border border-neutral-100 flex flex-col min-w-0 overflow-hidden">
                <div class="flex justify-between items-center gap-1 mb-2.5 px-0.5">
                  <span class="text-[11px] font-bold text-neutral-700 truncate">2. Em Preparo</span>
                  <span class="px-1.5 py-0.5 rounded-md bg-amber-400 text-neutral-950 text-[10px] font-mono font-bold shrink-0">${preparingOrders.length}</span>
                </div>
                <div class="space-y-2 max-h-[460px] overflow-y-auto overflow-x-hidden no-scrollbar min-w-0">
                  ${preparingOrders.length === 0 ? `<p class="text-[11px] text-neutral-400 py-12 text-center">Nenhum em preparo</p>` : preparingOrders.map(o => renderStaffOrderCard(o)).join('')}
                </div>
              </div>

              <!-- 3. Pronto no Balcão -->
              <div class="p-2.5 rounded-2xl bg-neutral-50/70 border border-neutral-100 flex flex-col min-w-0 overflow-hidden">
                <div class="flex justify-between items-center gap-1 mb-2.5 px-0.5">
                  <span class="text-[11px] font-bold text-neutral-700 truncate">3. Pronto no Balcão</span>
                  <span class="px-1.5 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-mono font-bold shrink-0">${readyOrders.length}</span>
                </div>
                <div class="space-y-2 max-h-[460px] overflow-y-auto overflow-x-hidden no-scrollbar min-w-0">
                  ${readyOrders.length === 0 ? `<p class="text-[11px] text-neutral-400 py-12 text-center">Nenhum no balcão</p>` : readyOrders.map(o => renderStaffOrderCard(o)).join('')}
                </div>
              </div>

            </div>
          </div>
        ` : ''}

        <!-- SECTION 2: PREVISÃO DE HORÁRIOS & MÉTRICAS (AQUI FICAM OS 4 CARDS E O GRÁFICO REFEITO!) -->
        ${state.staffSection === 'metrics' ? `
          <div class="space-y-6">
            
            <!-- Os 4 Cards de Métricas Operacionais (Exclusivos desta tela!) -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div class="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100">
                <p class="text-xs text-neutral-500 font-medium">Clientes na Fila</p>
                <p class="text-2xl font-extrabold text-neutral-900 mt-0.5">${summary.customers_in_queue}</p>
                <p class="text-[11px] text-neutral-400">~${summary.estimated_wait_min} min de espera</p>
              </div>

              <div class="p-3.5 rounded-2xl ${summary.delayed_orders_count > 0 ? 'bg-rose-50/70 border border-rose-200' : 'bg-neutral-50 border border-neutral-100'}">
                <p class="text-xs ${summary.delayed_orders_count > 0 ? 'text-rose-700' : 'text-neutral-500'} font-medium">Pedidos com Atraso</p>
                <p class="text-2xl font-extrabold ${summary.delayed_orders_count > 0 ? 'text-rose-700' : 'text-neutral-900'} mt-0.5">
                  ${summary.delayed_orders_count}
                </p>
                <p class="text-[11px] text-neutral-400">
                  ${summary.active_delayed_count > 0 ? `${summary.active_delayed_count} ativo(s) na fila` : 'Todos entregues'}
                </p>
              </div>

              <div class="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100">
                <p class="text-xs text-neutral-500 font-medium">Entregues Hoje</p>
                <p class="text-2xl font-extrabold text-neutral-900 mt-0.5">${summary.delivered_today_count}</p>
                <p class="text-[11px] text-neutral-400">R$ ${summary.revenue_today.toFixed(2).replace('.', ',')}</p>
              </div>

              <div class="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100">
                <p class="text-xs text-neutral-500 font-medium">Produtos em Falta</p>
                <p class="text-2xl font-extrabold ${summary.out_of_stock_count > 0 ? 'text-amber-600' : 'text-neutral-900'} mt-0.5">
                  ${summary.out_of_stock_count}
                </p>
                <p class="text-[11px] text-neutral-400">${summary.low_stock_count} em estoque baixo</p>
              </div>
            </div>

            <!-- Current Time & Schedule Indicator -->
            <div class="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
              <div class="flex items-center gap-2.5">
                <span class="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></span>
                <div>
                  <h4 class="text-xs font-bold text-neutral-900">Horário Atual: 15:45 (Intervalo da Tarde)</h4>
                  <p class="text-[11px] text-neutral-600">Pico de demanda crítico. Adiantar fornadas no forno 1 e 2.</p>
                </div>
              </div>
              <span class="text-xs font-mono font-bold bg-neutral-900 text-amber-400 px-3 py-1 rounded-xl">
                Próximo pico: 18:30
              </span>
            </div>

            <!-- Clean Modern Redesigned Bar Chart (Filterable by Region: Todas, Apolo, Brum, Tiradentes) -->
            <div class="p-5 rounded-3xl bg-neutral-50 border border-neutral-100">
              <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 class="text-sm font-bold text-neutral-900">Previsão vs Demanda Confirmada por Unidade</h3>
                  <p class="text-xs text-neutral-400">Média histórica e pedidos confirmados por balcão (Apolo, Brum e Tiradentes).</p>
                </div>

                <!-- Region Switcher for Staff Metrics -->
                <div class="flex items-center bg-neutral-200/70 p-1 rounded-xl text-[11px] font-semibold gap-1">
                  ${[
                    { code: 'ALL', label: 'Todas' },
                    { code: 'APOLO', label: 'Apolo' },
                    { code: 'BRUM', label: 'Brum' },
                    { code: 'TIRADENTES', label: 'Tiradentes' }
                  ].map(r => `
                    <button onclick="state.staffMetricsLocation = '${r.code}'; renderStaffOnly();"
                      class="px-2.5 py-1 rounded-lg transition ${
                        state.staffMetricsLocation === r.code
                          ? 'bg-neutral-900 text-white font-bold shadow-sm'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }">
                      ${r.label}
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="flex items-center justify-end gap-4 text-xs mb-4">
                <span class="flex items-center gap-1.5 text-neutral-500">
                  <span class="w-3 h-3 rounded-md bg-neutral-200"></span> Média Prevista
                </span>
                <span class="flex items-center gap-1.5 text-neutral-900 font-bold">
                  <span class="w-3 h-3 rounded-md bg-amber-400"></span> Confirmado Hoje
                </span>
              </div>

              <!-- Sleek Chart Grid -->
              <div class="grid grid-cols-6 gap-3 sm:gap-6 items-end h-52 border-b border-neutral-200/60 pb-3">
                ${hourly_chart.map(slot => {
                  const locFilter = state.staffMetricsLocation || 'ALL';
                  const ratioMap = { ALL: 1, APOLO: 0.42, BRUM: 0.33, TIRADENTES: 0.25 };
                  const ratio = ratioMap[locFilter] || 1;
                  const maxVal = locFilter === 'ALL' ? 35 : 16;

                  const forecastVal = locFilter === 'ALL'
                    ? slot.forecast_orders
                    : Math.max(1, Math.round(slot.forecast_orders * ratio));

                  const liveLocOrders = orders.filter(
                    o => o.pickup_location === locFilter && o.time_slot === slot.time_slot
                  ).length;

                  const actualVal = locFilter === 'ALL'
                    ? slot.actual_orders
                    : Math.max(liveLocOrders, Math.round(slot.actual_orders * ratio));

                  const fPct = Math.min(100, Math.round((forecastVal / maxVal) * 100));
                  const aPct = Math.min(100, Math.round((actualVal / maxVal) * 100));
                  const isCurrent = slot.time_slot === '15:45';
                  return `
                    <div class="flex flex-col items-center h-full justify-end group relative">
                      ${isCurrent ? `
                        <span class="absolute -top-7 text-[9px] font-mono font-bold bg-amber-400 text-neutral-950 px-1.5 py-0.5 rounded-md shadow-sm">
                          AGORA
                        </span>
                      ` : ''}

                      <div class="text-[10px] font-mono text-neutral-500 mb-1">
                        <span class="font-bold text-neutral-900">${actualVal}</span> / ${forecastVal}
                      </div>

                      <div class="w-full flex items-end justify-center gap-1.5 h-36">
                        <div style="height: ${fPct}%" class="w-5 sm:w-8 bg-neutral-200/90 rounded-t-xl transition-all" title="Previsto: ${forecastVal}"></div>
                        <div style="height: ${aPct}%" class="w-5 sm:w-8 ${isCurrent ? 'bg-amber-400 ring-2 ring-amber-300' : 'bg-neutral-900'} rounded-t-xl transition-all shadow-sm" title="Confirmado: ${actualVal}"></div>
                      </div>

                      <span class="text-xs font-mono font-bold mt-2.5 ${isCurrent ? 'text-amber-600' : 'text-neutral-900'}">${slot.time_slot}</span>
                      <span class="text-[10px] text-neutral-400 text-center truncate max-w-full mt-0.5">${slot.label.split('·')[1] || ''}</span>
                    </div>
                  `;
                }).join('')}
              </div>

              <div class="mt-4 flex flex-wrap items-center justify-between text-xs text-neutral-500 gap-2">
                <span>Manhã: <strong>09:45 (28 previstos)</strong></span>
                <span>Tarde: <strong>15:45 (32 previstos)</strong></span>
                <span class="text-emerald-700 font-semibold">92% de assertividade na projeção</span>
              </div>
            </div>

          </div>
        ` : ''}

        <!-- SECTION 3: ESTOQUE & REPOSIÇÃO -->
        ${state.staffSection === 'inventory' ? `
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            <!-- Products List (Prioritized: lowest stock first) -->
            <div class="lg:col-span-7 space-y-2.5">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-500">Prioridade de Reposição (Menor Estoque Primeiro)</h3>
                <span class="text-[11px] text-neutral-400">Total: ${catalog.length} itens</span>
              </div>
              <div class="space-y-2 max-h-[480px] overflow-y-auto no-scrollbar pr-1">
                ${[...catalog].sort((a, b) => a.stock - b.stock).map(item => `
                  <div class="p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                    item.is_out_of_stock ? 'bg-neutral-50/70 border-neutral-200 opacity-60' : 'bg-white border-neutral-100 shadow-sm'
                  }">
                    <div class="flex items-center gap-3">
                      <img src="${item.image_url}" alt="${item.name}" class="w-12 h-12 rounded-xl object-cover border border-neutral-100 flex-shrink-0" />
                      <div>
                        <div class="flex items-center gap-2">
                          <p class="text-xs font-bold text-neutral-900 line-clamp-1">${item.name}</p>
                          ${item.is_out_of_stock ? `
                            <span class="text-[9px] font-mono bg-neutral-200 text-neutral-700 px-1.5 py-0.2 rounded font-semibold">Em Falta</span>
                          ` : item.is_low_stock ? `
                            <span class="text-[9px] font-mono bg-amber-500 text-white px-1.5 py-0.2 rounded font-semibold">Baixo</span>
                          ` : ''}
                        </div>
                        <p class="text-[11px] text-neutral-400">R$ ${item.price.toFixed(2).replace('.', ',')} · ${item.category}</p>
                      </div>
                    </div>

                    <div class="flex items-center gap-1.5">
                      <button onclick="handleUpdateStock(${item.id}, ${item.stock - 1})" class="w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-bold">-</button>
                      <span class="w-6 text-center font-mono text-xs font-bold">${item.stock}</span>
                      <button onclick="handleUpdateStock(${item.id}, ${item.stock + 1})" class="w-6 h-6 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-bold">+</button>
                      
                      <!-- Requisitar Estoque Button -->
                      <button onclick="handleRequestStock(${item.id}, 10)" 
                        class="px-2.5 py-1 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-[11px] font-bold text-amber-400 flex items-center gap-1 transition">
                        ${ICONS.box}
                        <span>Requisitar (+10)</span>
                      </button>
                      <button onclick="handleUpdateStock(${item.id}, 0)" class="px-2 py-1 rounded-lg bg-neutral-100 hover:bg-rose-100 hover:text-rose-700 text-[10px] font-medium text-neutral-500">Zerar</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Create Product Form with Ingredients -->
            <div class="lg:col-span-5 p-4 rounded-3xl bg-neutral-50 border border-neutral-100">
              <h4 class="text-xs font-bold uppercase tracking-wider text-neutral-900">Cadastrar Novo Item</h4>
              <p class="text-[11px] text-neutral-500 mt-0.5 mb-3">Disponibilize um novo lanche para os alunos.</p>

              <form onsubmit="handleCreateProduct(event)" class="space-y-2.5 text-xs">
                <div>
                  <label class="block font-semibold text-neutral-700 mb-1">Nome do Lanche</label>
                  <input name="name" required placeholder="Ex: Fatia de Torta Holandesa" 
                    class="w-full px-3 py-2 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:border-neutral-900" />
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block font-semibold text-neutral-700 mb-1">Categoria</label>
                    <select name="category" class="w-full px-2.5 py-2 rounded-xl border border-neutral-200 bg-white">
                      <option value="Salgados & Forno">Salgados & Forno</option>
                      <option value="Doces & Bolos">Doces & Bolos</option>
                      <option value="Bebidas">Bebidas</option>
                    </select>
                  </div>
                  <div>
                    <label class="block font-semibold text-neutral-700 mb-1">Foto Real</label>
                    <select name="image_url" class="w-full px-2.5 py-2 rounded-xl border border-neutral-200 bg-white font-mono text-[11px]">
                      <option value="/static/images/coxinha.jpg">Coxinha</option>
                      <option value="/static/images/risole.jpg">Risole</option>
                      <option value="/static/images/pao_de_queijo.jpg">Pão de Queijo</option>
                      <option value="/static/images/croissant.jpg">Croissant</option>
                      <option value="/static/images/bolo_chocolate.jpg">Bolo Chocolate</option>
                      <option value="/static/images/bolo_cenoura.jpg">Bolo Cenoura</option>
                      <option value="/static/images/bolo_red_velvet.jpg">Bolo Red Velvet</option>
                      <option value="/static/images/agua_mineral.jpg">Água Mineral</option>
                      <option value="/static/images/coca_zero.jpg">Coca Zero</option>
                      <option value="/static/images/suco_laranja.jpg">Suco Laranja</option>
                      <option value="/static/images/cafe_expresso.jpg">Café Expresso</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <div>
                    <label class="block font-semibold text-neutral-700 mb-1">Preço (R$)</label>
                    <input name="price" type="number" step="0.5" value="8.50" class="w-full px-2 py-2 rounded-xl border border-neutral-200 bg-white" />
                  </div>
                  <div>
                    <label class="block font-semibold text-neutral-700 mb-1">Preparo (m)</label>
                    <input name="prep_time" type="number" value="2" class="w-full px-2 py-2 rounded-xl border border-neutral-200 bg-white" />
                  </div>
                  <div>
                    <label class="block font-semibold text-neutral-700 mb-1">Estoque</label>
                    <input name="stock" type="number" value="15" class="w-full px-2 py-2 rounded-xl border border-neutral-200 bg-white" />
                  </div>
                </div>
                <div>
                  <label class="block font-semibold text-neutral-700 mb-1">Descrição</label>
                  <input name="description" placeholder="Ex: Massa leve com recheio cremoso..." class="w-full px-3 py-2 rounded-xl border border-neutral-200 bg-white" />
                </div>
                <div>
                  <label class="block font-semibold text-neutral-700 mb-1">Ingredientes</label>
                  <input name="ingredients" placeholder="Ex: Farinha de trigo, leite, manteiga, chocolate..." class="w-full px-3 py-2 rounded-xl border border-neutral-200 bg-white" />
                </div>
                <div>
                  <label class="block font-semibold text-neutral-700 mb-1">Selo</label>
                  <input name="badge" placeholder="Ex: Artesanal" class="w-full px-3 py-2 rounded-xl border border-neutral-200 bg-white" />
                </div>
                <button type="submit" class="w-full py-2.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-amber-400 text-xs font-bold transition shadow-sm">
                  Publicar Item
                </button>
              </form>
            </div>

          </div>
        ` : ''}

      </div>
    </div>
  `;
}

// Staff Order Card Helper (Compact & Responsive - Zero Horizontal Overflow)
function renderStaffOrderCard(order) {
  const isDelayed = order.is_delayed;
  const isReady = order.status === 'READY';
  const isQueued = order.status === 'QUEUED';

  return `
    <div class="p-2.5 rounded-xl border transition-all min-w-0 overflow-hidden ${
      isDelayed ? 'bg-rose-50/70 border-rose-200' : 'bg-white border-neutral-100 shadow-sm'
    }">
      <div class="flex items-center justify-between gap-1 min-w-0">
        <span class="font-mono text-[11px] font-bold text-neutral-900 truncate">#${order.ticket_code}</span>
        <span class="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded shrink-0 ${
          isDelayed ? 'bg-rose-600 text-white font-bold' : 'bg-neutral-100 text-neutral-600'
        }">
          ${isDelayed ? `+${order.overdue_minutes}m atraso` : `${order.elapsed_minutes}m`}
        </span>
      </div>

      <div class="mt-1 min-w-0">
        <p class="text-[11px] font-bold text-neutral-900 truncate">${order.student_name}</p>
        <p class="text-[10px] text-neutral-400 truncate">
          ${order.location_name} · ${order.time_slot}${order.call_count > 0 ? ` · <strong class="text-amber-600">${order.call_count}x chamado</strong>` : ''}
        </p>
      </div>

      <div class="mt-1.5 pt-1.5 border-t border-neutral-100 text-[10px] text-neutral-600 space-y-0.5 min-w-0">
        ${order.items.map(i => `<div class="truncate" title="${i.quantity}x ${i.product_name}">${i.quantity}x ${i.product_name}</div>`).join('')}
      </div>

      <!-- Action Buttons -->
      <div class="mt-2 grid ${isReady ? 'grid-cols-2' : 'grid-cols-1'} gap-1.5 min-w-0">
        ${isReady ? `
          <button onclick="handleReNotifyOrder(${order.id})" 
            class="py-1.5 px-1.5 rounded-lg text-[10px] font-bold bg-amber-400 hover:bg-amber-300 text-neutral-950 transition text-center truncate"
            title="Chamar novamente no balcão">
            Reavisar
          </button>

          <button onclick="handleAdvanceOrder(${order.id})" 
            class="py-1.5 px-1.5 rounded-lg text-[10px] font-bold bg-neutral-900 text-white hover:bg-neutral-800 transition text-center truncate"
            title="Confirmar entrega do lanche">
            Entregue
          </button>
        ` : isQueued ? `
          <button onclick="handleAdvanceOrder(${order.id})" 
            class="w-full py-1.5 px-2 rounded-lg text-[10px] font-bold bg-neutral-900 text-white hover:bg-neutral-800 transition text-center truncate">
            Iniciar Preparo →
          </button>
        ` : `
          <button onclick="handleAdvanceOrder(${order.id})" 
            class="w-full py-1.5 px-2 rounded-lg text-[10px] font-bold bg-amber-400 hover:bg-amber-300 text-neutral-950 transition text-center truncate">
            Chamar Aluno (Pronto)
          </button>
        `}
      </div>
    </div>
  `;
}

// Staff Mobile View
function renderStaffMobileView() {
  const { dashboard, catalog } = state.data;
  const { summary, orders } = dashboard;

  const queuedOrders = orders.filter(o => o.status === 'QUEUED');
  const preparingOrders = orders.filter(o => o.status === 'PREPARING');
  const readyOrders = orders.filter(o => o.status === 'READY');

  return `
    <div class="max-w-md mx-auto bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden flex flex-col relative">
      <!-- In-App Scoped Loading Overlay (Confined strictly to Mobile Staff App) -->
      ${state.staffLoading ? `
        <div class="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-30 flex items-center justify-center fade-in rounded-3xl">
          <div class="bg-neutral-900 text-white rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2.5 border border-neutral-800">
            <div class="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
            <span class="text-xs font-semibold text-neutral-100">${state.staffLoading}</span>
          </div>
        </div>
      ` : ''}

      <div class="p-4 border-b border-neutral-800 bg-neutral-900 text-white flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <img src="/static/logo.svg" alt="PitStop" class="w-8 h-8 rounded-xl border border-neutral-800 shadow-sm object-contain shrink-0" />
          <div>
            ${renderPitStopBrand({ size: 'sm', extra: 'Balcão' })}
            <p class="text-[10px] text-neutral-400">Visão Celular Operacional</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full ${summary.delayed_orders_count > 0 ? 'bg-rose-500' : 'bg-emerald-400'}"></span>
          <span class="text-[10px] font-mono font-bold">${summary.customers_in_queue} na fila</span>
        </div>
      </div>

      <!-- Mobile Tabs -->
      <nav class="flex border-b border-neutral-100 text-xs font-semibold bg-neutral-50/70 p-1 gap-1">
        <button onclick="switchStaffMobileTab('queue');" 
          class="flex-1 py-2 rounded-xl transition text-center ${state.staffMobileTab === 'queue' ? 'bg-white text-neutral-900 shadow-sm font-bold' : 'text-neutral-500'}">
          Fila (${queuedOrders.length})
        </button>
        <button onclick="switchStaffMobileTab('preparing');" 
          class="flex-1 py-2 rounded-xl transition text-center ${state.staffMobileTab === 'preparing' ? 'bg-white text-neutral-900 shadow-sm font-bold' : 'text-neutral-500'}">
          Em Preparo (${preparingOrders.length})
        </button>
        <button onclick="switchStaffMobileTab('ready');" 
          class="flex-1 py-2 rounded-xl transition text-center ${state.staffMobileTab === 'ready' ? 'bg-amber-400 text-neutral-900 shadow-sm font-bold' : 'text-neutral-500'}">
          Balcão (${readyOrders.length})
        </button>
        <button onclick="switchStaffMobileTab('inventory');" 
          class="flex-1 py-2 rounded-xl transition text-center ${state.staffMobileTab === 'inventory' ? 'bg-white text-neutral-900 shadow-sm font-bold' : 'text-neutral-500'}">
          Estoque
        </button>
      </nav>

      <!-- Content -->
      <div class="p-4 flex-1 min-h-[480px] max-h-[600px] overflow-y-auto no-scrollbar">
        ${state.staffMobileTab === 'queue' ? `
          <div class="space-y-3">
            ${queuedOrders.length === 0 ? `<p class="text-xs text-neutral-400 py-16 text-center">Nenhum pedido na fila.</p>` : queuedOrders.map(o => renderStaffOrderCard(o)).join('')}
          </div>
        ` : state.staffMobileTab === 'preparing' ? `
          <div class="space-y-3">
            ${preparingOrders.length === 0 ? `<p class="text-xs text-neutral-400 py-16 text-center">Nenhum lanche em preparo.</p>` : preparingOrders.map(o => renderStaffOrderCard(o)).join('')}
          </div>
        ` : state.staffMobileTab === 'ready' ? `
          <div class="space-y-3">
            ${readyOrders.length === 0 ? `<p class="text-xs text-neutral-400 py-16 text-center">Nenhum pedido no balcão.</p>` : readyOrders.map(o => renderStaffOrderCard(o)).join('')}
          </div>
        ` : `
          <div class="space-y-2.5">
            <div class="flex items-center justify-between mb-1">
              <span class="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Prioridade de Estoque</span>
              <span class="text-[10px] font-mono text-neutral-400">${catalog.filter(p => p.stock <= 5).length} em atenção</span>
            </div>
            ${[...catalog].sort((a, b) => a.stock - b.stock).map(item => `
              <div class="p-3 rounded-2xl border ${item.stock === 0 ? 'border-neutral-200 bg-neutral-50/70 opacity-60' : item.stock <= 5 ? 'border-amber-200 bg-amber-50/40 shadow-sm' : 'border-neutral-100 bg-white shadow-sm'} flex items-center justify-between gap-2">
                <div class="flex items-center gap-2.5">
                  <img src="${item.image_url}" alt="${item.name}" class="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                  <div>
                    <div class="flex items-center gap-1.5">
                      <p class="text-xs font-bold text-neutral-900 line-clamp-1">${item.name}</p>
                      ${item.stock === 0 ? `<span class="text-[9px] font-mono bg-neutral-200 text-neutral-700 px-1 rounded font-semibold">Falta</span>` : item.stock <= 5 ? `<span class="text-[9px] font-mono bg-amber-500 text-white px-1 rounded font-bold">Baixo</span>` : ''}
                    </div>
                    <p class="text-[10px] text-neutral-400 font-mono">${item.stock} un. disponíveis</p>
                  </div>
                </div>
                <button onclick="handleRequestStock(${item.id}, 10)" 
                  class="px-2.5 py-1.5 rounded-xl bg-neutral-900 text-amber-400 text-[11px] font-bold hover:bg-neutral-800 transition flex items-center gap-1">
                  ${ICONS.box}
                  <span>+10 Reposição</span>
                </button>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

// Modo TV / Painel de Senhas (Sem menção a marcas externas)
function renderTvMode() {
  const { dashboard } = state.data;
  const { orders } = dashboard;

  const preparingOrders = orders.filter(o => o.status === 'PREPARING' || o.status === 'QUEUED');
  const readyOrders = orders.filter(o => o.status === 'READY');
  const calledOrders = readyOrders.filter(o => o.call_count > 0);

  return `
    <div class="bg-neutral-950 text-white min-h-[92vh] rounded-3xl p-6 sm:p-10 flex flex-col justify-between border border-neutral-800 shadow-2xl relative overflow-hidden">
      
      <!-- Top TV Header -->
      <header class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div class="flex items-center gap-4">
          <img src="/static/logo.svg" alt="PitStop" class="w-12 h-12 rounded-2xl border border-neutral-800 shadow-lg object-contain shrink-0" />
          <div>
            <div class="flex items-center gap-3">
              ${renderPitStopBrand({ size: '2xl' })}
            </div>
            <p class="text-xs text-neutral-400 mt-0.5">Painel de Senhas · Balcões Apolo, Brum e Tiradentes</p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="text-right">
            <p class="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Horário</p>
            <p id="tv-live-clock" class="text-2xl sm:text-3xl font-mono font-extrabold text-brand tracking-widest">${state.tvClock}</p>
          </div>
          <button onclick="state.viewMode = 'split'; render();" 
            class="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-300 transition">
            Voltar ao Painel
          </button>
        </div>
      </header>

      <!-- Flashing Call Banner -->
      ${calledOrders.length > 0 ? `
        <div class="my-4 p-4 rounded-2xl bg-brand text-neutral-950 flex items-center justify-between shadow-lg tv-pulse">
          <div class="flex items-center gap-3">
            <span class="p-2 rounded-xl bg-neutral-950 text-brand">${ICONS.bellRing}</span>
            <div>
              <p class="text-xs font-extrabold uppercase tracking-wider">CHAMADA NO BALCÃO DE RETIRADA</p>
              <p class="text-sm font-bold">
                ${calledOrders.map(o => `Senha #${o.ticket_code} (${o.student_name} · Balcão ${o.location_name})`).join('  |  ')}
              </p>
            </div>
          </div>
          <span class="text-xs font-mono font-extrabold bg-neutral-950 text-white px-3 py-1 rounded-xl">FAVOR RETIRAR</span>
        </div>
      ` : ''}

      <!-- TV Columns -->
      <main class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 flex-1">
        
        <!-- EM PREPARO -->
        <div class="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col">
          <div class="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-amber-400"></span>
              <h2 class="text-lg font-extrabold tracking-wider text-neutral-200 uppercase">EM PREPARO</h2>
            </div>
            <span class="text-xs font-mono text-neutral-400">${preparingOrders.length} pedido(s)</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto no-scrollbar max-h-[460px]">
            ${preparingOrders.length === 0 ? `
              <div class="col-span-full py-20 text-center text-neutral-500 text-sm">
                Nenhum pedido em preparo.
              </div>
            ` : preparingOrders.map(o => `
              <div class="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-center flex flex-col justify-center items-center">
                <span class="text-2xl sm:text-3xl font-mono font-extrabold text-neutral-100">#${o.ticket_code.replace('PS-', '')}</span>
                <span class="text-xs text-neutral-400 mt-1 truncate max-w-full font-medium">${o.student_name.split(' ')[0]}</span>
                <span class="text-[9px] font-mono text-neutral-500 mt-0.5">${o.location_name}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- PRONTO PARA RETIRADA -->
        <div class="rounded-3xl border-2 border-brand/80 bg-neutral-900/90 p-6 flex flex-col relative tv-glow">
          <div class="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
            <div class="flex items-center gap-2.5">
              <span class="w-3.5 h-3.5 rounded-full bg-brand blink-dot"></span>
              <h2 class="text-lg font-extrabold tracking-wider text-brand uppercase">PRONTO PARA RETIRADA</h2>
            </div>
            <span class="text-xs font-mono text-brand font-bold">${readyOrders.length} pronto(s)</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5 overflow-y-auto no-scrollbar max-h-[460px]">
            ${readyOrders.length === 0 ? `
              <div class="col-span-full py-20 text-center text-neutral-500 text-sm">
                Aguardando pedidos finalizados...
              </div>
            ` : readyOrders.map(o => `
              <div class="p-4 rounded-2xl bg-brand text-neutral-950 font-extrabold text-center flex flex-col justify-center items-center shadow-md">
                <span class="text-3xl sm:text-4xl font-mono font-black tracking-tight">#${o.ticket_code.replace('PS-', '')}</span>
                <span class="text-xs mt-1 truncate max-w-full font-bold">${o.student_name}</span>
                <span class="text-[10px] font-mono uppercase bg-neutral-950 text-brand px-2 py-0.5 rounded-md mt-1.5 font-bold">
                  Balcão ${o.location_name}
                </span>
              </div>
            `).join('')}
          </div>
        </div>

      </main>

      <!-- TV Footer -->
      <footer class="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-brand"></span>
          <span>Apresente a senha no balcão indicado.</span>
        </div>
        <span class="font-mono text-neutral-500">Cantina rápida sem fila · CESAR School</span>
      </footer>

    </div>
  `;
}

// --- MAIN RENDER DISPATCHER (Isolated DOM mounts so Student and Staff never reset each other) ---
function render() {
  const root = document.getElementById('app-root');
  if (!root || !state.data) return;

  // Rebuild outer layout skeleton only when viewMode changes or first mount
  if (state._mountedViewMode !== state.viewMode || !document.getElementById('top-bar-mount')) {
    state._mountedViewMode = state.viewMode;
    state._lastTopBarHtml = null;
    state._lastStudentHtml = null;
    state._lastStaffHtml = null;
    state._lastTvHtml = null;

    root.innerHTML = `
      <div id="top-bar-mount"></div>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        ${state.viewMode === 'tv' ? `
          <div id="tv-app-mount"></div>
        ` : state.viewMode === 'staff-mobile' ? `
          <div id="staff-app-mount"></div>
        ` : state.viewMode === 'split' ? `
          <div class="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
            <div id="student-app-mount" class="xl:col-span-5 min-w-0"></div>
            <div id="staff-app-mount" class="xl:col-span-7 min-w-0"></div>
          </div>
        ` : state.viewMode === 'student' ? `
          <div id="student-app-mount" class="max-w-xl mx-auto"></div>
        ` : `
          <div id="staff-app-mount"></div>
        `}
      </main>
    `;
  }

  // 1. Update Top Bar only if changed
  const topBarMount = document.getElementById('top-bar-mount');
  if (topBarMount) {
    const nextTopBarHtml = renderTopBar();
    if (state._lastTopBarHtml !== nextTopBarHtml) {
      state._lastTopBarHtml = nextTopBarHtml;
      topBarMount.innerHTML = nextTopBarHtml;
    }
  }

  // 2. Update Student App independently (untouched when Staff actions occur)
  renderStudentOnly();

  // 3. Update Staff App independently (untouched when Student actions occur)
  renderStaffOnly();

  // 4. Update TV Mode independently
  const tvMount = document.getElementById('tv-app-mount');
  if (tvMount) {
    const nextTvHtml = renderTvMode();
    if (state._lastTvHtml !== nextTvHtml) {
      state._lastTvHtml = nextTvHtml;
      tvMount.innerHTML = nextTvHtml;
    }
  }
}

// Scoped Student-Only DOM Updater (Never touches Staff DOM!)
function renderStudentOnly() {
  const studentMount = document.getElementById('student-app-mount');
  if (!studentMount || !state.data) return;
  const nextStudentHtml = renderStudentSection();
  if (state._lastStudentHtml !== nextStudentHtml) {
    // Preserve scroll position of inner scrollable container if present
    const scrollEl = studentMount.querySelector('.overflow-y-auto');
    const prevScroll = scrollEl ? scrollEl.scrollTop : 0;
    state._lastStudentHtml = nextStudentHtml;
    studentMount.innerHTML = nextStudentHtml;
    if (prevScroll > 0) {
      const newScrollEl = studentMount.querySelector('.overflow-y-auto');
      if (newScrollEl) newScrollEl.scrollTop = prevScroll;
    }
  }
}

// Scoped Staff-Only DOM Updater (Never touches Student DOM!)
function renderStaffOnly() {
  const staffMount = document.getElementById('staff-app-mount');
  if (!staffMount || !state.data) return;
  const nextStaffHtml = state.viewMode === 'staff-mobile' ? renderStaffMobileView() : renderStaffSection();
  if (state._lastStaffHtml !== nextStaffHtml) {
    const scrollEl = staffMount.querySelector('.overflow-y-auto');
    const prevScroll = scrollEl ? scrollEl.scrollTop : 0;
    state._lastStaffHtml = nextStaffHtml;
    staffMount.innerHTML = nextStaffHtml;
    if (prevScroll > 0) {
      const newScrollEl = staffMount.querySelector('.overflow-y-auto');
      if (newScrollEl) newScrollEl.scrollTop = prevScroll;
    }
  }
}

// Close Product Modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.selectedProductModal) {
    closeProductModal();
  }
});

// --- BOOTSTRAP ---
window.addEventListener('DOMContentLoaded', async () => {
  await fetchServerState();
  render();
  startPoller();
});
