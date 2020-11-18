const { Tablatura } = require("./Tablatura");
const { Definiciones } = require("../common/definiciones");
const { Exceptions } = require("../common/exceptions");

describe("deberia probar el metodo validarCuadrado", () => {
  it("deberia probar que pasa al validar null", () => {
    let tab = new Tablatura();

    expect(tab.validarCuadrado(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
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
