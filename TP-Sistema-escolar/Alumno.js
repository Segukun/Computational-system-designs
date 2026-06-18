const Persona = require("./Persona");

class Alumno extends Persona {
  constructor(id, nombre, dni, mail) {
    super(id, nombre, dni, mail);
    this.cursosInscripto = [];
    this.registrosAcademicos = [];
  }

  buscarRegistro(curso) {
    return this.registrosAcademicos.find(function (registro) {
      return registro.curso === curso;
    });
  }

  consultarRegularidad(curso) {
    const registro = this.buscarRegistro(curso);

    if (!registro) {
      console.log(`${this.nombre} no esta inscripto en ${curso.nombre}.`);
      return "SIN INSCRIPCION";
    }

    const estado = registro.calcularRegularidad();
    console.log(`${this.nombre} en ${curso.nombre}: ${estado}`);
    return estado;
  }

  mostrarReporte() {
    console.log(`Reporte del alumno: ${this.nombre}`);

    if (this.registrosAcademicos.length === 0) {
      console.log("No tiene materias inscriptas.");
      return;
    }

    this.registrosAcademicos.forEach(function (registro) {
      registro.mostrarResumen();
    });
  }
}

module.exports = Alumno;
