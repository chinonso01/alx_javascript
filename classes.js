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

/*class Foo {
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
console.log(firstFooBar.getFullName());*/


const people = [
    {name: "Jack", hasPet: true},
    {name: "Jill", hasPet: false},
    {name: "Alice", hasPet: true},
    {name: "Bob", hasPet: false}
];

function filterUsers(array, callback){
    let NewPeoples = [];
    for(let item of array){
        if (callback(item)){
            NewPeoples.push(item);
        }
    }
    return NewPeoples;
}

function check(props){
    if(props.hasPet){
        return true;
    }else{
        return false;
    }
}


console.log(filterUsers(people, check))