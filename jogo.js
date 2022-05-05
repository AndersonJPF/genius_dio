let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


// cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

// acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout( () => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// checa se os botoes clicados sao da mesma ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuacao: ${score}\nVoce Acertou! Iniciando proximo nivel!`);
        nextLevel();
    }
}

// funcao para clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// funcao que passa para o proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// funcao para fim do jogo
let gameOver = () => {
    alert(`Pontuacao: ${score}!\nVoce perdeu o Jogo!\nClique em OK para iniciar um novo Jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('bem-vindo ao Genesis! Iniciando novo jogo');
    score = 0;

    nextLevel();

}

green.onclick = () => click(0);
red.onclick = () => click(1);
blue.onclick = () => click(3);
yellow.onclick = () => click(2);

playGame();