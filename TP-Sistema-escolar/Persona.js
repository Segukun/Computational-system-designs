class Persona {
  constructor(id, nombre, dni, mail) {
    this.id = id;
    this.nombre = nombre;
    this.dni = dni;
    this.mail = mail;
  }

  presentarse() {
    console.log(`Hola, soy ${this.nombre}.`);
    console.log(`DNI: ${this.dni}`);
    console.log(`Mail: ${this.mail}`);
  }
}

module.exports = Persona;
