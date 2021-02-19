// OPERADORES LÓGICOS: 

// OPERADOR DE NEGAÇÃO: ! (Operador unário)
! true
! false

// OPERADOR DE CONJUNÇÃO: && (Operador binário)

true && true
true && false
false && true
false && false

// OPERADOR DE DISJUNÇÃO: || (Operador binário)

true || true
true || false
false || true
false || false

var a = 5
var b = 8

var c = a > b && b % 2 == 0
console.log(c)
var d = a <= b && b / 2 == 4
console.log(d)
var e = a == b || b / 2 == 2
console.log(e)