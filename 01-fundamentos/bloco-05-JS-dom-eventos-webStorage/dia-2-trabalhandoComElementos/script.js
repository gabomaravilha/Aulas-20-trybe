var ondeEstou = document.getElementById('elementoOndeVoceEsta')
document.getElementById('pai').style.color = 'blue'
document.getElementById('primeiroFilhoDoFilho').innerText = 'Lembro sim das aulas anteriores'
var PrimeiroFilho = document.getElementById('pai').firstElementChild
console.log(PrimeiroFilho)
var texto = document.getElementById('elementoOndeVoceEsta').nextSibling
console.log(texto)
var texto1 = document.getElementById('elementoOndeVoceEsta').nextElementSibling
console.log(texto1)
var texto2 = document.getElementById('pai').lastElementChild.previousElementSibling
console.log(texto2)