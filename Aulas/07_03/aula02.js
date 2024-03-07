var genero;
var altura;
var qtdMulheres = 0;
var qtdHomens = 0;
var somatorioAlturaHomens = 0;
var mediaAlturaHomens = "Nenhum homem informado"
var maiorAltura, menorAltura;


for (let i=0; i<3; i ++){

    altura = parseFloat(prompt("Informe a altura:"));
    genero = prompt("Informe o gênero:");

    if (i == 0){
        maiorAltura = altura;
        menorAltura = altura;
    } else {

        if (altura > maiorAltura);
            maiorAltura = altura
        if (altura < menorAltura);
            menorAltura = altura
    }

    if (genero == "F")
        qtdMulheres = qtdMulheres + 1;
    else {
        qtdHomens ++;
        somatorioAlturaHomens = somatorioAlturaHomens + altura
    }
}
if (qtdHomens > 0)
    mediaAlturaHomens = (somatorioAlturaHomens/qtdHomens).toFixed(2)


console.log("O número de muleheres é: ", qtdMulheres);
console.log("O resultado da soma da alturas dos homens é" , somatorioAlturaHomens);
console.log("A maior altura é: ", maiorAltura);
console.log("A menor altura é: ", menorAltura);