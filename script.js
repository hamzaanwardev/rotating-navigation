
// Variables
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");


// adding show-nav class
open.addEventListener ("click", () => container.classList.add("show-nav"));
// removing show-nav class
close.addEventListener ("click", () => container.classList.remove("show-nav"));

