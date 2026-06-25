const JuegosDeCasino = require("./JuegosDeCasino");

class BlackJack extends JuegosDeCasino {
    constructor(nombre, seccion, mesas, jugadoresPorMesa, apuestaMinima) {
        super(nombre, seccion, mesas);
        this.jugadoresPorMesa = jugadoresPorMesa;
        this.apuestaMinima = apuestaMinima;
    }

    info() {
        return `${super.info()} Apuesta minima: ${this.apuestaMinima}, Jugadores por mesa: ${this.jugadoresPorMesa}`;
    }
}

module.exports = BlackJack;