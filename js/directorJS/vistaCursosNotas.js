function verCursosNotas(nombreSeccion, tipo) {
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

  const opcionesGenerales = [
    {
      nombre: "Notas Generales",
      docente: "Promedio General",
      img: "img/cursos/imagenCursos.png",
      onClick: `verNotasGenerales('${nombreSeccion}', '${tipo}')`,
    },
  ];

  contenido.innerHTML = `
    <button onclick="mostrarSeccionesNotas('${tipo}')"
      class="mb-5 flex items-center text-blue-600 font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-blue-100 hover:text-blue-700">
      <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Secciones
    </button>

    <h2 class="text-3xl font-bold text-blue-700 mb-6">
      ${nombreSeccion} - Cursos
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${opcionesGenerales
        .map(
          (opt) => `
          <div class="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
               onclick="${opt.onClick}">
            <img src="${opt.img}" alt="${opt.nombre}" class="w-24 h-24 mb-3 rounded-full object-cover border-2 border-blue-200" />
            <h3 class="font-semibold text-gray-800 text-lg">${opt.nombre}</h3>
            <p class="text-sm text-gray-500">${opt.docente}</p>
          </div>`
        )
        .join("")}

      ${cursos
        .map(
          (c) => `
          <div class="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
               onclick="verDetalleCursoNotas('${nombreSeccion}', '${c.nombre}', '${tipo}')">
            <img src="${c.img}" alt="${c.nombre}" class="w-24 h-24 mb-3 rounded-full object-cover border-2 border-blue-200" />
            <h3 class="font-semibold text-gray-800 text-lg">${c.nombre}</h3>
            <p class="text-sm text-gray-500">${c.docente}</p>
          </div>`
        )
        .join("")}
    </div>
  `;
}
