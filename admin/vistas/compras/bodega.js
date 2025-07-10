<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
document.getElementById("buscador").addEventListener("input", function () {
  const filtro = this.value.toLowerCase();
  const filas = document.querySelectorAll("#tabla tbody tr");

  filas.forEach(fila => {
    const texto = fila.textContent.toLowerCase();
    fila.style.display = texto.includes(filtro) ? "" : "none";
  });
});
=======
document.getElementById("buscador").addEventListener("input", function () {
  const filtro = this.value.toLowerCase();
  const filas = document.querySelectorAll("#tabla tbody tr");

  filas.forEach(fila => {
    const texto = fila.textContent.toLowerCase();
    fila.style.display = texto.includes(filtro) ? "" : "none";
  });
});
>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
=======
document.getElementById("buscador").addEventListener("input", function () {
  const filtro = this.value.toLowerCase();
  const filas = document.querySelectorAll("#tabla tbody tr");

  filas.forEach(fila => {
    const texto = fila.textContent.toLowerCase();
    fila.style.display = texto.includes(filtro) ? "" : "none";
  });
});
>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
=======
document.getElementById("buscador").addEventListener("input", function () {
  const filtro = this.value.toLowerCase();
  const filas = document.querySelectorAll("#tabla tbody tr");

  filas.forEach(fila => {
    const texto = fila.textContent.toLowerCase();
    fila.style.display = texto.includes(filtro) ? "" : "none";
  });
});
>>>>>>> b86bc917c461b946817578f3a65520e9b60a792b
