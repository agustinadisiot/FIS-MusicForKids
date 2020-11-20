const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");
const { Tablatura } = require("./tablatura");
const { Seccion } = require("./seccion");
const { Leccion } = require("./leccion");
const { Sistema } = require("./sistema");

//Pruebas vaerificarLeccion
describe("deberia probar el metodo verificarLeccion", () => {
  it("deberia probar que pasa al validar una leccion correcta", () => {
    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;
    let acorde = ["A", "#D", "C", "B"];
    secc.acorde = acorde;
    let letra = "esto es una prueba";
    secc.letra = letra;
    let lecc = new Leccion();
    lecc.secciones = [secc, secc, secc];
    lecc.titulo = "titulo leccion";
    lecc.autor = "autor leccion";
    lecc.desc = "descripcion de la leccion";
    let sis = new Sistema();

    expect(sis.verificarLeccion(lecc)).toBe(true);
  });

  it("deberia probar que pasa al validar una leccion que no es del tipo leccion", () => {
    let lecc = 22;
    let sis = new Sistema();

    expect(sis.verificarLeccion(lecc)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al validar una leccion que sea null", () => {
    let lecc = null;
    let sis = new Sistema();

    expect(sis.verificarLeccion(lecc)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  //resto de pruebas ya realizadas en las pruebas de verificarTitulo, verificarAutor, verificarDesc, verificarSeccion de la clase leccion.
});

//Pruebas darLeccion
describe("deberia probar el metodo verificarLeccion", () => {
  it("deberia probar que pasa al dar una leccion correcta", () => {
    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;
    let acorde = ["A", "#D", "C", "B"];
    secc.acorde = acorde;
    let letra = "esto es una prueba";
    secc.letra = letra;
    let lecc = new Leccion();
    lecc.secciones = [secc, secc, secc];
    lecc.titulo = "titulo leccion";
    lecc.autor = "autor leccion";
    lecc.desc = "descripcion de la leccion";
    let sis = new Sistema();
    sis.lecciones = [lecc, lecc, lecc];

    expect(sis.darLeccion(0)).toBe(lecc);
  });

  it("deberia probar que pasa al dar una leccion intentando pasar una posision mayor al largo del array de lecciones", () => {
    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;
    let acorde = ["A", "#D", "C", "B"];
    secc.acorde = acorde;
    let letra = "esto es una prueba";
    secc.letra = letra;
    let lecc = new Leccion();
    lecc.secciones = [secc, secc, secc];
    lecc.titulo = "titulo leccion";
    lecc.autor = "autor leccion";
    lecc.desc = "descripcion de la leccion";
    let sis = new Sistema();
    sis.lecciones = [lecc, lecc, lecc];

    expect(sis.darLeccion(5)).toThrow(Exceptions.OUT_OF_BOUNDS);
  });

  //resto de pruebas ya realizadas en las pruebas verificarLeccion
});

//Pruebas darLeccion
describe("deberia probar el metodo verificarLeccion", () => {
  it("deberia probar que pasa al dar una leccion correcta", () => {
    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "1", "1", "1", "1", "1", "-", "-", "-", "-", "1", "-", "1", "1", "1", "1", "1", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;
    let acorde = ["A", "#D", "C", "B"];
    secc.acorde = acorde;
    let letra = "esto es una prueba";
    secc.letra = letra;
    let lecc = new Leccion();
    lecc.secciones = [secc, secc, secc];
    lecc.titulo = "titulo leccion";
    lecc.autor = "autor leccion";
    lecc.desc = "descripcion de la leccion";
    let sis = new Sistema();
    sis.agregarLeccion(lecc);

    expect(sis.darLeccion(0)).toBe(lecc);
  });

  //resto de pruebas ya realizadas en las pruebas verificarLeccion
});

