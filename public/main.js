const audio = document.getElementById("bgMusic");
audio.volume = 0.2;
document.addEventListener("click", () => {
    if (audio.paused) {
audio.play();
    }
}, {once: true});
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();
        if (audio.paused) { 
            audio.play();
        } else {
            audio.pause();
        }
    }
});
