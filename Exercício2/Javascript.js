var number1 = prompt ("Qual o primeiro número?");
console.log(number1);

var number2 = prompt ("Qual o primeiro número?");
console.log(number2);

var sum = parseFloat(number1)  + parseFloat(number2);

var subtraction = number1 - number2;

var multiplication = number1 * number2;

var division = number1 / number2;

alert(
    "Soma entre os dois números: " + sum + "\n" +
    "Substração entre os dois números: " + subtraction + "\n" +
    "Multiplicação entre os dois números: " + multiplication + "\n" +
    "Divisão entre os dois números: " + division + "\n"
);