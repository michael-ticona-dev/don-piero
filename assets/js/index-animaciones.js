

/* --- Texto y elemento destino --- */
const text = 'tradición que se saborea.';
const el   = document.getElementById('animacion-escrito');

function typeEffect(text, el, delay = 100, pause = 2000) {
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i); 
      i++;
      setTimeout(type, delay);         
    } else {
      setTimeout(() => {
        el.textContent = '';
        i = 0;
        type();
      }, pause);
    }
  }

  type(); // Inicia la animación
}

/* --- Arranca el efecto al cargar el script --- */
typeEffect(text, el);



function smoothScrollTo(targetY, duration = 800) {
  const startY  = window.scrollY;
  const diff    = targetY - startY;
  let startTime;

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animate(time) {
    if (!startTime) startTime = time;
    const timeElapsed = time - startTime;
    const progress    = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOut(progress));

    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

/**
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      const duration = isMobile ? 400 : 800;

      smoothScrollTo(target.offsetTop - 60, duration);
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const cartaSection = document.querySelector(".carta");
  const img = cartaSection.querySelector("img");
  const text = cartaSection.querySelector(".section-btn-carta");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aplica la clase visible
          img.classList.add("visible");
          text.classList.add("visible");
        } else {
          // Reinicia al salir
          img.classList.remove("visible");
          text.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(cartaSection);
});



document.addEventListener("DOMContentLoaded", () => {
  const mensajeSection = document.querySelector("#mensaje_donpiero");
  const text = mensajeSection.querySelector(".mensaje-icon");
  const img = mensajeSection.querySelector(".icon");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          text.classList.add("visible");
          img.classList.add("visible");
        } else {
          // Reinicia animación al salir
          text.classList.remove("visible");
          img.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(mensajeSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const contactoSection = document.querySelector("#contactos");
  const infoContacto = contactoSection.querySelector(".info-contacto");
  const infoHorario = contactoSection.querySelector(".info-horario");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          infoContacto.classList.add("visible");
          infoHorario.classList.add("visible");
        } else {
          // Reinicia animación al salir
          infoContacto.classList.remove("visible");
          infoHorario.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(contactoSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const cartaSection = document.querySelector(".carta");
  const img = cartaSection.querySelector("img");
  const text = cartaSection.querySelector(".section-btn-carta");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.classList.add("visible");
          text.classList.add("visible");
        } else {
          img.classList.remove("visible");
          text.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(cartaSection);
});
