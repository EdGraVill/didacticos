// Comentario de una sola linea
/*
  Comentario de multiples lineas 
  Aqui hay otra línea
*/

// Declaración de variables (legacy)
var nombre = "Juan";
var edad = 30;
var diHola = function diHola() {
  console.log('Hola, ', nombre);
  return nombre;
}

console.log(nombre);
console.log(edad);
console.log(diHola);

// Con var yo puedo redeclarar la variable
nombre = "Pedro";
console.log(nombre);

// Declaración de variables (modern)
let añoDeNacimiento = 1990;
console.log(typeof(añoDeNacimiento), ': ', añoDeNacimiento);

añoDeNacimiento = "1990";
console.log(typeof(añoDeNacimiento), ': ', añoDeNacimiento);

const apellido = "Perez";
console.log(typeof(apellido), ': ', apellido);

try {
  apellido = "Gomez";
  console.log(typeof(apellido), ': ', apellido);
} catch (error) {
  console.log('Error: ', error);
}
