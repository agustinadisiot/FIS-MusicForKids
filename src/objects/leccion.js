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

  //Devuelve la leccion por posicion del array
  darSeccion(pos) {
    let largo = this.secciones.length;
    if (pos >= largo || pos < 0) {
      return () => {
        throw new Error(Exceptions.OUT_OF_BOUNDS);
      };
    }

    let resp = this.verificarSeccion(this.secciones[pos]);
    if (resp != true) {
      return resp;
    }
    return this.secciones[pos];
  }

  //Devuelve el titulo de la leccion
  darTitulo() {
    let resp = this.verificarTitulo(this.titulo);
    if (resp != true) {
      return resp;
    }
    return this.titulo;
  }

  //Devuelve el nombre del autor de la leccion
  darAutor() {
    let resp = this.verificarAutor(this.autor);
    if (resp != true) {
      return resp;
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
  agregarTitulo(titulo) {
    if (this.verificarTitulo(titulo) != true) {
      return this.verificarTitulo(titulo);
    }
    this.titulo = this.capFirstLetters(titulo.trim());
  }

  //Agrega el autor a la leccion despues de verificarlo
  agregarAutor(autor) {
    if (this.verificarAutor(autor) != true) {
      return this.verificarAutor(autor);
    }
    this.autor = this.capFirstLetters(autor.trim());
  }


  agregarDesc(desc) {
    if (this.verificarDesc(desc) != true) {
      return this.verificarDesc(desc);
    }
    let resp = desc.trim();
    this.desc = resp.charAt(0).toUpperCase() + resp.slice(1);
  }

  verificarTitulo(titulo) {
    if (typeof titulo != "string") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    if (titulo.replace(/\s/g, '') == "") {
      return () => {
        throw new Error(Exceptions.UNFINISHED_OBJECT);
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
    if (typeof desc != "string") {
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
    if (typeof pal != "string") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    let spliteado = pal.split(" ");
    let largoSplit = spliteado.length;
    let ret = "";
    for (let i = 0; i < largoSplit; i++) {
      if (i < largoSplit - 1) {
        ret = ret + spliteado[i].charAt(0).toUpperCase() + spliteado[i].slice(1) + " ";
      } else {
        ret = ret + spliteado[i].charAt(0).toUpperCase() + spliteado[i].slice(1);
      }

    }
    return ret;
  }

  toString() {
    return this.secciones + " " + this.titulo + " " + this.autor + " " + this.desc;
  }


}


module.exports = {
  Leccion,
};