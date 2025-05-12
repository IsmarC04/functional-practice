/*Easy Task: Add an exclamation mark (!) to each word in an array
Instructions:
Wrap an array of words using Functor.of.

Use .map() to add a ! at the end of each word
📝 Input Array:

["hello", "world", "functor", "map"]
🎯 Expected Result:


["hello!", "world!", "functor!", "map!"]*/

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


const result = functor.of(["hello", "world", "functor", "map"])
    .map(arr => arr.map(word => word + "!"))


console.log(result)