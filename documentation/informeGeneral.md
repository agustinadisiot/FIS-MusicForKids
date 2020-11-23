# Informe General cronológico

## Comienzo del Obligatorio:
  - Al principio comenzamos con brain storming para hacernos una idea de en que dirección habría que llevar el proyecto. Esto esta en el pdf de [Ideas_Iniciales](./Ideas_Iniciales.pdf), donde nos imaginamos soluciones a problemas como la tablatura, el diseño en general, y algunos detalles, como tener la posibilidad de reproducir la tablatura a un ritmo y que podamos ir para adelante y atrás con un slider de material design de google. Este documento tiene anotado las días no sólo de este comienzo, si no también los diseños que se fueron realizando con el progreso del proyecto. Asi que no todo lo que se encuentra en el pdf fue escrito en la primera sesión.

  - Lo siguiente que nos planteamos fue comprender la guía de ayudantía de github con sus ejemplos, desde la estructura correcta de un repositorio, pero principalmente el comprender el ejemplo 4, sobre la utilización de webpack, npm y material design.  

  - A esta altura tuvimos bastantes problemas, el 9 y 10 de noviembre nos concentramos en entender el procedimiento de instalación, pero comenzando desde una copia del repositorio del ejemplo 4 “Hello world”, o comenzando una carpeta de 0 y siguiendo los pasos de la guía de material design, no logramos que la instalación sea funcional. Nos encontramos por un lado, problemas como “MODULE_NOT_FOUND”, sobre cosas como “yarg” y “webpack-server-dev.js”, aunque dentro de node_modules se encontraban los dos en sus lugares correctos. Investigamos un poco sobre electron, pero al confirmar que no es necesario el crear un archivo ejecutable en sí, volvimos a intentar hacer andar webpacket. 

  - Consultamos al docente y ayudante de la materia, y confirmamos que por un problema de compatibilidad de webpacket, debíamos usar la versión ^3.3.12 para que funcione correctamente.

  - Con este cambio logramos avanzar hasta el segundo paso de la guía de material design, pero nuevamente tuvimos otro problema, en la parte 2, sobre el postcss-loader, que la version de google le faltaba unos parametros.


  - Después no hubo problemas hasta la parte 3 de la guía. Donde tuvimos problemas con los sliders, pero preferimos seguir con el sistema principal y dejar la interfaz para más adelante.

<br>

## Mitad del Obligatorio:

  - Para trabajar de forma más efectiva, empezamos a dividirnos tareas que de a una persona se pudiera realizar, en vez de enfocarnos el grupo entero en una tarea más grande y compleja.

  - La primera vez que lo hicimos, nos dividimos en el grupo las tareas: investigar como hacer la tablatura en html, como a partir de javascript crear esas tablaturas en html, y el inicio de las clases del sistema en general, como tablatura, sección, lección y sistema.

  - Decidimos que la tablatura sea una matriz de inputs de números (que más adelante lo modificamos, ya que es más sencillo verificar que sea un número con javascript a que sea correcto el largo), que junto al css hicimos que quedaran del tamaño de dos caracteres, o sea lo máximo que podríamos llegar a ingresar.

  - Avanzamos con la creación de las lecciones en la funcion crearLeccion.js que busca en el html por id un div donde crear secciones con la matriz de tablatura, y dos inputs para acordes y letras. Agregamos un botón que al clickear agrega una nueva sección abajo de la última, permitiendo al usuario generar tantas secciones como le sea necesario.

  - Luego avanzamos con el área de clases del sistema como tablatura y sección, además del testing de jest relacionada a esta. Un gran problema que encontramos, es que al intentar cumplir con nuestro límite de líneas por función, separamos la validación de variables en métodos a parte. Esto llevaba a que la función lambda que retorna al haber una excepción retorne un undefined. Para solucionar esto, hicimos que los verificadores retornen true si verifican bien, y sino retornen la funcion lambda con el throw exception.

  - Después nos dividimos en grupos y trabajamos en el área de interfaz, jest, y sistema para avanzar con las tres cosas más rápido. Tuvimos un problema entre la interfaz y jest: Las lineas de const { ...} = require("./..."); y de module.export{}  nos generaban problemas fuera de jest, y la solucion que encontramos fue comentar esas secciones cuando se usa npm start.

<br>

## Fines del Obligatorio:

  - Terminamos las clases y sus pruebas unitarias en jest, y pasamos a trabajar en la interfaz, después de decidir de usar un template de materialize, para trabajar con una base que contenía un nav bar, boton hamburguesa, y components que nos facilitan el diseño del programa.
  
  - Decidimos la estructura de la página, teniendo una pantalla inicial que da la opciones de una lista de lecciones para realizar, o crear una lección nueva. La lección la creamos en secciones de tablatura, acorde y letra, en matrices de inputs o inputs solos. Este mismo tipo de estructura lo utilizamos en realizar lección, solamente que los inputs son readOnly.

  - Notamos a esta altura que dejo de funcionar el control de letras para las tablaturas, y esto era causado al crear una nueva sección, cada vez que se cambiaba el inner html del div donde se encontraban los inputs. Cambiamos este funcionamiento, para evitar este problema, y utilizando una respuesta de stackoverflow, logramos solucionar el problema. El link a esta respuesta se encuentra comentado junto a la función que lo utiliza dentro de crearLeccion.js.

  - Una vez consideramos adecuado la interfaz de usuario de todas las secciones, decidimos empezar a realizar pruebas de caja negra. Por un lado, se hizo un archivo donde trabajamos las pruebas exploratorias en una rama, y por otra rama se trabajo en pruebas con clase de equivalencia. Tambíen empezamos a asegurarnos de haber seguido los estándares en todo momento, y encontramos funciones que superaban nuestro largo máximo determinado.

  - Con estas pruebas se encontraron issues que fueron reportados, y en el caso de algunos, resueltos inmediatamente. 

  - También a esta altura, escribimos README.md en carpetas donde se encuentran varios archivos para explicar el contenido de estas.

