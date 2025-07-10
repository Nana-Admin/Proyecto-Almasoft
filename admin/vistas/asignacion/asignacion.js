<<<<<<< HEAD
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get("tipo");
  const dia = params.get("dia");
  const mes = params.get("mes");
  const anio = params.get("anio");

  const mapaTitulos = {
    misas: "MISAS",
    velacion: "VELACIÓN",
    exhumacion: "EXHUMACIÓN",
    sepelio: "SEPELIO"
  };

  document.getElementById("titulo-asignacion").textContent = `ASIGNAR - ${mapaTitulos[tipo] || "TRÁMITE"}`;
  document.getElementById("info-dia").textContent = `Día seleccionado: ${dia}/${mes}/${anio}`;

  document.getElementById("form-asignacion").addEventListener("submit", (e) => {
    e.preventDefault();
    const responsable = document.getElementById("responsable").value;
    alert(`Responsable ${responsable} asignado al día ${dia}/${mes}/${anio} para ${mapaTitulos[tipo]}`);
    // Aquí puedes luego guardar esto en localStorage o una base de datos
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get("tipo");
  const dia = params.get("dia");
  const mes = params.get("mes");
  const anio = params.get("anio");

  const mapaTitulos = {
    misas: "MISAS",
    velacion: "VELACIÓN",
    exhumacion: "EXHUMACIÓN",
    sepelio: "SEPELIO"
  };

  document.getElementById("titulo-asignacion").textContent = `ASIGNAR - ${mapaTitulos[tipo] || "TRÁMITE"}`;
  document.getElementById("info-dia").textContent = `Día seleccionado: ${dia}/${mes}/${anio}`;

  document.getElementById("form-asignacion").addEventListener("submit", (e) => {
    e.preventDefault();
    const responsable = document.getElementById("responsable").value;
    alert(`Responsable ${responsable} asignado al día ${dia}/${mes}/${anio} para ${mapaTitulos[tipo]}`);
    // Aquí puedes luego guardar esto en localStorage o una base de datos
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get("tipo");
  const dia = params.get("dia");
  const mes = params.get("mes");
  const anio = params.get("anio");

  const mapaTitulos = {
    misas: "MISAS",
    velacion: "VELACIÓN",
    exhumacion: "EXHUMACIÓN",
    sepelio: "SEPELIO"
  };

  document.getElementById("titulo-asignacion").textContent = `ASIGNAR - ${mapaTitulos[tipo] || "TRÁMITE"}`;
  document.getElementById("info-dia").textContent = `Día seleccionado: ${dia}/${mes}/${anio}`;

  document.getElementById("form-asignacion").addEventListener("submit", (e) => {
    e.preventDefault();
    const responsable = document.getElementById("responsable").value;
    alert(`Responsable ${responsable} asignado al día ${dia}/${mes}/${anio} para ${mapaTitulos[tipo]}`);
    // Aquí puedes luego guardar esto en localStorage o una base de datos
  });
});
=======
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get("tipo");
  const dia = params.get("dia");
  const mes = params.get("mes");
  const anio = params.get("anio");

  const mapaTitulos = {
    misas: "MISAS",
    velacion: "VELACIÓN",
    exhumacion: "EXHUMACIÓN",
    sepelio: "SEPELIO"
  };

  document.getElementById("titulo-asignacion").textContent = `ASIGNAR - ${mapaTitulos[tipo] || "TRÁMITE"}`;
  document.getElementById("info-dia").textContent = `Día seleccionado: ${dia}/${mes}/${anio}`;

  document.getElementById("form-asignacion").addEventListener("submit", (e) => {
    e.preventDefault();
    const responsable = document.getElementById("responsable").value;
    alert(`Responsable ${responsable} asignado al día ${dia}/${mes}/${anio} para ${mapaTitulos[tipo]}`);
    // Aquí puedes luego guardar esto en localStorage o una base de datos
  });
});
>>>>>>> b86bc917c461b946817578f3a65520e9b60a792b
