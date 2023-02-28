/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/

let num1 = parseInt(prompt("Ingrese el número 1:"));
let num2 = parseInt(prompt("Ingrese el número 2:"));

if (num1 !== num2) {
  if (num1 > num2) {
    document.write("El mayor es el número 1: " + num1);
  } else {
    document.write("El mayor es el número 2: " + num2);
  }
} else {
  document.write("Los números son iguales");
}
