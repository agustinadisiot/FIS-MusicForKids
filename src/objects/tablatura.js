const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");

class Tablatura {
  constructor() {
    this.cantActual = 0;
    this.cuerdas = ["", "", "", "", "", ""];
  }

  agregar(cuerdaNueva) {
    this.validarCuerda(cuerdaNueva);
    this.cuerdas[cantActual] = cuerdaNueva;
    cantActual++;
  }

  validarTablatura() {
    if (this.cantActual < 6) {
      return () => {
        throw new Error(Exceptions.UNFINISHED_OBJECT);
      };
    }
  }

  validarCuerda(cuerda) {
    if (typeof cuerda != "string") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }

    if (cuerda.length != Definiciones.largoCuerda) {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_LENGTH);
      };
    }

    for (let i = 0; i < cuerda.length; i++) {
      let sim = cuerda.charAt(i);

      if (isNaN(sim) && sim != "-") {
        return () => {
          throw new Error(Exceptions.UNEXPECTED_VALUE);
        };
      }
    }
  }

  toString() {
    return this.cuerda1 + " " + this.acorde + " " + this.letra;
  }
}

export { Seccion };
