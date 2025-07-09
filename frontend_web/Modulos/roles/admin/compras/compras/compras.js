

document.addEventListener('DOMContentLoaded', () => {
    const listaProductos = document.querySelector('.lista-productos');
    const listaCarrito = document.getElementById('lista-carrito');
    const total = document.getElementById('total');
    const btnVaciar = document.getElementById('vaciar-carrito');
    let carrito = [];

    listaProductos.addEventListener('click', (e) => {
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.closest('.producto');
            agregarProducto(producto);
        }
    });

    btnVaciar.addEventListener('click', () => {
        carrito = [];
        renderCarrito();
    });

    function agregarProducto(producto) {
        const id = producto.getAttribute('data-id');
        const nombre = producto.querySelector('h3').textContent;
        const precio = parseInt(producto.querySelector('p').textContent.replace(/[^\d]/g, ''));
        const existente = carrito.find(item => item.id === id);
        if (existente) {
            existente.cantidad++;
        } else {
            carrito.push({ id, nombre, precio, cantidad: 1 });
        }
        renderCarrito();
    }

    function renderCarrito() {
        listaCarrito.innerHTML = '';
        let totalCompra = 0;
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toLocaleString()}`;
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.onclick = () => {
                eliminarProducto(item.id);
            };
            li.appendChild(btnEliminar);
            listaCarrito.appendChild(li);
            totalCompra += item.precio * item.cantidad;
        });
        total.textContent = `Total: $${totalCompra.toLocaleString()}`;
    }

    function eliminarProducto(id) {
        carrito = carrito.filter(item => item.id !== id);
        renderCarrito();
    }
});
