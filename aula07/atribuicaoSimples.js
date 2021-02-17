var a = 5 + 3 // ATRIBUIÇÃO SIMPLES DE SOMA
var b = a % 5 // RESTO DA DIVISÃO
var c = 5 * b ** 2 // A POTENCIAÇÃO POSSUI PRIORIDADE DE EXECUSSÃO PELO JS
var d = 10 - a / 2 // A DIVISÃO DE a / 2 POSSUI PRIORIDADE DE EXECUSSÃO PELO JS
var e = 6 * 2 / d // NESTE CASO A MULTIPLICAÇÃO OCORRE ANTES DA DIVISÃO
var f = b % e + 4 / e // NESTE CASO O RESTO DA DIVISÃO OCORRE ANTES DA DIVISÃO, APÓS A DIVISÃO OCORRE A SOMA

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
