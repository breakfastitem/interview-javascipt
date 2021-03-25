/**
 * Static Varibles
 */
const MAX_NUMBER = 100000;
const MAX_WIN_NUMBER = 1000;
const ROLL_NUMBER = 15;
const ROLL_INTERVAL = 100;

const NUM_DISPLAY = document.getElementById("num-display");

//prevents button from being spam clickeds
let isRolling=false;

/**
 * Functions
 */
function handlePlay(event) {
    event.preventDefault();

    if(isRolling){
        return;
    }
    isRolling=true;

    let rollNumbers = [];

    for (let i = 0; i < ROLL_NUMBER; i++) {
        rollNumbers[i] = Math.floor(Math.random() * MAX_NUMBER);
    }

    let message = "Too Bad, You Lost!";

    if (rollNumbers[rollNumbers.length - 1] <= 1000) {
        message = "Congratulations, You Won!"
    };

    let count = 0;

    let interval = setInterval(() => {

        NUM_DISPLAY.textContent = rollNumbers[count];
        count++;
        if (count === rollNumbers.length) {
            clearInterval(interval);

            //Allows Display to update before alerting
            setTimeout(() => {
                alert(message);
                isRolling=false;
            }, 1)

        }

    }, ROLL_INTERVAL);

}

/**
 * Event Listeners
 */
document.getElementById("play-button")
    .addEventListener("click", handlePlay);

/**
 * Main
 */