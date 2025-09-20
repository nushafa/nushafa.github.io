// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('site-nav');
if (btn && nav){
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
// Dynamic year
const y = document.getElementById('year');
if (y){ y.textContent = new Date().getFullYear(); }

