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
// let pai = document.querySelector('#pai')
// let irmao = document.createElement('section')
// pai.appendChild(irmao)
// let ultimoFilho = document.querySelector('#pai').lastElementChild
// let irmao1 = document.createElement('section')
// let acharIrmao = document.querySelector('#elementoOndeVoceEsta')
// acharIrmao.appendChild(irmao1)
// let acharPrimeiroFilho = document.querySelector('#primeiroFilho')
// let irmao2 = document.createElement('section')
// acharPrimeiroFilho.appendChild(irmao2)
// let acharIrmao2 = document.getElementById('primeiroFilho').firstElementChild.parentElement.nextElementSibling.nextElementSibling
// console.log(acharIrmao2)
// let paiDoPai = document.querySelector('#paiDoPai')
// paiDoPai.removeChild('#terceiroFilho')

// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
// Adicione a tag main com a classe main-content como filho da tag body ;
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.


let tituloDoBody = document.createElement('h1')
tituloDoBody.innerText= 'Exercício 5.2 - JavaScript DOM'
document.body.appendChild(tituloDoBody)

let mainbody = document.createElement('main')
mainbody.classList.add('main-content')
document.body.appendChild(mainbody)

let secaomain = document.createElement('section')
secaomain.classList.add('center-content')
mainbody.appendChild(secaomain)

let p1 = document.createElement('p')
p1.innerText = 'Adicione a tag p como filho do section'
secaomain.appendChild(p1)

let esquerda = document.createElement('section')
esquerda.classList.add('left-content')
mainbody.appendChild(esquerda)

let direita = document.createElement('section')
direita.classList.add('right-content')
mainbody.appendChild(direita)

let imagem = document.createElement('img')
imagem.classList.add('small-image')
imagem.src = 'https://picsum.photos/200'
esquerda.appendChild(imagem)

let lista = document.createElement('ul')
let numeros = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'seven', 'oito', 'nove', 'dez']
let NomeLi = 0
for (let index = 0; index < numeros.length; index+=1) {
    NomeLi = document.createElement('li')
    NomeLi.innerText = numeros[index]
    lista.appendChild(NomeLi)
}direita.appendChild(lista)


for (let index1 = 0; index1 < 3; index1+=1) {
    let h3s = document.createElement('h3')
    h3s.innerText ='a' + index1
    h3s.classList.add('aa')
    mainbody.appendChild(h3s)
}