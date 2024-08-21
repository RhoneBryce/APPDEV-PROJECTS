let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--; // Decrease1
        } else if (styles.contains('increase')) {
            count++; // Increase1
        } else if (styles.contains('decrease-five')) {
            count -= 5; // Decrease5
        } else if (styles.contains('increase-five')) {
            count += 5; // Increase5
        } else if (styles.contains('random')) {
            count = Math.floor(Math.random() * 101) - 50; // Randomnumber
        } else if (styles.contains('reset')) {
            count = 0; // Reset0
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