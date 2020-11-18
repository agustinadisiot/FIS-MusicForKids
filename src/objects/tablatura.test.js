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

  // it("should test sum method returning 8", () => {
  //   const valueA = 5;
  //   const valueB = 3;
  //   expect(sum(valueA, valueB)).toBe(8);
  // });
});

// describe("should test div method", () => {
//   it("should test div method returning 2", () => {
//     const valueA = 4;
//     const valueB = 2;
//     expect(div(valueA, valueB)).toBe(2);
//   });
//   it("should test div method returning an division by zero exception", () => {
//     const valueA = 4;
//     const valueB = 0;
//     expect(div(valueA, valueB)).toThrow(Exceptions.DIVISION_BY_ZERO);
//   });
// });

describe("deberia probar el metodo agregarCuerda", () => {
  it("deberia probar que pasa al agregar null", () => {
    let tab = new Tablatura();
    expect(tab.agregarCuerda(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al agregar algo que no sea un objeto cuerda", () => {
    let tab = new Tablatura();
    expect(tab.agregarCuerda(1)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al agregar null", () => {
    let tab = new Tablatura();
    expect(tab.agregarCuerda().toThrow(Exceptions.UNEXPECTED_LENGTH);
  });
});
