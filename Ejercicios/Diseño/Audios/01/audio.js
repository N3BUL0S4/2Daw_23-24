let currentlyPlaying;

function play(audioId) {
    stopAllAudios();
    const audio = document.getElementById(audioId);
    audio.play();
    currentlyPlaying = audioId;
}

function stop(audioId) {
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0;
    currentlyPlaying = null;
}

function avanzar(audioId, seconds) {
    const audio = document.getElementById(audioId);
    audio.currentTime += seconds;
}

function rebobinar(audioId, seconds) {
    const audio = document.getElementById(audioId);
    audio.currentTime -= seconds;
}

function stopAllAudios() {
    if (currentlyPlaying) {
        stop(currentlyPlaying);
    }
}