let resultado = document.querySelector(".saida");
let getBody = document.body;

function PegarRGBA() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let alpha = document.getElementById("alpha").value;

    getBody.style.background=`rgba(${red},${green},${blue},${alpha})`;
    resultado.innerHTML = `rgba(${red},${green},${blue},${alpha})`;
}

function copy(){
    let element = document.createElement("textarea");
    element.value = resultado.textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy")
    document.body.removeChild(element);
    alert("Copiado!");

}

