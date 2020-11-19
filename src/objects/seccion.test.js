const { Tablatura } = require("./Tablatura");
const { Definiciones } = require("../common/definiciones");
const { Exceptions } = require("../common/exceptions");
const { Seccion } = require("./Seccion");

//Pruebas verificarTab
describe("deberia probar el metodo verificarTab", () => {

  it("deberia probar que pasa al verificar una tablatura correcta", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toBeTruthy();
  });


  it("deberia probar que pasa al verificar null", () => {
    let secc = new Seccion();

    expect(secc.verificarTab(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar al recibir algo que no sea del tipo Tablatura", () => {
    let secc = new Seccion();

    expect(secc.verificarTab("")).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda de menos", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 5;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.UNFINISHED_OBJECT);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda de mas", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 7;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda de largo menor al correcto", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda de largo mayor al correcto ", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda nula", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = null;
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda que no sea del tipo correcto", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = 1;
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda con un dato mayor a la cantidad de trastes de la guitarra", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "44"/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.OUT_OF_BOUNDS);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda con un dato de diferente tipo a string", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", 1/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda con un dato que es un string pero no un numero o un guion", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "a"/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar una tablatura con una cuerda con un dato que es un null", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", null/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

//Pruebas verificarLetra
describe("deberia probar el metodo verificarLetra", () => {

  it("deberia probar que pasa al verificar una letra vacia", () => {
    let secc = new Seccion();

    expect(secc.verificarLetra("")).toBeTruthy();
  });

  it("deberia probar que pasa al verificar una letra que es un string", () => {
    let secc = new Seccion();
    let letra = "esto es una prueba"
    expect(secc.verificarLetra(letra)).toBeTruthy();
  });

  it("deberia probar que pasa al verificar una letra que no sea de tipo string", () => {
    let secc = new Seccion();

    expect(secc.verificarLetra(1)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al verificar una letra que sea null", () => {
    let secc = new Seccion();

    expect(secc.verificarLetra(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

//Pruebas verificarAcorde
describe("deberia probar el metodo verificarAcorde", () => {

  it("deberia probar que pasa al verificar un acorde vacio", () => {
    let secc = new Seccion();

    expect(secc.verificarAcorde([])).toBeTruthy();
  });


  it("deberia probar que pasa al verificar un acorde null", () => {
    let secc = new Seccion();

    expect(secc.verificarAcorde(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar un acorde que tenga un dato distinto a string", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", 2, "B"];

    expect(secc.verificarAcorde(acorde)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar un acorde con un dato de mas de 3 caracteres", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "E", "BCSA"];

    expect(secc.verificarAcorde(acorde)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al verificar un acorde con un dato que contiene numeros", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "E", "B1"];

    expect(secc.verificarAcorde(acorde)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });
});

//Pruebas darTab
describe("deberia probar el metodo darTab", () => {

  it("deberia probar que pasa al intentar dar una tablatura correcta", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toBe(tab);
  });


  it("deberia probar que pasa al intentar dar un null", () => {
    let tab = null;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar dar algo que no sea del tipo Tablatura", () => {
    let tab = "";
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda de menos", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 5;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNFINISHED_OBJECT);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda de mas", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 7;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda de largo menor al correcto", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda de largo mayor al correcto ", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda nula", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = null;
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda que no sea del tipo correcto", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = 1;
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda con un dato mayor a la cantidad de trastes de la guitarra", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "44"/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.OUT_OF_BOUNDS);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda con un dato de diferente tipo a string", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", 1/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda con un dato que es un string pero no un numero o un guion", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "a"/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar dar una tablatura con una cuerda con un dato que es un null", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", null/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

//Pruebas darLetra
describe("deberia probar el metodo darLetra", () => {

  it("deberia probar que pasa al intentar dar una letra vacia", () => {
    let letra = "";
    let secc = new Seccion();
    secc.letra = letra;

    expect(secc.darLetra()).toBe(letra);
  });

  it("deberia probar que pasa al intentar dar una letra que es un string", () => {
    let secc = new Seccion();
    let letra = "esto es una prueba";
    secc.letra = letra;

    expect(secc.darLetra()).toBe(letra);
  });

  it("deberia probar que pasa al intentar dar una letra que no sea de tipo string", () => {
    let letra = 1;
    let secc = new Seccion();
    secc.letra = letra;

    expect(secc.darLetra()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al verificar una letra que sea null", () => {
    let letra = null;
    let secc = new Seccion();
    secc.letra = letra;

    expect(secc.darLetra()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});
