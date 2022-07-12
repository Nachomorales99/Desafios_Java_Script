//Desafio JavaScript N° 1

//Crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola 

/* Un docente de Programación tiene un listado de 3 notas registradas por cada uno de
sus estudiantes. La nota final se compone de un Integrador (35%), una Exposición (25%) y un Parcial (40%). Los estudiantes reprueban el curso si tiene una nota final inferior a 6.5 */

/*
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
        alert(`El estudiante ${nombre} REPRUEBA el curso, nota del integrador: ${integrador}, nota de exposicion: ${exposicion}, nota de parcial: ${parcial}, nota final: ${nf}`);
    } else {
        alert(`El estudiante ${nombre} APRUEBA el curso, nota del integrador: ${integrador}, nota de exposicion: ${exposicion}, nota de parcial: ${parcial}, nota final: ${nf}`);
    } 
    console.log ("Notas de " + nombre)
    console.log ("Integrador: " + integrador);
    console.log ("Exposicion: " + exposicion);
    console.log ("Parcial: " + parcial);
    console.log ("Nota final: " + nf);
} 
*/

//Desafio JavaScript N° 2 

/* Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás: 
-Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
-Armar la estructura HTML del proyecto.
-Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
-Utilizar funciones para realizar esas operaciones */

/*
alert("Bienvenido al sistema CDN (Calculo de notas)")

let cant, i;
let integrador, exposicion, parcial, nf, n1, n2, n3, nombre;

cant = prompt("Porfavor ingrese la cantidad de alumnos:");

cicloDeNotas(); 

alert("Gracias por usar el sistema CDN")

function cicloDeNotas(){
    for (i = 1; i <= cant; i++) {

        nombre = prompt("Ingrese el nombre y apellido del alumno " + i);
        alert("Ingrese las notas de " + nombre);
    
        integrador = prompt("Nota de integrador: ");
        exposicion = prompt("Nota de exposicion: ");
        parcial = prompt("Nota de parcial: ");
    
        n1 = notaIntegrador();
        n2 = notaExposicion();
        n3 = notaParcial();
    
        nf = n1 + n2 + n3;
    
        if (nf < 6.5) {
            aprobado();
        } else {
            desaprobado();
        }
    
        informe();
    }
}

function notaIntegrador() {
    return (35 * integrador) / 100;
}

function notaExposicion() {
    return (25 * exposicion) / 100;
}

function notaParcial() {
    return (40 * parcial) / 100;
}

function aprobado() {
    alert(`El estudiante ${nombre} REPRUEBA el curso, nota del integrador: ${integrador}, nota de exposicion: ${exposicion}, nota de parcial: ${parcial}, nota final: ${nf}`);
}

function desaprobado() {
    alert(`El estudiante ${nombre} APRUEBA el curso, nota del integrador: ${integrador}, nota de exposicion: ${exposicion}, nota de parcial: ${parcial}, nota final: ${nf}`);
}

function informe() {
    console.log("Notas de " + nombre)
    console.log("Integrador: " + integrador);
    console.log("Exposicion: " + exposicion);
    console.log("Parcial: " + parcial);
    console.log("Nota final: " + nf);
} 
*/

//Desafio JavaScript N° 3

/*Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
-Incorporar al menos un Array en tu proyecto.
-Utilizar algunos de los métodos o propiedades vistos en la clase */

alert("Bienvenido al sistema CDN (Calculo de notas)")

let cant, i;
let integrador, exposicion, parcial, nf, n1, n2, n3, nombre;

cant = prompt("Porfavor ingrese la cantidad de alumnos:");

cicloDeNotas();

alert("Gracias por usar el sistema CDN")

function cicloDeNotas() {
    for (i = 1; i <= cant; i++) {

        nombre = prompt("Ingrese el nombre y apellido del alumno " + i);
        alert("Ingrese las notas de " + nombre);

        integrador = prompt("Nota de integrador: ");
        exposicion = prompt("Nota de exposicion: ");
        parcial = prompt("Nota de parcial: ");

        n1 = notaIntegrador();
        n2 = notaExposicion();
        n3 = notaParcial();

        nf = n1 + n2 + n3;

        if (nf < 6.5) {
            aprobado();
        } else {
            desaprobado();
        }

        informe();
    }
}

function notaIntegrador() {
    return (35 * integrador) / 100;
}

function notaExposicion() {
    return (25 * exposicion) / 100;
}

function notaParcial() {
    return (40 * parcial) / 100;
}

function aprobado() {
    alert(`El estudiante ${nombre} REPRUEBA el curso, nota del integrador: ${integrador}, nota de exposicion: ${exposicion}, nota de parcial: ${parcial}`);
}

function desaprobado() {
    alert(`El estudiante ${nombre} APRUEBA el curso, nota del integrador: ${integrador}, nota de exposicion: ${exposicion}, nota de parcial: ${parcial}`);
}

function informe() {
    let informe = [nombre, integrador, exposicion, parcial, nf];

    if (nf < 6.5) {
        let resp = prompt(`¿Desea agregar una nota para salvar el promedio de ${nombre}? S/N`)

        resp = resp.toUpperCase();

        if (resp == "S") {
            let nuevaNota = parseFloat(prompt("¿Que nota salvara este promedio?"));
            informe.push(nuevaNota);

            let nuevoPromedio = (nuevaNota + nf) / 2;
            informe.push(nuevoPromedio);

            console.log(`Nombre del alumno: ${informe[0]}`);
            console.log(`Nota de Integrador: ${informe[1]}`);
            console.log(`Nota de Exposicion: ${informe[2]}`);
            console.log(`Nota de Parcial: ${informe[3]}`);
            console.log(`Nota de trabajo extra: ${informe[5]}`)
            console.log(`Promedio final: ${informe[6]}`)
            console.log(" ");
        } else {
            console.log(`Nombre del alumno: ${informe[0]}`);
            console.log(`Nota de Integrador: ${informe[1]}`);
            console.log(`Nota de Exposicion: ${informe[2]}`);
            console.log(`Nota de Parcial: ${informe[3]}`);
            console.log(`Promedio final: ${informe[4]}`)
            console.log(" ");
        }
    } else {
        console.log(`Nombre del alumno: ${informe[0]}`);
        console.log(`Nota de Integrador: ${informe[1]}`);
        console.log(`Nota de Exposicion: ${informe[2]}`);
        console.log(`Nota de Parcial: ${informe[3]}`);
        console.log(`Promedio final: ${informe[4]}`)
        console.log(" ");
    }
    return;
}