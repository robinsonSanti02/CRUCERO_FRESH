let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio) {
    carrito.push({
        nombre: nombre,
        precio: precio
    });

    total = total + precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const contenedor = document.getElementById("items-carrito");
    const totalTexto = document.getElementById("total");

    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = `<p class="vacio">Tu carrito está vacío.</p>`;
    } else {
        carrito.forEach((producto, index) => {
            contenedor.innerHTML += `
                <div class="carrito-item">
                    <span>${producto.nombre}</span>
                    <b>S/${producto.precio}</b>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">X</button>
                </div>
            `;
        });
    }

    totalTexto.innerText = total;
}

function eliminarDelCarrito(index) {
    total = total - carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("Agrega al menos un plato al carrito.");
        return;
    }

    let mensaje = "Hola, quiero hacer este pedido:%0A%0A";

    carrito.forEach(producto => {
        mensaje += `- ${producto.nombre} - S/${producto.precio}%0A`;
    });

    mensaje += `%0ATotal: S/${total}`;

    const numero = "51923929202";

    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
}
