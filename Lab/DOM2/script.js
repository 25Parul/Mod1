
const clickMeBtn = document.querySelector("button")
const userText= document.querySelector("#user-input")
let para = document.querySelector("p")



clickMeBtn.addEventListener("click", () => {
    if (userText.value.length > 1) {
        para.textContent=userText.value
    } else if (userText.value<1) {
        userText.placeholder = "Write something here before clicking"



    }

})


