
//MODIFICACION DE ESTILOS

const figura = document.getElementById("figure");


function circulo() {


    figura.style.borderRadius = "50%";
    figura.style.background = "#00f2ffff";


}


function star() {

    figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, \
                    79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

    figura.style.background = "#ff0000ff";

}

function gif() {

    figura.style.backgroundSize = "cover";
    figura.style.backgroundImage = "url('img/giff.gif')";

}

function animacion() {


    let style = document.createElement("style");

    style.innerHTML = `
      @keyframes girar {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;

    document.querySelector("head").appendChild(style);

    figura.style.animation = "girar 2s linear infinite";

}


function up() {

    figura.style.transform = "translateY(-100px)";

}

function down() {

    figura.style.transform = "translateY(100px)";


}

function left() {

    figura.style.transform = "translateX(-100px)";


}


function right() {

    figura.style.transform = "translateX(100px)";


}



//MANIPULACION DE CONTENIDOS


function title() {

    const title = document.getElementById("mainTitle");
    title.textContent = prompt("Escribe el nuevo título:");

}


function parrafo() {

    const paragraph = document.getElementById("mainParagraph");
    paragraph.textContent = prompt("Escribe el nuevo párrafo");

}

function addParagraph() {


    const addParagraph = document.getElementById("extraParagraphs");
    addParagraph.innerHTML = "<p id='newParrafo'></p>";  //agregue la etiqueta p pero dentro de ella agregue un ID para poder agregar el nuevo texto
    let newParrafo = document.getElementById('newParrafo'); //hice que el parrafo se capturara en una variable(Let) para  agregarla en la nueva etiqueta P
    newParrafo.textContent = prompt("Agrega el nuevo texto");


}


function removeParagraph() {

    const deleteParagraph = document.querySelector("#newParrafo");
    deleteParagraph.remove();

}



//MANIPULACIÓN DE ATRIBUTOS


function hexColor() {


    const color = prompt("Escribe un color en HEX (ej: #ff0000):");
    if (color) {
        figura.style.backgroundColor = color;
    } else {
        alert("Escribe un color en HEX Ej: \n #000 #00eaffff");
    }


}


function elegirFigura() {

    let opcion = prompt("Elige el número de la figura que deseas: \n1.Círculo\n2.Estrella\n3.Cuadrado");


    switch (opcion) {
        case "1":

            figura.style.borderRadius = "50%";
            figura.style.background = "#2100a7ff";
            figura.style.clipPath = "none";

            break;

        case "2":

            figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, \
                    79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
            figura.style.background = "#ff0000ff";

            break;

        case "3":

            figura.style.borderRadius = "0%";
            figura.style.background = "#00ccffff";
            figura.style.clipPath = "none";


            break;

        default: alert("Opción Invalida");
            break;
    }



}


const arregloImagenes = ["img/imagen.jpg", "img/imagen2.jpg", "img/imagen3.jpg"];
let index = 0;
const imagen = document.getElementById("mainImage");

function imagenSiguiente() {

    index = (index + 1) % arregloImagenes.length;
    imagen.src = arregloImagenes[index];

}


function imagenAtras() {

    index = (index - 1) % arregloImagenes.length;
    imagen.src = arregloImagenes[index];

}


function mostrarOcultar() {

    if (imagen.style.display === "none") {
        imagen.style.display = "block";
        imagen.style.margin = "20px auto"; // mostrar
    } else {
        imagen.style.display = "none"; // ocultar
    }
}


function cambiarAlt() {

    let nuevoAlt = prompt("Escribe el nuevo texto para el atributo ALT:");

    imagen.setAttribute("alt", nuevoAlt);

}


const url = document.getElementById('mainLink');


function cambiarLink() {

    let nuevaUrl = prompt("Cambia la url por la que desees");
    url.setAttribute("href", nuevaUrl);

}

function target() {

    url.setAttribute("target", "_blank");


}


function remove() {

    url.removeAttribute("href");
    url.style.color = "gray";

}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnCircle").addEventListener("click", circulo);
    document.getElementById("btnStar").addEventListener("click", star);
    document.getElementById("btnGif").addEventListener("click", gif);
    document.getElementById("btnAnim").addEventListener("click", animacion);
    document.getElementById("btnMoveUp").addEventListener("click", up);
    document.getElementById("btnMoveDown").addEventListener("click", down);
    document.getElementById("btnMoveLeft").addEventListener("click", left);
    document.getElementById("btnMoveRight").addEventListener("click", right);
    document.getElementById("btnChangeTitle").addEventListener("click", title);
    document.getElementById("btnChangeParagraph").addEventListener("click", parrafo);
    document.getElementById("btnAddParagraph").addEventListener("click", addParagraph);
    document.getElementById("btnRemoveParagraph").addEventListener("click", removeParagraph);
    document.getElementById("btnHexColor").addEventListener("click", hexColor);
    document.getElementById("btnChooseFigure").addEventListener("click", elegirFigura);
    document.getElementById("btnChangeImageNext").addEventListener("click", imagenSiguiente);
    document.getElementById("btnChangeImagePrev").addEventListener("click", imagenAtras);
    document.getElementById("btnToggleImage").addEventListener("click", mostrarOcultar);
    document.getElementById("btnChangeAlt").addEventListener("click", cambiarAlt);
    document.getElementById("btnChangeLink").addEventListener("click", cambiarLink);
    document.getElementById("btnOpenLink").addEventListener("click", target);
    document.getElementById("btnDisableLink").addEventListener("click", remove);
});

