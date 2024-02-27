// Variáveis
let nomeHeroi = "Super Herói";
let xpHeroi = 1500; // Exemplo de quantidade de experiência

// Estrutura de decisão
let mensagem;

if (xpHeroi < 1000) {
    mensagem = `${nomeHeroi} é um novato com ${xpHeroi} pontos de XP.`;
} else if (xpHeroi >= 1000 && xpHeroi < 5000) {
    mensagem = `${nomeHeroi} é um herói experiente com ${xpHeroi} pontos de XP.`;
} else {
    mensagem = `${nomeHeroi} é um herói lendário com ${xpHeroi} pontos de XP.`;
}

// Apresentar mensagem
console.log(mensagem);
