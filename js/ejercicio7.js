/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres*/

let num1 = parseInt(prompt("Ingrese el número 1:"));
let num2 = parseInt(prompt("Ingrese el número 2:"));
let num3 = parseInt(prompt("Ingrese el número 3:"));

if (num1 >= num2 && num1 >= num3) {
  document.write("El mayor es el primer número ingresado que es: " + num1);
} else if (num2 >= num3 && num2 >= num1) {
  document.write("El mayor es el segundo número ingresado que es: " + num2);
} else {
  document.write("El mayor es el tercer número ingresado que es: " + num3);
}

//Prioridad: es el primer número ingresado, luego el segundoy por último el tercero.
