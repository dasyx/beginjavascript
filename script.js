import { prompt } from "./helper.js";

console.log("ADDITION-MASTER ™️");

// 🦁 Affiche une log en utilisant les template string pour expliquer que l'utilisateur doit choisir entre
// 1. Addition
// 2. Soustraction

// 🦁 Demande avec `await prompt` la réponse de l'utilisateur. (dans une variable `operator`)

// 🦁 Si la réponse n'est pas égale à 1 ou 2, affiche une log d'erreur et quitte le programme avec `process.exit(1)`
// 💡 Pour ça, on va utiliser deux conditions dans notre if
// 📖 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
// 💡 if (condition1 && condition2)
// 💡 On vérifie que la condition1 est vraie mais AUSSI la condition2 !

console.log("Choose an operator : ");
console.log("1. Addition");
console.log("2. Soustraction");
console.log("3. Division");
console.log("4. Multiplication");

const operator = Number(await prompt("Enter your choice : "));

if (operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4) {
  console.log("Error : operator is not 1, 2, 3 or 4");
  process.exit(1);
}

const firstNumber = Number(await prompt("Enter the first number : "));

if (Number.isNaN(firstNumber)) {
  console.log("Error : firstNumber is not a number");
  process.exit(1);
} else if (firstNumber >= 100000000000000) {
  console.log("Error : firstNumber is too big");
  process.exit(1);
}

const secondNumber = Number(await prompt("Enter the second number : "));

if (Number.isNaN(secondNumber)) {
  console.log("Error : secondNumber is not a number");
  process.exit(1);
} else if (operator === 3 && secondNumber === 0) {
  console.log("Error : division by 0 is not possible");
  process.exit(1);
} else if (secondNumber >= 100000000000000) {
  console.log("Error : secondNumber is too big");
  process.exit(1);
}

// 🦁 Utilise switch pour gérer les différents cas
// 📖 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
switch (operator) {
  case 1:
    console.log("The result of addition is : ", firstNumber + secondNumber);
    break;
  case 2:
    console.log("The result of substraction is : ", firstNumber - secondNumber);
    break;
  case 3:
    console.log("The result of division is : ", firstNumber / secondNumber);
    break;
  case 4:
    console.log(
      "The result of multiplication is : ",
      firstNumber * secondNumber
    );
}
