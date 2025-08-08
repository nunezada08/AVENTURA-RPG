// capitulo 1: Desafio primario

//Informações do personagem
let nome = "Mohg";
let classe = "mago";
let nivel = 15;
let vida = 130;
let ouro = 30;
let xp = 0;
let vidaMaxima = 130;
let manaAtual = 150;
let manaMaxima = 150;
let furtividade = 5;
let uparLevel = 300;
let amuletoMagico
let nomeBoss1 = "Guardião tecnologico"
let pedraDaPassagem

//Equipamentos mágicos do personagem
const NOME_ARMA = "Tridente de virus";
let DANO_BASE = 50;
const NOME_ARMADURA = "Roupa do antigo lord dos anonimus";
const DEFESA_BASE = 20;

//O personagem treinou e ganhou 150 pontos de experiência
xp += 150

//Comprou uma poção por 30 moedas de ouro
ouro -= 30;

//Usou a poção e recuperou 40 pontos de vida
vida += 40;
vidaMaxima += 40;

//A arma foi encantada, e seu dano foi dobrado
DANO_BASE *= 2;

let ataqueTotal = nivel + DANO_BASE;
let defesaTotal = DEFESA_BASE + (nivel / 2);

//condições para,poder enfrentar o boss
vidaSuficiente = vida > 70;
ataqueForte = ataqueTotal > 60;
nivelAvancado = nivel >= 10;
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

//Lore do heroi
console.log(`🧾 LORE DO HERÓI: ${nome}`);
console.log("");
console.log(`${nome} é um prodigio, que nasceu dentro da organização mais perigosa de algorithmia, os Anonimus`);
console.log(`Como estava entre os mais perigosos, ele cresceu forte, porem não quis ficar forte por uma boa intenção`);
console.log(`Com nível ${nivel} e um ataque total de ${ataqueTotal}, é temido até mesmo pelo lord dos Anonimus`);
console.log(`${nome} criu a magia "virus", a magia que pode destruir sistemas com um unico discuido do oponente`);
console.log(`Com a ${NOME_ARMADURA}, atingem ${defesaTotal} pontos de resistência.`);
console.log(`Depois de fugir da base secreta dos Anonimus, acumula ${xp} de XP e carrega ${ouro} moedas.`);
console.log(`Com ${vida} pontos de vida, ${nome} é considerado um dos genio do mundo de algorithmia.`);
console.log(`${nome} tem vida suficiente? ${vidaSuficiente} | tem o ataque forte? ${ataqueForte} | ${nome} tem o nivel avançado? ${nivelAvancado}`);
console.log(`${nome} pode enfrentar o ${nomeBoss1}? ${podeEnfrentarGuardiao} — A proxima batalha de ${nome} se aproxima, será que ele ira solar?`);

// Estado atual da história (continando de onde parou no Nível 1)
let localAtual = "Vila abandonada, proxima a base secreta";
let missaoAtual = "enfrentar o Guardião tecnologico";
console.log("");

// Começo do capitulo 1
console.log("🌅 CAPÍTULO 1: A fuga");
 if (furtividade > 3) {
    console.log(`${nome} consegue entrar na vila sem que ninguem veja na ${localAtual}`);
} else {
    console.log(`Por sorte ${nome} consegue entrar sem os guardas o verem na ${localAtual}, porem acaba ralando o joelho e perde 20 pontos de vida `);
    vida -= 20;
    console.log(`vida atual: ${vida}`);
}
if (vida > 100) {
    console.log(`${nome} sobe em cima de um predio e consegue enxergar o guardiao tecnologico que tera que matar para ter acesso ao mundo exterior`);
}
if (classe === "mago") {
    console.log(`voce consegue perceber que o ${nomeBoss1} é um usuario de magia, logo, levara menos dano de magias`);
}

console.log("");

// Começo do capitulo 2
console.log(`🛡️ CAPÍTULO 2: O ${nomeBoss1}`);

if (furtividade >= 5) {
    console.log(`${nome} consegue invadir algumas casas, e acha um amuleto que pode ser utilizado antes de batalhas para aumentar 20% de dano`)
    amuletoMagico = true

} else {
    console.log(`${nome} acaba ficando com medo dos guardas verem ele andando pela vila e decide continuar pensando em seu plano no alto do predio`)
}

if (classe === "guerreiro") {
    console.log(`${nome} afia a sua espada, e aumenta 20 pontos de dano`)
    ataqueTotal += 20
}

console.log("")
// Começo do capitulo 3
console.log("⚔️ CAPÍTULO 3: A batalha tecnologica");

let poderBoss1 = 120
let vidaBoss1 = 500

if (amuletoMagico == true) {
    console.log(`${nome} utiliza o amuleto magico que encontrou e aumenta seu dano`)
    ataqueTotal += 20/100 * ataqueTotal
}

if (classe === "mago") {
    console.log(`O guardião tecnologico tambem é um mago, e recebe menos 10% de dano magico`)
    ataqueTotal -= 10/100 * ataqueTotal
    console.log(`${nome} tambem recebe menos 10% de dano do Guardião`)
    poderBoss1 -= 10/100 * poderBoss1
}

if (furtividade >= 7) {
    console.log(`${nome} consegue atacar o ${nomeBoss1} primeiro com a sua pequena adaga, pelas costas, e causa um dano critico`)
    vidaBoss1 -= ataqueTotal * 2
} else if (furtividade >= 5) {
    console.log(`${nome} consegue atacar o ${nomeBoss1} primeiro com a sua pequena adaga, na canela.`)
    vidaBoss1 -= ataqueTotal
} else {
    console.log(`O ${nomeBoss1} acerta o primeiro golpe em ${nome} em cheio com a sua espada magica`)
    vida -= poderBoss1
}

if (classe === "mago") {
    console.log(`${nome} é abençoado pelo bonzi buddy, um dos Deuses do universo, e consegue utilizar a magia "Meteoro de virus"`)
    vidaBoss1 -= ataqueTotal * 5
} else if (classe === "guerreiro") {
    console.log(`${nome} é abençoado pelo bonzi buddy, um dos Deuses do universo, e consegue utilizar o ataque "ataque virus-versal"`)
    vidaBoss1 -= ataqueTotal * 5
} else if (classe === "arqueiro") {
    console.log(`${nome} é abençoado pelo bonzi buddy, um dos Deuses do universo, e consegue utilizar o ataque "flecha roxa de bonzi"`)
    vidaBoss1 -= ataqueTotal * 5
}

if (vidaBoss1 > 100) {
    console.log(`${nome} consegue acertar um ultimo ataque no ${nomeBoss1} e mata ele`)
    vidaBoss1 = 0
    console.log(`O ${nomeBoss1} diz para ele ter noção de suas ações e parar de espalhar maldades tecnologicas`)
    console.log(`${nome} conseguiu a pedra magica para entrar no mundo de alghoritimia`)
    pedraDaPassagem = true
} else {
    console.log(`${nome} ve que o ${nomeBoss1} esta com pouca vida, ajoelhado e pedindo para que ${nome} não o mate`)
    console.log(`Porem ${nome} foi criado em um clã de assasinos tecnologicos e não poupou a vida do ${nomeBoss1} e o mata com um virus fatal em seu coração`)
    vidaBoss1 = 0
    console.log(`O ${nomeBoss1} diz para ele ter noção de suas ações e parar de espalhar maldades tecnologicas`)
    console.log(`${nome} conseguiu a pedra magica para entrar no mundo de alghoritimia`)
    pedraDaPassagem = true
}

console.log("");
console.log("🏁 FIM DO CAPÍTULO - Aguarde o próximo nível da aventura!"); 