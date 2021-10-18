//Declaração de variáveis
let order = [];
let clickedOrder = [];
let score = 0;

const azul = document.querySelector('.azul');
const vermelha = document.querySelector('.vermelha');
const amarela = document.querySelector('.amarela');
const verde = document.querySelector('.verde');

// Função que sorteia número

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

// Função que faz as luzes acenderem e apagarem
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
      element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
}

// Variável que compara a ordem das cores e valida

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }

if (clickedOrder.length == order.length) {
      alert(`Pontuação: ${score}\nVocê acertou!! Iniciando próxima rodada...`);
    nextLevel();
  }
}

// Função para o clique do usuário

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

        setTimeout(() => {
          createColorElement(color).classList.remove('selected');
          checkOrder();
        }, 250);
}

// Função que retorna uma cor
// 0 = verde | 1 = vermelho | 2 = amarelo | 3 = azul

let createColorElement = (color) => {
  if (color == 0) {
    return verde;
  } else if (color == 1){
    return vermelha;
  } else if (color == 2) {
    return amarela;
  } else if (color == 3) {
    return azul;
  }
}

// Função para os próximos níveis do jogo

let nextLevel = () => {
  score++;
    shuffleOrder();
}

// Função para o game over

let gameOver = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo.\nClique em OK para iniciar uma nova partida!`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Função para iniciar o Jogo

let playGame = () => {
  alert('Bem-vindo! Iniciando partida...');
  score = 0;

  nextLevel();
}

verde.onclick = () => click(0);
vermelha.onclick = () => click(1);
amarela.onclick = () => click(2);
azul.onclick = () => click(3);

playGame();
