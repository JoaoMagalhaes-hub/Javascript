var nome = "João"; // Scope Global
nome = "Pedro";

function mudarNome() { 
    
    var notaAluno = 10; // Scope local
    nome = "Maria";

    if (notaAluno == 30) {
        let resultado = "Aprovado"; // Scope de bloco 
        resultado = "Aprovado novamente"
    }
}

console.log(notaAluno); 