function calcularPromedio(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
     suma = suma + notas[i];
     }
     return suma / notas.length;
}

let nombre = prompt("Ingrese nombre del alumno");
let apellido = prompt("Ingrese apellido del alumno");
let asignatura = prompt("Ingrese asignatura del alumno");
let profesor =prompt("Ingrese el nombre del profesor encargado de la asignatura");
let notas = [];
//nota1
let nota1 = Number(prompt("Ingrese primera nota"));
while (nota1 < 1 || nota1 > 7 || isNaN(nota1)) {
    nota1 = Number(prompt("Nota inválida. Ingrese una nota entre 1.0 y 7.0"));
}
notas.push(nota1);

//nota2
let nota2 = Number(prompt("Ingrese segunta nota"));
while (nota2 < 1 || nota2 > 7 || isNaN(nota2)){
    nota2 = Number(prompt("Nota invalida , Ingrese una nota entre 1.0 y 7.0"))
}
notas.push(nota2);

//nota 3
let nota3 =Number(prompt("Ingrese tercera nota "));
while(nota3 < 1 || nota3 > 7 || isNaN(nota3)){
    nota3 =Number(prompt("Nota invalida , Ingrede una nota entre 1.0 y 7.0"))
}
notas.push(nota3);

console.log("Notas ingresadas:", notas);

alert("Datos del alumno registrados correctamente");

console.log("Nombre :",nombre);
console.log("Apellido :",apellido);
console.log("Asignatura :",asignatura);
console.log("profesor :", profesor);
console.log("Notas:", notas);

let promedio = calcularPromedio(notas);

console.log("promedio final" , promedio.toFixed(2) );

const notaMinima = 4.0;
let estado; 

if (promedio >= notaMinima) {
    estado = "APROBADO";
} else {
    estado = "REPROBADO";
}

const alumno={
    nombre:nombre,
    apellido :apellido,
    asignatura: asignatura,
    profesor: profesor,
    notas : notas,
    promedio :promedio,
    estado : estado,

};

console.log("_______________________")
console.log("REPORTE DEL ALUMNO");
console.log("Nombre:", alumno.nombre, alumno.apellido);
console.log("Asignatura:", alumno.asignatura);
console.log("profesor",alumno.profesor);
console.log("notas", alumno.notas);
console.log("Promedio final:", alumno.promedio.toFixed(2));
console.log("Estado:", alumno.estado); 

console.log("detalle de notas");

alumno.notas.forEach(function(nota,indice){
    console.log("nota"+ (indice + 1)+ ":", nota);
})
