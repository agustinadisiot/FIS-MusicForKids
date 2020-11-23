// const { Exceptions } = require("../common/exceptions");
// const { Definiciones } = require("../common/definiciones");
// const { Tablatura } = require("./tablatura");

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
      if (/\d/.test(acorde[i])) {
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
    let tab = this.tab;
    let resp1 = this.verificarTab(tab);
    if (resp1 != true) {
      return resp1;
    }
    let acorde = this.acorde;

    let resp2 = this.verificarAcorde(acorde);
    if (resp2 != true) {
      return resp2;
    }
    let letra = this.letra;
    let resp3 = this.verificarLetra(letra);
    if (resp3 != true) {
      return resp3;
    }
    let retorno = this.tab.toString() + " " + this.acorde + " " + this.letra;
    return retorno;
  }

}

// module.exports = {
//   Seccion,
// };
