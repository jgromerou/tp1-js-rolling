/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
 Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/

const frase = prompt("ingrese una nueva frase");
frase.toLowerCase();
let vocales = "";
for (let i = 0; i < frase.length; i++) {
  const letra = frase[i];

  switch (letra) {
    case "a":
      vocales += frase.charAt(i);
      break;
    case "e":
      vocales += frase.charAt(i);
      break;
    case "i":
      vocales += frase.charAt(i);
      break;
    case "o":
      vocales += frase.charAt(i);
      break;
    case "u":
      vocales += frase.charAt(i);
      break;
  }
}

document.write(`La frase es: ${frase}`);
document.write(`<p>Sus vocales son: <strong>${vocales}</strong></p>`);
