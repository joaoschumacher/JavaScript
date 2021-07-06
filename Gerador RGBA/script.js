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
    let element = document.createElement("textarea");
    element.value = cores.textContent;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
}

function random() {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    document.body.style.background=`rgba(${r},${g},${b},${1})`;
    document.getElementById("cores").innerHTML = `rgba(${r},${g},${b},${1})`;
}



