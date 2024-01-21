
/* 
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

*/



/* Desafios finais - Módulo 3 logica-js
//1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Bem-vindo ao nosso site!');

//2. Crie uma variável chamada "nome" e atribua a ela o seu nome. 
//Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Lucas';
console.log(`Olá, ${nome}!`);

//3. Crie uma variável chamada "nome" e atribua a ela o seu nome. 
//Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = 'Lucas';
alert(`Olá, ${nome}!`);

//4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
//Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemDeProgramacaoFavorita = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemDeProgramacaoFavorita);

//5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
//Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 7;
let valor2 = 4;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 500;
let valor2 = 389;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

//7. Peça ao usuário para inserir sua idade com prompt. 
//Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idadeUsuario = prompt('Por favor, informe a sua idade:');
if (idadeUsuario >= 18){
    console.log(`Você tem ${idadeUsuario} anos de idade, portanto já é maior de idade.`);
} else {
    console.log(`Você tem ${idadeUsuario} anos de idade, portanto ainda é menor de idade`);
}

//8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
//Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Por favor, nos informe um número inteiro, seja positivo ou negativo:')
if (numero < 0) {
    alert(`O número ${numero} é negativo!`);
} else {
    if (numero > 0) {
        alert(`O número ${numero} é positivo!`);
    }
    else {
        alert(`O número escolhido é ${numero} (zero). Ele é neutro.`);
    }
}

//9. Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 0;
while(contador < 10){
    contador++;
    console.log(contador);
}


//10. Crie uma variável "nota" e atribua um valor numérico a ela. 
//Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 8;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

//11. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log(parseInt(Math.random() * 10 + 1));

*/







