// Audio player, plays the music and has a progress bar
// very cool
// stuff
const play_icon = document.getElementById("audio_player_button"); // play/pause button
const seek_slider = document.getElementById("seek_slider"); // progress bar
const duration_text = document.getElementById("duration"); // duration text
const current_time_text = document.getElementById("current_time"); // current time text
const volume_slider = document.getElementById("volume_slider"); // volume slider

// audio state
let state = "paused";

// audio var
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
    } else {
        state = "playing";
        play_icon.src = "media/pause.svg";
    }
});

// toggle audio player with play/pause button
function toggle_audio_player() {
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

// convert time/seconds to minutes:seconds
function time_convert(time) {
    if (isNaN(time)) {  // if time is not a number check
        return "0:00";
    }
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    
    if (seconds < 10) {  // add 0 to seconds if seconds < 10
        seconds = "0" + String(seconds);
    }

    return String(minutes) + ":" + String(seconds);
}

// update audio player per 0.25s
function update_audio_player() {
    setTimeout(function () {
        if (state == "playing") {
            var audio_duration = audio.duration;
            var audio_current_time = audio.currentTime;
            var audio_progress = audio_current_time / audio_duration * 100;
            
            // update info
            duration_text.innerHTML = time_convert(audio_duration);
            current_time_text.innerHTML = time_convert(audio_current_time);

            // update progress bar
            seek_slider.value = audio_progress;
        }
        update_audio_player();
    }, 1000);
}

// when window is not scrollable, stick it to the bottom of screen
// else make position relative to page contents
function update_audio_player_div_position() {
    if (document.body.scrollHeight <= window.innerHeight) {
        // when window is not scrollable
        document.getElementById("audio_player_div").style.position = "fixed";
    } else {
        // when window is scrollable
        document.getElementById("audio_player_div").style.position = "relative";
    }
}

// change music time when user wants to seek
seek_slider.addEventListener('input', function() {
    var seekto = audio.duration * (seek_slider.value / 100);
    audio.currentTime = seekto;
}
);

// change volume on volume bar change
volume_slider.addEventListener('input', function() {
    audio.volume = volume_slider.value / 100;
}
);

// start functions
update_audio_player();