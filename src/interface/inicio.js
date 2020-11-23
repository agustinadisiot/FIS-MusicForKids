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


function guardarSistema() {
  localStorage.setItem('testSistema', JSON.stringify(sistema));
}

function inicio() {
  levantarSistema();
}

