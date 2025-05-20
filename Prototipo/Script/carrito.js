document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregar = document.querySelectorAll('.boton-agregar');

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

      // Mostrar confirmación
      alert(`${nombre} ha sido añadido al carrito. Cantidad: ${itemExistente ? itemExistente.cantidad : 1}`);
    });
  });
});
