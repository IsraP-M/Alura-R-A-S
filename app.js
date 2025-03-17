// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo === "") {
        alert("Por Favor Escriba Un Nombre Valido");
        return;
    }

    amigos.push(nombreAmigo);

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();


}

function actualizarLista() {
    const listaAmigoUl =document.getElementById("listaAmigos")
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);

    });
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No Hay Amigos Para Sortear. Agrega Nombres Primero.");

        return
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}

document.addEventListener(`DOMContentLoaded`, () => {
        document.getElementById("buttoadd").addEventListener("click", agregarAmigo)
        document.getElementById("buttodraw").addEventListener("click", sortearAmigo);
    });