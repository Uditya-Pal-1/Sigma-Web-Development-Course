console.log("Hacker")
console.log("Hacking")

// setTimeout (() => {
//     console.log("i am inserted by setTimeout")
// },2000)

// console.log("The End")

setTimeout (() => {
    console.log("i am inserted by setTimeout")
},0)

setTimeout (() => {
    console.log("i am inserted by setTimeout 2")
},0)


console.log("The End")


const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn)=>{
    console.log(arg)
    fn()
}


const loadScript = (src, callback)=> {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Aman", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);                                  