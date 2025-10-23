function mostrarSeccionesNotas(tipo) {
  const contenido = document.getElementById("contenido");

  const secciones = [
    { nombre: "1° de Secundaria", img: "img/secciones/1Secundaria.jpg" },
    { nombre: "2° de Secundaria", img: "img/secciones/2Secundaria.jpeg" },
    { nombre: "3° de Secundaria", img: "img/secciones/3Secundaria.jpg" },
    { nombre: "4° de Secundaria", img: "img/secciones/4Secundaria.jpg" },
    { nombre: "5° de Secundaria", img: "img/secciones/5Secundaria.jpg" },
  ];

  contenido.innerHTML = `
    <section class="vista-secciones">
      <h2 class="titulo-seccion text-3xl font-bold text-blue-700 mb-8">
        ${tipo} - Mis Secciones
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${secciones.map(s => `
          <div class="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
               onclick="verDetalleSeccionNotas('${s.nombre}', '${tipo}')">
            <img src="${s.img}" alt="${s.nombre}" class="w-24 h-24 mb-3 rounded-full object-cover border-2 border-blue-200" />
            <span class="font-medium text-gray-800 text-lg">${s.nombre}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

// Mostrar las secciones para el módulo de ASISTENCIAS
function mostrarSeccionesAsistencias(tipo) {
  const contenido = document.getElementById("contenido");

  const secciones = [
    { nombre: "1° de Secundaria", img: "img/secciones/1Secundaria.jpg" },
    { nombre: "2° de Secundaria", img: "img/secciones/2Secundaria.jpeg" },
    { nombre: "3° de Secundaria", img: "img/secciones/3Secundaria.jpg" },
    { nombre: "4° de Secundaria", img: "img/secciones/4Secundaria.jpg" },
    { nombre: "5° de Secundaria", img: "img/secciones/5Secundaria.jpg" },
  ];

  contenido.innerHTML = `
    <section class="vista-secciones">
      <h2 class="titulo-seccion text-3xl font-bold text-green-700 mb-8">
        ${tipo} - Mis Secciones
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${secciones.map(s => `
          <div class="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
               onclick="verDetalleSeccionAsistencias('${s.nombre}', '${tipo}')">
            <img src="${s.img}" alt="${s.nombre}" class="w-24 h-24 mb-3 rounded-full object-cover border-2 border-green-200" />
            <span class="font-medium text-gray-800 text-lg">${s.nombre}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}
