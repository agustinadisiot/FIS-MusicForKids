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


  it("deberia probar que pasa al verificar un acorde correcto", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "C", "B"];
    secc.acorde = acorde;

    expect(secc.verificarAcorde(acorde)).toBeTruthy();
  });


  it("deberia probar que pasa al verificar un acorde que tenga un dato distinto a string", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", 2, "B"];
    secc.acorde = acorde;

    expect(secc.verificarAcorde(acorde)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar un acorde con un dato de mas de 3 caracteres", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "E", "BCSA"];
    secc.acorde = acorde;

    expect(secc.verificarAcorde(acorde)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al verificar un acorde con un dato que contiene numeros", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "E", "B1"];
    secc.acorde = acorde;

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

    expect(secc.darLetra()).toBe("");
  });

  it("deberia probar que pasa al intentar dar una letra que es un string", () => {
    let secc = new Seccion();
    let letra = "esto es una prueba";
    secc.letra = letra;

    expect(secc.darLetra()).toBe("esto es una prueba");
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

//Pruebas darAcorde
describe("deberia probar el metodo darAcorde", () => {

  it("deberia probar que pasa al intentar dar un acorde vacio", () => {
    let acorde = [];
    let secc = new Seccion();
    secc.acorde = acorde;

    expect(secc.darAcorde()).toEqual([]);
  });


  it("deberia probar que pasa al intentar dar un acorde null", () => {
    let acorde = null;
    let secc = new Seccion();
    secc.acorde = acorde;

    expect(secc.darAcorde()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar un acorde correcto", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "C", "B"];
    secc.acorde = acorde;

    expect(secc.darAcorde(acorde)).toEqual(["A", "#D", "C", "B"]);
  });


  it("deberia probar que pasa al intentar dar un acorde que tenga un dato distinto a string", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", 2, "B"];
    secc.acorde = acorde;

    expect(secc.darAcorde()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar dar un acorde con un dato de mas de 3 caracteres", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "E", "BCSA"];
    secc.acorde = acorde;

    expect(secc.darAcorde()).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al intentar dar un acorde con un dato que contiene numeros", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "E", "B1"];
    secc.acorde = acorde;

    expect(secc.darAcorde()).toThrow(Exceptions.UNEXPECTED_VALUE);
  });
});

//Pruebas agregarTab
describe("deberia probar el metodo agregarTab", () => {

  it("deberia probar que pasa al intentar agregar una tablatura correcta", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.agregarTab(tab);

    expect(secc.darTab()).toBe(tab);
  });


  it("deberia probar que pasa al intentar agregar un null", () => {
    let tab = null;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar agregar algo que no sea del tipo Tablatura", () => {
    let tab = "";
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda de menos", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 5;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNFINISHED_OBJECT);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda de mas", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 7;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda de largo menor al correcto", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda de largo mayor al correcto ", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda nula", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = null;
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda que no sea del tipo correcto", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = 1;
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;

    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda con un dato mayor a la cantidad de trastes de la guitarra", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "44"/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.OUT_OF_BOUNDS);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda con un dato de diferente tipo a string", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", 1/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda con un dato que es un string pero no un numero o un guion", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", "a"/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar agregar una tablatura con una cuerda con un dato que es un null", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    let cuerdaError = ["1", "11", "1", "-", "1", null/*<-dato incorrecto*/, "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerdaError, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();

    expect(secc.agregarTab(tab)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

//Pruebas agregarLetra
describe("deberia probar el metodo agregarLetra", () => {

  it("deberia probar que pasa al intentar dar una letra vacia", () => {
    let letra = "";
    let secc = new Seccion();
    secc.agregarLetra(letra);

    expect(secc.darLetra()).toBe("");
  });

  it("deberia probar que pasa al intentar dar una letra que es un string", () => {
    let secc = new Seccion();
    let letra = "esto es una prueba";
    secc.agregarLetra(letra);

    expect(secc.darLetra()).toBe("esto es una prueba");
  });

  it("deberia probar que pasa al intentar dar una letra que no sea de tipo string", () => {
    let letra = 1;
    let secc = new Seccion();

    expect(secc.agregarLetra(letra)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al verificar una letra que sea null", () => {
    let letra = null;
    let secc = new Seccion();

    expect(secc.agregarLetra(letra)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

//Pruebas agregarAcorde
describe("deberia probar el metodo agregarAcorde", () => {

  it("deberia probar que pasa al intentar agregar un acorde vacio", () => {
    let acorde = [];
    let secc = new Seccion();
    secc.agregarAcorde(acorde);

    expect(secc.darAcorde()).toEqual([]);
  });


  it("deberia probar que pasa al intentar dar un acorde null", () => {
    let acorde = null;
    let secc = new Seccion();

    expect(secc.agregarAcorde(acorde)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar un acorde correcto", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "C", "B"];
    secc.agregarAcorde(acorde);

    expect(secc.darAcorde(acorde)).toEqual(["A", "#D", "C", "B"]);
  });


  it("deberia probar que pasa al intentar dar un acorde que tenga un dato distinto a string", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", 2, "B"];

    expect(secc.agregarAcorde(acorde)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al intentar dar un acorde con un dato de mas de 3 caracteres", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "E", "BCSA"];

    expect(secc.agregarAcorde(acorde)).toThrow(Exceptions.UNEXPECTED_LENGTH);
  });


  it("deberia probar que pasa al intentar dar un acorde con un dato que contiene numeros", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "E", "B1"];

    expect(secc.agregarAcorde(acorde)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });
});

