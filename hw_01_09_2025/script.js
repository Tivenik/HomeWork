let Car = function (brand, number, speed) {
  this.brand = brand;
  this.number = number;
  this.speed = speed;
  this.engine = false;
  this.distance = 0;
  this.gear = 'нейтральная';

  this.startEngine = function() {
    this.engine = true;
  };

  this.stopEngine = function() {
    this.engine = false;
  };

  this.setGear = function(mode) {
    if (['вперёд', 'назад', 'нейтральная'].includes(mode)) {
      this.gear = mode;
    } else {
      console.log('Неверная передача');
    }
  };

  this.move = function(speed) {
    if (this.engine && this.gear !== 'нейтральная') {
      this.speed = speed;
    } else {
      console.log('Невозможно двигаться');
    }
  };

  this.timeDistance = function(time) {
    const traveled = this.speed * time;
    this.distance += traveled;
    return traveled;
  };
};

let myCar = new Car('BMW', 'A123BC', 40);
myCar.startEngine();
myCar.setGear('вперёд');
myCar.move(60);
console.log(myCar.timeDistance(3));