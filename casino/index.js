const Casino = require('./Casino');
const Camaras = require('./Camaras');

const BlackJack = require('./BlackJack');
const Ruleta = require('./Ruleta');
const Tragamonedas = require('./Tragamonedas');

const blackjack = new BlackJack("Blackjack", "Sección de apuestas", 4, 5, 10);
const ruleta = new Ruleta("Ruleta", "Sección de apuestas", 2, 100);
const tragamonedas = new Tragamonedas("Tragamonedas", "Seccion de apuestas", 4, 1000);

console.log("Programa de Casino");
console.log("");

const casino = new Casino("Casino Mi Bombo", 500, ["Sección de juegos", "Sección de apuestas"]);

casino.agregarJuego(blackjack);
casino.agregarJuegos([ruleta, tragamonedas]);

const camara = new Camaras("Nest", "WIFI Camera");
casino.usarCamara(camara, "Sección de juegos");

console.log("");
console.log(casino.info());
console.log("");
console.log(blackjack.info());
console.log(ruleta.info());
console.log(tragamonedas.info());
