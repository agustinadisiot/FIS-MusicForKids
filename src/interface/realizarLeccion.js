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