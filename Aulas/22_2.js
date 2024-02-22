var nome = "João";

if (nome == "João"){
    console.log("Esse é João.");
} else if (nome == Pedro){
    console.log("Você não é João, mas é Pedro");
} else {
    console.log("Você não é João");
}

// Switch 

switch("Valor a ser testado"){
    case "valor 1":
        //Instruções a serem executadas
        break;
    case "valor 2":
        //Instruções a serem executadas
        break;
    default:
        console.log(" É isso pessoal")
        break;
}

// For

for (var i=0; i<= 10; i++){
    console.log("Número", i);
}
