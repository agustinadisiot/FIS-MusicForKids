try {
  const { Definiciones } = require("../common/definiciones");
} catch (err) {}

window.addEventListener("load", inicio);

var cantSecciones = 1;
var actual = 1;

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

  for (let cuerda = 1; cuerda <= 6; cuerda++) {
    for (let entrada = 1; entrada <= cantidadCuadrados; entrada++) {
      let inputSolo = document.createElement("input");
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
  entrada.maxsize = largo;
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
  cantSecciones++;

  var bloque_form = document.createElement("form");
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
  var myArr = document.forms.inputField;
  var myControls = myArr;
  var name_value_array = [];
  for (var i = 0; i < myControls.length; i++) {
    var aControl = myControls[i];

    // don't print the button value
    if (aControl.type != "button") {
      // store value in a map
      name_value_array.push(aControl.value, aControl.name);

      document
        .getElementById("resultField")
        .appendChild(document.createTextNode(aControl.value + " "));
    }
  }
  // show map values as a popup
  alert(JSON.stringify(name_value_array));
}
