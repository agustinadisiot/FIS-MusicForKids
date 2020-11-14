class Tablatura {
  constructor() {
    this.cantActual = 0;
    this.cuerda1 = [];
    this.cuerda2 = [];
    this.cuerda3 = [];
    this.cuerda4 = [];
    this.cuerda5 = [];
    this.cuerda6 = [];
  }

  agregar(cuerdaNueva) {
    if (validarCuerda(cuerdaNueva)) {

    }


  }


  validarCuerda(cuerda) {

    // try {
    //   if(typeof cuerda != "object"){
    //     throw new Error();
    //   }

    // }
    // catch () {

    // }
    if (typeof cuerda != "object") {

    }

    for (let i = 0; i < cuerda.length; i++) {

    }
  }


  toString() {
    return this.cuerda1 + " " + this.acorde + " " + this.letra;
  }
}

export { Seccion };