const { Tablatura } = require("./Tablatura");
const { Definiciones } = require("../common/definiciones");
const { Exceptions } = require("../common/exceptions");

describe("deberia probar el metodo validarCuadrado", () => {
  it("deberia probar que pasa al validar null", () => {
    let tab = new Tablatura();
    expect(tab.validarCuadrado(null)).toThrow(Exceptions.UNEXPECTED_VALUE);

  });

  it("deberia probar que pasa al validar algo que no sea un string", () => {
    let tab = new Tablatura();
    expect(tab.validarCuadrado(1)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al validar un string que no es un numero o un '-' ", () => {
    let tab = new Tablatura();
    expect(tab.validarCuadrado("a")).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al validar un string que es un numero pero menor al rango correcto", () => {
    let tab = new Tablatura();
    expect(tab.validarCuadrado("-3")).toThrow(Exceptions.OUT_OF_BOUNDS);
  });

  it("deberia probar que pasa al validar un string que es un numero pero menor al rango correcto", () => {
    let tab = new Tablatura();
    expect(tab.validarCuadrado("27")).toThrow(Exceptions.OUT_OF_BOUNDS);
  });

});