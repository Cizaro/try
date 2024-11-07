document.querySelectorAll('.custom-audio').forEach((audioPlayer) => {
    const customAudio = audioPlayer.querySelector('audio');
    const playPauseBtn = audioPlayer.querySelector('.play-pause');
    const progress = audioPlayer.querySelector('.progress');
    const timeDisplay = audioPlayer.querySelector('.time');

    playPauseBtn.addEventListener('click', () => {
        if (customAudio.paused) {
            customAudio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            customAudio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    customAudio.addEventListener('timeupdate', () => {
        const currentTime = customAudio.currentTime;
        const duration = customAudio.duration;
        const progressPercent = (currentTime / duration) * 100;
        progress.value = progressPercent;

        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
        timeDisplay.textContent = `${minutes}:${seconds}`;
    });

    progress.addEventListener('input', (e) => {
        const duration = customAudio.duration;
        customAudio.currentTime = (e.target.value / 100) * duration;
    });
});
