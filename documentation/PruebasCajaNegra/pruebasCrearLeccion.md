# Pruebas de Caja Negra de la pagina de Crear Leccion

## Variables de entrada
- Titulo
- Autor
- Descripcion
- tablaturaSeccion
- acordesSeccion
- letraSeccion
- Seccion

<br><br><br>

## Clases de equivalencia

| Entrada/Variable | Clases válidas                                                                                                     | Clases inválidas                        |
| ---------------- | :----------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| Titulo           | -titulo ingresado (1)                                                                                              | -titulo no ingresado (7)                |
| Autor            | -autor valido (puede ser igresado o vacio) (2)                                                                     |                                         |
| Descripcion      | -descripcion valido (puede ser igresado o vacio) (3)                                                               |                                         |
| tablaturaSeccion | -todos los inputs son validos (se pueden dejar vacio, o se le escribio algun numero menor a 26) (4)                | -input n tiene un numero mayor a 25 (8) |
| acordesSeccion   | -todos los inputs son validos (se pueden dejar vacio, o tienen entre una y tres letras y ninguna tiene numeros (5) | -input n tiene un numero (9)            |
| letraSeccion     | -letra valida (puede ser igresado o vacio) (6)                                                                     |                                         |

<br><br><br>

## Casos de prueba

| Caso de prueba | Titulo | autor           | Descripcion       | tablaturaSeccion              | acordesSeccion  | letraSeccion | Resultado esperado                   | Clases de equivalencias cubiertas |
| :------------: | :----- | :-------------- | :---------------- | :---------------------------- | :-------------- | :----------- | :----------------------------------- | :-------------------------------- |
|      CP 1      | Chau   | No Te Va Gustar | Cancion de NTVG   | input 3 de la cuerda 4 = 0    | acorde 1 = A    | chau         | Mensaje: Guardado exitoso            | 1, 2, 3, 4, 5, 6                  |
|      CP 2      | Chau   |                 | Cancion de NTVG   | input 3 de la cuerda 4 = 2    | acorde 3 = B    | adios        | Mensaje: Guardado exitoso            | 1, 2, 3, 4, 5, 6                  |
|      CP 3      | Chau   | No Te Va Gustar |                   | input 3 de la cuerda 4 = 0    | acorde 8 = A    | hasta luego  | Mensaje: Guardado exitoso            | 1, 2, 3, 4, 5, 6                  |
|      CP 4      | Chau   | No Te Va Gustar | Cancion de 123445 |                               | acorde 3 = Sol  | chau         | Mensaje: Guardado exitoso            | 1, 2, 3, 4, 5, 6                  |
|      CP 5      | Chau   | No 123---       | Cancion de NTVG   | input 3 de la cuerda 4 = 0    |                 | chau         | Mensaje: Guardado exitoso            | 1, 2, 3, 4, 5, 6                  |
|      CP 6      | Chau   | No 123---       | Cancion de NTVG   | input 3 de la cuerda 4 = 0    | acorde 4 = #B   |              | Mensaje: Guardado exitoso            | 1, 2, 3, 4, 5, 6                  |
|      CP 7      | `   `  | No Te Va Gustar | Cancion de NTVG   | input 3 de la cuerda 4 = 25   | acorde 3 = z    | chau         | Mensaje: Error en las entradas       | 7, 2, 3, 4, 5, 6                  |
|      CP 8      | Chau   | No Te Va Gustar | Cancion de NTVG   | `input 3 de la cuerda 4 = 26` | acorde 6 = abs  | chau         | Mensaje: Hay un error en la cuerda 4 | 1, 8, 2, 3, 5, 6                  |
|      CP 9      | Chau   | No Te Va Gustar | Cancion de NTVG   | input 3 de la cuerda 4 = 25   | `acorde 3 = 22` | chau         | Mensaje: Hay un error en los acordes | 1, 8, 2, 3, 6, 9                  |