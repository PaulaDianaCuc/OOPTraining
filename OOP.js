//OOP

// -- General knowledge --
// 4 basic principles in OOP

// ENCAPSULATION 
// Mechanism for hiding data implementation to avoid misuse. Restrict access to instance variables (using private modifiers) 
// and providing was to access it as intented using public methods

// ABSTRACTION 
// Interface instead of implementation (example: phones) -> deals with idea and concept and not particular instance
// Example: higher order programming languages abtract essence instead of working with assembly

// INHERITANCE
// Representated by the 'is-a' relationship between 2 objects (instance of class) -> object composition for 'has-a' relationship
// One class is derived from another class and so on, creating a hierarchy of classes. Major factor in avoiding repetition

// POLYMORPHISM
// Concept of one name, many forms. Make use of inheritance for implementation
// Static: overloading,
// Dynamic: overriding
// Example: One generic Car class is extended by 2 classes: DieselCar, PetrolCar; have the same properties 
// but might perform a ignitio() method differently -> DieselCar by internal combustion by compression while PetrolCar by spark

// -- OOP in JavaScript --
//JavaScript is not a class-based object-oriented programming language. 
//Yet you can still use OOP by a prototypical approach 
//->  an object used as a template from which to get the initial properties for a new object.

// -- Objects in JavaScript --
// Objects are collections of properties and methods which represents data and functionality.
// Example: Car, abstractization of real life object, with properties like shape, color, door number and functions like drive, stop, park
var car = {
  color: 'red',
  fuel: 'electric',
  brand: 'Tesla',
  drive: function () {
    console.log('Driving ...');
  }
};

// -- Constructors and instances --
// Open question: In how many ways you can create a JavaScript object?
//Literal
const carLiteral= {
  doorNumber = 4
};

//'new' keyword/Constructor
function CarNewConstructor(brand, color) {
  this.brand = brand;
  this.color = color;
}

var carNew= new CarNewConstructor('Tesla', 'red');

//Object,create()
var carCreate = {
  color: 'blue',
  fuel: 'electric'
};
const carObject = Object.create(carCreate);

//Class - ECMA 6
class CarClass {
  constructor(model, price) {
      this.model = model;
      this.price = price;
  }
}

var carClass = new CarClass('Model S', 70000);


// -- Properties and methods --
// name/value pair
var carProp = {
  type: 'diesel',
  color: 'blue',
  drive: function () {
    console.log('Vrrruummm!');
  },
  tyre: {
    brand: 'Michellin'
  }
};

// type and color are properties
// drive is a method
// Access properties and methods of object:
// - Dot notation: 
console.log(carProp.color);
console.log(carProp,drive());
console.log(carProp.type.brand);
// - Bracket notation:
console.log(carProp['color']);
console.log(carProp['type']['brand']);

//Adding new properties
carProp.horsePower = 200;
carProp['autonomy'] = 400;

//'this' keyword
//???????????????????????????
var carThis = {
    type: 'electric',
    color: 'green',
    getInfo: function() {
      var color = 'red';
      return `Type: ${this.type}, color: ${this.color}`;
    }
};
// For above example, current context/object aka carThis



