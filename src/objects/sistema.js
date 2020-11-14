import { Leccion } from './leccion.js';

class Sistema {
  constructor() {
    this.lecciones = [];
  }

  toString() {
    return this.lecciones;
  }

  agregarLeccion() {
    let nuevaLeccion = new Leccion(titulo, autor, bpm, desc);
    this.lecciones.push(nuevaLeccion);
  }

  borrarLeccion(titulo) {
    let posAborrar = -1;
    for (let i = 0; i < this.lecciones.length; i++) {
      if (titulo == this.lecciones[i].titulo) {
        posAborrar = i;
      }
    }
    if (posAborrar != -1) {
      this.lecciones.splice(posAborrar, 1);
    }
  }
}