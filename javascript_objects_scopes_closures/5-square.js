#!/usr/bin/node
// 5-rectangle.js
class Rectangle {
    constructor(w, h){
        if (w > 0 && h > 0){
            this.width = w;
            this.height = h;
        }
        else {
            Object.create(null);
        }
    }

    print() {
        if (this.width && this.height) {
          for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
          }
        }
    }

    rotate() {
        if (this.width && this.height) {
          const temp = this.width;
          this.width = this.height;
          this.height = temp;
        }
    }

    double() {
        if (this.width && this.height) {
          this.width *= 2;
          this.height *= 2;
        }
    }
}

class Square extends Rectangle {
    constructor(size){
        super(w, h);
    }
}

module.exports = Square;