// -- Classes --
// Over prototype
// Syntatic sugar
// Closer to OOP

class Car {
    constructor(color, brand) {
      this.color = color;
      this.brand = brand;
    }
  
    drive() {
      return `Car ${this.brand} is driving`;
    }
  }
  
var modelY= new Car("red", "Tesla");
console.log(modelY.drive);
//Exemplu in browser cu modelY, ce tip e si faptul ca Car are proto object; metodele clasei apar doar pe proto, nu si pe object

// -- extends --
  // Clasele se pot extinde folosind "extends"
  // Extends-ul se traduce in a seta prototype-ul unui obiect cu clasa care se extinde
  // in constructor, clasa copil apeleaza constructorul parintelui (ca in limbajele high level)
  // this-ul intr-o clasa face referinta la objectul construit din clasa
  
  class Vehicle {
    constructor(type) {
      this.type = type;
    }
  }
  
  class Car extends Vehicle {
    stop() {
      console.log(this.type + " stopped");
    }
  }
  
  const modelX = new Car("electric"); // -> this e referinta la modelX si va lua type-ul lui model X  
  //-> this is good example inheritance (faptul ca folosim type-ul in Car desi a fost definit in vehicle)
  
  // -- this --
  // cand exista mai multi parametri in copil, se apeleaza constructorul parintelui cu super()
  class Vehicle {
    constructor(type) {
      this.type = type
    }
  }
  
  class Car extends Vehicle {
    stop () {
      console.log(this.type + "stopped");
    }
  }
  
  // -- super --
  // super(...args) se adauga inainte se initializarea parametrilor specifici copilului
  class Car extends Vehicle {
    constructor(...args) {
      super(...args);
      this.doorNr = 4;
    }
    stop () {
      console.log(this.type + "stopped");
    }
  }
  