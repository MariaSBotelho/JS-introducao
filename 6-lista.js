console.log("Trabalhando com listas");
//arrays
const cidades = new Array ("Salvador" , "São Paulo" ,"Rio de Janeiro");

cidades.push("Belo Horizonte"); // adicionando um novo item na lista 

console.log(`Destinos possiveis: ${cidades}`); 

console.log(cidades[1]); // sp

//posição onde começa, quantos elementos vao ser deletados
cidades.splice(1,1); //remove são paulo

console.log(cidades[1]); // rj
