/* =========================================================
   MAIN.JS
   All the page behavior, one small function per feature:
   1. Mobile menu
   2. Header border on scroll
   3. Highlight the current section in the menu
   4. Certificate viewer (dialog)
   This file is loaded with "defer", so the page is ready when it runs.
   ========================================================= */


/* ---------- 1. MOBILE MENU ---------- */
function setupMobileMenu() {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  function setMenu(isOpen) {
    links.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setMenu(!links.classList.contains('open'));
  });

  // Close after choosing a link
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenu(false);
    });
  });

  // Close with the Escape key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false);
  });

  // Close when clicking outside the menu
  document.addEventListener('click', function (event) {
    var clickedInside = links.contains(event.target) || toggle.contains(event.target);
    if (!clickedInside) setMenu(false);
  });
}


/* ---------- 2. HEADER BORDER ON SCROLL ---------- */
function setupHeaderScroll() {
  var header = document.getElementById('siteHeader');
  if (!header) return;

  function update() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}


/* ---------- 3. HIGHLIGHT CURRENT SECTION ---------- */
function setupActiveLink() {
  var links = document.querySelectorAll('.nav-links a');
  var sections = document.querySelectorAll('main section[id], footer[id]');
  if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

  function highlight(id) {
    links.forEach(function (link) {
      var isCurrent = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', isCurrent);
      if (isCurrent) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  // A section counts as "current" while it crosses the middle band of the screen
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) highlight(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(function (section) {
    observer.observe(section);
  });
}


/* ---------- 4. CERTIFICATE VIEWER ---------- */
function setupLightbox() {
  var dialog = document.getElementById('lightbox');
  var image = document.getElementById('lightboxImg');
  var closeButton = document.getElementById('lightboxClose');
  var openButtons = document.querySelectorAll('.cert-open');
  if (!dialog || !image || !closeButton || typeof dialog.showModal !== 'function') return;

  openButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      image.src = button.dataset.full;
      image.alt = button.dataset.alt || '';
      dialog.showModal();
    });
  });

  closeButton.addEventListener('click', function () {
    dialog.close();
  });

  // Clicking the dark area around the image closes it
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
}


/* ---------- START EVERYTHING ---------- */
setupMobileMenu();
setupHeaderScroll();
setupActiveLink();
setupLightbox();
