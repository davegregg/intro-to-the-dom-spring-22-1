let defaultTheme = "light" // Substitute for user interaction

let currentTheme = localStorage.getItem("theme")
if (currentTheme === null) {
    currentTheme = defaultTheme
    localStorage.setItem("theme", defaultTheme)
}

document.body.classList.add(currentTheme)




let sectionElement = document.querySelector("section")
console.dir(sectionElement)

// sectionElement.style.color = "green"
// sectionElement.style.backgroundColor = "brown"

sectionElement.classList.add("potato", "turkey")
sectionElement.classList.remove("turkey")
sectionElement.classList.toggle("turkey")
sectionElement.classList.toggle("turkey")



document.write("<h4 class='whatever'>HELLO WORLD</h4>")


function toggleLightMode () {
    document.body.classList.toggle("dark")
}

// setInterval(toggleLightMode, 5000)

let wavingBearURL = "https://media0.giphy.com/media/2rAKTgJIQe1buYU1R5/giphy.gif?cid=ecf05e474fc791383b71ad033cf37e5f9e74d492988dbfd7&rid=giphy.gif&ct=g"
function changeImage () {
    let imgElement = document.querySelector("#gif-greeting")
    imgElement.src = wavingBearURL
}

setTimeout(changeImage, 6000)

let row1Cells = document.querySelectorAll(".row-1 > .cell")
console.log(row1Cells)

for (let index = 0; index < row1Cells.length; index += 1) {
    let cellElement = row1Cells[index]
    
    console.log(cellElement)
    cellElement.classList.add("wall")

    cellElement.innerHTML = `<img src="${wavingBearURL}" width="15">`
}
// let row2CellsAsArray = Array.from(row2Cells)
// console.log(row2CellsAsArray)