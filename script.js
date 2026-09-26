/* ==========================================
   ELEMENTS
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


/* ==========================================
   SCREEN SWITCHER
========================================== */

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

music.volume = 0.45;


/*
    Music TIDAK autoplay.
    Baru menyala setelah tombol ditekan.
*/

musicBtn.addEventListener("click", async () => {

    try {

        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

            musicBtn.classList.remove("playing");

            musicBtn.textContent = "♫";

        } else {

            await music.play();

            musicPlaying = true;

            musicBtn.classList.add("playing");

            musicBtn.textContent = "❚❚";
        }

    } catch (error) {

        console.log("Music tidak dapat dimainkan:", error);

    }

});


/* ==========================================
   GAME
========================================== */

const members = document.querySelectorAll(".member");

const wrongMessage =
    document.getElementById("wrongMessage");

const keyFound =
    document.getElementById("keyFound");


let gameFinished = false;


members.forEach(member => {

    member.addEventListener("click", () => {

        if (gameFinished) {
            return;
        }

        const number =
            member.dataset.member;


        /* =========================
           BENAR: NOMOR 7
        ========================== */

        if (number === "7") {

            gameFinished = true;

            keyFound.classList.add("show");

            return;
        }


        /* =========================
           SALAH
        ========================== */

        member.classList.remove("shake");

        void member.offsetWidth;

        member.classList.add("shake");

        wrongMessage.classList.remove("show");

        void wrongMessage.offsetWidth;

        wrongMessage.classList.add("show");


        setTimeout(() => {

            member.classList.remove("shake");

        }, 500);

    });

});


/* ==========================================
   FLOWER TRANSITION
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


    /*
        Bukan random berantakan.

        Bunga dibuat dalam pola grid besar
        yang titik awalnya semuanya dari tengah,
        kemudian mekar menuju seluruh layar.

        Jumlah:
        10 kolom x 10 baris = 100 bunga.
    */

    const columns = 10;
    const rows = 10;

    let index = 0;


    for (let row = 0; row < rows; row++) {

        for (let col = 0; col < columns; col++) {

            const flower =
                document.createElement("div");

            flower.className = "flower";


            /*
                Target posisi melebar sampai
                melewati tepi layar.

                Ini membuat layar benar-benar
                tertutup bunga tanpa lubang besar.
            */

            const x =
                -55 +
                (col / (columns - 1)) * 110;

            const y =
                -70 +
                (row / (rows - 1)) * 140;


            /*
                Sedikit variasi agar tidak terlihat
                seperti tabel kaku, tetapi tetap rapi.
            */

            const tinyX =
                Math.sin(index * 1.7) * 3;

            const tinyY =
                Math.cos(index * 1.3) * 3;


            const scale =
                1.05 +
                ((index * 7) % 5) * 0.12;


            const rotation =
                -15 +
                ((index * 23) % 30);


            /*
                Bunga berganti:
                flower 1
                flower 2
                flower 3
                lalu ulang.
            */

            const image =
                flowerImages[index % flowerImages.length];


            flower.innerHTML = `
                <img src="${image}" alt="">
            `;


            flower.style.setProperty(
                "--x",
                `${x + tinyX}vw`
            );

            flower.style.setProperty(
                "--y",
                `${y + tinyY}vh`
            );

            flower.style.setProperty(
                "--scale",
                scale
            );

            flower.style.setProperty(
                "--rotation",
                `${rotation}deg`
            );


            /*
                Bunga muncul cepat,
                tetapi tetap terasa seperti
                gelombang yang menyebar.
            */

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


    /*
        Tunggu bunga benar-benar memenuhi layar,
        baru masuk PIN.
    */

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

    const value =
        pinInput.value.trim();


    if (value === correctPIN) {

        pinError.classList.remove("show");

        pinInput.blur();

        showScreen(screens.birthday);

        return;
    }


    pinError.classList.add("show");

    pinInput.value = "";

    pinInput.focus();

}


pinBtn.addEventListener("click", checkPIN);


pinInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        checkPIN();

    }

});


/*
    Hanya boleh angka.
*/

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
    PENTING:

    Setiap foto benar-benar memakai
    file yang berbeda.

    Tidak ada foto yang diulang.
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


function updateMemory(direction = 1) {

    polaroid.classList.remove("change");

    void polaroid.offsetWidth;

    polaroid.classList.add("change");


    const memory =
        memories[currentPhoto];


    /*
        Di sini src gambar benar-benar
        berubah setiap NEXT / PREV.
    */

    memoryPhoto.src =
        memory.image;

    memoryCaption.textContent =
        memory.caption;

    photoCounter.textContent =
        `${currentPhoto + 1} / ${memories.length}`;

}


function nextMemory() {

    if (currentPhoto < memories.length - 1) {

        currentPhoto++;

        updateMemory(1);

    } else {

        /*
            Setelah foto ke-10,
            lanjut ke closing.
        */

        showScreen(screens.closing);

    }

}


function previousMemory() {

    if (currentPhoto > 0) {

        currentPhoto--;

        updateMemory(-1);

    }

}


/* NEXT tengah */

document
    .getElementById("nextPhoto")
    .addEventListener("click", nextMemory);


/* Tombol kanan */

document
    .getElementById("nextPhotoRight")
    .addEventListener("click", nextMemory);


/* Tombol kiri */

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
   PRELOAD GAMBAR
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

    const img =
        new Image();

    img.src = src;

});


/* ==========================================
   START
========================================== */

showScreen(screens.game);
