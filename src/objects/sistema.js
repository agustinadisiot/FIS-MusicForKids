// const { Exceptions } = require("../common/exceptions");
// const { Definiciones } = require("../common/definiciones");
// const { Tablatura } = require("./tablatura");
// const { Seccion } = require("./seccion");
// const { Leccion } = require("./leccion");

class Sistema {
  constructor() {
    this.lecciones = [];
  }

  toString() {
    let ret = "";
    for (let i = 0; i < this.lecciones.length; i++) {
      ret = ret + this.lecciones[i].darTitulo() + " ";
    }
    return ret;
  }

  //Devuelve la leccion por titulo
  darLeccion(titulo) {
    for (let i = 0; i < this.lecciones.length; i++) {
      if (this.lecciones[i].darTitulo == titulo) {
        if (this.verificarLeccion(this.lecciones[i]) != true) {
          return this.verificarLeccion(this.lecciones[i]);
        }
        return this.lecciones[i];
      }
    }
  }

  //Valida y si cumple la verificacion, agrega la leccion nueva a la siguiente posicion vacia.
  agregarLeccion(lecc) {
    if (this.verificarLeccion(lecc) != true) {
      return this.verificarLeccion(lecc);
    }
    this.lecciones.push(lecc);
  }


  verificarLeccion(lec) {
    if (!(lec instanceof Leccion)) {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    if (lec.verificarTitulo(lec.titulo) != true) {
      return lec.verificarTitulo(lec.titulo);
    }
    if (lec.verificarAutor(lec.autor) != true) {
      return lec.verificarAutor(lec.autor);
    }
    if (lec.verificarDesc(lec.desc) != true) {
      return sec.verificarTab(lec.desc);
    }
    for (let i = 0; i < lec.secciones.length; i++) {
      if (lec.verificarSeccion(lec.secciones[i]) != true) {
        return sec.verificarSeccion(lec.secciones[i]);
      }
    }
    return true;
  }


}

// module.exports = {
//   Sistema,
// };
