<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-subcategorias");
  const datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  const ocultas = JSON.parse(localStorage.getItem("ocultas")) || {};

  Object.keys(datos).forEach(categoria => {
    const catDiv = document.createElement("div");
    catDiv.innerHTML = `<h3>${categoria}</h3>`;
    
    datos[categoria].forEach(sub => {
      const id = `${categoria}_${sub}`;
      const checked = !(ocultas[categoria]?.includes(sub));
      
      catDiv.innerHTML += `
        <label>
          <input type="checkbox" data-cat="${categoria}" value="${sub}" ${checked ? "checked" : ""}>
          ${sub}
        </label><br>
      `;
    });

    contenedor.appendChild(catDiv);
  });
});

function volver() {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  const nuevasOcultas = {};

  checkboxes.forEach(cb => {
    const cat = cb.dataset.cat;
    const val = cb.value;
    if (!cb.checked) {
      if (!nuevasOcultas[cat]) nuevasOcultas[cat] = [];
      nuevasOcultas[cat].push(val);
    }
  });

  localStorage.setItem("ocultas", JSON.stringify(nuevasOcultas));
  window.location.href = "subcategporias.html";
}
=======
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-subcategorias");
  const datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  const ocultas = JSON.parse(localStorage.getItem("ocultas")) || {};

  Object.keys(datos).forEach(categoria => {
    const catDiv = document.createElement("div");
    catDiv.innerHTML = `<h3>${categoria}</h3>`;
    
    datos[categoria].forEach(sub => {
      const id = `${categoria}_${sub}`;
      const checked = !(ocultas[categoria]?.includes(sub));
      
      catDiv.innerHTML += `
        <label>
          <input type="checkbox" data-cat="${categoria}" value="${sub}" ${checked ? "checked" : ""}>
          ${sub}
        </label><br>
      `;
    });

    contenedor.appendChild(catDiv);
  });
});

function volver() {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  const nuevasOcultas = {};

  checkboxes.forEach(cb => {
    const cat = cb.dataset.cat;
    const val = cb.value;
    if (!cb.checked) {
      if (!nuevasOcultas[cat]) nuevasOcultas[cat] = [];
      nuevasOcultas[cat].push(val);
    }
  });

  localStorage.setItem("ocultas", JSON.stringify(nuevasOcultas));
  window.location.href = "subcategporias.html";
}
>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
=======
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-subcategorias");
  const datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  const ocultas = JSON.parse(localStorage.getItem("ocultas")) || {};

  Object.keys(datos).forEach(categoria => {
    const catDiv = document.createElement("div");
    catDiv.innerHTML = `<h3>${categoria}</h3>`;
    
    datos[categoria].forEach(sub => {
      const id = `${categoria}_${sub}`;
      const checked = !(ocultas[categoria]?.includes(sub));
      
      catDiv.innerHTML += `
        <label>
          <input type="checkbox" data-cat="${categoria}" value="${sub}" ${checked ? "checked" : ""}>
          ${sub}
        </label><br>
      `;
    });

    contenedor.appendChild(catDiv);
  });
});

function volver() {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  const nuevasOcultas = {};

  checkboxes.forEach(cb => {
    const cat = cb.dataset.cat;
    const val = cb.value;
    if (!cb.checked) {
      if (!nuevasOcultas[cat]) nuevasOcultas[cat] = [];
      nuevasOcultas[cat].push(val);
    }
  });

  localStorage.setItem("ocultas", JSON.stringify(nuevasOcultas));
  window.location.href = "subcategporias.html";
}
>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
=======
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-subcategorias");
  const datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  const ocultas = JSON.parse(localStorage.getItem("ocultas")) || {};

  Object.keys(datos).forEach(categoria => {
    const catDiv = document.createElement("div");
    catDiv.innerHTML = `<h3>${categoria}</h3>`;
    
    datos[categoria].forEach(sub => {
      const id = `${categoria}_${sub}`;
      const checked = !(ocultas[categoria]?.includes(sub));
      
      catDiv.innerHTML += `
        <label>
          <input type="checkbox" data-cat="${categoria}" value="${sub}" ${checked ? "checked" : ""}>
          ${sub}
        </label><br>
      `;
    });

    contenedor.appendChild(catDiv);
  });
});

function volver() {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  const nuevasOcultas = {};

  checkboxes.forEach(cb => {
    const cat = cb.dataset.cat;
    const val = cb.value;
    if (!cb.checked) {
      if (!nuevasOcultas[cat]) nuevasOcultas[cat] = [];
      nuevasOcultas[cat].push(val);
    }
  });

  localStorage.setItem("ocultas", JSON.stringify(nuevasOcultas));
  window.location.href = "subcategporias.html";
}
>>>>>>> b86bc917c461b946817578f3a65520e9b60a792b
