# Calidad de Código

Utilizamos de referencia el styleguide de [google](https://google.github.io/styleguide/jsguide.html#formatting)

<br>

# 1. Javascript

## Llaves:
1. Toda estructura de control lleva llaves:
   ```javascript
    if(algo()){
	    doAlgo(); 
    }
2. Seguir estilo de K&R (Kernighan y Ritchie)

    - No salto de línea antes de abrir llaves.
    - Salto de línea después de abrir la llave.
    - Salto de línea antes de cerrar la llave.
    - Salto de línea si la llave termina el cuerpo de la función, pero en casos seguidos por else, catch o while, coma, punto y coma, o paréntesis derecho no hay salto de línea.
    - Bloques de código vacíos pueden ser cerrados en una línea, a no ser que sean parte de una estructura (Ejemplo if, else) con múltiples bloques.

3. Indentación:
    - Indentación de 2 espacios cada nivel más adentro en una función. Esto aplica también a los switch.
    - Arrays pueden ser escritos vertical (seguidos por una coma) u horizontalmente.
      ```javascript
      const a = [
        Pepe,
        Mauro,
        Hola,
      ];
      const b = [0, 1, 2];


    - Objetos se pueden utilizar/definir como estructuras bloque.
    - No agregar punto y coma después de métodos. Los que contienen expresiones de clase usan punto y coma.
4. Sentencia
    - Una sentencia por línea
    - Cada sentencia debe ser terminada por un punto y coma. (No usar sistema automatizado para insertar punto y comas)
    - En cada guardado de un archivo, se aplica automáticamente el formato designado en el workspace..

5. Límites
    - Largo de método no debe superar las 30 líneas (sin incluir saltos de linea).
    - Largo de sentencia no debe superar los 80 caracteres incluido la indentación.

6. Ajustes de Linea
    - Hacer los saltos de línea donde no dificulten la lectura del código.
    - Reglas:
        - Cuando se hace salto de línea a la mitad de una sentencia se hacen los saltos después del símbolo (como dividir, sumar o multiplicar).
        - Un constructor se mantiene junto al paréntesis que lo sigue.
        - Una coma se mantiene junto al ítem que le precede.

        - Cuando se corta una línea por la mitad, se dejan 4 espacios antes, a no ser que siga las reglas de indentación de 2.


7. Espacios en blanco
    1. Vertical
        - Entre métodos consecutivos en una clase u objeto literal, incluyendo al primer y último método..
        - Excepción: Definiciones (Cuando no hay código entre ellas).
        - Dentro de métodos/funciones para agrupar por secciones lógicas.
        - Se puede utilizar varias líneas vacías para facilitar la lectura del código.
    2. Horizontal 
        - Separar palabras reservadas (como if, for o catch) excepto function y super de la apertura de los paréntesis.
        - Separar palabras reservadas como else o catch del cierre de llaves.
        - Antes de abrir llaves, excepto en
        - Un objeto literal que es el primer argumento o elemento de un array.
        - A ambos lados de operadores binarios o ternarios.
        - Después de comas o punto y comas. Espacios nunca antes de estos.
        - Después de dos puntos (:) en un objeto literal.
        - A ambos lados de un comentario de dos slash (//) (Se permite varios espacios)
        - Después de abrir comentarios del formato /* */.
        - No alinear líneas de código/comentarios porque pueden más adelante quedar corridas de nuevo.
    3. Agrupamiento de paréntesis
        - No es necesario paréntesis alrededor expresiones como delete, typeof, void, return, throw, case, in, of, or yield.
8. Comentarios
    - Bloques de comentarios se pueden hacer de distintas maneras, pero debe quedar claro que cada línea del comentario es un comentario. Además debe estar alineado con la indentación del código. No utilizar /** */ para comentarios de implementaciones.
    Se puede utilizar comentarios dentro de llamadas de funciones si no queda claro qué significa cada parámetro. 
    ```Javascript
    someFunction(obviousParam, /* shouldRender= */ true, /* name= */ 'hello');



9. Clases
    - Cada clase tiene su propio documento js.
    - Cada clase tiene su propio test.js.


<br>

# 2. HTML

1. Indentación:
    - Indentación de 2 espacios cada nivel más adentro en un los tags.

2. Saltos de Linea:
    - Si se considera necesario para facilitar la lectura, se puede realizar saltos de linea para tags o secciones que quizas podrían haberse contenido en una sola.
    - Si una sentencia no puede ser escrita en una sola linea, se debe, al igual que en javascript, dejar una indentación de 4 espacios comparado al del origen de la linea. 
3. Espacios:
    1. Verticales:
        - Si se considera necesario, se puede generar separación de más de una línea entre secciones, como puede ser el main del nav o footer, para facilitar la distinción de donde se originan los tags.
    2. Horizontales:
        - Separar dentro de tags los atributos con sus valores de los demás con espacios.
