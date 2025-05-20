document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregar = document.querySelectorAll('.boton-agregar');
  const listaPedidos = document.getElementById('lista-pedidos');
  const totalCarrito = document.getElementById('total-carrito');

  // Función para actualizar el listado de pedidos
  function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    listaPedidos.innerHTML = '';

    if (carrito.length === 0) {
      listaPedidos.innerHTML = '<li>El carrito está vacío.</li>';
      totalCarrito.style.display = 'none';
      return;
    }

    let total = 0;
    carrito.forEach(item => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;
      const li = document.createElement('li');
      li.textContent = `${item.nombre} - $${item.precio.toFixed(2)} x ${item.cantidad} = $${subtotal.toFixed(2)}`;
      listaPedidos.appendChild(li);
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
    totalCarrito.style.display = 'block';
  }

  // Cargar carrito inicial
  actualizarCarrito();

  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const carta = e.target.closest('.menu-carta');
      const nombre = carta.dataset.nombre;
      const precio = parseFloat(carta.dataset.precio);

      // Obtener o inicializar el carrito
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

      // Verificar si el item ya está en el carrito
      const itemExistente = carrito.find(item => item.nombre === nombre);
      if (itemExistente) {
        itemExistente.cantidad += 1;
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });
      }

      // Guardar el carrito actualizado
      localStorage.setItem('carrito', JSON.stringify(carrito));

      // Actualizar el listado
      actualizarCarrito();

      // Mostrar confirmación
      alert(`${nombre} ha sido añadido al carrito. Cantidad: ${itemExistente ? itemExistente.cantidad : 1}`);
    });
  });
});
