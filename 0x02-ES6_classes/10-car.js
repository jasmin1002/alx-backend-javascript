export default class Car {
  constructor(brand, motor, color) {
    // if (typeof brand !== 'string') throw TypeError('Brand must be a string');
    // if (typeof motor !== 'string') throw TypeError('Motor must be a string');
    // if (typeof color !== 'string') throw TypeError('Color must be a string');
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
