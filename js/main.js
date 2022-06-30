//Desafio JavaScript 

//Crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola 

/* Un docente de Programación tiene un listado de 3 notas registradas por cada uno de
sus estudiantes. La nota final se compone de un Integrador (35%), una Exposición (25%) y un Parcial (40%). Los estudiantes reprueban el curso si tiene una nota final inferior a 6.5 */

let cant, i;
let integrador, exposicion, parcial, nf, n1, n2, n3, nombre;

cant = prompt("Ingrese la cantidad de alumnos del curso");

for (i = 1; i <= cant; i++) {

    nombre = prompt("Ingrese el nombre y apellido del alumno " + i);
    alert("Ingrese las notas de " + nombre);

    integrador = prompt("Nota de integrador: ");
    exposicion = prompt("Nota de exposicion: ");
    parcial = prompt("Nota de parcial: ");

    n1 = (35 * integrador) / 100;
    n2 = (25 * exposicion) / 100;
    n3 = (40 * parcial) / 100;

    nf = n1 + n2 + n3;

    if (nf < 6.5) {
        console.log("El estudiante " + nombre + " REPRUEBA el curso");
    } else {
        console.log("El estudiante " + nombre + " APRUEBA el curso");
    } 

    console.log ("Integrador: " + integrador);
    console.log ("Exposicion: " + exposicion);
    console.log ("Parcial: " + parcial);
    console.log ("Nota final: " + nf);
}