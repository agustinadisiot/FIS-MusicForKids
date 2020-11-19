<<<<<<< HEAD
const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");
=======

const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");
const { Tablatura } = require("./tablatura");
const { Seccion } = require("./seccion");
const { Leccion } = require("./leccion");
>>>>>>> 7de121a07bc94ffb6506aaf04cd03177ef859d6c

class Sistema {
  constructor() {
    this.lecciones = [];
  }

  toString() {
    let ret = "";
    for (let i = 0; i < this.lecciones.length; i++) {
      ret = ret + this.lecciones[i].darTitulo();
    }
    return ret;
  }

  agregarLeccion() {
    let nuevaLeccion = new Leccion(titulo, autor, bpm, desc);
    this.lecciones.push(nuevaLeccion);
  }

  borrarLeccion(titulo) {
    let posAborrar = -1;
    for (let i = 0; i < this.lecciones.length; i++) {
      if (titulo == this.lecciones[i].titulo) {
        posAborrar = i;
      }
    }
    if (posAborrar != -1) {
      this.lecciones.splice(posAborrar, 1);
    }
  }
}

module.exports = {
<<<<<<< HEAD
  Tablatura,
};
=======
  Sistema,
};
>>>>>>> 7de121a07bc94ffb6506aaf04cd03177ef859d6c
