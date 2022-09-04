// document.getElementById("count-el").innerText = 5,
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count++
    countEl.innerText = count
}

function decrease() {

    if(count <= 0) {
        document.getElementById("count-el").innerText = 0
    }else {
        count--
        document.getElementById("count-el").innerText = count
    }
}


function save() {
    let track =  " " +count + " - "

    saveEl.textContent += track
    console.log(count)

        
    count = 0
    
    countEl.textContent = count
}