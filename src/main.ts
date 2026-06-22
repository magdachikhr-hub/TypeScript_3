class Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;

  constructor(id: number, name: string, cost: number, inStock: boolean) {
    this.id = id;
    this.name = name;
    this.price = cost;
    this.inStock = inStock;
  }

  getSale(discount: number): number {
    let percent = 100 - discount;
    this.price = this.price * (percent / 100);
    console.log(this.price);

    return this.price;
  }
}

const laptop: Product = new Product(1, "lenovo", 1500, true);
console.log(laptop);

// laptop.getSale(30);

const discounted = laptop.getSale(30);
console.log(discounted);
