document.getElementById("form-login").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();
  const error = document.getElementById("error-login");

  if (usuario == "cliente" & clave == "123") {
    window.location.href = "cliente/dashboard.html";
  } else if (usuario == "asesor" & clave == "123") {
    window.location.href = "asesor/dashboard.html";
  } else if (usuario == "administrador" & clave == "123") {
    window.location.href = "administrador/dashboard.html";
  } else if (usuario == "admin" & clave == "123") {
    window.location.href = "../pages/roles/admin/dashboard.html";
  } else {
    error.textContent = "Usuario o contraseña incorrectos.";
  }
});
