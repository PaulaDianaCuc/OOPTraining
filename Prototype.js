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


//Open questions: From where does hasOwnProperty method come from?

console.log(car);

//Open questions: What is __proto__? What are all those methods? Can you find hasOwnProperty?

// __proto__ is a reference to the object Prototype that helped create this object; its not a visible property (non-iterable)
car 
// -> type-ul la __proto__ e Object
//All objects have access to the Object's prototype. They don't own those properties but have access to them
console.log(car.hasOwnProperty('__proto__'));// -> false pentru ca __proto__ nu e vizibil pt hasOwnProperty


// -- Prototype chaining --

// functiile si proprietatile definite pe prototype-ul unui object vor fi mostenite de toate instantele pt care este parinte 
//si in cazul functiei constructor, nu se vor duplica
// lantul acesta de prototype (fiecare object are un prototype care la randul lui are un prototype) se numeste prototype chaining

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
// resulta ca drive e proto-ul lui mode
// Prototype-ul e template-ul, obiectul in sine
// __proto__ e referinta la acel obiect

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

