console.log("Trabalhando com listas");
//arrays
const cidades = new Array("Salvador", "São Paulo", "Rio de Janeiro");

cidades.push("Belo Horizonte"); // adicionando um novo item na lista 

console.log(`Destinos possiveis: ${cidades}`);

const idadeUsuario = 15;
const estaAcompanhada = true;
const destino = "Salvador";
let passagemComprada = false;

const podeComprar = idadeUsuario >= 18 || estaAcompanhada === true; 

let contador = 0;
let destinoExiste = false;

while(contador < cidades.length){
    if(cidades[contador] === destino){
        console.log(`${destino} disponivel.`);
        destinoExiste = true;
        break;  
    }
    contador += 1;
}

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
} else {
    console.log("Desculpe! ocorreu um erro!")
}

//for(cont = 0; cont < 3 ; cont ++)
// inicia variavel, fala ate onde ela vai no array, fala como vai passando de variavel para variavel.