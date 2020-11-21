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

  let lec1 = new Leccion();
  lec1.titulo = "Bohemian Rhapsody";
  lec1.autor = "Queen";
  lec1.desc = "Prueba de esribir una descripcion larga de más para que la corte por algun punto a pesar de que podría capaz entrar en la lista";

  let lec2 = new Leccion();
  lec2.titulo = "Chau";
  lec2.autor = "No te va gustar";
  lec2.desc = "Prueba de esribir una descripcion larga de más para que la corte por algun punto a pesar de que podría capaz entrar en la lista";


  sistema.lecciones = [lec1, lec2];
}


function inicio() {
  levantarSistema();
  mostrarLecciones();
  // document.getElementById("botonAgregar").addEventListener("click", crearSeccion);
  // document.getElementById("botonGuardar").addEventListener("click", guardarLeccion);
}

function crearLi(lec) {
  let elem = document.createElement("li");
  elem.className = "collection-item avatar";

  let imagen = document.createElement("img");
  imagen.src = "https://cdn.discordapp.com/attachments/773925818594230293/779714431541444669/circle-flat-general-5186824a4-512.png";
  elem.appendChild(imagen);

  let titulo = document.createElement("span");
  let p = document.createElement("p");
  titulo.className = "title";
  titulo.innerHTML = lec.darTitulo();
  p.innerHTML = p.innerHTML + lec.darAutor();
  p.appendChild(document.createElement("br"));
  p.innerHTML = p.innerHTML + lec.darDesc();
  elem.appendChild(p);

  let boton = crearBoton(lec);
  elem.appendChild(boton);
  return elem;
}

function crearBoton(pos) {
  let boton = document.createElement("a");
  boton.className = "secondary-content";

  let icono = document.createElement("i");
  icono.className = "material-icons";
  icono.innerHTML = "play_arrow";
  boton.onclick = elegirLeccion(pos);
  boton.appendChild(icono);

  return boton;
}

function elegirLeccion(pos) {
  alert(pos);
}

function mostrarLecciones() {
  let cant = sistema.lecciones.length;
  let puntero = document.getElementById('divListaLecciones');
  for (let i = 0; i < cant; i++) {
    let lec = sistema.darLeccion(i);
    let elem = crearLi(lec);

    puntero.append(elem);



  }

}