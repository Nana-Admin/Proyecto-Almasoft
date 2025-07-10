<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

document.querySelectorAll(".titulo").forEach(titulo => {
  titulo.addEventListener("click", () => {
    const lista = titulo.nextElementSibling;
    lista.style.display = lista.style.display === "block" ? "none" : "block";
  });
});


document.querySelectorAll(".opciones li").forEach(opcion => {
  opcion.addEventListener("click", (e) => {
    e.stopPropagation();
    const confirmacion = confirm(`¿Estás seguro de agregar "${opcion.textContent}"?`);
    if (confirmacion) {
      alert(`"${opcion.textContent}" agregado correctamente.`);
    }
  });
});


function renderSubcategorias() {
  const datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  const ocultas = JSON.parse(localStorage.getItem("ocultas")) || {};

  document.querySelectorAll(".cat").forEach(catDiv => {
    const titulo = catDiv.querySelector(".titulo").textContent;
    const ul = catDiv.querySelector("ul");

   
    const baseSubcategorias = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    let lista = [...(baseSubcategorias[titulo] || [])];
    if (datos[titulo]) {
      datos[titulo].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

    
    ul.innerHTML = "";

    
    lista.forEach(sub => {
      const li = document.createElement("li");
      li.textContent = sub;
      if (ocultas[titulo]?.includes(sub)) {
        li.style.display = "none";
      }
      ul.appendChild(li);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderSubcategorias();

  const modal = document.getElementById("modalEditar");
  const btnEditar = document.getElementById("btnEditar");
  const selectCategoria = document.getElementById("categoria");
  const selectSubcategoria = document.getElementById("subcategoria");

  
  btnEditar.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  
  window.cerrarModal = function () {
    modal.style.display = "none";
  };

  
  selectCategoria.addEventListener("change", function () {
    const cat = this.value;
    let opciones = [];

    if (cat === "Color") {
      opciones = ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Café", "Morado", "Plata", "Personalizado"];
    } else if (cat === "Estilo") {
      opciones = ["Básico", "Presidencial", "Moderno", "Estructural", "Temáticos", "Clásicos", "Modernos", "Joyería", "Personalizado"];
    } else if (cat === "Material") {
      opciones = ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Mármol", "Latón", "Vidrio", "Hormigón", "Acero", "Piedra"];
    } else if (cat === "Tamaño") {
      opciones = ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"];
    } else if (cat === "Capacidad") {
      opciones = ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"];
    } else if (cat === "Diseños") {
      opciones = ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"];
    }

    
    selectSubcategoria.innerHTML = "";
    opciones.forEach(op => {
      const option = document.createElement("option");
      option.textContent = op;
      selectSubcategoria.appendChild(option);
    });
  });
});


function guardarEdicion() {
  const categoria = document.getElementById("categoria").value;
  const subcategoria = document.getElementById("subcategoria").value;
  const descripcion = document.getElementById("descripcion").value;
  const idPersona = document.getElementById("idPersona").value;

  console.log("Categoría:", categoria);
  console.log("Subcategoría:", subcategoria);
  console.log("Descripción:", descripcion);
  console.log("ID Persona:", idPersona);

  alert("Cambios guardados correctamente");
  cerrarModal();
}

document.addEventListener("DOMContentLoaded", function () {
  const btnBuscar = document.getElementById("btnBuscar");
  const modalBuscar = document.getElementById("modalBuscar");
  const selectBuscar = document.getElementById("buscarCategoria");
  const resultado = document.getElementById("resultadoBusqueda");

  btnBuscar.addEventListener("click", function () {
    modalBuscar.style.display = "flex";
    resultado.innerHTML = ""; 
  });

 
  selectBuscar.addEventListener("change", function () {
    const cat = this.value;
    const base = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    const adicionales = JSON.parse(localStorage.getItem("subcategorias")) || {};
    let lista = [...(base[cat] || [])];

    if (adicionales[cat]) {
      adicionales[cat].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

   
    resultado.innerHTML = `
      <strong>Categoría:</strong> ${cat}<br>
      <strong>Total subcategorías:</strong> ${lista.length}<br><br>
      <ul>${lista.map(sub => `<li>${sub}</li>`).join("")}</ul>
    `;
  });
});


function cerrarModalBuscar() {
  document.getElementById("modalBuscar").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const btnEliminar = document.getElementById("btnEliminar");
  const modalEliminar = document.getElementById("modalEliminar");
  const selectCategoriaEliminar = document.getElementById("eliminarCategoria");
  const selectSubcategoriaEliminar = document.getElementById("eliminarSubcategoria");

  btnEliminar.addEventListener("click", function () {
    modalEliminar.style.display = "flex";
    selectSubcategoriaEliminar.innerHTML = `<option value="">Selecciona una categoría primero</option>`;
  });

  selectCategoriaEliminar.addEventListener("change", function () {
    const categoria = this.value;

    const base = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    const adicionales = JSON.parse(localStorage.getItem("subcategorias")) || {};
    let lista = [...(base[categoria] || [])];

    if (adicionales[categoria]) {
      adicionales[categoria].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

   
    selectSubcategoriaEliminar.innerHTML = "";
    lista.forEach(sub => {
      const option = document.createElement("option");
      option.value = sub;
      option.textContent = sub;
      selectSubcategoriaEliminar.appendChild(option);
    });
  });
});


function eliminarSubcategoria() {
  const cat = document.getElementById("eliminarCategoria").value;
  const sub = document.getElementById("eliminarSubcategoria").value;

  if (!sub) {
    alert("Selecciona una subcategoría para eliminar.");
    return;
  }

  
  const confirmacion = confirm(`¿Seguro que deseas eliminar "${sub}" de la categoría "${cat}"? Esta acción no se puede deshacer.`);
  if (!confirmacion) return;

  let datos = JSON.parse(localStorage.getItem("subcategorias")) || {};

  if (datos[cat]) {
    datos[cat] = datos[cat].filter(item => item !== sub);
    if (datos[cat].length === 0) delete datos[cat];
    localStorage.setItem("subcategorias", JSON.stringify(datos));
  }

  alert(`"${sub}" ha sido eliminada permanentemente.`);
  cerrarModalEliminar();
  renderSubcategorias(); 
}

// Cerrar modal de eliminar
function cerrarModalEliminar() {
  document.getElementById("modalEliminar").style.display = "none";
}






=======

document.querySelectorAll(".titulo").forEach(titulo => {
  titulo.addEventListener("click", () => {
    const lista = titulo.nextElementSibling;
    lista.style.display = lista.style.display === "block" ? "none" : "block";
  });
});


document.querySelectorAll(".opciones li").forEach(opcion => {
  opcion.addEventListener("click", (e) => {
    e.stopPropagation();
    const confirmacion = confirm(`¿Estás seguro de agregar "${opcion.textContent}"?`);
    if (confirmacion) {
      alert(`"${opcion.textContent}" agregado correctamente.`);
    }
  });
});


function renderSubcategorias() {
  const datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  const ocultas = JSON.parse(localStorage.getItem("ocultas")) || {};

  document.querySelectorAll(".cat").forEach(catDiv => {
    const titulo = catDiv.querySelector(".titulo").textContent;
    const ul = catDiv.querySelector("ul");

   
    const baseSubcategorias = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    let lista = [...(baseSubcategorias[titulo] || [])];
    if (datos[titulo]) {
      datos[titulo].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

    
    ul.innerHTML = "";

    
    lista.forEach(sub => {
      const li = document.createElement("li");
      li.textContent = sub;
      if (ocultas[titulo]?.includes(sub)) {
        li.style.display = "none";
      }
      ul.appendChild(li);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderSubcategorias();

  const modal = document.getElementById("modalEditar");
  const btnEditar = document.getElementById("btnEditar");
  const selectCategoria = document.getElementById("categoria");
  const selectSubcategoria = document.getElementById("subcategoria");

  
  btnEditar.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  
  window.cerrarModal = function () {
    modal.style.display = "none";
  };

  
  selectCategoria.addEventListener("change", function () {
    const cat = this.value;
    let opciones = [];

    if (cat === "Color") {
      opciones = ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Café", "Morado", "Plata", "Personalizado"];
    } else if (cat === "Estilo") {
      opciones = ["Básico", "Presidencial", "Moderno", "Estructural", "Temáticos", "Clásicos", "Modernos", "Joyería", "Personalizado"];
    } else if (cat === "Material") {
      opciones = ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Mármol", "Latón", "Vidrio", "Hormigón", "Acero", "Piedra"];
    } else if (cat === "Tamaño") {
      opciones = ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"];
    } else if (cat === "Capacidad") {
      opciones = ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"];
    } else if (cat === "Diseños") {
      opciones = ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"];
    }

    
    selectSubcategoria.innerHTML = "";
    opciones.forEach(op => {
      const option = document.createElement("option");
      option.textContent = op;
      selectSubcategoria.appendChild(option);
    });
  });
});


function guardarEdicion() {
  const categoria = document.getElementById("categoria").value;
  const subcategoria = document.getElementById("subcategoria").value;
  const descripcion = document.getElementById("descripcion").value;
  const idPersona = document.getElementById("idPersona").value;

  console.log("Categoría:", categoria);
  console.log("Subcategoría:", subcategoria);
  console.log("Descripción:", descripcion);
  console.log("ID Persona:", idPersona);

  alert("Cambios guardados correctamente");
  cerrarModal();
}

document.addEventListener("DOMContentLoaded", function () {
  const btnBuscar = document.getElementById("btnBuscar");
  const modalBuscar = document.getElementById("modalBuscar");
  const selectBuscar = document.getElementById("buscarCategoria");
  const resultado = document.getElementById("resultadoBusqueda");

  btnBuscar.addEventListener("click", function () {
    modalBuscar.style.display = "flex";
    resultado.innerHTML = ""; 
  });

 
  selectBuscar.addEventListener("change", function () {
    const cat = this.value;
    const base = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    const adicionales = JSON.parse(localStorage.getItem("subcategorias")) || {};
    let lista = [...(base[cat] || [])];

    if (adicionales[cat]) {
      adicionales[cat].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

   
    resultado.innerHTML = `
      <strong>Categoría:</strong> ${cat}<br>
      <strong>Total subcategorías:</strong> ${lista.length}<br><br>
      <ul>${lista.map(sub => `<li>${sub}</li>`).join("")}</ul>
    `;
  });
});


function cerrarModalBuscar() {
  document.getElementById("modalBuscar").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const btnEliminar = document.getElementById("btnEliminar");
  const modalEliminar = document.getElementById("modalEliminar");
  const selectCategoriaEliminar = document.getElementById("eliminarCategoria");
  const selectSubcategoriaEliminar = document.getElementById("eliminarSubcategoria");

  btnEliminar.addEventListener("click", function () {
    modalEliminar.style.display = "flex";
    selectSubcategoriaEliminar.innerHTML = `<option value="">Selecciona una categoría primero</option>`;
  });

  selectCategoriaEliminar.addEventListener("change", function () {
    const categoria = this.value;

    const base = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    const adicionales = JSON.parse(localStorage.getItem("subcategorias")) || {};
    let lista = [...(base[categoria] || [])];

    if (adicionales[categoria]) {
      adicionales[categoria].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

   
    selectSubcategoriaEliminar.innerHTML = "";
    lista.forEach(sub => {
      const option = document.createElement("option");
      option.value = sub;
      option.textContent = sub;
      selectSubcategoriaEliminar.appendChild(option);
    });
  });
});


function eliminarSubcategoria() {
  const cat = document.getElementById("eliminarCategoria").value;
  const sub = document.getElementById("eliminarSubcategoria").value;

  if (!sub) {
    alert("Selecciona una subcategoría para eliminar.");
    return;
  }

  
  const confirmacion = confirm(`¿Seguro que deseas eliminar "${sub}" de la categoría "${cat}"? Esta acción no se puede deshacer.`);
  if (!confirmacion) return;

  let datos = JSON.parse(localStorage.getItem("subcategorias")) || {};

  if (datos[cat]) {
    datos[cat] = datos[cat].filter(item => item !== sub);
    if (datos[cat].length === 0) delete datos[cat];
    localStorage.setItem("subcategorias", JSON.stringify(datos));
  }

  alert(`"${sub}" ha sido eliminada permanentemente.`);
  cerrarModalEliminar();
  renderSubcategorias(); 
}

// Cerrar modal de eliminar
function cerrarModalEliminar() {
  document.getElementById("modalEliminar").style.display = "none";
}






>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
=======

document.querySelectorAll(".titulo").forEach(titulo => {
  titulo.addEventListener("click", () => {
    const lista = titulo.nextElementSibling;
    lista.style.display = lista.style.display === "block" ? "none" : "block";
  });
});


document.querySelectorAll(".opciones li").forEach(opcion => {
  opcion.addEventListener("click", (e) => {
    e.stopPropagation();
    const confirmacion = confirm(`¿Estás seguro de agregar "${opcion.textContent}"?`);
    if (confirmacion) {
      alert(`"${opcion.textContent}" agregado correctamente.`);
    }
  });
});


function renderSubcategorias() {
  const datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  const ocultas = JSON.parse(localStorage.getItem("ocultas")) || {};

  document.querySelectorAll(".cat").forEach(catDiv => {
    const titulo = catDiv.querySelector(".titulo").textContent;
    const ul = catDiv.querySelector("ul");

   
    const baseSubcategorias = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    let lista = [...(baseSubcategorias[titulo] || [])];
    if (datos[titulo]) {
      datos[titulo].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

    
    ul.innerHTML = "";

    
    lista.forEach(sub => {
      const li = document.createElement("li");
      li.textContent = sub;
      if (ocultas[titulo]?.includes(sub)) {
        li.style.display = "none";
      }
      ul.appendChild(li);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderSubcategorias();

  const modal = document.getElementById("modalEditar");
  const btnEditar = document.getElementById("btnEditar");
  const selectCategoria = document.getElementById("categoria");
  const selectSubcategoria = document.getElementById("subcategoria");

  
  btnEditar.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  
  window.cerrarModal = function () {
    modal.style.display = "none";
  };

  
  selectCategoria.addEventListener("change", function () {
    const cat = this.value;
    let opciones = [];

    if (cat === "Color") {
      opciones = ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Café", "Morado", "Plata", "Personalizado"];
    } else if (cat === "Estilo") {
      opciones = ["Básico", "Presidencial", "Moderno", "Estructural", "Temáticos", "Clásicos", "Modernos", "Joyería", "Personalizado"];
    } else if (cat === "Material") {
      opciones = ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Mármol", "Latón", "Vidrio", "Hormigón", "Acero", "Piedra"];
    } else if (cat === "Tamaño") {
      opciones = ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"];
    } else if (cat === "Capacidad") {
      opciones = ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"];
    } else if (cat === "Diseños") {
      opciones = ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"];
    }

    
    selectSubcategoria.innerHTML = "";
    opciones.forEach(op => {
      const option = document.createElement("option");
      option.textContent = op;
      selectSubcategoria.appendChild(option);
    });
  });
});


function guardarEdicion() {
  const categoria = document.getElementById("categoria").value;
  const subcategoria = document.getElementById("subcategoria").value;
  const descripcion = document.getElementById("descripcion").value;
  const idPersona = document.getElementById("idPersona").value;

  console.log("Categoría:", categoria);
  console.log("Subcategoría:", subcategoria);
  console.log("Descripción:", descripcion);
  console.log("ID Persona:", idPersona);

  alert("Cambios guardados correctamente");
  cerrarModal();
}

document.addEventListener("DOMContentLoaded", function () {
  const btnBuscar = document.getElementById("btnBuscar");
  const modalBuscar = document.getElementById("modalBuscar");
  const selectBuscar = document.getElementById("buscarCategoria");
  const resultado = document.getElementById("resultadoBusqueda");

  btnBuscar.addEventListener("click", function () {
    modalBuscar.style.display = "flex";
    resultado.innerHTML = ""; 
  });

 
  selectBuscar.addEventListener("change", function () {
    const cat = this.value;
    const base = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    const adicionales = JSON.parse(localStorage.getItem("subcategorias")) || {};
    let lista = [...(base[cat] || [])];

    if (adicionales[cat]) {
      adicionales[cat].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

   
    resultado.innerHTML = `
      <strong>Categoría:</strong> ${cat}<br>
      <strong>Total subcategorías:</strong> ${lista.length}<br><br>
      <ul>${lista.map(sub => `<li>${sub}</li>`).join("")}</ul>
    `;
  });
});


function cerrarModalBuscar() {
  document.getElementById("modalBuscar").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const btnEliminar = document.getElementById("btnEliminar");
  const modalEliminar = document.getElementById("modalEliminar");
  const selectCategoriaEliminar = document.getElementById("eliminarCategoria");
  const selectSubcategoriaEliminar = document.getElementById("eliminarSubcategoria");

  btnEliminar.addEventListener("click", function () {
    modalEliminar.style.display = "flex";
    selectSubcategoriaEliminar.innerHTML = `<option value="">Selecciona una categoría primero</option>`;
  });

  selectCategoriaEliminar.addEventListener("change", function () {
    const categoria = this.value;

    const base = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    const adicionales = JSON.parse(localStorage.getItem("subcategorias")) || {};
    let lista = [...(base[categoria] || [])];

    if (adicionales[categoria]) {
      adicionales[categoria].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

   
    selectSubcategoriaEliminar.innerHTML = "";
    lista.forEach(sub => {
      const option = document.createElement("option");
      option.value = sub;
      option.textContent = sub;
      selectSubcategoriaEliminar.appendChild(option);
    });
  });
});


function eliminarSubcategoria() {
  const cat = document.getElementById("eliminarCategoria").value;
  const sub = document.getElementById("eliminarSubcategoria").value;

  if (!sub) {
    alert("Selecciona una subcategoría para eliminar.");
    return;
  }

  
  const confirmacion = confirm(`¿Seguro que deseas eliminar "${sub}" de la categoría "${cat}"? Esta acción no se puede deshacer.`);
  if (!confirmacion) return;

  let datos = JSON.parse(localStorage.getItem("subcategorias")) || {};

  if (datos[cat]) {
    datos[cat] = datos[cat].filter(item => item !== sub);
    if (datos[cat].length === 0) delete datos[cat];
    localStorage.setItem("subcategorias", JSON.stringify(datos));
  }

  alert(`"${sub}" ha sido eliminada permanentemente.`);
  cerrarModalEliminar();
  renderSubcategorias(); 
}

// Cerrar modal de eliminar
function cerrarModalEliminar() {
  document.getElementById("modalEliminar").style.display = "none";
}






>>>>>>> 856621e9eb9b117d84efbbe499c18a2454807570
=======

document.querySelectorAll(".titulo").forEach(titulo => {
  titulo.addEventListener("click", () => {
    const lista = titulo.nextElementSibling;
    lista.style.display = lista.style.display === "block" ? "none" : "block";
  });
});


document.querySelectorAll(".opciones li").forEach(opcion => {
  opcion.addEventListener("click", (e) => {
    e.stopPropagation();
    const confirmacion = confirm(`¿Estás seguro de agregar "${opcion.textContent}"?`);
    if (confirmacion) {
      alert(`"${opcion.textContent}" agregado correctamente.`);
    }
  });
});


function renderSubcategorias() {
  const datos = JSON.parse(localStorage.getItem("subcategorias")) || {};
  const ocultas = JSON.parse(localStorage.getItem("ocultas")) || {};

  document.querySelectorAll(".cat").forEach(catDiv => {
    const titulo = catDiv.querySelector(".titulo").textContent;
    const ul = catDiv.querySelector("ul");

   
    const baseSubcategorias = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    let lista = [...(baseSubcategorias[titulo] || [])];
    if (datos[titulo]) {
      datos[titulo].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

    
    ul.innerHTML = "";

    
    lista.forEach(sub => {
      const li = document.createElement("li");
      li.textContent = sub;
      if (ocultas[titulo]?.includes(sub)) {
        li.style.display = "none";
      }
      ul.appendChild(li);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderSubcategorias();

  const modal = document.getElementById("modalEditar");
  const btnEditar = document.getElementById("btnEditar");
  const selectCategoria = document.getElementById("categoria");
  const selectSubcategoria = document.getElementById("subcategoria");

  
  btnEditar.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  
  window.cerrarModal = function () {
    modal.style.display = "none";
  };

  
  selectCategoria.addEventListener("change", function () {
    const cat = this.value;
    let opciones = [];

    if (cat === "Color") {
      opciones = ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Café", "Morado", "Plata", "Personalizado"];
    } else if (cat === "Estilo") {
      opciones = ["Básico", "Presidencial", "Moderno", "Estructural", "Temáticos", "Clásicos", "Modernos", "Joyería", "Personalizado"];
    } else if (cat === "Material") {
      opciones = ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Mármol", "Latón", "Vidrio", "Hormigón", "Acero", "Piedra"];
    } else if (cat === "Tamaño") {
      opciones = ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"];
    } else if (cat === "Capacidad") {
      opciones = ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"];
    } else if (cat === "Diseños") {
      opciones = ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"];
    }

    
    selectSubcategoria.innerHTML = "";
    opciones.forEach(op => {
      const option = document.createElement("option");
      option.textContent = op;
      selectSubcategoria.appendChild(option);
    });
  });
});


function guardarEdicion() {
  const categoria = document.getElementById("categoria").value;
  const subcategoria = document.getElementById("subcategoria").value;
  const descripcion = document.getElementById("descripcion").value;
  const idPersona = document.getElementById("idPersona").value;

  console.log("Categoría:", categoria);
  console.log("Subcategoría:", subcategoria);
  console.log("Descripción:", descripcion);
  console.log("ID Persona:", idPersona);

  alert("Cambios guardados correctamente");
  cerrarModal();
}

document.addEventListener("DOMContentLoaded", function () {
  const btnBuscar = document.getElementById("btnBuscar");
  const modalBuscar = document.getElementById("modalBuscar");
  const selectBuscar = document.getElementById("buscarCategoria");
  const resultado = document.getElementById("resultadoBusqueda");

  btnBuscar.addEventListener("click", function () {
    modalBuscar.style.display = "flex";
    resultado.innerHTML = ""; 
  });

 
  selectBuscar.addEventListener("change", function () {
    const cat = this.value;
    const base = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    const adicionales = JSON.parse(localStorage.getItem("subcategorias")) || {};
    let lista = [...(base[cat] || [])];

    if (adicionales[cat]) {
      adicionales[cat].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

   
    resultado.innerHTML = `
      <strong>Categoría:</strong> ${cat}<br>
      <strong>Total subcategorías:</strong> ${lista.length}<br><br>
      <ul>${lista.map(sub => `<li>${sub}</li>`).join("")}</ul>
    `;
  });
});


function cerrarModalBuscar() {
  document.getElementById("modalBuscar").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const btnEliminar = document.getElementById("btnEliminar");
  const modalEliminar = document.getElementById("modalEliminar");
  const selectCategoriaEliminar = document.getElementById("eliminarCategoria");
  const selectSubcategoriaEliminar = document.getElementById("eliminarSubcategoria");

  btnEliminar.addEventListener("click", function () {
    modalEliminar.style.display = "flex";
    selectSubcategoriaEliminar.innerHTML = `<option value="">Selecciona una categoría primero</option>`;
  });

  selectCategoriaEliminar.addEventListener("change", function () {
    const categoria = this.value;

    const base = {
      "Color": ["Rojo", "Gris", "Beige", "Rosado", "Naranja", "Blanco", "Verde", "Azul", "Amarillo", "Negro", "Cafe", "Morado", "Plata", "Personalizado"],
      "Estilo": ["Básico", "Presidencial", "Moderno", "Estructural", "Tematicos", "Clasicos", "Modernos", "Joyeria", "Personalizado"],
      "Material": ["Madera", "Metal", "Cerámica", "Granito", "Fibra de Vidrio", "Marmol", "Laton", "Vidrio", "Hormigon", "Acero", "Piedra"],
      "Tamaño": ["Grande", "Mediano", "Pequeño", "Individual", "Extragrande", "Infantil", "Estandar", "Personalizado"],
      "Capacidad": ["3 a 4 Litros", "1 a 2 Litros", "0.1 a 1,5 Litros", "6 a 8 Litros", "Personalizado"],
      "Diseños": ["Coronas", "Corazones", "Ramos", "Caballetes", "Cruz", "Cofre Floral"]
    };

    const adicionales = JSON.parse(localStorage.getItem("subcategorias")) || {};
    let lista = [...(base[categoria] || [])];

    if (adicionales[categoria]) {
      adicionales[categoria].forEach(item => {
        if (!lista.includes(item)) lista.push(item);
      });
    }

   
    selectSubcategoriaEliminar.innerHTML = "";
    lista.forEach(sub => {
      const option = document.createElement("option");
      option.value = sub;
      option.textContent = sub;
      selectSubcategoriaEliminar.appendChild(option);
    });
  });
});


function eliminarSubcategoria() {
  const cat = document.getElementById("eliminarCategoria").value;
  const sub = document.getElementById("eliminarSubcategoria").value;

  if (!sub) {
    alert("Selecciona una subcategoría para eliminar.");
    return;
  }

  
  const confirmacion = confirm(`¿Seguro que deseas eliminar "${sub}" de la categoría "${cat}"? Esta acción no se puede deshacer.`);
  if (!confirmacion) return;

  let datos = JSON.parse(localStorage.getItem("subcategorias")) || {};

  if (datos[cat]) {
    datos[cat] = datos[cat].filter(item => item !== sub);
    if (datos[cat].length === 0) delete datos[cat];
    localStorage.setItem("subcategorias", JSON.stringify(datos));
  }

  alert(`"${sub}" ha sido eliminada permanentemente.`);
  cerrarModalEliminar();
  renderSubcategorias(); 
}

// Cerrar modal de eliminar
function cerrarModalEliminar() {
  document.getElementById("modalEliminar").style.display = "none";
}






>>>>>>> b86bc917c461b946817578f3a65520e9b60a792b
