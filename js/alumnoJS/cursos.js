function mostrarCursosNotas() {
    const contenido = document.getElementById("contenido");

    const cursos = [
        { nombre: "Matemática", docente: "Prof. Juan López", img: "img/cursos/matematicaCurso.jpg" },
        { nombre: "Comunicación", docente: "Prof. Ana Rivera", img: "img/cursos/comunicacionCurso.jpg" },
        { nombre: "Inglés", docente: "Prof. Karina Flores", img: "img/cursos/inglesCurso.jpg" },
        { nombre: "Arte y Cultura", docente: "Prof. Lila Salvatierra", img: "img/cursos/arteCurso.jpg" },
        { nombre: "Ciencias Sociales", docente: "Prof. Marta Salas", img: "img/cursos/cienciasSocialesCurso.jpg" },
        { nombre: "Ciudadania y Civica", docente: "Prof. Silvestre Rojas", img: "img/cursos/ciudadaniaCurso.jpg" },
        { nombre: "Educación Fisica", docente: "Prof. Maria Arias", img: "img/cursos/educacionFisicaCurso.jpg" },
        { nombre: "Educación Religiosa", docente: "Prof. Mery Ampuero", img: "img/cursos/educacionReligiosaCurso.jpg" }
    ];

    contenido.innerHTML = `
    <h2 class="titulo-seccion">Notas - Cursos</h2>
    <div class="grid-cursos">
      ${cursos.map(curso => `
        <div class="curso-card" onclick="verDetalleSeccionNotas('${curso.nombre}', 'Notas')">
          <img src="${curso.img}" alt="${curso.nombre}" class="curso-img">
          <div class="curso-info">
            <h3 class="curso-nombre">${curso.nombre}</h3>
            <div class="curso-docente">
              <img src="img/docenteUsuario.jpg" alt="Docente" class="icono-docente">
              <p>${curso.docente}</p>
            </div>
            <p class="curso-ver">Ver notas</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function mostrarCursosAsistencias() {
    const contenido = document.getElementById("contenido");

    const cursos = [
        { nombre: "Matemática", docente: "Prof. Juan López", img: "img/cursos/matematicaCurso.jpg" },
        { nombre: "Comunicación", docente: "Prof. Ana Rivera", img: "img/cursos/comunicacionCurso.jpg" },
        { nombre: "Inglés", docente: "Prof. Karina Flores", img: "img/cursos/inglesCurso.jpg" },
        { nombre: "Arte y Cultura", docente: "Prof. Lila Salvatierra", img: "img/cursos/arteCurso.jpg" },
        { nombre: "Ciencias Sociales", docente: "Prof. Marta Salas", img: "img/cursos/cienciasSocialesCurso.jpg" },
        { nombre: "Ciudadania y Civica", docente: "Prof. Silvestre Rojas", img: "img/cursos/ciudadaniaCurso.jpg" },
        { nombre: "Educación Fisica", docente: "Prof. Maria Arias", img: "img/cursos/educacionFisicaCurso.jpg" },
        { nombre: "Educación Religiosa", docente: "Prof. Mery Ampuero", img: "img/cursos/educacionReligiosaCurso.jpg" }
    ];

    contenido.innerHTML = `
    <h2 class="titulo-seccion">Asistencias - Cursos</h2>
    <div class="grid-cursos">
      ${cursos.map(curso => `
        <div class="curso-card" onclick="verDetalleSeccionAsistencias('${curso.nombre}', 'Asistencia')">
          <img src="${curso.img}" alt="${curso.nombre}" class="curso-img">
          <div class="curso-info">
            <h3 class="curso-nombre">${curso.nombre}</h3>
            <div class="curso-docente">
              <img src="img/docenteUsuario.jpg" alt="Docente" class="icono-docente">
              <p>${curso.docente}</p>
            </div>
            <p class="curso-ver">Ver asistencias</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
