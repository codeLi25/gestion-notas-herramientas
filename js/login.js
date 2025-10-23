const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  
  // Cambia el ícono (ojo abierto / cerrado)
  togglePassword.classList.toggle("ph-eye");
  togglePassword.classList.toggle("ph-eye-slash");
});
