(function () {
  var nav = document.querySelector('.top-navbar');
  if (!nav) return;

  function update() {
    nav.classList.toggle('is-scrolled', window.scrollY > 0);
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
})();
