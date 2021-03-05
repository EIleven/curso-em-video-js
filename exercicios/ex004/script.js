function gerar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Impossível criar tabuada! Digite um número maior que zero')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }

}

/* MINHA RESOLUÇÃO
function gerar() {
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')

    
    if (num.value == 0) {
        window.alert('Impossível criar tabuada.')
    } else {
        let n = Number(num.value)
        res.innerHTML = `${n} x 1 = ${n * 1} <br> ${n} x 2 = ${n * 2} <br> ${n} x 3 = ${n * 3} <br> ${n} x 4 = ${n * 4} <br> ${n} x 5 = ${n * 5} <br> ${n} x 6 = ${n * 6} <br> ${n} x 7 = ${n * 7} <br> ${n} x 8 = ${n * 8} <br> ${n} x 9 = ${n * 9} <br> ${n} x 10 = ${n * 10}`
    }
}
*/