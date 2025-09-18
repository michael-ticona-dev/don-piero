const checkbox = document.getElementById('menu-hamburger');
const nav = document.querySelector('.nav-bar');

/* -----------------------------
   ABRIR / CERRAR MENÚ (checkbox)
------------------------------ */
checkbox.addEventListener('change', () => {
  nav.classList.toggle('active', checkbox.checked);
});

/* -----------------------------
   CERRAR MENÚ AL HACER CLIC FUERA
------------------------------ */
document.addEventListener('click', (e) => {
  if (
    checkbox.checked &&
    !nav.contains(e.target) &&
    !checkbox.contains(e.target)
  ) {
    checkbox.checked = false;
    nav.classList.remove('active');
  }
});

/* -----------------------------------------------
   CAMBIO DE ESTILO DEL HEADER CON SCROLL
-------------------------------------------------- */
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
});

/* -----------------------------
   CERRAR Y SCROLL SUAVE AL ENLACE
------------------------------ */
document.querySelectorAll('.nav-bar a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // evita salto brusco
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // cerrar menú
    checkbox.checked = false;
    nav.classList.remove('active');
  });
});

function smoothScroll(target, duration = 1000) {
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    
    const ease = (t) => t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const run = startPosition + distance * ease(timeElapsed / duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

// Seleccionamos todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      smoothScroll(target, 1000); // <-- Ajusta duración (ms) para más suavidad
    }
  });
});
