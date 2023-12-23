const clickButton = document.querySelector(".click-button")

function randomNumbers(){
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    const results = Math.floor(Math.random() * (max - min + 1) + min)

    alert(results)
}

clickButton.addEventListener("click", randomNumbers)