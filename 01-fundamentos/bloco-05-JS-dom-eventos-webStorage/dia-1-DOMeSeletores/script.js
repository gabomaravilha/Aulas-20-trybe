let paragrafo = 'Ainda assim, existem dúvidas a respeito de como o julgamento imparcial das eventualidades estimula a padronização do impacto na agilidade decisória.'
function mudarP(arrayTexto) {
    document.getElementsByTagName('p')[0].innerText = arrayTexto
}   mudarP(paragrafo)
let fundo = 'rgb(76,164,109)'
function mudarFundo (cor) {
document.getElementsByClassName('main-content')[0].style.background = cor
}   mudarFundo(fundo)
function mudarFundoCentro (cor1) {
    document.getElementsByClassName('center-content')[0].style.background = cor1
}   mudarFundoCentro('white')
function MudarH1 (texto) {
    document.getElementsByTagName ('h1')[0].innerText = texto    
}   MudarH1('Exercício 5.1 - Javascript')
function mudarMaiusculoP () {
    let tamanhoP = document.getElementsByTagName('p')
    for (let index = 0; index < tamanhoP.length; index+=1) {
    tamanhoP[index].innerText = tamanhoP[index].innerText.toUpperCase()
    } 
} mudarMaiusculoP()

function mostrarP () {
    let conteudoP = document.getElementsByTagName('p')
    let aux = conteudoP
    for (let index1 = 0; index1 < aux.length; index1+=1) {
        conteudoP = document.getElementsByTagName('p')[index1].innerText
        console.log(conteudoP)
    }
} mostrarP()
