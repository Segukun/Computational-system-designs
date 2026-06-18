const Institucion = require("./Institucion");
const Curso = require("./Curso");
const Profesor = require("./Profesor");
const Alumno = require("./Alumno");

console.log("Sistema escolar");
console.log("");

const institucion = new Institucion("Instituto Tecnico");

const poo = new Curso("POO", "POO-01");
const basesDeDatos = new Curso("Bases de Datos", "BDD-01");

const profesor = new Profesor("P1", "Laura Gomez", "30111222", "laura@mail.com");

const alumno1 = new Alumno("A1", "Juan Perez", "42111222", "juan@gmail.com");
const alumno2 = new Alumno("A2", "Sofia Diaz", "43222333", "sofia@gmail.com");
const alumno3 = new Alumno("A3", "Mateo Ruiz", "44333444", "mateo@gmail.com");
const alumno4 = new Alumno("A4", "Valentina Luna", "45444555", "valentina@gmail.com");

institucion.ingresarCurso(poo);
institucion.ingresarCurso(basesDeDatos);
console.log("");

institucion.ingresarProfesor(profesor);
institucion.ingresarAlumno(alumno1);
institucion.ingresarAlumno(alumno2);
institucion.ingresarAlumno(alumno3);
institucion.ingresarAlumno(alumno4);
console.log("");

profesor.asignarCurso(poo);
profesor.asignarCurso(basesDeDatos);
console.log("");

institucion.inscribirAlumno(alumno1, poo);
institucion.inscribirAlumno(alumno1, basesDeDatos);
institucion.inscribirAlumno(alumno2, poo);
institucion.inscribirAlumno(alumno2, basesDeDatos);
console.log("");

profesor.registrarCalificacion(poo, alumno1, 10);
profesor.registrarAsistencia(poo, alumno1, true);
profesor.registrarAsistencia(poo, alumno1, true);
profesor.registrarAsistencia(poo, alumno1, true);
console.log("");

profesor.registrarCalificacion(basesDeDatos, alumno1, 2);
profesor.registrarAsistencia(basesDeDatos, alumno1, true);
profesor.registrarFalta(basesDeDatos, alumno1);
profesor.registrarFalta(basesDeDatos, alumno1);
console.log("");

profesor.registrarCalificacion(poo, alumno2, 7);
profesor.registrarCalificacion(basesDeDatos, alumno2, 8);
profesor.registrarAsistencia(poo, alumno2, true);
profesor.registrarAsistencia(basesDeDatos, alumno2, true);
console.log("");

profesor.mostrarReporte();
console.log("");

alumno1.mostrarReporte();
