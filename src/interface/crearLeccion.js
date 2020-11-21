window.addEventListener("load", inicio);
var sistema = new Sistema();
var cantSecciones = 0;
var actual = 0;

function inicio() {
  crearSeccion();
  document
    .getElementById("botonAgregar")
    .addEventListener("click", crearSeccion);
  document
    .getElementById("botonGuardar")
    .addEventListener("click", guardarLeccion);
}

function crearTablatura() {
  var ancho = 1;
  var clase = "cuadroTablatura";
  var cantidadCuadrados = Definiciones.cantidadCuadradosTab;
  var tablatura = document.createElement("div");
  tablatura.className = "browser-default tablatura";
  let nomCuerdas = ["e", "B", "G", "D", "A", "E"];

  for (let cuerda = 0; cuerda < 6; cuerda++) {


    tablatura.innerHTML = tablatura.innerHTML + "" + nomCuerdas[cuerda] + " ";


    for (let entrada = 0; entrada < cantidadCuadrados; entrada++) {
      let inputSolo = document.createElement("input");
      inputSolo.name = clase + "(" + cuerda + "-" + entrada + ")";
      inputSolo.maxLength = "2";
      inputSolo.max = 25;
      inputSolo.min = 0;
      //inputSolo.oninput = (this.value = controlInput(this.value));
      inputSolo.size = ancho;
      inputSolo.type = "text";
      inputSolo.placeholder = "-";
      inputSolo.className = "browser-default " + clase;
      tablatura.appendChild(inputSolo);
    }
    if (cuerda != 6) {
      let salto = document.createElement("br");
      tablatura.appendChild(salto);
    }
  }
  return tablatura;
}

function controlInput(entrada) {
  if (!entrada) {
    return entrada;
  }
  if (isNaN(entrada)) {
    return entrada.slice(0, entrada.length - 1);
  }
  if (entrada.length > 2) {
    return entrada.slice(0, 2);
  }
  if (entrada.includes("-")) {
    return entrada.slice(0, 0);
  }
  return entrada;

};

function crearInputsAcordes() {
  var ancho = 1;
  var clase = "cuadroAcorde";
  var cantidadCuadrados = Definiciones.cantidadCuadradosTab;
  var acorde = document.createElement("div");
  acorde.className = "browser-default acorde";

  acorde.innerHTML = acorde.innerHTML + "Acordes: ";
  acorde.appendChild(document.createElement("br"));
  for (let entrada = 0; entrada < cantidadCuadrados; entrada++) {
    let inputSolo = document.createElement("input");
    inputSolo.name = clase + entrada;
    inputSolo.size = ancho;
    inputSolo.maxLength = "3";
    inputSolo.type = "text";
    inputSolo.placeholder = "";
    inputSolo.className = "browser-default " + clase;
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
  entrada.name = "cuadroLetra";
  entrada.type = "text";
  entrada.placeholder = "Ingrese la letra aqui";
  entrada.className = "cuadroLetra";

  letra.appendChild(entrada);
  return letra;
}

function crearSeccion() {
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

function guardarTablatura(sec, tab, formActual) {
  for (let i = 0; i < 6; i++) {
    let cuerda = [];

    for (let j = 0; j < Definiciones.cantidadCuadradosTab; j++) {
      let texto = formActual["cuadroTablatura" + "(" + i + "-" + j + ")"].value;

      texto = texto.trim();
      if (texto == "") {
        texto = "-";
      }
      cuerda.push(texto);
    }
    if (tab.validarCuerda(cuerda) == true) {
      tab.agregarCuerda(cuerda);
    } else {
      alert("Hay un error en las tablatura");
      return false;
    }

  }


  if (!sec.verificarTab(tab)) {
    return false;
  }
  sec.agregarTab(tab);
  return true;
}

function guardarAcorde(sec, acorde, formActual) {
  for (let j = 0; j < Definiciones.cantidadCuadradosTab; j++) {
    let texto = formActual["cuadroAcorde" + j].value;
    texto = texto.trim();
    acorde.push(texto);
  }
  if (sec.verificarAcorde(acorde) == true) {
    sec.agregarAcorde(acorde);
  } else {
    alert("Hay un error en los acordes de la seccion");
    return false;
  }
  return true;
}

function guardarLetra(sec, letra, formActual) {
  if (sec.verificarLetra(letra) == true) {
    sec.agregarLetra(letra);
  } else {
    alert("Hay un error en la letra de la seccion");
    return false;
  }
  return true;
}

function guardarSeccion(lec, sec, formActual) {
  let tab = new Tablatura();

  if (!guardarTablatura(sec, tab, formActual)) {
    return false;
  }

  let acorde = [];
  if (!guardarAcorde(sec, acorde, formActual)) {
    return false;
  }

  let letra = formActual.cuadroLetra.value;
  if (!guardarLetra(sec, letra, formActual)) {
    return false;
  }

  if (!lec.verificarSeccion(sec)) {
    alert("Hay un error en la seccion");
  } else {
    lec.agregarSeccion(sec);
  }

  return true;
}


function guardarLeccion() {
  let lec = new Leccion();
  let valido = true;
  if (!validarEntradas()) {
    alert("Error en las entradas");
  } else {

    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let desc = document.getElementById("descripcion").value;

    if (lec.verificarTitulo(titulo) == true) {
      lec.agregarTitulo(titulo);
    }

    if (lec.verificarAutor(autor) == true) {
      lec.agregarAutor(autor);
    }

    if (lec.verificarDesc(desc) == true) {
      lec.agregarDesc(desc);
    }

    for (let numSec = 0; numSec < cantSecciones; numSec++) {
      let formActual = document.getElementById("form" + numSec);
      let sec = new Seccion();

      if (!guardarSeccion(lec, sec, formActual)) {
        valido = false;
        alert("Hay un error en la seccion " + numSec);
      }
    }

    if (valido && sistema.verificarLeccion(lec) == true) {
      sistema.agregarLeccion(lec);
      alert("Se guardo exitosamente");
    } else {
      alert("Hubo un problema al guardar la leccion, revise los datos ingresados, nuevamente");
    }
  }
}
