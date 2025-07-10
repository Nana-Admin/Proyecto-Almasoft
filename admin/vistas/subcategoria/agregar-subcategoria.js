<<<<<<< HEAD
document.getElementById("form-subcategoria").addEventListener("submit", function (e) {
  e.preventDefault();

  const categoria = document.getElementById("categoria").value;
  const subcategoria = document.getElementById("subcategoria").value.trim();

  if (!categoria || !subcategoria) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  let datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  if (!datos[categoria]) datos[categoria] = [];
  datos[categoria].push(subcategoria);
  localStorage.setItem("subcategorias", JSON.stringify(datos));

  alert(`"${subcategoria}" agregado a ${categoria}`);
  window.location.href = "subcategporias.html";  // Asegúrate de que este archivo exista
});

=======
document.getElementById("form-subcategoria").addEventListener("submit", function (e) {
  e.preventDefault();

  const categoria = document.getElementById("categoria").value;
  const subcategoria = document.getElementById("subcategoria").value.trim();

  if (!categoria || !subcategoria) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  let datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  if (!datos[categoria]) datos[categoria] = [];
  datos[categoria].push(subcategoria);
  localStorage.setItem("subcategorias", JSON.stringify(datos));

  alert(`"${subcategoria}" agregado a ${categoria}`);
  window.location.href = "subcategporias.html";  // Asegúrate de que este archivo exista
});

>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
