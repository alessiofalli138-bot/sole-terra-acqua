const SHEET_1 = "assets/catalogo-vettoriali-1.webp";
const SHEET_2 = "assets/catalogo-vettoriali-2.webp";
const SHEET_EXTRA = "assets/catalogo-vettoriali-extra.webp";
const WHATSAPP_NUMBER = "393202732892";
const ADMIN_PIN = "2892";
const ADMIN_SESSION_KEY = "sole-terra-acqua-admin-unlocked";
const OWNER_QUERY = "a";
const OWNER_VALUE = "1";
const ORDERS_STORAGE_KEY = "sole-terra-acqua-orders";
const CUSTOMERS_STORAGE_KEY = "sole-terra-acqua-customers";
const POINTS_FOR_REWARD = 10;
const PRESERVES_STORAGE_KEY = "sole-terra-acqua-conserve";
const DEFAULT_PRESERVES = [
  { id: "passata", name: "Passata di pomodoro", enabled: true },
  { id: "melanzane-olio", name: "Melanzane sott'olio", enabled: true },
  { id: "peperoni-olio", name: "Peperoni sott'olio", enabled: true },
  { id: "confettura-fichi", name: "Confettura di fichi", enabled: true },
  { id: "zucchine-agrodolce", name: "Zucchine in agrodolce", enabled: false }
];

const PRODUCTS = [
  { id: "peperoni", name: "Peperoni", weight: "500 g", emoji: "🫑", sheet: SHEET_1, cols: 5, rows: 4, x: 0, y: 0, enabled: true },
  { id: "melanzane", name: "Melanzane", weight: "500 g", emoji: "🍆", sheet: SHEET_1, cols: 5, rows: 4, x: 1, y: 0, enabled: true },
  { id: "pomodori", name: "Pomodori", weight: "500 g", emoji: "🍅", sheet: SHEET_1, cols: 5, rows: 4, x: 2, y: 0, enabled: true },
  { id: "lattuga-romana", name: "Lattuga romana", weight: "1 cespo", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 3, y: 0, enabled: true },
  { id: "lattuga-canasta", name: "Lattuga canasta", weight: "1 cespo", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 4, y: 0, enabled: true },
  { id: "lattuga-gentilina", name: "Lattuga gentilina", weight: "1 cespo", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 0, y: 1, enabled: true },
  { id: "lattuga-iceberg", name: "Lattuga iceberg", weight: "1 cespo", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 1, y: 1, enabled: true },
  { id: "cicoria", name: "Cicoria", weight: "500 g", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 2, y: 1, enabled: true },
  { id: "bieta-colorata", name: "Bieta colorata", weight: "500 g", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 3, y: 1, enabled: true },
  { id: "bieta-verde", name: "Bieta verde", weight: "500 g", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 4, y: 1, enabled: true },
  { id: "cocomero", name: "Cocomero", weight: "1 pz", emoji: "🍉", sheet: SHEET_1, cols: 5, rows: 4, x: 0, y: 2, enabled: true },
  { id: "melone", name: "Melone", weight: "1 pz", emoji: "🍈", sheet: SHEET_1, cols: 5, rows: 4, x: 1, y: 2, enabled: true },
  { id: "broccolo-romanesco", name: "Broccolo romanesco", weight: "1 pz", emoji: "🥦", sheet: SHEET_1, cols: 5, rows: 4, x: 2, y: 2, enabled: true },
  { id: "broccolo-siciliano", name: "Broccolo siciliano", weight: "1 pz", emoji: "🥦", sheet: SHEET_1, cols: 5, rows: 4, x: 3, y: 2, enabled: true },
  { id: "cavolfiore", name: "Cavolfiore", weight: "1 pz", emoji: "🥦", sheet: SHEET_1, cols: 5, rows: 4, x: 4, y: 2, enabled: true },
  { id: "cavolo-cappuccio", name: "Cavolo cappuccio", weight: "1 pz", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 0, y: 3, enabled: true },
  { id: "cavolo-cappuccio-viola", name: "Cavolo cappuccio viola", weight: "1 pz", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 1, y: 3, enabled: true },
  { id: "verza", name: "Verza", weight: "1 pz", emoji: "🥬", sheet: SHEET_1, cols: 5, rows: 4, x: 2, y: 3, enabled: true },
  { id: "cipolle-tropea", name: "Cipolle di Tropea", weight: "500 g", emoji: "🧅", sheet: SHEET_1, cols: 5, rows: 4, x: 3, y: 3, enabled: true },
  { id: "cipolle-bianche", name: "Cipolle bianche", weight: "500 g", emoji: "🧅", sheet: SHEET_1, cols: 5, rows: 4, x: 4, y: 3, enabled: true },
  { id: "aglio", name: "Mazzo di aglio", weight: "1 mazzo", emoji: "🧄", sheet: SHEET_2, cols: 5, rows: 3, x: 0, y: 0, enabled: true },
  { id: "odori-misti", name: "Odori misti", weight: "1 mazzo", emoji: "🌿", sheet: SHEET_2, cols: 5, rows: 3, x: 1, y: 0, enabled: true },
  { id: "zucca", name: "Zucca", weight: "1 kg", emoji: "🎃", sheet: SHEET_2, cols: 5, rows: 3, x: 2, y: 0, enabled: true },
  { id: "carciofi", name: "Carciofi", weight: "3 pz", emoji: "🌿", sheet: SHEET_2, cols: 5, rows: 3, x: 3, y: 0, enabled: true },
  { id: "asparagi", name: "Asparagi", weight: "1 mazzo", emoji: "🌿", sheet: SHEET_2, cols: 5, rows: 3, x: 4, y: 0, enabled: true },
  { id: "patate", name: "Patate", weight: "1 kg", emoji: "🥔", sheet: SHEET_2, cols: 5, rows: 3, x: 0, y: 1, enabled: true },
  { id: "zucchine-romanesche", name: "Zucchine romanesche", weight: "500 g", emoji: "🥒", sheet: SHEET_EXTRA, cols: 2, rows: 1, x: 0, y: 0, enabled: true },
  { id: "cetrioli", name: "Cetrioli", weight: "500 g", emoji: "🥒", sheet: SHEET_2, cols: 5, rows: 3, x: 2, y: 1, enabled: true },
  { id: "fiori-zucca", name: "Fiori di zucca", weight: "10 pz", emoji: "🌼", sheet: SHEET_2, cols: 5, rows: 3, x: 3, y: 1, enabled: true },
  { id: "peperoncini", name: "Peperoncini", weight: "200 g", emoji: "🌶️", sheet: SHEET_2, cols: 5, rows: 3, x: 4, y: 1, enabled: true },
  { id: "scarola-riccia", name: "Scarola riccia", weight: "1 cespo", emoji: "🥬", sheet: SHEET_2, cols: 5, rows: 3, x: 0, y: 2, enabled: true },
  { id: "scarola-liscia", name: "Scarola liscia", weight: "1 cespo", emoji: "🥬", sheet: SHEET_2, cols: 5, rows: 3, x: 1, y: 2, enabled: true },
  { id: "cavolo-nero", name: "Cavolo nero", weight: "1 mazzo", emoji: "🥬", sheet: SHEET_2, cols: 5, rows: 3, x: 2, y: 2, enabled: true },
  { id: "friggitelli", name: "Peperoni friggitelli", weight: "500 g", emoji: "🫑", sheet: SHEET_EXTRA, cols: 2, rows: 1, x: 1, y: 0, enabled: true }
];

const BOXES = {
  piccola: { label: "PICCOLA", price: 12, min: 3, included: 5 },
  media: { label: "MEDIA", price: 14, min: 4, included: 6 },
  grande: { label: "GRANDE", price: 17, min: 5, included: 8 }
};

const CRATE_IMAGES = {
  piccola: "assets/cassetta-piccola-nuova.webp",
  media: "assets/cassetta-media-nuova.webp",
  grande: "assets/cassetta-grande-nuova.webp"
};

