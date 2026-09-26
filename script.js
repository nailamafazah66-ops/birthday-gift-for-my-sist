// ==========================================
// SCREEN SYSTEM
// ==========================================

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }
}


// ==========================================
// MUSIC
// ==========================================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    music.volume = 0.5;

    musicBtn.addEventListener("click", async function (e) {
        e.preventDefault();
        e.stopPropagation();

        try {

            if (music.paused) {

                await music.play();

                musicBtn.textContent = "❚❚";
                musicBtn.classList.add("playing");

            } else {

                music.pause();

                musicBtn.textContent = "♫";
                musicBtn.classList.remove("playing");
            }

        } catch (error) {

            console.error("Music error:", error);

            alert(
                "Musik belum bisa diputar. Pastikan file Sunflower.mp3 ada di repository."
            );
        }
    });

    music.addEventListener("play", function () {
        musicBtn.textContent = "❚❚";
        musicBtn.classList.add("playing");
    });

    music.addEventListener("pause", function () {
        musicBtn.textContent = "♫";
        musicBtn.classList.remove("playing");
    });
}


// ==========================================
// SPIDER-MAN GAME
// ==========================================

const members = document.querySelectorAll(".member");
const wrongMessage = document.getElementById("wrongMessage");
const keyFound = document.getElementById("keyFound");
const nextToFlowers = document.getElementById("nextToFlowers");

members.forEach(member => {

    member.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        const memberNumber = this.dataset.member;

        // ==================================
        // MEMBER NOMOR 7 = BENAR
        // ==================================

        if (memberNumber === "7") {

            if (keyFound) {
                keyFound.classList.add("show");
            }

            return;
        }


        // ==================================
        // MEMBER LAIN = SALAH
        // ==================================

        this.classList.remove("wrong");

        // Memaksa browser mengulang animasi
        void this.offsetWidth;

        this.classList.add("wrong");

        if (wrongMessage) {

            wrongMessage.classList.add("show");

            setTimeout(() => {
                wrongMessage.classList.remove("show");
            }, 900);
        }

    });

});


// ==========================================
// LANJUT KE BUNGA
// ==========================================

if (nextToFlowers) {

    nextToFlowers.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        if (keyFound) {
            keyFound.classList.remove("show");
        }

        startFlowerTransition();

    });

}


// ==========================================
// FLOWER TRANSITION
// ==========================================

const flowers = document.getElementById("flowers");

function startFlowerTransition() {

    if (!flowers) return;

    showScreen("flowerScreen");

    flowers.innerHTML = "";

    const flowerImages = [
        "flower 1.png",
        "flower 2.png",
        "flower 3.png"
    ];

    const totalFlowers = 100;

    for (let i = 0; i < totalFlowers; i++) {

        const flower = document.createElement("img");

        flower.className = "transition-flower";

        flower.src = flowerImages[i % 3];

        /*
         * Posisi akhir bunga dibuat memenuhi seluruh layar.
         * Awalnya akan muncul dari tengah.
         */

        const x = Math.random() * 100;
        const y = Math.random() * 100;

        flower.style.setProperty("--x", `${x}vw`);
        flower.style.setProperty("--y", `${y}vh`);

        flower.style.animationDelay = `${i * 0.01}s`;

        flowers.appendChild(flower);
    }


    // Setelah bunga memenuhi layar,
    // pindah ke PIN.

    setTimeout(() => {

        showScreen("pinScreen");

        flowers.innerHTML = "";

    }, 2600);

}


// ==========================================
// PIN
// ==========================================

const pinInput = document.getElementById("pinInput");
const pinBtn = document.getElementById("pinBtn");
const pinError = document.getElementById("pinError");

if (pinBtn) {

    pinBtn.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        const enteredPin = pinInput
            ? pinInput.value.trim()
            : "";

        if (enteredPin === "26092000") {

            if (pinError) {
                pinError.textContent = "";
            }

            showScreen("birthdayScreen");

        } else {

            if (pinError) {
                pinError.textContent = "PIN salah ♡";
            }

            if (pinInput) {
                pinInput.value = "";
                pinInput.focus();
            }
        }

    });

}


// Bisa tekan Enter setelah memasukkan PIN

if (pinInput) {

    pinInput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            if (pinBtn) {
                pinBtn.click();
            }
        }

    });

}


// ==========================================
// BIRTHDAY
// ==========================================

const birthdayNext = document.getElementById("birthdayNext");

if (birthdayNext) {

    birthdayNext.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        showScreen("letterScreen");

    });

}


// ==========================================
// LETTER
// ==========================================

const letterNext = document.getElementById("letterNext");

if (letterNext) {

    letterNext.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        showScreen("memoryScreen");

        currentPhoto = 0;

        updateMemory();

    });

}


// ==========================================
// MEMORIES
// ==========================================

const memories = [

    {
        image: "foto 1.jpeg",
        caption: "Some moments are small, but they become memories forever. ♡"
    },

    {
        image: "foto 2.jpeg",
        caption: "Growing up with you is one of my favorite things. ♡"
    },

    {
        image: "foto 3.jpeg",
        caption: "A little moment that I will always remember."
    },

    {
        image: "foto 4.jpeg",
        caption: "Thank you for all the laughs we have shared."
    },

    {
        image: "foto 5.jpeg",
        caption: "Life feels a little warmer with you around. ♡"
    },

    {
        image: "foto 6.jpeg",
        caption: "Another memory I want to keep forever."
    },

    {
        image: "foto 7.jpeg",
        caption: "From little moments to memories that last forever."
    },

    {
        image: "foto 8.jpeg",
        caption: "I'm really lucky to call you my sister. ♡"
    },

    {
        image: "foto 9.jpeg",
        caption: "Here's to all the memories we already have."
    },

    {
        image: "foto 10.jpeg",
        caption: "And here's to many more memories together. ♡"
    }

];

let currentPhoto = 0;

const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");
const memoryCounter = document.getElementById("memoryCounter");

const prevMemory = document.getElementById("prevMemory");
const nextMemory = document.getElementById("nextMemory");

const memoryNext = document.getElementById("memoryNext");


function updateMemory() {

    if (!memoryImage) return;

    const memory = memories[currentPhoto];

    // BENAR-BENAR mengganti file gambar
    memoryImage.src = memory.image;

    if (memoryCaption) {
        memoryCaption.textContent = memory.caption;
    }

    if (memoryCounter) {
        memoryCounter.textContent =
            `${currentPhoto + 1} / ${memories.length}`;
    }

}


// ==========================================
// FOTO SEBELUMNYA
// ==========================================

if (prevMemory) {

    prevMemory.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        if (currentPhoto > 0) {

            currentPhoto--;

            updateMemory();

        }

    });

}


// ==========================================
// FOTO BERIKUTNYA
// ==========================================

if (nextMemory) {

    nextMemory.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        if (currentPhoto < memories.length - 1) {

            currentPhoto++;

            updateMemory();

        }

    });

}


// ==========================================
// NEXT DARI MEMORY
// ==========================================

if (memoryNext) {

    memoryNext.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        showScreen("closingScreen");

    });

}


// ==========================================
// CLOSING
// ==========================================

const closingNext = document.getElementById("closingNext");

if (closingNext) {

    closingNext.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        showScreen("finalScreen");

    });

}


// ==========================================
// PRELOAD GAMBAR
// ==========================================

const imagesToPreload = [

    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",

    "spiderman.png",
    "kunci.png",

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

imagesToPreload.forEach(src => {

    const img = new Image();

    img.src = src;

});


// ==========================================
// START
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    showScreen("gameScreen");

    currentPhoto = 0;

    updateMemory();

});
