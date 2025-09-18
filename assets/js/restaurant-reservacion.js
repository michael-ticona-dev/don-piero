/* =========================================================
 *  SISTEMA DE RESERVAS - DON PIERO
 * =======================================================*/

/* ---------- 1. MAPA GLOBAL DE NOMBRES ---------- */
const nombres_platos = {
  // Piqueos / Entradas
  "tequenos-de-queso": "Tequeños de queso",
  "tequenos-de-marisco": "Tequeños de mariscos",
  "leche-de-tigre": "Leche de Tigre",
  "yuquitas-fritas-con-queso-frito": "Yuquitas fritas con queso frito",
  "ronda-marina": "Ronda Marina",
  "jalea-real": "Jalea Real",
  "fuente-de-ceviche": "Fuente de Ceviche",

  // Mixtos
  "mixto-1": "Mixto 1",
  "mixto-2": "Mixto 2",
  "mixto-3": "Mixto 3",
  "mixto-4": "Mixto 4",
  "mixto-5": "Mixto 5",
  "mixto-6": "Mixto 6",
  "mixto-7": "Mixto 7",
  "mixto-8": "Mixto 8",

  // Ceviches
  "ceviche-de-trucha": "Ceviche de trucha",
  "tiradito": "Tiradito",
  "ceviche-en-crema-de-rocoto": "Ceviche en crema de rocoto",
  "ceviche-de-mariscos": "Ceviche de mariscos",
  "ceviche-en-crema-de-olivo": "Ceviche en crema de olivo",
  "fiesta-criolla": "Fiesta Criolla",
  "ceviche-en-salsa-tricolor": "Ceviche en salsa tricolor",

  // A base de Trucha
  "trucha-dorada": "Trucha Dorada",
  "chicharron-de-trucha": "Chicharrón de trucha",
  "milanesa": "Milanesa",
  "don-piero": "Don Piero",
  "al-ajillo": "Al ajillo",
  "napolitana": "Napolitana",
  "meuniere": "Meunière",
  "enrrollado-de-trucha-a-las-finas-hierbas": "Enrrollado de trucha a las finas hierbas",

  // Truchas en Salsa
  "trucha-en-salsa-de-mariscos": "Trucha en salsa de mariscos",
  "trucha-en-salsa-de-champiñones": "Trucha en salsa de champiñones",
  "sueños-en-don-piero": "Sueños de Don Piero",
  "trucha-en-salsa-picante-de-mariscos": "Trucha en salsa picante de mariscos",
  "trucha-en-salsa-de-ajos": "Trucha en salsa de ajos",

  // Parrillas
  "parrilla-de-trucha": "Parrilla de trucha",
  "pulpo-a-la-parrilla": "Pulpo a la parrilla",
  "trucha-a-la-plancha": "Trucha a la plancha",
  "parrilla-de-pechuga-de-pollo": "Parrilla de pechuga de pollo",
  "parrilla-de-res": "Parrilla de res",
  "parrilla-criolla-de-cerdo": "Parrilla criolla de cerdo",
  "costillar-de-cerdo-ahumado": "Costillar de cerdo ahumado",
  "trucha-rellena-a-la-caja-china": "Trucha rellena a la caja china",
  "cerdo-a-la-caja-china": "Cerdo a la caja china",

  // Caldos y Mariscos
  "chupe-de-camaron": "Chupe de camarón",
  "sudado-de-trucha": "Sudado de trucha",
  "parihuela-de-trucha-y-mariscos": "Parihuela de trucha y mariscos",
  "chilcano-de-trucha": "Chilcano de trucha",
  "arroz-de-mariscos": "Arroz de mariscos",
  "chicharron-de-mariscos": "Chicharrón de mariscos",

  // Platos Criollos y Saludables
  "cuy-chactado": "Cuy chactado",
  "milanesa-de-pollo": "Milanesa de pollo",
  "caldo-blanco-de-lomos": "Caldo blanco de lomos",
  "chicharron-de-chancho": "Chicharrón de chancho",
  "trucha-al-vapor": "Trucha al vapor",
  "papillote-de-trucha": "Papillote de trucha",
  "tortilla-vegetariana": "Tortilla vegetariana",

  // Platos Infantiles y Recomendados
  "hawaiana": "Hawaiana",
  "chicharron-de-pollo": "Chicharrón de pollo",
  "hamburguesas-de-trucha": "Hamburguesas de trucha",
  "chicken-tender": "Chicken Tender",
  "trucha-al-orly": "Trucha al Orly",
  "chaufa-de-trucha": "Chaufa de trucha",
  "lasagna-de-trucha-y-mariscos": "Lasagna de trucha y mariscos",
  "timpo-de-trucha": "Timpo de trucha",

  // Postres
  "queso-helado": "Queso helado",
  "crepes-con-chocolate": "Crepes con chocolate",
  "waffles-en-forma-de-trucha": "Waffles en forma de trucha",
  "ensalada-de-frutas": "Ensalada de frutas"
};

