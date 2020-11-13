
/*jshint esversion: 6 */

class Sistema {
  constructor(){
    this.lecciones = [];
      }
      
  toString(){
    return this.lecciones;
  }

  agregarLeccion(){
    let nuevaLeccion = new Leccion(titulo, autor, bpm, desc);
    this.lecciones.push(nuevaLeccion);
  }

  borrarLeccion(titulo){
    let posaAborrar = -1;  
    for(let i = 0; i<this.lecciones.length ; i++){
      if(titulo == this.lecciones[i].titulo){
        posAborrar = i;
      }
    }
    if(posAborrar != -1){
      this.lecciones.splice(posAborrar, 1);
    }
  }
}

class Leccion {
  constructor(titulo, autor, bpm, desc){
    this.secciones = [];
    this.titulo = titulo;
    this.autor = autor;
    this.bpm = bpm;
    this.desc = desc;
  }

  toString(){
    return this.secciones + " " + this.titulo + " " + this.autor + " " + this.bpm + " " + this.desc; 
  }
  
  agregarSeccion(tab, acorde, letra){
    let nuevaSeccion = new Seccion(tab, acorde, letra);
    this.secciones.push(nuevaSeccion);  
   } 
}

class Seccion {
  constructor(tab, acorde, letra){
    this.tab = tab;
    this.acorde = acorde;
    this.letra = letra;
    }
  toString(){
    return this.tab + " " + this.acorde + " " + this.letra;
    }
}