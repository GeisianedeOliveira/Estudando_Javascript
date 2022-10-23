var name = prompt("Olá, visitante, qual o seu nome?")
var cities = ""
var howMany = 0
let visit = prompt(
    name + " você já visitou alguma das nossas cidades?\n\n"
    + "Responda SIM ou NÃO"
    ) 

while (visit === "SIM"){
    var city = prompt("Qual o nome da cidade que você visitou?")
    cities += " - " + city + "\n"
    howMany++
    visit = prompt("Você visitou mais alguma cidade? Responda SIM ou NÃO")
}

alert(
    "Nome do turista: " + name + "\n" +
    "Cidade visitas: \n" + cities + "\n" +
    "Quantidade de cidades visitadas: " + howMany
)