const nombres_bebidas = {
  // Chicha Morada
  "chicha-morada-1l": "Chicha Morada 1L",
  "chicha-morada-1.5l": "Chicha Morada 1.5L",
  "chicha-morada-vaso": "Chicha Morada Vaso",
  
  // Carambola
  "carambola-1l": "Carambola 1L",
  "carambola-1.5l": "Carambola 1.5L",
  "carambola-vaso": "Carambola Vaso",
  
  // Limonada Americana
  "limonada-americana-1l": "Limonada Americana 1L",
  "limonada-americana-1.5l": "Limonada Americana 1.5L",
  "limonada-americana-vaso": "Limonada Americana Vaso",
  
  // Limonada Frozen
  "limonada-frozen-1l": "Limonada Frozen 1L",
  "limonada-frozen-1.5l": "Limonada Frozen 1.5L",
  "limonada-frozen-vaso": "Limonada Frozen Vaso",
  
  // Maracuyá
  "maracuya-1l": "Maracuyá 1L",
  "maracuya-1.5l": "Maracuyá 1.5L",
  "maracuya-vaso": "Maracuyá Vaso",
  
  // Piña
  "pina-1l": "Piña 1L",
  "pina-1.5l": "Piña 1.5L",
  "pina-vaso": "Piña Vaso",
  
  // Tumbo
  "tumbo-1l": "Tumbo 1L",
  "tumbo-1.5l": "Tumbo 1.5L",
  "tumbo-vaso": "Tumbo Vaso",
  
  // Papaya AQP
  "papaya-aqp-1l": "Papaya AQP 1L",
  "papaya-aqp-1.5l": "Papaya AQP 1.5L",
  "papaya-aqp-vaso": "Papaya AQP Vaso",
  
  // Vinos
  "vino-blanco": "Vino Blanco",
  "vino-rosse": "Vino Rosse",
  
  // Aguas
  "agua-con-gas": "Agua con Gas",
  "agua-sin-gas": "Agua sin Gas",
  
  // Anís Najar
  "anis-najar-1l": "Anís Najar 1L",
  "anis-najar-1.4l": "Anís Najar 1.4L",
  "anis-najar-shot": "Anís Najar Shot",
  
  // Infusiones
  "infusion-te": "Infusión Té",
  "infusion-mate": "Infusión Mate",
  "infusion-anis": "Infusión Anís",
  "infusion-manzanilla": "Infusión Manzanilla",
  
  // Otros
  "otros-edulcorante": "Edulcorante",
  "otros-jarra-hielo": "Jarra de Hielo",
  "otros-derecho-corcho": "Derecho de Corcho",
  
  // Gaseosas
  "gaseosa-coca-2l": "Coca Cola 2L",
  "gaseosa-coca-1l": "Coca Cola 1L",
  "gaseosa-inca-2l": "Inca Kola 2L",
  "gaseosa-inca-1l": "Inca Kola 1L",
  "gaseosa-escocesa-2l": "Escocesa 2L",
  "gaseosa-escocesa-1.5l": "Escocesa 1.5L",
  "gaseosa-escocesa-1l": "Escocesa 1L",
  "gaseosa-coca-500ml": "Coca Cola 500ml",
  "gaseosa-inca-500ml": "Inca Kola 500ml",
  
  // Cervezas
  "cerveza-arequipena": "Cerveza Arequipeña",
  "cerveza-malta": "Cerveza Malta",
  "cerveza-trigo": "Cerveza Trigo",
  "cerveza-pilsen": "Cerveza Pilsen",
  
  // Cócteles especiales
  "cramberry-lemonade": "Cramberry Lemonade",
  "bebida-de-los-dioses": "Bebida de los Dioses",
  "chichobello": "Chichobello",
  "frapuchino": "Frapuchino",
  "mojito-esmeralda": "Mojito Esmeralda",
  "shirley-temple": "Shirley Temple",
  "dulce-16": "Dulce 16",
  "virgen-colada": "Virgen Colada",
  "piscina-azul": "Piscina Azul",
  "turbo": "Turbo",
  "oasis": "Oasis",
  "green-moon": "Green Moon",
  
  // Shots
  "shot-tequila": "Shot Tequila",
  "shot-jagermeister": "Shot Jagermeister",
  "shot-anis": "Shot Anís",
  "shot-pisco": "Shot Pisco",
  "shot-ron": "Shot Ron",
  "shot-vodka": "Shot Vodka",
  
  // Bebidas con Jager
  "jager-mix-lima": "Jager Mix Lima",
  "mojito-jager": "Mojito Jager",
  "jagerbomb": "Jagerbomb",
  "sexy-red": "Sexy Red",
  "delicia-jager": "Delicia Jager",
  
  // Jarras
  "jarra-pisco-sour": "Jarra Pisco Sour",
  "jarra-sangria-don-piero": "Jarra Sangría Don Piero",
  "jarra-hellboy": "Jarra Hellboy",
  "jarra-sangria-hawaiana": "Jarra Sangría Hawaiana",
  
  // Cócteles premium
  "enamorate": "Enamorate",
  "globo-pop": "Globo Pop",
  "amor-salvaje": "Amor Salvaje",
  "pantera-rosa": "Pantera Rosa",
  "aguamarina": "Aguamarina",
  "margarita-hash": "Margarita Hash",
  "el-santo": "El Santo",
  "hulk": "Hulk",
  "el-virus-2020": "El Virus 2020",
  "macchu-pichu": "Macchu Pichu",
  "pisco-sour": "Pisco Sour",
  "scarlet": "Scarlet",
  "tumbao": "Tumbao",
  "mango-swing": "Mango Swing",
  "amor-de-rosas": "Amor de Rosas",
  "piscopeach-mojito": "Piscopeach Mojito",
  "algarrobina": "Algarrobina",
  "isla-para-dos": "Isla para Dos",
  "atardecer-en-don-piero": "Atardecer en Don Piero",
  "mojito": "Mojito",
  "maracujito": "Maracujito",
  "pina-colada": "Piña Colada",
  "tiburon": "Tiburón",
  "el-ultimo-trago": "El Último Trago",
  "sex-on-the-river": "Sex on the River",
  "orgasmo": "Orgasmo",
  "el-rey": "El Rey",
  "margarita-en-rojo-pasion": "Margarita en Rojo Pasión",
  "rompe-cachos": "Rompe Cachos",
  "happy-birthday": "Happy Birthday",
  "el-delicioso": "El Delicioso",
  "directo-al-corazon": "Directo al Corazón",
  "cosita-rica": "Cosita Rica",
  "chocolatin": "Chocolatin",
  "suspiro-a-la-arequipena": "Suspiro a la Arequipeña"
};

