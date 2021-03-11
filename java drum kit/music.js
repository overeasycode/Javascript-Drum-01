
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keys__key[data-key="${e.keyCode}"]`);

    if (!audio) return; // stops function from running all together;
    audio.currentTime = 0; //rewind to the start when already clicked
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip if not transform
    console.log(this);

    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.keys__key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);


