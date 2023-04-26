function calculator(numberOne, numberTwo, op) {
  numberOne = Number(numberOne);
  numberTwo = Number(numberTwo);
  switch(op){
    case('+'):
      return numberOne + numberTwo
    case('-'):
      return numberOne - numberTwo
    case('*'):
      return numberOne * numberTwo
    case('/'):
      return numberOne / numberTwo
    case('%'):
      return numberOne % numberTwo
  }
};

function isEven(numberOne, numberTwo){
  let sum = Number(numberOne) + Number(numberTwo);
  return sum % 2 == 0 ? true : false;
}

function isEqual(numberOne, numberTwo){
  return numberOne == numberTwo;
}

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
alert(`The sum of the two numbers is ${calculator(numberOne, numberTwo, '+')}`);
alert(`The subtraction of the two numbers is ${calculator(numberOne, numberTwo, '-')}`);
alert(`The multiplication of the two numbers is ${calculator(numberOne, numberTwo, '*')}`)
alert(`The division of the two numbers is ${calculator(numberOne, numberTwo, '/')}`)
alert(`The remainder of the division of the two numbers is ${calculator(numberOne, numberTwo, '%')}`)
alert(`The sum of the two numbers is ${ isEven(numberOne, numberTwo) ? 'even' : 'odd'}`)
alert(`${isEqual(numberOne, numberTwo) ? 'The numbers are the same' : 'The numbers are different'}`)