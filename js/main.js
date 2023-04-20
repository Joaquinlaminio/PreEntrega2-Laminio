// Obtener los elementos relevantes del DOM
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
const elementoTotal = document.getElementById('total');

// Variable para guardar el total actual
let total = 0;

// Agregar el manejador de evento a cada botón
botonesAgregarCarrito.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Obtener el precio de productos
    const precio = parseInt(boton.dataset.precio);
    
    // Sumar el precio al total
    total += precio;
    
    // Actualizar el elemento HTML con el total
    elementoTotal.textContent = total;
  });
});

