//pegar os dados inseridos pelo usuario
var inputHorasPorDia = document.querySelector("#horas-dia");
var inputGanhoPorMes = document.querySelector("#ganho-mes");

var spanHoraFinal = document.querySelector(".secao__rodape .secao__rodape__valor span");


function calcularValorHora() {
    // teste para verificar funcionabilidade da função: console.log("Hello World ♥♥♥");

    //fazer o que esta aqui dentro
    console.log("Hello World ♥♥");
    console.log("Input de ganho por mês:", inputGanhoPorMes.value);
    console.log("Input de horas por dia:", inputHorasPorDia.value)

    //fazer calculo dos dados inseridos pela usuaria
        //quanto vale a hora?


        //multiplicar as horas diarias por dias trabalhados

    var qtdTotalHoras = inputHorasPorDia.valueAsNumber * 22;
    console.log("Total de Horas:", qtdTotalHoras);


    //com o valor total das horas, fazer a divisão pelo valor mensal
    var valorHora = (inputGanhoPorMes.valueAsNumber / qtdTotalHoras).toFixed(2);
    console.log("Valor da Hora:", valorHora);

    spanHoraFinal.textContent = "R$" + valorHora
    
};



