// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Agrega un nuevo amigo a la lista
function agregarAmigo() {
    let valorInput = document.getElementById('amigo').value.trim();

    if (valorInput === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    amigos.push(valorInput);
    console.log(amigos);

    actualizarLista();
    limpiarCaja();

    // Habilita el botón de reinicio si hay al menos un amigo
    document.getElementById('btn-reiniciar').disabled = false;
}

// Actualiza la lista visual de amigos en el DOM
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

// Limpia el campo de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Sortea un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para el sorteo');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    console.log('Índice aleatorio generado:', indiceAleatorio);

    let amigoSorteado = amigos[indiceAleatorio];
    console.log("Amigo sorteado:", amigoSorteado);

    document.getElementById('resultado').innerHTML = 
        `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

// Reinicia el juego
function reiniciarJuego() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    alert('Juego reiniciado. Puedes agregar nuevos amigos');

    // Deshabilita el botón hasta que se agregue un nuevo amigo
    document.getElementById('btn-reiniciar').disabled = true;
}
