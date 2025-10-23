function setupUsuario() {
    const userMenuBtn = document.getElementById("userMenuBtn");
    const userDropdown = document.getElementById("userDropdown");
    const logoutBtn = document.getElementById("logoutBtn");

    // Verifica que los elementos existan antes de usar eventos
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener("click", () => {
            userDropdown.classList.toggle("hidden");
        });

        document.addEventListener("click", (e) => {
            if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
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