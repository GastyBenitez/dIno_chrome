//LOOP//

var time = new Date();
var deltaTime = 0;

if(document.readyState ===  "complete" || document.readyState === "interactive"){
    setTimeout(Init,1);
}else{
    document.addEventListener("DOMContentLoaded", Init);
}

function Init(){
    time = new Date();
    Start();
    Loop();


}

function Loop(){
    deltaTime = (new Date() - time / 1000);
    time = new Date();
    Update();
    requestAnimationFrame(Loop);
}






// JUEGO //

var sueloY = 22;
var velY = 0;
var impulso = 900;
var gravedad = 2500;

var dinoPosX = 42;
var dinoPosY = sueloY;

var sueloX = 0;
var velEscenario = 1280/3;
var gameVel = 1;
var score = 0;

var parado = false;
var saltando = false;

var contenedor;
var dino;
var textoScore;
var suelo;
var gameOver;

function Start(){
    gameOver = document.querySelector(".game-over");
    suelo = document.querySelector(".suelo");
    contenedor = document.querySelector(".contenedor");
    textoScore = document.querySelector(".score");
    dino = document.querySelector(".dino");
    document.addEventListener("keydown", HandleKeyDown);

}

function HandleKeyDown(ev){
    if(ev.keyCode == 32){
        Saltar();
    }
}

function Saltar(){
    
}




function Update(){

    moverSUelo();

}

function moverSUelo(){
    sueloX += calcularDesplazamiento();
    suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";
}

function calcularDesplazamiento(){
    return velEscenario * deltaTime * gameVel;
}