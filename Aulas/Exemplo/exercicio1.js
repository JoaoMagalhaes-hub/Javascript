var resposta = prompt("Informe seu nome");

if (resposta == "João"){
    alert("O nome informado, foi: " + resposta); 
    var titulo = document.getElementById("titulo")
    titulo.innerHTML = "Meu nome é João";
} else {
    alert("Você não é João!");
}
