class count {
    constructor() {
        
    }
    start() {
        tens = 1
        console.log(tens)
        return
    }

    stop() {

    }

    reset() {

    }
}

var startButton = document.getElementsByClassName('start-btn')[0]
var timeDisplay = document.getElementById('display-time')
var seconds = 0
var tens = 0



const couting = new count(seconds, tens)
startButton.addEventListener('click', function () {
    couting.start()
}) 

if ((seconds <= 9) || (tens <= 9)) {
    seconds = seconds + '0'
    tens = tens + '0'
    timeDisplay.innerHTML = `${seconds}:${tens}`
} else {
    timeDisplay.innerHTML = `${seconds}:${tens}`
}

