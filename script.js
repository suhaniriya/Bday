/* =====================================================
   BIRTHDAY SURPRISE WEBSITE
   ===================================================== */


/* ================= PASSWORD ================= */

function unlock() {

    var password = document.getElementById("password").value;

    var message = document.getElementById("message");

    var passwordScreen =
        document.getElementById("password-screen");

    var mainSite =
        document.getElementById("main-site");

    var musicPlayer =
        document.querySelector(".music-player");


    if (password === "ikko ke papa riya ke hubby") {

        passwordScreen.classList.remove("active");

        mainSite.style.display = "block";

        musicPlayer.classList.add("show");

        showScreen("home");

    } else {

        message.innerHTML =
            "💕 Hmm... try again!";

    }

}


/* ================= SCREEN NAVIGATION ================= */

function showScreen(screenId) {

    var screens =
        document.getElementsByClassName("screen");


    for (var i = 0; i < screens.length; i++) {

        screens[i].classList.remove("active");

    }


    document
        .getElementById(screenId)
        .classList.add("active");

}


/* =====================================================
   MUSIC
   ===================================================== */


/* Music files */

var songs = {

    1: "music/song1.mp3",

    2: "music/song2.mp3",

    3: "music/song3.mp3"

};


/* Music names */

var musicNames = {

    1: "Song 1 ❤️",

    2: "Song 2 💕",

    3: "Song 3 💗"

};


/* Current song */

var currentSong = 0;


/* ================= CHOOSE SONG ================= */

function chooseSong(number) {

    var music =
        document.getElementById("bgMusic");

    var musicName =
        document.getElementById("music-name");

    var playButton =
        document.getElementById("play-button");


    currentSong = number;


    music.src = songs[number];

    music.volume =
        document.getElementById("volume").value;


    musicName.innerHTML =
        "Playing: " + musicNames[number];


    music.play();


    playButton.innerHTML =
        "⏸️ Pause";

}


/* ================= PLAY / PAUSE ================= */

function playPause() {

    var music =
        document.getElementById("bgMusic");

    var playButton =
        document.getElementById("play-button");

    var musicName =
        document.getElementById("music-name");


    /* If no song has been selected */

    if (currentSong === 0) {

        chooseSong(1);

        return;

    }


    /* Music currently playing */

    if (!music.paused) {

        music.pause();

        playButton.innerHTML =
            "▶️ Play";

        musicName.innerHTML =
            "Music paused ⏸";

    }


    /* Music is paused */

    else {

        music.play();

        playButton.innerHTML =
            "⏸️ Pause";

        musicName.innerHTML =
            "Playing: " + musicNames[currentSong];

    }

}


/* ================= VOLUME ================= */

function changeVolume() {

    var music =
        document.getElementById("bgMusic");

    var volume =
        document.getElementById("volume").value;


    music.volume = volume;

}


/* =====================================================
   PHOTOS
   ===================================================== */


/* All 19 photos */

var photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg",
    "images/photo11.jpg",
    "images/photo12.jpg",
    "images/photo13.jpg",
    "images/photo14.jpg",
    "images/photo15.jpg",
    "images/photo16.jpg",
    "images/photo17.jpg",
    "images/photo18.jpg",
    "images/photo19.jpg"
];


var currentPhoto = 0;


/* ================= SHOW PHOTO ================= */


function showPhoto(number, direction) {
    var image = document.getElementById("memory-image");
    var polaroid = document.querySelector(".polaroid");
    var dots = document.getElementsByClassName("dot");

    if (direction === undefined) {
        direction = number >= currentPhoto ? "next" : "previous";
    }

    currentPhoto = number;

    polaroid.classList.remove("slide-next", "slide-previous");

    // Restart the animation smoothly
    void polaroid.offsetWidth;

    image.src = photos[currentPhoto];

    if (direction === "next") {
        polaroid.classList.add("slide-next");
    } else {
        polaroid.classList.add("slide-previous");
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    if (dots[currentPhoto]) {
        dots[currentPhoto].classList.add("active");
    }
}

function nextPhoto() {
    var next = (currentPhoto + 1) % photos.length;
    showPhoto(next, "next");
}

function previousPhoto() {
    var previous = (currentPhoto - 1 + photos.length) % photos.length;
    showPhoto(previous, "previous");
}



/* ================= NEXT PHOTO ================= */

function nextPhoto() {

    currentPhoto++;


    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }


    showPhoto(currentPhoto, "next");

}


/* ================= PREVIOUS PHOTO ================= */

function previousPhoto() {

    currentPhoto--;


    if (currentPhoto < 0) {

        currentPhoto =
            photos.length - 1;

    }


    showPhoto(currentPhoto, "previous");

}


/* =====================================================
   REASONS
   ===================================================== */

function showReason(number) {

    var boxes =
        document.getElementsByClassName("reason-card");


    /* Remove selected from all cards */

    for (var i = 0; i < boxes.length; i++) {

        boxes[i]
            .classList
            .remove("selected");

    }


    /* Select clicked card */

    boxes[number - 1]
        .classList
        .add("selected");


    var message =
        document.getElementById("reason-message");


    if (number === 1) {

        message.innerHTML =
            "Because aap hamesha mere bure wqt me mko support krte ho, mko pyaar krte ho. ❤️";

    }


    if (number === 2) {

        message.innerHTML =
            "Because being with you feels like home alwaysss. 🥹💕";

    }


    if (number === 3) {

        message.innerHTML =
            "Because i feel like jaise mera tumse koi ,peechle janam ka wasta h .... 💗";

    }


    if (number === 4) {

        message.innerHTML =
            "Because yuhiii bss ... meri mrzii. ❤️";

    }

}


/* =====================================================
   FINAL GIFT
   ===================================================== */

function openGift() {

    var gift =
        document.querySelector(".gift-box");

    var clickText =
        document.getElementById("click-gift-text");

    var message =
        document.getElementById("final-message");


    /* Open the gift */

    gift.classList.add("opened");


    /* Remove "Click the gift" */

    clickText.style.display = "none";


    /* Show final message */

    message.innerHTML = `

        <h2>
            Happy Birthday Badmaash ❤️
        </h2>

        <h3>
            My Shona Babuu ❤️
        </h3>

        <p>
            Happy birthday to you, tum jiyo hazaron
            saal (mere saath) ye meri h arzoo 🥹
        </p>

        <p>
            I love you more than words can say. 🥹💕
        </p>

        <p class="final-signature">
            Forever yours,<br>
            Ikko ki mummaa ❤️
        </p>

    `;

}


/* =====================================================
   INITIAL SETUP
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    var mainSite =
        document.getElementById("main-site");


    /* Hide website until password is entered */

    mainSite.style.display = "none";


    /* Set default volume */

    var music =
        document.getElementById("bgMusic");

    music.volume = 0.7;

}
)
/* ================= ENTER KEY FOR PASSWORD ================= */

document.getElementById("password").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        unlock();
    }
});