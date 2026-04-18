// ═══════════════════════════════════════════
// HabitFlow.cc — Global JavaScript
// Enhanced: WeChat WebView, touch, safe area
// ═══════════════════════════════════════════

// ── WeChat Environment Detection ──
(function() {
  var ua = navigator.userAgent || '';
  var isWeChat = /MicroMessenger/i.test(ua);
  var isWeChatMiniProgram = /miniProgram/i.test(ua) || window.__wxjs_environment === 'miniprogram';
  document.documentElement.dataset.wechat = isWeChat ? 'true' : '';
  document.documentElement.dataset.miniprogram = isWeChatMiniProgram ? 'true' : '';
})();

// ── Viewport Height Fix (100vh bug on mobile) ──
(function() {
  function setVH() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  }
  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', function() {
    setTimeout(setVH, 100);
  });
})();

// ── Nav Scroll Effect ──
(function() {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        nav.classList.toggle('scrolled', window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ── Mobile Menu (with overlay + scroll lock) ──
(function() {
  var btn = document.querySelector('.nav-hamburger');
  var menu = document.querySelector('.nav-links');
  if (!btn || !menu) return;

  // Find or create overlay
  var overlay = document.querySelector('.nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
  }

  var isOpen = false;
  var scrollY = 0;

  function openMenu() {
    isOpen = true;
    scrollY = window.scrollY;
    btn.classList.add('open');
    menu.classList.add('open');
    overlay.classList.add('show');
    // Lock background scroll (use html instead of body for WeChat WebView compat)
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.position = 'relative';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.bottom = '0';
  }

  function closeMenu() {
    isOpen = false;
    btn.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('show');
    // Restore scroll
    document.documentElement.style.overflow = '';
    document.documentElement.style.position = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    document.body.style.bottom = '';
    window.scrollTo(0, scrollY);
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (isOpen) closeMenu();
    else openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  menu.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Close on escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });
})();

// ── Fade In on Scroll ──
(function() {
  var els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  // Use passive listener
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function(el) { observer.observe(el); });
})();

// ── Active Nav Link ──
(function() {
  var path = window.location.pathname;
  // Normalize: remove trailing slash
  path = path.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (!href) return;
    // Normalize href
    href = href.replace(/\/+$/, '') || '/';
    if (path === href || (path.indexOf(href) === 0 && href !== '/')) {
      a.classList.add('active');
    }
    if (href === '/' && path === '/') {
      a.classList.add('active');
    }
  });
})();

// ── Prevent iOS bounce overscroll (optional, WeChat handles this) ──
(function() {
  // Only apply on standalone web apps
  if (window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches) {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.webkitOverflowScrolling = 'touch';
  }
})();

// ── Smooth scroll polyfill for WeChat ──
(function() {
  if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
})();
