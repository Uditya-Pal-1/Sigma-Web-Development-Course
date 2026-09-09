function changeBackground(color) {
    document.body.style.background = color;
}

window.addEventListener("load", function () { changeBackground('green') });
function textColor(color) {
    document.body.style.color = color;
}

window.addEventListener("load", function () { textColor('black') });