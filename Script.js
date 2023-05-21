class Vehicle {
    constructor(make, model, year){
        if((!Number.isFinite(year)) && (year.length === 4)){
            throw new Error ("Year Must Be a 4-Digit Number!");
        }
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk (){
        return "Beep!";
    }
    toString (){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}


class Car extends Vehicle {
    constructor(make, model, year){
        super(make,model,year);
    }
    numWheels(){
        return 4;
    }
}


class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make,model,year);
    }
    numWheels(){
        return 2;
    }
    revEngine(){
        return "Vroooom";
    }
}


class Garage {
    constructor(capacity){
        if(!Number.isFinite(capacity)){
            throw new Error ("Please type a number for how many vehicles can be stored in this Garage");
        }
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}
