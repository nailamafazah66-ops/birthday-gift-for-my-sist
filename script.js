/* ==========================================
   SCREEN
========================================== */

const screens = {
    game: document.getElementById("gameScreen"),
    flower: document.getElementById("flowerScreen"),
    pin: document.getElementById("pinScreen"),
    birthday: document.getElementById("birthdayScreen"),
    letter: document.getElementById("letterScreen"),
    memory: document.getElementById("memoryScreen"),
    closing: document.getElementById("closingScreen"),
    final: document.getElementById("finalScreen")
};

function showScreen(screen) {

    Object.values(screens).forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");

    window.scrollTo(0, 0);
}


/* ==========================================
   MUSIC
========================================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

music.volume = 0.5;


/*
    TIDAK autoplay.
    Musik mulai ketika tombol ditekan.
*/

musicBtn.addEventListener("click", async () => {

    try {

        if (music.paused) {

            await music.play();

            musicPlaying = true;

            musicBtn.classList.add("playing");
            musicBtn.textContent = "❚❚";

        } else {

            music.pause();

            musicPlaying = false;

            musicBtn.classList.remove("playing");
            musicBtn.textContent = "♫";

        }

    } catch (error) {

        console.error("Music error:", error);

        alert(
            "Musik tidak bisa diputar. Pastikan file sunflower.mp3 ada di GitHub."
        );

    }

});

music.addEventListener("play", () => {

    musicPlaying = true;

    musicBtn.classList.add("playing");
    musicBtn.textContent = "❚❚";

});

music.addEventListener("pause", () => {

    musicPlaying = false;

    musicBtn.classList.remove("playing");
    musicBtn.textContent = "♫";

});

music.addEventListener("error", () => {

    console.error(
        "File musik tidak ditemukan:",
        music.currentSrc
    );

});


/* ==========================================
   GAME
========================================== */

const members = document.querySelectorAll(".member");
const wrongMessage = document.getElementById("wrongMessage");
const keyFound = document.getElementById("keyFound");

let gameFinished = false;

members.forEach(member => {

    member.addEventListener("click", () => {

        if (gameFinished) return;

        const number = member.dataset.member;


        /* NOMOR 7 = BENAR */

        if (number === "7") {

            gameFinished = true;

            keyFound.classList.add("show");

            return;
        }


        /* YANG LAIN = SALAH */

        member.classList.remove("shake");

        void member.offsetWidth;

        member.classList.add("shake");

        wrongMessage.classList.remove("show");

        void wrongMessage.offsetWidth;

        wrongMessage.classList.add("show");

    });

});


/* ==========================================
   FLOWERS
========================================== */

const nextFlowerBtn =
    document.getElementById("nextFlowerBtn");

const flowerContainer =
    document.getElementById("flowerContainer");

const flowerImages = [
    "flower 1.png",
    "flower 2.png",
    "flower 3.png"
];

function createFlowers() {

    flowerContainer.innerHTML = "";

    const columns = 10;
    const rows = 10;

    let index = 0;

    for (let row = 0; row < rows; row++) {

        for (let col = 0; col < columns; col++) {

            const flower =
                document.createElement("div");

            flower.className = "flower";


            const x =
                -55 +
                (col / (columns - 1)) * 110;

            const y =
                -70 +
                (row / (rows - 1)) * 140;


            const xVariation =
                Math.sin(index * 1.7) * 3;

            const yVariation =
                Math.cos(index * 1.3) * 3;


            const scale =
                1.05 +
                ((index * 7) % 5) * 0.12;


            const rotation =
                -15 +
                ((index * 23) % 30);


            flower.innerHTML = `
                <img src="${flowerImages[index % 3]}" alt="">
            `;


            flower.style.setProperty(
                "--x",
                `${x + xVariation}vw`
            );

            flower.style.setProperty(
                "--y",
                `${y + yVariation}vh`
            );

            flower.style.setProperty(
                "--scale",
                scale
            );

            flower.style.setProperty(
                "--rotation",
                `${rotation}deg`
            );


            const delay =
                (index % 10) * 0.025 +
                Math.floor(index / 10) * 0.018;

            flower.style.setProperty(
                "--delay",
                `${delay}s`
            );


            flowerContainer.appendChild(flower);

            index++;
        }
    }
}


nextFlowerBtn.addEventListener("click", () => {

    showScreen(screens.flower);

    createFlowers();

    setTimeout(() => {

        showScreen(screens.pin);

    }, 1900);

});


/* ==========================================
   PIN
========================================== */

