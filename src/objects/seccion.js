const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");
const { Tablatura } = require("./tablatura");

class Seccion {
  constructor(tab, acorde, letra) {
    //if (this.verificarTab(tab) != true) {
    //  return this.verificarTab(tab);
    //}
    this.tab = new Tablatura();
    this.acorde = [];
    this.letra = "";
  }

  //Devuelve la tablatura de la seccion.
  darTab() {
    if (this.verificarTab(this.tab) != true) {
      return this.verificarTab(this.tab);
    }
    return this.tab;
  }

  //Devuelve los acordes de la seccion.
  darAcorde() {
    if (this.verificarAcorde(this.acorde) != true) {
      return this.verificarAcorde(this.acorde);
    }
    return this.acorde;
  }

  //Devuelve la letra de la seccion.
  darLetra() {
    if (this.verificarLetra(this.letra) != true) {
      return this.verificarLetra(this.letra);
    }
    return this.letra;
  }

  //Verifica que la tab de la seccion sea una tablatura y que cumpla con todos los requisitos definidos en la funcion validarTablatura de la clase Tablatura.
  verificarTab(tab) {
    if (!(tab instanceof Tablatura)) {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    } else if (tab.validarTablatura() != true) {
      return tab.validarTablatura();
    }
    return true;
  }

  //Verifica que el acorde sea un string.
  verificarAcorde(acorde) {
    if (typeof acorde != "string") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    return true;
  }

  //Verifica que la letra sea un string.
  verificarLetra(letra) {
    if (typeof letra != "string") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    return true;
  }


  toString() {
    return this.tab + " " + this.acorde + " " + this.letra;
  }
}

module.exports = {
  Seccion,
};
