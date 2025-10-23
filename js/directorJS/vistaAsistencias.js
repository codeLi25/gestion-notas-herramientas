function verDetalleSeccionAsistencias(nombreSeccion, tipo) {
  const contenido = document.getElementById("contenido");

  const cursos = [
    { nombre: "Matemática", docente: "Prof. Juan López", img: "img/cursos/matematicaCurso.jpg" },
    { nombre: "Comunicación", docente: "Prof. Ana Rivera", img: "img/cursos/comunicacionCurso.jpg" },
    { nombre: "Inglés", docente: "Prof. Karina Flores", img: "img/cursos/inglesCurso.jpg" },
    { nombre: "Arte y Cultura", docente: "Prof. Lila Salvatierra", img: "img/cursos/arteCurso.jpg" },
    { nombre: "Ciencias Sociales", docente: "Prof. Marta Salas", img: "img/cursos/cienciasSocialesCurso.jpg" },
    { nombre: "Ciudadanía y Cívica", docente: "Prof. Silvestre Rojas", img: "img/cursos/ciudadaniaCurso.jpg" },
    { nombre: "Educación Física", docente: "Prof. María Arias", img: "img/cursos/educacionFisicaCurso.jpg" },
    { nombre: "Educación Religiosa", docente: "Prof. Mery Ampuero", img: "img/cursos/educacionReligiosaCurso.jpg" },
  ];

  contenido.innerHTML = `
    <button onclick="mostrarSeccionesAsistencias('${tipo}')"
      class="mb-5 flex items-center text-green-600 font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-green-100 hover:text-green-700">
      <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Secciones
    </button>

    <h2 class="text-3xl font-bold text-green-700 mb-6">
      ${tipo} - ${nombreSeccion}
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${cursos
        .map(
          (c) => `
        <div class="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
             onclick="verBimestresAsistencias('${nombreSeccion}', '${c.nombre}', '${tipo}')">
          <img src="${c.img}" alt="${c.nombre}" class="w-24 h-24 mb-3 rounded-full object-cover border-2 border-green-200" />
          <span class="font-medium text-gray-800 text-lg">${c.nombre}</span>
        </div>`
        )
        .join("")}
    </div>
  `;
}

// Mostrar los BIMESTRES del curso seleccionado
function verBimestresAsistencias(nombreSeccion, nombreCurso, tipo) {
  const contenido = document.getElementById("contenido");

  const bimestres = [
    "Primer Bimestre",
    "Segundo Bimestre",
    "Tercer Bimestre",
    "Cuarto Bimestre",
  ];

  contenido.innerHTML = `
    <button onclick="verDetalleSeccionAsistencias('${nombreSeccion}', '${tipo}')"
      class="mb-5 flex items-center text-green-600 font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-green-100 hover:text-green-700">
      <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Cursos
    </button>

    <h2 class="text-3xl font-bold text-green-700 mb-6">
      ${nombreCurso} - ${nombreSeccion}
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${bimestres
        .map(
          (b) => `
        <div class="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
             onclick="verDetalleBimestreAsistencia('${nombreSeccion}', '${nombreCurso}', '${b}', '${tipo}')">
          <img src="img/iconos/bimestre.png" alt="${b}" class="w-20 h-20 mb-3 rounded-full object-cover border-2 border-green-200" />
          <span class="font-medium text-gray-800 text-lg">${b}</span>
        </div>`
        )
        .join("")}
    </div>
  `;
}

// Mostrar detalle del Bimestre
function verDetalleBimestreAsistencia(nombreSeccion, nombreCurso, bimestre, tipo) {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <button onclick="verBimestresAsistencias('${nombreSeccion}', '${nombreCurso}', '${tipo}')"
      class="mb-5 flex items-center text-green-600 font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-green-100 hover:text-green-700">
      <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Bimestres
    </button>

    <h2 class="text-3xl font-bold text-green-700 mb-4">
      Asistencia - ${nombreCurso}
    </h2>

    <h3 class="text-xl font-semibold text-gray-700 mb-4">${bimestre}</h3>

    <p class="text-gray-700 mb-6 text-lg">
      Aquí se mostrarán las asistencias del curso <strong>${nombreCurso}</strong> - <strong>${bimestre}</strong>.
    </p>

    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <p class="text-gray-500 text-center">
        Este módulo se integrará con el backend próximamente.
      </p>
    </div>
  `;
}
