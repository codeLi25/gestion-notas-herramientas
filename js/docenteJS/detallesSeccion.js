function verDetalleSeccionNotas(nombreSeccion, tipo) {
  const contenido = document.getElementById("contenido");

  const bimestres = [
    { nombre: "Primer Bimestre", img: "img/bimestres/1Bimestre.png" },
    { nombre: "Segundo Bimestre", img: "img/bimestres/2Bimestre.png" },
    { nombre: "Tercer Bimestre", img: "img/bimestres/3Bimestre.png" },
    { nombre: "Cuarto Bimestre", img: "img/bimestres/4Bimestre.png" },
  ];

  contenido.innerHTML = `
    <section class="vista-bimestres">
      <button onclick="mostrarSeccionesNotas('${tipo}')"
        class="mb-5 flex items-center text-blue-600 font-medium px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-700">
        <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Secciones
      </button>

      <h2 class="text-3xl font-bold text-blue-700 mb-6">${tipo} - ${nombreSeccion}</h2>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        ${bimestres.map(b => `
          <div class="bg-white shadow-md rounded-xl p-4 flex flex-col items-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
               onclick="abrirBimestreNotas('${nombreSeccion}', '${b.nombre}', '${tipo}')">
            <img src="${b.img}" alt="${b.nombre}" class="w-24 h-24 mb-2 rounded-full object-cover border-2 border-blue-200" />
            <span class="font-medium text-gray-800">${b.nombre}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function abrirBimestreNotas(nombreSeccion, bimestre, tipo) {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <section class="vista-detalle">
      <button onclick="verDetalleSeccionNotas('${nombreSeccion}', '${tipo}')"
        class="mb-5 flex items-center text-blue-600 font-medium px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-700">
        <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver
      </button>

      <h2 class="text-2xl font-bold text-blue-700 mb-2">${tipo} - ${nombreSeccion}</h2>
      <h3 class="text-lg font-medium text-gray-600 mb-4">${bimestre}</h3>

      <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <p class="text-gray-500 text-center">
          Aquí se mostrarán las <strong>${tipo.toLowerCase()}</strong> correspondientes a 
          <strong>${nombreSeccion}</strong>.
        </p>
        <p class="text-gray-400 text-sm mt-3 text-center">
          El módulo de subida de notas se integrará con el backend próximamente.
        </p>
      </div>
    </section>
  `;
}


function verDetalleSeccionAsistencias(nombreSeccion, tipo) {
  const contenido = document.getElementById("contenido");

  const bimestres = [
    { nombre: "Primer Bimestre", img: "img/bimestres/1Bimestre.png" },
    { nombre: "Segundo Bimestre", img: "img/bimestres/2Bimestre.png" },
    { nombre: "Tercer Bimestre", img: "img/bimestres/3Bimestre.png" },
    { nombre: "Cuarto Bimestre", img: "img/bimestres/4Bimestre.png" },
  ];

  contenido.innerHTML = `
    <section class="vista-bimestres">
      <button onclick="mostrarSeccionesAsistencias('${tipo}')"
        class="mb-5 flex items-center text-green-600 font-medium px-3 py-1.5 rounded-lg hover:bg-green-100 hover:text-green-700">
        <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver a Secciones
      </button>

      <h2 class="text-3xl font-bold text-green-700 mb-6">${tipo} - ${nombreSeccion}</h2>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        ${bimestres.map(b => `
          <div class="bg-white shadow-md rounded-xl p-4 flex flex-col items-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
               onclick="abrirBimestreAsistencias('${nombreSeccion}', '${b.nombre}', '${tipo}')">
            <img src="${b.img}" alt="${b.nombre}" class="w-24 h-24 mb-2 rounded-full object-cover border-2 border-green-200" />
            <span class="font-medium text-gray-800">${b.nombre}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function abrirBimestreAsistencias(nombreSeccion, bimestre, tipo) {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <section class="vista-detalle">
      <button onclick="verDetalleSeccionAsistencias('${nombreSeccion}', '${tipo}')"
        class="mb-5 flex items-center text-green-600 font-medium px-3 py-1.5 rounded-lg hover:bg-green-100 hover:text-green-700">
        <i class="ph ph-arrow-left mr-2 text-lg"></i> Volver
      </button>

      <h2 class="text-2xl font-bold text-green-700 mb-2">${tipo} - ${nombreSeccion}</h2>
      <h3 class="text-lg font-medium text-gray-600 mb-4">${bimestre}</h3>

      <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <p class="text-gray-500 text-center">
          Aquí se mostrarán las <strong>${tipo.toLowerCase()}</strong> correspondientes a 
          <strong>${nombreSeccion}</strong>.
        </p>
      </div>
    </section>
  `;
}
