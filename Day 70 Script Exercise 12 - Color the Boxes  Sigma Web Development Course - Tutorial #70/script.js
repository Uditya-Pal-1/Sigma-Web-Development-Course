document.addEventListener("DOMContentLoaded", function () {
let arr = ["blue", "pink", "green", "lightblue", "brown", "yellow", "purple", "aqua", "red", "violet", "gray", "orange"];
    let boxcolor = document.querySelectorAll(".box");

    boxcolor.forEach((element) => {
        let random = Math.floor(Math.random() * arr.length);
        element.style.backgroundColor = arr[random];
    });
});
