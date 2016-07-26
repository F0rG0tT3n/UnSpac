function randomNumber (a, b) {
  return Math.floor (Math.random() * (b - a) + a);
}

class ClassSun {
  constructor(size) {
    this.age = randomNumber(1,1000);
    this.size = randomNumber(1,100);
    this.mass = randomNumber(1,100);
    this.rotation = randomNumber(1,100);
    this.brightness = randomNumber(1,100);
    this.temperature = randomNumber(1,100);
    this.position = [randomNumber (1,size[0]), randomNumber (1,size[1])];
    this.color = [randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)];
  }
}

module.exports = ClassSun;
