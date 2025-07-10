<<<<<<< HEAD
const datos = [
  {
    id: "20240318-001",
    fecha: "2024-03-01",
    nombre: "Sofía Ramírez Torres",
    pago: "Tarjeta de crédito",
    estado: "Pendiente",
    compra: "$3.120.000",
    correo: "sofia.ramirez@email.com",
    telefono: "‪+57 320 123 4567‬"
  },
  {
    id: "20240318-002",
    fecha: "2024-03-03",
    nombre: "Alejandro Gutiérrez Peña",
    pago: "PSE",
    estado: "Completo",
    compra: "$2.800.000",
    correo: "alejandro@email.com",
    telefono: "‪+57 312 000 1111‬"
  },
  {
    id: "20240318-003",
    fecha: "2024-03-05",
    nombre: "Valeria Mendoza Rojas",
    pago: "Contado (Efectivo)",
    estado: "Cancelado",
    compra: "$2.500.000",
    correo: "valeria@email.com",
    telefono: "‪+57 301 456 7890‬"
  },
  {
    id: "20240318-004",
    fecha: "2024-03-07",
    nombre: "Nicolás Herrera Fernández",
    pago: "Tarjeta de débito",
    estado: "Pendiente",
    compra: "$2.900.000",
    correo: "nicolas@email.com",
    telefono: "‪+57 311 222 3333‬"
  },
  {
    id: "20240318-005",
    fecha: "2024-03-08",
    nombre: "Camila Paredes López",
    pago: "PSE",
    estado: "Completo",
    compra: "$3.000.000",
    correo: "camila@email.com",
    telefono: "‪+57 322 444 5555‬"
  },
  {
    id: "20240318-006",
    fecha: "2024-03-10",
    nombre: "Mateo Vargas Salazar",
    pago: "Transferencia bancaria",
    estado: "Pendiente",
    compra: "$2.600.000",
    correo: "mateo@email.com",
    telefono: "‪+57 300 999 8888‬"
  },
  {
    id: "20240318-007",
    fecha: "2024-03-12",
    nombre: "Isabella Ortega Castillo",
    pago: "Tarjeta de crédito",
    estado: "Cancelado",
    compra: "$2.750.000",
    correo: "isabella@email.com",
    telefono: "+57 310 777 6666"
  },
  {
    id: "20240318-008",
    fecha: "2024-03-14",
    nombre: "Sebastián Muñoz Delgado",
    pago: "Contado (Efectivo)",
    estado: "Completo",
    compra: "$3.100.000",
    correo: "sebastian@email.com",
    telefono: "+57 311 000 9999"
  },
  {
    id: "20240318-009",
    fecha: "2024-03-15",
    nombre: "Martina Solano Jiménez",
    pago: "Tarjeta de débito",
    estado: "Pendiente",
    compra: "$2.950.000",
    correo: "martina@email.com",
    telefono: "+57 312 888 7777"
  },
  {
    id: "20240318-010",
    fecha: "2024-03-16",
    nombre: "Juan Pablo Cáceres Medina",
    pago: "PSE",
    estado: "Completo",
    compra: "$3.050.000",
    correo: "juan@email.com",
    telefono: "+57 300 123 4567"
  }
];

const tbody = document.getElementById("tabla-body");

