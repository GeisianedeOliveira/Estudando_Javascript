var valorEmMetros = prompt ("Qual valor em metros você quer converter?")
var unidadeDeMedida = prompt (
    "Para qual unidade de medida você gostaria de converter os " + valorEmMetros + " metros?" + "\n\n" +
    "a) milímetro (mm)\n"
    + "b) centímetro (cm)\n"
    + "c) decímetro (dm)\n"
    + "d) decâmetro (dam)\n"
    + "e) hectômetro (hm)\n"
    + "f) quilômetro (km)\n"
);

switch (unidadeDeMedida){
    case "a":
        alert("Resultadao da conversão: " + valorEmMetros * 1000 + " mm")
    break
    case "b":
        alert("Resultadao da conversão: " + valorEmMetros / 100 + " cm")
    break
    case "c":
        alert("Resultadao da conversão: " + valorEmMetros / 10 + " dm")
    break
    case "d":
        alert("Resultadao da conversão: " + valorEmMetros / 10 + " dam")
    break
    case "e":
        alert("Resultadao da conversão: " + valorEmMetros / 100 + " hm")
    break
    case "f":
        alert("Resultadao da conversão: " + valorEmMetros / 1000 + " km")
    break
    default:
        alert("Opção não encontrada, tente novamente!")
}