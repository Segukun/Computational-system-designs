class JuegosDeCasino {
    constructor(nombre, seccion, mesas) {
        this.nombre = nombre;
        this.seccion = seccion;
        this.mesas = mesas;
    }

    info() {
        return `Nombre del juego: ${this.nombre}, Sección: ${this.seccion}, Mesas: ${this.mesas}`;
    }


}

module.exports = JuegosDeCasino;
