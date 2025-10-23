document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".nav-btn");
  const contenido = document.getElementById("contenido");

  // Mostrar por defecto las secciones de NOTAS
  if (typeof mostrarSeccionesNotas === "function") {
    mostrarSeccionesNotas("Notas");
  } else if (typeof mostrarSecciones === "function") {
    mostrarSecciones("Notas");
  }

  // Cambiar entre "Notas" y "Asistencias"
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("active"));
      boton.classList.add("active");

      const section = (boton.dataset.section || "").toLowerCase().trim();

      if (section === "notas" || section === "secciones" || section === "secciones-notas") {
        if (typeof mostrarSeccionesNotas === "function") mostrarSeccionesNotas("Notas");
        else if (typeof mostrarSecciones === "function") mostrarSecciones("Notas");
      } else if (section === "asistencia" || section === "asistencias" || section === "secciones-asistencia") {
        if (typeof mostrarSeccionesAsistencias === "function") mostrarSeccionesAsistencias("Asistencias");
        else if (typeof mostrarSecciones === "function") mostrarSecciones("Asistencias");
      } else {
        contenido.innerHTML = `
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Módulo no disponible</h2>
          <p class="text-gray-500">La sección "${boton.dataset.section}" no está mapeada a ninguna función.</p>
        `;
      }
    });
  });

  if (typeof setupUsuario === "function") setupUsuario();
});
