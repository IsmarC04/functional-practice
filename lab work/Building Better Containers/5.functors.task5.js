/*Task:
Create a Functor class that handles an array of strings and allows you to perform the following operations:

Wrap an array of strings inside the Functor container.

Define a map function that:

Converts each string to uppercase.

Filters out any strings that are less than 5 characters long.

Use the Functor to:

Wrap an array ["apple", "pie", "banana", "kiwi", "grape"].

Apply the transformations and return the final result.

Expected Result:
For the array ["apple", "pie", "banana", "kiwi", "grape"], the transformations should result in ["APPLE", "BANANA", "GRAPE"].*/



class container{
    constructor(x){
        this.x = x
    }
}

class functor extends container {
    static of(x){
        return new functor(x)
    }

    map(fn){
        return functor.of(fn(this.x))
    }
}

const result = functor.of(["apple", "pie", "banana", "kiwi", "grape"])
    .map(arr => arr.map(str => str.toUpperCase()))
    .map(arr => arr.filter(str => str.length >= 5))

console.log(result)
