document.addEventListener("DOMContentLoaded", function () {
    const mapa = document.querySelector(".contenedor-mapa iframe");

    let reintentoHecho = false;

    // Espera 2.5 segundos y revisa si el mapa cargó
    setTimeout(() => {
      const cargaFallida = !mapa.contentDocument || mapa.contentDocument.body.innerHTML.includes("sad");

      if (cargaFallida && !reintentoHecho) {
        reintentoHecho = true;
        console.warn("Mapa no cargó correctamente. Intentando recargar...");
        mapa.src = mapa.src; // recarga el iframe
      }
    }, 2500);

    // También si ocurre un error directo
    mapa.onerror = function () {
      if (!reintentoHecho) {
        reintentoHecho = true;
        console.warn("Error en iframe, recargando...");
        mapa.src = mapa.src;
      }
    };
  });