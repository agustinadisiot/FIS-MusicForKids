# Obligatorio 2 Fundamentos de Ingeniería en Sistemas

## Integrantes
- Santiago Díaz 240926
- Agustina Disiot 221025
- Joaquín Meerhoff 247096

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