const pinInput =
    document.getElementById("pinInput");

const pinBtn =
    document.getElementById("pinBtn");

const pinError =
    document.getElementById("pinError");

const correctPIN = "26092000";


function checkPIN() {

    if (pinInput.value === correctPIN) {

        pinError.classList.remove("show");

        showScreen(screens.birthday);

    } else {

        pinError.classList.add("show");

        pinInput.value = "";

        pinInput.focus();

    }

}


pinBtn.addEventListener("click", checkPIN);


pinInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        checkPIN();

    }

});


pinInput.addEventListener("input", () => {

    pinInput.value =
        pinInput.value
            .replace(/\D/g, "")
            .slice(0, 8);

});


/* ==========================================
   BIRTHDAY → LETTER
========================================== */

document
    .getElementById("birthdayNext")
    .addEventListener("click", () => {

        showScreen(screens.letter);

    });


/* ==========================================
   LETTER → MEMORY
========================================== */

document
    .getElementById("letterNext")
    .addEventListener("click", () => {

        showScreen(screens.memory);

    });


/* ==========================================
   MEMORY
========================================== */

const memoryPhoto =
    document.getElementById("memoryPhoto");

const memoryCaption =
    document.getElementById("memoryCaption");

const photoCounter =
    document.getElementById("photoCounter");

const polaroid =
    document.getElementById("polaroid");


/*
    10 FOTO BERBEDA.
    Foto benar-benar berganti file.
*/

const memories = [

    {
        image: "foto 1.jpeg",
        caption:
            "Some moments are small, but they become memories forever. ♡"
    },

    {
        image: "foto 2.jpeg",
        caption:
            "Growing up with you is one of my favorite things. ♡"
    },

    {
        image: "foto 3.jpeg",
        caption:
            "A little moment that I will always remember."
    },

    {
        image: "foto 4.jpeg",
        caption:
            "Thank you for all the laughs we have shared."
    },

    {
        image: "foto 5.jpeg",
        caption:
            "Life feels a little warmer with you around. ♡"
    },

    {
        image: "foto 6.jpeg",
        caption:
            "Another memory I want to keep forever."
    },

    {
        image: "foto 7.jpeg",
        caption:
            "From little moments to memories that last forever."
    },

    {
        image: "foto 8.jpeg",
        caption:
            "I'm really lucky to call you my sister. ♡"
    },

    {
        image: "foto 9.jpeg",
        caption:
            "Here's to all the memories we already have."
    },

    {
        image: "foto 10.jpeg",
        caption:
            "And here's to many more memories together. ♡"
    }

];


let currentPhoto = 0;


function updateMemory() {

    polaroid.classList.remove("change");

    void polaroid.offsetWidth;

    polaroid.classList.add("change");


    const memory =
        memories[currentPhoto];


    /*
        INI YANG MENGGANTI FOTO:
        foto 1 → foto 2 → ... → foto 10
    */

    memoryPhoto.src = memory.image;

    memoryCaption.textContent =
        memory.caption;

    photoCounter.textContent =
        `${currentPhoto + 1} / 10`;

}


function nextMemory() {

    if (currentPhoto < 9) {

        currentPhoto++;

        updateMemory();

    } else {

        showScreen(screens.closing);

    }

}


function previousMemory() {

    if (currentPhoto > 0) {

        currentPhoto--;

        updateMemory();

    }

}


document
    .getElementById("nextPhoto")
    .addEventListener("click", nextMemory);

document
    .getElementById("nextPhotoRight")
    .addEventListener("click", nextMemory);

document
    .getElementById("prevPhoto")
    .addEventListener("click", previousMemory);


/* ==========================================
   CLOSING → FINAL
========================================== */

document
    .getElementById("closingNext")
    .addEventListener("click", () => {

        showScreen(screens.final);

    });


/* ==========================================
   PRELOAD FOTO
========================================== */

const preloadImages = [

    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",

    "kunci.png",
    "spiderman.png",

    "flower 1.png",
    "flower 2.png",
    "flower 3.png",

    "background.jpg",

    "foto 1.jpeg",
    "foto 2.jpeg",
    "foto 3.jpeg",
    "foto 4.jpeg",
    "foto 5.jpeg",
    "foto 6.jpeg",
    "foto 7.jpeg",
    "foto 8.jpeg",
    "foto 9.jpeg",
    "foto 10.jpeg"

];

preloadImages.forEach(src => {

    const img = new Image();

    img.src = src;

});


/* START */

showScreen(screens.game);
