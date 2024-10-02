let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if (nomeAmigo == '') {
        alert('Coloque um nome válido!');
        return;
    } else if (listaAmigos.includes(nomeAmigo.toUpperCase())) {
        alert('Nome repetido, coloque um outro nome!');
        return;
    }

    listaAmigos.push(nomeAmigo.toUpperCase());
    document.getElementById('lista-amigos').textContent = listaAmigos.join(', ');

    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (listaAmigos.length < 3) {
        alert('Adicione pelo menos 3 pessoas para realizar o sorteio!');
        return;
    }
    embaralha(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < listaAmigos.length; i++) {
        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML += `${listaAmigos[i]} --> ${listaAmigos[0]}<br>`;
        } else {
            sorteio.innerHTML += `${listaAmigos[i]} --> ${listaAmigos[i + 1]}<br>`;
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice -1 ]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}