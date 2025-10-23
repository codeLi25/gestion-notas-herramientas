document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".nav-btn");
  const contenido = document.getElementById("contenido");

  // Por defecto mostramos Notas (si existe la función)
  if (typeof mostrarSeccionesNotas === "function") {
    mostrarSeccionesNotas("Notas");
  } else if (typeof mostrarSeccionesAsistencias === "function") {
    mostrarSeccionesAsistencias("Asistencias");
  } else {
    contenido.innerHTML = `<p class="text-gray-600">No hay módulos cargados.</p>`;
  }

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      botones.forEach((b) => b.classList.remove("active"));
      boton.classList.add("active");

      const section = (boton.dataset.section || "").toLowerCase().trim();

      // Secciones Notas
      if (section === "notas" || section === "secciones" || section === "secciones-notas") {
        if (typeof mostrarSeccionesNotas === "function") mostrarSeccionesNotas("Notas");
        else contenido.innerHTML = `<p class="text-red-600">Función de notas no encontrada.</p>`;

      // Secciones Asistencias
      } else if (section === "asistencia" || section === "asistencias" || section === "secciones-asistencia") {
        if (typeof mostrarSeccionesAsistencias === "function") mostrarSeccionesAsistencias("Asistencias");
        else contenido.innerHTML = `<p class="text-red-600">Función de asistencias no encontrada.</p>`;

      // Sección Alumnos
      } else if (section === "alumnos") {
        if (typeof mostrarAlumnos === "function") mostrarAlumnos();
        else contenido.innerHTML = `<p class="text-red-600">Función de alumnos no encontrada.</p>`;

      // Sección Docentes
      } else if (section === "docentes") {
        if (typeof mostrarDocentes === "function") mostrarDocentes();
        else contenido.innerHTML = `<p class="text-red-600">Función de docentes no encontrada.</p>`;

      // Sección no mapeada
      } else {
        contenido.innerHTML = `
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Módulo no disponible</h2>
          <p class="text-gray-500">La sección "${boton.dataset.section}" no está mapeada a ninguna función.</p>
        `;
      }
    });
  });
});
