window.addEventListener("load", inicio);


var sistema = new Sistema();



function levantarSistema() {
  let sisGuardado = localStorage.getItem("Sistema");
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

  if (sistema.lecciones.length == 0) {
    sistemaVacio();
  }
}


function sistemaVacio() {
  const elem = document.getElementById('modalGuardar');
  const instance = M.Modal.init(elem, { dismissible: false });
  instance.open();
}

function inicio() {
  levantarSistema();
  mostrarLecciones();
  // document.getElementById("botonAgregar").addEventListener("click", crearSeccion);
  // document.getElementById("botonGuardar").addEventListener("click", guardarLeccion);
}

function crearLi(lec, pos) {
  let elem = document.createElement("li");
  elem.className = "collection-item avatar";

  let imagen = document.createElement("img");
  imagen.src = "https://cdn.discordapp.com/attachments/773925818594230293/779714431541444669/circle-flat-general-5186824a4-512.png";
  imagen.className = "circle";
  elem.appendChild(imagen);

  let titulo = document.createElement("span");

  titulo.className = "title bold";
  titulo.innerHTML = lec.darTitulo();
  elem.appendChild(titulo);

  let p = document.createElement("p");
  p.innerHTML = p.innerHTML + lec.darAutor();
  p.appendChild(document.createElement("br"));


  let desc = lec.darDesc();
  if (desc.length > 25) {
    desc = desc.slice(0, 25) + "...";
  }
  p.innerHTML = p.innerHTML + desc;
  elem.appendChild(p);

  let boton = crearBoton(pos);
  elem.appendChild(boton);
  return elem;
}

function crearBoton(pos) {
  let boton = document.createElement("a");
  boton.className = "secondary-content";
  boton.href = "#";
  let icono = document.createElement("i");
  icono.className = "material-icons medium";
  icono.innerHTML = "play_arrow";

  boton.setAttribute("onclick", "elegirLeccion(" + pos + ")");
  boton.appendChild(icono);

  return boton;
}

function elegirLeccion(pos) {
  let guardar = JSON.stringify(sistema.darLeccion(pos));
  localStorage.setItem("testLeccion", guardar);
  window.location.href = "./realizarLeccion.html";
}

function mostrarLecciones() {
  let cant = sistema.lecciones.length;
  let puntero = document.getElementById('divListaLecciones');
  for (let i = 0; i < cant; i++) {
    let lec = sistema.darLeccion(i);
    let elem = crearLi(lec, i);

    puntero.append(elem);



  }

}