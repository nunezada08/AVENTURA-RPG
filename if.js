// Dados iniciais do personagem
let nome = "Ayla";
let vida = 60;
let energia = 40;
let xp = 800;
let ouro = 200;
let nivel = 3;
let armadura = 300;

//parte 1 - Estado de saude

if (vida >= 80) {
  console.log(`${nome} está bem para continuar a viagem!`);
} else if (vida >= 40) {
  console.log(`${nome} está ferida, mas pode continuar!`);
} else {
  console.log(`${nome} deverá dormir, ela precisa descansar!`);
}

// parte 2 - Missao

if (vida >= 50 && energia >= 50) {
  console.log(`${nome} entra em batalha com confiança!`);
} else {
  console.log(`${nome} precisa descansar antes de continuar`);
}

// parte 3 - Nivel

if (xp >= 1000) {
  nivel++;
  console.log(`${nome} subiu para o nivel ${nivel}`);
  xp = 0;
} else {
  console.log(`${nome} deve continuar lutando para subir de nivel`);
}

// parte 4 - Compra

if (ouro >= armadura) {
  console.log(`${nome} consegue comprar a armadura e falou 300`);
} else {
  console.log(`${nome} não ira conseguir comprar a armadura e nem falou 300`);
}
