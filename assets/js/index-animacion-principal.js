document.addEventListener("DOMContentLoaded", () => {
  // Listas de imágenes (puedes agregar hasta 10 o más)
  const imgsDesktop = [
    'assets/images/desktop/baner-numero1.jpg',
    'assets/images/desktop/baner-numero2.jpg',
    'assets/images/desktop/baner-numero3.jpg'
  ];

  const imgsMobile = [
    'assets/images/mobile/baner-numero1.jpg',
    'assets/images/mobile/baner-numero2.jpg',
    'assets/images/mobile/baner-numero3.jpg'
  ];

  const imgTag = document.getElementById('imgRotatoria');
  const mmQuery = window.matchMedia('(max-width: 768px)');
  const isMobile = () => mmQuery.matches;

  // Preload
  function preload(arr) {
    arr.forEach(src => {
      const i = new Image();
      i.src = src;
    });
  }

  preload(imgsDesktop);
  preload(imgsMobile);

  // Siempre arrancar con "baner-numero1"
  let imgs = isMobile() ? imgsMobile : imgsDesktop;
  let index = 0; // siempre apunta al primero
  imgTag.src = imgs[index]; // baner-numero1

  mmQuery.addEventListener('change', () => {
    const nuevoSet = isMobile() ? imgsMobile : imgsDesktop;
    if (nuevoSet !== imgs) {
      imgs = nuevoSet;
      index = 0;
      imgTag.src = imgs[index];
    }
  });

  // Rotación automática
  let timer = setInterval(() => avanzar(1), 5000);

  function avanzar(paso) {
    imgTag.style.opacity = 0;
    setTimeout(() => {
      index = (index + paso + imgs.length) % imgs.length;
      imgTag.src = imgs[index];
      imgTag.style.opacity = 1;
    }, 500);
  }

  window.cambiarImagen = function(dir) {
    clearInterval(timer);
    avanzar(dir);
    timer = setInterval(() => avanzar(1), 5000);
  };

  /*****************
   * NUEVO CÓDIGO  
   *****************/
  const wrapImg = document.querySelector('.wrap-img');

  wrapImg.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;

    if (clickPosition < rect.width / 2) {
      cambiarImagen(-1);
    } else {
      cambiarImagen(1); 
    }
  });

  wrapImg.addEventListener('mouseenter', () => {
    document.querySelectorAll('.zona-clic').forEach(btn => {
      btn.style.opacity = '0';
    });
  });

  wrapImg.addEventListener('mouseleave', () => {
    document.querySelectorAll('.zona-clic').forEach(btn => {
      btn.style.opacity = '1';
    });
  });
});
