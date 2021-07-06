function PegarRGBA() {
    let resultado = document.getElementById("cores");
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    let alpha = document.getElementById("alpha").value;
    document.body.style.background=`rgba(${red},${green},${blue},${alpha})`;
    document.getElementById("cores").innerHTML = `rgba(${red},${green},${blue},${alpha})`
}

function copiarRGBA() {
    let cores = document.getElementById("cores");
    let elemento = document.createElement("textarea");
    elemento.value = cores.textContent;
    document.body.appendChild(elemento);
    elemento.select();
    document.execCommand(copiarRGBA);
    document.body.removeChild(elemento);
    alert("copiado!");
}


