const button = document.querySelector(".share")

const redes = document.querySelector(".redes")

//Add event in the button
button.addEventListener("click", () => {
    redes.classList.toggle("active")
    console.log("button")
})