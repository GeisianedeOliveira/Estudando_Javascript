var name = prompt("Qual o nome do seu personagem?")
var attack = prompt("Qual o poder de ataque de " + name + " ?")

var nameAdversary = prompt("Qual o nome do seu adversário?")
var healthPoints = prompt("Quantos poderes de vida tem o " + nameAdversary + " ?")
var defensePower = prompt("Qual o poder de defesa de " + nameAdversary + " ?")
var shield = prompt(nameAdversary + " possui escudo? Responda com SIM ou NÃO")

let danoCausado = 0

if (attack > defensePower && shield === "Não", "não", "NÃO"){
    danoCausado = attack - defensePower
} else if (attack > defensePower && shield === "Sim", "SIM", "sim"){
    danoCausado = (attack - defensePower) / 2
}

healthPoints -= danoCausado

alert(name + " causou " + danoCausado + " dano(s) a " + nameAdversary)
alert("Personagem: " +  name + "\n" +
    "Poder de ataque: " + attack);

alert("Personagem: " +  nameAdversary + "\n" +
"Poder de desefa: " + defensePower + "\n" +
"Pontos de vida: " + healthPoints);