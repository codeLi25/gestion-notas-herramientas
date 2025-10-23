// Mostrar las secciones de alumnos con Agregar y Editar
function mostrarAlumnos() {
    const contenido = document.getElementById("contenido");

    const secciones = [
        { nombre: "1° de Secundaria", img: "img/secciones/1Secundaria.jpg" },
        { nombre: "2° de Secundaria", img: "img/secciones/2Secundaria.jpeg" },
        { nombre: "3° de Secundaria", img: "img/secciones/3Secundaria.jpg" },
        { nombre: "4° de Secundaria", img: "img/secciones/4Secundaria.jpg" },
        { nombre: "5° de Secundaria", img: "img/secciones/5Secundaria.jpg" }
    ];

    contenido.innerHTML = `
    <h2 class="titulo-seccion-notas">Gestión de Alumnos</h2>

    <div class="grid-secciones">
     <div class="seccion-card card-accion bg-green-100" onclick="formAgregarAlumno()">
         <img src="img/agregar.png" alt="Agregar Alumno" class="accion-img">
         <span class="text-xl font-semibold mt-2 block">+ Agregar Alumno</span>
    </div>
    <div class="seccion-card card-accion bg-yellow-100" onclick="formBuscarEditarAlumno()">
        <img src="img/editar.png" alt="Editar Alumno" class="accion-img">
        <span class="text-xl font-semibold mt-2 block">Editar Alumno</span>
    </div>

      <!-- Cards de secciones -->
      ${secciones.map(s => `
        <div class="seccion-card" onclick="verDetalleAlumnos('${s.nombre}')">
          <img src="${s.img}" alt="${s.nombre}">
          <span>${s.nombre}</span>
        </div>
      `).join("")}
    </div>
  `;
}

// Ver alumnos de una sección (solo lista, sin editar)
function verDetalleAlumnos(seccion) {
    const contenido = document.getElementById("contenido");

    const alumnos = [
        { codigo: "A001", nombre: "Juan Pérez", salon: seccion },
        { codigo: "A002", nombre: "María López", salon: seccion },
        { codigo: "A003", nombre: "Carlos Gómez", salon: seccion }
    ];

    contenido.innerHTML = `
    <h2 class="titulo-seccion-notas">${seccion} - Alumnos</h2>
    <button class="btn-volver mb-4" onclick="mostrarAlumnos()">← Volver a Secciones</button>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      ${alumnos.map(al => `
        <div class="alumno-card">
          <p><strong>Código:</strong> ${al.codigo}</p>
          <p><strong>Nombre:</strong> ${al.nombre}</p>
          <p><strong>Salón:</strong> ${al.salon}</p>
        </div>
      `).join("")}
    </div>
  `;
}

// Formulario para agregar alumno
function formAgregarAlumno() {
    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `
    <h2 class="titulo-seccion-notas">Agregar Nuevo Alumno</h2>
    <button class="btn-volver mb-4" onclick="mostrarAlumnos()">← Volver a Gestión de Alumnos</button>

    <form class="form-alumno">
      <label>Código del Alumno
        <input type="text" placeholder="Código">
      </label>
      <label>Nombre del Alumno
        <input type="text" placeholder="Nombre completo">
      </label>
      <label>Seleccionar Salón
        <select>
          <option>1° de Secundaria</option>
          <option>2° de Secundaria</option>
          <option>3° de Secundaria</option>
          <option>4° de Secundaria</option>
          <option>5° de Secundaria</option>
        </select>
      </label>
      <button type="submit" class="btn-agregar">Agregar Alumno</button>
    </form>
  `;
}

// Formulario para buscar y editar alumno
function formBuscarEditarAlumno() {
    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `
    <h2 class="titulo-seccion-notas">Editar Alumno</h2>
    <button class="btn-volver mb-4" onclick="mostrarAlumnos()">← Volver a Gestión de Alumnos</button>

    <form class="form-alumno" onsubmit="event.preventDefault(); buscarAlumno()">
      <label>Buscar alumno por código
        <input type="text" id="codigoBuscar" placeholder="Código del Alumno">
      </label>
      <button type="submit" class="btn-editar">Buscar</button>
    </form>

    <div id="resultadoEditar" class="mt-6"></div>
  `;
}

// Mostrar formulario de edición después de buscar
function buscarAlumno() {
    const codigo = document.getElementById("codigoBuscar").value.trim();
    const resultado = document.getElementById("resultadoEditar");

    if (!codigo) {
        resultado.innerHTML = `<p class="text-red-600">Ingrese un código válido.</p>`;
        return;
    }

    const alumno = { codigo: codigo, nombre: "Alumno Ejemplo", salon: "3° de Secundaria" };

    resultado.innerHTML = `
    <form class="form-alumno">
      <label>Código del Alumno
        <input type="text" value="${alumno.codigo}" disabled>
      </label>
      <label>Nombre del Alumno
        <input type="text" value="${alumno.nombre}">
      </label>
      <label>Seleccionar Salón
        <select>
          <option ${alumno.salon === "1° de Secundaria" ? "selected" : ""}>1° de Secundaria</option>
          <option ${alumno.salon === "2° de Secundaria" ? "selected" : ""}>2° de Secundaria</option>
          <option ${alumno.salon === "3° de Secundaria" ? "selected" : ""}>3° de Secundaria</option>
          <option ${alumno.salon === "4° de Secundaria" ? "selected" : ""}>4° de Secundaria</option>
          <option ${alumno.salon === "5° de Secundaria" ? "selected" : ""}>5° de Secundaria</option>
        </select>
      </label>
      <div class="flex gap-4">
        <button type="submit" class="btn-editar">Guardar Cambios</button>
        <button type="button" class="btn-eliminar" onclick="alert('Alumno eliminado')">Eliminar</button>
      </div>
    </form>
  `;
}
