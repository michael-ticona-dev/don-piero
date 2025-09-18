document.addEventListener("DOMContentLoaded", function() {
  // Función única para manejar el clic en reservas
  function handleReservaClick(event) {
    event.preventDefault();
    window.open("pages/reservacion.html", "_blank");
  }

  // Manejo de clics en TODOS los elementos de reserva
  document.querySelectorAll('#reserva, .btn-reserva, .btn-flecha').forEach(element => {
    element.addEventListener("click", handleReservaClick);
  });

  // Lógica para mostrar/ocultar ambos botones flotantes en móviles
  if (window.innerWidth <= 768) {
    const body = document.body;
    const mensajeDonPiero = document.querySelector('.contactos');
    const reservaFinal = document.querySelector('.contenedor-reserva-final');
    const contenedorReservaFlotante = document.querySelector('.contenedor-reserva-flotante');
    
    if (mensajeDonPiero && reservaFinal && contenedorReservaFlotante) {
      // Colocamos el contenedor final después del mensaje
      mensajeDonPiero.insertAdjacentElement('afterend', reservaFinal);
      
      // Función para manejar el scroll
      function handleScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        const mensajeBottom = mensajeDonPiero.offsetTop + mensajeDonPiero.offsetHeight;
        
        // Mostrar diseño cuando el usuario esté cerca del final (100px antes)
        if (scrollPosition >= mensajeBottom - 100 || scrollPosition >= pageHeight - 100) {
          body.classList.add('mostrar-final');
          // Ocultar el contenedor flotante cuando se muestra el final
          contenedorReservaFlotante.style.display = 'none';
        } else {
          body.classList.remove('mostrar-final');
          // Mostrar el contenedor flotante cuando no estamos al final
          contenedorReservaFlotante.style.display = 'flex';
        }
      }
      
      // Ejecutamos al cargar por si ya está en la parte inferior
      handleScroll();
      
      // Y añadimos el listener para el scroll
      window.addEventListener('scroll', handleScroll);
      
      // Limpiar el event listener cuando volvemos a desktop
      window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
          window.removeEventListener('scroll', handleScroll);
          // Asegurarse de que el contenedor flotante esté oculto en desktop
          contenedorReservaFlotante.style.display = 'none';
        } else {
          // Volver a agregar el listener y mostrar flotante en móvil
          window.addEventListener('scroll', handleScroll);
          handleScroll(); // Re-evaluar la posición
        }
      });
    }
  } else {
    // En desktop, asegurarse de que el contenedor flotante esté oculto
    const contenedorReservaFlotante = document.querySelector('.contenedor-reserva-flotante');
    if (contenedorReservaFlotante) {
      contenedorReservaFlotante.style.display = 'none';
    }
  }
});