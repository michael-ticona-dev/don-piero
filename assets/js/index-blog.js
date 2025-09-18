document.addEventListener("DOMContentLoaded", () => {
  const blogSection = document.getElementById("blog");
  const blogOverlay = document.querySelector(".blog-overlay");
  const blogContent = document.getElementById("blog-content");
  const navBlog = document.querySelector('a[href="#blog"]');
  const cerrarBlogBtn = document.querySelector(".cerrar-blog");

  // Cargar contenido del blog evitando caché
  function cargarBlog() {
    const url = `blog/post.txt?ts=${Date.now()}`; // evita caché con timestamp

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Archivo no encontrado");
        return res.text();
      })
      .then(text => {
        blogContent.innerText = text;
      })
      .catch(() => {
        blogContent.innerText = "Error al cargar la publicación.";
      });
  }

  // Mostrar el blog
  navBlog.addEventListener("click", (e) => {
    e.preventDefault();
    cargarBlog(); // carga el texto
    blogSection.classList.remove("hidden");
  });

  // Cerrar al hacer clic fuera del contenido
  blogOverlay.addEventListener("click", (e) => {
    if (e.target === blogOverlay) {
      blogSection.classList.add("hidden");
    }
  });

  // Cerrar con el botón
  cerrarBlogBtn.addEventListener("click", () => {
    blogSection.classList.add("hidden");
  });
});
