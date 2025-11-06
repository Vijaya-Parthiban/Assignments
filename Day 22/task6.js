class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discountPercent) {
    const discount = (this.price * discountPercent) / 100;
    const finalPrice = this.price - discount;
    console.log(`Product: ${this.name}`);
    console.log(`Original Price: ₹${this.price}`);
    console.log(`Discount: ${discountPercent}%`);
    console.log(`Discounted Price: ₹${finalPrice}`);
  }
}

const prod1 = new Product("Laptop", 50000);
prod1.discountedPrice(10);