//IN YOUR JS FILE select the H1 element and set the textContent = some text

let heading= document.querySelector("h1");
heading.textContent= "Disney World !";


let hideButton = document.querySelector("#hide-btn");
hideButton.addEventListener("click", () => {
    heading.style.display="none";
}) ;


let unhideButton= document.querySelector("#unhide-btn");
unhideButton.addEventListener("click", () => {
    heading.style.display="block";
});