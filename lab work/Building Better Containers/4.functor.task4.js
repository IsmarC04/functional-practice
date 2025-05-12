/*Task:
Create a Functor class that handles arrays and allows you to perform the following operations:

Wrap an array of numbers inside the Functor container.

Define a map function that:

Squares each number in the array.

Filters out the numbers that are less than 10.

Use the Functor to:

Wrap an array [1, 4, 9, 16, 25].

Apply the transformations and return the final result.

Expected Result:
For the array [1, 4, 9, 16, 25], the transformations should result in [16, 25].*/

class container{
    constructor(x){
        this.x = x
    }
}

class functor extends container{
    static of(x){
        return new functor(x)
    }

    map(fn){
        return functor.of(fn(this.x))
    }
}

const result = functor.of([1, 4, 9, 16, 25])
    .map(arr => arr.map(num => num * num))
    .map(arr => arr.filter(num => num >= 10))

console.log(result)