let numberCount = document.getElementById("counter")

let count = 0

function add() {
 count = count + 1
 numberCount.textContent = count
 console.log(count)
}

function subtract() {
 count = count - 1
 numberCount.textContent = count
 console.log(count)
}

