let rascador = 5000;
let casaDeGato = 20000;
let jugueteDeGato = 2000;
let comederoDeGato = 10000;

let totalDeCompra = 0;

console.log(
  "1.- Rascador: " + rascador + "\n",
  "2.- Casa de Gato " + casaDeGato + "\n",
  "3.- Juguete de Gato " + jugueteDeGato + "\n",
  "4.- Comedero de Gato " + comederoDeGato + "\n"
);

function agregarProductos(producto) {
  if (producto === "1") {
    alert("Se ha agregado el rascador a tu carrito de compra");
    totalDeCompra += rascador;
    // totalDeCompra = 5000
  } else if (producto === "2") {
    alert("Se ha agregado la casa de gato a tu carrito de compra");
    totalDeCompra += casaDeGato;
    // Total de compra ya pasa a ser 5000
    // si el cliente compra la casa de gato se suma la variable de casa de gato al Total de compra
    // pasaria a ser 25000
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
}
alert("El total de tu compra es " + totalDeCompra);
console.log("El total de tu compra es " + totalDeCompra);
