const Vehicle = function (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.motor = null;
}

Vehicle.prototype.setMotor = function (motor) {
    this.motor = motor;
}

Vehicle.prototype.start = function () {    if (this.motor) {
        this.motor.start();
    } else {
        console.log(`The ${this.brand} ${this.model} does not have a motor.`);
    }
}

Vehicle.prototype.stop = function () {
    if (this.motor) {
        this.motor.stop();
    } else {
        console.log(`The ${this.brand} ${this.model} does not have a motor.`);
    }
}

module.exports = Vehicle;