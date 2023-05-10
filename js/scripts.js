const text = 'Click.Here.Stay.Tuned';
const typewriterElement = document.getElementById('typewriter');
const typewriterTextElement = typewriterElement.querySelector('span');
let index = 0;

function typeCharacter() {
    if (index < text.length) {
        typewriterTextElement.innerText = text.slice(0, index + 1);
        index++;
        setTimeout(typeCharacter, 100);
    } else {
        setTimeout(() => {
            typewriterTextElement.innerText = '';
            index = 0;
            typeCharacter();
        }, 3500);
    }
}

typeCharacter();

const footer = document.getElementById('footer');

document.addEventListener('mousemove', (e) => {
    const screenHeight = window.innerHeight;
    const mouseY = e.clientY;

    // Changez cette valeur pour ajuster la distance à partir du bas de l'écran
    const showFooterDistance = 50;

    if (screenHeight - mouseY <= showFooterDistance) {
        footer.style.opacity = '1';
    } else {
        footer.style.opacity = '0';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var epilepsyWarningModal = document.getElementById('epilepsyWarningModal');
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');

    epilepsyWarningModal.style.display = 'block';

    yesButton.addEventListener('click', function () {
        epilepsyWarningModal.style.display = 'none';
        document.body.classList.add("epileptic-background");
    });

    noButton.addEventListener('click', function () {
        epilepsyWarningModal.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var countdownElement = document.getElementById('countdown');
    var countdownTextElement = document.getElementById('countdownText');
    var countdownDate = new Date('June 08, 2023 00:00:00 UTC+2').getTime();

    function updateCountdown() {
        var now = new Date().getTime();
        var timeLeft = countdownDate - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownTextElement.textContent = 'Project #2 - SOON :  ';
        countdownElement.textContent = days + 'j ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Terminé';
        }
    }

    var countdownInterval = setInterval(updateCountdown, 1000);
});