(function () {
  'use strict';

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu
  var menuBtn = document.getElementById('menuBtn');
  var links = document.getElementById('navLinks');
  if (menuBtn && links) {
    menuBtn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Theme toggle (remembers choice, falls back to OS preference)
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) { /* storage blocked */ }
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
  var themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    });
  }

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('visible'); });
  }

  // Page load time (Navigation Timing API)
  window.addEventListener('load', function () {
    setTimeout(function () {
      var el = document.getElementById('loadTime');
      var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
      if (el && nav) el.textContent = Math.round(nav.loadEventEnd) + ' ms';
      else if (el) el.textContent = 'n/a';
    }, 0);
  });

  // Contact form validation
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus');
    var rules = {
      name: function (v) { return v.trim().length >= 2 ? '' : 'Please enter your name (min 2 characters).'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address.'; },
      message: function (v) { return v.trim().length >= 10 ? '' : 'Message must be at least 10 characters.'; }
    };
    var validate = function (field) {
      var msg = rules[field.name](field.value);
      form.querySelector('.err[data-for="' + field.name + '"]').textContent = msg;
      field.classList.toggle('invalid', !!msg);
      return !msg;
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      Object.keys(rules).forEach(function (n) { if (!validate(form.elements[n])) ok = false; });
      if (!ok) { status.textContent = 'Please fix the highlighted fields.'; return; }
      var subject = encodeURIComponent('Portfolio contact from ' + form.elements.name.value.trim());
      var body = encodeURIComponent(form.elements.message.value.trim() + '\n\nFrom: ' + form.elements.email.value.trim());
      status.textContent = 'Opening your email app...';
      window.location.href = 'mailto:YOUR_EMAIL@example.com?subject=' + subject + '&body=' + body;
    });
    Object.keys(rules).forEach(function (n) {
      form.elements[n].addEventListener('blur', function (e) { validate(e.target); });
    });
  }
})();
