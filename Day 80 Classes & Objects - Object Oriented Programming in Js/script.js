// let obj = {
//     a:1,
//     b:"Aman"
// }

// console.log(obj)
class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eats(){
        console.log("kha rha hoon")
    }
    jumps(){
        console.log("kood rha hoon")
    }
};

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and he is a lion")
    }
    eats(){
        console.log("kha rha hoon roar")
    }
}

let a = new Animal("bunny");
console.log(a)

let l = new lion ("shera");
console.log(l)