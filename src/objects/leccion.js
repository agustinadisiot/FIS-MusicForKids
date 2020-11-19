
const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");
const { Tablatura } = require("./tablatura");
const { Seccion } = require("./seccion");

class Leccion {
  constructor() {
    this.secciones = [];
    this.titulo = "";
    this.autor = "";
    this.desc = "";
  }

  toString() {
    return this.secciones + " " + this.titulo + " " + this.autor + " " + this.desc;
  }

  //Devuelve la leccion por posicion del array
  darSeccion(pos) {
    if (this.verificarSeccion(this.secciones[pos]) != true) {
      return this.verificarSeccion(this.secciones[pos]);
    }
    return this.secciones[pos];
  }

  //Devuelve el titulo de la leccion
  darTitulo() {
    if (this.verificarTitulo(this.titulo) != true) {
      return this.verificarTitulo(this.titulo);
    }
    return this.titulo;
  }

  //Devuelve el nombre del autor de la leccion
  darAutor() {
    if (this.verificarAutor(this.autor) != true) {
      return this.verificarAutor(this.autor);
    }
    return this.autor;
  }

  //Devuelve la descripcion de la leccion
  darDesc() {
    if (this.verificarDesc(this.desc) != true) {
      return this.verificarDesc(this.desc);
    }
    return this.desc;
  }

  //Valida la seccion y si es correcta, la agrega a la leccion
  agregarSeccion(seccion) {
    if (this.verificarSeccion(seccion) != true) {
      return this.verificarSeccion(seccion);
    }
    this.secciones.push(seccion);
  }

  //Agrega el titulo a la leccion
  agregarTitulo(title) {
    if (this.verificarTitulo(title) != true) {
      return this.verificarTitle(title);
    }
    this.titulo = title.charAt(0).toUpperCase() + title.slice(1);
  }

  //Agrega el autor a la leccion despues de verificarlo
  agregarAutor(autor) {
    if (this.verificarAutor(autor) != true) {
      return this.verificarAutor(autor);
    }
    this.autor = this.capFirstLetters(autor);
  }


  agregarDesc(desc) {
    if (this.verificarDesc(desc) != true) {
      return this.verificarDesc(desc);
    }
    this.desc = desc.charAt(0).toUpperCase() + desc.slice(1);;
  }

  verificarTitulo(title) {
    if (typeof title != "string") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    return true;
  }

  verificarAutor(autor) {
    if (typeof autor != "string") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    return true;
  }

  verificarDesc(desc) {
    if (typeof letra != "string") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    return true;
  }


  verificarSeccion(sec) {
    if (!(sec instanceof Seccion)) {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    if (sec.verificarAcorde(sec.acorde) != true) {
      return sec.verificarAcorde(sec.acorde);
    }
    if (sec.verificarLetra(sec.letra) != true) {
      return sec.verificarLetra(sec.letra);
    }
    if (sec.verificarTab(sec.tab) != true) {
      return sec.verificarTab(sec.tab);
    }

    return true;
  }


  //Pasa a mayusculas la primer letra de todas las palabras del string
  capFirstLetters(pal) {
    var spliteado = pal.split(" ");
    var ret = "";
    for (let i = 0; i < spliteado.length; i++) {
      ret = ret + spliteado[i].charAt(0).toUpperCase() + spliteado[i].slice(1) + " ";
    }
    return ret;
  }

}


module.exports = {
  Leccion,
};