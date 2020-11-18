const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");
const { Tablatura } = require("./tablatura");

class Seccion {
  constructor(tab, acorde, letra) {
    this.tab = tab;
    this.acorde = acorde;
    this.letra = letra;
  }

  darTab() {
    if (this.tab == null) {
      return () => {
        throw new Error(Exceptions.UNFINISHED_OBJECT);
      };
    }
    if (this.tab.validarTablatura() != true) {
      return this.tab.validarTablatura();
    }
  }

  verificarAcorde() {

  }

  verificarLetra() {

  }


  toString() {
    return this.tab + " " + this.acorde + " " + this.letra;
  }
}
module.exports = {
  Seccion,
};
