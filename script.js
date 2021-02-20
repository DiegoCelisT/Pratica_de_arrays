console.log ("Este é um sistema para criar cárdapios de comida diferentes e aleatorios para cada dia, baseados em uma serie de opções iniciais")

//Café da manhã

var frutas = ["maçã", 'laranja', 'pera'];
var bebidas = ['leite', 'café', 'choco'];
var acompanhamentos = ['pão', 'cereal', 'aveia', 'ovos'];
var café_da_manhã = [frutas, bebidas, acompanhamentos];

//console.table (café_da_manhã);
//console.table (café_da_manhã [2]) //ver os items no array 2 que são os acompanhamentos
//console.log (café_da_manhã [1][2]) //Ver o item 2 do array 1: choco
//console.log (bebidas [2]) //Item 2 do array 1, escrevendo diretamente seu nome, vai devolver o mesmo valor que a linha de cima

//Almoço

var almoço = [];

var carbohidratos = []
carbohidratos [0] = 'arroz'
carbohidratos [1] = 'feijão'
carbohidratos [2] = 'grau de bico'
var add = carbohidratos.push ('macarrão') //Outra maneira de botar um novo item ao final sem saber a quantidade de items no array

var proteinas = ['carne', 'frango', 'peixe']
var add = proteinas.push ('perú')

almoço [0]=carbohidratos
almoço [1]=proteinas
var add = almoço.push (bebidas) //usando o mesmo array de bebidas do café da manhã
//console.table (almoço);

//Adicionando novas opções de bebida
var add = bebidas.push ('suco')
var add = bebidas.push ('refri')

//Jantar
var snacks = ["amendoim", "semente de caju", "quinua"]
var jantar = [frutas, snacks, bebidas]

//console.table (jantar)

var cardápio = [café_da_manhã, almoço, jantar]
console.log ("Opções de café da manhã:")
console.table (cardápio [0])
console.log ("Opções de Almoço:")
console.table (cardápio [1])
console.log ("Opções de Jantar:")
console.table (cardápio [2])

//console.log (Math.floor(Math.random()*3)) //Devolve um número random entre 0 e 3, excluindo o 3

//Vou usar esse conceito para criar cardapios aleatórios:
console.log ("Agora vamos criar cárdapios aleátorios para cada dia...tenha cuidado com misturas perigosas como leite e feijão")

console.log ("Na manhã @ senhor@ vai comer:")
café_da_manhã_para_hoje = [café_da_manhã[0][Math.floor(Math.random()*3)], café_da_manhã[1][Math.floor(Math.random()*5)], café_da_manhã[2][Math.floor(Math.random()*4)]]
console.table (café_da_manhã_para_hoje)

console.log ("Ao meiodia temos:")
almoço_para_hoje = [almoço[0][Math.floor(Math.random()*4)], almoço[1][Math.floor(Math.random()*4)], almoço[2][Math.floor(Math.random()*5)]]
console.table (almoço_para_hoje)

console.log ("E na noite vai ser:")
jantar_para_hoje = [jantar[0][Math.floor(Math.random()*3)], jantar[1][Math.floor(Math.random()*3)], jantar[2][Math.floor(Math.random()*5)] ]
console.table (jantar_para_hoje)