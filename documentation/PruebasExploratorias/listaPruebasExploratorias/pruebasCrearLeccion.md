*Sesión de Testing Exploratorio:*
---
## Prueba 1
## Titulo: Crear lección con error
---


#### Inicio: 
22/11/2020 - 19:44


#### Duración de la sesión:
Media

### Misión
#### Descripción de la prueba
Se desea testear la pagina de crear lección sobre todo para revisar la precisión de los mensajes de error. En este caso el de dejar todos los campos vacios.

#### Entorno
Una vez en la pagina principal seleccionamos la opción de Crear Lección 

#### Para reproducir
Pasos para recrear la prueba:
1. Ve a Crear Lección
2. Scrollear hacia '....'
3. Click en GUARDAR


#### Resultado esperado
Al estar todo vacio el sistema pone un mensaje de error.

### Resultado obtenido
Sucede lo esperado. La pagina muestra un mensaje flotante de el lado derecho que dice "Error en las entradas"


#### Dispositivo (si es relevante)
Si bien la prueba funciona en todos los dispositivos, esta optimizado para resoluciones dependiendo de los pixeles:
En celulares el mensaje no sale flotando en la derecha si no que sale en el piso de la pantalla

## Métricas de Testing Exploratorio:
1. Misión vs Oportunidad: 85-15
2. Investigación y reporte: 0%
3. Diseño y ejecución: 20 %
4. Configuración de las pruebas: 80%

#### Contenido adicional
Con respecto a las oportunidades presentadas estas fueron que antes los mensajes de error se mostraban con un alert de JavaScript y ahora se muestran con estilos de Materialize.
Tambien pasaba que se mostraban todos los alerts de todos los campos que estaban mal, ahora solo se muestra un error donde se presenta el primer error.

---

---
### Prueba 2
## Titulo: Crear lección con error
---


#### Inicio: 
23/11/2020 - 08:45


#### Duración de la sesión:
Media

### Misión
#### Descripción de la prueba
Se desea testear la pagina de crear lección sobre todo para revisar la precisión de los mensajes de error. En este caso el de poner un numero invalido de traste en la tablatura.

#### Entorno
Una vez en la pagina principal seleccionamos la opción de Crear Lección, escribimos el titulo deseado.

#### Para reproducir
Pasos para recrear la prueba:
1. Ve a Crear Lección
2. Escribe un texto en el titulo
3. En la primera cuerda con la letra e minuscula en el primer campo escribe '55'
4. Click en GUARDAR


#### Resultado esperado
Al ingresar un numero mas alto de l esperado el sistema pone un mensaje de error.

### Resultado obtenido
Sucede lo esperado. La pagina muestra un mensaje flotante de el lado derecho que dice "Hay un error en la cuerda uno tablatura 1". Este mensaje es bastante preciso porque indica la posición.


#### Dispositivo (si es relevante)
Si bien la prueba funciona en todos los dispositivos, esta optimizado para resoluciones dependiendo de los pixeles:
En celulares el mensaje no sale flotando en la derecha si no que sale en el piso de la pantalla

## Métricas de Testing Exploratorio:
1. Misión vs Oportunidad: 85-15
2. Investigación y reporte: 0%
3. Diseño y ejecución: 20 %
4. Configuración de las pruebas: 80%

#### Contenido adicional
Con respecto a las oportunidades presentadas estas fueron que antes los mensajes de error se mostraban con un alert de JavaScript y ahora se muestran con estilos de Materialize.
Tambien pasaba que se mostraban todos los alerts de todos los campos que estaban mal, ahora solo se muestra un error donde se presenta el primer error, es decir que si dejamos todo vacio con excepción de un campo de la tablatura con error, nos seguiura indicando primero que falta el titulo antes de decirnos los errores en las tablaturas.

---

