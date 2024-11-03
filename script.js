const CATALOGO = [
  ,
  {
    producto: "rascador",
    precio: 5000,
  },
  {
    producto: "casa de gato",
    precio: 20000,
  },

  {
    producto: "juguete de gato",
    precio: 1000,
  },
  {
    producto: "comedero de gato",
    precio: 15000,
  },
];

let continuar = true;
let carrito = [];

function comprarProductos() {
  while (continuar) {
    let elegir = Number(
      prompt(
        `Elige un producto: \n1.  ${CATALOGO[1].producto} $${CATALOGO[1].precio} \n2. ${CATALOGO[2].producto} $${CATALOGO[2].precio} \n3.  ${CATALOGO[3].producto} $${CATALOGO[3].precio} \n4. ${CATALOGO[4].producto} $${CATALOGO[3].precio}`
      )
    );
    switch (elegir) {
      case 1:
        carrito.push(CATALOGO[elegir].precio);

        break;
      case 2:
        carrito.push(CATALOGO[elegir].precio);

        break;

      case 3:
        carrito.push(CATALOGO[elegir].precio);

        break;

      case 4:
        carrito.push(CATALOGO[elegir].precio);

        break;

      default:
        alert("Por favor escoge la opcion correcta");

        break;
    }
    continuar = confirm(`Desea agregar otro producto?`);
  }

  let sumaCarrito = carrito.reduce(
    (acumulador, precio) => acumulador + precio,
    0
  );

  alert(`El total de tus productos es de $${sumaCarrito}`);
}

comprarProductos();

/* function tarjetaProductos() {
  CATALOGO.forEach((producto) => {
    const PROD = document.createElement("section");
    PROD.classList.add("tarj-producto");
    PROD.innerHTML = ``;
  });
} */
