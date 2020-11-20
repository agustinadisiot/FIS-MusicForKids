window.addEventListener("load", inicio);
var sistema = new Sistema();
var cantSecciones = 0;
var actual = 0;

function inicio() {
  document
    .getElementById("botonAgregar")
    .addEventListener("click", agregarSeccion);
  document
    .getElementById("botonGuardar")
    .addEventListener("click", guardarLeccion);
}

function crearTablatura() {
  var ancho = 1;
  var clase = "cuadroTablatura";
  var cantidadCuadrados = Definiciones.cantidadCuadradosTab;
  var tablatura = document.createElement("div");
  tablatura.className = "tablatura";

  for (let cuerda = 0; cuerda < 6; cuerda++) {
    for (let entrada = 0; entrada < cantidadCuadrados; entrada++) {
      let inputSolo = document.createElement("input");
      inputSolo.name = clase + "(" + cuerda + "-" + entrada + ")";
      inputSolo.maxLength = "2";
      inputSolo.max = 25;
      inputSolo.min = 0;
      inputSolo.oninput = function () {
        if (inputSolo.value.length > 2) {
          inputSolo.value = inputSolo.value.slice(0, 2);
        }
        if (inputSolo.value.includes("-")) {
          inputSolo.value = inputSolo.value.slice(0, 0);
        }
        if (isNaN(inputSolo.value)) {
          inputSolo.value = inputSolo.value.slice(0,inputSolo.value.length - 1);
        }
      };
      inputSolo.size = ancho;
      inputSolo.type = "text";
      inputSolo.placeholder = "-";
      inputSolo.className = clase;
      tablatura.appendChild(inputSolo);
    }
    if (cuerda != 6) {
      let salto = document.createElement("br");
      tablatura.appendChild(salto);
    }
  }
  return tablatura;
}

function crearInputsAcordes() {
  var ancho = 1;
  var clase = "cuadroAcorde";
  var cantidadCuadrados = Definiciones.cantidadCuadradosTab;
  var acorde = document.createElement("div");
  acorde.className = "acorde";

  for (let entrada = 0; entrada < cantidadCuadrados; entrada++) {
    let inputSolo = document.createElement("input");
    inputSolo.name = clase + entrada;
    inputSolo.size = ancho;
    inputSolo.maxLength = "3";
    inputSolo.type = "text";
    inputSolo.placeholder = "";
    inputSolo.className = clase;
    acorde.appendChild(inputSolo);
  }

  return acorde;
}

function crearInputLetra() {
  var largo = 100;
  var letra = document.createElement("div");
  letra.className = "letra";

  var entrada = document.createElement("input");
  entrada.maxlength = largo;
  entrada.size = 90;
  entrada.type = "text";
  entrada.placeholder = "Ingrese la letra aqui";
  entrada.className = "cuadroLetra";

  letra.appendChild(entrada);
  return letra;
}

function agregarSeccion() {
  //Defino seccion con su id
  var seccion = document.createElement("div");
  seccion.id = "div" + cantSecciones;
  seccion.className = "divSeccion";
  var bloque_form = document.createElement("form");
  bloque_form.id = "form" + cantSecciones;
  cantSecciones++;

  var inTab = crearTablatura();
  var inAcord = crearInputsAcordes();
  var inLetra = crearInputLetra();

  bloque_form.appendChild(inTab);
  bloque_form.appendChild(document.createElement("br"));
  bloque_form.appendChild(inAcord);
  bloque_form.appendChild(document.createElement("br"));
  bloque_form.appendChild(inLetra);
  bloque_form.appendChild(document.createElement("br"));
  bloque_form.appendChild(document.createElement("br"));
  seccion.appendChild(bloque_form);

  var puntero;

  puntero = document.getElementById("divLeccion");
  puntero.appendChild(seccion);
}

function validarEntradas() {
  for (let i = 0; i < cantSecciones; i++) {
    let formActual = document.forms[i];
    if (!formActual.checkValidity()) {
      return false;
    }
  }
  return true;
}

function guardarLeccion() {
  var lec = new Leccion();
  let valido = true;


  
  if (!validarEntradas()) {
    valido = false;
    alert("Error en las entradas");
  } else {
    for (let numSec = 0; numSec < cantSecciones && valido; numSec++) {
      let formActual = document.getElementById("form" + numSec);
      let sec = new Seccion();
      let tab = new Tablatura();

      for (let i = 0; i < 6; i++) {
        let cuerda = [];

        for (let j = 0; j < Definiciones.cantidadCuadradosTab && valido; j++) {
          let texto = formActual["cuadroTablatura" + "(" + i + "-" + j + ")"].value;

          texto = texto.trim();
          if(texto == ""){
            texto = "-";
          }
          cuerda.push(texto);
        }
        if(tab.validarCuerda(cuerda)==true){
          tab.agregarCuerda(cuerda);
        }else{
          valido = false;
          alert("Hay un error en las tablatura de la seccion " + (numSec+1));
        }

      }

      if(!tab.validarTablatura()){
        valido = false;
        alert("Error en la tablatura " + numSec);
      }

      let acorde = [];

      for (let j = 0; j < Definiciones.cantidadCuadradosTab && valido; j++) {
        let texto = formActual["cuadroAcorde" + j].value;
        texto = texto.trim();
        acorde.push(texto);
      }
      if(sec.verificarAcorde(acorde)==true){
        sec.agregarAcorde(acorde);
      }else{
        valido = false;
        alert("Hay un error en los acordes de la seccion " + (numSec+1));
      }

      let letra = formActual["letra"].value;

      if(sec.verificarLetra(letra)==true){
        sec.agregarLetra(letra);
      }else{
        valido = false;
        alert("Hay un error en la letra de la seccion " + (numSec+1));
      }

      if(lec.verificarSeccion(sec)){
        lec.agregarSeccion(sec);
      }else{
        valido = false;
        alert("Hay un error en la seccion " + numSec);
      }

    }

    if(valido && sistema.verificarLeccion(lec)){
      sistema.agregarLeccion(lec);
      alert("Se guardo exitosamente");
    }else{
      alert("Hubo un problema al guardar la leccion, revise los datos ingresados, nuevamente");
    }
  }
}
