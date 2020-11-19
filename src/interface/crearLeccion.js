window.addEventListener("load", inicio);

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
      inputSolo.size = ancho;
      inputSolo.type = "number";
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

  for (let entrada = 1; entrada <= cantidadCuadrados; entrada++) {
    let inputSolo = document.createElement("input");
    inputSolo.name = clase + entrada;
    inputSolo.size = ancho;
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

function guardarLeccion() {
  for (let numSec = 0; numSec < cantSecciones; numSec++) {
    let formActual = document.getElementById("form" + numSec);
    var leccion = new Leccion();
    var tab = new Tablatura();

    for (let i = 0; i < 6; i++) {
      let cuerda = [];
      for (let j = 0; j < Definiciones.cantidadCuadrados; j++) {
        let texto = formActual[cuadroTablatura + "(" + i + "-" + j + ")"];
        cuerda.push(texto.value);
        alert(texto.value);
      }
      try {
        tab.agregarCuerda(cuerda);
      } catch (err) {
        alert("Hay datos incorrectos en la tablatura de la seccion " + numSec);
      }
    }
  }

  // var myArr = document.forms.inputField;
  // var myControls = myArr;
  // var name_value_array = [];
  // for (let i = 0; i < myControls.length; i++) {
  //   var aControl = myControls[i];

  //   // don't print the button value
  //   if (aControl.type != "button") {
  //     // store value in a map
  //     name_value_array.push(aControl.value, aControl.name);

  //     document
  //       .getElementById("resultField")
  //       .appendChild(document.createTextNode(aControl.value + " "));
  //   }
  // }
  // // show map values as a popup
  // alert(JSON.stringify(name_value_array));
}
