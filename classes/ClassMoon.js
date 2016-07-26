function randomNumber (a, b) {
  return Math.floor (Math.random() * (b - a + 1) + a);
}

class ClassMoon {
  constructor() {
    this.age = randomNumber(1,1000);
    this.size = randomNumber(1,100);
    this.mass = randomNumber(1,100);
    this.rotation = randomNumber(1,100);
    this.distance = randomNumber(1,100);
    this.color = [randomNumber(0,255),randomNumber(0,255),randomNumber(0,255)];
  }
}

module.exports = ClassMoon;
