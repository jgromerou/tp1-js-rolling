/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
*/

let num = parseInt(prompt("Ingrese el número:"));
if (num % 2 === 0) {
  document.write(`El número <strong>${num}</strong> es divisible por 2`);
} else {
  document.write(`El número <strong>${num}</strong> no es divisible por 2`);
}
