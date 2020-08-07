let currentSong = 1;
let songsList = [];

const songTitle = document.querySelector("h1");
const uploadFileLabel = document.querySelector("label");
const uploadFileInput = document.querySelector("input");
const player = document.querySelector("audio");
const playButton = document.querySelector("#play");
const stopButton = document.querySelector("#stop");
const previousSongButton = document.querySelector("#prev");
const nextSongButton = document.querySelector("#next");

function getSelectedSongs(event) {
  songsList = event.target.files;
  uploadFileLabel.style.display = "none";

  playSong();
}

function playSong() {
  const songUrl = URL.createObjectURL(songsList[currentSong - 1]);

  player.setAttribute("src", songUrl);
  songTitle.innerText = songsList[currentSong - 1].name;
  playButton.innerText = "⏸";
  player.play();

  playButton.onclick = pauseSong;
}

function pauseSong() {
  playButton.innerText = "▶";
  player.pause();

  playButton.onclick = continuePlayingSong;
}

function continuePlayingSong() {
  playButton.innerText = "⏸";
  player.play();

  playButton.onclick = pauseSong;
}

function stopSong() {
  player.pause();
  player.currentTime = 0;
  playButton.innerText = "▶";

  playButton.onclick = continuePlayingSong;
}

function nextSong() {
  currentSong = currentSong + 1;

  if (currentSong > songsList.length) {
    currentSong = 1;
  }

  playSong();
}

function previousSong() {
  currentSong = currentSong - 1;

  if (currentSong < 1) {
    currentSong = songsList.length;
  }

  playSong();
}

uploadFileInput.onchange = getSelectedSongs;
stopButton.onclick = stopSong;
nextSongButton.onclick = nextSong;
previousSongButton.onclick = previousSong;