datos.forEach((d, i) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${d.id}</td>
    <td>${d.fecha}</td>
    <td>${d.nombre}</td>
    <td>${d.pago}</td>
    <td>${d.estado}</td>
    <td>${d.compra}</td>
    <td><img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" class="lupa-icon" onclick="verDetalle(${i})"></td>
  `;
  tbody.appendChild(tr);
});

function verDetalle(index) {
  const d = datos[index];
  const modal = document.getElementById("modal");
  const contenido = document.getElementById("contenido-modal");

  contenido.innerHTML = `
    <div>
      <p><strong>ID de la Orden:</strong> ${d.id}</p>
      <p><strong>Fecha de Compra:</strong> ${d.fecha}</p>
      <p><strong>IVA:</strong> ${Math.round(parseInt(d.compra.replace(/\D/g,'')) * 0.19).toLocaleString()}</p>
      <p><strong>Total de la Compra:</strong> ${d.compra}</p>
      <p><strong>NOMBRE:</strong> ${d.nombre}</p>
      <p><strong>CORREO:</strong> ${d.correo}</p>
      <p><strong>TELEFONO:</strong> ${d.telefono}</p>
    </div>
    <div>
      <p><strong>PLAN PREMIUM</strong></p>
      <p>$ SIN LÍMITE DE EDAD</p>
      <p>TERMINALES CUBREN 72Hr.</p>
      <p>7 Personas</p>
      <p>1 AÑO 50%</p>
      <p>BOBEDA, ATAÚD, TRANSPORTE, LÁPIDA, URNAS, ARREGLO FLORAL</p>
      <div class="metodo">Método de pago: ${d.pago}</div>
    </div>
  `;
  modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    cerrarModal();
  }
}
=======
const datos = [
  {
    id: "20240318-001",
    fecha: "2024-03-01",
    nombre: "Sofía Ramírez Torres",
    pago: "Tarjeta de crédito",
    estado: "Pendiente",
    compra: "$3.120.000",
    correo: "sofia.ramirez@email.com",
    telefono: "‪+57 320 123 4567‬"
  },
  {
    id: "20240318-002",
    fecha: "2024-03-03",
    nombre: "Alejandro Gutiérrez Peña",
    pago: "PSE",
    estado: "Completo",
    compra: "$2.800.000",
    correo: "alejandro@email.com",
    telefono: "‪+57 312 000 1111‬"
  },
  {
    id: "20240318-003",
    fecha: "2024-03-05",
    nombre: "Valeria Mendoza Rojas",
    pago: "Contado (Efectivo)",
    estado: "Cancelado",
    compra: "$2.500.000",
    correo: "valeria@email.com",
    telefono: "‪+57 301 456 7890‬"
  },
  {
    id: "20240318-004",
    fecha: "2024-03-07",
    nombre: "Nicolás Herrera Fernández",
    pago: "Tarjeta de débito",
    estado: "Pendiente",
    compra: "$2.900.000",
    correo: "nicolas@email.com",
    telefono: "‪+57 311 222 3333‬"
  },
  {
    id: "20240318-005",
    fecha: "2024-03-08",
    nombre: "Camila Paredes López",
    pago: "PSE",
    estado: "Completo",
    compra: "$3.000.000",
    correo: "camila@email.com",
    telefono: "‪+57 322 444 5555‬"
  },
  {
    id: "20240318-006",
    fecha: "2024-03-10",
    nombre: "Mateo Vargas Salazar",
    pago: "Transferencia bancaria",
    estado: "Pendiente",
    compra: "$2.600.000",
    correo: "mateo@email.com",
    telefono: "‪+57 300 999 8888‬"
  },
  {
    id: "20240318-007",
    fecha: "2024-03-12",
    nombre: "Isabella Ortega Castillo",
    pago: "Tarjeta de crédito",
    estado: "Cancelado",
    compra: "$2.750.000",
    correo: "isabella@email.com",
    telefono: "+57 310 777 6666"
  },
  {
    id: "20240318-008",
    fecha: "2024-03-14",
    nombre: "Sebastián Muñoz Delgado",
    pago: "Contado (Efectivo)",
    estado: "Completo",
    compra: "$3.100.000",
    correo: "sebastian@email.com",
    telefono: "+57 311 000 9999"
  },
  {
    id: "20240318-009",
    fecha: "2024-03-15",
    nombre: "Martina Solano Jiménez",
    pago: "Tarjeta de débito",
    estado: "Pendiente",
    compra: "$2.950.000",
    correo: "martina@email.com",
    telefono: "+57 312 888 7777"
  },
  {
    id: "20240318-010",
    fecha: "2024-03-16",
    nombre: "Juan Pablo Cáceres Medina",
    pago: "PSE",
    estado: "Completo",
    compra: "$3.050.000",
    correo: "juan@email.com",
    telefono: "+57 300 123 4567"
  }
];

const tbody = document.getElementById("tabla-body");

datos.forEach((d, i) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${d.id}</td>
    <td>${d.fecha}</td>
    <td>${d.nombre}</td>
    <td>${d.pago}</td>
    <td>${d.estado}</td>
    <td>${d.compra}</td>
    <td><img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" class="lupa-icon" onclick="verDetalle(${i})"></td>
  `;
  tbody.appendChild(tr);
});

function verDetalle(index) {
  const d = datos[index];
  const modal = document.getElementById("modal");
  const contenido = document.getElementById("contenido-modal");

  contenido.innerHTML = `
    <div>
      <p><strong>ID de la Orden:</strong> ${d.id}</p>
      <p><strong>Fecha de Compra:</strong> ${d.fecha}</p>
      <p><strong>IVA:</strong> ${Math.round(parseInt(d.compra.replace(/\D/g,'')) * 0.19).toLocaleString()}</p>
      <p><strong>Total de la Compra:</strong> ${d.compra}</p>
      <p><strong>NOMBRE:</strong> ${d.nombre}</p>
      <p><strong>CORREO:</strong> ${d.correo}</p>
      <p><strong>TELEFONO:</strong> ${d.telefono}</p>
    </div>
    <div>
      <p><strong>PLAN PREMIUM</strong></p>
      <p>$ SIN LÍMITE DE EDAD</p>
      <p>TERMINALES CUBREN 72Hr.</p>
      <p>7 Personas</p>
      <p>1 AÑO 50%</p>
      <p>BOBEDA, ATAÚD, TRANSPORTE, LÁPIDA, URNAS, ARREGLO FLORAL</p>
      <div class="metodo">Método de pago: ${d.pago}</div>
    </div>
  `;
  modal.style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    cerrarModal();
  }
}
>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
