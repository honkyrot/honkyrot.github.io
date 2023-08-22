// audio player

const play_icon = document.getElementById("audio_player_button");
let state = "paused";

var audio = new Audio('media/Vanilla Calamity Mod Music - Serenity - Theme of the Lantern Festival.mp3');
audio.volume = 0.2;
audio.autoplay = true;
audio.controls = true;
audio.loop = true; 
audio.play();

// pre check if audio is already playing on document load
document.addEventListener("DOMContentLoaded", function() {
    if (audio.paused) {
        state = "paused";
        play_icon.src = "media/play.svg";
        console.log("audio is paused");
    } else {
        state = "playing";
        play_icon.src = "media/pause.svg";
        console.log("audio is playing");
    }
});

// toggle audio player with play/pause button
function toggle_audio_player() {
    console.log("toggle_audio_player() called");
    if (state == "paused") {
        state = "playing";
        play_icon.src = "media/pause.svg";
        audio.play();
    }
    else {
        state = "paused";
        play_icon.src = "media/play.svg";
        audio.pause();
    }
}