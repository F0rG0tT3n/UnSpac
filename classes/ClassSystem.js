const ClassPlanet = require('./ClassPlanet.js');
const ClassSun = require('./ClassSun.js');

const SIZE_MIN = 5;
const SIZE_MAX = 20
const CHANCE_OF_RADIOACTIVE = 10;
const NUM_OF_SUNS_MIN = 1;
const NUM_OF_SUNS_MAX = 3;
const NUM_OF_PLANETS_MIN = 1;
const NUM_OF_PLANETS_MAX = 7;

function randomNumber (a, b) {
  return Math.floor (Math.random() * (b - a + 1) + a);
}

function randomRadioactive() {
  var temp = randomNumber(0,99);

  if (temp < CHANCE_OF_RADIOACTIVE) {return true;} else {return false;}
}

function randomSuns(suns, size) {
  var temp = randomNumber(NUM_OF_SUNS_MIN, NUM_OF_SUNS_MAX);

  for (var i = 0; i < temp; i++) {
    const classSun = new ClassSun(size);
    suns.push(classSun);
  }
}

function randomPlanets(planets, size, temp) {
  for (var i = 0; i < temp; i++) {
    const classPlanet = new ClassPlanet(size);
    planets.push(classPlanet);
  }
}

class ClassSystem {
  constructor() {
    this.randomedNum = randomNumber(NUM_OF_PLANETS_MIN, NUM_OF_PLANETS_MAX);
    this.suns = [];
    this.planets = [];
    this.radioactive = randomRadioactive();
    this.size = [randomNumber(SIZE_MIN, SIZE_MAX),randomNumber(SIZE_MIN, SIZE_MAX)];

    randomSuns(this.suns, this.size);
    randomPlanets(this.planets, this.size, this.randomedNum);

    console.log('-----------------------------------------------------------------------------------------------------------------------');
    console.log('\x1b[33m', 'New System:\t', '\x1b[37m', `Size: ${this.size[0]}x${this.size[1]},\tRadioactive: ${this.radioactive},\tSuns: ${this.suns.length},\tPlanets: ${this.planets.length}`);  //yellow
    console.log('\x1b[37m');

    for (var i = 0; i < this.suns.length; i++) {
      console.log('\x1b[36m', '\t|->', '\x1b[31m', 'Sun: ', '\x1b[37m', `Size: ${this.suns[i].size},\tMass: ${this.suns[i].mass},\tTemperature: ${this.suns[i].temperature},\tRGB: ${this.suns[i].color[0]} ${this.suns[i].color[1]} ${this.suns[i].color[2]}`);
      console.log(`\t\t    Age: ${this.suns[i].age},\t Brightness: ${this.suns[i].brightness},\tRotation: ${this.suns[i].rotation},\tPosition: ${this.suns[i].position[0]}, ${this.suns[i].position[1]}`);
      console.log('\x1b[37m');
    }
    for (var i = 0; i < this.planets.length; i++) {
      console.log('\x1b[36m', '\t|->', '\x1b[32m', 'New Planet: ', '\x1b[37m', `Size: ${this.planets[i].size},\tMass: ${this.planets[i].mass},\tTemperature: ${this.planets[i].temperature},\tRGB: ${this.planets[i].color[0]} ${this.planets[i].color[1]} ${this.planets[i].color[2]}`);
      console.log(`\t\t\t   Age: ${this.planets[i].age},\tBrightness: ${this.planets[i].brightness},\tRotation: ${this.planets[i].rotation},\tPosition: ${this.planets[i].position[0]}, ${this.planets[i].position[1]},\t Moons: ${this.planets[i].temp}`);
      for (var j = 0; j < this.planets[i].moons.length; j++) {
        console.log('\x1b[36m', '\t\t|->', '\x1b[35m', 'New Moon: ', '\x1b[37m', `Size: ${this.planets[i].moons[j].size},\tMass: ${this.planets[i].moons[j].mass},\tRGB: ${this.planets[i].moons[j].color[0]} ${this.planets[i].moons[j].color[1]} ${this.planets[i].moons[j].color[2]}`);
        console.log(`\t\t\t\t Age: ${this.planets[i].moons[j].age},\tRotation: ${this.planets[i].moons[j].rotation},\tDistance: ${this.planets[i].moons[j].distance}`);
      }
      console.log('\x1b[37m');
    }
    console.log('-----------------------------------------------------------------------------------------------------------------------');
  }
}

module.exports = ClassSystem;
