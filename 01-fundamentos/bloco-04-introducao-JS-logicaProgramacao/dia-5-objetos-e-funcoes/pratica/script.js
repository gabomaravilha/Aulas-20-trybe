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
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//     //     editora: 'Tordesilhas',
//       },
//     ],
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
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// let array = 'arara'
// let palavraInvertida = []
// let verificaPalavra = 0

// function verificaPalindrome(a) {
//   for(let index = 0; index < array.length; index+=1){
//     palavraInvertida.unshift(array[index])
//   } 
//   for(let indice = 0; indice <array.length; indice+=1){
//     if (palavraInvertida[indice] === array[indice]) {
//     verificaPalavra += 1
//     } 
//   } 
//   if (verificaPalavra===array.length){
//     return true 
//   }else {return false}
// } 
// console.log(verificaPalindrome(array))
// function maiorNumero(numeros) {
  
// }
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// let array = [2, 3, 6, 7, 10, 1]
 
// function indexMaiorNumero(params) {
//   let maiorNumero = params[0]
//   for (index = 0; index < params.length;index += 1) {
//     if (maiorNumero < params[index]) {
//         maiorNumero = params[index]
//       } 
//     }params = params.indexOf(maiorNumero)
//     return params
// }
// console.log(indexMaiorNumero(array))

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// let array = [2, 4, 6, 7, 10, 0, -3]
// function indexMenorNumero(params) {
//   let menorNumero = params[0]
//   for (index = 0; index < params.length;index += 1) {
//     if (menorNumero > params[index]) {
//         menorNumero = params[index]
//       } 
//     }params = params.indexOf(menorNumero)
//     return params
// }
// console.log(indexMenorNumero(array))
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// function maiorPalavra(params) {
//   let maiorPalavra = params[0]
//   for (index = 0; index < params.length;index += 1) {
//     if (maiorPalavra.length < params[index].length) {
//        maiorPalavra = params[index]
//     }
//     }
//   return maiorPalavra 
// } console.log(maiorPalavra(array))
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
  // let array = [5, 2, 2, 8, 2, 3, 3, 2, 3, 3]
  // let arrayTeste = [4, 1, 5, 5, 8, 4, 5, 2, 1, 3, 1, 7, 8, 9, 4, 2, 1, 2, 4, 1, 5]

  // function maisRepetido(params) {
  //   let comparador = 0
  //   let numeroRepetido = 0
  //   let numeroRepetido2 = 0
  //   for (let index = 0; index < params.length; index+=1) {
  //     for (let index1 = index; index1 < params.length; index1 +=1){
  //       if (params[index1] === params[index]) {
  //         numeroRepetido +=1
  //       }
  //       if (numeroRepetido >>> numeroRepetido2) {
  //         comparador = params[index]
  //         numeroRepetido2 = numeroRepetido
  //       }
  //     }
  //     numeroRepetido = 0
  //   }return comparador
  // }console.log(maisRepetido(arrayTeste))

  // Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
//     let numero = 1.5
//     function somatorio(params) {
//        let soma = 0
//       if (numero%1 === 0 && numero >=0){
//         for (let index = 0; index <= params; index+=1) {
//         soma = index + soma
//         }
//       } else soma = 'Não é um numero inteiro não negativo'
//       return soma
//     }console.log(somatorio(numero))
// console.log((3/2)%1)
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word .
//  Considere que a string ending sempre será menor que a string word .
let palavra = 'joaofernando'
let palavra1 = 'fernan'
  function verificaFim(params, params2) {
    let letrasIguais= 0
    let resposta = 0
    for (let index = 0; index < params2.length; index+=1) {
      if (params2[(params2.length-1) - index] === params[(params.length-1)-index]){
        letrasIguais+=1
      }
      if(params2.length === letrasIguais) {
        resposta = true
      }else {resposta = false}
    }return resposta
  }console.log(verificaFim(palavra, palavra1))