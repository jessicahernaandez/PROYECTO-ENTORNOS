document.addEventListener('DOMContentLoaded', () => {
  const carritoLista = document.getElementById('carrito-lista');
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Si el carrito está vacío, mostrar un mensaje en el formato original
  if (carrito.length === 0) {
    carritoLista.innerHTML = `
      <div class="carta-platos"><span>El carrito está vacío.</span><span></span></div>
    `;
    return;
  }

  // Generar los elementos del carrito
  let total = 0;
  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    const div = document.createElement('div');
    div.className = 'carta-platos';
    div.innerHTML = `
      <span>${item.nombre}</span>
      <span>$${subtotal.toFixed(2)}</span>
    `;
    carritoLista.appendChild(div);
  });

  // Mostrar el total
  const totalDiv = document.createElement('div');
  totalDiv.className = 'carta-platos';
  totalDiv.innerHTML = `
    <span>Total</span>
    <span>$${total.toFixed(2)}</span>
  `;
  carritoLista.appendChild(totalDiv);
});
