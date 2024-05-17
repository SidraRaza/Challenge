
// question#1
type Employee = {
    name: string;
    department: string;
    role?: "Manager" | "Engineer" | "Developer";
    contact?: {
        phone?: number;
        email?: string|number;
    };
    skills?: string[];
};

const employee: Employee = {
    name: "Sidra",
    department: "IT Department",
    role: "Developer",
    contact: {
        phone: 123,
        email: "Abc@gmail.com"
    },
    skills: ["TS", "JS", "Pyton", "NextJs"]
}
console.log(employee);

// question#2

type Car = {
    year: number,
    model: string,
    type: string,
    engine: {
        horsepower: number,
    }
}

const car: Car = {
    year: 2020,
    type: "ABC",
    model: "Corolla",
    engine: {
        horsepower: 340
    }
}

function getHorsepower(car: Car): number {
    return car.engine.horsepower
}

const carHorsepower = getHorsepower(car);
console.log(`Horsepower: ${carHorsepower}`);


// question#3

type Product = {
    name: string;
    price: number;
    color: string;
    inventory: {
        stock: number;
        colorOptions?: string[];
        changeColor: (newColor: string) => any
    };
};
const myTShirt: Product = {
    name: "Cool T-Shirt",
    price: 28,
    color: "Blue",
    inventory: {
        stock: 10,
        colorOptions: ["Blue", "Red", "Green"],
        changeColor: (newColor) => {
            myTShirt.color = newColor
            if (newColor == 'Red') {
                myTShirt.price += myTShirt.price * 0.1
            }
            else if (newColor == 'Blue') {
                myTShirt.price -= myTShirt.price * 0.5
            }
            else {
                console.log(`${newColor} is not available`);

            }
            console.log(`Your product rice changed into ${myTShirt.price}`);

        }

    },
};

console.log(myTShirt.inventory.colorOptions);
myTShirt.inventory.changeColor('Red');