/* =========================================================
 * INICIALIZACIÓN DE DATOS
 * =======================================================*/
function obtener_mapa_platos_inicial() {
  return Object.fromEntries(Object.keys(nombres_platos).map(id => [id, 0]));
}

function obtener_mapa_bebidas_inicial() {
  return Object.fromEntries(Object.keys(nombres_bebidas).map(id => [id, 0]));
}

let datos_reserva = {
  personas: null,
  fecha: null,
  hora: null,
  nombre: null,
  telefono: null,
  email: null,
  comentarios: null,
  opcionMenu: "carta",
  platos: obtener_mapa_platos_inicial(),
  bebidas: obtener_mapa_bebidas_inicial()
};

/* =========================================================
 * CONFIGURACIÓN INICIAL
 * =======================================================*/
document.addEventListener("DOMContentLoaded", () => {
  configurar_selector_personas();
  configurar_telefono();
  configurar_navegacion_pasos();
  configurar_seleccion_platos();
  configurar_seleccion_bebidas();
  configurar_envio_reserva();
  configurar_fecha_minima();
});

/* =========================================================
 * SELECCIÓN DE PERSONAS
 * =======================================================*/
function configurar_selector_personas() {
  const botones = document.querySelectorAll(".boton-persona");
  const input_personalizado = document.getElementById("personas-personalizado");

  botones.forEach(btn => {
    btn.addEventListener("click", () => manejar_seleccion_personas(btn, botones));
  });

  input_personalizado.addEventListener("input", () => {
    // Validar que solo sea número entero positivo
    let valor = input_personalizado.value;
    valor = valor.replace(/[^0-9]/g, ''); // Eliminar todo excepto números
    
    // Si el valor está vacío o es 0, establecer como null
    if (!valor || valor === '0') {
      input_personalizado.value = '';
      datos_reserva.personas = null;
      return;
    }
    
    // Eliminar ceros al inicio
    valor = valor.replace(/^0+/, '');
    
    // Convertir a número y limitar a un máximo razonable
    const numPersonas = parseInt(valor);
    if (numPersonas > 100) {
      input_personalizado.value = '100';
      datos_reserva.personas = 100;
    } else {
      input_personalizado.value = numPersonas;
      datos_reserva.personas = numPersonas;
    }
  });
}

