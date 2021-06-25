//bibliotecas de frases
const frases_do_dia = [
    'com ou sem luta, sempre ha derrota',
    'calma, voce ainda tem muito a perder',
    'quando te falarem que nao vai da certo, acredite',
    'na vida sempre  e tudo ou nada. tudo dando errado ou nada dando certo',
    'dias ruins se passam para que piores possam vir',
    'nunca foi azar, sempre foi incompetencia',
    'depois da tempestade vem o lamacal',
    'ate o cheque e espepcial e voce nao'
];
const mood_do_dia = [
    'suicidio',
    'rejeicao amorosa',
    'deprpessao',
    'fracasso profissional',
    'desespero',
    'vontade de morrer'
];
//funcoes
const random_prhase = () =>{
    let randomIndex = Math.floor(Math.random()*frases_do_dia.length);
    return frases_do_dia[randomIndex];
};
const random_mood = () =>{
    let randomIndex = Math.floor(Math.random()*mood_do_dia.length);
    return mood_do_dia[randomIndex];
};

const output = () =>{
    console.log (`pelas previsoes dos coachs intergalaticamente quanticos voce ainda tem ${Math.floor(Math.random()*100)} anos de azar`);
    console.log (`frase do dia: ${random_prhase()}`);
    console.log (`mood do dia: ${random_mood()}`);
};
output()