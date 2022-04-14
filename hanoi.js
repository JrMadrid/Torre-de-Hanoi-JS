var cuerpo;
var fichasSeleccionada;
var origen;
var destino;
const alturita = "40px";
var cuadro1 = new Cuadro(true);
var cuadro2 = new Cuadro(false);
var cuadro3 = new Cuadro(false);

function crearDiv() {
  var caja = document.createElement("div");
  return caja;
}
function over(cuadro){
  cuadro.caja.style.backgroundColor="whitesmoke";
}
function over1(){
  over(cuadro1);
}
function over2(){
  over(cuadro2);
}
function over3(){
  over(cuadro3);
}
function out(cuadro){
  cuadro.caja.style.backgroundColor= "White";
}
function out1(){
  out(cuadro1);
}
function out2(){
  out(cuadro2);
}
function out3(){
  out(cuadro3);
}
function click(cuadro){
  if(cuadro.elegido){
  seleccionarorigendestino(cuadro);
  }
  else{
    cuadro.caja.style.borderColor = "black";
    reiniciarorigendestino();
  }

}
function click1(){
  cuadro1.elegido=!cuadro1.elegido;
  click(cuadro1);
}
function click2(){
  cuadro2.elegido=!cuadro2.elegido;
  click(cuadro2);
}
function click3(){
  cuadro3.elegido=!cuadro3.elegido;
  click(cuadro3);
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
  this.valor = 0;
}
function FichaII(){
  this.caja = crearDiv();
  this.caja.style.width = "30%";
  this.caja.style.height = alturita;
  this.caja.style.backgroundColor = "yellow";
  this.caja.style.marginLeft = "40%";
  this.caja.style.marginRigth = "40%";
  this.caja.style.borderRadius= "10px";
  this.valor = 1;
}
function FichaIII(){
  this.caja = crearDiv();
  this.caja.style.width = "50%";
  this.caja.style.height = alturita;
  this.caja.style.backgroundColor = "red";
  this.caja.style.marginLeft = "30%";
  this.caja.style.marginRigth = "30%";
  this.caja.style.borderRadius= "10px";
  this.valor = 2;
}
function FichaIIII(){
  this.caja = crearDiv();
  this.caja.style.width = "70%";
  this.caja.style.height = alturita;
  this.caja.style.backgroundColor = "green";
  this.caja.style.marginLeft = "20%";
  this.caja.style.marginRigth = "20%";
  this.caja.style.borderRadius= "10px";
  this.valor = 3;
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
  this.elegido = false;
  if (cajaInicial){
    this.contenido= rellenarFichas();
  }
  else this.contenido = rellenarcontenido();

  for (var i = 0; i < this.contenido.length; i++) {
    this.caja.appendChild(this.contenido[i].caja);
  }
  this.tieneFichas = function(){
    var rellenos = 0;
    for (var i = 0; i <this.contenido.length; i++) {
      if (this.contenido[i] instanceof Relleno) {
          rellenos++;
      }
    }
    if(rellenos == this.contenido.length){
      return false;
    }else {return true;}
  };
  this.ObtenerFichaSuperior = function(){
    for (var i = 0; i < this.contenido.length; i++) {
      if(!(this.contenido[i] instanceof Relleno )){
        return this.contenido[i];
      }
    }
  };
  this.QuitarFichaSuperior = function(){
    for (var i = 0; i < this.contenido.length; i++) {
      if(!(this.contenido[i] instanceof Relleno )){
        fichasSeleccionada = this.contenido[i];
        this.contenido[i] = new Relleno();
        break;
      }
    }
  };
  this.InsertarFichaSuperior = function(){
    for (var i = this.contenido.length - 1;i>=0 ;i--) {
      if(this.contenido[i] instanceof Relleno){
        this.contenido[i] = fichasSeleccionada;
        break;
      }
    }
  };
  this.RedibujarCaja = function(){
    while (this.caja.hasChildNodes()) {
      this.caja.removeChild(this.caja.lastChild);
    }
    for (var i = 0; i < this.contenido.length; i++) {
      this.caja.appendChild(this.contenido[i].caja);
    }
  };
}

function seleccionarorigendestino(cuadro){
  if(origen == undefined){
    if(cuadro.tieneFichas()){
      cuadro.caja.style.borderColor="whitesmoke"
      origen = cuadro;
      origen.elegido = true;
    }
  }
  else if (origen != undefined && destino == undefined){
    destino = cuadro;
    destino.elegido = true;
    if(origen != destino){
      if(!destino.tieneFichas() || (origen.ObtenerFichaSuperior().valor < destino.ObtenerFichaSuperior().valor)){
        origen.QuitarFichaSuperior();
        origen.RedibujarCaja();
        destino.InsertarFichaSuperior();
        destino.RedibujarCaja();
      }
    }
  }
  if(destino != undefined  && origen != undefined){
    reiniciarorigendestino();
  }
}
function reiniciarorigendestino(){
  if(origen!=undefined){
  origen.caja.style.borderColor= "black";
  origen.elegido = false;
}
if(destino!=undefined){
  destino.caja.style.borderColor = "black";
  destino.elegido = false;
}
origen = undefined;
  destino = undefined;
  cuadro1.elegido = false;
  cuadro2.elegido = false;
  cuadro3.elegido = false;

}
function iniciar() {
  cuerpo = document.getElementsByTagName("body")[0];
  cuerpo.appendChild(cuadro1.caja);
  cuerpo.appendChild(cuadro2.caja);
  cuerpo.appendChild(cuadro3.caja);

  cuadro1.caja.addEventListener("mouseover",over1,false);
  cuadro2.caja.addEventListener("mouseover",over2,false);
  cuadro3.caja.addEventListener("mouseover",over3,false);

  cuadro1.caja.addEventListener("mouseout",out1,false);
  cuadro2.caja.addEventListener("mouseout",out2,false);
  cuadro3.caja.addEventListener("mouseout",out3,false);

  cuadro1.caja.addEventListener("click",click1,false);
  cuadro2.caja.addEventListener("click",click2,false);
  cuadro3.caja.addEventListener("click",click3,false);
}
window.addEventListener("load",iniciar,false);
