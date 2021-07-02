function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value == 0 || fano.value > ano) {
        window.alert("ERRO: Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "homem_crianca.png")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "homem_jovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "homem_adulto.png")
            } else {
                //idoso
                img.setAttribute("src", "homem_idoso.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "mulher_crianca.png")
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "mulher_jovem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "mulher_adulta.png")
            } else {
                //idoso
                img.setAttribute("src", "mulher_idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)   
    }
    
}