#!/usr/bin/node
// 6-rectangle.js
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
        super(size, size);
    }
}

class Square extends Square {
    constructor(size){
        super(size);
    }

    charPrint(c) {
        if (c === undefined) {
          c = 'X';
        }
    
        for (let i = 0; i < this.size; i++) {
          console.log(c.repeat(this.size));
        }
    }
}

module.exports = Square;