let listaAmigos = [];
let elementoDaLista = elementoLista(); 
let numeroAleatorioEscolhido = numeroAleatorio();

function adicionarAmigo(){
    let adicionando_amigos = document.querySelector('input').value;
    listaAmigos.push(adicionando_amigos);
    if(adicionando_amigos == ''){
        alert("Inválido! Digite um nome.");
        listaAmigos = listaAmigos.filter(adicionando_amigos => adicionando_amigos.trim() !== "");
    }
    console.log(listaAmigos);
    limparTexto();

}
function exibirMensagens(indiceSorteado){
    let campo = document.getElementById("resultado");
    campo.innerHTML = `O nome sorteado foi ${listaAmigos[indiceSorteado]}`;

}
function numeroAleatorio(){
    let numero = Math.floor(Math.random() * listaAmigos.length);
    return numero;


}

function limparTexto(){
    adicionando_amigos = document.querySelector("input")
    adicionando_amigos.value = "";
}

function elementoLista(){
    for(i=0; i < listaAmigos.length; i++){
        console.log(i);
    }
}

function sortearAmigo(){
    if(listaAmigos.length == 0){
        alert("Impossível fazer o sorteio da lista!\nDigite os nomes dos seus amigos!");
        return;
    }
    let indiceSorteado = numeroAleatorio(); // Agora pegamos o número corretamente
    console.log("Número sorteado:", indiceSorteado);
    console.log("Amigo sorteado:", listaAmigos[indiceSorteado]); // Exibe o nome sorteado
    exibirMensagens(indiceSorteado);
}
