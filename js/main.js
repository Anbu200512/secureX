/* SecureX Main - Utilities, Toasts, Back to Top, Scroll Animations */

/* ========== localStorage Preferences ========== */
function getPreferences() {
  try {
    return JSON.parse(localStorage.getItem('securex_preferences')) || {};
  } catch (e) {
    return {};
  }
}

function setPreference(key, value) {
  const prefs = getPreferences();
  prefs[key] = value;
  localStorage.setItem('securex_preferences', JSON.stringify(prefs));
}

/* ========== Auth Notice (demo) ========== */
function handleAuth(action) {
  const label = action === 'login' ? 'Login' : 'Sign up';
  showToast(label + ' is a demo feature. Thanks for exploring SecureX!', 'info');
}

/* ========== Toast Notifications ========== */
function showToast(message, type = 'success', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-20 inset-x-4 sm:inset-x-auto sm:right-4 z-[100] space-y-3 max-w-sm pointer-events-none';
    document.body.appendChild(container);
  }

  const icons = {
    success: 'check-circle',
    error: 'alert-circle',
    info: 'info',
    warning: 'alert-triangle'
  };
  const colors = {
    success: 'bg-emerald-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-amber-600'
  };

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto flex items-center space-x-3 px-5 py-3.5 rounded-xl text-white shadow-2xl toast-enter ${colors[type] || colors.info}`;
  toast.innerHTML = `
    <i data-lucide="${icons[type] || 'info'}" class="w-5 h-5 flex-shrink-0"></i>
    <p class="text-sm font-medium flex-1">${message}</p>
    <button onclick="this.parentElement.remove()" class="flex-shrink-0 p-0.5 hover:bg-white/20 rounded-lg transition-colors">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;

  container.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons({ nodes: [toast] });

  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ========== Back to Top ========== */
function renderBackToTop() {
  const html = `
  <button id="back-to-top" class="fixed bottom-6 right-6 z-50 w-11 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center transition-all duration-300 opacity-0 translate-y-4 pointer-events-none" aria-label="Back to top">
    <i data-lucide="arrow-up" class="w-5 h-5"></i>
  </button>
  `;
  document.body.insertAdjacentHTML('beforeend', html);

  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      btn.classList.add('opacity-100', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ========== Scroll Reveal Animations ========== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-reveal, .stagger-children').forEach(el => {
    observer.observe(el);
  });
}

/* ========== Counter Animation ========== */
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = prefix + Math.floor(current) + suffix;
        }, 16);

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ========== Init ========== */
document.addEventListener('DOMContentLoaded', () => {
  renderBackToTop();
  setTimeout(() => {
    initScrollReveal();
    animateCounters();
  }, 100);
});
