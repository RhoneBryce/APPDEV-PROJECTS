let timeLeft = 30;
let countdownInterval;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// Update the timer display
function updateDisplay() {
    value.textContent = timeLeft;
    if (timeLeft > 0) {
        value.style.color = 'green';
    } else {
        value.style.color = 'black'; // Ensure the color is black when timer reaches zero
    }
}

// Start the countdown timer
function startTimer() {
    if (countdownInterval) return; // Prevent starting multiple timers

    countdownInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null; // Reset the interval ID
            return;
        }
        timeLeft--;
        updateDisplay();
    }, 1000); // Update every second
}

// Reset the countdown timer
function resetTimer() {
    clearInterval(countdownInterval);
    countdownInterval = null;
    timeLeft = 30;
    updateDisplay();
}

// Event listeners for buttons
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('start')) {
            startTimer();
        } else if (styles.contains('reset')) {
            resetTimer();
        }
    });
});

// Initial display update
updateDisplay();
