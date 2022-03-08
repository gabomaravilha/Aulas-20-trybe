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

// const botaoContador = () =>{
//   const botao = document.querySelector('button')
//   const criarP = document.createElement('p')
//   let numeroCliques = 0
//   const body = document.querySelector('body')
//   botao.addEventListener('click', () => {
//     criarP.innerText = numeroCliques += 1
//     body.appendChild(criarP)
//   })
// } 
// botaoContador()

// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for (const index in arrayOfSkills) {
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);