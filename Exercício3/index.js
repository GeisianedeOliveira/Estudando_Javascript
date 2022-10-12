var nameVehicle1 = prompt ("Qual o nome do primeiro veículo 1?")
var velocityVehicle1 = prompt ("Qual a velocidade do veículo 1?")

var nameVehicle2 = prompt ("Qual o nome do primeiro veículo 2?")
var velocityVehicle2 = prompt ("Qual a velocidade do veículo 2?")

if ( velocityVehicle1 > velocityVehicle2){
    alert("O veículo " + nameVehicle1 + " está em maior velocidade!")
} else if (velocityVehicle2 > velocityVehicle1){
    alert("O veículo " + nameVehicle2 + " está em maior velocidade!")
} else{
    alert("Os veículo " + nameVehicle1 + " e " + nameVehicle2 + " estão na mesma velocidade!")
}