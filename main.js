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






//// practica

function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => {
      return downloadFallbackData(url); // returns a promise
    })
    .then((v) => {
      return processDataInWorker(v); // returns a promise
    });
}

// Function to fetch data from an API using Promises
function fetchDataWithPromises() {
  // Make a GET request to the API
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON data from the response
      return response.json();
    })
    .then(data => {
      // Handle the data
      console.log('Data received:', data);
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
}

// Call the function
fetchDataWithPromises();


// Function to fetch data from an API using async/await
async function fetchDataWithAsyncAwait() {
  try {
    // Make a GET request to the API and wait for the response
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Handle the data
    console.log('Data received:', data);
  } catch (error) {
    // Handle any errors
    console.error('Error:', error);
  }
}

// Call the function
fetchDataWithAsyncAwait();

