document.getElementById("year").textContent = new Date().getFullYear();

/* Menú móvil */
const nav = document.getElementById("nav");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  const abierto = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(abierto));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

/* Pestañas del menú */
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      const activa = t === tab;
      t.classList.toggle("active", activa);
      t.setAttribute("aria-selected", String(activa));
    });
    panels.forEach((p) => p.classList.toggle("active", p.id === tab.dataset.target));
  })
);

/* Formulario de reservas */
const form = document.getElementById("reserva");
const msg = document.getElementById("msg");
const fecha = document.getElementById("fecha");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// No permite elegir fechas pasadas
const hoy = new Date();
fecha.min = [
  hoy.getFullYear(),
  String(hoy.getMonth() + 1).padStart(2, "0"),
  String(hoy.getDate()).padStart(2, "0"),
].join("-");

function mostrar(texto, tipo) {
  msg.textContent = texto;
  msg.className = "msg " + tipo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const personas = document.getElementById("personas");
  [nombre, email, fecha].forEach((c) => c.classList.remove("invalid"));

  const faltantes = [nombre, email, fecha].filter((c) => !c.value.trim());
  if (faltantes.length) {
    faltantes.forEach((c) => c.classList.add("invalid"));
    return mostrar("Completa todos los campos.", "error");
  }
  if (!EMAIL_RE.test(email.value.trim())) {
    email.classList.add("invalid");
    return mostrar("Ingresa un correo válido.", "error");
  }
  if (fecha.value < fecha.min) {
    fecha.classList.add("invalid");
    return mostrar("Elige una fecha de hoy en adelante.", "error");
  }

  mostrar(
    "¡Listo, " + nombre.value.trim() + "! Reservamos una mesa para " + personas.value +
      " el " + fecha.value + ". Te escribiremos a " + email.value.trim() + ".",
    "ok"
  );
  form.reset();
  personas.value = "2";
});
