const { Tablatura } = require("./tablatura");
const { Definiciones } = require("../common/definiciones");
const { Exceptions } = require("../common/exceptions");

//Pruebas validarCuadrado
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

//Pruebas validarCuerda
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

//Pruebas validarTablatura
describe("deberia probar el metodo validarTablatura", () => {

  it("deberia probar que pasa al verificar una tablatura correcta", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    expect(tab.validarTablatura()).toBe(true);
  });



  it("deberia probar que pasa al verificar una tablatura con una cuerda de menos", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 5;

    expect(tab.validarTablatura()).toThrow(Exceptions.UNFINISHED_OBJECT);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda de mas", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 7;

    expect(tab.validarTablatura()).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda de largo menor al correcto", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    expect(tab.validarTablatura()).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda de largo mayor al correcto ", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    expect(tab.validarTablatura()).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda nula", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = null;
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    expect(tab.validarTablatura()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda que no sea del tipo correcto", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = 1;
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    expect(tab.validarTablatura()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda con un dato mayor a la cantidad de trastes de la guitarra", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "44"/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    expect(tab.validarTablatura()).toThrow(Exceptions.OUT_OF_BOUNDS);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda con un dato de diferente tipo a string", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", 1/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    expect(tab.validarTablatura()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda con un dato que es un string pero no un numero o un guion", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "a"/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    expect(tab.validarTablatura()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda con un dato que es un null", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", null/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    expect(tab.validarTablatura()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

//Prueba agregarCuerda
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

//Puebas darCuerda
describe("deberia probar el metodo darCuerda", () => {

  it("deberia probar que pasa al intentar dar null", () => {
    let tab = new Tablatura();
    expect(tab.darCuerda(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al intentar dar numero negativo", () => {
    let tab = new Tablatura();
    let num = -1;
    expect(tab.darCuerda(num)).toThrow(Exceptions.OUT_OF_BOUNDS);
  });

  it("deberia probar que pasa al intentar dar numero mayor a 5", () => {
    let tab = new Tablatura();
    let num = 10;
    expect(tab.darCuerda(num)).toThrow(Exceptions.OUT_OF_BOUNDS);
  });

  it("deberia probar que pasa al intentar dar numero negativo", () => {
    let tab = new Tablatura();
    let num = -1;
    expect(tab.darCuerda(num)).toThrow(Exceptions.OUT_OF_BOUNDS);
  });



});

//Pruebas darCantActual
describe("deberia probar el metodo darCantActual", () => {

  it("deberia probar que pasa al intentar dar null", () => {
    let tab = new Tablatura();
    tab.cantActual = null;

    expect(tab.darCantActual()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al intentar dar aglo que no sea un numero", () => {
    let tab = new Tablatura();
    tab.cantActual = "no numero";

    expect(tab.darCantActual()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al intentar dar aglo que no sea un numero mayor a 6", () => {
    let tab = new Tablatura();
    tab.cantActual = 7;

    expect(tab.darCantActual()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al intentar dar aglo que no sea un numero menor a 0", () => {
    let tab = new Tablatura();
    tab.cantActual = -1;

    expect(tab.darCantActual()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al intentar dar correcto", () => {
    let tab = new Tablatura();
    tab.cantActual = 5;

    expect(tab.darCantActual()).toBe(5);
  });

});
