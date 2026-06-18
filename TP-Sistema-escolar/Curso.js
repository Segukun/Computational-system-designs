const RegistroAcademico = require("./RegistroAcademico");

class Curso {
  constructor(nombre, codigo) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.alumnosAnotados = [];
    this.profesores = [];
    this.registrosAcademicos = [];
  }

  asignarProfesor(profesor) {
    let fueAsignado = false;

    if (!this.profesores.includes(profesor)) {
      this.profesores.push(profesor);
      fueAsignado = true;
    }

    if (!profesor.cursos.includes(this)) {
      profesor.cursos.push(this);
      fueAsignado = true;
    }

    if (fueAsignado) {
      console.log(`${profesor.nombre} fue asignado a ${this.nombre}.`);
    }
  }

  agregarAlumno(alumno) {
    let registro = this.buscarRegistro(alumno);

    if (!this.alumnosAnotados.includes(alumno)) {
      this.alumnosAnotados.push(alumno);
    }

    if (!alumno.cursosInscripto.includes(this)) {
      alumno.cursosInscripto.push(this);
    }

    if (!registro) {
      registro = new RegistroAcademico(alumno, this);
      this.registrosAcademicos.push(registro);
      alumno.registrosAcademicos.push(registro);
      console.log(`${alumno.nombre} se inscribio a ${this.nombre}.`);
    }

    return registro;
  }

  buscarRegistro(alumno) {
    return this.registrosAcademicos.find(function (registro) {
      return registro.alumno === alumno;
    });
  }

  listarAlumnos() {
    console.log(`Alumnos de ${this.nombre}:`);

    this.alumnosAnotados.forEach(function (alumno) {
      console.log(`- ${alumno.nombre}`);
    });
  }
}

module.exports = Curso;
