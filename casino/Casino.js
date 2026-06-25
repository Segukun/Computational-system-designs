class Casino {
  constructor(nombre, capacidad, secciones) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.secciones = secciones;
    this.juegos = [];
  }

  info() {
    return `Nombre del casino: ${this.nombre}
Capacidad: ${this.capacidad}
Secciones: ${this.secciones.join(', ')}
Juegos de casino: ${this.juegos.map(juego => juego.nombre).join(', ')}`;
  }


  agregarJuego(juego) {
    this.juegos.push(juego);
    console.log(`Juego agregado: ${juego.nombre}`);
  }

  agregarJuegos(juegos) {
    this.juegos.push(...juegos);
    console.log(`Juegos agregados: ${juegos.map(juego => juego.nombre).join(', ')}`);
  }

  usarCamara(camara, objetivo) {
    camara.usarCamara();
    camara.observarSeccion(objetivo);
  }

}

module.exports = Casino;
