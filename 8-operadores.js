console.log("Trabalhando com listas");
//arrays
const cidades = new Array("Salvador", "São Paulo", "Rio de Janeiro");

cidades.push("Belo Horizonte"); // adicionando um novo item na lista 

console.log(`Destinos possiveis: ${cidades}`);

const idadeUsuario = 15;
const estaAcompanhada = true;

if (idadeUsuario >= 18 || staAcompanhada === true) { // || = ou , && = e
    console.log("Usuario maior de idade");
    cidades.splice(1, 1); //remove item da lista
}else {
        console.log("Usuario menor de idade");
}

// && = e =- todas as condiçoes devem ser verdadeiras para o codigo ser executado
// || = ou = pelo menos uma condição deve ser verdadeira para o codigo ser executado