function manejar_seleccion_personas(boton, todos_botones) {
  todos_botones.forEach(b => b.classList.remove("seleccionado"));
  boton.classList.add("seleccionado");

  const grupo_personalizado = document.getElementById("grupo-personas-personalizado");
  const input_personalizado = document.getElementById("personas-personalizado");
  
  if (boton.dataset.personas === "mas") {
    grupo_personalizado.style.display = "block";
    input_personalizado.value = ''; // Limpiar el input
    input_personalizado.focus(); // Dar foco al input
    datos_reserva.personas = null;
  } else {
    grupo_personalizado.style.display = "none";
    datos_reserva.personas = parseInt(boton.dataset.personas);
  }
}

/* =========================================================
 * TELÉFONO SOLO DÍGITOS
 * =======================================================*/
function configurar_telefono() {
  const tel = document.getElementById("telefono");
  if (!tel) return;
  tel.setAttribute("inputmode", "numeric");
  tel.addEventListener("input", e => {
    e.target.value = e.target.value.replace(/[^\d]/g, "");
  });
}

/* =========================================================
 * NAVEGACIÓN ENTRE PASOS
 * =======================================================*/
function configurar_navegacion_pasos() {
  // Botones siguientes
  document.getElementById("siguiente-1").addEventListener("click", validar_paso1);
  document.getElementById("siguiente-2").addEventListener("click", validar_paso2);
  document.getElementById("siguiente-3").addEventListener("click", validar_paso3);
  document.getElementById("siguiente-4").addEventListener("click", validar_paso4);

  // Botones anteriores
  document.getElementById("anterior-2").addEventListener("click", () => mostrar_paso(1));
  document.getElementById("anterior-3").addEventListener("click", () => mostrar_paso(2));
  document.getElementById("anterior-4").addEventListener("click", () => mostrar_paso(3));
  document.getElementById("anterior-5").addEventListener("click", () => mostrar_paso(4));
}

/* =========================================================
 * VALIDACIÓN DE PASOS
 * =======================================================*/
function validar_paso1() {
  if (!datos_reserva.personas || datos_reserva.personas < 10) {
    return alert("Selecciona un número válido de personas (mínimo 10)");
  }
  mostrar_paso(2);
}

function validar_paso2() {
  const fecha_input = document.getElementById("fecha").value;
  const hora_input = document.getElementById("hora").value;

  if (!fecha_input || !hora_input) return alert("Completa la fecha y hora");

  const [anio, mes, dia] = fecha_input.split("-").map(Number);
  const fecha_seleccionada = new Date(anio, mes - 1, dia);
  fecha_seleccionada.setHours(0, 0, 0, 0);

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const fecha_minima = new Date(hoy);
  fecha_minima.setDate(hoy.getDate() + 1);

  if (fecha_seleccionada < fecha_minima) return alert("La fecha debe ser a partir de mañana");

  datos_reserva.fecha = fecha_input;
  datos_reserva.hora = hora_input;
  mostrar_paso(3);
}

function validar_paso3() {
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nombre || !telefono || !email) return alert("Completa todos los datos personales");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Correo inválido");

  Object.assign(datos_reserva, { nombre, telefono, email });
  mostrar_paso(4);
}

