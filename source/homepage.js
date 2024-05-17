// Carousel JS
let left = document.querySelector(".clickLeft")
let right = document.querySelector(".clickRight")
let img = document.getElementById("image")
let container = document.querySelector('.container')
let imgArray = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg"
]
let decision = 0;

window.addEventListener("DOMContentLoaded", function(){
    img.src = imgArray[0]
})

left.addEventListener('click', function(){
    img.classList.remove("fadeIn")
    setTimeout(() => {
        if (decision == 0){
            img.src = imgArray[decision = 2]
            img.classList.add("fadeIn")
        } else {
            img.src = imgArray[decision -= 1]
            img.classList.add("fadeIn")
        }
    }, 500);
    
})

right.addEventListener('click', function(){
    img.classList.remove("fadeIn")
    setTimeout(() => {
        if (decision == 2){
            img.src = imgArray[decision = 0]
            img.classList.add("fadeIn")
        } else {
            img.src = imgArray[decision += 1]
            img.classList.add("fadeIn")
        }
    }, 500);
})


// To Do List JS
let inputTdl = document.getElementById("inputTdl")
let columnText = document.querySelector(".columnText")
let columnCheck = document.querySelector(".columnCheckBtn")
let columnTrash = document.querySelector(".columnTrashBtn")
let addToDo = document.querySelector(".addToDo")
let errorMessage = document.querySelector(".error-message")

addToDo.addEventListener('click', function(){
    if (inputTdl.value === ''){
        errorMessage.innerText = "There's nothing to add..."
    } else {
        // Nambah TDL
        let paragraph = document.createElement('h3')
        paragraph.innerText = inputTdl.value
        columnText.appendChild(paragraph)
        inputTdl.value = " "

        errorMessage.innerText = ""

        // Nambah symbol centang
        let checkBtn = document.createElement('button')
        let checkImg = document.createElement('i')
        checkImg.classList.add("fa-solid")
        checkImg.classList.add("fa-check")
        checkBtn.appendChild(checkImg)
        columnCheck.appendChild(checkBtn)
        checkBtn.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through"
            checkBtn.style.backgroundColor = "white"
            checkBtn.style.color = "#010141"
        })
        checkBtn.addEventListener('dblclick', function(){
            paragraph.style.textDecoration = "none"
            checkBtn.style.backgroundColor = "transparent"
            checkBtn.style.color = "white"
        })

        // nambah symbol trash
        let trashBtn = document.createElement('button')
        let trashImg = document.createElement('i')
        trashImg.classList.add("fa-solid")
        trashImg.classList.add("fa-trash")
        trashBtn.appendChild(trashImg)
        columnTrash.appendChild(trashBtn)
        trashBtn.addEventListener('click', function(){
            columnTrash.removeChild(trashBtn)
            columnCheck.removeChild(checkBtn)
            columnText.removeChild(paragraph)
        })
    }
    
})

// Timer JS
let time = document.querySelector(".time")
let workText = document.getElementById("workText")
let breakText = document.getElementById("breakText")
let pomodoroContainer = document.querySelector(".pomodoroContainer")
let timer
let sec = 59
let minute = 24

window.addEventListener("DOMContentLoaded", function(){
    workText.style.textDecoration = "underline"
    breakText.style.textDecoration = "none"
    //supaya defaultnya di work
})

workText.addEventListener("click", function(){
    minute = 24
    sec = 59
    time.innerHTML = "25:00"
    workText.style.textDecoration = "underline"
    breakText.style.textDecoration = "none"
    workText.classList.add("underlined")
    breakText.classList.remove("underlined")
})

breakText.addEventListener("click", function(){
    minute = 4
    sec = 59
    time.innerHTML = "5:00"
    workText.style.textDecoration = "none"
    breakText.style.textDecoration = "underline"
    workText.classList.remove("underlined")
    breakText.classList.add("underlined")

})

function start(){
    timer = setInterval(() => {
        if (sec == 0){
            minute --;
            sec = 59
        }
        time.innerHTML = minute + ":" + sec
        sec--
    }, 1000);
}

function pause(){
    clearInterval(timer)
}

function reset(){
    if (breakText.classList.contains("underlined")){
        time.innerHTML = "5:00"
        clearInterval(timer)
    } else {
        time.innerHTML = "25:00"
        clearInterval(timer)
    }
}

// Toggle dark and light mode
let toggleCircle = document.querySelector(".toggleCircle")
let contentContainer = document.querySelector('.contentContainer')
let tdlContainer = document.querySelector(".tdlContainer")
let checkImg = document.querySelectorAll(".fa-check")
let pauseBtn = document.getElementById("pauseBtn")
let toggleButton = document.querySelector(".toggleButton")

toggleCircle.addEventListener("click", function(){
    toggleCircle.classList.toggle("active")
    contentContainer.classList.toggle("active")
    addToDo.classList.toggle("active")
    tdlContainer.classList.toggle("active")
    inputTdl.classList.toggle("active")
    pomodoroContainer.classList.toggle("active")
    pauseBtn.classList.toggle("active")  
    toggleButton.classList.toggle("active")  
})

