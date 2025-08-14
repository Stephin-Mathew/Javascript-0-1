//Values that cant be changed , used as a safety measurement for variables whose values doesnt need to be changed

const PI = 3.14;
let radius;
let circumference;

document.getElementById("submit").onclick = function () {
    radius = document.getElementById("textBox").value;
    radius = Number(radius);
    circumference = 2 * radius * PI;
    console.log(circumference);
    document.getElementById("myh3").textContent = circumference;
    document.getElementById("textBox").value = "";
}
