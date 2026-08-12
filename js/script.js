// Minimal JS, used only where CSS/HTML can't do the job:
// 1) the hero name's typewriter effect, 2) the footer year.
// Everything else on this site (layout, nav, hover states, the
// terminal panel, project cards) is plain HTML and CSS.

(function typeHeroName() {
  var el = document.getElementById('typedName');
  if (!el) return;
  var text = 'Lohith Raj';
  var i = 0;
  var minSpeed = 50;
  var maxSpeed = 90;

  function typeNext() {
    if (i >= text.length) return;
    el.textContent += text.charAt(i);
    i++;
    var delay = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    setTimeout(typeNext, delay);
  }

  setTimeout(typeNext, 700);
})();

document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (light/dark). Initial theme is set inline in <head>
// to avoid a flash; this just handles the click + remembering choice.
(function themeToggle() {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  var root = document.documentElement;

  function reflect() {
    var isDark = root.getAttribute('data-theme') === 'dark';
    btn.setAttribute('aria-pressed', String(isDark));
    btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    reflect();
  });

  reflect();
})();
