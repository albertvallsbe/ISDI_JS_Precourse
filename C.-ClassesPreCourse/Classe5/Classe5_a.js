class Car {
    motor = true;
    color = "red";
    wheels;
    brand;

    constructor(color, brand, wheels){
        this.color = color;
        this.brand = brand;
        this.wheels = wheels;
        this.turnOn();
    }

    turnOn(){
        alert("Brrrrrrrrrrrrrrmmm!!!!");
    }

    destroyOff(){
        alert("%/()()()()(!!!!%&");
        this.motor = false;
    }
}

let myCar = new Car("Verde", "Volkswagen", 3);
let javiCar = new Car("green", "Seat", 2);
console.log(myCar);
console.log(javiCar);