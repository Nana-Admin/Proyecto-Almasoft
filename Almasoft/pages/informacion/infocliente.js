// Abrir modal y cargar datos actuales
document.getElementById("btnEditar").addEventListener("click", () => {
  document.getElementById("modalEditar").style.display = "block";

  // Cargar valores actuales al formulario
  document.getElementById("input-nombre").value = document.getElementById("nombre").textContent;
  document.getElementById("input-documento").value = document.getElementById("documento").textContent;
  document.getElementById("input-telefono").value = document.getElementById("telefono").textContent;
  document.getElementById("input-celular").value = document.getElementById("celular").textContent;
  document.getElementById("input-correo").value = document.getElementById("correo").textContent;
  document.getElementById("input-direccion").value = document.getElementById("direccion").textContent;
  document.getElementById("input-plan").value = document.getElementById("plan").textContent;
});

// Guardar cambios con alerta automática confiable
document.getElementById("formEditar").addEventListener("submit", (e) => {
  e.preventDefault();

  // Mostrar alerta automática
  Swal.fire({
    icon: 'success',
    title: '¡Cambios guardados!',
    text: 'La información fue actualizada correctamente.',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
  }).then(() => {
    // Actualizar información solo después de mostrar la alerta
    document.getElementById("nombre").textContent = document.getElementById("input-nombre").value;
    document.getElementById("documento").textContent = document.getElementById("input-documento").value;
    document.getElementById("telefono").textContent = document.getElementById("input-telefono").value;
    document.getElementById("celular").textContent = document.getElementById("input-celular").value;
    document.getElementById("correo").textContent = document.getElementById("input-correo").value;
    document.getElementById("direccion").textContent = document.getElementById("input-direccion").value;
    document.getElementById("plan").textContent = document.getElementById("input-plan").value;

    // Cerrar modal
    document.getElementById("modalEditar").style.display = "none";
  });
});

// Cerrar modal con la "X"
document.getElementById("cerrarModal").addEventListener("click", () => {
  document.getElementById("modalEditar").style.display = "none";
});

