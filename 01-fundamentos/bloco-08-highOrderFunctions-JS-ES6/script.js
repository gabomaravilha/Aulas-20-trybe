// const waking = () => 'Acordando!!' 
// const coffeeCall = () => 'Bora tomar café!!'
// const sleep = () => 'Partiu dormir!!'
// const doingThings = (callback) => callback()
// console.log(doingThings(waking))

// const criarPessoa = (nomeCompleto) => {
// let email = `${nomeCompleto.split(' ').join('_')}@trybe.com`
// let objetoPessoa = {Nome: nomeCompleto, Email: email}
// return objetoPessoa
// }
// const newEmployees = (callback) => {
//     const employees = {
//       id1: callback ('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: callback ('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: callback ('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };
//   console.log(newEmployees(criarPessoa))

// const checador = (numeroGanhador, numeroApostado) => numeroGanhador === numeroApostado

// const numeroAleatorio = (numeroApostador, callback) => {
//   const numeroCerto = Math.floor(Math.random() * 6)
//   if (callback(numeroCerto, numeroApostador)) {
//     return 'Parabéns você ganhou'
//   } return 'Tente novamente'
// }
// console.log(numeroAleatorio(5, checador))

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const checagem = (respostaCerta, resposta) => {
//   if (respostaCerta === resposta) {
//     return 1
//   }
//   if (respostaCerta === 'N.A') {
//     return 0
//   } return 0.5
// }

// const contador = (respostaCorreta, respostaEstudante, callback) => {
//   let contador = 0
//   for (let index = 0; index < respostaCorreta.length; index += 1) {
//     const a = callback(respostaCorreta[index], respostaEstudante[index])
//     contador += a
//   }
//   return contador
// }
// console.log(contador(RIGHT_ANSWERS, STUDENT_ANSWERS, checagem))