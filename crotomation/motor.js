const Motor = function (type, hp) {
    this.type = type;
    this.hp = hp;
}

Motor.prototype.start = function () {
    console.log(`Starting the ${this.type} motor with ${this.hp} HP.`);
}

Motor.prototype.stop = function () {
    console.log(`Stopping the ${this.type} motor.`);
}

module.exports = Motor;