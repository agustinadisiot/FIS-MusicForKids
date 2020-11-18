class Seccion {
  constructor(tab, acorde, letra) {
    this.tab = tab;
    this.acorde = acorde;
    this.letra = letra;
  }
  toString() {
    return this.tab + " " + this.acorde + " " + this.letra;
  }
}

export { Seccion };
