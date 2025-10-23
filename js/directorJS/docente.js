function mostrarDocentes() {
    const contenido = document.getElementById("contenido");

    const docentes = [
        { codigo: "D001", nombre: "Prof. Juan López", materia: "Matemática" },
        { codigo: "D002", nombre: "Prof. Ana Rivera", materia: "Comunicación" },
        { codigo: "D003", nombre: "Prof. Karina Flores", materia: "Inglés" },
        { codigo: "D004", nombre: "Prof. Lila Salvatierra", materia: "Arte y Cultura" },
        { codigo: "D005", nombre: "Prof. Marta Salas", materia: "Ciencias Sociales" },
        { codigo: "D006", nombre: "Prof. Silvestre Rojas", materia: "Ciudadania y Civica" },
        { codigo: "D007", nombre: "Prof. Maria Arias", materia: "Educación Fisica" },
        { codigo: "D008", nombre: "Prof. Mery Ampuero", materia: "Educación Religiosa" }
    ];

    contenido.innerHTML = `
    <h2 class="titulo-seccion-notas">Gestión de Docentes</h2>

    <div class="flex flex-wrap gap-4 mb-6 justify-center">
    <div class="seccion-card card-accion bg-green-100" onclick="formAgregarDocente()">
        <img src="img/agregar.png" alt="Agregar Docente" class="accion-img">
        <span class="text-xl font-semibold mt-2 block">+ Agregar Docente</span>
    </div>
    <div class="seccion-card card-accion bg-yellow-100" onclick="formBuscarEditarDocente()">
        <img src="img/editar.png" alt="Editar Docente" class="accion-img">
        <span class="text-xl font-semibold mt-2 block">Editar Docente</span>
    </div>
    </div>

    <h3 class="titulo-lista-docentes text-center text-lg font-semibold mb-4">Lista de Docentes</h3>

    <div class="grid-docentes">
    ${docentes.map(d => `
        <div class="seccion-card-docente bg-white">
        <img src="img/docenteUsuario.jpg" alt="${d.nombre}" class="icono-docente">
        <p><strong>Código:</strong> ${d.codigo}</p>
        <p><strong>Nombre:</strong> ${d.nombre}</p>
        <p><strong>Materia:</strong> ${d.materia}</p>
        </div>
    `).join("")}
    </div>
  `;
}

// Formulario para agregar docente
function formAgregarDocente() {
    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `
    <h2 class="titulo-seccion-notas">Agregar Nuevo Docente</h2>
    <button class="btn-volver mb-4" onclick="mostrarDocentes()">← Volver a Gestión de Docentes</button>

    <form class="detalle-curso grid gap-4 max-w-md mx-auto">
      <label>Código del Docente
        <input type="text" placeholder="Código" class="border rounded p-2 w-full">
      </label>
      <label>Nombre del Docente
        <input type="text" placeholder="Nombre completo" class="border rounded p-2 w-full">
      </label>
      <label>Materia
        <input type="text" placeholder="Materia que enseña" class="border rounded p-2 w-full">
      </label>
      <button type="submit" class="btn-volver bg-green-100 hover:bg-green-200 text-green-800">Agregar Docente</button>
    </form>
  `;
}

// Formulario para buscar y editar docente
function formBuscarEditarDocente() {
    const contenido = document.getElementById("contenido");

    contenido.innerHTML = `
    <h2 class="titulo-seccion-notas">Editar Docente</h2>
    <button class="btn-volver mb-4" onclick="mostrarDocentes()">← Volver a Gestión de Docentes</button>

    <form class="detalle-curso grid gap-4 max-w-md mx-auto" onsubmit="event.preventDefault(); buscarDocente()">
      <label>Buscar docente por código
        <input type="text" id="codigoDocenteBuscar" placeholder="Código del Docente" class="border rounded p-2 w-full">
      </label>
      <button type="submit" class="btn-volver bg-blue-100 hover:bg-blue-200 text-blue-800">Buscar</button>
    </form>

    <div id="resultadoEditarDocente" class="mt-6"></div>
  `;
}

// Mostrar formulario de edición después de buscar docente
function buscarDocente() {
    const codigo = document.getElementById("codigoDocenteBuscar").value.trim();
    const resultado = document.getElementById("resultadoEditarDocente");

    if (!codigo) {
        resultado.innerHTML = `<p class="text-red-600">Ingrese un código válido.</p>`;
        return;
    }

    // Ejemplo de docente encontrado
    const docente = { codigo: codigo, nombre: "Docente Ejemplo", materia: "Matemática" };

    resultado.innerHTML = `
    <form class="detalle-curso grid gap-4 max-w-md mx-auto">
      <label>Código del Docente
        <input type="text" value="${docente.codigo}" class="border rounded p-2 w-full" disabled>
      </label>
      <label>Nombre del Docente
        <input type="text" value="${docente.nombre}" class="border rounded p-2 w-full">
      </label>
      <label>Materia
        <input type="text" value="${docente.materia}" class="border rounded p-2 w-full">
      </label>
      <div class="flex gap-4">
        <button type="submit" class="btn-volver bg-yellow-100 hover:bg-yellow-200 text-yellow-800">Guardar Cambios</button>
        <button type="button" class="btn-volver bg-red-100 hover:bg-red-200 text-red-800" onclick="alert('Docente eliminado')">Eliminar</button>
      </div>
    </form>
  `;
}
