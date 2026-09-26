/* =====================================================
   HAPPY BIRTHDAY TETEH
   FINAL JAVASCRIPT
===================================================== */


/* =====================================================
   SCREEN SYSTEM
===================================================== */

const screens = document.querySelectorAll(".screen");

function showScreen(id) {

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (!target) {
        console.error("Screen tidak ditemukan:", id);
        return;
    }

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
}


/* =====================================================
   MUSIC
===================================================== */

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (bgMusic && musicBtn) {

    bgMusic.volume = 0.5;

    musicBtn.addEventListener("click", function () {

        if (bgMusic.paused) {

            const playPromise = bgMusic.play();

            if (playPromise !== undefined) {

                playPromise
                    .then(function () {

                        musicBtn.textContent = "❚❚";

                        musicBtn.classList.add("playing");

                    })
                    .catch(function (error) {

                        console.error(
                            "Tidak bisa memutar sunflower.mp3:",
                            error
                        );

                        alert(
                            "Musik tidak bisa diputar. Pastikan file sunflower.mp3 ada di folder website."
                        );

                    });
            }

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


/* =====================================================
   GAME
===================================================== */

const members = document.querySelectorAll(".member");

const wrongMessage =
    document.getElementById("wrongMessage");

const keyFound =
    document.getElementById("keyFound");

const nextFlowerBtn =
    document.getElementById("nextFlowerBtn");


members.forEach(function (member) {

    member.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const memberNumber =
            this.getAttribute("data-member");


        /* =========================
           BENAR
        ========================= */

        if (memberNumber === "7") {

            keyFound.classList.add("show");

            return;
        }


        /* =========================
           SALAH
        ========================= */

        this.classList.remove("wrong");

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


/* =====================================================
   KEY → FLOWERS
===================================================== */

if (nextFlowerBtn) {

    nextFlowerBtn.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        keyFound.classList.remove("show");

        startFlowerTransition();

    });

}


/* =====================================================
   FLOWER TRANSITION
===================================================== */

const flowerContainer =
    document.getElementById("flowerContainer");


function startFlowerTransition() {

    if (!flowerContainer) return;

    showScreen("flowerScreen");

    flowerContainer.innerHTML = "";

    const flowerImages = [
        "flower 1.png",
        "flower 2.png",
        "flower 3.png"
    ];


    const totalFlowers = 45;


    for (let i = 0; i < totalFlowers; i++) {

        const flower =
            document.createElement("img");

        flower.className =
            "transition-flower";

        flower.src =
            flowerImages[i % flowerImages.length];


        const x =
            Math.random() * 100;

        const y =
            Math.random() * 100;


        flower.style.setProperty(
            "--x",
            x + "vw"
        );

        flower.style.setProperty(
            "--y",
            y + "vh"
        );


        flower.style.animationDelay =
            (i * 0.025) + "s";


        flowerContainer.appendChild(flower);
    }


    setTimeout(function () {

        flowerContainer.innerHTML = "";

        showScreen("pinScreen");

    }, 3000);

}


/* =====================================================
   PIN
===================================================== */

const pinInput =
    document.getElementById("pinInput");

const pinBtn =
    document.getElementById("pinBtn");

const pinError =
    document.getElementById("pinError");


const correctPin = "26092000";


function checkPin() {

    if (!pinInput) return;

    const enteredPin =
        pinInput.value.trim();


    if (enteredPin === correctPin) {

        pinError.textContent = "";

        showScreen("birthdayScreen");

        return;
    }


    pinError.textContent =
        "PIN-nya belum benar ♡";

    pinInput.value = "";

    pinInput.focus();
}


if (pinBtn) {

    pinBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            checkPin();

        }
    );

}


if (pinInput) {

    pinInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                checkPin();
            }

        }
    );

}


/* =====================================================
   BIRTHDAY → LETTER
===================================================== */

const birthdayNext =
    document.getElementById("birthdayNext");


if (birthdayNext) {

    birthdayNext.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showScreen("letterScreen");

        }
    );

}


/* =====================================================
   LETTER → MEMORIES
===================================================== */

const letterNext =
    document.getElementById("letterNext");


if (letterNext) {

    letterNext.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            currentPhoto = 0;

            updateMemory();

            showScreen("memoryScreen");

        }
    );

}


/* =====================================================
   MEMORIES
===================================================== */

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


const memoryPhoto =
    document.getElementById("memoryPhoto");

const memoryCaption =
    document.getElementById("memoryCaption");

const photoCounter =
    document.getElementById("photoCounter");

const prevPhoto =
    document.getElementById("prevPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");

const nextPhotoRight =
    document.getElementById("nextPhotoRight");


function updateMemory() {

    if (!memoryPhoto) return;


    const memory =
        memories[currentPhoto];


    /*
       Ini benar-benar mengganti
       file gambar.
    */

    memoryPhoto.src =
        memory.image;


    if (memoryCaption) {

        memoryCaption.textContent =
            memory.caption;
    }


    if (photoCounter) {

        photoCounter.textContent =
            `${currentPhoto + 1} / ${memories.length}`;

    }


    /*
       Animasi ganti foto
    */

    memoryPhoto.style.opacity = "0";


    setTimeout(function () {

        memoryPhoto.style.opacity = "1";

    }, 80);

}


/* =====================================================
   PREVIOUS
===================================================== */

if (prevPhoto) {

    prevPhoto.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (currentPhoto > 0) {

                currentPhoto--;

                updateMemory();

            }

        }
    );

}


/* =====================================================
   NEXT
===================================================== */

function goNextPhoto() {

    if (currentPhoto < memories.length - 1) {

        currentPhoto++;

        updateMemory();

    } else {

        showScreen("closingScreen");

    }

}


if (nextPhoto) {

    nextPhoto.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            goNextPhoto();

        }
    );

}


if (nextPhotoRight) {

    nextPhotoRight.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            goNextPhoto();

        }
    );

}


/* =====================================================
   CLOSING → FINAL
===================================================== */

const closingNext =
    document.getElementById("closingNext");


if (closingNext) {

    closingNext.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            showScreen("finalScreen");

        }
    );

}


/* =====================================================
   PRELOAD IMAGES
===================================================== */

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

    const image =
        new Image();

    image.src = src;

});


/* =====================================================
   START
===================================================== */

showScreen("gameScreen");

updateMemory();
