// 🦁 Importe cette fonction
import { prompt } from "./helper.js";

// 🦁 Affiche le message "ADDITION-MASTER ™️" dans la console
let firstNumber = Number(await prompt("Enter the first number : "));

if (Number.isNaN(firstNumber)) {
  console.log("The first number is not a number");
  process.exit(1);
}

let secondNumber = Number(await prompt("Enter the second number : "));

if (secondNumber === 0 || Number.isNaN(secondNumber)) {
  console.log("The second number can't be 0 or it is not a number");
  process.exit(1);
}

console.log("The sum is : ", firstNumber / secondNumber);

console.log("ADDITION-MASTER ™️");

// 🦁 Utilise la fonction "prompt" pour demander le premier nombre à l'utilisateur
// 🦁 Stocke le résultat dans une variable "firstNumber" et utilise `Number()` pour convertir la valeur en nombre
// 💡 await prompt('Enter your name: ') permet de récupérer la valeur saisie par l'utilisateur

// 🦁 Fais la même chose pour la variable "secondNumber"

// 🦁 Affiche l'addition des deux nombres
