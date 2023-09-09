import { prompt } from "./helper.js";

export async function calculator() {
  console.log("ADDITION-MASTER ™️");
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

  switch (operator) {
    case 1:
      const additionResult = firstNumber + secondNumber;
      console.log("The result of addition is : ", additionResult);
      return additionResult;
    case 2:
      const subtractionResult = firstNumber - secondNumber;
      console.log("The result of subtraction is : ", subtractionResult);
      return subtractionResult;
    case 3:
      const divisionResult = firstNumber / secondNumber;
      console.log("The result of division is : ", divisionResult);
      return divisionResult;
    case 4:
      const multiplicationResult = firstNumber * secondNumber;
      console.log("The result of multiplication is : ", multiplicationResult);
      return multiplicationResult;
  }
}
