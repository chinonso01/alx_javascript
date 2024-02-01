#!/usr/bin/node
// 6-rectangle.js
import Square from './5-square.js';
const Square5 = Square


class Square extends  Square5{
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