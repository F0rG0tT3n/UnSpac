const ClassMoon = require('./ClassMoon.js');

const NUM_OF_MOONS_MIN = 0;
const NUM_OF_MOONS_MAX = 3;

function randomNumber (a, b) {
  return Math.floor (Math.random() * (b - a) + a);
}

class ClassPlanet {

  constructor(size) {
    this.age = randomNumber(1,1000);
    this.size = randomNumber(1,100);
    this.mass = randomNumber(1,100);
    this.rotation = randomNumber(1,100);
    this.brightness = randomNumber(1,100);
    this.temperature = randomNumber(1,100);
    this.position = [randomNumber (1,size[0]), randomNumber (1,size[1])];
    this.color = [randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)];

    this.moons = [];
    this.temp = randomNumber(NUM_OF_MOONS_MIN, NUM_OF_MOONS_MAX);

    for (var i = 0; i < this.temp; i++) {
      const classMoon = new ClassMoon;
      this.moons.push(classMoon);
    }
  }
}

module.exports = ClassPlanet;
