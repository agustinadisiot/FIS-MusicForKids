import { Seccion } from "./seccion.js";

class Leccion {
  constructor(titulo, autor, bpm, desc) {
    this.secciones = [];
    this.titulo = titulo;
    this.autor = autor;
    this.bpm = bpm;
    this.desc = desc;
  }

  toString() {
    return (
      this.secciones +
      " " +
      this.titulo +
      " " +
      this.autor +
      " " +
      this.bpm +
      " " +
      this.desc
    );
  }

  agregarSeccion(tab, acorde, letra) {
    let nuevaSeccion = new Seccion(tab, acorde, letra);
    this.secciones.push(nuevaSeccion);
  }
}

export { Leccion };
