// vercarrito.js
document.addEventListener("DOMContentLoaded", () => {
  const carritoLista = document.getElementById("carrito-lista");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    carritoLista.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  let total = 0;
  carrito.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carta-platos");

    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = item.nombre;

    const precioSpan = document.createElement("span");
    precioSpan.textContent = `$${item.precio.toFixed(2)}`;

    itemDiv.appendChild(nombreSpan);
    itemDiv.appendChild(precioSpan);

    carritoLista.appendChild(itemDiv);

    total += item.precio;
  });

  // Mostrar total
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
