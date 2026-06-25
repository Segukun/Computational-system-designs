const JuegosDeCasino = require("./JuegosDeCasino")

class Tragamonedas extends JuegosDeCasino {
    constructor(nombre, seccion, mesas, premioMayor) {
        super(nombre, seccion, mesas);
        this.premioMayor = premioMayor;
    }

    info() {
        return `${super.info()} Premio mayor: ${this.premioMayor}`;
    }
}

module.exports = Tragamonedas;

