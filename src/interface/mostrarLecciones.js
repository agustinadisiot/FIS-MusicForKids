window.addEventListener("load", inicio);


var sistema = null;



function levantarSistema() {
  let guardado = null;
  guardado = localStorage.getItem("testSistema");
  if (guardado) {
    sistema = Object.assign(new Sistema, JSON.parse(guardado));
  } else {
    sistema = new Sistema();
  }
}


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