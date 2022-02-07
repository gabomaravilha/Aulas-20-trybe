// const myName = "Gabriel"
// const birthCity = "Manaus" 
// let birthYear = 1996
// console.log (myName, birthCity, birthYear)
// birthYear = 2030
// console.log (birthYear)
// birthCity = "Curitiba"
// console.log (birthCity)

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// const base = 5
// const height = 8
// const area = base * height
// const perimeter = (base*2) + (height*2)
// console.log (area)
// console.log (perimeter)

// const nota = 90

// if (nota < 60) {
//     console.log("Você foi reprovada(o)")
// } else if (nota < 80 && nota >=60) {
//     console.log("Você está na nossa lista de espera")
// } else {
//     console.log ("Parabéns, você foi aprovada(o)")
// }

const a =61
const b = 61

console.log (a+b)
console.log (a-b)
console.log (a*b)
console.log (a/b)
console.log (a % b)

const bnumb = a > b ? a : b 
console.log (bnumb + " é o maior número")

const c = 61
const bbnumb = bnumb > c ? bnumb : c
console.log (bbnumb + " é o maior número")

const d = -3

if (d > 0) {
console.log("Positive")
} else if (d < 0) {
    console.log("Negative")
}  else {
    console.log("Zero")
}

if (a>0 && b>0 && c>0) {
    if (a+b+c === 180) {
        console.log ("true")
    } else 
        console.log ("false")
    
}else{ 
    console.log ("erro")}

const xadrez = "Rei";
const xadrez1 = xadrez.toLowerCase()
switch (xadrez1) {
    case "cavalo":
        console.log("Anda em L");
        break;
    case "bispo":
        console.log("Anda em diagonais");
        break
    case "peão":
        console.log("Anda um espaço pra frente")
        break
    case "torre":
        console.log("Anda em linha reta o quanto quiser")
        break
    case "dama":
        console.log("Anda em todos espaços a sua volta, diagonais e retas")
        break
    case "rei": 
        console.log ("Anda em todos os espaços a sua volta")  
        break  
default:
    console.log(`Erro, ${xadrez} não é uma peça de xadrez`) 
}

const nota = "a"
if (nota >100) {
    console.log("Erro")
} else if  (nota >= 90) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B")
} else if (nota >= 70) {
    console.log("C")
} else if (nota >= 60) {
    console.log("D")
} else if (nota >= 50) {
    console.log("E")
} else if (nota >=0){
    console.log("F")
} else {console.log("Erro")}

const moduloA = a%2
const moduloB = b%2
const moduloC = c%2

if (moduloA === 0 || moduloB === 0 || moduloC === 0) {
    console.log("True")
}
    else {console.log ("False")}

if (moduloA !== 0 || moduloB !== 0 || moduloC !==0) {
    console.log("true")
} else {console.log("false")}

const custo = 2
const venda = 3
const custoImposto =  (120 * 100 **-1) * custo
const lucro = venda - custoImposto
console.log (1000 * lucro)
console.log (lucro)
console.log (custoImposto)

const salarioBruto = 1500
let salarioINSS = 0
let salarioIR = 0 

if (salarioBruto >= 5189.82) {
   salarioINSS = salarioBruto - 570.88 
} else if (salarioBruto >= 2094.93) {
    salarioINSS = 0.89 * salarioBruto
} else if (salarioBruto >= 1556.95) {
    salarioINSS = 0.91*salarioBruto
}else {
    salarioINSS = 0.92*salarioBruto
} if (salarioINSS >= 4664.68) {
        salarioIR = (salarioINSS - (0.275*salarioINSS - 869.36))
 } else if (salarioINSS >= 3751.06) {
        salarioIR = (salarioINSS - (0.225*salarioINSS - 636.13))
 } else if (salarioINSS >= 2826.66) {
    salarioIR = (salarioINSS - (0.15*salarioINSS - 354.80))
 } else if (salarioINSS >= 1903.99) {
    salarioIR = (salarioINSS - (0.075 * salarioINSS - 142.80))
} else {console.log (salarioINSS)}
console.log(salarioIR)