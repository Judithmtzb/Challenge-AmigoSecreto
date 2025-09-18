let amigos = [];

// Agregar amigo
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

    // Habilitar botones al tener amigos
    document.getElementById('btn-reiniciar').disabled = false;
    document.getElementById('btn-limpiar').disabled = false;
}

// Actualizar lista de amigos
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

// Limpiar solo el input
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Limpiar input y lista de amigos
function limpiarTodo() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    limpiarCaja();
    document.getElementById('resultado').innerHTML = '';

    // Deshabilitar botones porque ya no hay nombres
    document.getElementById('btn-reiniciar').disabled = true;
    document.getElementById('btn-limpiar').disabled = true;
}

// Sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para el sorteo');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML =
        `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

// Reiniciar juego completo
function reiniciarJuego() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    alert('Juego reiniciado. Puedes agregar nuevos amigos');

    // Deshabilitar botones
    document.getElementById('btn-reiniciar').disabled = true;
    document.getElementById('btn-limpiar').disabled = true;
}

