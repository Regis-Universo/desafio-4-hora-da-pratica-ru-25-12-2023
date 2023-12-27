// Desafios finais

/* 1. Crie um programa que utilize o
 console.log para exibir uma
 mensagem de boas-vindas.*/

let mensagemDeBoasVindas = 'Seja bem-vido(a) ao DESAFIO FINAL';
console.log(mensagemDeBoasVindas);
// ou
console.log('Sejam todos bem-vindos ao DESAFIO FINAL');

/* 2. Crie uma variável chamada "nome" e
 atribua a ela o seu nome. Em seguida,
 utilize o console.log para exibir a
 mensagem "Olá, [seu nome]!" no
 console do navegador.*/

let nome = 'Régis Universo';
console.log(nome);

/* 3. Crie uma variável chamada "nome" e
 atribua a ela o seu nome. Em seguida,
 utilize o alert para exibir a mensagem
 "Olá, [seu nome]!" .*/

let meuNome = 'Régis Universo';
alert(`Olá, ${meuNome}`);

/* 4. Utilize o prompt e faça a seguinte
 pergunta: Qual a linguagem de
 programação que você mais gosta? . 
 Em seguida, armazene a resposta em uma
 variável e mostre no console do navegador.*/ 

let linguagemPreferida = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`Minha linguagem de programação preferida é ${linguagemPreferida}`); 

/* 5. Crie uma variável chamada "valor1" e
 outra chamada "valor2", atribuindo a
 elas valores numéricos de sua escolha.
 Em seguida, realize a soma desses dois
 valores e armazene o resultado em uma
 terceira variável chamada "resultado".
 Utilize o console.log para mostrar a
 mensagem "A soma de [valor1] e [valor2]
 é igual a [resultado]." no console.*/

let valor1 = 25;
let valor2 = 15;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);


/* 6. Crie uma variável chamada "valor1" e
 outra chamada "valor2", atribuindo a
 elas valores numéricos de sua escolha.
 Em seguida, realize a subtração desses
 dois valores e armazene o resultado em
 uma terceira variável chamada
 "resultado". Utilize o console.log para
 mostrar a mensagem "A diferença entre
 [valor1] e [valor2] é igual a [resultado]."
 no console.*/

let valor3 = 25;
let valor4 = 15;
let resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}`);

/* 7. Peça ao usuário para inserir sua idade
 com prompt. Com base na idade
 inserida, utilize um if para verificar se a
 pessoa é maior ou menor de idade,
 exibindo uma mensagem apropriada no
 console.*/

 let idade = prompt('Por favor, digite a sua idade:');
 if (idade >= 18) {
    console.log('Você é MAIOR de idade');
 } else {
    console.log('Você é MENOR de idade');
 }

/* 8. Crie uma variável "numero" e peça um
 valor com prompt verifique se é
 positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.*/

let numero = prompt('Digiite um numero para verificar se ele é um número POSITIVO, NEGATIVO ou NEUTRO:');
if (numero > 0) {
    console.log(`O número ${numero} é um número POSITIVO!!!`);
} else if (numero < 0) {
    console.log(`O número ${numero} é um número NEGATIVO!!!`);
} else {
    console.log(`O número ${numero} é um número NEUTRO!!!`);
}

/* 9. Use um loop while para imprimir os
 números de 1 a 10 no console.*/

// Inicializando a variável de controle
var i = 1;

// Usando um loop while para imprimir números de 1 a 10
while (i <= 10) {
  console.log(i);
  i++;
}

 // ou 

 // Inicializando a variável de controle
 let contador = 1;

 // Usando um loop while para imprimir números de 1 a 10
 while (contador < 11) {
 console.log(`Executando a iteração: ${contador}`);
 contador ++;
 }
 

/* 10. Crie uma variável "nota" e atribua um
 valor numérico a ela. Use if-else para
 determinar se a nota é maior ou igual a
 7 e exiba "Aprovado" ou "Reprovado" no
 console.*/

 let nota = prompt('Digite a sua nota');
 if (nota >= 7) {
    console.log('Parabéns!!! Você foi APROVADO!!!');
 } else {
    console.log('Ainda NÃO foi dessa vez');
 }


/* 11. Use o Math.random para gerar qualquer
 número aleatório e exiba esse número
 no console.*/

 let numeroAleatorio = Math.random();
 console.log(`Número aleatório: ${numeroAleatorio}`);


/* 12. Use o Math.random para gerar um
 número inteiro entre 1 e 10 e exiba esse
 número no console.*/

 let numeroInteiro = parseInt(Math.random() * 10 + 1);
 console.log(`Número Inteiro: ${numeroInteiro}`);


/* 13. Use o Math.random para gerar um
 número inteiro entre 1 e 1000 e exiba
 esse número no console.*/

 let numeroInteiroUmMil = parseInt(Math.random() * 1000 + 1);
 console.log(`Número Inteiro de 1 a 1000: ${numeroInteiroUmMil}`);