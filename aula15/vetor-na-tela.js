let valores = [1, 4, 6, 7, 8, 5]

console.log(valores)
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf(7))
