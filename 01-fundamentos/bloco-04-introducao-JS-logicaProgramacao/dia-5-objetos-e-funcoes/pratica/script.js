// Usando o objeto abaixo, faça os exercícios a seguir:
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// function bemVinda (pessoa) {
//     return 'Bem vinda ' + pessoa 
// }
// console.log(bemVinda(info.personagem))
//  Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// info.recorrente = 'Sim'
// console.log(info)
// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// for (let indice in info) {
//     console.log(indice)
// }
// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for (let indice in info) {
//     console.log(info[indice])
// }
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// let info2 = Object.assign(info)
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: "Sim"
// } 
// for(let key in info) {
//     if (info[key] != info2[key]) {
//         console.log(info[key], ' e ', info2[key])
//     } else {console.log('Ambos recorrentes // Atenção para essa última linha!')}
// }

// Usando o objeto abaixo, faça os exercícios a seguir:
// let leitor = {
    // nome: 'Julia',
    // sobrenome: 'Pessoa',
    // idade: 21,
    // livrosFavoritos: [
    //   {
    //     titulo: 'O Pior Dia de Todos',
    //     autor: 'Daniela Kopsch',
    // //     editora: 'Tordesilhas',
    //   },
    // ],
  // };
// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)
// Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
// leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   })
//   console.log(leitor.livrosFavoritos)
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')

// Parte II - Funções
let array = 'desenvolvimento'
let palavraInvertida = []
function palindromo(){
  for(let index = 0; index < array.length; index+=1){
    palavraInvertida.unshift(array[index])
  } return palavraInvertida
} if (palavraInvertida === array) {
  console.log('true')
} else {console.log('false')}

