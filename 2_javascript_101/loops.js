const nombre = 'Eduardo Grajales Villanueva';
let index = 0;

// While: Primer forma de hacer un loop, pero no es la más común, porque no es tan legible, y no es tan fácil de entender.

while (index < nombre.length) {
  console.log(nombre[index]);
  index += 1;
}

// For: Segunda forma de hacer un loop, es la más común, porque es más legible, y es más fácil de entender.

for (let index = 0; index < nombre.length; index += 1) {
  console.log(nombre[index]);
}

// Request animation frame: Tercera forma de hacer un loop, es la más moderna, y es la más recomendada, porque es la más eficiente. Sólo funciona en el navegador.

let animationId;

const saySafelyMyName = () => {
  console.count('Eduardo Grajales');
  animationId = requestAnimationFrame(saySafelyMyName);
}

saySafelyMyName();

setTimeout(() => {
  cancelAnimationFrame(animationId);
}, 10_000);
