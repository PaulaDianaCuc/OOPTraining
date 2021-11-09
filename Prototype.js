// -- General knowledge --
// Prototypes are the mechanism by which JavaScript objects inherit features from one another
// -- Object prototype --
var car = {
  color: 'red',
  fuel: 'electric',
  brand: 'Tesla'
};

console.log(car.color);
console.log(car.hasOwnProperty('maxSpeed'));


//Open question: From where does hasOwnProperty method come from?

console.log(car);

//Open question: What is __proto__? What are all those methods? Can you find hasOwnProperty?

// __proto__ is a reference to the object Prototype that helped create this object; its not a visible property (non-iterable)
car 
// -> __proto__'s type is Object
//All objects have access to the Object's prototype. They don't own those properties but have access to them
console.log(car.hasOwnProperty('__proto__'));// -> false pentru ca __proto__ nu e vizibil pt hasOwnProperty


// -- Prototype chaining --

// Functions defined on an object's prototype will he inherited by all instances for which the object is parent 
// They won't be duplicated
// This chain of prototype of prtototype is called prototype chaining

function CarProto(color) {
  this.color = color;
}

CarProto.prototype.drive = function () {
  console.log("vrruuum");
}

const modelS = new CarProto("blue");
const modelS2 = new modelS;
console.log(modelS.drive());

// Example: check String.prototype -> all the functions that apply to ""
// Example: Array
// Example in browser: 
function drive(){}
const mode = new drive()
mode

// Prototype is the template
// __proto__ is the reference

//Open questions: Can you change the prototype of an object? yes! 

// --getPrototypeOf--
function Vehicle(){}
function Car(){}

Car.prototype = new Vehicle();
const modelS = new Car();
console.log(Object.getPrototypeOf(modelS));
// Vehicle is prototype of modelS, not Car,
// Object are proto-ul setat cu null

// --instanceof --
console.log(modelS instanceof Car);
console.log(modelS instanceof Vehicle);

// --isPrototypeOf--

console.log(Car.isPrototypeOf(modelS));
console.log(Vehicle.isPrototypeOf(modelS));

