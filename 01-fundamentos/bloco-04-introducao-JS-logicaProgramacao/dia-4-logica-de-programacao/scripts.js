// crie um algoritmo que retorne o fatorial de 10.
// let fatorial = 1
// for (let index = 1; index <= 10; index += 1) {
// fatorial *= index 
// }console.log(fatorial)

// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra
// let word = 'tryber';
// let palavraInvertida = []
// for (let index = 0; index < word.length; index +=1) {
//     palavraInvertida.unshift(word[index])
// }console.log(palavraInvertida)

// Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorNumero = []
// let menorNumero = []
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// for (index = 0; index < array.length;index += 1) {
//     if (maiorNumero.length < array.length) {
//         maiorNumero = array[index]
//     } else {menorNumero = array[index]}
// }console.log(maiorNumero)
// console.log(menorNumero)

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let maiorNumeroPrimo = []
let divisores = 0 
for (let index = 50; index >=1; index -=1) {
    for (let index2 = index; index2 >=1; index2-=1){
        if (index%index2 === 0) {
            divisores += 1
        }
    }
    if (divisores === 2) {
        maiorNumeroPrimo.push(index)
    } else {divisores = 0}
} console.log(maiorNumeroPrimo[0])