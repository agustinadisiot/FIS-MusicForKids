const { Tablatura } = require("./tablatura");
const { Definiciones } = require("../common/definiciones");
const { Exceptions } = require("../common/exceptions");
const { Seccion } = require("./seccion");

//Pruebas verificarTab
describe("deberia probar el metodo verificarTab", () => {

  it("deberia probar que pasa al verificar una tablatura correcta", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "-", "-", "-", "-", "1", "-", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.verificarTab(tab)).toBe(true);
  });


  it("deberia probar que pasa al verificar null", () => {
    let secc = new Seccion();

    expect(secc.verificarTab(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar al recibir algo que no sea del tipo Tablatura", () => {
    let secc = new Seccion();

    expect(secc.verificarTab("")).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  //resto de prubas ya realizadas en las pruebas de validarTablatura en las pruebas de la clase Tablatura  

});

//Pruebas verificarLetra
describe("deberia probar el metodo verificarLetra", () => {

  it("deberia probar que pasa al verificar una letra vacia", () => {
    let secc = new Seccion();

    expect(secc.verificarLetra("")).toBe(true);
  });

  it("deberia probar que pasa al verificar una letra que es un string", () => {
    let secc = new Seccion();
    let letra = "esto es una prueba";
    expect(secc.verificarLetra(letra)).toBe(true);
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

    expect(secc.verificarAcorde([])).toBe(true);
  });


  it("deberia probar que pasa al verificar un acorde null", () => {
    let secc = new Seccion();

    expect(secc.verificarAcorde(null)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });


  it("deberia probar que pasa al verificar un acorde correcto", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "C", "B"];
    secc.acorde = acorde;

    expect(secc.verificarAcorde(acorde)).toBe(true);
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
    let cuerda = ["1", "11", "1", "-", "1", "1", "-", "-", "-", "-", "1", "-", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;

    expect(secc.darTab()).toBe(tab);
  });

  //resto de prubas ya realizadas en las pruebas de verificarTab

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

  //resto de prubas ya realizadas en las pruebas de verificarLetra

});

//Pruebas darAcorde
describe("deberia probar el metodo darAcorde", () => {

  it("deberia probar que pasa al intentar dar un acorde vacio", () => {
    let acorde = [];
    let secc = new Seccion();
    secc.acorde = acorde;

    expect(secc.darAcorde()).toEqual([]);
  });

  it("deberia probar que pasa al verificar un acorde correcto", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "C", "B"];
    secc.acorde = acorde;

    expect(secc.darAcorde(acorde)).toEqual(["A", "#D", "C", "B"]);
  });

  //resto de prubas ya realizadas en las pruebas de verificarAcorde

});

//Pruebas agregarTab
describe("deberia probar el metodo agregarTab", () => {

  it("deberia probar que pasa al intentar agregar una tablatura correcta", () => {

    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "-", "-", "-", "-", "1", "-", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.agregarTab(tab);

    expect(secc.darTab()).toBe(tab);
  });

  //resto de prubas ya realizadas en las pruebas de verificarTab

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

  //resto de prubas ya realizadas en las pruebas de verificarLetra

});

//Pruebas agregarAcorde
describe("deberia probar el metodo agregarAcorde", () => {

  it("deberia probar que pasa al intentar agregar un acorde vacio", () => {
    let acorde = [];
    let secc = new Seccion();
    secc.agregarAcorde(acorde);

    expect(secc.darAcorde()).toEqual([]);
  });

  it("deberia probar que pasa al verificar un acorde correcto", () => {
    let secc = new Seccion();
    let acorde = ["A", "#D", "C", "B"];
    secc.agregarAcorde(acorde);

    expect(secc.darAcorde(acorde)).toEqual(["A", "#D", "C", "B"]);
  });

  //resto de prubas ya realizadas en las pruebas de verificarAcorde

});

