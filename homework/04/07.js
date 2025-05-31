/*請寫一個向量物件，要包含加減與內積運算
實作 class Vector {...}

let a = new Vector([1,2,3])
let b = new Vector([4,5,6])

console.log(a.add(b).sub(b).dot(b)) */
class Vector {
  constructor(components) {
    this.components = components;
  }

  add(other) {
    let result = this.components.map((val, i) => val + other.components[i]);
    return new Vector(result);
  }

  sub(other) {
    let result = this.components.map((val, i) => val - other.components[i]);
    return new Vector(result);
  }

  dot(other) {
    return this.components.reduce((sum, val, i) => sum + val * other.components[i], 0);
  }
}


let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);

console.log(a.add(b).sub(b).dot(b));
