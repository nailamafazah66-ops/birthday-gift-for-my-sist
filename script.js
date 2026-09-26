// =====================================================
// HAPPY BIRTHDAY TETEH
// FINAL SCRIPT.JS
// =====================================================


// =====================================================
// SCREEN
// =====================================================

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = document.getElementById(id);

    if (screen) {
        screen.classList.add("active");
    }

    window.scrollTo(0, 0);
}


// =====================================================
// MUSIC
// =====================================================

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (bgMusic && musicBtn) {

    bgMusic.volume = 0.5;

    musicBtn.addEventListener("click", function () {

        if (bgMusic.paused) {

            bgMusic.play()
                .then(function () {
                    musicBtn.textContent = "❚❚";
                    musicBtn.classList.add("playing");
                })
                .catch(function (error) {
                    console.error("Music error:", error);
                    alert(
                        "Musik tidak dapat diputar. Pastikan file sunflower.mp3 ada di folder yang sama dengan index.html."
                    );
                });

        } else {

            bgMusic.pause();

            musicBtn.textContent = "♫";
            musicBtn.classList.remove("playing");
        }

    });

    bgMusic.addEventListener("play", function () {
        musicBtn.textContent = "❚❚";
        musicBtn.classList.add("playing");
    });

    bgMusic.addEventListener("pause", function () {
        musicBtn.textContent = "♫";
        musicBtn.classList.remove("playing");
    });
}


// =====================================================
// GAME
// =====================================================

const members = document.querySelectorAll(".member");
const wrongMessage = document.getElementById("wrongMessage");
const keyFound = document.getElementById("keyFound");
const nextFlowerBtn = document.getElementById("nextFlowerBtn");

members.forEach(function (member) {

    member.addEventListener("click", function (event) {

        event.preventDefault();

        const number = this.dataset.member;

        // MEMBER 7 = BENAR
        if (number === "7") {

            if (keyFound) {
                keyFound.classList.add("show");
            }

            return;
        }

        // MEMBER 1-6 = SALAH
        this.classList.remove("wrong");

        // Restart animation
        void this.offsetWidth;

        this.classList.add("wrong");

        if (wrongMessage) {

            wrongMessage.classList.add("show");

            setTimeout(function () {
                wrongMessage.classList.remove("show");
            }, 800);
        }

    });

});


// =====================================================
// LANJUT KE BUNGA
// =====================================================

if (nextFlowerBtn) {

    nextFlowerBtn.addEventListener("click", function (event) {

        event.preventDefault();

        if (keyFound) {
            keyFound.classList.remove("show");
        }

        startFlowers();
    });

}


// =====================================================
// FLOWERS
// =====================================================

const flowerContainer = document.getElementById("flowerContainer");

function startFlowers() {

    if (!flowerContainer) return;

    showScreen("flowerScreen");

    flowerContainer.innerHTML = "";

    const flowerImages = [
        "flower 1.png",
        "flower 2.png",
        "flower 3.png"
    ];

    // Banyak bunga
    const totalFlowers = 90;

    for (let i = 0; i < totalFlowers; i++) {

        const flower = document.createElement("img");

        flower.src = flowerImages[i % 3];
        flower.className = "transition-flower";

        // Posisi akhir memenuhi layar
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        flower.style.setProperty("--x", x + "vw");
        flower.style.setProperty("--y", y + "vh");

        flower.style.animationDelay = (i * 0.012) + "s";

        flowerContainer.appendChild(flower);
    }

    // Masuk PIN setelah bunga selesai
    setTimeout(function () {

        flowerContainer.innerHTML = "";

        showScreen("pinScreen");

    }, 2600);
}


// =====================================================
// PIN
// =====================================================

const pinInput = document.getElementById("pinInput");
const pinBtn = document.getElementById("pinBtn");
const pinError = document.getElementById("pinError");

const correctPin = "26092000";

if (pinBtn) {

    pinBtn.addEventListener("click", function (event) {

        event.preventDefault();

        const pin = pinInput ? pinInput.value.trim() : "";

        if (pin === correctPin) {

            if (pinError) {
                pinError.textContent = "";
            }

            showScreen("birthdayScreen");

        } else {

            if (pinError) {
                pinError.textContent = "PIN-nya belum benar ♡";
            }

            if (pinInput) {
                pinInput.value = "";
                pinInput.focus();
            }
        }

    });
}


// ENTER untuk PIN
if (pinInput) {

    pinInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            if (pinBtn) {
                pinBtn.click();
            }
        }

    });

}


// =====================================================
// BIRTHDAY
// =====================================================

const birthdayNext = document.getElementById("birthdayNext");

if (birthdayNext) {

    birthdayNext.addEventListener("click", function (event) {

        event.preventDefault();

        showScreen("letterScreen");

    });

}


// =====================================================
// LETTER
// =====================================================

const letterNext = document.getElementById("letterNext");

if (letterNext) {

    letterNext.addEventListener("click", function (event) {

        event.preventDefault();

        currentPhoto = 0;

        updateMemory();

        showScreen("memoryScreen");

    });

}


// =====================================================
// MEMORIES
// =====================================================

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

const memoryPhoto = document.getElementById("memoryPhoto");
const memoryCaption = document.getElementById("memoryCaption");
const photoCounter = document.getElementById("photoCounter");

const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const nextPhotoRight = document.getElementById("nextPhotoRight");


// =====================================================
// UPDATE FOTO
// =====================================================

function updateMemory() {

    if (!memoryPhoto) return;

    const memory = memories[currentPhoto];

    // GANTI FILE FOTO
    memoryPhoto.src = memory.image;

    // GANTI CAPTION
    if (memoryCaption) {
        memoryCaption.textContent = memory.caption;
    }

    // GANTI COUNTER
    if (photoCounter) {
        photoCounter.textContent =
            (currentPhoto + 1) + " / " + memories.length;
    }
}


// =====================================================
// FOTO SEBELUMNYA
// =====================================================

if (prevPhoto) {

    prevPhoto.addEventListener("click", function (event) {

        event.preventDefault();

        if (currentPhoto > 0) {

            currentPhoto--;

            updateMemory();
        }

    });

}


// =====================================================
// NEXT FOTO TENGAH
// =====================================================

if (nextPhoto) {

    nextPhoto.addEventListener("click", function (event) {

        event.preventDefault();

        if (currentPhoto < memories.length - 1) {

            currentPhoto++;

            updateMemory();

        } else {

            showScreen("closingScreen");
        }

    });

}


// =====================================================
// NEXT FOTO KANAN
// =====================================================

if (nextPhotoRight) {

    nextPhotoRight.addEventListener("click", function (event) {

        event.preventDefault();

        if (currentPhoto < memories.length - 1) {

            currentPhoto++;

            updateMemory();

        } else {

            showScreen("closingScreen");
        }

    });

}


// =====================================================
// CLOSING
// =====================================================

const closingNext = document.getElementById("closingNext");

if (closingNext) {

    closingNext.addEventListener("click", function (event) {

        event.preventDefault();

        showScreen("finalScreen");

    });

}


// =====================================================
// PRELOAD GAMBAR
// =====================================================

const preloadImages = [

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

preloadImages.forEach(function (src) {

    const img = new Image();

    img.src = src;

});


// =====================================================
// START
// =====================================================

showScreen("gameScreen");

currentPhoto = 0;

updateMemory();
