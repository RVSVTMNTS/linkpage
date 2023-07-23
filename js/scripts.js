/* DISCLAIMER / EPILEPSY WARNING *******************************************************************/
window.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('epilepsyWarningContent');
    modal.classList.add('visible');
});

/* FOND NOIR SI OUI ************************************************************************/

document.addEventListener('DOMContentLoaded', function () {
    var epilepsyWarningModal = document.getElementById('epilepsyWarningModal');
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var continueButton = document.getElementById('continueButton');

    function enableContinueButton() {
        continueButton.disabled = false;
    }

    yesButton.addEventListener('change', enableContinueButton);
    noButton.addEventListener('change', enableContinueButton);

    continueButton.addEventListener('click', function () {
        epilepsyWarningModal.style.display = 'none';
        if (yesButton.checked) {
            document.body.classList.add("epileptic-background");
        }
    });
});

/* COUNTDOWN ************************************************************************************/ 
document.addEventListener('DOMContentLoaded', function () {
    var countdownElement = document.getElementById('countdown');
    var countdownTextElement = document.getElementById('countdownText');
    var countdownDate = new Date('July 10, 2023 00:00:00 UTC+2').getTime();

    function updateCountdown() {
        var now = new Date().getTime();
        var timeLeft = countdownDate - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownTextElement.textContent = 'RVSEVENTS :  ';
        countdownElement.textContent = days + 'j ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'Terminé';
        }
    }

    var countdownInterval = setInterval(updateCountdown, 1000);
});

/* TYPEWRITERS ************************************************************************/

function typeCharacter(text, typewriterElementId, delay, resetDelay) {
    const typewriterElement = document.getElementById(typewriterElementId);
    const typewriterTextElement = typewriterElement.querySelector('span');
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterTextElement.innerText = text.slice(0, index + 1);
            index++;
            setTimeout(type, delay);
        } else {
            setTimeout(() => {
                typewriterTextElement.innerText = '';
                index = 0;
                type();
            }, resetDelay);
        }
    }

    type();
}

const text = 'Click.Here.Stay.Tuned';
const typewriterElementId = 'typewriter';
const delay = 100;
const resetDelay = 3500;

typeCharacter(text, typewriterElementId, delay, resetDelay);

const text2 = 'PRE_ORDER_NOW_';
const typewriterElementId2 = 'projet-button-spe';
const delay2 = 100;
const resetDelay2 = 3500;

typeCharacter(text2, typewriterElementId2, delay2, resetDelay2);

/* SHOW FOOTER ********************************************************************************************/
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

