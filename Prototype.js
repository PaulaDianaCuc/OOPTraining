
//Example: open browser console and copy+paste code
var car = {
  color: 'red',
  fuel: 'electric',
  brand: 'Tesla'
};

console.log(car.color);
console.log(car.hasOwnProperty('maxSpeed'));


//Open questions: Fron where does hasOwnProperty method come from?

console.log(car);

//Open questions: What is __proto__? What are all those methods? Can you find hasOwnProperty?

//All objects have access to the Object's prototype. They don't own those properties but have access to them
// __proto__ provides access to object's prototype (template)


//Open questions: Can you change the prototype of an object? yes! Use Object.create()

function car (color, fuel, brand) {
    let car = Object.create({ drive: () => { return 'car is driving';} });
    car.color = color;
    car.fuel = fuel;
    car.brand = brand;

    return car;
}

var modelS = car('blue', 'electric', 'Tesla');
console.log(modelS);
