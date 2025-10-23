function verDetalleSeccionNotas(nombreCurso, tipo) {
  const contenido = document.getElementById("contenido");
  const bimestres = [
    { nombre: "Primer Bimestre", img: "img/bimestres/1Bimestre.png" },
    { nombre: "Segundo Bimestre", img: "img/bimestres/2Bimestre.png" },
    { nombre: "Tercer Bimestre", img: "img/bimestres/3Bimestre.png" },
    { nombre: "Cuarto Bimestre", img: "img/bimestres/4Bimestre.png" }
  ];

  contenido.innerHTML = `
    <button class="btn-volver" onclick="mostrarCursosNotas('${tipo}')">← Volver a Cursos</button>
    <h2 class="titulo-seccion-notas">${tipo} - ${nombreCurso}</h2>

    <div class="grid-bimestres">
      ${bimestres.map(b => `
        <div class="bimestre-card" onclick="abrirBimestreNotas('${nombreCurso}', '${b.nombre}', '${tipo}')">
          <img src="${b.img}" alt="${b.nombre}" class="bimestre-img">
          <span class="bimestre-text">${b.nombre}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function abrirBimestreNotas(nombreCurso, bimestre, tipo) {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <button class="btn-volver" onclick="verDetalleSeccionNotas('${nombreCurso}', '${tipo}')">← Volver a ${tipo}</button>
    <section class="vista-detalle">
      <h2>${tipo} - ${nombreCurso}</h2>
      <h3>${bimestre}</h3>
      <div class="detalle-box">
        <p>Aquí se mostrarán las <strong>${tipo.toLowerCase()}</strong> correspondientes a <strong>${nombreCurso}</strong>.</p>
        <p class="mt-3 text-gray-400">El módulo de subida de notas se integrará con el backend próximamente.</p>
      </div>
    </section>
  `;
}

function verDetalleSeccionAsistencias(nombreCurso, tipo) {
  const contenido = document.getElementById("contenido");
  const bimestres = [
    { nombre: "Primer Bimestre", img: "img/bimestres/1Bimestre.png" },
    { nombre: "Segundo Bimestre", img: "img/bimestres/2Bimestre.png" },
    { nombre: "Tercer Bimestre", img: "img/bimestres/3Bimestre.png" },
    { nombre: "Cuarto Bimestre", img: "img/bimestres/4Bimestre.png" }
  ];

  contenido.innerHTML = `
    <button class="btn-volver" onclick="mostrarCursosAsistencias('${tipo}')">← Volver a Cursos</button>
    <h2 class="titulo-seccion-notas">${tipo} - ${nombreCurso}</h2>

    <div class="grid-bimestres">
      ${bimestres.map(b => `
        <div class="bimestre-card" onclick="abrirBimestreAsistencias('${nombreCurso}', '${b.nombre}', '${tipo}')">
          <img src="${b.img}" alt="${b.nombre}" class="bimestre-img">
          <span class="bimestre-text">${b.nombre}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function abrirBimestreAsistencias(nombreCurso, bimestre, tipo) {
  const contenido = document.getElementById("contenido");

  contenido.innerHTML = `
    <button class="btn-volver" onclick="verDetalleSeccionAsistencias('${nombreCurso}', '${tipo}')">← Volver a ${tipo}</button>
    <section class="vista-detalle">
      <h2>${tipo} - ${nombreCurso}</h2>
      <h3>${bimestre}</h3>
      <div class="detalle-box">
        <p>Aquí se mostrarán las <strong>${tipo.toLowerCase()}</strong> correspondientes a <strong>${nombreCurso}</strong>.</p>
      </div>
    </section>
  `;
}
