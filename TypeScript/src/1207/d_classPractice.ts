class Car {
  constructor(
    public model: string,
    public year: number,
  ) {}

  getModelAndYear() {
    return `This car is a ${this.model} from ${this.year}.`;
  }
}
const car1 = new Car('Tesla Model3', 2023);
console.log(car1.getModelAndYear());