function validar_paso4() {
  datos_reserva.opcionMenu = document.getElementById("opcion-carta").checked ? "carta" : "seleccionar";
  datos_reserva.comentarios = document.getElementById("comentarios").value.trim(); 
  actualizar_resumen_reserva();
  mostrar_paso(5);
}

function configurar_seleccion_platos() {
  document.querySelectorAll('input[name="opcion-menu"]').forEach(radio => {
    radio.addEventListener("change", () => {
      document.getElementById("seleccion-platos").style.display = radio.value === "seleccionar" ? "block" : "none";
    });
  });

  document.querySelectorAll(".boton-aumentar").forEach(btn => {
    const platoId = btn.dataset.plato;
    // Solo configurar si es un plato (existe en nombres_platos pero no en nombres_bebidas)
    if (nombres_platos[platoId] && !nombres_bebidas[platoId]) {
      btn.addEventListener("click", () => cambiar_cantidad(platoId, +1));
    }
  });
  
  document.querySelectorAll(".boton-reducir").forEach(btn => {
    const platoId = btn.dataset.plato;
    if (nombres_platos[platoId] && !nombres_bebidas[platoId]) {
      btn.addEventListener("click", () => cambiar_cantidad(platoId, -1));
    }
  });
  
  document.querySelectorAll(".boton-eliminar").forEach(btn => {
    const platoId = btn.dataset.plato;
    if (nombres_platos[platoId] && !nombres_bebidas[platoId]) {
      btn.addEventListener("click", () => {
        datos_reserva.platos[platoId] = 0;
        actualizar_cantidad_plato(platoId);
      });
    }
  });
}

function configurar_seleccion_bebidas() {
  // Configurar botones de bebidas (que usan data-plato pero son bebidas)
  document.querySelectorAll(".boton-aumentar").forEach(btn => {
    const platoId = btn.dataset.plato;
    // Solo configurar si es una bebida (existe en nombres_bebidas)
    if (nombres_bebidas[platoId]) {
      btn.addEventListener("click", () => cambiar_cantidad_bebida(platoId, +1));
    }
  });
  
  document.querySelectorAll(".boton-reducir").forEach(btn => {
    const platoId = btn.dataset.plato;
    if (nombres_bebidas[platoId]) {
      btn.addEventListener("click", () => cambiar_cantidad_bebida(platoId, -1));
    }
  });
  
  document.querySelectorAll(".boton-eliminar").forEach(btn => {
    const platoId = btn.dataset.plato;
    if (nombres_bebidas[platoId]) {
      btn.addEventListener("click", () => {
        datos_reserva.bebidas[platoId] = 0;
        actualizar_cantidad_bebida(platoId);
      });
    }
  });
}

function cambiar_cantidad(plato_id, delta) {
  datos_reserva.platos[plato_id] = Math.max(0, datos_reserva.platos[plato_id] + delta);
  actualizar_cantidad_plato(plato_id);
}

function cambiar_cantidad_bebida(bebida_id, delta) {
  datos_reserva.bebidas[bebida_id] = Math.max(0, datos_reserva.bebidas[bebida_id] + delta);
  actualizar_cantidad_bebida(bebida_id);
}

function actualizar_cantidad_plato(platoId) {
  const elemento = document.querySelector(`.cantidad-plato[data-plato="${platoId}"]`);
  if (elemento) {
    elemento.textContent = datos_reserva.platos[platoId];
  }
}

function actualizar_cantidad_bebida(bebidaId) {
  const elemento = document.querySelector(`.cantidad-plato[data-plato="${bebidaId}"]`);
  if (elemento) {
    elemento.textContent = datos_reserva.bebidas[bebidaId];
  }
}

function mostrar_paso(n) {
  // Ocultar todos los pasos
  document.querySelectorAll(".paso").forEach(p => {
    p.classList.remove("activo");
  });
  
  // Mostrar el paso actual
  const pasoActual = document.getElementById(`paso-${n}`);
  if (pasoActual) {
    pasoActual.classList.add("activo");
  } else {
    console.error(`No se encontró el elemento paso-${n}`);
  }
  
  // Actualizar la barra de progreso si existe
  document.querySelectorAll(".paso-progreso").forEach(p => {
    p.classList.remove("activo");
  });
  
  const progresoActual = document.querySelector(`.paso-progreso[data-paso="${n}"]`);
  if (progresoActual) {
    progresoActual.classList.add("activo");
  }
}

/* =========================================================
 * RESUMEN DE RESERVA
 * =======================================================*/
