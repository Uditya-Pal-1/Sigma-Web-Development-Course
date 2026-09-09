let button = document.getElementById("btn") 

button.addEventListener("click",()=>{
    // alert("I was clicked. Yahhhhh!")
    document.querySelector(".box").innerHTML= "<b> Hay you are clicked </b> Enjoy your click!"
})
button.addEventListener("contextmenu",()=>{
    // alert("I was clicked. Yahhhhh!")
    document.querySelector(".box").innerHTML= "<b> Hay you are rightclicked </b> Enjoy your right click!"
})
button.addEventListener("dblclick",()=>{
    // alert("I was clicked. Yahhhhh!")
    document.querySelector(".box").innerHTML= "<b> Hay you are double click</b> Enjoy your double click!"
})
button.addEventListener("keydown",(e)=>{
    // alert("I was clicked. Yahhhhh!")
    document.querySelector(".box").innerHTML= "<b> Hay you are clicked key down on your keyboard</b> Enjoy your double click!"
})