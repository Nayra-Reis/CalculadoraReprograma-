//objetivo descobrir quanto deverei cobrar para esse projeto

//primeiramente pegar os dados do usuario

var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProjeto = document.querySelector("#horas-projeto");

//percorrer o html para buscar o campo de resposta
var valorTotalProjeto = document.querySelector("#resposta");


function calcular(){
    var valorDaHora = inputValorHora.valueAsNumber 
    var horasDoProjeto =  inputHorasProjeto.valueAsNumber

    var totalProjeto =  valorDaHora * horasDoProjeto

    valorTotalProjeto.textContent = "R$" + totalProjeto.toFixed(2)
}