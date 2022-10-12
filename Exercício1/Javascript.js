var firstName = prompt("Qual o seu primeiro nome?");

var secondName = prompt("Qual o seu sobrenome?");

var fieldOfStudy = prompt("Qual o seu campo de estudo?");

var yearOfBirth = prompt("Qual o seu ano de nascimento?");

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

var age = anoAtual - yearOfBirth;

alert("Nome completo do recruta: " + firstName + " " + secondName + "\n" + "Campo de estudo: " + fieldOfStudy + "\n" + "Idade: " + age + " ano(s)")