const CRATE_SLOTS = [
  { left: 26, top: 43, w: 34, h: 39, r: -10 },
  { left: 41, top: 38, w: 35, h: 40, r: 8 },
  { left: 57, top: 39, w: 35, h: 40, r: -6 },
  { left: 72, top: 44, w: 34, h: 39, r: 10 },
  { left: 31, top: 55, w: 36, h: 41, r: 7 },
  { left: 48, top: 53, w: 37, h: 42, r: -8 },
  { left: 65, top: 55, w: 36, h: 41, r: 6 },
  { left: 39, top: 49, w: 35, h: 40, r: -5 },
  { left: 57, top: 48, w: 36, h: 41, r: 9 },
  { left: 74, top: 50, w: 34, h: 39, r: -9 },
  { left: 50, top: 29, w: 34, h: 39, r: -3 },
  { left: 63, top: 31, w: 33, h: 38, r: 7 },
  { left: 35, top: 34, w: 33, h: 38, r: -8 },
  { left: 44, top: 45, w: 34, h: 39, r: 5 },
  { left: 63, top: 44, w: 34, h: 39, r: -6 },
  { left: 52, top: 46, w: 38, h: 43, r: 3 }
];

const DEMO_ORDERS = [
  { id: "R0018", time: "14:30", name: "Giulia Rossi", area: "Viterbo", address: "Via Marconi 18", box: "Media", total: 14, source: "Instagram", status: "Pronto" },
  { id: "R0017", time: "14:30", name: "Marco Bianchi", area: "Viterbo", address: "Via del Pilastro 7", box: "Grande", total: 19, source: "Amici", status: "Pronto" },
  { id: "R0016", time: "15:10", name: "Laura Conti", area: "Quercia", address: "Strada Querciaiolo 4", box: "Piccola", total: 14.5, source: "Facebook", status: "Preparazione" },
  { id: "R0015", time: "15:50", name: "Paolo Ricci", area: "Bagnaia", address: "Piazza XX Settembre 2", box: "Media", total: 16.5, source: "Già cliente", status: "Consegnato" },
  { id: "R0014", time: "16:30", name: "Sara De Angelis", area: "San Martino", address: "Via Valle 21", box: "Grande", total: 21.5, source: "Instagram", status: "Preparazione" },
  { id: "R0013", time: "17:10", name: "Andrea Neri", area: "Vitorchiano", address: "Via Manzoni 12", box: "Media", total: 16, source: "Amici", status: "Confermato" },
  { id: "R0012", time: "17:50", name: "Elena Moretti", area: "Vetralla", address: "Via Cassia 33", box: "Grande", total: 19.5, source: "Facebook", status: "Confermato" }
];

const state = {
  view: "home",
  step: 1,
  box: "media",
  quantities: Object.fromEntries(PRODUCTS.map(p => [p.id, 0])),
  selectionOrder: [],
  deliveryDays: [],
  deliveryFee: 0,
  selectedDate: "",
  selectedTime: "",
  orderData: {},
  orders: [...DEMO_ORDERS],
  customers: {},
  orderFilter: "all",
  preserves: [],
  optimized: false
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const money = value => new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
const quotaCount = () => Object.values(state.quantities).reduce((sum, value) => sum + value, 0);
const boxData = () => BOXES[state.box];
const extraCost = () => Math.max(0, quotaCount() - boxData().included) * 2;
const total = () => boxData().price + extraCost() + state.deliveryFee;

function normalizePhone(value = "") {
  const digits = String(value).replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("00")) return digits.slice(2);
  if (digits.startsWith("39")) return digits;
  return `39${digits}`;
}

function customerKeyFromOrder(order) {
  const phone = normalizePhone(order.phone || "");
  if (phone) return phone;
  return `demo-${String(order.name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function customerDisplayPhone(value = "") {
  const phone = normalizePhone(value);
  if (!phone) return "Telefono mancante";
  return phone.startsWith("39") ? `+${phone.slice(0, 2)} ${phone.slice(2)}` : `+${phone}`;
}

function getOrderItems() {
  const grouped = new Map();
  state.selectionOrder.forEach(id => {
    const product = PRODUCTS.find(item => item.id === id);
    if (!product) return;
    const current = grouped.get(id) || { id, name: product.name, weight: product.weight, quantity: 0 };
    current.quantity++;
    grouped.set(id, current);
  });
  PRODUCTS.forEach(product => {
    if (state.quantities[product.id] > 0 && !grouped.has(product.id)) {
      grouped.set(product.id, { id: product.id, name: product.name, weight: product.weight, quantity: state.quantities[product.id] });
    }
  });
  return [...grouped.values()];
}

function seedMissingOrderData() {
  state.orders.forEach((order, index) => {
    if (!order.phone) order.phone = `333101${String(index + 1).padStart(4, "0")}`;
    if (!order.date) order.date = state.deliveryDays[0] || new Date().toISOString().slice(0, 10);
    if (!order.items) order.items = [];
    if (order.status === "Consegnato") order.loyaltyCredited = true;
  });
}

function saveBusinessData() {
  try {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(state.orders));
    localStorage.setItem(CUSTOMERS_STORAGE_KEY, JSON.stringify(state.customers));
  } catch (_) {
    showToast("Memoria piena: alcuni dati potrebbero non essere salvati.");
  }
}

function upsertCustomerFromOrder(order, addPoint = false) {
  const key = customerKeyFromOrder(order);
  const existing = state.customers[key] || {
    id: key,
    name: order.name,
    phone: order.phone || "",
    points: 0,
    orders: 0,
    rewardsEarned: 0,
    rewardsUsed: 0,
    lastOrderId: "",
    lastDelivery: ""
  };
  existing.name = order.name || existing.name;
  existing.phone = order.phone || existing.phone;
  existing.orders = Math.max(existing.orders || 0, state.orders.filter(item => customerKeyFromOrder(item) === key && item.status === "Consegnato").length);
  existing.lastOrderId = order.id || existing.lastOrderId;
  existing.lastDelivery = order.date || existing.lastDelivery;
  if (addPoint) {
    existing.points = (existing.points || 0) + 1;
    if (existing.points % POINTS_FOR_REWARD === 0) {
      existing.rewardsEarned = (existing.rewardsEarned || 0) + 1;
    }
  }
  state.customers[key] = existing;
  return existing;
}

function rebuildCustomersFromOrders() {
  const savedCustomers = { ...state.customers };
  state.customers = {};
  state.orders.forEach(order => {
    const key = customerKeyFromOrder(order);
    if (savedCustomers[key]) state.customers[key] = savedCustomers[key];
    if (order.status === "Consegnato") upsertCustomerFromOrder(order, Boolean(order.loyaltyCredited && !savedCustomers[key]));
  });
}

function rewardStatus(customer) {
  const available = Math.max(0, customer.rewardsEarned || 0) - Math.max(0, customer.rewardsUsed || 0);
  if (available > 0) return `${available} omaggio da consegnare`;
  const missing = POINTS_FOR_REWARD - ((customer.points || 0) % POINTS_FOR_REWARD);
  return missing === 1 ? "1 consegna all'omaggio" : `${missing} consegne all'omaggio`;
}

function loadPreserves() {
  try {
    const saved = JSON.parse(localStorage.getItem(PRESERVES_STORAGE_KEY));
    if (Array.isArray(saved) && saved.length) {
      state.preserves = saved
        .filter(item => item && typeof item.name === "string")
        .map(item => ({ id: item.id || `c${Math.random().toString(36).slice(2)}`, name: item.name, enabled: item.enabled !== false }));
      return;
    }
  } catch (_) {}
  state.preserves = DEFAULT_PRESERVES.map(item => ({ ...item }));
}

function savePreserves() {
  try {
    localStorage.setItem(PRESERVES_STORAGE_KEY, JSON.stringify(state.preserves));
  } catch (_) {
    showToast("Memoria piena: l'elenco conserve potrebbe non essere salvato.");
  }
}

function availablePreserves() {
  return state.preserves.filter(item => item.enabled !== false && item.name.trim());
}

