class Plane {
  speed;
  material;

  constructor(speed, material) {
    this.speed = speed;
    this.material = material;
  }
}

// const date = new Date();

const plane1 = new Plane(500, "iron");
console.log(plane1.material);

const plane2 = new Plane(600, "copper");
console.log(plane2);

const plane3 = new Plane(7800, "lava");
console.log(plane3);
