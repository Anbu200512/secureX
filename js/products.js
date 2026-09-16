/* SecureX Products - Product Data, Filtering, Search, Details Modal */

const PRODUCTS = [
  {
    id: 1,
    name: 'SecureCam 4K Pro',
    category: 'ip-cameras',
    categoryLabel: 'IP Camera',
    price: 249,
    oldPrice: 299,
    rating: 4.8,
    reviews: 214,
    features: ['4K Ultra HD resolution', 'AI motion detection', '1080p night vision up to 30m', 'Two-way audio', 'IP67 weatherproof'],
    description: 'Professional-grade 4K IP camera with powerful AI motion detection, exceptional night vision and a durable weatherproof design. Perfect for complete outdoor surveillance with crystal-clear day and night footage.',
    badge: 'Best Seller',
    img: 'assets/images/SecureCam 4K Pro.jpg'
  },
  {
    id: 2,
    name: 'SecureCam WiFi Dome',
    category: 'ip-cameras',
    categoryLabel: 'IP Camera',
    price: 189,
    oldPrice: 229,
    rating: 4.6,
    reviews: 156,
    features: ['2K QHD resolution', 'Pan & tilt 360°', 'Smart human detection', 'MicroSD storage', 'WiFi connectivity'],
    description: 'Compact dome-style WiFi camera with remote pan and tilt control, intelligent human detection and flexible storage options. Ideal for indoor monitoring in homes and offices.',
    badge: '',
    img: 'assets/images/SecureCam WiFi Dome.jpg'
  },
  {
    id: 3,
    name: 'SecureCam Bullet NVR',
    category: 'ip-cameras',
    categoryLabel: 'IP Camera',
    price: 399,
    oldPrice: 449,
    rating: 4.9,
    reviews: 98,
    features: ['4 bullet cameras', '8-channel NVR', 'Remote viewing', '1TB HDD included', 'Mobile app support'],
    description: 'Complete NVR camera kit with four high-resolution bullet cameras and a powerful 8-channel network video recorder. Everything you need for comprehensive multi-area surveillance.',
    badge: 'Bundle',
    img: 'assets/images/SecureCam Bullet NVR.jpg'
  },
  {
    id: 4,
    name: 'SmartLock Fingerprint',
    category: 'smart-locks',
    categoryLabel: 'Smart Lock',
    price: 329,
    oldPrice: 379,
    rating: 4.7,
    reviews: 187,
    features: ['Fingerprint unlock', 'PIN code access', 'Mobile app control', 'Auto-lock feature', 'Battery backup'],
    description: 'Advanced smart deadbolt with multiple access methods including fingerprint, PIN, key and smartphone. Peace of mind with real-time access notifications and audit logs.',
    badge: 'Popular',
    img: 'assets/images/SmartLock Fingerprint.jpg'
  },
  {
    id: 5,
    name: 'SmartLock Pro WiFi',
    category: 'smart-locks',
    categoryLabel: 'Smart Lock',
    price: 279,
    oldPrice: 319,
    rating: 4.5,
    reviews: 132,
    features: ['WiFi remote access', 'Keyless entry', 'Temporary codes', 'Activity history', 'Works with Alexa'],
    description: 'Versatile WiFi smart lock that lets you control access from anywhere. Create temporary codes for guests, get notified of entries, and monitor activity in real time.',
    badge: '',
    img: 'assets/images/SmartLock Pro WiFi.jpg'
  },
  {
    id: 6,
    name: 'SmartLock Deadbolt Elite',
    category: 'smart-locks',
    categoryLabel: 'Smart Lock',
    price: 389,
    oldPrice: 429,
    rating: 4.8,
    reviews: 89,
    features: ['Biometric fingerprint', 'Touchscreen keypad', 'Tamper alarm', 'Encrypted access', 'Anti-pick cylinder'],
    description: 'Premium deadbolt lock combining biometric technology with a sleek touchscreen keypad and military-grade encryption. The ultimate in home access security.',
    badge: 'Premium',
    img: 'assets/images/SmartLock Deadbolt Elite.jpg'
  },
  {
    id: 7,
    name: 'HomeSecure Alarm Kit',
    category: 'alarm-systems',
    categoryLabel: 'Alarm System',
    price: 349,
    oldPrice: 399,
    rating: 4.7,
    reviews: 167,
    features: ['Door/window sensors', 'Motion detector', '110dB siren', 'Remote arming', 'Instant phone alerts'],
    description: 'Complete DIY-friendly home alarm kit with door/window sensors, motion detection and a powerful siren. Arm and disarm remotely from your smartphone with instant alerts.',
    badge: 'Complete Kit',
    img: 'assets/images/HomeSecure Alarm Kit.jpg'
  },
  {
    id: 8,
    name: 'SmartSiren 4G Alarm',
    category: 'alarm-systems',
    categoryLabel: 'Alarm System',
    price: 449,
    oldPrice: 499,
    rating: 4.9,
    reviews: 76,
    features: ['4G cellular backup', '4K camera integration', 'Two-way voice', 'Battery backup', '24/7 monitoring ready'],
    description: 'Advanced alarm system with 4G cellular connectivity ensuring protection even during WiFI or power outages. Integrates with cameras and includes two-way voice communication.',
    badge: 'Advanced',
    img: 'assets/images/SmartSiren 4G Alarm.jpg'
  },
  {
    id: 9,
    name: 'SensorGuard Perimeter',
    category: 'alarm-systems',
    categoryLabel: 'Alarm System',
    price: 529,
    oldPrice: 599,
    rating: 4.6,
    reviews: 54,
    features: ['Outdoor vibration sensors', 'PIR motion detection', 'Weatherproof housing', 'Wireless setup', 'Scalable system'],
    description: 'Perimeter security system designed for outdoor use with vibration sensors and PIR detectors. Scalable to protect homes, gates and commercial properties.',
    badge: 'Pro',
    img: 'assets/images/SensorGuard Perimeter.jpg'
  },
  {
    id: 10,
    name: 'DoorView Pro 2K',
    category: 'video-doorbells',
    categoryLabel: 'Video Doorbell',
    price: 199,
    oldPrice: 239,
    rating: 4.7,
    reviews: 243,
    features: ['2K HD video', 'Two-way audio', 'Night vision', 'Motion alerts', 'Works with smart home'],
    description: 'Crystal-clear 2K video doorbell with two-way audio, reliable night vision and instant motion alerts. See and speak with visitors from anywhere.',
    badge: 'Best Seller',
    img: 'assets/images/DoorView Pro 2K.jpg'
  },
  {
    id: 11,
    name: 'DoorView Plus Battery',
    category: 'video-doorbells',
    categoryLabel: 'Video Doorbell',
    price: 169,
    oldPrice: 199,
    rating: 4.5,
    reviews: 198,
    features: ['Wireless battery', '1080p Full HD', 'Smartphone alerts', '6-month battery life', 'Easy installation'],
    description: 'Battery-powered video doorbell that installs in minutes with no wiring required. Full HD video, motion detection and smartphone alerts make home security simple.',
    badge: '',
    img: 'assets/images/DoorView Plus Battery.jpg'
  },
  {
    id: 12,
    name: 'DoorView Elite Dual',
    category: 'video-doorbells',
    categoryLabel: 'Video Doorbell',
    price: 269,
    oldPrice: 309,
    rating: 4.8,
    reviews: 112,
    features: ['Dual cameras', '1440p resolution', 'Package detection', '5GHz WiFi', 'Face recognition'],
    description: 'Premium dual-camera video doorbell with wide-angle and close-up views, intelligent package detection and advanced face recognition for superior home security.',
    badge: 'Premium',
    img: 'assets/images/DoorView Elite Dual.jpg'
  }
];

