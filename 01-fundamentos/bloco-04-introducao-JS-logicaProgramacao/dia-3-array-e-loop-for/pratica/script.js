let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let mediaAritmetica = 0
let maiorNumero = numbers[0]
let numerosImpares = [0]
let menorNumero = numbers[0]
let numeros25 = []
let metadeNumeros25 = []
    // for (let index = 0; index < numbers.length; index += 1){
    // console.log(numbers[index])
    // soma += numbers[index]
    // mediaAritmetica = soma/numbers.length
    // if (numbers[index] < maiorNumero) {
    // } else {maiorNumero = numbers[index]}
    // if (numbers[index] < menorNumero) {
    //     menorNumero = numbers[index]
    // } else {} 
    // if (numbers[index]%2 != 0){
    //     numerosImpares.push(numbers[index])     
    // } 

// }
//  console.log(menorNumero)
// if (numerosImpares.length === 0 ){
//     console.log('nenhum valor ímpar encontrado')
// } else {console.log(numerosImpares)}
// console.log(soma)
// console.log(mediaAritmetica)
// if (mediaAritmetica > 20) {
//     console.log('valor maior que 20')
// } else {console.log('valor menor ou igual a 20')}  
// console.log(maiorNumero)
for (let index25 = 0; index25 <= 24; index25 += 1){
    numeros25.push(index25 + 1)
    metadeNumeros25.push((index25+1)/2)
} console.log(numeros25)
console.log(metadeNumeros25)
