// var ondeEstou = document.getElementById('elementoOndeVoceEsta')
// document.getElementById('pai').style.color = 'blue'
// document.getElementById('primeiroFilhoDoFilho').innerText = 'Lembro sim das aulas anteriores'
// var PrimeiroFilho = document.getElementById('pai').firstElementChild
// console.log(PrimeiroFilho)
// var texto = document.getElementById('elementoOndeVoceEsta').nextSibling
// console.log(texto)
// var texto1 = document.getElementById('elementoOndeVoceEsta').nextElementSibling
// console.log(texto1)
// var texto2 = document.getElementById('pai').lastElementChild.previousElementSibling
// console.log(texto2)
let pai = document.querySelector('#pai')
let irmao = document.createElement('section')
pai.appendChild(irmao)
let ultimoFilho = document.querySelector('#pai').lastElementChild
let irmao1 = document.createElement('section')
let acharIrmao = document.querySelector('#elementoOndeVoceEsta')
acharIrmao.appendChild(irmao1)
let acharPrimeiroFilho = document.querySelector('#primeiroFilho')
let irmao2 = document.createElement('section')
acharPrimeiroFilho.appendChild(irmao2)
let acharIrmao2 = document.getElementById('primeiroFilho').firstElementChild.parentElement.nextElementSibling.nextElementSibling
console.log(acharIrmao2)
