console.log("Trabalhando com listas");
//arrays
const cidades = new Array("Salvador", "São Paulo", "Rio de Janeiro");

cidades.push("Belo Horizonte"); // adicionando um novo item na lista 

console.log(`Destinos possiveis: ${cidades}`);

const idadeUsuario = 15;
const estaAcompanhada = true;

if (idadeUsuario >= 18) {
    console.log("Usuario maior de idade");
    cidades.splice(1, 1); //remove item da lista
} else if (estaAcompanhada === true) {
    console.log("Usuario esta acompanhado, pode comprar");
    cidades.splice(1, 1);
} else {
    console.log("Usuario menor de idade");
}

console.log(`Destinos restantes: ${cidades}`); 