const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval
let timeLeft = 1500;


function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    if(timeLeft === 0 && minutes === 0){
        clearInterval(interval)
        alert("Pomodoro finished")
        timeLeft = 1500;
    }else{
        let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}` //padStart is a function that sets up a minimum digits and fills it with a number provided (string)
        timerEl.innerHTML = formattedTime;
    }
}

function startTimer(){
    interval = setInterval(() => {
        timeLeft--;
        updateTimer()
    }, 1000) //setInterval() is a function that executes the code the function on the first parameter each miliseconds provided on the second parameter

}
function stopTimer(){
    clearInterval(interval)
    updateTimer()
}
function resetTimer(){
    clearInterval(interval)
    timeLeft = 1500;
    updateTimer()
}


startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)