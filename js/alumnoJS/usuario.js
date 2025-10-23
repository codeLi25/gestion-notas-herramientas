function setupUsuario() {
    const userMenuBtn = document.getElementById("userMenuBtn");
    const userDropdown = document.getElementById("userDropdown");

    userMenuBtn.addEventListener("click", () => {
        userDropdown.classList.toggle("hidden");
    });

    document.getElementById("logoutBtn").addEventListener("click", () => {
        alert("Sesión cerrada correctamente.");
        window.location.href = "index.html";
    });
}
