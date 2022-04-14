var cuerpo;
var cuadro1 = new Cuadro();
var cuadro2 = new Cuadro();
var cuadro3 = new Cuadro();

function crearDiv() {
  var caja = document.createElement("div");
  return caja;
}
function Cuadro() {
  this.caja= crearDiv();
  this.caja.style.width = "25%";
  this.caja.style.height = "200px";
  this.caja.style.marginLeft = "4%";
  this.caja.style.borderWidth = "2%";
  this.caja.style.border = "solid black";
  this.caja.style.float = "left";
}
function iniciar() {
  cuerpo = document.getElementsByTagName("body")[0];
  cuerpo.appendChild(cuadro1.caja);
  cuerpo.appendChild(cuadro2.caja);
  cuerpo.appendChild(cuadro3.caja);
}
window.addEventListener("load",iniciar,false);
