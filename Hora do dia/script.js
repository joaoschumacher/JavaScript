function carregar(){
    var msg = window.document.getElementById("msg")
    var imgens = window.document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
    //hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        imagens.src = "manha.png"
        document.body.style.backgroundColor = "#ffb995"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        imagens.src = "tarde.png"
        document.body.style.backgroundColor = "#9cc209"
    } else {
        //boa noite
        imagens.src = "noite.png"
        document.body.style.backgroundColor = "#334355"
    }
 }
 function aumentar() {
     imagem = document.getElementById("imagens")
     imagem.height

 }
