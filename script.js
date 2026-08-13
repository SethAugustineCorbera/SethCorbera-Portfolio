// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Certificate carousel
const certTrack = document.getElementById('certTrack');
const certPrev  = document.getElementById('certPrev');
const certNext  = document.getElementById('certNext');
certPrev.addEventListener('click', () => certTrack.scrollBy({ left: -340, behavior: 'smooth' }));
certNext.addEventListener('click', () => certTrack.scrollBy({ left: 340, behavior: 'smooth' }));