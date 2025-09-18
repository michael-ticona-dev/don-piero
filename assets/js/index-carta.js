// -----------------------------
// CONFIGURACIÓN DE MODALES
// -----------------------------
const botones = {
  "abrir-carta-comida": { modal: "modal-comida", src: "assets/pdf/carta-comida.pdf" },
  "abrir-carta-bebidas": { modal: "modal-bebidas", src: "assets/pdf/carta-bebidas.pdf" },
  "abrir-proformas": { modal: "modal-proformas", src: "assets/pdf/proformas-don-piero.pdf" }
};

// -----------------------------
// ABRIR MODAL
// -----------------------------
function abrir_modal(modalId, pdfSrc) {
  const modal = document.getElementById(modalId);
  const iframe = modal.querySelector("iframe");
  
  // Remover clase hidden y agregar active
  modal.classList.remove("hidden");
  modal.classList.add("active");
  
  // Establecer la fuente del PDF
  iframe.src = pdfSrc;
  
  // Prevenir scroll del body
  document.body.style.overflow = "hidden";
  
  console.log("Modal abierto:", modalId);
}

// -----------------------------
// CERRAR MODAL
// -----------------------------
function cerrar_modal(modalId) {
  const modal = document.getElementById(modalId);
  const iframe = modal.querySelector("iframe");
  
  // Remover clase active
  modal.classList.remove("active");
  
  // Permitir scroll del body
  document.body.style.overflow = "auto";
  
  // Esperar a que termine la transición y ocultar
  setTimeout(() => {
    modal.classList.add("hidden");
    iframe.src = "";
  }, 300);
}

// -----------------------------
// INICIALIZAR EVENTOS
// -----------------------------
document.addEventListener("DOMContentLoaded", function() {
  // Eventos de botones de abrir
  Object.keys(botones).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const { modal, src } = botones[id];
        abrir_modal(modal, src);
      });
    }
  });

  // Eventos de botones de cerrar
  document.querySelectorAll(".cerrar").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = btn.closest(".modal").id;
      cerrar_modal(modalId);
    });
  });

  // Cerrar modal al hacer click fuera
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        cerrar_modal(modal.id);
      }
    });
  });

  // Cerrar modal con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.active").forEach(modal => {
        cerrar_modal(modal.id);
      });
    }
  });
});