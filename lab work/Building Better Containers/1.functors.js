class container {
    constructor(x){
        this.x = x;
    }
}

class functor extends container{
    static of(x){
        return new functor(x);
    }
    

    map(fn){
        return functor.of(fn(this.x));
    }
}


const result = functor.of(5)
    .map(x => x + 2)
    .map(x => x*3);

console.log(result)
