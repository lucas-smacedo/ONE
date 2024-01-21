alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
   alert(`isso ai, voce descobriu o número secreto ${numeroSecreto}
   `);
} else {
    if (numeroSecreto > chute) {
        alert(`O número secreto é maior que ${chute}`);
    }
}







//special-char - () {} ! /*  */  $ ` ? : <> 
