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