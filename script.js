const CATALOGO = [
  { producto: "Rascador de Gato", precio: 5000 },
  { producto: "Casa de Gato", precio: 20000 },
  { producto: "Juguete de Gato", precio: 1000 },
  { producto: "Comedero de Gato", precio: 15000 },
];

let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(CATALOGO[producto].precio);
  actualizarCarrito();
  guardarCarrito();
}

function actualizarCarrito() {
  const total = carrito.reduce((acumulador, precio) => acumulador + precio, 0);
  document
    .getElementById("carrito")
    .setAttribute("title", `El total de tu compra es: $${total}`);
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
  if (carritoGuardado) {
    carrito = carritoGuardado;
    actualizarCarrito();
  }
}

function asignarEventos() {
  const botones = document.querySelectorAll(".articulos button");
  botones.forEach((boton, producto) => {
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto),
        Toastify({
          text: "Agregaste un producto al carrito",
          duration: "1000",
          position: "right",
          graviti: "top",
          style: {
            background: "rgba(109, 60, 60, 0.93)",
            fontSize: "13px",
            borderRadius: "10px",
            boxShadow:
              "0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)",
          },
        }).showToast();
    });
  });
}

cargarCarrito();
asignarEventos();

const productos = "./productos.json";

fetch(productos)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    CATALOGO = data;
    renderProductos();
  })
  .catch((error) => console.error("Error al cargar los productos:", error));

function mostrarProductos(productosArray) {
  const container = document.getElementById("producto-container");

  productosArray.forEach((data) => {
    const card = document.createElement("div");
    const name = document.createElement("h3");
    name.textContent = data.name.producto(0);
  });
}
