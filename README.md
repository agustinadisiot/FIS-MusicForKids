# Obligatorio 2 Fundamentos de Ingeniería en Sistemas

## Integrantes
- Santiago Díaz 240926
- Agustina Disiot 221025
- Joaquín Meerhoff 247096

### Link al repositorio: https://github.com/ORT-FIS-202008/ob2-diaz-disiot-meerhoff-1
(Los hipervínculos están escritos de forma relativa a la carpeta de github, si se usan en el archivo pdf, puede que no lleven a los archivos correctos).

---

## 0. Introducción al proyecto en general:


El proyecto del obligatorio 2, sobre enseñar el tocar guitarra a niños, lo realizamos utilizando varios tipos de tecnologías, como node.js, jest y materialize, que serán explicados en más detalle en sus categorías correspondientes.
Se fue tomando a medida que se realizó el proyecto un [informe general](./documentation/informeGeneral.md) que contiene las ideas, problemas y deciciones que se fueron tomando con el progreso del proyecto. 
Otro documento que se utilizó fue el de [fuentes.md](./documentation/fuentes.md) donde se anotaron las principales fuentes o lugares de donde se extrajo código.
Esto no quita que en cada lugar donde se utilizó código 100% externo, se comento junto al código de donde provenía.

<br>

---

## 1. Calidad de código

En el obligatorio seguimos de base la style guide de google, para hacer una lista de reglas que nos comprometimos a seguir al escribir código. 
Estas reglas se encuentran dentro del archivo [calidadDeCodigo](./documentation/calidadDeCodigo.md) en la carpeta documentation.

Además a medida que fuimos trabajando en el proyecto, escribímos un [informe general](./documentation/informeGeneral.md) que contiene cronológicamente, las cosas en las que fuimos trabajando. Como por ejemplo, los problemas e intentos de usar material design.

Para facilitar el uso de estas reglas, utilizamos varios linters, ESLINT, JShint y Sonarlint. 
- ESLINT: Este linter lo utilizamos para mantener los espacios correctos entre métodos, además de controlar de no pasarse de 80 caracteres por columna (dejando 4 espacios de indentación en el caso que nos pasemos).
- JShint: Utilizamos principalmente los warnings de jshint, como variables no utilizadas, punto y comas faltantes. 
- SonarLint: Nos recomendó cambios o errores posibles en el código, como notaciones más claras en algunas situaciones o errores que no siguen estándares de html.

Es importante mencionar, que utilizamos código de otras [fuentes](./documentation/fuentes.md), que en algunos casos lo usamos para comprender conceptos, mientras que en otros los usamos o bien de base, o para implementación de otras funcionalidades del programa. En casos en los que utilizamos funciones, nos aseguramos de que sigan nuestro estándar de codificación. Pero a fuentes que incluían archivos, como [un ejemplo de materialize](./src/interface/materialize.min.js), no los modificamos para seguir nuestro estándar.

<br>

---

## 2. Prueba Unitaria


Al igual que fue demostrado en horario de clase, se realizaron pruebas unitarias con Jest, después de este ser instalado con npm de node.js .
Utilizamos el comando "npm test", que dentro de nuestro package.json esta definido el comando "jest --coverage" que indica la cobertura de las pruebas sobre las clases y funciones, además de la funcionalidad usual de jest de indicar si las pruebas son exitosas o no.

Para toda clase x en nuestro programa, hicimos un archivo x.test.js, para asegurarnos que su uso no lleve a errores inesperados.
Creamos nuestro propio archivo de [excepciones](./src/common/exceptions.js)
con excepciones como Exceptions.UNEXPECTED_VALUE para retornarlas cuándo no se reciben parámetros adecuados en los métodos de las clases.

Esto nos causo varios problemas a la hora de abrir el programa en un buscador, porque los métodos require y export utilizados en las clases no son reconocidos por javascript y no funcionan las clases.

Consultamos en las ayudantías, y una de las soluciones que surgieron fue tener una copia de las clases que son utilizadas para las pruebas de jest, y una copia para el funcionamiento normal del programa.

Otra cosa que se nos dijo y asi lo aplicamos es que cuando estamos haciendo las pruebas a una funcion que llama a otras funciones no es necesario repetir las pruebas que ya hicimos para las funciones llamadas ya que quedan explicitas. Por lo que comentamos abajo de dicha prueba de la funcion donde estaria el resto de las verificaciones. Por esta razon al verificar con el coverage te marca que hay parte de funciones sin verificar, que repetiría pruebas realizadas ya en las de verificar. Todo esto se menciona ya en los métodos, donde con un comentario se explica donde las pruebas restantes son completadas.

<br>

---
## 3. Interfaz de Usuario


En un principio, como fue mencionado en la introducción, se diseño diferentes interfaz a partir de ideas sobre en que dirección llevar el proyecto, y estas ideas se encuentran en [Ideas_Iniciales.pdf](./documentation/Ideas_Iniciales.pdf).
No consideramos que algunas de las ideas podían ser más díficiles de lo que nos plantemos, y por lo tanto varias de las propuestas no fueron trabajadas.


### Crear Lección:

# !!!!!!!!!!!!!!!!!!IMAGEN DE LA PARTE!!!!!!!!!!!!!!!!!!!

La interfaz nuestra gira en torno a la creación de lecciónes, ya que por ahí es donde comenzamos la funcionalidad y el diseño. 
El Resultado de esta interfaz se encuentra en el archivo [crearLeccion.html](./src/scenes/crearLeccion.html), que contiene inputs para ingresar el nombre de la canción que se esta guardando, el título del autor, una descripción, y las distintas secciones. Estas secciones se refieren a un conjunto de tablatura, acordes y letra.

A pesar de tener integrantes que saben tocar instrumentos, lo vimos necesario investigar y definir los terminos previamente mencionados, además de otros para aclarar posible dudas:

- Definiciones:

  - Tablatura: Es una [notación musical simplificada que se basa en la representación de la posición de la nota en la cuerda o tecla del instrumento con que esta se toca.](https://www.google.com/search?q=definicion+tablatura&source=lmns&bih=1319&biw=1311&rlz=1C1GCEA_enUY797UY797&hl=en-US&sa=X&ved=2ahUKEwj9147gt5ntAhVACbkGHfLmCFkQ_AUoAHoECAEQAA) segun google. En nuestro caso, la tablatura es una matriz, cuyo eje horizontal indica el avance del tiempo, y en su eje vertical tiene 6 espacios (uno para cada una de las cuerdas en una guitarra estándar). En cada uno de estos espacios se escribe que traste se debe estar tocando en la guitarra en ese debido momento.
  - Traste: Se encuentran en el mástil o cuello de la guitarra, están indicados por líneas perpendiculares a las cuerdas y dependiendo de cuál o cuales se esten presionando al tocar una o más cuerdas, se verá afectado el sonido resultante.
  - Acorde: Conjunto de notas que juntas forman una harmonía.
  - Nota: Sonido o frecuencia específica generada al tocar una cuerda (en una guitarra).
  - Letra: Sentencia asociada a un conjunto de acordes o una tablatura en especifico.
  - Sección: En nuestro proyecto, nos referimos a sección a un conjunto de tablatura, letra y acorde, aunque en caso de tener letra y/o acordes vacíos, a estos no se los muestra al realizar una lección, pero si a la tablatura. Esto es porque el programa se enfoca en la guitarra y no en el área de la letra.



### 

<br>

---