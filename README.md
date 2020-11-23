# Obligatorio 2 Fundamentos de Ingeniería en Sistemas

## Integrantes
- Santiago Díaz 240926
- Agustina Disiot 221025
- Joaquín Meerhoff 247096

### Link al repositorio: https://github.com/ORT-FIS-202008/ob2-diaz-disiot-meerhoff-1
(Los hipervínculos están escritos de forma relativa a la carpeta de github, si se usan en el archivo pdf, puede que no lleven a los archivos correctos)

## 0. Introducción al proyecto en general:


El proyecto del obligatorio 2, sobre enseñar el tocar guitarra a niños, lo realizamos utilizando varios tipos de tecnologías, como node.js, jest y materialize, que serán explicados en más detalle en sus categorías correspondientes.
Se fue tomando a medida que se realizó el proyecto un [informe general](./documentation/informeGeneral.md) que contiene las ideas, problemas y deciciones que se fueron tomando con el progreso del proyecto. 
Otro documento que se utilizó fue el de [fuentes.md](./documentation/fuentes.md) donde se anotaron las principales fuentes o lugares de donde se extrajo código.
Esto no quita que en cada lugar donde se utilizó código 100% externo, se comento junto al código de donde provenía.

## 1. Calidad de código

En el obligatorio seguimos de base la style guide de google, para hacer una lista de reglas que nos comprometimos a seguir al escribir código. 
Estas reglas se encuentran dentro del archivo [calidadDeCodigo](./documentation/calidadDeCodigo.md) en la carpeta documentation.

Además a medida que fuimos trabajando en el proyecto, escribímos un [informe general](./documentation/informeGeneral.md) que contiene cronológicamente, las cosas en las que fuimos trabajando. Como por ejemplo, los problemas e intentos de usar material design.

Para facilitar el uso de estas reglas, utilizamos varios linters, ESLINT, JShint y Sonarlint. 
- ESLINT: Este linter lo utilizamos para mantener los espacios correctos entre métodos, además de controlar de no pasarse de 80 caracteres por columna (dejando 4 espacios de indentación en el caso que nos pasemos).
- JShint: Utilizamos principalmente los warnings de jshint, como variables no utilizadas, punto y comas faltantes. 
- SonarLint: Nos recomendó cambios o errores posibles en el código, como notaciones más claras en algunas situaciones o errores que no siguen estándares de html.

Es importante mencionar, que utilizamos código de otras [fuentes](./documentation/fuentes.md), que en algunos casos lo usamos para comprender conceptos, mientras que en otros los usamos o bien de base, o para implementación de otras funcionalidades del programa. En casos en los que utilizamos funciones, nos aseguramos de que sigan nuestro estándar de codificación. Pero a fuentes que incluían archivos, como [un ejemplo de materialize](./src/interface/materialize.min.js), no los modificamos para seguir nuestro estándar.

## 2. Prueba Unitaria

Para toda clase x en nuestro programa, hicimos un archivo x.test.js, para asegurarnos que su uso no lleve a errores inesperados.
Creamos nuestro propio archivo de [excepciones](./src/common/exceptions.js)
con excepciones como Excepctions.UNEXPECTED_VALUE para retornarlas cuándo no se reciben parámetros adecuados en los métodos de las clases.

Esto nos causo varios problemas a la hora de abrir el programa en un buscador, porque no los métodos require y export utilizados en las clases no son reconocidos por javascript y no funcionan las clases.

Consultamos en las ayudantías, y una de las soluciones que surgieron fue tener una copia de las clases que son utilizadas para las pruebas de jest, y una copia para el funcionamiento normal del programa.

Otra cosa que se nos dijo y asi lo aplicamos es que cuando estamos haciendo las pruebas a una funcion que llama a otras funciones no es necesario repetir las pruebas que ya hicimos para las funciones llamadas ya que quedan explicitas. Por lo que comentamos abajo de dicha prueba de la funcion donde estaria el resto de las verificaciones. Por esta razon al verificar con el coverage te marca que hay parte de funciones sin verificar.
