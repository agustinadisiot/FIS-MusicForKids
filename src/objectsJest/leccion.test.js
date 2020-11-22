const { Exceptions } = require("../common/exceptions");
const { Definiciones } = require("../common/definiciones");
const { Tablatura } = require("./tablatura");
const { Seccion } = require("./seccion");
const { Leccion } = require("./leccion");

//Prueba capFirstLetters
describe("deberia probar el metodo capFirstLetters", () => {

  it("deberia probar que pasa al verificar una linea con todas sus letras en minuscula", () => {
    let lecc = new Leccion();
    let linea = "hola como estas";

    expect(lecc.capFirstLetters(linea)).toBe("Hola Como Estas");
  });

  it("deberia probar que pasa al verificar una linea con todas sus letras en minuscula exepto la primera de cada palabra", () => {
    let lecc = new Leccion();
    let linea = "Hola Como Estas";

    expect(lecc.capFirstLetters(linea)).toBe(linea);
  });

  it("deberia probar que pasa al verificar una linea con todas sus letras en mayuscula", () => {
    let lecc = new Leccion();
    let linea = "HOLA COMO ESTAS";

    expect(lecc.capFirstLetters(linea)).toBe(linea);
  });

  it("deberia probar que pasa al verificar una linea que sea null", () => {
    let lecc = new Leccion();
    let linea = null;

    expect(lecc.capFirstLetters(linea)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al verificar una linea que sea un string vacio", () => {
    let lecc = new Leccion();
    let linea = "";

    expect(lecc.capFirstLetters(linea)).toBe("");
  });

  it("deberia probar que pasa al verificar una linea que no sea del tipo string", () => {
    let lecc = new Leccion();
    let linea = 22;

    expect(lecc.capFirstLetters(linea)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

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

  it("deberia probar que pasa al verificar un titulo que no es del tipo string", () => {
    let lecc = new Leccion();
    let titulo = 22;
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

  it("deberia probar que pasa al verificar un autor que es un string vacio", () => {
    let lecc = new Leccion();
    let autor = "";
    lecc.autor = autor;

    expect(lecc.verificarAutor(autor)).toBe(true);
  });

  it("deberia probar que pasa al verificar un autor que sea null", () => {
    let lecc = new Leccion();
    let autor = null;
    lecc.autor = autor;

    expect(lecc.verificarAutor(autor)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al verificar un autor que no sea del tipo string", () => {
    let lecc = new Leccion();
    let autor = 22;
    lecc.autor = autor;

    expect(lecc.verificarAutor(autor)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

//Prueba verificarDesc
describe("deberia probar el metodo verificarDesc", () => {

  it("deberia probar que pasa al verificar una descripcion que es un string correcto", () => {
    let lecc = new Leccion();
    let desc = "descripcion correcta";
    lecc.desc = desc;

    expect(lecc.verificarDesc(desc)).toBe(true);
  });

  it("deberia probar que pasa al verificar una descripcion que es un string vacio", () => {
    let lecc = new Leccion();
    let desc = "";
    lecc.desc = desc;

    expect(lecc.verificarDesc(desc)).toBe(true);
  });

  it("deberia probar que pasa al verificar una descripcion que sea null", () => {
    let lecc = new Leccion();
    let desc = null;
    lecc.desc = desc;

    expect(lecc.verificarDesc(desc)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al verificar una descripcion no es del tipo string", () => {
    let lecc = new Leccion();
    let desc = 22;
    lecc.desc = desc;

    expect(lecc.verificarDesc(desc)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

});

//Prueba verificarSeccion
describe("deberia probar el metodo verificarSeccion", () => {

  it("deberia probar que pasa al verificar una seccion correcta", () => {
    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "-", "-", "-", "-", "1", "-", "1", "14", "18"];
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


    expect(lecc.verificarSeccion(secc)).toBe(true);
  });

  //Pruebas de verificacion de los acordes de la seccion realizada en Seccion.test.js

  //Pruebas de verificacion de la letra de la seccion realizada en Seccion.test.js

  //Pruebas de verificacion de la tablatura de la seccion realizada en Seccion.test.js
});

//Prueba darTitulo
describe("deberia probar el metodo darTitulo", () => {

  it("deberia probar que pasa al intentar dar un titulo correcto", () => {
    let lecc = new Leccion();
    let titulo = "titulo cancion";
    lecc.titulo = titulo;

    expect(lecc.darTitulo()).toBe("titulo cancion");
  });

  //resto de prubas ya realizadas en las pruebas de verificarTitulo

});

//Prueba darAutor
describe("deberia probar el metodo darAutor", () => {

  it("deberia probar que pasa al intentar dar un autor correcto", () => {
    let lecc = new Leccion();
    let autor = "nombre de autor";
    lecc.autor = autor;

    expect(lecc.darAutor()).toBe("nombre de autor");
  });

  it("deberia probar que pasa al intentar dar un autor que es un string vacio", () => {
    let lecc = new Leccion();
    let autor = "";
    lecc.autor = autor;

    expect(lecc.darAutor()).toBe("");
  });

  //resto de prubas ya realizadas en las pruebas de verificarAutor

});

//Prueba darDesc
describe("deberia probar el metodo darDesc", () => {

  it("deberia probar que pasa al intentar dar una descripcion que es un string correcto", () => {
    let lecc = new Leccion();
    let desc = "descripcion correcta";
    lecc.desc = desc;

    expect(lecc.darDesc()).toBe("descripcion correcta");
  });

  it("deberia probar que pasa al intentar dar una descripcion que es un string vacio", () => {
    let lecc = new Leccion();
    let desc = "";
    lecc.desc = desc;

    expect(lecc.darDesc()).toBe("");
  });

  //resto de prubas ya realizadas en las pruebas de verificarDesc

});

//Prueba darSeccion
describe("deberia probar el metodo darSeccion", () => {

  it("deberia probar que pasa al intentar dar una seccion correcta", () => {
    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "-", "-", "-", "-", "1", "-", "1", "14", "18"];
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


    expect(lecc.darSeccion(1)).toBe(secc);
  });

  it("deberia probar que pasa al intentar agregar una seccion que no es de la clase Seccion", () => {
    let secc = 1;
    let lecc = new Leccion();
    lecc.secciones = [secc, secc];
    expect(lecc.darSeccion(0)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al intentar agregar una seccion que sea null", () => {
    let secc = null;
    let lecc = new Leccion();
    lecc.secciones = [secc, secc];
    expect(lecc.darSeccion(0)).toThrow(Exceptions.UNEXPECTED_VALUE);
  });

  it("deberia probar que pasa al intentar dar una secccion de una posision fuera del array de secciones", () => {
    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "-", "-", "-", "-", "1", "-", "1", "14", "18"];
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


    expect(lecc.darSeccion(4)).toThrow(Exceptions.OUT_OF_BOUNDS);
  });

  //Resto de las pruebas ya hechas en las pruebas de verificarSeccion 

});

//Prueba agregarTitulo
describe("deberia probar el metodo agregarTitulo", () => {

  it("deberia probar que pasa al intentar agregar un titulo correcto", () => {
    let lecc = new Leccion();
    let titulo = "titulo cancion";
    lecc.agregarTitulo(titulo);

    expect(lecc.darTitulo()).toBe("Titulo Cancion");
  });

  //resto de prubas ya realizadas en las pruebas de verificarTitulo

});

//Prueba agregarAutor
describe("deberia probar el metodo agregarAutor", () => {

  it("deberia probar que pasa al intentar agregar un autor correcto", () => {
    let lecc = new Leccion();
    let autor = "nombre de autor";
    lecc.agregarAutor(autor);

    expect(lecc.darAutor()).toBe("Nombre De Autor");
  });

  it("deberia probar que pasa al intentar agregar un autor que es un string vacio", () => {
    let lecc = new Leccion();
    let autor = "";
    lecc.agregarAutor(autor);

    expect(lecc.darAutor()).toBe("");
  });

  //resto de prubas ya realizadas en las pruebas de verificarAutor

});

//Prueba agregarDesc
describe("deberia probar el metodo agregarDesc", () => {

  it("deberia probar que pasa al intentar agregar una descripcion que es un string correcto", () => {
    let lecc = new Leccion();
    let desc = "descripcion correcta";
    lecc.agregarDesc(desc);

    expect(lecc.darDesc()).toBe("Descripcion correcta");
  });

  it("deberia probar que pasa al intentar agregar una descripcion que es un string vacio", () => {
    let lecc = new Leccion();
    let desc = "";
    lecc.agregarDesc(desc);

    expect(lecc.darDesc()).toBe("");
  });

  //resto de prubas ya realizadas en las pruebas de verificarDesc

});

//Prueba agregarSeccion
describe("deberia probar el metodo agregarSeccion", () => {

  it("deberia probar que pasa al intentar agregar una seccion correcta", () => {
    let tab = new Tablatura();
    let cuerda = ["1", "11", "1", "-", "1", "1", "-", "-", "-", "-", "1", "-", "1", "14", "18"];
    tab.cuerdas = [cuerda, cuerda, cuerda, cuerda, cuerda, cuerda];
    tab.cantActual = 6;
    let secc = new Seccion();
    secc.tab = tab;
    let acorde = ["A", "#D", "C", "B"];
    secc.acorde = acorde;
    let letra = "esto es una prueba";
    secc.letra = letra;
    let lecc = new Leccion();
    lecc.agregarSeccion(secc);

    expect(lecc.darSeccion(0)).toBe(secc);
  });

  //Resto de pruebas en las pruebas de verificarSeccion

});

