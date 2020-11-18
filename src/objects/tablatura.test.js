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

describe("deberia probar el metodo validarCuerda", () => {

  it("deberia probar que pasa al validar null", () => {
    let tab = new Tablatura();
    expect(tab.validarCuerda(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al validar cuerda vacio", () => {
    let tab = new Tablatura();
    let cuerdaAux = [];
    expect(tab.validarCuerda(cuerdaAux)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });

  it("deberia probar que pasa al validar cuerda de largo 5", () => {
    let tab = new Tablatura();
    let cuerdaAux = [1, "-", "-", 4, "-"];
    expect(tab.validarCuerda(cuerdaAux)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });

  it("deberia probar que pasa al validar cuerda de un tipo incorrecto", () => {
    let tab = new Tablatura();
    let cuerdaAux = 1;
    expect(tab.validarCuerda(cuerdaAux)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

describe("deberia probar el metodo agregarCuerda", () => {
  it("deberia probar que pasa al agregar null", () => {
    let tab = new Tablatura();
    expect(tab.agregarCuerda(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al agregar algo que no sea un objeto cuerda", () => {
    let tab = new Tablatura();
    expect(tab.agregarCuerda(1)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al agregar un array vacio", () => {
    let tab = new Tablatura();
    let cuerda = [];
    expect(tab.agregarCuerda(cuerda)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });

});

