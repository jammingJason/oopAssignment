class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}
	honk() {
		return 'Beep';
	}
	toString() {
		return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
	}
}

class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine() {
		return 'VROOOM';
	}
}

class Garage {
	constructor(cap) {
		this.vehicles = [];
		this.capacity = cap;
	}
	add(obj) {
		console.log(obj.typeOf);
		if (this.vehicles.length <= this.capacity) {
			this.vehicles.push(obj);
		} else {
			return 'Not enough room!';
		}
	}
}
