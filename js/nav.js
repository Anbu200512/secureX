/* SecureX Navigation - Navbar, Dropdown, Mobile Menu, Theme & RTL Toggle */

function getActivePage() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  return page === '' ? 'index.html' : page;
}

function buildNavLinks() {
  return [
    { href: 'index.html', label: 'Home', id: 'index.html' },
    { href: 'about.html', label: 'About', id: 'about.html' },
    { href: 'services.html', label: 'Services', id: 'services.html' },
    { href: 'products.html', label: 'Products', id: 'products.html' },
    { href: 'packages.html', label: 'Packages', id: 'packages.html' },
    { href: 'installation.html', label: 'Installation', id: 'installation.html' },
    { href: 'contact.html', label: 'Contact', id: 'contact.html' },
  ];
}

function isRoot() {
  const path = window.location.pathname;
  return path.endsWith('/') || path.endsWith('SecureX') || path.endsWith('SecureX\\');
}

function getBase() {
  return isRoot() ? '' : '';
}

function renderNavbar() {
  const pages = buildNavLinks();
  const active = getActivePage();
  const base = getBase();
  const homeActive = active === 'index.html' || active === 'home2.html';
  const others = pages.slice(1);

  if (document.body.dataset.nav === 'minimal' || document.body.dataset.nav === 'minimal-brandless') {
    const brandHTML = document.body.dataset.nav === 'minimal'
      ? `<!-- Centered brand -->
  <header class="relative z-40 pt-8 pb-2">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center">
        <a href="${base}index.html" class="inline-flex items-center space-x-2.5 group">
          <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            <i data-lucide="shield-check" class="w-6 h-6 text-white"></i>
          </div>
          <span class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Secure<span class="text-blue-600">X</span></span>
        </a>
      </div>
    </div>
  </header>`
      : '';
    const minimalHTML = `
  ${brandHTML}
  <!-- Top-right toggles -->
  <div class="fixed top-4 right-4 z-50 flex items-center space-x-2">
    <button id="theme-toggle-desktop" class="p-2.5 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm" aria-label="Toggle theme" title="Toggle dark/light">
      <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
      <i data-lucide="moon" class="w-5 h-5 block dark:hidden"></i>
    </button>
    <button id="rtl-toggle-desktop" class="p-2.5 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm" aria-label="Toggle RTL/LTR" title="Toggle RTL / LTR">
      <i data-lucide="align-right" class="w-5 h-5 rtl-ltr-icon"></i>
      <i data-lucide="align-left" class="w-5 h-5 rtl-rtl-icon hidden"></i>
    </button>
  </div>
  `;
    document.body.insertAdjacentHTML('afterbegin', minimalHTML);
    return;
  }

  const plainLinkCls = (on) => `
    px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      on
        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
    }`;

  const navHTML = `
  <nav class="sticky top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700/50 shadow-sm transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="${base}index.html" class="flex items-center space-x-2.5 group flex-shrink-0">
          <div class="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            <i data-lucide="shield-check" class="w-5 h-5 text-white"></i>
          </div>
          <span class="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Secure<span class="text-blue-600">X</span></span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden xl:flex items-center space-x-1">
          <!-- Home Dropdown -->
          <div class="relative" data-dropdown>
            <button type="button" data-dropdown-trigger data-dropdown-trigger-home class="flex items-center space-x-1 ${plainLinkCls(homeActive)}">
              <span>Home</span>
              <i data-lucide="chevron-down" data-dropdown-chevron class="w-4 h-4 transition-transform duration-200"></i>
            </button>
            <div data-dropdown-menu class="absolute left-0 top-full pt-2 hidden">
              <div class="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-2 w-44">
                <a href="${base}index.html" class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>Home 1</span>
                  <i data-lucide="home" class="w-4 h-4 text-blue-500"></i>
                </a>
                <a href="${base}home2.html" class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <span>Home 2</span>
                  <i data-lucide="layout-dashboard" class="w-4 h-4 text-blue-500"></i>
                </a>
              </div>
            </div>
          </div>

          ${others.map(p => `
            <a href="${base}${p.href}" class="${plainLinkCls(active === p.id)}">${p.label}</a>
          `).join('')}
        </div>

        <!-- Right side -->
        <div class="hidden xl:flex items-center space-x-2">
          <button id="theme-toggle-desktop" class="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle theme" title="Toggle dark/light">
            <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
            <i data-lucide="moon" class="w-5 h-5 block dark:hidden"></i>
          </button>
          <button id="rtl-toggle-desktop" class="p-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle RTL/LTR" title="Toggle RTL / LTR">
            <i data-lucide="align-right" class="w-5 h-5 rtl-ltr-icon"></i>
            <i data-lucide="align-left" class="w-5 h-5 rtl-rtl-icon hidden"></i>
          </button>
          <a href="login.html" class="flex items-center space-x-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <i data-lucide="log-in" class="w-4 h-4"></i>
            <span>Login</span>
          </a>
          <a href="signup.html" class="flex items-center space-x-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40">
            <i data-lucide="user-plus" class="w-4 h-4"></i>
            <span>Sign Up</span>
          </a>
        </div>

        <!-- Mobile controls -->
        <div class="flex xl:hidden items-center space-x-2">
          <button id="mobile-menu-btn" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Menu">
            <i data-lucide="menu" class="w-6 h-6" id="menu-icon-open"></i>
            <i data-lucide="x" class="w-6 h-6 hidden" id="menu-icon-close"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden xl:hidden border-t border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900">
      <div class="px-4 py-4 space-y-1">
        <!-- Home expandable -->
        <button id="mobile-home-toggle" class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${homeActive ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'} transition-colors">
          <span class="flex items-center space-x-3">
            <i data-lucide="home" class="w-4 h-4"></i>
            <span>Home</span>
          </span>
          <i data-lucide="chevron-down" id="mobile-home-chevron" class="w-4 h-4 transition-transform duration-200"></i>
        </button>
        <div id="mobile-home-submenu" class="hidden pl-12 py-1 space-y-1">
          <a href="${base}index.html" class="${plainLinkCls(false).replace('px-3.5', 'px-4').replace('space-x-1', 'space-x-3')}" style="display:flex; align-items:center;">
            <i data-lucide="dot" class="w-3 h-3 mr-2 text-blue-500 flex-shrink-0"></i>
            <span style="margin-right:0.5rem;">Home 1</span>
          </a>
          <a href="${base}home2.html" class="flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <i data-lucide="dot" class="w-3 h-3 mr-2 text-blue-500"></i>
            <span>Home 2</span>
          </a>
        </div>

        ${others.map(p => `
          <a href="${base}${p.href}" class="${plainLinkCls(active === p.id).replace('px-3.5', 'px-4')} flex items-center space-x-3 px-4 py-3">
            <i data-lucide="${p.id === 'about.html' ? 'info' : p.id === 'services.html' ? 'shield' : p.id === 'products.html' ? 'package' : p.id === 'packages.html' ? 'layers' : p.id === 'installation.html' ? 'wrench' : 'mail'}" class="w-4 h-4"></i>
            <span>${p.label}</span>
          </a>
        `).join('')}

        <!-- Theme & RTL toggles -->
        <div class="flex items-center justify-center space-x-3 pt-3 mt-3 border-t border-slate-200 dark:border-slate-700/50">
          <button id="theme-toggle-mobile" class="flex items-center space-x-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle theme" title="Toggle dark/light">
            <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
            <i data-lucide="moon" class="w-5 h-5 block dark:hidden"></i>
            <span>Theme</span>
          </button>
          <button id="rtl-toggle-mobile" class="flex items-center space-x-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle RTL/LTR" title="Toggle RTL / LTR">
            <i data-lucide="align-right" class="w-5 h-5 rtl-ltr-icon"></i>
            <i data-lucide="align-left" class="w-5 h-5 rtl-rtl-icon hidden"></i>
            <span id="rtl-toggle-label">RTL</span>
          </button>
        </div>

        <div class="pt-3 border-t border-slate-200 dark:border-slate-700/50 mt-2 space-y-2">
          <a href="login.html" class="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <i data-lucide="log-in" class="w-4 h-4"></i>
            <span>Login</span>
          </a>
          <a href="signup.html" class="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all duration-200">
            <i data-lucide="user-plus" class="w-4 h-4"></i>
            <span>Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

/* ========== Mobile Menu ========== */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');

  if (!btn || !menu) return;

  const closeMenu = () => {
    menu.classList.add('hidden');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  };

  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) closeMenu();
    else {
      menu.classList.remove('hidden');
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });

  // Home submenu toggle
  const homeToggle = document.getElementById('mobile-home-toggle');
  const homeSubmenu = document.getElementById('mobile-home-submenu');
  const chevron = document.getElementById('mobile-home-chevron');
  if (homeToggle && homeSubmenu && chevron) {
    homeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !homeSubmenu.classList.contains('hidden');
      homeSubmenu.classList.toggle('hidden');
      chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });
  }

  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  });
}

/* ========== Desktop Dropdown ========== */
function initDropdown() {
  document.querySelectorAll('[data-dropdown]').forEach(wrapper => {
    const trigger = wrapper.querySelector('[data-dropdown-trigger]');
    const menu = wrapper.querySelector('[data-dropdown-menu]');
    const chevron = wrapper.querySelector('[data-dropdown-chevron]');
    if (!trigger || !menu) return;

    const open = (force) => {
      menu.classList.remove('hidden');
      if (chevron) chevron.style.transform = 'rotate(180deg)';
      if (force === true) menu.dataset.open = '1';
    };
    const close = () => {
      menu.classList.add('hidden');
      if (chevron) chevron.style.transform = '';
      delete menu.dataset.open;
    };

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.classList.contains('hidden')) open(true);
      else close();
    });

    wrapper.addEventListener('mouseenter', () => {
      if (typeof window.innerWidth !== 'undefined' && window.innerWidth >= 1280 && !menu.dataset.open) open();
    });
    wrapper.addEventListener('mouseleave', () => {
      if (!menu.dataset.open) close();
    });

    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) close();
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('[data-dropdown-menu]:not(.hidden)').forEach(menu => {
      if (menu.closest('[data-dropdown]') && !menu.closest('[data-dropdown]').matches(':hover')) {
        const chevron = menu.closest('[data-dropdown]').querySelector('[data-dropdown-chevron]');
        menu.classList.add('hidden');
        if (chevron) chevron.style.transform = '';
        delete menu.dataset.open;
      }
    });
  });
}

/* ========== Auth Buttons ========== */
function initAuthButtons() {
  document.querySelectorAll('[data-auth]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = btn.getAttribute('data-auth');
      if (typeof handleAuth === 'function') handleAuth(action);
    });
  });
}

/* ========== Theme Management ========== */
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getSavedTheme() {
  return localStorage.getItem('securex_theme');
}

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('securex_theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

function initTheme() {
  const saved = getSavedTheme();
  if (saved) {
    setTheme(saved);
  } else {
    setTheme(getSystemTheme());
  }

  document.getElementById('theme-toggle-desktop')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getSavedTheme()) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/* ========== RTL / LTR Management ========== */
function applyRtl(rtl) {
  if (rtl) {
    document.documentElement.setAttribute('dir', 'rtl');
    setPreference('rtl', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    setPreference('rtl', 'ltr');
  }
  const label = document.getElementById('rtl-toggle-label');
  if (label) label.textContent = rtl ? 'LTR' : 'RTL';
}

function toggleRtl() {
  const current = document.documentElement.getAttribute('dir') === 'rtl';
  applyRtl(!current);
}

function initRtl() {
  const prefs = typeof getPreferences === 'function' ? getPreferences() : {};
  const initial = prefs.rtl === 'rtl';
  if (initial && document.documentElement.getAttribute('dir') !== 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
  }
  if (!initial) {
    document.documentElement.setAttribute('dir', 'ltr');
  }

  document.getElementById('rtl-toggle-desktop')?.addEventListener('click', toggleRtl);
  document.getElementById('rtl-toggle-mobile')?.addEventListener('click', toggleRtl);
}

/* ========== Init ========== */
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  initTheme();
  initRtl();
  initMobileMenu();
  initDropdown();
  initAuthButtons();
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});