let currentFilter = 'all';
let searchTerm = '';

function renderProducts(filter = 'all', search = '') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  let filtered = [...PRODUCTS];

  if (filter !== 'all') {
    filtered = filtered.filter(p => p.category === filter);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.features.some(f => f.toLowerCase().includes(q))
    );
  }

  const emptyEl = document.getElementById('no-products');

  if (!filtered.length) {
    grid.innerHTML = '';
    if (emptyEl) {
      emptyEl.classList.remove('hidden');
    }
    return;
  }

  if (emptyEl) emptyEl.classList.add('hidden');

  grid.innerHTML = filtered.map(p => `
    <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden card-hover flex flex-col" data-product-id="${p.id}">
      <div class="relative h-48 bg-slate-100 dark:bg-slate-800 group overflow-hidden">
        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        ${p.badge ? `<div class="absolute top-4 left-4 ${p.badge === 'Best Seller' ? 'bg-blue-600' : p.badge === 'Premium' || p.badge === 'Advanced' ? 'bg-purple-600' : 'bg-slate-800'} text-white text-xs font-semibold px-3 py-1 rounded-full">${p.badge}</div>` : ''}
      </div>
      <div class="p-5 flex-1 flex flex-col">
        <div class="flex items-center space-x-2 mb-2">
          <span class="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">${p.categoryLabel}</span>
          <span class="w-1 h-1 bg-slate-300 rounded-full"></span>
          <div class="flex items-center text-xs text-slate-500 dark:text-slate-400">
            <i data-lucide="star" class="w-3 h-3 text-amber-400 fill-amber-400"></i>
            <span class="ml-1">${p.rating}</span>
          </div>
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">${p.name}</h3>
        <ul class="space-y-1 mb-4 flex-1">
          ${p.features.slice(0, 3).map(f => `
            <li class="flex items-start space-x-2 text-xs text-slate-500 dark:text-slate-400">
              <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0"></i>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
        <div class="flex items-center justify-between mb-4">
          <div>
            ${p.oldPrice ? `<span class="text-xs text-slate-400 line-through mr-2">$${p.oldPrice}</span>` : ''}
            <span class="text-xl font-bold text-slate-900 dark:text-white">$${p.price}</span>
          </div>
          <span class="text-xs text-slate-400">${p.reviews} reviews</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button data-view-details="${p.id}" class="px-3 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg transition-colors">
            View Details
          </button>
          <button data-enquire="${p.id}" class="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function initCategoryFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-600/25');
        b.classList.add('bg-white', 'dark:bg-slate-900', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-slate-700');
      });
      btn.classList.remove('bg-white', 'dark:bg-slate-900', 'text-slate-600', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-slate-700');
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-600/25');

      currentFilter = btn.getAttribute('data-filter');
      renderProducts(currentFilter, searchTerm);
    });
  });
}

