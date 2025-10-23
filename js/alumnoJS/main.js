document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".nav-btn");

  mostrarCursosNotas("Notas");

  // Cambiar entre Notas / Asistencias
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      botones.forEach(b => b.classList.remove("active"));
      boton.classList.add("active");

      const section = boton.dataset.section;
      if (section === "notas") mostrarCursosNotas("Notas");
      else if (section === "asistencia") mostrarCursosAsistencias("Asistencia");
    });
  });

  setupUsuario();
});
