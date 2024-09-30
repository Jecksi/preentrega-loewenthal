console.log("Mixis starto!");

let rascador = 1000;
let casaDeGato = 500;
let jugueteDeGato = 2000;
let comederoDeGato = 1223123;

let totalDeCompra = 0;

function agregarProductos(producto) {
  if (producto === "1") {
    alert("Se ha agregado el rascador a tu carrito de compra");
    totalDeCompra += rascador;
  } else if (producto === "2") {
    alert("Se ha agregado la casa de gato a tu carrito de compra");
    totalDeCompra += casaDeGato;
  } else if (producto === "3") {
    alert("Se ha agregado el juguete de gato a tu carrito de compra");
    totalDeCompra += jugueteDeGato;
  } else if (producto === "4") {
    alert("Se ha agregado el comedor de gato a tu carrito de compra");
    totalDeCompra += comederoDeGato;
  } else {
    alert("Por favor seleccione una opcion valida");
  }
}

let continuar = true;
while (continuar) {
  let seleccion = prompt(
    "Selecciona un producto: \n1. rascador \n2. casa de gato \n3. juguete de gato \n4. comedero de gato"
  );
  agregarProductos(seleccion);
  continuar = confirm("Quieres continuar?");
  console.log(seleccion);
}
console.log(alert("El total de tu compra es " + totalDeCompra));
