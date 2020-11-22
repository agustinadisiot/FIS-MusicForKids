window.addEventListener("load", inicio);
var sistema = new Sistema();
var leccionActual = new Leccion();
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


function levantarLeccion() {
  let leccGuardado = localStorage.getItem("testLeccion");
  if (leccGuardado) {
    let auxLeccion = Object.assign(new Leccion(), JSON.parse(leccGuardado));
    leccionActual.agregarTitulo(auxLeccion.titulo);
    leccionActual.agregarAutor(auxLeccion.autor);
    leccionActual.agregarDesc(auxLeccion.desc);
    for (let j = 0; j < auxLeccion.secciones.length; j++) {
      let auxSeccion = Object.assign(new Seccion(), (auxLeccion.secciones[j]));
      let seccion = new Seccion();
      let tab = Object.assign(new Tablatura(), (auxSeccion.tab));
      seccion.agregarTab(tab);
      seccion.agregarLetra(auxSeccion.letra);
      seccion.agregarAcorde(auxSeccion.acorde);
      leccionActual.agregarSeccion(seccion);
    }
  }

}

function inicio() {
  levantarSistema();
  levantarLeccion();
  mostrarLeccion();
  // document.getElementById("botonAgregar").addEventListener("click", crearSeccion);
  // document.getElementById("botonGuardar").addEventListener("click", guardarLeccion);
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

function imprimirTablatura(tab) {
  let parrafo = document.createElement("p");
  let nomCuerdas = ["e", "B", "G", "D", "A", "E"];
  for (let i = 0; i < 6; i++) {
    let cuerda = tab.darCuerda(i);
    parrafo.innerHTML = parrafo.innerHTML + nomCuerdas[i] + " | " + cuerda;
    parrafo.appendChild(document.createElement("br"));
  }
  return parrafo;
}

function crearSeccion(pos) {
  //Defino seccion con su id
  let seccion = document.createElement("div");
  seccion.id = "div" + pos;
  seccion.className = "divSeccion";

  let inTab = crearTablatura();
  let inAcord = crearInputsAcordes();
  let inLetra = crearInputLetra();

  seccion.appendChild(inTab);
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


function imprimirSeccion(seccion, puntero) {

  puntero.appendChild(imprimirTablatura(seccion.darTab()));

  let acorde = document.createElement("p");
  acorde.innerHTML = seccion.darAcorde();
  puntero.appendChild(acorde);
  puntero.appendChild(document.createElement("br"));

  let letra = document.createElement("p");
  letra.innerHTML = seccion.darLetra();
  puntero.appendChild(letra);
  puntero.appendChild(document.createElement("br"));

}

function mostrarLeccion() {
  let puntero = document.getElementById("divLeccion");
  let cant = leccionActual.secciones.length;
  for (let i = 0; i < leccionActual.secciones.length; i++) {
    imprimirSeccion(leccionActual.darSeccion(i), puntero);
  }

}