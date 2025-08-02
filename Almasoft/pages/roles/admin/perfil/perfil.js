function habilitarEdicion() {
  document.querySelectorAll('#formulario-perfil input, #formulario-perfil select')
    .forEach(input => input.disabled = false);
  document.getElementById('botones-guardar-cancelar').style.display = 'flex';
}

function cancelarEdicion() {
  document.querySelectorAll('#formulario-perfil input, #formulario-perfil select')
    .forEach(input => input.disabled = true);
  document.getElementById('botones-guardar-cancelar').style.display = 'none';
}

function cerrarSesion() {
  if (confirm("¿Estás seguro de que quieres cerrar sesión?")) {
    window.location.href = "../../login.html"; // Redirige a la página de inicio de sesión
  }
}

document.getElementById("formulario-perfil").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Cambios guardados exitosamente.");
  cancelarEdicion();
});
