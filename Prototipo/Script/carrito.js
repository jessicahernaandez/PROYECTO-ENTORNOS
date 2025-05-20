document.querySelectorAll('.boton-agregar').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.menu-carta');
    const nombre = card.dataset.nombre;
    const precio = parseFloat(card.dataset.precio);

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre, precio });
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`${nombre} agregado al carrito`);
  });
});

