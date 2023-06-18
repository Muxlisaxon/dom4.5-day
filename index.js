var audioPlayer = document.getElementById('audioPlayer');
var playButton = document.getElementById('play-button');
var pauseButton = document.getElementById('pause-button');


function playAudio(song) {
    var audioPlayer = document.getElementById("audioPlayer");
    if (song === "song1") {
      audioPlayer.src = "./music/ragtime-logo-standard-version-116100.mp3";
    }else if(song === "song3"){
      audioPlayer.src = "./music/dark-guitar-130435.mp3";
    } else if (song === "song2") {
      audioPlayer.src = "./music/laughter-140503.mp3";
    }
    audioPlayer.play();
  }



playButton.addEventListener('click', function() {
    audioPlayer.play();
});

pauseButton.addEventListener('click', function() {
    audioPlayer.pause();
});
