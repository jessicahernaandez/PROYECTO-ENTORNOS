// vercarrito.js
document.addEventListener("DOMContentLoaded", () => {
  const carritoLista = document.getElementById("carrito-lista");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    carritoLista.innerHTML = `
      <div class="carta-platos"><span>El carrito está vacío.</span><span></span></div>
    `;
    return;
  }

  let total = 0;
  carrito.forEach(item => {
    // Calcular subtotal (precio * cantidad)
    const subtotal = item.precio * (item.cantidad || 1); // Si no hay cantidad, asume 1
    total += subtotal;

    // Manejar personalización
    let personalizacionTexto = '';
    if (item.personalizacion) {
      const opciones = [];
      if (item.personalizacion.quesoExtra) opciones.push('Queso extra');
      if (item.personalizacion.salsaCasera) opciones.push('Salsa casera');
      if (item.personalizacion.quitarCebolla) opciones.push('Sin cebolla');
      if (opciones.length > 0) {
        personalizacionTexto = ` (Personalización: ${opciones.join(', ')})`;
      }
    }

    // Crear el elemento del platillo (tu estilo con createElement)
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carta-platos");

    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = `${item.nombre}${personalizacionTexto}`; // Añadir personalización al nombre

    const precioSpan = document.createElement("span");
    precioSpan.textContent = `$${subtotal.toFixed(2)}`; // Mostrar subtotal (precio * cantidad)

    itemDiv.appendChild(nombreSpan);
    itemDiv.appendChild(precioSpan);

    carritoLista.appendChild(itemDiv);
  });

  // Mostrar total (tu estilo)
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("carta-platos", "total");

  const totalLabel = document.createElement("span");
  totalLabel.textContent = "Total";

  const totalPrecio = document.createElement("span");
  totalPrecio.textContent = `$${total.toFixed(2)}`;

  totalDiv.appendChild(totalLabel);
  totalDiv.appendChild(totalPrecio);
  carritoLista.appendChild(totalDiv);
});