// const testingScope = (escopo) => {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
// }
//   testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const oddsAndEvensArrumado = oddsAndEvens.sort()

// // console.log(`${oddsAndEvens[5]} ${oddsAndEvens[1]} ${oddsAndEvens[2]} ${oddsAndEvens[4]} ${oddsAndEvens[3]} ${oddsAndEvens[0]}`); // será necessário alterar essa linha 😉
// console.log(oddsAndEvensArrumado)

// Crie uma função que receba um número e retorne seu fatorial.

// const fatorial = (numero) => {
//   let resposta = numero
//   if (numero >= 0) {
//     for (let index = 1; index < numero; index += 1) {
//       resposta *= index
//     }
//   }
//   return resposta
// }
// console.log(fatorial(7))

// const maiorPalavra = frase => {

// }

// const teste = 'Antônio foi no banheiro e não sabemos o que aconteceu'
// const testeSplit = teste.split(' ')
// function compara(teste1, teste2) {
//   return teste2.length - teste1.length
// }
// const testeSplitSort = testeSplit.sort(compara)
// console.log(testeSplitSort[0])

// const maiorPalavra = frase => frase.split(' ').sort((palavra1, palavra2) => palavra2.length - palavra1.length)[0] 
// console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconeu'))

const botaoContador = () =>{
  const botao = document.querySelector('button')
  const criarP = document.createElement('p')
  let numeroCliques = 0
  const body = document.querySelector('body')
  botao.addEventListener('click', () => {
    criarP.innerText = numeroCliques += 1
    body.appendChild(criarP)
  })
} 
botaoContador()