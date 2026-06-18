const motor = require("./motor");
const vehicle = require("./vehicle");
const readline = require("readline");

console.log("Crotomation");
console.log("");

const vehicle1 = new vehicle("Toyota", "Camry", 2020);
const motor1 = new motor("w16", 1200);

vehicle1.setMotor(motor1);
vehicle1.start();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Type 'stop' to stop the vehicle: ", function (answer) {
    if (answer.trim().toLowerCase() === "stop") {
        vehicle1.stop();
    }

    rl.close();
});

