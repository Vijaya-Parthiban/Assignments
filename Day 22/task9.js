class Shape {
  constructor(color) {
    this.color = color;
  }
}
class Circle extends Shape {
  constructor(color, radius) {
    super(color); 
    this.radius = radius;
  }
  area() {
    const result = Math.PI * this.radius * this.radius;
    console.log(`Color: ${this.color}`);
    console.log(`Radius: ${this.radius}`);
    console.log(`Area of Circle: ${result.toFixed(2)}`);
  }
}
const circle1 = new Circle("Red", 5);
circle1.area();