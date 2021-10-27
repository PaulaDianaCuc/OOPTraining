//OOP

// -- General knowledge --
// Paradigma de programare care are la baza abstractizarea a realitatii prin folosirea obiectelor.
// 4 basic principles in OOP

// What does OOP provide? modularity (business and code wise, easier debugging), reuse of code prin inheritance, flexibility through polymorphism,  DRY principle
// Clasa = blueprintul, abstractizarea
// Instanta sau Objectul = constructia

// ENCAPSULATION 
// Mechanism for hiding data implementation to avoid misuse. Restrict access to instance variables (using private modifiers) 
// and providing was to access it as intented using public methods

// ABSTRACTION 
// Interface instead of implementation (example: phones) -> deals with idea and concept and not particular instance
// Example: higher order programming languages abtract essence instead of working with assembly
// Example: priza de curent e interfata. implementarea circuitelor electrice nu ma intereseaza, eu stiu cum sa te folosesc si ce imi oferi -> ofera decoupeling

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
//JavaScript is not a object-oriented programming language. 
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


// -- Properties and methods --
// name/value pairs
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

// Access properties and methods of object:
// - Dot notation (static): 
console.log(carProp.color);
console.log(carProp,drive());
console.log(carProp.type.brand);
// - Bracket notation (static):
console.log(carProp['color']);
console.log(carProp['type']['brand']);

// dynamic
var prop = "color";
console.log(carProp[prop]);

//Adding new properties
carProp.horsePower = 200;
carProp['autonomy'] = 400;

// Build in methods
Object.values()
Object.keys()
Object.entries()


// -- Constructors and instances --
// Open question: In how many ways you can create a JavaScript object?
//Literal
const carLiteral= {
  doorNumber = 4
};

//'new' keyword/Constructor (functie constructor)
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

//Class - ECMA6
class CarClass {
  constructor(model, price) {
      this.model = model;
      this.price = price;
  }
}

var carClass = new CarClass('Model S', 70000);





