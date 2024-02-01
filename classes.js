/*class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

const Rectangle = class {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}*/

class Foo {
    constructor(name){
        this.name = name;
    }

    getNameSeparator(){
        return '-';
    }
}

class FooBar extends Foo {
    constructor(name, index) {
        super(name);
        this.index = index;
    }

    getFullName(){
        return this.name + super.getNameSeparator() + this.index;
    }
}

const firstFooBar = new FooBar('Foo', 2);
console.log(firstFooBar.getFullName());