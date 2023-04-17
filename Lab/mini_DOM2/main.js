//IN YOUR JS FILE select the H1 element and set the textContent = some text

text= document.querySelector("h1")
text.textContent= "Disney World !"


let hide = document.getElementById("hide-btn")
hide.eventListener("click", () => {
    text.textContent.display="none";
}) 