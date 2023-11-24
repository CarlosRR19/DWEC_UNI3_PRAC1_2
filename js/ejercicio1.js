import { PalabraOculta } from "./adivinarPalabra.js";
import partida from "./palabraOculta_prueba.js";

window.addEventListener("load", cargar);

var palabraOriginal = cargar();

var miInput = document.getElementById("palabra");
miInput.addEventListener("input", comprobar);

var nuevaPalabra = document.getElementById("nueva");
nuevaPalabra.addEventListener("click", cargar);

var mensaje = document.getElementById("resultado");
var fallos = document.getElementById("porcentaje")

var solucion = document.getElementById("solucion");
solucion.addEventListener("click", solucionar);

var finalizar = document.getElementById("finalizar");
finalizar.addEventListener("click", fin);

function generar() {
  return partida.setPalabra();
}

function desordenarPalabra(palabra) {
  return palabra
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
}

function cargar() {  
  palabraOriginal = generar();
  var palabraDesordenada = desordenarPalabra(palabraOriginal);
  document.getElementById("letras").value = palabraDesordenada;
  document.getElementById("palabra").value = "";
  document.getElementById("palabra").readOnly = false;
  document.getElementById("resultado").style.visibility = "hidden";
  document.getElementById("solucion").disabled = false;
  document.getElementById("nueva").disabled = true;

  return palabraOriginal;
}

function comprobar() {
  if (miInput.value.toUpperCase() == palabraOriginal) {
    nuevaPalabra.disabled = false;
    document.getElementById("palabra").readOnly = true;

    mensaje.style.visibility = "visible";
    mensaje.style.backgroundColor = "lightgreen";
    mensaje.style.border = "solid 2px green"
    mensaje.innerHTML = "Es correcto!";
    solucion.disabled = true;

    partida.setAciertos(partida.getAciertos() + 1);
    console.log(partida.getAciertos());
  }
}

function solucionar() {
    mensaje.style.backgroundColor = "lightblue";
    mensaje.style.border = "solid 2px blue"
    mensaje.style.visibility = "visible";
    mensaje.innerHTML = "La solución es " + palabraOriginal;

    miInput.readOnly = true;

    nuevaPalabra.disabled = false;
    solucion.disabled = true;

    partida.setIntentos(partida.getIntentos() + 1);
}

function fin() {
    nuevaPalabra.disabled = true;
    solucion.disabled = true;
    finalizar.disabled = true;

    mensaje.style.visibility = "hidden";
    fallos.style.backgroundColor = "lightred";
    fallos.style.visibility = "visible";
    console.log(partida.getAciertos())
    fallos.innerHTML = "Porcentaje de aciertos " + ( partida.getIntentos() / partida.getAciertos()) * 100 + "%";

    miInput.value = "";
    miInput.readOnly = true;
    document.getElementById("letras").value = "";
}