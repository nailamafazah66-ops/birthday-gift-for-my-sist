// ======================================================
// HAPPY BIRTHDAY TETEH
// SCRIPT.JS — dibuat khusus untuk HTML yang kamu kirim
// ======================================================


// ======================================================
// SCREEN SYSTEM
// ======================================================

const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (target) {
        target.classList.add("active");

        // Kembali ke posisi paling atas
        window.scrollTo(0, 0);
    }
}


// ======================================================
// MUSIC
// ======================================================

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (bgMusic && musicBtn) {

    bgMusic.volume = 0.5;

    musicBtn.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        if (bgMusic.paused) {

            bgMusic.play()
                .then(function () {

                    musicBtn.textContent = "❚❚";
                    musicBtn.classList.add("playing");

                })
                .catch(function (error) {

                    console.error("Musik gagal diputar:", error);

                    alert(
                        "Musik belum bisa diputar. Pastikan file sunflower.mp3 ada di repository."
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


    bgMusic.addEventListener("error", function () {

        console.error(
            "File musik tidak ditemukan:",
            bgMusic.currentSrc
        );

    });

}


// ======================================================
// GAME SPIDER-MAN
// ======================================================

const members = document.querySelectorAll(".member");

const wrongMessage = document.getElementById("wrongMessage");

const keyFound = document.getElementById("keyFound");

const nextFlowerBtn = document.getElementById("nextFlowerBtn");


members.forEach(function (member) {

    member.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const memberNumber = this.dataset.member;


        // ==============================================
        // MEMBER 7 = BENAR
        // ==============================================

        if (memberNumber === "7") {

            if (keyFound) {

                keyFound.classList.add("show");

            }

            return;
        }


        // ==============================================
        // MEMBER 1-6 = SALAH
        // ==============================================

        this.classList.remove("wrong");

        // Memastikan animasi bisa dimainkan lagi
        void this.offsetWidth;

        this.classList.add("wrong");


        if (wrongMessage) {

            wrongMessage.classList.add("show");

            setTimeout(function () {

                wrongMessage.classList.remove("show");

            }, 900);

        }

    });

});


// ======================================================
// TOMBOL LANJUT SETELAH MENEMUKAN KUNCI
// ======================================================

if (nextFlowerBtn) {

    nextFlowerBtn.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        if (keyFound) {

            keyFound.classList.remove("show");

        }


        startFlowerTransition();

    });

}


// ======================================================
// FLOWER TRANSITION
// ======================================================

const flowerContainer = document.getElementById("flowerContainer");


function startFlowerTransition() {

    if (!flowerContainer) {
        return;
    }


    showScreen("flowerScreen");


    flowerContainer.innerHTML = "";


    const flowerImages = [

        "flower 1.png",
        "flower 2.png",
        "flower 3.png"

    ];


    // Jumlah bunga
    const totalFlowers = 100;


    for (let i = 0; i < totalFlowers; i++) {

        const flower = document.createElement("img");


        flower.className = "transition-flower";


        flower.src = flowerImages[i % flowerImages.length];


        // Posisi akhir bunga
        const x = Math.random() * 100;
        const y = Math.random() * 100;


        flower.style.setProperty("--x", x + "vw");
        flower.style.setProperty("--y", y + "vh");


        // Muncul bertahap
        flower.style.animationDelay = (i * 0.01) + "s";


        flowerContainer.appendChild(flower);

    }


    // Setelah animasi bunga selesai,
    // pindah ke PIN

    setTimeout(function () {

        flowerContainer.innerHTML = "";

        showScreen("pinScreen");

    }, 2700);

}


// ======================================================
// PIN
// ======================================================

const pinInput = document.getElementById("pinInput");

const pinBtn = document.getElementById("pinBtn");

const pinError = document.getElementById("pinError");


const correctPin = "26092000";


if (pinBtn) {

    pinBtn.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        const enteredPin = pinInput
            ? pinInput.value.trim()
            : "";


        // ==============================================
        // PIN BENAR
        // ==============================================

        if (enteredPin === correctPin) {

            if (pinError) {

                pinError.textContent = "";

            }


            showScreen("birthdayScreen");


            return;
        }


        // ==============================================
        // PIN SALAH
        // ==============================================

        if (pinError) {

            pinError.textContent = "PIN-nya belum benar ♡";

        }


        if (pinInput) {

            pinInput.value = "";

            pinInput.focus();

        }

    });

}


// Bisa menekan ENTER setelah memasukkan PIN

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


// ======================================================
// BIRTHDAY
// ======================================================

const birthdayNext = document.getElementById("birthdayNext");


if (birthdayNext) {

    birthdayNext.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        showScreen("letterScreen");

    });

}


// ======================================================
// LETTER
// ======================================================

const letterNext = document.getElementById("letterNext");


if (letterNext) {

    letterNext.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        showScreen("memoryScreen");


        // Mulai dari foto pertama
        currentPhoto = 0;


        updateMemory();

    });

}


// ======================================================
// MEMORIES
// ======================================================

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


// Ambil elemen dari HTML
const memoryPhoto = document.getElementById("memoryPhoto");

const memoryCaption = document.getElementById("memoryCaption");

const photoCounter = document.getElementById("photoCounter");

const prevPhoto = document.getElementById("prevPhoto");

const nextPhoto = document.getElementById("nextPhoto");

const nextPhotoRight = document.getElementById("nextPhotoRight");


// ======================================================
// UPDATE FOTO
// ======================================================

function updateMemory() {

    if (!memoryPhoto) {
        return;
    }


    const currentMemory = memories[currentPhoto];


    // GANTI FOTO
    memoryPhoto.src = currentMemory.image;


    // GANTI CAPTION
    if (memoryCaption) {

        memoryCaption.textContent =
            currentMemory.caption;

    }


    // GANTI NOMOR FOTO
    if (photoCounter) {

        photoCounter.textContent =
            (currentPhoto + 1) +
            " / " +
            memories.length;

    }

}


// ======================================================
// FOTO SEBELUMNYA
// ======================================================

if (prevPhoto) {

    prevPhoto.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        if (currentPhoto > 0) {

            currentPhoto--;

            updateMemory();

        }

    });

}


// ======================================================
// NEXT FOTO — TOMBOL TENGAH
// ======================================================

if (nextPhoto) {

    nextPhoto.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        if (currentPhoto < memories.length - 1) {

            currentPhoto++;

            updateMemory();

        } else {

            // Kalau sudah foto ke-10
            showScreen("closingScreen");

        }

    });

}


// ======================================================
// NEXT FOTO — TOMBOL KANAN
// ======================================================

if (nextPhotoRight) {

    nextPhotoRight.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        if (currentPhoto < memories.length - 1) {

            currentPhoto++;

            updateMemory();

        } else {

            // Kalau sudah foto ke-10
            showScreen("closingScreen");

        }

    });

}


// ======================================================
// CLOSING
// ======================================================

const closingNext = document.getElementById("closingNext");


if (closingNext) {

    closingNext.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();


        showScreen("finalScreen");

    });

}


// ======================================================
// PRELOAD GAMBAR
// ======================================================

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


imagesToPreload.forEach(function (imageSource) {

    const image = new Image();

    image.src = imageSource;

});


// ======================================================
// INITIAL STATE
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // Mulai dari game
    showScreen("gameScreen");


    // Mulai dari foto pertama
    currentPhoto = 0;


    updateMemory();

});
