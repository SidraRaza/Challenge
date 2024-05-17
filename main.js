// type Employee={
//     name:string,
//     department:string,
//     role:string,
// }
const employee = {
    name: "Sidra",
    department: "Computer Science",
    role: "Developer",
    contact: {
        phone: 123,
        email: "abc@gmail.com"
    },
    skills: ["TS", "JS", "Pyton", "NextJs"]
};
console.log(employee);
const car = {
    year: 2020,
    type: "ABC",
    model: "Corolla",
    engine: {
        horsepower: 340
    }
};
function getHorsepower(car) {
    return car.engine.horsepower;
}
const carHorsepower = getHorsepower(car);
console.log(`Horsepower: ${carHorsepower}`);
// Example usage:
const myTShirt = {
    name: "Cool T-Shirt",
    price: 28,
    color: "Blue",
    inventory: {
        stock: 10,
        colorOptions: ["Blue", "Red", "Green"],
        changeColor: (newColor) => {
            myTShirt.color = newColor;
            if (newColor == 'Red') {
                myTShirt.price += myTShirt.price * 0.1;
            }
            else if (newColor == 'Blue') {
                myTShirt.price -= myTShirt.price * 0.2;
            }
            else {
                console.log(`${newColor} is not available`);
            }
            console.log(`Your product rice changed into ${myTShirt.price}`);
        }
    },
};
// Change the color of the T-shirt
console.log(myTShirt.inventory.colorOptions);
myTShirt.inventory.changeColor('Red');
export {};
// Updated T-shirt with new color
