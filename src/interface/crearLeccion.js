window.addEventListener('load', inicio);

var cantSecciones = 1;
var actual = 1;

function inicio() {
  document.getElementById("botonAgregar").addEventListener("click", agregarSeccion);
  document.getElementById("botonGuardar").addEventListener("click", guardarLeccion);

}

function crearTablatura() {
  var ancho = 1;
  var clase = 'cuadroTablatura';
  var cantidadCuadrados = 25;
  var tablatura = document.createElement('div');
  tablatura.className = 'tablatura';

  for (let cuerda = 1; cuerda <= 6; cuerda++) {

    for (let entrada = 1; entrada <= cantidadCuadrados; entrada++) {
      let inputSolo = document.createElement('input');
      inputSolo.size = ancho;
      inputSolo.type = 'number';
      inputSolo.placeholder = '-';
      inputSolo.className = clase;
      tablatura.appendChild(inputSolo);

    }
    if (cuerda != 6) {
      let salto = document.createElement('br');
      tablatura.appendChild(salto);
    }
  }
  return tablatura;
}


function crearTextInput(nombre) {
  var largo = 30;
  var entrada = document.createElement('input');
  entrada.size = largo;
  entrada.type = 'text';

  if (nombre == 'acorde') {
    entrada.placeholder = "Ingrese los acordes aqui";
  } else {
    entrada.placeholder = "Ingrese la letras aqui";
  }

  entrada.name = nombre;
  entrada.className = nombre;
  return entrada;
}


function agregarSeccion() {
  //Defino seccion con su id
  var seccion = document.createElement('div');
  seccion.id = 'div' + cantSecciones;
  seccion.className = 'divSeccion';
  cantSecciones++;

  var bloque_form = document.createElement('form');
  var inTab = crearTablatura();
  var inAcord = crearTextInput('acorde');
  var inLetra = crearTextInput('letra');

  bloque_form.appendChild(inTab);
  bloque_form.appendChild(document.createElement('br'));
  bloque_form.appendChild(inAcord);
  bloque_form.appendChild(document.createElement('br'));
  bloque_form.appendChild(inLetra);
  bloque_form.appendChild(document.createElement('br'));
  bloque_form.appendChild(document.createElement('br'));
  seccion.appendChild(bloque_form);

  var puntero;

  puntero = document.getElementById('divLeccion');
  puntero.appendChild(seccion);



}


function guardarLeccion() {
  
}