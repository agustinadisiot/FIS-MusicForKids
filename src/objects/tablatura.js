const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");

class Tablatura {
  constructor() {
    this.cantActual = 0;
    this.cuerdas = [[], [], [], [], [], []];
  }

  //Valida y si cumple la verificacion, agrega la a cuerda nueva a la siguiente posicion vacia.
  agregar(cuerdaNueva) {
    this.validarCuerda(cuerdaNueva);
    this.cuerdas[cantActual] = cuerdaNueva;
    this.cantActual++;
  }

  darCantActual() {
    return this.cantActual;
  }

  //Devuelve la cuerda que se pide, el valor debe ser entre 0 y 5, valida que la tablatura este terminada.
  darCuerda(num) {
    this.validarTablatura();

    if (typeof num != "number") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }

    if (num > 5 || num < 0) {
      return () => {
        throw new Error(Exceptions.OUT_OF_BOUNDS);
      };
    }

    var retorno = this.cuerdas[num];

    this.validarCuerda(retorno);
    return retorno;
  }

  //Valida que la tablatura haya sido terminada. O sea que todas las cuerdas hayan sido agregadas.
  validarTablatura() {
    if (this.cantActual < 6) {
      return () => {
        throw new Error(Exceptions.UNFINISHED_OBJECT);
      };
    }
  }

  //Valida que cada elemento de la cuerda en toda la tablatura (largo definido en definiciones) cumpla con los requisitos.
  validarCuerda(cuerda) {
    if (typeof cuerda != "object") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }

    if (cuerda.length != Definiciones.cantidadCuadradosTab) {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_LENGTH);
      };
    }

    for (let i = 0; i < cuerda.length; i++) {
      let cuadrado = cuerda[i];
      this.validarCuadrado(cuadrado);
    }
  }

  //Valida la accion en un compas especifico en una cuerda de la tablatura.
  //Si el dato ingresado no es un "-" o un numero menor a la cantidad de trastes, tira un error.
  validarCuadrado(cuadrado) {
    if (typeof cuadrado != "string") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    if (isNaN(cuadrado)) {
      if (cuadrado != "-") {
        return () => {
          throw new Error(Exceptions.UNEXPECTED_VALUE);
        };
      }
    } else {
      let num = parseInt(cuadrado);
      if (num < 0 || num > Definiciones.cantidadTrastes) {
        return () => {
          throw new Error(Exceptions.OUT_OF_BOUNDS);
        };
      }
    }
  }

  toString() {
    return this.cuerda1 + " " + this.acorde + " " + this.letra;
  }
}

module.exports = {
  Tablatura,
};
