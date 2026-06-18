const Persona = require("./Persona");

class Profesor extends Persona {
  constructor(id, nombre, dni, mail) {
    super(id, nombre, dni, mail);
    this.cursos = [];
  }

  asignarCurso(curso) {
    curso.asignarProfesor(this);
  }

  registrarCalificacion(curso, alumno, nota) {
    if (!this.cursos.includes(curso)) {
      console.log(`${this.nombre} no dicta ${curso.nombre}.`);
      return;
    }

    const registro = curso.buscarRegistro(alumno);

    if (!registro) {
      console.log(`${alumno.nombre} no esta inscripto en ${curso.nombre}.`);
      return;
    }

    registro.agregarNota(nota);
  }

  registrarAsistencia(curso, alumno, presente = true) {
    if (!this.cursos.includes(curso)) {
      console.log(`${this.nombre} no dicta ${curso.nombre}.`);
      return;
    }

    const registro = curso.buscarRegistro(alumno);

    if (!registro) {
      console.log(`${alumno.nombre} no esta inscripto en ${curso.nombre}.`);
      return;
    }

    registro.registrarAsistencia(presente);
  }

  registrarFalta(curso, alumno) {
    this.registrarAsistencia(curso, alumno, false);
  }

  mostrarReporte() {
    console.log(`Reporte del profesor: ${this.nombre}`);

    if (this.cursos.length === 0) {
      console.log("No tiene cursos asignados.");
      return;
    }

    this.cursos.forEach(function (curso) {
      console.log(`- ${curso.nombre} (${curso.codigo})`);
    });
  }
}

module.exports = Profesor;
