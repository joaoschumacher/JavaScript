let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert("[ERRO] Digite um número entre 1 e 100 que não esteja na lista!")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else {
        let tod = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tod} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior} e o menor foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média destes valores é ${soma/tod}.</p>`
    }
} 