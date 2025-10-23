function setupUsuario() {
    const userMenuBtn = document.getElementById("userMenuBtn");
    const userDropdown = document.getElementById("userDropdown");
    const logoutBtn = document.getElementById("logoutBtn");

    if (userMenuBtn && userDropdown) {
        // Mostrar/ocultar dropdown al hacer clic en el botón
        userMenuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle("hidden");
        });

        document.addEventListener("click", (e) => {
            if (!userDropdown.contains(e.target)) {
                userDropdown.classList.add("hidden");
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            alert("Sesión cerrada correctamente.");
            window.location.href = "index.html";
        });
    }
}

document.addEventListener("DOMContentLoaded", setupUsuario);
