function verNotasGenerales(nombreSeccion, tipo) {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <button onclick="verCursosNotas('${nombreSeccion}', '${tipo}')"
      class="mb-5 flex items-center text-blue-600 font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-blue-100 hover:text-blue-700">
      <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Cursos
    </button>

    <h2 class="text-3xl font-bold text-blue-700 mb-4">
      Notas - ${nombreSeccion}
    </h2>

    <p class="text-gray-700 mb-6 text-lg">
      Aquí se mostrarán las notas correspondientes a <strong>${nombreSeccion}</strong>.
    </p>

    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <p class="text-gray-500 text-center">
        Este módulo mostrará el promedio general y el rendimiento por curso.
      </p>
    </div>
  `;
}

function verAsistenciasGenerales(nombreSeccion, tipo) {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <button onclick="verCursosNotas('${nombreSeccion}', '${tipo}')"
      class="mb-5 flex items-center text-green-600 font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-green-100 hover:text-green-700">
      <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Cursos
    </button>

    <h2 class="text-3xl font-bold text-green-700 mb-4">
      Asistencias - ${nombreSeccion}
    </h2>   

    <p class="text-gray-700 mb-6 text-lg">
      Aquí se mostrarán las asistencias correspondientes a <strong>${nombreSeccion}</strong>.
    </p>

    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <p class="text-gray-500 text-center">
        Este módulo mostrará el porcentaje de asistencia y las inasistencias por alumno.
      </p>
    </div>
  `;
}
