/* Task: Remove vowels from each word in an array
Instructions:
Wrap an array of words using Functor.of.

Use .map() to:

Remove all vowels (a, e, i, o, u) from each word.

📝 Input Array:

["apple", "banana", "grape", "orange"]
🎯 Expected Result:

["ppl", "bnn", "grp", "rng"]*/

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


const result = functor.of(["apple", "banana", "grape", "orange"])
    .map(arr => arr.map(str => str.replace(/[aeiou]/gi, "")))
console.log(result)