function tabuada() {
    let numero = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    if (numero.value.length == 0) {
        window.alert("[ERRO] Por favor digite algum valor.")
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}