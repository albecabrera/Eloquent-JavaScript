// console.log(suma(10, 5));

// function suma (a, b){
//   return a + b
// }

// ATRIBUTOS Y MÉTODOS ESTÁTICOS
class Mascota{
  static cola = 'larga';
  pelaje = 'lacio';
  constructor(nombre, edad){
    this._nombre = nombre;
    this.edad = edad;
    this._numero = ++Mascota.contadorMascota;
  }
  get numeroCreacion(){
    return this._numero;
  }
  }

Let mascota1 = new Mascota('Boby', 5);
Let mascota2 = new Mascota('Max', 4);
Let mascota3 = new Mascota('Rex', 1);

console.log(Mascota.cola);
console.log(mascota1.pelaje);

console.log(mascota1.numeroCreacion);
console.log(mascota2.numeroCreacion);
console.log(mascota3.numeroCreacion);
