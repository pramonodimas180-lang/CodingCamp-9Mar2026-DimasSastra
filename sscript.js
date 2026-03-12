//Jam + Greeting

function updateTime(){
    let now = new Date()
    let time = now.toLocaleTimeString()
    let date = now.toDateString()

    document.getElementById("time").innerText = time
    document.getElementById("date").innerText = date

    let hour = now.getHours()
    let greeting = " "

    if(hour < 12){
        greeting = "Good Morning"
    }
    else if(hour < 18){
        greeting = "Good Afternoon"
    }
    else{
        greeting = "Good Evening"
    }

    document.getElementById("greeting").innerText = greeting
}

setInterval(updateTime, 1000)

//Timer

let timeLeft = 1500
let timer

function startTimer(){
    timer = setInterval(function(){
        timeLeft--
        let minutes = Math.floor(timeLeft/60)
        let seconds = timeLeft % 60

        document.getElementById("timer").innerText = minutes + ":" + (seconds<10?"0":" ") + seconds
    },1000)
}

function stopTimer(){
    clearInterval(timer)
}

function resetTimer(){
    clearInterval(timer)

    timeLeft = 1500
    document.getElementById("timer").innerText = "25:00"
}

//To-Do List

function addTask(){
    let input = document.getElementById("taskInput")
    let taskText = input.value 
    if(taskText === " ") return
    let li = document.createElement("li")
    li.innerHTML = taskText + '<button onclick="this.parentElement.remove()">Delete</button>'
    document.getElementById("taskList").appendChild(li)
    input.value=" "
}
