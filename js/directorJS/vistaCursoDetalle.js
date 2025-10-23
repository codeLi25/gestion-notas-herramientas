function verDetalleCursoNotas(nombreSeccion, curso, tipo) {
  const contenido = document.getElementById("contenido");

  const bimestres = [
    { nombre: "Primer Bimestre", img: "img/bimestres/1Bimestre.png" },
    { nombre: "Segundo Bimestre", img: "img/bimestres/2Bimestre.png" },
    { nombre: "Tercer Bimestre", img: "img/bimestres/3Bimestre.png" },
    { nombre: "Cuarto Bimestre", img: "img/bimestres/4Bimestre.png" },
  ];

  contenido.innerHTML = `
    <section class="vista-bimestres">
      <button onclick="verCursosNotas('${nombreSeccion}', '${tipo}')" 
        class="mb-5 flex items-center text-blue-600 font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-blue-100 hover:text-blue-700">
        <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Cursos
      </button>

      <h2 class="text-3xl font-bold text-blue-700 mb-6">${tipo} - ${curso}</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${bimestres.map(
          (b) => `
          <div class="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
               onclick="abrirBimestre('${curso}', '${b.nombre}', '${tipo}', '${nombreSeccion}')">
            <img src="${b.img}" alt="${b.nombre}" class="w-28 h-28 mb-3 rounded-xl object-cover border-2 border-blue-200" />
            <span class="font-medium text-gray-700 text-lg">${b.nombre}</span>
          </div>`
        ).join("")}
      </div>
    </section>
  `;
}

function abrirBimestre(curso, bimestre, tipo, nombreSeccion) {
  const contenido = document.getElementById("contenido");

  const color =
    tipo.toLowerCase() === "asistencias"
      ? "text-green-700"
      : "text-blue-700";

  contenido.innerHTML = `
    <section class="vista-detalle">
      <button onclick="verDetalleCursoNotas('${nombreSeccion}', '${curso}', '${tipo}')"
        class="mb-5 flex items-center ${
          tipo.toLowerCase() === "asistencias"
            ? "text-green-600 hover:bg-green-100 hover:text-green-700"
            : "text-blue-600 hover:bg-blue-100 hover:text-blue-700"
        } font-medium px-3 py-1.5 rounded-lg transition-all duration-200">
        <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Bimestres
      </button>

      <h2 class="text-2xl font-bold ${color} mb-2">${tipo} - ${curso}</h2>
      <h3 class="text-lg font-medium text-gray-600 mb-4">${bimestre}</h3>

      <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <p class="text-gray-600">
          Aquí se mostrarán las ${tipo.toLowerCase()} del curso 
          <strong>${curso}</strong> - <em>${bimestre}</em>.
        </p>
      </div>
    </section>
  `;
}
