// FUNCIÓN CLÁSICA

function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Alberto"));

// FUNCIÓN FLECHA

let saludo2 = nombre => 'Saludos ' + nombre;

console.log(saludo2('Alberto'));

// OBJETO DATE
let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear());
console.log(fechaActual.getDay());


