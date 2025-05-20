document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregar = document.querySelectorAll('.boton-agregar');
  const botonesPersonalizar = document.querySelectorAll('.boton-personalizar');

  // Mostrar u ocultar las opciones de personalización
  botonesPersonalizar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      const carta = boton.closest('.menu-carta');
      const opciones = carta.querySelector('.opciones-personalizacion');
      opciones.style.display = opciones.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Guardar personalización y agregar al carrito
  document.querySelectorAll('.boton-guardar-personalizacion').forEach(boton => {
    boton.addEventListener('click', (e) => {
      const carta = boton.closest('.menu-carta');
      const nombre = carta.dataset.nombre;
      const precioBase = parseFloat(carta.dataset.precio);
      const opciones = carta.querySelector('.opciones-personalizacion');
      const checks = opciones.querySelectorAll('input[type="checkbox"]');
      let precioExtra = 0;
      const personalizacion = {};

      checks.forEach(check => {
        if (check.checked) {
          if (check.name === 'queso-extra') {
            precioExtra += 1.00;
            personalizacion.quesoExtra = true;
          } else if (check.name === 'salsa-casera') {
            precioExtra += 0.50;
            personalizacion.salsaCasera = true;
          } else if (check.name === 'quitar-cebolla') {
            personalizacion.quitarCebolla = true;
          }
        }
      });

      const precioTotal = precioBase + precioExtra;

      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      const itemExistente = carrito.find(item => item.nombre === nombre);
      if (itemExistente) {
        itemExistente.cantidad += 1;
        itemExistente.precio = precioTotal; // Actualizar precio con personalización
        itemExistente.personalizacion = personalizacion;
      } else {
        carrito.push({ nombre, precio: precioTotal, cantidad: 1, personalizacion });
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      opciones.style.display = 'none';
      alert(`${nombre} ha sido añadido al carrito con personalización. Cantidad: ${itemExistente ? itemExistente.cantidad : 1}, Precio: $${precioTotal.toFixed(2)}`);
    });
  });

  // Agregar al carrito sin personalizar (tu código integrado)
  botonesAgregar.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.menu-carta');
      const nombre = card.dataset.nombre;
      const precio = parseFloat(card.dataset.precio);

      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      const itemExistente = carrito.find(item => item.nombre === nombre);
      if (itemExistente) {
        itemExistente.cantidad += 1;
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      alert(`${nombre} agregado al carrito. Cantidad: ${itemExistente ? itemExistente.cantidad : 1}`);
    });
  });
});