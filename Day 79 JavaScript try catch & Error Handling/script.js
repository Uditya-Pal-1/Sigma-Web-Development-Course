let a = prompt("Enter a Number")

let b = prompt("Enter Another Number")
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)


try {
    console.log("the sum is ",sum*x)

} catch (error) {
    console.log("error aa gya ")   
}
finally{
    console.log("files are being closed and db connection is being closed")
}
