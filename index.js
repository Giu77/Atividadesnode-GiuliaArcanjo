const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Giulia Arcanjo";
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 17;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano de " + anoAtual + " minha idade é " + idade + ".");

let AnoAtual = 2025;
let Idade = 18;
const NomeCompleto = "Giulia Arcanjo ";
const Faculdade = "farmacia";

console.log("Olá meu nome é " + NomeCompleto + ", tenho " + Idade + " anos " +  "estamos no ano de " + AnoAtual + " gostaria de fazer faculdade na área de " + Faculdade);

console.log(`oi eu sou ${nomeCompleto}`)

const ListaDeViagens = new Array(
  `França`,
  `Londres`,
  `Nova York`,
  `Tokyio`,
  `Barcelona`
  );

  console.log(ListaDeViagens);

console.log(ListaDeViagens[1])
ListaDeViagens.push("Coronel Vivida");
console.log(ListaDeViagens)
ListaDeViagens.splice(1,1);
console.log(ListaDeViagens);
var NomeComprador = entrada("Qual é o seu nome?");
var IdadeComprador = entrada("Qual é a sua idade?");
if(IdadeComprador < 18){
  console.log(`olá ${NomeComprador} sua idade não corresponde com nossas diretrizes, como sua idade é ${IdadeComprador} não podemos liberar a compra`);
}1
if(IdadeComprador >= 18){
  console.log(`olá ${NomeComprador}. Qual seria seu destino?`)
}
console.log(ListaDeViagens)

