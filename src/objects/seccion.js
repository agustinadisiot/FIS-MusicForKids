const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");
const { Tablatura } = require("./tablatura");

class Seccion {
  constructor() {
    this.tab = new Tablatura();
    this.acorde = [];
    this.letra = "";
  }

  //Devuelve la tablatura de la seccion.
  darTab() {

    let resp = this.verificarTab(this.tab);
    if (resp != true) {
      return resp;
    }
    return this.tab;
  }

  //Devuelve los acordes de la seccion.
  darAcorde() {

    let resp = this.verificarAcorde(this.acorde);
    if (resp != true) {
      return resp;
    }
    return this.acorde;
  }

  //Devuelve la letra de la seccion.
  darLetra() {
    let resp = this.verificarLetra(this.letra);
    if (resp != true) {
      return resp;
    }
    return this.letra;
  }

  //Agrega la tablatura a la seccion
  agregarTab(tab) {
    let resp = this.verificarTab(tab);
    if (resp != true) {
      return resp;
    }
    this.tab = tab;
  }

  //Agrega los acordes a la seccion
  agregarAcorde(acorde) {

    let resp = this.verificarAcorde(acorde);
    if (resp != true) {
      return resp;
    }
    this.acorde = acorde;
  }

  //Agrega la letra a la seccion
  agregarLetra(letra) {

    let resp = this.verificarLetra(letra);
    if (resp != true) {
      return resp;
    }
    this.letra = letra;
  }

  //Verifica que la tab de la seccion sea una tablatura y que cumpla con todos los requisitos definidos en la funcion validarTablatura de la clase Tablatura.
  verificarTab(tab) {
    if (!(tab instanceof Tablatura)) {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    let resp = tab.validarTablatura();
    if (resp != true) {
      return resp;
    }
    return true;
  }

  //Verifica que el acorde sea un string.
  verificarAcorde(acorde) {
    if (acorde == null) {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }
    if (typeof acorde != "object") {
      return () => {
        throw new Error(Exceptions.UNEXPECTED_VALUE);
      };
    }

    let largo = acorde.length;
    for (let i = 0; i < largo; i++) {

      if (typeof acorde[i] != "string") {
        return () => {
          throw new Error(Exceptions.UNEXPECTED_VALUE);
        };
      }

      if (acorde[i].length >= 3) {
        return () => {
          throw new Error(Exceptions.UNEXPECTED_LENGTH);
        };
      }

      var hasNumber = /\d/;
      if (hasNumber.test(acorde[i])) {
        return () => {
          throw new Error(Exceptions.UNEXPECTED_VALUE);
        };
      }

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
