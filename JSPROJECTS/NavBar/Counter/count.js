let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--; // Decrease
        } else if (styles.contains('increase')) {
            count++; // Increase
        } else if (styles.contains('decrease-five')) {
            count -= 5; // Decrease by Five
        } else if (styles.contains('increase-five')) {
            count += 5; // Increase by Five
        } else if (styles.contains('random')) {
            count = Math.floor(Math.random() * 101) - 50; // Random number between -50 and 50
        } else if (styles.contains('reset')) {
            count = 0; // Reset to zero
        }

        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }

        value.textContent = count;
    });
});
