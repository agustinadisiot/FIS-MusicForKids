const { Tablatura } = require("./Tablatura");
const { Definiciones } = require("../common/definiciones");
const { Exceptions } = require("../common/exceptions");

describe("deberia probar el metodo validarCuerda", () => {
  it("deberia probar que pasa al validar null", () => {
    let tab = new Tablatura();

    expect(tab.validarCuerda(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

describe("deberia probar el metodo validarCuerda", () => {
  it("deberia probar que pasa al validar cuerda vacio", () => {
    let tab = new Tablatura();
    let cuerdaAux = [];
    expect(tab.validarCuerda(cuerdaAux)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });

});

describe("deberia probar el metodo validarCuerda", () => {
  it("deberia probar que pasa al validar cuerda de largo 5", () => {
    let tab = new Tablatura();
    let cuerdaAux = [1, "-", "-", 4, "-"];
    expect(tab.validarCuerda(cuerdaAux)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });

});

describe("deberia probar el metodo validarCuerda", () => {
  it("deberia probar que pasa al validar cuerda de un tipo incorrecto", () => {
    let tab = new Tablatura();
    let cuerdaAux = 1;
    expect(tab.validarCuerda(cuerdaAux)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});
