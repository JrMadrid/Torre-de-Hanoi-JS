var cuerpo;
const alturita = "40px";
var cuadro1 = new Cuadro(true);
var cuadro2 = new Cuadro(false);
var cuadro3 = new Cuadro(false);

function crearDiv() {
  var caja = document.createElement("div");
  return caja;
}
function rellenarcontenido(){
  var contenido = new Array();
  for (var i = 0; i < 5; i++) {
    contenido[i] = new Relleno();
  }

  return contenido;
}
function rellenarFichas(){
  var contenido = new Array();
  contenido[0] = new Relleno();
  contenido[1] = new FichaI();
  contenido[2] = new FichaII();
  contenido[3] = new FichaIII();
  contenido[4] = new FichaIIII();

  return contenido;
}
function FichaI(){
  this.caja = crearDiv();
  this.caja.style.width = "10%";
  this.caja.style.height = alturita;
  this.caja.style.backgroundColor = "steelblue";
  this.caja.style.marginLeft = "50%";
  this.caja.style.marginRigth = "50%";
  this.caja.style.borderRadius= "10px";
}
function FichaII(){
  this.caja = crearDiv();
  this.caja.style.width = "30%";
  this.caja.style.height = alturita;
  this.caja.style.backgroundColor = "yellow";
  this.caja.style.marginLeft = "40%";
  this.caja.style.marginRigth = "40%";
  this.caja.style.borderRadius= "10px";
}
function FichaIII(){
  this.caja = crearDiv();
  this.caja.style.width = "50%";
  this.caja.style.height = alturita;
  this.caja.style.backgroundColor = "red";
  this.caja.style.marginLeft = "30%";
  this.caja.style.marginRigth = "30%";
  this.caja.style.borderRadius= "10px";
}
function FichaIIII(){
  this.caja = crearDiv();
  this.caja.style.width = "70%";
  this.caja.style.height = alturita;
  this.caja.style.backgroundColor = "green";
  this.caja.style.marginLeft = "20%";
  this.caja.style.marginRigth = "20%";
  this.caja.style.borderRadius= "10px";
}
function Relleno(){
  this.caja = crearDiv();
  this.caja.style.width="100%";
  this.caja.style.height = alturita;
}

function Cuadro(cajaInicial) {
  this.caja= crearDiv();
  this.caja.style.width = "28%";
  this.caja.style.height = "200px";
  this.caja.style.marginLeft = "4%";
  this.caja.style.borderWidth = "2%";
  this.caja.style.border = "solid black";
  this.caja.style.float = "left";
  this.contenido;

  if (cajaInicial){
    this.contenido= rellenarFichas();
  }
  else this.contenido = rellenarcontenido();

  for (var i = 0; i < this.contenido.length; i++) {
    this.caja.appendChild(this.contenido[i].caja);
  }
}
function iniciar() {
  cuerpo = document.getElementsByTagName("body")[0];
  cuerpo.appendChild(cuadro1.caja);
  cuerpo.appendChild(cuadro2.caja);
  cuerpo.appendChild(cuadro3.caja);
}
window.addEventListener("load",iniciar,false);
