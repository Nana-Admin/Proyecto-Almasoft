const nombresMeses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
let fechaActual = new Date();

function generarCalendario(fecha) {
  const año = fecha.getFullYear();
  const mes = fecha.getMonth();

  document.getElementById("mes-actual").textContent = `${nombresMeses[mes]} ${año}`;
  const primerDia = new Date(año, mes, 1).getDay();
  const diasEnMes = new Date(año, mes + 1, 0).getDate();
  const diasMesAnterior = new Date(año, mes, 0).getDate();

  const contenedor = document.getElementById("dias-mes");
  contenedor.innerHTML = "";

  for (let i = primerDia - 1; i >= 0; i--) {
    const dia = document.createElement("div");
    dia.className = "dia gris";
    dia.textContent = diasMesAnterior - i;
    contenedor.appendChild(dia);
  }

  for (let d = 1; d <= diasEnMes; d++) {
    const dia = document.createElement("div");
    dia.className = "dia";
    dia.textContent = d;

    dia.addEventListener("click", () => {
      const tipo = new URLSearchParams(window.location.search).get("tipo");
      window.location.href = `../asignacion/asignacion.html?tipo=${tipo}&dia=${d}&mes=${mes + 1}&anio=${año}`;
    });

    contenedor.appendChild(dia);
  }

  const totalCeldas = contenedor.children.length;
  const celdasRestantes = 7 - (totalCeldas % 7);
  if (celdasRestantes < 7) {
    for (let i = 1; i <= celdasRestantes; i++) {
      const dia = document.createElement("div");
      dia.className = "dia gris";
      dia.textContent = i;
      contenedor.appendChild(dia);
    }
  }
}

function cambiarMes(direccion) {
  fechaActual.setMonth(fechaActual.getMonth() + direccion);
  generarCalendario(fechaActual);
}

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get("tipo");

  const mapaTitulos = {
    misas: "MISAS",
    velacion: "VELACIÓN",
    exhumacion: "EXHUMACIÓN",
    sepelio: "SEPELIO"
  };

  if (tipo && mapaTitulos[tipo]) {
    document.getElementById("titulo-cronograma").textContent = mapaTitulos[tipo];
  }

  generarCalendario(fechaActual);
});






