function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmar = confirm(`Você realmente deseja devolver o jogo ${nomeJogo.textContent}?`);
        if (confirmar) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
    contarJogosAlugados(); // Chama a função contarJogosAlugados sempre que o status é alterado
}

function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Exemplo de chamada da função contarJogosAlugados:
contarJogosAlugados();