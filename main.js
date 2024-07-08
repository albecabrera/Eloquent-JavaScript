class Player{
  constructor(nombre, colorSombrero){
    this._nombre = nombre;
    this._colorSombrero = colorSombrero;
  }
saltar(){}
correr(){}
saludar(){
  return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
}
get nombre(){
  return this._nombre;
}
set nombre(nuevoNombre){
  this._nombre = nuevoNombre; 
}
}

let player1 = new Player('Pepito', 'azul');
let player2 = new Player('Pepita', 'rojo');

// GET
console.log(player1.nombre);

// SET
player1.nombre = 'ALBERTO';
console.log(player1.nombre);
player2.nombre = 'Christina';
console.log(player2.nombre);