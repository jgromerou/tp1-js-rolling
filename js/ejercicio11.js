/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
*/

let num = parseInt(prompt("Ingrese un número para ver si es divisible:"));
let divisible = "";

if (num % 2 === 0) {
  divisible += "2" + " ";
}
if (num % 3 === 0) {
  divisible += "3" + " ";
}
if (num % 5 === 0) {
  divisible += "5" + " ";
}
if (num % 7 === 0) {
  divisible += "7" + " ";
}

if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
  document.write(
    `El número ${num} no es divisible por ninguno de los anteriores`
  );
} else {
  document.write(`El número ${num} es divisible por: ${divisible}`);
}
