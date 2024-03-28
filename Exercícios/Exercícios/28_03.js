var aluno_A = {
    nome: "João da Silva", 
    idade: 26,
    filiacao: ["Joao Silva Pai, Maria silva Mae"],
    
    endereco: {
        rua: "Epitácio",
        bairro: "Bairro dos estados",
        cidade:" João Pessoa"},
        estado:"PB",
    
    estaRegular: function() {return true;}
}

var aluno_B ={
    nome: "José Pereira",
    idade: 15,
    filiacao: ["Jose Americo, Josefa Europa" ],

    endereco:{
        rua: "Cristo Redentor",
        bairro:"Valentina",
        cidade:"Cabedelo",
        estado:"PB",
        estaRegular: function() {return true;}
    }
}

dadosCompletos();
function dadosCompletos() { 

    if (this.nome && this.idade && this.filiacao[0] && this.filiacao[1] 
    && this.endereco.rua && this.endereco.cidade && this.endereco.estado) {

        return true; 

    }

    else { 
        return false;
    }
}

imprimirResultados();
function imprimirResultados() { 

    console.log("Imprimindo os resultados");
    console.log();

        console.log("Aluno A: ");
        console.log();
        console.log("Nome: " + aluno_A.nome);
        console.log("Idade: " + aluno_A.idade);
        console.log("Nome do Pai: " + aluno_A.filiacao[0]);
        console.log("Nome da Mãe: " + aluno_A.filiacao[1]);
        console.log(aluno_A.endereco);
        console.log();
        console.log("Os dados estão preenchidos: " + aluno_A.dadosCompletos());

    console.log();

        console.log("Aluno B: ");
        console.log();
        console.log("Nome: " + aluno_B.nome);
        console.log("Idade: " + aluno_B.idade);
        console.log("Nome do Pai: " + aluno_B.filiacao[0]);
        console.log("Nome da Mãe: " + aluno_B.filiacao[1]);
        console.log(aluno_B.endereco);
        console.log();
        console.log("Os dados estão preenchidos: " + aluno_B.dadosCompletos());
}

