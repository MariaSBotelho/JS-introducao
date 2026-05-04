console.log("Atribuição de variavies");

const idade= 19; //
let nome = "Maria"; //pode mudar de tipos porem não é uma boa prática, ex declarar como string e mudar para number
const sobrenome = "Clara";

console.log(nome + sobrenome);
console.log(nome + " " +sobrenome);
console.log(nome, sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome} e minha idade é ${idade} `);

const nomeCompleto = nome + sobrenome; 

console.log(nomeCompleto);
//nomeCompleto = 2; erro constante não pode alterar valor

let contador; //armazena valores 
contador = contador + 1;
// boa partica tentar manter variaveis o mais contante possivel
