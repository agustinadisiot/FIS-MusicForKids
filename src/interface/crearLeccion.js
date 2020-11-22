window.addEventListener("load", inicio);
let sistema = new Sistema();
let cantSecciones = 0;
let actual = 0;

function inicio() {
  levantarSistema();
  crearSeccion();
  document
    .getElementById("botonAgregar")
    .addEventListener("click", crearSeccion);
  document
    .getElementById("botonGuardar")
    .addEventListener("click", guardarLeccion);
}

function levantarSistema() {
  let sisGuardado = localStorage.getItem("testSistema");
  if (sisGuardado) {
    let auxSistema = Object.assign(new Sistema(), JSON.parse(sisGuardado));
    let array = auxSistema.lecciones;


    for (let i = 0; i < array.length; i++) {
      let auxLeccion = Object.assign(new Leccion(), (array[i]));
      let leccion = new Leccion();
      leccion.agregarTitulo(auxLeccion.titulo);
      leccion.agregarAutor(auxLeccion.autor);
      leccion.agregarDesc(auxLeccion.desc);
      for (let j = 0; j < auxLeccion.secciones.length; j++) {
        let auxSeccion = Object.assign(new Seccion(), (auxLeccion.secciones[j]));
        let seccion = new Seccion();
        let tab = Object.assign(new Tablatura(), (auxSeccion.tab));
        seccion.agregarTab(tab);
        seccion.agregarLetra(auxSeccion.letra);
        seccion.agregarAcorde(auxSeccion.acorde);
        leccion.agregarSeccion(seccion);
      }
      sistema.agregarLeccion(leccion);
    }
  }
}

function guardarSistema() {
  let guardar = JSON.stringify(sistema);
  localStorage.setItem("testSistema", guardar);
}

function crearTablatura() {
  let ancho = 1;
  let clase = "cuadroTablatura";
  let cantidadCuadrados = Definiciones.cantidadCuadradosTab;
  let tablatura = document.createElement("div");
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
  let ancho = 1;
  let clase = "cuadroAcorde";
  let cantidadCuadrados = Definiciones.cantidadCuadradosTab;
  let acorde = document.createElement("div");
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
  let largo = 100;
  let letra = document.createElement("div");
  letra.className = "letra";

  let entrada = document.createElement("input");
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
  let seccion = document.createElement("div");
  seccion.id = "div" + cantSecciones;
  seccion.className = "divSeccion";
  let bloque_form = document.createElement("form");
  bloque_form.id = "form" + cantSecciones;
  cantSecciones++;

  let inTab = crearTablatura();
  let inAcord = crearInputsAcordes();
  let inLetra = crearInputLetra();

  bloque_form.appendChild(inTab);
  bloque_form.appendChild(document.createElement("br"));
  bloque_form.appendChild(inAcord);
  bloque_form.appendChild(document.createElement("br"));
  bloque_form.appendChild(inLetra);
  bloque_form.appendChild(document.createElement("br"));
  bloque_form.appendChild(document.createElement("br"));
  seccion.appendChild(bloque_form);

  let puntero;

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
      guardarSistema();
    } else {
      alert("Hubo un problema al guardar la leccion, revise los datos ingresados, nuevamente");
    }
  }
}
