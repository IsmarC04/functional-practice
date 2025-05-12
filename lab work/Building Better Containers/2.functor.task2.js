/*
Task:
Create a Functor class that can handle strings and allow the following operations:

Wrap a string in a Functor container.

Define a map function that:

Converts the string to uppercase.

Then reverses the string.

Use the Functor to:

Wrap the string "hello".

Apply the transformations using map and return the final result. */

class container{
    constructor(x){
        this.x = x
    }
}

class functor extends container{
    static of(x){
        return new functor(x);
    }

    map(fn){
        return functor.of(fn(this.x))
    }
}

const result = functor.of("ismar")
    .map(str => str.toUpperCase())
    .map(str => str.split('').reverse().join(''));

console.log(result)