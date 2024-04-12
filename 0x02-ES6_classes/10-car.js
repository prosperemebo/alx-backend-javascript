export default class Car {
  /* eslint-disable no-underscore-dangle */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    if (this.constructor.name === 'EVCar') {
      return new Car(this._brand, this._motor, this._color);
    }
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
