//async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject.


async function getdata() {
    // Simulate getting data from a server.
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(x);
    return data
}
async function main() {

    console.log("Load modules ");

    console.log("Do something Else ");

    console.log("Load Data ");

    let data = await getdata()

    console.log(data)

    console.log("Process Data ");

    console.log("Task 2")

}

main()

// let data = getdata()

// data.then((v)=>{
//     console.log(data)
// })
// console.log(data)

// console.log("Process Data ");

// console.log("Task 2")