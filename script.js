document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
})

document.querySelector('.composer button').addEventListener('click', () => {
    const song = document.querySelector('#input').value;

    if (song !== '') {
        // converter uma string em um array, separando cada letra
        const songArray = song.split('');
        playComposition(songArray);
    }
})

function playSound(sound) {
    const audioElement = document.querySelector(`#s_${sound}`);
    const keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0; // resolve o bug de time ao clicar mais de uma vez
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300)
    }
}

function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 300;
    }
}