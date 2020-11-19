import { Seccion } from './seccion.js';
class Leccion {
  constructor() {
    this.secciones = [];
    this.titulo = "";
    this.autor = "";
    this.bpm = 0;
    this.desc = "";
  }
  
  toString() {
    return this.secciones + " " + this.titulo + " " + this.autor + " " + this.bpm + " " + this.desc;
  }

  agregarSeccion(tab, acorde, letra) {
    let nuevaSeccion = new Seccion(tab, acorde, letra);
    this.secciones.push(nuevaSeccion);
  }
}


export { Leccion };