function actualizar_resumen_reserva() {
  // Corregir el problema de NaN en el resumen de personas
  const resumenPersonas = document.getElementById("resumen-personas");
  if (resumenPersonas) {
    resumenPersonas.textContent = datos_reserva.personas !== null ? datos_reserva.personas : "No especificado";
  }

  // Formatear y mostrar fecha
  if (datos_reserva.fecha) {
    const [anio, mes, dia] = datos_reserva.fecha.split("-").map(Number);
    const fechaLocal = new Date(anio, mes - 1, dia);
    document.getElementById("resumen-fecha").textContent = fechaLocal.toLocaleDateString("es-ES");
  }

  // Mostrar hora, nombre, teléfono y email
  document.getElementById("resumen-hora").textContent = datos_reserva.hora || "";
  document.getElementById("resumen-nombre").textContent = datos_reserva.nombre || "";
  document.getElementById("resumen-telefono").textContent = datos_reserva.telefono || "";
  document.getElementById("resumen-email").textContent = datos_reserva.email || "";

  document.getElementById("resumen-opcion-menu").textContent =
    datos_reserva.opcionMenu === "carta" ? "Ver carta en restaurante" : "Platos seleccionados";

  // Actualizar lista de platos
  const cont_platos = document.getElementById("resumen-platos-container");
  const lista_platos = document.getElementById("resumen-platos-lista");
  if (lista_platos) {
    lista_platos.innerHTML = "";

    if (datos_reserva.opcionMenu === "seleccionar") {
      Object.entries(datos_reserva.platos).forEach(([id, cant]) => {
        if (cant > 0 && nombres_platos[id] && !nombres_bebidas[id]) {
          const nombre = nombres_platos[id] || "(sin nombre)";
          lista_platos.insertAdjacentHTML(
            "beforeend",
            `<div class="resumen-plato"><span>${nombre}</span><span>${cant}</span></div>`
          );
        }
      });
    }
    cont_platos.style.display = lista_platos.children.length ? "block" : "none";
  }

  // Añadir sección de bebidas al resumen
  const cont_bebidas = document.getElementById("resumen-bebidas-container");
  const lista_bebidas = document.getElementById("resumen-bebidas-lista");
  if (lista_bebidas) {
    lista_bebidas.innerHTML = "";

    Object.entries(datos_reserva.bebidas).forEach(([id, cant]) => {
      if (cant > 0) {
        const nombre = nombres_bebidas[id] || "(sin nombre)";
        lista_bebidas.insertAdjacentHTML(
          "beforeend",
          `<div class="resumen-bebida"><span>${nombre}</span><span>${cant}</span></div>`
        );
      }
    });
    cont_bebidas.style.display = lista_bebidas.children.length ? "block" : "none";
  }

  // Mostrar comentarios si existen
  const cont_com = document.getElementById("resumen-comentarios-container");
  if (datos_reserva.comentarios) {
    document.getElementById("resumen-comentarios").textContent = datos_reserva.comentarios;
    cont_com.style.display = "block";
  } else {
    cont_com.style.display = "none";
  }
}

/* =========================================================
 * ENVÍO DE RESERVA POR WHATSAPP
 * =======================================================*/
