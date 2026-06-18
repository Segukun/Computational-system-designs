class RegistroAcademico {
  constructor(alumno, curso) {
    this.alumno = alumno;
    this.curso = curso;
    this.notas = [];
    this.asistencias = [];
  }

  agregarNota(nota) {
    if (nota < 1 || nota > 10) {
      console.log("La nota debe estar entre 1 y 10.");
      return;
    }

    this.notas.push(nota);
    console.log(`${this.alumno.nombre} recibio un ${nota} en ${this.curso.nombre}.`);
  }

  registrarAsistencia(presente = true) {
    this.asistencias.push(presente);

    if (presente) {
      console.log(`${this.alumno.nombre} estuvo presente en ${this.curso.nombre}.`);
    } else {
      console.log(`${this.alumno.nombre} tiene una falta en ${this.curso.nombre}.`);
    }
  }

  registrarFalta() {
    this.registrarAsistencia(false);
  }

  promedio() {
    if (this.notas.length === 0) {
      return 0;
    }

    const suma = this.notas.reduce(function (total, nota) {
      return total + nota;
    }, 0);

    return suma / this.notas.length;
  }

  porcentajeAsistencia() {
    if (this.asistencias.length === 0) {
      return 100;
    }

    const presentes = this.asistencias.filter(function (presente) {
      return presente;
    }).length;

    return (presentes * 100) / this.asistencias.length;
  }

  calcularRegularidad() {
    const promedio = this.promedio();
    const asistencia = this.porcentajeAsistencia();

    if (promedio >= 8 && asistencia >= 80) {
      return "PROMOCIONADO";
    }

    if (promedio >= 6 && asistencia >= 60) {
      return "REGULAR";
    }

    return "LIBRE";
  }

  mostrarResumen() {
    console.log(`- ${this.curso.nombre}`);
    console.log(`  Notas: ${this.notas.join(", ")}`);
    console.log(`  Promedio: ${this.promedio().toFixed(2)}`);
    console.log(`  Asistencia: ${this.porcentajeAsistencia().toFixed(0)}%`);
    console.log(`  Estado: ${this.calcularRegularidad()}`);
  }
}

module.exports = RegistroAcademico;
