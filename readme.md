# Sistema de Registro y Promedio de un Alumno

## Descripción del proyecto

Este proyecto es un programa hecho en JavaScript que funciona desde la consola del navegador.

El programa pedira el nombre un alumno, nombre de la asignatura, nombre del profesor de la asignatura,  ingresar sus tres notas, calcular el promedio y mostrar si el alumno aprobó o reprobó.

Para hacerlo utilicé algunos temas que he aprendido durante el curso, como:

- Variables.
- Funciones.
- Arreglos.
- Ciclos.
- Validación de datos.
- Objetos.
- Algunos métodos para recorrer información.

## Objetivo del proyecto

El objetivo de este trabajo fue practicar los conceptos básicos de JavaScript creando un programa que permita:

- Guardar los datos de un alumno.
- Ingresar y validar sus notas.
- Calcular el promedio final.
- Indicar si el alumno está aprobado o reprobado.
- Mostrar la información final de forma ordenada.

## Tecnologías utilizadas

- JavaScript
- HTML
- Consola del navegador (Chrome)

## Requisitos para ejecutar el proyecto

Para usar el programa solo se necesita:

- Un navegador web.
- Abrir la consola del navegador.

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir el archivo del proyecto.
3. Presionar boton derecho , click en inspeccionar y abrir la pestaña Console.
4. Ejecutar el código.
5. Completar la información que solicita el programa mediante `prompt()`.

## Funcionamiento del programa

### 1. Registro de datos del alumno

El programa solicita:

- Nombre.
- Apellido.
- Asignatura.
- Nombre del profesor.
- Notas .

### 2. Ingreso de notas

Se ingresan tres notas.

El programa verifica que cada nota:

- Sea un número.
- Esté entre 1.0 y 7.0.

Si la nota no cumple esas condiciones, la vuelve a solicitar.

### 3. Cálculo del promedio

Para calcular el promedio se utiliza la función:

calcularPromedio(notas)

### 4. Calculo aprobado o reprobado 

El programa al terminar de ejecutar determinara si el alumno con su promedio esta aprobado o reprobado en la asignatura, el minimo para aprobar es 4.0 .

....FIN....