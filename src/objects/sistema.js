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

  //Devuelve la leccion por posicion
  darLeccion(pos) {

    let largo = this.lecciones.length;
    if (pos >= largo || pos < 0) {
      return () => {
        throw new Error(Exceptions.OUT_OF_BOUNDS);
      };
    }
    let resp = this.verificarLeccion(this.lecciones[pos]);
    if (resp != true) {
      return resp;
    }
    return this.lecciones[pos];
  }

  //Valida y si cumple la verificacion, agrega la leccion nueva a la siguiente posicion vacia.
  agregarLeccion(lecc) {
    let resp = this.verificarLeccion(lecc);
    if (resp != true) {
      return resp;
    }
    this.lecciones.push(lecc);
  }

  //Verifica si la leccion es correcta
  verificarLeccion(lec) {
    if (!(lec instanceof Leccion)) {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }

    let respTitulo = lec.verificarTitulo(lec.titulo);
    if (respTitulo != true) {
      return respTitulo;
    }

    let respAutor = lec.verificarAutor(lec.autor);
    if (respAutor != true) {
      return respAutor;
    }

    let respDesc = lec.verificarDesc(lec.desc);
    if (respDesc != true) {
      return respDesc;
    }

    for (let i = 0; i < lec.secciones.length; i++) {
      let respSecc = lec.verificarSeccion(lec.secciones[i]);
      if (respSecc != true) {
        return respSecc;
      }
    }

    return true;
  }


}

// module.exports = {
//   Sistema,
// };
