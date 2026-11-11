(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');
  var label = button.querySelector('.theme-label');
  var KEY = 'theme';

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var dark = theme === 'dark';
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    label.textContent = dark ? 'Light' : 'Dark';
  }

  apply(saved() || systemTheme());

  button.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
