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


function crearTablatura(tabActual) {
  let ancho = 1;
  let clase = "cuadroTablatura";
  let cantidadCuadrados = Definiciones.cantidadCuadradosTab;
  let tablatura = document.createElement("div");
  tablatura.className = "browser-default tablatura";
  let nomCuerdas = ["e", "B", "G", "D", "A", "E"];
  for (let cuerda = 0; cuerda < 6; cuerda++) {
    tablatura.innerHTML = tablatura.innerHTML + "" + nomCuerdas[cuerda] + " ";
    let cuerdaActual = tabActual.darCuerda(cuerda);
    for (let entrada = 0; entrada < cantidadCuadrados; entrada++) {
      let inputSolo = document.createElement("input");
      inputSolo.name = clase + "(" + cuerda + "-" + entrada + ")";
      inputSolo.readOnly = true;
      inputSolo.value = cuerdaActual[entrada];
      //inputSolo.oninput = (this.value = controlInput(this.value));
      inputSolo.size = ancho;
      inputSolo.type = "text";
      inputSolo.placeholder = "-";
      inputSolo.className = "browser-default " + clase + " cuadroMostrar";
      tablatura.appendChild(inputSolo);
    }
    if (cuerda != 6) {
      let salto = document.createElement("br");
      tablatura.appendChild(salto);
    }
  }
  return tablatura;
}

function crearInputsAcordes(acorActual) {
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
    inputSolo.readOnly = true;
    //inputSolo.value = acorActual[entrada];
    inputSolo.className = "browser-default " + clase;
    acorde.appendChild(inputSolo);
  }

  return acorde;
}

function crearInputLetra(letraActual) {
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
  entrada.readOnly = true;
  entrada.value = letraActual;

  letra.appendChild(entrada);
  return letra;
}

function imprimirSeccion(puntero, pos, seccionActual) {
  //Defino seccion con su id
  let seccion = document.createElement("div");
  seccion.id = "div" + pos;
  seccion.className = "divSeccion";

  let inTab = crearTablatura(seccionActual.darTab());
  let inAcord = crearInputsAcordes(seccionActual.darAcorde());
  let inLetra = crearInputLetra(seccionActual.darLetra());

  seccion.appendChild(inTab);
  seccion.appendChild(document.createElement("br"));
  seccion.appendChild(inAcord);
  seccion.appendChild(document.createElement("br"));
  seccion.appendChild(inLetra);
  seccion.appendChild(document.createElement("br"));
  seccion.appendChild(document.createElement("br"));

  puntero.appendChild(seccion);
}




function mostrarLeccion() {
  let puntero = document.getElementById("divLeccion");
  let cant = leccionActual.secciones.length;
  for (let i = 0; i < cant; i++) {
    imprimirSeccion(puntero, i, leccionActual.darSeccion(i));
  }

}