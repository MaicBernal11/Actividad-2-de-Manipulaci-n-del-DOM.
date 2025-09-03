
//MODIFICACION DE ESTILOS

const figura = document.getElementById("figure");


function circulo() {


    figura.style.borderRadius = "50%";
    figura.style.background = "#00f2ffff";


}


function star() {

    figura.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, \
                    79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

}

function gif() {

    figura.style.backgroundSize = "cover";
    figura.style.backgroundImage = "url('img/giff.gif')";

}

function animacion() {


    figura.style.transform = "rotate(360deg)";

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






document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnCircle").addEventListener("click", circulo);
    document.getElementById("btnStar").addEventListener("click", star);
    document.getElementById("btnGif").addEventListener("click", gif);
    document.getElementById("btnAnim").addEventListener("click", animacion);
    document.getElementById("btnMoveUp").addEventListener("click", up);
    document.getElementById("btnMoveDown").addEventListener("click", down);
    document.getElementById("btnMoveLeft").addEventListener("click", left);
    document.getElementById("btnMoveRight").addEventListener("click", right);
});

