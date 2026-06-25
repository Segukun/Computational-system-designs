class Camaras {
    constructor(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }


    usarCamara() {
        console.log(`Cámara de seguridad activada. Marca: ${this.marca}, Tipo: ${this.tipo}`);
    }

    observarSeccion(seccion) {
        console.log(`Observando la sección: ${seccion}`);
    }
}

module.exports = Camaras;