function configurar_envio_reserva() {
  const boton = document.getElementById("enviar-reserva");
  if (!boton) return;

  boton.addEventListener("click", async () => {
    if (!datos_reserva.personas || !datos_reserva.fecha || !datos_reserva.hora || !datos_reserva.nombre || !datos_reserva.telefono) {
      return alert("Completa todos los campos obligatorios");
    }

    // ✅ Continuar con WhatsApp
    const [anio, mes, dia] = datos_reserva.fecha.split("-").map(Number);
    const fecha_Local = new Date(anio, mes - 1, dia);
    const fecha_formato = fecha_Local.toLocaleDateString("es-ES", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });

    let msg = "=====================\n";
    msg += "  NUEVA RESERVA\n";
    msg += "  RESTAURANTE DON PIERO\n";
    msg += "=====================\n\n";
    msg += ">>> DATOS DEL CLIENTE <<<\n";
    msg += `Nombre: ${datos_reserva.nombre}\n`;
    msg += `Teléfono: ${datos_reserva.telefono}\n`;
    if (datos_reserva.email) msg += `Email: ${datos_reserva.email}\n`;

    msg += "\n>>> DETALLES DE LA RESERVA <<<\n";
    msg += `Fecha: ${fecha_formato}\n`;
    msg += `Hora: ${datos_reserva.hora}\n`;
    msg += `Personas: ${datos_reserva.personas}\n`;
    msg += `Opción de menú: ${
      datos_reserva.opcionMenu === "carta" ? "Ver carta en restaurante" : "Platos seleccionados"
    }\n`;

    if (datos_reserva.opcionMenu === "seleccionar") {
      msg += "\n>>> PLATOS SELECCIONADOS <<<\n";
      Object.entries(datos_reserva.platos).forEach(([id, cant]) => {
        if (cant > 0 && nombres_platos[id] && !nombres_bebidas[id]) {
          const nombre = nombres_platos[id] || id;
          msg += `${nombre}: ${cant}\n`;
        }
      });
    }

    // BEBIDAS SELECCIONADAS (SECCIÓN SEPARADA)
    let hayBebidas = false;
    Object.values(datos_reserva.bebidas).forEach(cant => {
      if (cant > 0) hayBebidas = true;
    });
    
    if (hayBebidas) {
      msg += "\n>>> BEBIDAS SELECCIONADAS <<<\n";
      Object.entries(datos_reserva.bebidas).forEach(([id, cant]) => {
        if (cant > 0) {
          const nombre = nombres_bebidas[id] || id;
          msg += `${nombre}: ${cant}\n`;
        }
      });
    }

    if (datos_reserva.comentarios) {
      msg += "\n>>> COMENTARIOS <<<\n" + datos_reserva.comentarios + "\n";
    }

    const url = `https://wa.me/51973006375?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    alert("Serás redirigido a WhatsApp para confirmar tu reserva. ¡Gracias!");
    reiniciar_formulario();
  });
}

/* =========================================================
 * FECHA MÍNIMA (MAÑANA)
 * =======================================================*/
function configurar_fecha_minima() {
  const manana = new Date();
  manana.setDate(manana.getDate() + 1);
  const yyyy = manana.getFullYear();
  const mm = String(manana.getMonth() + 1).padStart(2, "0");
  const dd = String(manana.getDate()).padStart(2, "0");
  document.getElementById("fecha").min = `${yyyy}-${mm}-${dd}`;
}

/* =========================================================
 * REINICIO DE FORMULARIO
 * =======================================================*/
function reiniciar_formulario() {
  mostrar_paso(1);
  document.querySelectorAll(".boton-persona").forEach(b => b.classList.remove("seleccionado"));
  document.getElementById("grupo-personas-personalizado").style.display = "none";
  document.getElementById("personas-personalizado").value = "";
  document.getElementById("comentarios").value = "";

  datos_reserva = {
    personas: null,
    fecha: null,
    hora: null,
    nombre: null,
    telefono: null,
    email: null,
    comentarios: null,
    opcionMenu: "carta",
    platos: obtener_mapa_platos_inicial(),
    bebidas: obtener_mapa_bebidas_inicial()
  };

  ["fecha", "hora", "nombre", "telefono", "email", "comentarios"].forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.value = "";
  });

  document.getElementById("opcion-carta").checked = true;
  document.getElementById("seleccion-platos").style.display = "none";
  document.querySelectorAll(".cantidad-plato").forEach(el => el.textContent = "0");

  configurar_fecha_minima();
}

// Verificar si los elementos existen antes de agregar event listeners
const clickFecha = document.getElementById("click-fecha");
if (clickFecha) {
  clickFecha.addEventListener("click", function () {
    const fechaInput = document.getElementById("fecha");
    if (fechaInput) fechaInput.showPicker(); // abre el calendario
  });
}

document.querySelectorAll(".opcion-menu").forEach(opcion => {
  opcion.addEventListener("click", function() {
    const idRadio = this.getAttribute('data-radio');
    if (idRadio) {
      const radioInput = document.getElementById(idRadio);
      if (radioInput) {
        radioInput.checked = true;
        datos_reserva.opcionMenu = radioInput.value === "seleccionar" ? "seleccionar" : "carta";
        const seleccionPlatos = document.getElementById("seleccion-platos");
        if (seleccionPlatos) {
          seleccionPlatos.style.display = radioInput.value === "seleccionar" ? "block" : "none";
        }
      }
    }
  });
});