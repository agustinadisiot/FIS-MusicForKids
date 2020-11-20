const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");
const { Tablatura } = require("./tablatura");
const { Seccion } = require("./seccion");
const { Leccion } = require("./leccion");

//Prueba verificarTitulo
describe("deberia probar el metodo verificarTitulo", () => {

  it("deberia probar que pasa al verificar un titulo correcto", () => {
    let lecc = new Leccion();
    let titulo = "titulo cancion";
    lecc.titulo = titulo;

    expect(lecc.verificarTitulo(titulo)).toBe(true);
  });

  it("deberia probar que pasa al verificar un titulo que sea null", () => {
    let lecc = new Leccion();
    let titulo = null;
    lecc.titulo = titulo;

    expect(lecc.verificarTitulo(titulo)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al verificar un titulo vacio", () => {
    let lecc = new Leccion();
    let titulo = "";
    lecc.titulo = titulo;

    expect(lecc.verificarTitulo(titulo)).toThrow(Exceptions.UNFINISHED_OBJECT);
  });

  it("deberia probar que pasa al verificar un titulo con solo espacios", () => {
    let lecc = new Leccion();
    let titulo = "        ";
    lecc.titulo = titulo;

    expect(lecc.verificarTitulo(titulo)).toThrow(Exceptions.UNFINISHED_OBJECT);
  });

});

//Prueba verificarAutor
describe("deberia probar el metodo verificarAutor", () => {

  it("deberia probar que pasa al verificar un autor correcto", () => {
    let lecc = new Leccion();
    let autor = "Nombre de autor";
    lecc.autor = autor;

    expect(lecc.verificarAutor(autor)).toBe(true);
  });

  it("deberia probar que pasa al verificar un autor que no sea del tipo autor", () => {
    let lecc = new Leccion();
    let autor = 22;
    lecc.autor = autor;

    expect(lecc.verificarAutor(autor)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al verificar un autor que sea null", () => {
    let lecc = new Leccion();
    let autor = null;
    lecc.autor = autor;

    expect(lecc.verificarAutor(autor)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

