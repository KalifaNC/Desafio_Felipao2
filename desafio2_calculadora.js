let nome_h = " ";
let xp = 15000;
nome_h = prompt("Qual o seu nome de herói?");
if(nome_h == " ") {
    (nome_h = "Desconhecido")
} else {(nome_h=nome_h)}
        console.log(`O herói de nome ${ nome_h} está no nível ${xp}`);
switch (xp > 0) {
    case (xp<1000):
      console.log("Ferro");
      break;
    case (xp>=1000 && xp<2000):
      console.log("Bronze");
      break;
    case (xp>=2001 && xp<5000):
      console.log("Prata");
      break;
    case (xp>=5001 && xp<6000):
      console.log("Ouro");
      break;    
    case (xp>=6001 && xp<7000):
      console.log("Platina");
      break;
    case (xp>=7001 && xp<8000):
      console.log("Diamante");
      break;
    case (xp>=8001 && xp<9000):
      console.log("Ascendente");
      break;
    case (xp>=9001 && xp<10000):
      console.log("Imortal");
      break;
    case (xp>=10001):
      console.log("Radiante");
      break;
    
default:
    console.log ("O herói de nome " + nome_h + "está no nível " + xp);
    break;
}


// Definindo as variáveis
let vitorias = 200;
let derrotas = 0;
let saldoDeRanking = vitorias - derrotas
// Função para calcular o total de partidas jogadas
function calcularTotalPartidas() {
  return vitorias + derrotas;
}

// Função para calcular a porcentagem de vitórias
function calcularPorcentagemVitorias() {
  const totalPartidas = calcularTotalPartidas();
  return (vitorias / totalPartidas) * 100;
}

// Função para calcular a pontuação média por partida
function calcularPontuacaoMedia() {
  const totalPartidas = calcularTotalPartidas();
  const totalPontos = vitorias * 3;
  return totalPontos / totalPartidas;
}

// Função para calcular o saldo de rankeadas
function saldoDeRankeadas() {
saldoDeRanking = vitorias - derrotas;
return saldoDeRankeadas;

}

if(saldoDeRanking <=0) {
    console.log("O herói de nome " + nome_h + " está no nível de ranking Ferro " + saldoDeRanking);  
} else {(saldoDeRanking>=0)}        
    console.log("O herói de nome " + nome_h + "está no nível " + saldoDeRanking);
    switch (saldoDeRanking>0) {
    case (saldoDeRanking <=10):
    console.log("Ferro");
    break;
    case (saldoDeRanking >=11 && saldoDeRankeadas <=20):
    console.log("Bronze");
    break;
    case (saldoDeRanking >=21 && saldoDeRankeadas <=50):
    console.log("Prata");
    break;
    case (saldoDeRanking >=51 && saldoDeRankeadas <=80):
    console.log("Ouro");
    break;    
    case (saldoDeRanking >=81 && saldoDeRankeadas <=90):
    console.log("Diamante");
    break;
    case (saldoDeRanking >=91 && saldoDeRankeadas <=100):
    console.log("Lendário");
    break;
    case (saldoDeRanking >=101):
    console.log("Imortal");
    break;
        
default:
    console.log ("O herói de nome " + nome_h + "está no nível de ranking " + saldoDeRanking);
    break;
}

// Função para exibir os resultados
function exibirResultados() {
  const totalPartidas = calcularTotalPartidas();
  const porcentagemVitorias = calcularPorcentagemVitorias();
  const pontuacaoMedia = calcularPontuacaoMedia();
  const saldoDeRankeadas = saldoDeRanking();

  console.log("Resultados da Calculadora de Partidas Ranqueadas:");
  console.log("Total de partidas jogadas: " + totalPartidas);
  console.log("Porcentagem de vitórias: " + porcentagemVitorias.toFixed(2) + "%");
  console.log("Pontuação média por partida: " + pontuacaoMedia.toFixed(2));
  console.log("Saldo de Ranking: " + saldoDeRankeadas.toFixed(2)); 
  console.log("--------------------------------------------------");

  // Chamando a função para exibir os resultados
exibirResultados();

}

