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



function mostrarLeccion() {


}