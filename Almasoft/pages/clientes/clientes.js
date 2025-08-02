// Mostrar formulario modal
function abrirFormularioUsuario() {
  document.getElementById('modalUsuario').style.display = 'flex';
}

// Cerrar formulario modal
function cerrarFormularioUsuario() {
  document.getElementById('modalUsuario').style.display = 'none';
}

// Manejar envío del formulario
document.getElementById('formularioUsuario').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombres = document.getElementById('nombres').value.trim();
  const apellidos = document.getElementById('apellidos').value.trim();
  const tipoDocumento = document.getElementById('tipoDocumento').value;
  const numeroDocumento = document.getElementById('numeroDocumento').value.trim();
  const telefono = document.getElementById('telefono').value.trim(); // Aunque no se usa, lo puedes guardar
  const celular = document.getElementById('celular').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const plan = document.getElementById('plan').value.trim();
  const direccion = document.getElementById('direccion').value.trim();

  if (!nombres || !apellidos || !tipoDocumento || !numeroDocumento || !celular || !correo || !plan || !direccion) {
    alert('Todos los campos excepto el teléfono son obligatorios.');
    return;
  }

  const tabla = document.getElementById('cuerpo-tabla-usuarios');
  const fila = tabla.insertRow();

  fila.innerHTML = `
    <td>${nombres}</td>
    <td>${apellidos}</td>
    <td>${tipoDocumento}</td>
    <td>${numeroDocumento}</td>
    <td>${celular}</td>
    <td>${correo}</td>
    <td>${plan}</td>
    <td>${direccion}</td>
    <td>
      <button class="btn-info" onclick="verInfoCliente('${numeroDocumento}')">📝</button>
      <button class="btn-beneficiarios" onclick="verBeneficiarios('${numeroDocumento}')">👥</button>
      <button class="btn-cronograma" onclick="verCronograma('${numeroDocumento}')">🕝</button>
      <button class="btn-deshabilitar" onclick="mostrarSwitch(this)">🔍</button>
      <label class="switch oculto">
        <input type="checkbox" onchange="toggleUsuario(this)" checked>
        <span class="slider"></span>
      </label>
      <button class="btn-eliminar" onclick="eliminarUsuario(this)">🗑️</button>
    </td>
  `;

  cerrarFormularioUsuario();
  this.reset();
});

// Función para eliminar fila
function eliminarUsuario(btn) {
  const fila = btn.closest('tr');
  if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
    fila.remove();
  }
}

// Mostrar u ocultar el switch de deshabilitado
function mostrarSwitch(btn) {
  const fila = btn.closest('td');
  const switchLabel = fila.querySelector('.switch');
  switchLabel.classList.toggle('oculto');
}

// Activar o desactivar visualmente al usuario
function toggleUsuario(switchInput) {
  const fila = switchInput.closest('tr');
  fila.style.opacity = switchInput.checked ? '1' : '0.5';
}

// Redirecciones
function verInfoCliente(id) {
  window.location.href = '../informacion/infocliente.html?id=' + id;
}

function verBeneficiarios(id) {
  window.location.href = 'beneficiarios.html?id=' + id;
}

function verCronograma(id) {
  window.location.href = 'cronograma.html?id=' + id;
}