function encodeForUrl(data) {
  const json = JSON.stringify(data);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeFromUrl(payload = "") {
  try {
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch (_) {
    return null;
  }
}

function compactOrderForLink(order) {
  return [
    order.id || "",
    order.date || "",
    order.time || "",
    order.deliveryWindow || "",
    order.name || "",
    normalizePhone(order.phone || ""),
    order.address || "",
    order.area || "",
    order.box || "",
    Number(order.total || 0),
    order.source || ""
  ];
}

function expandImportedOrder(data) {
  if (!Array.isArray(data)) return data;
  const [id, date, time, deliveryWindow, name, phone, address, area, box, total, source] = data;
  return {
    id,
    date,
    time,
    deliveryWindow,
    name,
    phone,
    address,
    area,
    box,
    total: Number(total || 0),
    source,
    status: "Confermato",
    items: [],
    notes: "",
    loyaltyCredited: false
  };
}

function ownerDashboardUrl(hash = "dashboard") {
  return `${window.location.origin}${window.location.pathname}?${OWNER_QUERY}=${OWNER_VALUE}#${hash}`;
}

function dashboardImportUrl(order) {
  const payload = encodeForUrl(compactOrderForLink(order));
  return ownerDashboardUrl(`o=${payload}`);
}

function importOrderFromHash() {
  const match = window.location.hash.match(/(?:import-order|o)=([^&]+)/);
  if (!match) return false;
  const imported = expandImportedOrder(decodeFromUrl(match[1]));
  if (!imported?.id || !imported?.name) {
    showToast("Link ordine non valido.");
    return false;
  }
  const order = {
    ...imported,
    status: imported.status || "Confermato",
    loyaltyCredited: Boolean(imported.loyaltyCredited)
  };
  seedMissingOrderData();
  const exists = state.orders.some(item => item.id === order.id);
  if (!exists) {
    state.orders.unshift(order);
    saveBusinessData();
    showToast(`Ordine ${order.id} importato nella dashboard.`);
  } else {
    showToast(`Ordine ${order.id} già presente in dashboard.`);
  }
  history.replaceState(null, "", `${window.location.pathname}?${OWNER_QUERY}=${OWNER_VALUE}#dashboard`);
  navigate("dashboard");
  return true;
}

function vectorMetrics(product) {
  const positionX = product.cols > 1 ? product.x * 100 / (product.cols - 1) : 0;
  const positionY = product.rows > 1 ? product.y * 100 / (product.rows - 1) : 0;
  return {
    size: `${product.cols * 100}% ${product.rows * 100}%`,
    position: `${positionX}% ${positionY}%`
  };
}

function productVisualStyle(product, useCustomerPhoto = true) {
  if (useCustomerPhoto && product.customImage) {
    return `background-image:url('${product.customImage}');background-size:cover;background-position:center`;
  }
  const vector = vectorMetrics(product);
  return `background-image:url('${product.sheet}');background-size:${vector.size};background-position:${vector.position}`;
}

function vectorCustomProperties(product) {
  const vector = vectorMetrics(product);
  return `--vector-sheet:url('${product.sheet}');--vector-size:${vector.size};--vector-position:${vector.position}`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function openMenu(open) {
  $("#sideMenu").classList.toggle("open", open);
  $("#menuBackdrop").classList.toggle("open", open);
  $("#sideMenu").setAttribute("aria-hidden", String(!open));
  $("#menuButton").setAttribute("aria-expanded", String(open));
}

function isDashboardUnlocked() {
  try { return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true"; }
  catch (_) { return false; }
}

function isOwnerRoute() {
  const params = new URLSearchParams(window.location.search);
  return params.get(OWNER_QUERY) === OWNER_VALUE || window.location.hash.startsWith("#o=") || isDashboardUnlocked();
}

function showDashboardGate() {
  const unlocked = isDashboardUnlocked();
  const dashboard = $("#dashboardView");
  const lock = $("#dashboardLock");
  dashboard.classList.toggle("locked", !unlocked);
  if (lock) lock.hidden = unlocked;
  if (!unlocked) {
    requestAnimationFrame(() => $("#adminPinInput")?.focus());
  }
  return unlocked;
}

function unlockDashboard() {
  const input = $("#adminPinInput");
  const error = $("#adminPinError");
  const value = input?.value.trim() || "";
  if (value !== ADMIN_PIN) {
    if (error) error.textContent = "PIN non corretto.";
    input?.classList.add("invalid");
    showToast("PIN area azienda non corretto.");
    return;
  }
  try { sessionStorage.setItem(ADMIN_SESSION_KEY, "true"); } catch (_) {}
  if (error) error.textContent = "";
  input.value = "";
  showDashboardGate();
  renderDashboard();
  showToast("Area azienda sbloccata.");
}

function lockDashboard() {
  try { sessionStorage.removeItem(ADMIN_SESSION_KEY); } catch (_) {}
  showDashboardGate();
  showToast("Area azienda bloccata.");
}

function navigate(view, anchor) {
  if (view === "dashboard" && !isOwnerRoute()) {
    view = "home";
    anchor = null;
    showToast("Area azienda riservata.");
  }
  state.view = view;
  $$(".view").forEach(el => el.classList.toggle("active", el.dataset.view === view));
  $$(".desktop-nav a").forEach(el => el.classList.toggle("active", el.dataset.viewLink === view));
  $("#mobileBasketBar").style.display = view === "builder" && window.innerWidth <= 980 ? "flex" : "";
  openMenu(false);
  requestAnimationFrame(() => {
    if (anchor && $(`#${anchor}`)) $(`#${anchor}`).scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
  if (view === "dashboard" && showDashboardGate()) renderDashboard();
  aggiornaCassettaFluttuante();
  if (view === "builder") {
    requestAnimationFrame(() => dropCrates());
  }
}

function dropCrates() {
  ["summaryCrateVisual", "liveCrateVisual"].forEach(id => {
    const crate = $(`#${id}`);
    if (!crate) return;
    crate.classList.remove("crate-drop");
    void crate.offsetWidth;
    crate.classList.add("crate-drop");
  });
}

function applyCrateVisual(crate) {
  if (!crate) return;
  const image = CRATE_IMAGES[state.box] || CRATE_IMAGES.media;
  crate.classList.remove("size-piccola", "size-media", "size-grande");
  crate.classList.add(`size-${state.box}`);
  crate.style.setProperty("--crate-image", `url("${image}")`);
  const img = $(".realistic-crate", crate);
  if (img && !img.src.endsWith(image)) img.src = image;
}

// Sul telefono, scendendo tra i prodotti, la cassetta resta visibile in alto in piccolo.
// Il segnaposto tiene lo spazio della cassetta grande, cosi' la pagina non salta.
function aggiornaCassettaFluttuante() {
  const slot = $(".live-crate-slot");
  const card = $(".live-crate-card");
  const sezione = slot?.closest(".order-step");
  if (!slot || !card || !sezione) return;
  const giaFluttua = card.classList.contains("fluttuante");
  const inVista = state.view === "builder" && sezione.classList.contains("active")
    && getComputedStyle(card).display !== "none";
  let fluttua = false;
  if (inVista) {
    const posto = slot.getBoundingClientRect();
    const fineSezione = sezione.getBoundingClientRect().bottom;
    fluttua = posto.bottom < 170 && fineSezione > 320;
  }
  if (fluttua === giaFluttua) return;
  if (fluttua) {
    // il margine sotto la cassetta sparisce quando diventa fissa: il segnaposto lo tiene
    slot.style.height = `${card.offsetHeight + (parseFloat(getComputedStyle(card).marginBottom) || 0)}px`;
    card.style.setProperty("--larghezza-cassetta", `${$(".crate-visual", card).offsetWidth}px`);
    card.classList.add("fluttuante");
  } else {
    card.classList.remove("fluttuante");
    slot.style.height = "";
  }
}

function goToStep(step) {
  if (step > 2 && quotaCount() < boxData().min) {
    showToast(`Scegli almeno ${boxData().min} prodotti per continuare.`);
    step = 2;
  }
  state.step = step;
  $$(".order-step").forEach(el => el.classList.toggle("active", Number(el.dataset.step) === step));
  $$(".stepper button").forEach((el, index) => {
    el.classList.toggle("active", index + 1 === step);
    el.classList.toggle("done", index + 1 < step);
  });
  $("#orderSuccess").classList.remove("active");
  updateSummary();
  aggiornaCassettaFluttuante();
  window.scrollTo({ top: Math.max(0, $("#builderView").offsetTop), behavior: "smooth" });
}

function selectBox(key) {
  state.box = key;
  $$(".box-option").forEach(el => el.classList.toggle("selected", el.dataset.box === key));
  renderProducts();
  updateSummary();
  dropCrates();
}

function renderProducts() {
  const grid = $("#productGrid");
  grid.innerHTML = PRODUCTS.filter(product => product.enabled !== false).map(product => {
    const quantity = state.quantities[product.id];
    return `
      <article class="product-card ${quantity ? "selected" : ""}" data-product-card="${product.id}">
        <div class="product-card-image" style="${productVisualStyle(product)}" role="img" aria-label="${product.name}"></div>
        <div class="product-card-body">
          <small>1 PRODOTTO · ${product.weight.toUpperCase()}</small>
          <h3>${product.name.toUpperCase()}</h3>
          <p>Disponibile questa settimana</p>
          <div class="counter">
            <button data-product-minus="${product.id}" ${quantity === 0 ? "disabled" : ""} aria-label="Togli ${product.name}">−</button>
            <b>${quantity}</b>
            <button data-product-plus="${product.id}" aria-label="Aggiungi ${product.name}">+</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  $$("[data-product-plus]").forEach(button => button.addEventListener("click", () => changeProduct(button.dataset.productPlus, 1)));
  $$("[data-product-minus]").forEach(button => button.addEventListener("click", () => changeProduct(button.dataset.productMinus, -1)));
}

function changeProduct(id, amount) {
  const nextTotal = quotaCount() + amount;
  if (nextTotal < 0) return;
  state.quantities[id] = Math.max(0, state.quantities[id] + amount);
  if (amount > 0) {
    state.selectionOrder.push(id);
  } else {
    const lastMatchingIndex = state.selectionOrder.lastIndexOf(id);
    if (lastMatchingIndex >= 0) state.selectionOrder.splice(lastMatchingIndex, 1);
  }
  renderProducts();
  updateSummary();
}

function updateSummaryLegacy() {
  const count = quotaCount();
  const box = boxData();
  $("#headerCartCount").textContent = count;
  $("#summaryBoxLabel").textContent = `${box.label} · ${box.price} €`;
  $("#summaryQuota").textContent = `${count} PRODOTTI`;
  $("#summaryExtras").textContent = money(extraCost());
  $("#summaryDelivery").textContent = state.selectedTime ? `${state.selectedTime}${state.deliveryFee ? ` · ${money(state.deliveryFee)}` : " · GRATIS"}` : "DA DEFINIRE";
  $("#summaryTotal").textContent = money(total());
  $("#mobileTotal").textContent = money(total());
  $("#mobileQuota").textContent = `${count} prodotti`;
  $("#quotaStatus").textContent = `${count} PRODOTTI SCELTI`;
  $("#quotaHint").textContent = count <= box.included ? `Fino a ${box.included} prodotti sono inclusi` : `${count - box.included} ${count - box.included === 1 ? "prodotto extra" : "prodotti extra"} · ${money(extraCost())}`;
  $("#liveCrateLabel").textContent = `CASSETTA ${box.label}`;
  $("#toDelivery").disabled = count < box.included;

  $("#quotaDots").innerHTML = Array.from({ length: Math.max(box.included, count) }, (_, index) => {
    const filled = index < count;
    const extra = filled && index >= box.included;
    return `<i class="${filled ? "filled" : ""} ${extra ? "extra" : ""}"></i>`;
  }).join("");

  const selected = state.selectionOrder.map(id => PRODUCTS.find(product => product.id === id));
  const crateContent = selected.length
    ? selected.map((item, index) => {
        const slots = CRATE_SLOTS;
        const slot = slots[index % slots.length];
        const sameBefore = selected.slice(0, index).filter(previous => previous.id === item.id).length;
        const duplicateShift = sameBefore % 3;
        const left = slot.left + [0, 5, -5][duplicateShift];
        const top = slot.top + [0, -4, 4][duplicateShift];
        const rotation = slot.r + [0, 13, -13][duplicateShift];
        const densityScale = selected.length === 1 ? 1.24 : selected.length === 2 ? 1.12 : 1;
        const boxScale = state.box === "piccola" ? .82 : state.box === "grande" ? 1.15 : 1;
        const finalScale = (densityScale * boxScale).toFixed(2);
        const enterScale = (finalScale * .96).toFixed(2);
        return `<span class="crate-item" style="${vectorCustomProperties(item)};--left:${left}%;--top:${top}%;--w:${slot.w}%;--h:${slot.h}%;--r:${rotation}deg;--z:${10 + index};--s:${finalScale};--enter-s:${enterScale};--delay:${160 + index * 45}ms" title="${item.name}" aria-label="${item.name}"></span>`;
      }).join("")
    : `<span class="empty-crate">LA CASSETTA È VUOTA<br>AGGIUNGI IL PRIMO PRODOTTO</span>`;
  $("#crateItems").innerHTML = crateContent;
  $("#liveCrateItems").innerHTML = crateContent;

  ["summaryCrateVisual", "liveCrateVisual"].forEach(id => {
    const crate = $(`#${id}`);
    applyCrateVisual(crate);
  });
}

function crateItemStyle(item, index, selected) {
  const slot = CRATE_SLOTS[index % CRATE_SLOTS.length];
  const sameBefore = selected.slice(0, index).filter(previous => previous.id === item.id).length;
  const duplicateShift = sameBefore % 3;
  const left = slot.left + [0, 5, -5][duplicateShift];
  const top = slot.top + [0, -4, 4][duplicateShift];
  const rotation = slot.r + [0, 13, -13][duplicateShift];
  const densityScale = selected.length === 1 ? 1.24 : selected.length === 2 ? 1.12 : 1;
  const boxScale = state.box === "piccola" ? .82 : state.box === "grande" ? 1.15 : 1;
  const finalScale = (densityScale * boxScale).toFixed(2);
  return `${vectorCustomProperties(item)};--left:${left}%;--top:${top}%;--w:${slot.w}%;--h:${slot.h}%;--r:${rotation}deg;--z:${10 + index};--s:${finalScale}`;
}

// Aggiorna le verdure dentro la cassetta tenendo quelle gia' presenti:
// cade solo quella appena aggiunta, le altre scivolano al nuovo posto.
function renderCrateItems(container, selected) {
  if (!container) return;
  if (!selected.length) {
    container.innerHTML = `<span class="empty-crate">LA CASSETTA È VUOTA<br>AGGIUNGI IL PRIMO PRODOTTO</span>`;
    return;
  }
  container.querySelector(".empty-crate")?.remove();

  const presenti = new Map($$(".crate-item", container).map(el => [el.dataset.key, el]));
  const occorrenze = {};
  let nuove = 0;
  selected.forEach((item, index) => {
    occorrenze[item.id] = (occorrenze[item.id] || 0) + 1;
    const key = `${item.id}#${occorrenze[item.id]}`;
    let el = presenti.get(key);
    const stile = crateItemStyle(item, index, selected);
    if (el) {
      presenti.delete(key);
      el.style.cssText = stile + (el.classList.contains("in-arrivo") ? `;--ritardo:${el.style.getPropertyValue("--ritardo") || "0ms"}` : "");
      return;
    }
    el = document.createElement("span");
    el.className = "crate-item in-arrivo";
    el.dataset.key = key;
    el.title = item.name;
    el.setAttribute("aria-label", item.name);
    el.style.cssText = `${stile};--ritardo:${nuove * 110}ms`;
    el.addEventListener("animationend", () => el.classList.remove("in-arrivo"), { once: true });
    container.appendChild(el);
    nuove += 1;
  });
  presenti.forEach(el => el.remove());
}

function updateSummary() {
  const count = quotaCount();
  const box = boxData();
  const includedRange = `${box.min}-${box.included}`;
  const missing = Math.max(0, box.min - count);
  const extraItems = Math.max(0, count - box.included);

  $("#headerCartCount").textContent = count;
  $("#summaryBoxLabel").textContent = `${box.label} · ${box.price} €`;
  $("#summaryQuota").textContent = `${count} PRODOTTI · INCLUSI ${includedRange}`;
  $("#summaryExtras").textContent = money(extraCost());
  $("#summaryDelivery").textContent = state.selectedTime ? `${state.selectedTime}${state.deliveryFee ? ` · ${money(state.deliveryFee)}` : " · GRATIS"}` : "DA DEFINIRE";
  $("#summaryTotal").textContent = money(total());
  $("#mobileTotal").textContent = money(total());
  $("#mobileQuota").textContent = `${count} prodotti`;
  $("#quotaStatus").textContent = `${count} PRODOTTI SCELTI`;
  $("#quotaHint").textContent = missing
    ? `Scegli ancora ${missing} ${missing === 1 ? "prodotto" : "prodotti"} per completare la cassetta`
    : extraItems
      ? `${extraItems} ${extraItems === 1 ? "prodotto extra" : "prodotti extra"} · ${money(extraCost())}`
      : `Nel prezzo sono inclusi da ${box.min} a ${box.included} prodotti`;
  $("#liveCrateLabel").textContent = `CASSETTA ${box.label}`;
  $("#toDelivery").disabled = count < box.min;

  $("#quotaDots").innerHTML = Array.from({ length: Math.max(box.included, count) }, (_, index) => {
    const filled = index < count;
    const extra = filled && index >= box.included;
    return `<i class="${filled ? "filled" : ""} ${extra ? "extra" : ""}"></i>`;
  }).join("");

  const selected = state.selectionOrder.map(id => PRODUCTS.find(product => product.id === id));
  renderCrateItems($("#crateItems"), selected);
  renderCrateItems($("#liveCrateItems"), selected);

  ["summaryCrateVisual", "liveCrateVisual"].forEach(id => {
    const crate = $(`#${id}`);
    applyCrateVisual(crate);
  });
}

function getDefaultDeliveryDays() {
  const start = new Date();
  const nextSaturday = new Date(start);
  const daysUntilSaturday = (6 - start.getDay() + 7) % 7;
  nextSaturday.setDate(start.getDate() + daysUntilSaturday);
  return Array.from({ length: 3 }, (_, index) => {
    const date = new Date(nextSaturday);
    date.setDate(nextSaturday.getDate() + index * 7);
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 10);
  });
}

function setupDatesAndTimes() {
  if (!state.deliveryDays.length) state.deliveryDays = getDefaultDeliveryDays();
  const dates = state.deliveryDays.map(value => new Date(`${value}T12:00:00`));
  if (!state.deliveryDays.includes(state.selectedDate)) state.selectedDate = state.deliveryDays[0];
  $("#dateChoices").innerHTML = dates.map((date, index) => {
    const value = state.deliveryDays[index];
    const day = date.toLocaleDateString("it-IT", { weekday: "short", day: "numeric", month: "short" }).toUpperCase();
    return `<label><input type="radio" name="deliveryDate" value="${value}" ${index === 0 ? "checked" : ""}><span>${day}<small>${index === 0 ? "PROSSIMA CONSEGNA" : "DISPONIBILE"}</small></span></label>`;
  }).join("");

  const slots = [
    ["14:30", "15:10", 3], ["15:10", "15:50", 2], ["15:50", "16:30", 1], ["16:30", "17:10", 4],
    ["17:10", "17:50", 2], ["17:50", "18:30", 3], ["18:30", "19:10", 1], ["19:10", "19:50", 2]
  ];
  $("#timeGrid").innerHTML = slots.map(([from, to, used], index) => `
    <label>
      <input type="radio" name="deliveryTime" value="${from}–${to}" ${used === 4 ? "disabled" : ""}>
      <span>${from}–${to}<small>${used === 4 ? "COMPLETA" : `${4 - used} POSTI`}</small></span>
    </label>
  `).join("");

  $$('input[name="deliveryDate"]').forEach(input => input.addEventListener("change", event => state.selectedDate = event.target.value));
  $$('input[name="deliveryTime"]').forEach(input => input.addEventListener("change", event => {
    state.selectedTime = event.target.value;
    updateSummary();
  }));
}

function validateDelivery() {
  const form = $("#deliveryForm");
  let valid = true;
  $$("[required]", form).forEach(field => {
    const ok = field.value.trim() !== "";
    field.classList.toggle("invalid", !ok);
    valid = valid && ok;
  });
  if (!state.selectedTime) {
    showToast("Scegli una fascia oraria disponibile.");
    valid = false;
  } else if (!valid) {
    showToast("Completa i campi obbligatori.");
  }
  if (valid) {
    state.orderData = Object.fromEntries(new FormData(form).entries());
    state.orderData.date = state.selectedDate;
    state.orderData.time = state.selectedTime;
  }
  return valid;
}

function renderCheckout() {
  const selected = PRODUCTS.filter(product => state.quantities[product.id] > 0);
  $("#checkoutCard").innerHTML = `
    <h3>IL TUO ORDINE</h3>
    <div class="checkout-products">
      ${selected.map(product => `<span>${product.emoji} ${state.quantities[product.id]}× ${product.name.toUpperCase()}</span>`).join("")}
    </div>
    <div class="checkout-detail">
      <div><small>CASSETTA</small><strong>${boxData().label} · ${quotaCount()} PRODOTTI</strong></div>
      <div><small>CONSEGNA</small><strong>${formatDate(state.orderData.date)}<br>${state.orderData.time}</strong></div>
      <div><small>CLIENTE</small><strong>${escapeHtml(state.orderData.fullName)}<br>${escapeHtml(state.orderData.phone)}</strong></div>
      <div><small>INDIRIZZO</small><strong>${escapeHtml(state.orderData.address)}<br>${escapeHtml(state.orderData.area)}</strong></div>
    </div>
    <div class="checkout-total">
      <span>TOTALE ORDINE<br><small>Consegna inclusa</small></span>
      <strong>${money(total())}</strong>
    </div>
  `;
}

function selectedProductLines() {
  return getOrderItems().map(item => `- ${item.quantity} x ${item.name} (${item.weight})`);
}

function buildWhatsAppUrl(orderInput, discoverySource) {
  const order = typeof orderInput === "object" ? orderInput : null;
  const orderId = order?.id || orderInput;
  const notes = (order?.notes || state.orderData.notes || "").trim();
  const productLines = order?.items?.length
    ? order.items.map(item => `- ${item.quantity} x ${item.name} (${item.weight})`).join("\n")
    : selectedProductLines().join("\n");
  const importUrl = order ? dashboardImportUrl(order) : "";
  const message = [
    `Nuovo ordine confermato dal sito: ${orderId}.`,
    "",
    `Nome: ${order?.name || state.orderData.fullName}`,
    `Cellulare: ${order?.phone || state.orderData.phone}`,
    `Consegna: ${formatDate(order?.date || state.orderData.date).toLowerCase()} - ${order?.deliveryWindow || state.orderData.time}`,
    `Indirizzo: ${order?.address || state.orderData.address}, ${order?.area || state.orderData.area}`,
    `Cassetta: ${order?.box || boxData().label} (${quotaCount()} prodotti)`,
    "Prodotti:",
    productLines,
    notes ? `Note: ${notes}` : "",
    `Totale indicativo: ${money(order?.total || total())}`,
    `Mi ha conosciuto tramite: ${discoverySource}`,
    importUrl ? "" : "",
    importUrl ? "Importa:" : "",
    importUrl
  ].filter(Boolean).join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function confirmOrder() {
  const discovery = $('input[name="discovery"]:checked');
  const privacy = $("#privacyCheck").checked;
  $("#discoveryError").textContent = discovery ? "" : "Scegli una delle quattro opzioni.";
  if (!discovery || !privacy) {
    if (!privacy) showToast("Accetta l'informativa privacy per confermare.");
    return;
  }

  const orderId = `R${String(state.orders.length + 19).padStart(4, "0")}`;
  const order = {
    id: orderId,
    time: state.selectedTime.split("–")[0],
    name: state.orderData.fullName,
    area: state.orderData.area,
    address: state.orderData.address,
    box: boxData().label[0] + boxData().label.slice(1).toLowerCase(),
    total: total(),
    source: discovery.value,
    status: "Confermato"
  };
  order.time = state.selectedTime.slice(0, 5);
  order.date = state.orderData.date;
  order.deliveryWindow = state.orderData.time;
  order.phone = state.orderData.phone;
  order.items = getOrderItems();
  order.notes = state.orderData.notes || "";
  order.loyaltyCredited = false;
  state.orders.unshift(order);
  try { localStorage.setItem("radici-demo-order", JSON.stringify(order)); } catch (_) {}
  saveBusinessData();
  const whatsappUrl = buildWhatsAppUrl(order, discovery.value);
  window.open(whatsappUrl, "_blank", "noopener");

  $$(".order-step").forEach(el => el.classList.remove("active"));
  $("#orderSuccess").classList.add("active");
  $("#successCopy").innerHTML = `Grazie <strong>${escapeHtml(order.name.split(" ")[0])}</strong>. L'ordine <strong>#${orderId}</strong> è confermato: arriverà ${formatDate(state.orderData.date).toLowerCase()} tra le <strong>${escapeHtml(state.selectedTime)}</strong>. Si apre WhatsApp solo per mandarmi il riepilogo: non devi attendere risposta. <br><a class="whatsapp-inline" href="${whatsappUrl}" target="_blank" rel="noopener">INVIA RIEPILOGO WHATSAPP</a>`;
  showToast("Ordine confermato!");
  updateSummary();
}

function formatDate(value) {
  if (!value) return "Data da definire";
  return new Date(`${value}T12:00:00`).toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" }).toUpperCase();
}

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function loadLocalOrder() {
  try {
    const savedOrders = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY));
    if (Array.isArray(savedOrders) && savedOrders.length) state.orders = savedOrders;
    const savedCustomers = JSON.parse(localStorage.getItem(CUSTOMERS_STORAGE_KEY));
    if (savedCustomers && typeof savedCustomers === "object") state.customers = savedCustomers;
    const saved = JSON.parse(localStorage.getItem("radici-demo-order"));
    if (saved && !state.orders.some(order => order.id === saved.id)) state.orders.unshift(saved);
    seedMissingOrderData();
    rebuildCustomersFromOrders();
    saveBusinessData();
  } catch (_) {}
}

function loadAdminSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem("sole-terra-acqua-week-settings"));
    if (!saved) return;
    if (Array.isArray(saved.deliveryDays) && saved.deliveryDays.length) {
      state.deliveryDays = saved.deliveryDays;
    }
    if (Array.isArray(saved.products)) {
      saved.products.forEach(savedProduct => {
        const product = PRODUCTS.find(item => item.id === savedProduct.id);
        if (!product) return;
        if (typeof savedProduct.name === "string") product.name = savedProduct.name;
        if (typeof savedProduct.weight === "string") product.weight = savedProduct.weight;
        if (typeof savedProduct.enabled === "boolean") product.enabled = savedProduct.enabled;
        if (typeof savedProduct.customImage === "string") product.customImage = savedProduct.customImage;
      });
    }
  } catch (_) {}
}

function renderWeekEditor() {
  const daysEditor = $("#deliveryDaysEditor");
  const productsEditor = $("#weeklyProductsEditor");
  if (!daysEditor || !productsEditor) return;

  daysEditor.innerHTML = state.deliveryDays.map((day, index) => `
    <div class="delivery-day-row">
      <span>${index + 1}</span>
      <input type="date" value="${day}" data-delivery-day="${index}" aria-label="Giorno di consegna ${index + 1}">
      <button type="button" data-remove-delivery-day="${index}" aria-label="Rimuovi giorno ${index + 1}">×</button>
    </div>
  `).join("");

  productsEditor.innerHTML = PRODUCTS.map(product => `
    <div class="admin-product-row" data-admin-product="${product.id}">
      <div class="admin-product-thumb-wrap">
        <div class="admin-product-thumb" style="${productVisualStyle(product)}" role="img" aria-label="${escapeHtml(product.name)}"></div>
        <label class="admin-photo-label" title="Sostituisci foto">
          +
          <input type="file" accept="image/*" data-admin-photo="${product.id}">
        </label>
      </div>
      <input type="text" value="${escapeHtml(product.name)}" data-admin-name="${product.id}" aria-label="Nome ${escapeHtml(product.name)}">
      <input type="text" value="${escapeHtml(product.weight)}" data-admin-weight="${product.id}" aria-label="Peso ${escapeHtml(product.name)}">
      <label class="availability-toggle" title="Disponibile questa settimana">
        <input type="checkbox" data-admin-enabled="${product.id}" ${product.enabled !== false ? "checked" : ""}>
        <span></span>
      </label>
    </div>
  `).join("");
}

function saveWeekSettings() {
  const deliveryDays = $$("[data-delivery-day]")
    .map(input => input.value)
    .filter(Boolean)
    .sort();
  if (!deliveryDays.length) {
    showToast("Inserisci almeno un giorno di consegna.");
    return;
  }
  state.deliveryDays = deliveryDays;

  PRODUCTS.forEach(product => {
    const nameInput = $(`[data-admin-name="${product.id}"]`);
    const weightInput = $(`[data-admin-weight="${product.id}"]`);
    const enabledInput = $(`[data-admin-enabled="${product.id}"]`);
    if (nameInput?.value.trim()) product.name = nameInput.value.trim();
    if (weightInput?.value.trim()) product.weight = weightInput.value.trim();
    product.enabled = Boolean(enabledInput?.checked);
  });

  const enabledIds = new Set(PRODUCTS.filter(product => product.enabled !== false).map(product => product.id));
  state.selectionOrder = state.selectionOrder.filter(id => enabledIds.has(id));
  Object.keys(state.quantities).forEach(id => { state.quantities[id] = 0; });
  state.selectionOrder.forEach(id => { state.quantities[id]++; });

  try {
    localStorage.setItem("sole-terra-acqua-week-settings", JSON.stringify({
      deliveryDays: state.deliveryDays,
      products: PRODUCTS.map(({ id, name, weight, enabled, customImage }) => ({ id, name, weight, enabled, customImage: customImage || "" }))
    }));
    showToast("Settimana aggiornata e pubblicata.");
  } catch (_) {
    showToast("Immagini troppo grandi: prova con foto più leggere.");
  }

  setupDatesAndTimes();
  renderProducts();
  updateSummary();
  renderWeekEditor();
}

function addDeliveryDay() {
  const lastDay = state.deliveryDays[state.deliveryDays.length - 1];
  const next = lastDay ? new Date(`${lastDay}T12:00:00`) : new Date();
  next.setDate(next.getDate() + (lastDay ? 7 : 0));
  const local = new Date(next.getTime() - next.getTimezoneOffset() * 60000);
  state.deliveryDays.push(local.toISOString().slice(0, 10));
  renderWeekEditor();
}

function removeDeliveryDay(index) {
  if (state.deliveryDays.length === 1) {
    showToast("Deve rimanere almeno un giorno di consegna.");
    return;
  }
  state.deliveryDays.splice(index, 1);
  renderWeekEditor();
}

function compressProductPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const maxSide = 480;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", .82));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

async function handleProductPhoto(input) {
  const file = input.files?.[0];
  const product = PRODUCTS.find(item => item.id === input.dataset.adminPhoto);
  if (!file || !product) return;
  try {
    product.customImage = await compressProductPhoto(file);
    const row = input.closest(".admin-product-row");
    const thumb = $(".admin-product-thumb", row);
    thumb.setAttribute("style", productVisualStyle(product));
    showToast(`Foto di ${product.name} aggiornata.`);
  } catch (_) {
    showToast("Non riesco a leggere questa immagine.");
  }
}

function renderDashboardLegacy(filter = "all") {
  const visible = state.orders.filter(order => {
    if (filter === "all") return true;
    if (filter === "Fuori zona") return !["Viterbo", "Vitorchiano"].includes(order.area);
    return order.area === filter;
  });
  const upcoming = state.orders.filter(order => order.status !== "Consegnato").slice(0, 5);

  $("#nextDeliveries").innerHTML = upcoming.map((order, index) => `
    <div class="next-delivery">
      <strong>${order.time}</strong>
      <p><strong>${escapeHtml(order.name.toUpperCase())}</strong><small>${escapeHtml(order.address)} · ${escapeHtml(order.area)}</small></p>
      <span>${index + 1}</span>
    </div>
  `).join("");

  $("#ordersTable").innerHTML = `
    <div class="order-row header"><span>ORA</span><span>CLIENTE</span><span>INDIRIZZO</span><span>LOCALITÀ</span><span>CASSETTA</span><span>STATO</span></div>
    ${visible.map(order => `
      <div class="order-row">
        <span>${order.time}</span>
        <span class="order-customer"><strong>${escapeHtml(order.name)}</strong><small>#${order.id} · ${escapeHtml(order.source)}</small></span>
        <span>${escapeHtml(order.address)}</span>
        <span class="area-pill">${escapeHtml(order.area.toUpperCase())}</span>
        <span>${escapeHtml(order.box)} · ${money(order.total)}</span>
        <span class="status-pill ${order.status === "Consegnato" ? "delivered" : ""}">${escapeHtml(order.status.toUpperCase())}</span>
      </div>
    `).join("")}
  `;

  const revenue = state.orders.reduce((sum, order) => sum + Number(order.total), 0) + 174;
  $("#statOrders").textContent = state.orders.length + 11;
  $("#statRevenue").textContent = money(revenue);
  $("#statExtra").textContent = state.orders.filter(order => !["Viterbo", "Vitorchiano"].includes(order.area)).length + 3;
  renderWeekEditor();
}

function buildCustomerNotificationUrl(order, customer) {
  const phone = normalizePhone(order.phone);
  if (!phone) return "";
  const availableRewards = Math.max(0, (customer.rewardsEarned || 0) - (customer.rewardsUsed || 0));
  const missingPoints = POINTS_FOR_REWARD - ((customer.points || 0) % POINTS_FOR_REWARD);
  const nome = String(order.name || "").split(" ")[0];
  const righe = [`Ciao ${nome}, il tuo ordine ${order.id} risulta consegnato. Grazie da Sole Terra Acqua!`, ""];
  if (availableRewards > 0) {
    const conserve = availablePreserves();
    righe.push(`Questa è la tua consegna numero ${customer.points || POINTS_FOR_REWARD}: hai diritto a una CONSERVA IN OMAGGIO.`);
    if (conserve.length) {
      righe.push("", "Puoi scegliere tra:");
      conserve.forEach(item => righe.push(`- ${item.name}`));
      righe.push("", "Rispondi con quella che preferisci e te la porto alla prossima consegna.");
    } else {
      righe.push("", "Rispondi a questo messaggio e dimmi quale conserva preferisci.");
    }
  } else {
    const quante = missingPoints === 1 ? "ancora una consegna" : `ancora ${missingPoints} consegne`;
    righe.push(`Sei a ${customer.points || 0} consegne su ${POINTS_FOR_REWARD}: ${quante} e ricevi una conserva in omaggio.`);
  }
  righe.push("", "A presto!");
  return `https://wa.me/${phone}?text=${encodeURIComponent(righe.join("\n"))}`;
}

function markOrderDelivered(orderId) {
  const order = state.orders.find(item => item.id === orderId);
  if (!order) return;
  const alreadyDelivered = order.status === "Consegnato" && order.loyaltyCredited;
  order.status = "Consegnato";
  order.deliveredAt = new Date().toISOString();
  const customer = upsertCustomerFromOrder(order, !alreadyDelivered);
  order.loyaltyCredited = true;
  saveBusinessData();
  renderDashboard(state.orderFilter);
  const notificationUrl = buildCustomerNotificationUrl(order, customer);
  if (notificationUrl) window.open(notificationUrl, "_blank", "noopener");
  showToast(alreadyDelivered ? "Ordine già consegnato: riapro l'avviso cliente." : "Ordine consegnato: punto fedeltà aggiunto.");
}

function useCustomerReward(customerId) {
  const customer = state.customers[customerId];
  if (!customer) return;
  const available = Math.max(0, (customer.rewardsEarned || 0) - (customer.rewardsUsed || 0));
  if (!available) {
    showToast("Questo cliente non ha omaggi disponibili.");
    return;
  }
  const selettore = $(`[data-reward-choice="${customerId}"]`);
  const scelta = selettore && selettore.value ? selettore.value : "";
  customer.rewardsUsed = (customer.rewardsUsed || 0) + 1;
  customer.lastReward = scelta;
  customer.lastRewardDate = new Date().toISOString().slice(0, 10);
  saveBusinessData();
  renderDashboard(state.orderFilter);
  showToast(scelta ? `Omaggio segnato: ${scelta}.` : "Omaggio segnato come consegnato.");
}

function renderCustomers() {
  const customers = Object.values(state.customers)
    .filter(customer => customer.phone || customer.name)
    .sort((a, b) => ((b.rewardsEarned || 0) - (b.rewardsUsed || 0)) - ((a.rewardsEarned || 0) - (a.rewardsUsed || 0)) || (b.points || 0) - (a.points || 0));
  const table = $("#customersTable");
  if (!table) return;
  if (!customers.length) {
    table.innerHTML = `<div class="empty-table-note">Ancora nessun cliente consegnato. I punti appariranno dopo il primo ordine segnato come consegnato.</div>`;
    return;
  }
  const conserve = availablePreserves();
  const opzioniConserve = conserve.length
    ? conserve.map(item => `<option value="${escapeHtml(item.name)}">${escapeHtml(item.name)}</option>`).join("")
    : `<option value="">Nessuna conserva disponibile</option>`;

  table.innerHTML = `
    <div class="customer-row header"><span>CLIENTE</span><span>TELEFONO</span><span>VERSO L’OMAGGIO</span><span>CONSEGNE</span><span>OMAGGIO</span></div>
    ${customers.map(customer => {
      const availableRewards = Math.max(0, (customer.rewardsEarned || 0) - (customer.rewardsUsed || 0));
      return `
        <div class="customer-row">
          <span class="customer-name"><strong>${escapeHtml(customer.name || "Cliente")}</strong><small>Ultimo ordine ${escapeHtml(customer.lastOrderId || "—")}</small>${customer.lastReward ? `<small class="last-gift">Omaggio dato: ${escapeHtml(customer.lastReward)}</small>` : ""}</span>
          <span>${escapeHtml(customerDisplayPhone(customer.phone))}</span>
          <span class="points-pill ${availableRewards ? "reward-ready" : ""}">${availableRewards ? "OMAGGIO PRONTO" : `${(customer.points || 0) % POINTS_FOR_REWARD} / ${POINTS_FOR_REWARD}`}</span>
          <span>${(customer.orders || 0) === 1 ? "1 consegna" : `${customer.orders || 0} consegne`}</span>
          <span>${availableRewards ? `
            <span class="reward-cell">
              <select class="reward-choice" data-reward-choice="${escapeHtml(customer.id)}" aria-label="Conserva scelta da ${escapeHtml(customer.name || "cliente")}">${opzioniConserve}</select>
              <button class="reward-action" data-use-reward="${escapeHtml(customer.id)}">SEGNA OMAGGIO</button>
            </span>` : rewardStatus(customer)}</span>
        </div>
      `;
    }).join("")}
  `;
}

function renderPreservesEditor() {
  const editor = $("#preservesEditor");
  if (!editor) return;
  editor.innerHTML = state.preserves.map((item, index) => `
    <div class="preserve-row">
      <input type="text" value="${escapeHtml(item.name)}" data-preserve-name="${index}" placeholder="Nome della conserva" aria-label="Nome conserva ${index + 1}">
      <label class="availability-toggle" title="Proponila come omaggio">
        <input type="checkbox" data-preserve-enabled="${index}" ${item.enabled !== false ? "checked" : ""}>
        <span></span>
      </label>
      <button type="button" data-remove-preserve="${index}" aria-label="Rimuovi ${escapeHtml(item.name || "conserva")}">×</button>
    </div>
  `).join("");

  const disponibili = availablePreserves().length;
  const nota = $("#preservesCount");
  if (nota) {
    nota.textContent = disponibili === 0
      ? "Nessuna conserva attiva: il cliente non vedrebbe nessuna scelta."
      : disponibili === 1
        ? "1 conserva proposta al cliente."
        : `${disponibili} conserve proposte al cliente.`;
    nota.classList.toggle("warning", disponibili === 0);
  }
}

function addPreserve() {
  state.preserves.push({ id: `c${Date.now()}`, name: "", enabled: true });
  renderPreservesEditor();
  const ultimo = $$("[data-preserve-name]").pop();
  if (ultimo) ultimo.focus();
}

function removePreserve(index) {
  state.preserves.splice(index, 1);
  savePreserves();
  renderPreservesEditor();
  renderCustomers();
}

function savePreservesSettings() {
  state.preserves = state.preserves
    .map((item, index) => ({
      id: item.id,
      name: (($(`[data-preserve-name="${index}"]`) || {}).value || "").trim(),
      enabled: Boolean(($(`[data-preserve-enabled="${index}"]`) || {}).checked)
    }))
    .filter(item => item.name);
  savePreserves();
  renderPreservesEditor();
  renderCustomers();
  showToast(availablePreserves().length
    ? "Elenco conserve aggiornato."
    : "Salvato, ma nessuna conserva e' attiva: attivane almeno una.");
}

function renderDashboard(filter = state.orderFilter || "all") {
  state.orderFilter = filter;
  const visible = state.orders.filter(order => {
    if (filter === "all") return true;
    if (filter === "Fuori zona") return !["Viterbo", "Vitorchiano"].includes(order.area);
    return order.area === filter;
  });
  const upcoming = state.orders.filter(order => order.status !== "Consegnato").slice(0, 5);

  $("#nextDeliveries").innerHTML = upcoming.map((order, index) => `
    <div class="next-delivery">
      <strong>${escapeHtml(order.time || "—")}</strong>
      <p><strong>${escapeHtml(order.name.toUpperCase())}</strong><small>${escapeHtml(order.address)} · ${escapeHtml(order.area)}</small></p>
      <span>${index + 1}</span>
    </div>
  `).join("");

  $("#ordersTable").innerHTML = `
    <div class="order-row header"><span>ORA</span><span>CLIENTE</span><span>INDIRIZZO</span><span>LOCALITÀ</span><span>CASSETTA</span><span>STATO</span><span>AZIONE</span></div>
    ${visible.map(order => {
      const delivered = order.status === "Consegnato";
      const customer = state.customers[customerKeyFromOrder(order)];
      const points = customer?.points || 0;
      return `
        <div class="order-row">
          <span>${escapeHtml(order.time || "—")}</span>
          <span class="order-customer"><strong>${escapeHtml(order.name)}</strong><small>#${order.id} · ${escapeHtml(customerDisplayPhone(order.phone))} · ${points} punti</small></span>
          <span>${escapeHtml(order.address)}</span>
          <span class="area-pill">${escapeHtml(order.area.toUpperCase())}</span>
          <span>${escapeHtml(order.box)} · ${money(order.total)}</span>
          <span class="status-pill ${delivered ? "delivered" : ""}">${escapeHtml(order.status.toUpperCase())}</span>
          <button class="delivery-action ${delivered ? "done" : ""}" data-deliver-order="${escapeHtml(order.id)}">${delivered ? "RIAVVISA CLIENTE" : "CONSEGNATO + AVVISA"}</button>
        </div>
      `;
    }).join("")}
  `;

  const revenue = state.orders.reduce((sum, order) => sum + Number(order.total), 0) + 174;
  $("#statOrders").textContent = state.orders.length + 11;
  $("#statRevenue").textContent = money(revenue);
  $("#statExtra").textContent = state.orders.filter(order => !["Viterbo", "Vitorchiano"].includes(order.area)).length + 3;
  renderCustomers();
  renderWeekEditor();
  renderPreservesEditor();
}

function optimizeRoutes() {
  const button = $("#optimizeRoutes");
  button.disabled = true;
  button.innerHTML = "<span>✦</span> ANALIZZO GLI INDIRIZZI…";
  setTimeout(() => {
    state.optimized = true;
    state.orders.sort((a, b) => {
      const zoneOrder = ["Viterbo", "Quercia", "Bagnaia", "San Martino", "Vitorchiano", "Vetralla", "Tobia"];
      return zoneOrder.indexOf(a.area) - zoneOrder.indexOf(b.area) || a.time.localeCompare(b.time);
    });
    $("#routeLine").setAttribute("d", "M105 232C160 205 205 100 270 122S350 205 445 188 535 75 618 85");
    button.innerHTML = "<span>✓</span> PERCORSI OTTIMIZZATI";
    renderDashboard();
    showToast("Percorsi raggruppati per vicinanza e fascia oraria.");
    setTimeout(() => { button.disabled = false; }, 700);
  }, 1200);
}

function setupEvents() {
  let fluttuaInCoda = false;
  window.addEventListener("scroll", () => {
    if (fluttuaInCoda) return;
    fluttuaInCoda = true;
    requestAnimationFrame(() => { fluttuaInCoda = false; aggiornaCassettaFluttuante(); });
  }, { passive: true });
  window.addEventListener("resize", aggiornaCassettaFluttuante);
  $("#menuButton").addEventListener("click", () => openMenu(true));
  $("#closeMenu").addEventListener("click", () => openMenu(false));
  $("#menuBackdrop").addEventListener("click", () => openMenu(false));
  $("#headerCart").addEventListener("click", () => { navigate("builder"); goToStep(2); });

  $$("[data-view-link]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    navigate(link.dataset.viewLink);
  }));
  $$("[data-home-anchor]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    navigate("home", link.dataset.homeAnchor);
  }));
  $$("[data-start-builder]").forEach(button => button.addEventListener("click", () => {
    navigate("builder");
    goToStep(1);
  }));
  $$("[data-next-step]").forEach(button => button.addEventListener("click", () => goToStep(state.step + 1)));
  $$("[data-prev-step]").forEach(button => button.addEventListener("click", () => goToStep(state.step - 1)));
  $$("[data-step-jump]").forEach(button => button.addEventListener("click", () => {
    const target = Number(button.dataset.stepJump);
    if (target <= state.step || target <= 2) goToStep(target);
    else showToast("Completa questo passaggio prima di continuare.");
  }));
  $$(".box-option").forEach(button => button.addEventListener("click", () => selectBox(button.dataset.box)));
  $("#areaSelect").addEventListener("change", event => {
    const option = event.target.selectedOptions[0];
    state.deliveryFee = Number(option?.dataset.fee || 0);
    updateSummary();
  });
  $("#toReview").addEventListener("click", () => {
    if (validateDelivery()) {
      renderCheckout();
      goToStep(4);
    }
  });
  $("#confirmOrder").addEventListener("click", confirmOrder);
  $("#optimizeRoutes").addEventListener("click", optimizeRoutes);
  $("#ordersTable").addEventListener("click", event => {
    const button = event.target.closest("[data-deliver-order]");
    if (button) markOrderDelivered(button.dataset.deliverOrder);
  });
  $("#customersTable").addEventListener("click", event => {
    const button = event.target.closest("[data-use-reward]");
    if (button) useCustomerReward(button.dataset.useReward);
  });
  $("#unlockDashboard").addEventListener("click", unlockDashboard);
  $("#lockDashboard").addEventListener("click", lockDashboard);
  $("#adminPinInput").addEventListener("keydown", event => {
    if (event.key === "Enter") unlockDashboard();
  });
  $("#adminPinInput").addEventListener("input", event => {
    event.target.classList.remove("invalid");
    $("#adminPinError").textContent = "";
  });
  $("#savePreserves").addEventListener("click", savePreservesSettings);
  $("#addPreserve").addEventListener("click", addPreserve);
  $("#preservesEditor").addEventListener("click", event => {
    const button = event.target.closest("[data-remove-preserve]");
    if (button) removePreserve(Number(button.dataset.removePreserve));
  });
  $("#saveWeekSettings").addEventListener("click", saveWeekSettings);
  $("#addDeliveryDay").addEventListener("click", addDeliveryDay);
  $("#deliveryDaysEditor").addEventListener("click", event => {
    const button = event.target.closest("[data-remove-delivery-day]");
    if (button) removeDeliveryDay(Number(button.dataset.removeDeliveryDay));
  });
  $("#weeklyProductsEditor").addEventListener("change", event => {
    if (event.target.matches("[data-admin-photo]")) handleProductPhoto(event.target);
  });
  $$("[data-order-filter]").forEach(button => button.addEventListener("click", () => {
    $$("[data-order-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderDashboard(button.dataset.orderFilter);
  }));
  $$("input, select, textarea", $("#deliveryForm")).forEach(field => field.addEventListener("input", () => field.classList.remove("invalid")));
  $$('input[name="discovery"]').forEach(input => input.addEventListener("change", () => $("#discoveryError").textContent = ""));
  window.addEventListener("resize", () => {
    $("#mobileBasketBar").style.display = state.view === "builder" && window.innerWidth <= 980 ? "flex" : "";
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  $$(".reveal").forEach(el => observer.observe(el));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!["http:", "https:"].includes(window.location.protocol)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

function openInitialRoute() {
  const params = new URLSearchParams(window.location.search);
  if (params.get(OWNER_QUERY) === OWNER_VALUE || window.location.hash === "#dashboard") {
    navigate("dashboard");
  }
}

function init() {
  loadLocalOrder();
  loadAdminSettings();
  loadPreserves();
  if (!state.deliveryDays.length) state.deliveryDays = getDefaultDeliveryDays();
  renderProducts();
  setupDatesAndTimes();
  setupEvents();
  setupReveal();
  updateSummary();
  renderDashboard();
  if (!importOrderFromHash()) openInitialRoute();
  showDashboardGate();
  registerServiceWorker();
}

init();
