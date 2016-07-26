const ClassPlanet = require('./ClassPlanet.js');
const ClassSun = require('./ClassSun.js');
const ClassDEFINES = require('./ClassDEFINES.js');
const DEFINES = new ClassDEFINES;

function randomNumber (a, b) {
  return Math.floor (Math.random() * (b - a + 1) + a);
}

function randomRadioactive() {
  var temp = randomNumber(0,99);

  if (temp < DEFINES.SystemChanceToRadioactive) {return true;} else {return false;}
}

function randomSuns(suns, size) {
  var temp = randomNumber(DEFINES.SystemNumOfSunsMin, DEFINES.SystemNumOfSunsMax);

  for (var i = 0; i < temp; i++) {
    const classSun = new ClassSun(size);
    suns.push(classSun);
  }
}

function randomPlanets(planets, size, temp) {
  var temp = randomNumber(DEFINES.SystemNumOfPlanetsMin, DEFINES.SystemNumOfPlanetsMax);

  for (var i = 0; i < temp; i++) {
    const classPlanet = new ClassPlanet(size);
    planets.push(classPlanet);
  }
}

function logDaShit(size, radioactive, suns, planets) {
  console.log('-----------------------------------------------------------------------------------------------------------------------');
  console.log('\x1b[33m', 'New System:\t', '\x1b[37m', `Size: ${size[0]}x${size[1]},\tRadioactive: ${radioactive},\tSuns: ${suns.length},\tPlanets: ${planets.length}`);  //yellow
  console.log('\x1b[37m');

  for (var i = 0; i < suns.length; i++) {
    console.log('\x1b[36m', '\t|->', '\x1b[31m', 'Sun: ', '\x1b[37m', `Size: ${suns[i].size},\tMass: ${suns[i].mass},\tTemperature: ${suns[i].temperature},\tRGB: ${suns[i].color[0]} ${suns[i].color[1]} ${suns[i].color[2]}`);
    console.log(`\t\t    Age: ${suns[i].age},\t Brightness: ${suns[i].brightness},\tRotation: ${suns[i].rotation},\tPosition: ${suns[i].position[0]}, ${suns[i].position[1]}`);
    console.log('\x1b[37m');
  }
  for (var i = 0; i < planets.length; i++) {
    console.log('\x1b[36m', '\t|->', '\x1b[32m', 'New Planet: ', '\x1b[37m', `Size: ${planets[i].size},\tMass: ${planets[i].mass},\tTemperature: ${planets[i].temperature},\tRGB: ${planets[i].color[0]} ${planets[i].color[1]} ${planets[i].color[2]}`);
    console.log(`\t\t\t   Age: ${planets[i].age},\tBrightness: ${planets[i].brightness},\tRotation: ${planets[i].rotation},\tPosition: ${planets[i].position[0]}, ${planets[i].position[1]},\t Moons: ${planets[i].moons.length}`);

    for (var j = 0; j < planets[i].moons.length; j++) {
      console.log('\x1b[36m', '\t\t|->', '\x1b[35m', 'New Moon: ', '\x1b[37m', `Size: ${planets[i].moons[j].size},\tMass: ${planets[i].moons[j].mass},\tRGB: ${planets[i].moons[j].color[0]} ${planets[i].moons[j].color[1]} ${planets[i].moons[j].color[2]}`);
      console.log(`\t\t\t\t Age: ${planets[i].moons[j].age},\tRotation: ${planets[i].moons[j].rotation},\tDistance: ${planets[i].moons[j].distance}`);
    }
    console.log('\x1b[37m');
  }
  console.log('-----------------------------------------------------------------------------------------------------------------------');
}

class ClassSystem {
  constructor() {
    this.size = [randomNumber(DEFINES.SystemSizeMin, DEFINES.SystemSizeMax),randomNumber(DEFINES.SystemSizeMin, DEFINES.SystemSizeMax)];
    this.radioactive = randomRadioactive();

    this.suns = [];
    randomSuns(this.suns, this.size);

    this.planets = [];
    randomPlanets(this.planets, this.size);

    logDaShit(this.size, this.radioactive, this.suns, this.planets);
  }
}

module.exports = ClassSystem;