function initSearch() {
  const input = document.getElementById('product-search');
  if (!input) return;

  input.addEventListener('input', (e) => {
    searchTerm = e.target.value.trim();
    renderProducts(currentFilter, searchTerm);
  });
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === parseInt(productId));
  if (!product) return;

  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 z-[90] flex items-center justify-center p-4';
  overlay.innerHTML = `
    <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" data-close-modal></div>
    <div class="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
      <button data-close-modal class="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 transition-colors z-10">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
      <div class="relative h-52 bg-slate-100 dark:bg-slate-800">
        <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover">
        ${product.badge ? `<div class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">${product.badge}</div>` : ''}
      </div>
      <div class="p-6">
        <div class="flex items-center space-x-2 mb-2">
          <span class="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">${product.categoryLabel}</span>
          <div class="flex items-center text-xs text-slate-500 dark:text-slate-400">
            <i data-lucide="star" class="w-3.5 h-3.5 text-amber-400 fill-amber-400"></i>
            <span class="ml-1">${product.rating} (${product.reviews} reviews)</span>
          </div>
        </div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">${product.name}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">${product.description}</p>

        <div class="mb-5">
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-3">Key Features</h4>
          <ul class="space-y-2">
            ${product.features.map(f => `
              <li class="flex items-start space-x-2.5 text-sm text-slate-600 dark:text-slate-300">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-700 pt-4 mb-5">
          <div class="flex items-center space-x-3">
            ${product.oldPrice ? `<span class="text-sm text-slate-400 line-through">$${product.oldPrice}</span>` : ''}
            <span class="text-3xl font-extrabold text-slate-900 dark:text-white">$${product.price}</span>
          </div>
          <span class="text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 font-semibold px-3 py-1.5 rounded-full">In Stock</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button data-enquire-modal="${product.id}" class="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
            Enquire Now
          </button>
          <button data-close-modal class="px-5 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add('modal-open');
  if (typeof lucide !== 'undefined') lucide.createIcons({ nodes: [overlay] });

  const closeModal = () => {
    overlay.remove();
    document.body.classList.remove('modal-open');
  };

  overlay.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeModal);
  });

  overlay.querySelector('[data-enquire-modal]')?.addEventListener('click', () => {
    closeModal();
    setPreference('enquire_product', product.name);
    showToast('Enquiry sent! We will contact you shortly.', 'success');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  }, { once: true });
}

function initProductButtons() {
  document.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('[data-view-details]');
    if (viewBtn) {
      openProductModal(viewBtn.getAttribute('data-view-details'));
      return;
    }
    const enquireBtn = e.target.closest('[data-enquire]');
    if (enquireBtn) {
      const id = enquireBtn.getAttribute('data-enquire');
      const product = PRODUCTS.find(p => p.id === parseInt(id));
      setPreference('enquire_product', product ? product.name : 'Security Product');
      showToast('Enquiry sent! We will contact you shortly.', 'success');
    }
  });
}

function initURLParams() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    const btn = document.querySelector(`[data-filter="${cat}"]`);
    if (btn) btn.click();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initCategoryFilters();
  initSearch();
  initProductButtons();
  initURLParams();
});
