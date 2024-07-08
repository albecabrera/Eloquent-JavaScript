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
set cambiarNombre(nuevoNombre){
  this._nombre = nuevoNombre; 
}
}

let player1 = new Player('Pepito', 'azul');
let player2 = new Player('Pepita', 'rojo');

// GET
console.log(player1.nombre);

// SET
player1.cambiarNombre = 'ALBERTO';
console.log(player1.nombre);
player2.nombre = 'Christina';
console.log(player2.nombre);

class Pet extends Player{
  constructor(nombre, colorSombrero, colorPiel){
    super(nombre, colorSombrero);
    this._colorPiel = colorPiel;
  } 
  get colorPiel(){
    return this._colorPiel;
  }
  set colorPiel(nuevoColorPiel){
this.colorPiel = nuevoColorPiel;
  }
  comer(){
    return 'yo como manzanas';
}
saludar(){
  return super.saludar() + ' además soy una mascota';
}

let pet1 = new Pet('Yoshi', 'invisible', 'verde');
console.log(pet1);

console.log(pet1._nombre);
pet1.cambiarNombre = 'Rufus';
console.log(pet1.nombre);

// GET
console.log(pet1.colorPiel);
// SET
pet1.colorPiel = 'marron';
console.log(pet1.colorPiel);

console.log(pet1.comer());
console.log(pet1.saludar());
