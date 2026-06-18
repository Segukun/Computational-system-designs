class Institucion {
  constructor(nombre) {
    this.nombre = nombre;
    this.listaProfesores = [];
    this.listaCursos = [];
    this.listaAlumnos = [];
  }

  ingresarProfesor(profesor) {
    if (!this.listaProfesores.includes(profesor)) {
      this.listaProfesores.push(profesor);
      console.log(`Profesor agregado: ${profesor.nombre}`);
    }
  }

  ingresarCurso(curso) {
    if (!this.listaCursos.includes(curso)) {
      this.listaCursos.push(curso);
      console.log(`Curso agregado: ${curso.nombre}`);
    }
  }

  ingresarAlumno(alumno) {
    if (!this.listaAlumnos.includes(alumno)) {
      this.listaAlumnos.push(alumno);
      console.log(`Alumno agregado: ${alumno.nombre}`);
    }
  }

  inscribirAlumno(alumno, curso) {
    if (!this.listaAlumnos.includes(alumno)) {
      this.ingresarAlumno(alumno);
    }

    if (!this.listaCursos.includes(curso)) {
      this.ingresarCurso(curso);
    }

    return curso.agregarAlumno(alumno);
  }
}

module.exports = Institucion;
