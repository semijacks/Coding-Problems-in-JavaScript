class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
  }
}

const newArray = new MyArray();
console.log(newArray.push("hello"));
console.log(newArray.push("world"));
console.log(newArray);
