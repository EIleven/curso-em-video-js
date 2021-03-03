function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/masc-criança.jpeg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-masc.jpeg')
            } else if (idade < 50 ) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/senhor.jpeg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/fem-criança.jpeg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem.jpeg')
            } else if (idade < 50 ) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.jpeg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/senhora.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}