/* ==================================================
   MUSIC
================================================== */

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play().then(() => {

            musicPlaying = true;
            musicButton.textContent = "❚❚";

        }).catch(() => {

            musicPlaying = false;

        });

    } else {

        music.pause();

        musicPlaying = false;

        musicButton.textContent = "♫";

    }

});


/* ==================================================
   SCREEN SYSTEM
================================================== */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    target.classList.add("active");

}


/* ==================================================
   GAME
================================================== */

const members =
    document.querySelectorAll(".member");

const gameFeedback =
    document.getElementById("gameFeedback");

const key =
    document.getElementById("key");

const gameNext =
    document.getElementById("gameNext");

let gameCompleted = false;


members.forEach(member => {

    member.addEventListener("click", () => {

        if (gameCompleted) return;

        const number =
            member.dataset.number;

        /* MEMBER 7 = PEMBAWA KUNCI */

        if (number === "7") {

            gameCompleted = true;

            member.classList.add("found");

            gameFeedback.textContent =
                "Ketemu! ✨";

            key.classList.add("show");

            members.forEach(item => {
                item.style.pointerEvents = "none";
            });

            setTimeout(() => {

                gameNext.classList.remove("hidden");

            }, 600);

        } else {

            gameFeedback.textContent =
                "Bukan dia! ✕";

            member.classList.remove("wrong");

            void member.offsetWidth;

            member.classList.add("wrong");

        }

    });

});


/* ==================================================
   FLOWER TRANSITION
================================================== */

gameNext.addEventListener("click", () => {

    showScreen("flowerScreen");

    createFlowers();

    setTimeout(() => {

        showScreen("pinScreen");

    }, 1450);

});


function createFlowers() {

    const container =
        document.getElementById("flowers");

    container.innerHTML = "";

    const flowerImages = [
        "picture/flower 1.png",
        "picture/flower 2.png",
        "picture/flower 3.png"
    ];

    /*
       Semua bunga muncul dari SATU TITIK:
       tengah layar.

       Mereka membesar dan overlap.
       Tidak menyebar random.
    */

    for (let i = 0; i < 9; i++) {

        const flower =
            document.createElement("img");

        flower.className = "flower";

        flower.src =
            flowerImages[i % 3];

        container.appendChild(flower);

    }

}


/* ==================================================
   PIN
================================================== */

const pinInput =
    document.getElementById("pinInput");

const pinButton =
    document.getElementById("pinButton");

const pinFeedback =
    document.getElementById("pinFeedback");

const correctPin =
    "26092000";


function checkPin() {

    const entered =
        pinInput.value.trim();

    if (entered === correctPin) {

        pinFeedback.textContent =
            "Benar ♡";

        /*
           LANGSUNG PINDAH.
           Tidak scroll.
        */

        showScreen("birthdayScreen");

        return;

    }

    pinFeedback.textContent =
        "Coba lagi ✨";

    pinInput.value = "";

    pinInput.focus();

}


pinButton.addEventListener(
    "click",
    checkPin
);


pinInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            checkPin();
        }

    }
);


/* ==================================================
   STORY NAVIGATION
================================================== */

const storyScreens = [
    "birthdayScreen",
    "letterScreen",
    "memoryScreen",
    "closingScreen",
    "finalScreen"
];

let storyIndex = 0;


document.querySelectorAll(".story-next").forEach(button => {

    button.addEventListener("click", () => {

        storyIndex++;

        if (storyIndex >= storyScreens.length) {
            storyIndex = storyScreens.length - 1;
        }

        showScreen(
            storyScreens[storyIndex]
        );

    });

});


/* ==================================================
   MEMORIES
================================================== */

const photos = [
    "picture/foto 1.jpeg",
    "picture/foto 2.jpeg",
    "picture/foto 3.jpeg",
    "picture/foto 4.jpeg",
    "picture/foto 5.jpeg",
    "picture/foto 6.jpeg",
    "picture/foto 7.jpeg",
    "picture/foto 8.jpeg",
    "picture/foto 9.jpeg",
    "picture/foto 10.jpeg"
];


const captions = [
    "pretty, as always.",
    "cute without even trying.",
    "the sweetest sister.",
    "my favorite person to annoy.",
    "one of my favorite memories.",
    "you looked so happy here.",
    "a little moment I'll always remember.",
    "thank you for all the memories.",
    "life is better with a sister like you.",
    "and this is just one of many memories ♡"
];


let photoIndex = 0;


const memoryImage =
    document.getElementById("memoryImage");

const memoryCaption =
    document.getElementById("memoryCaption");

const photoNumber =
    document.getElementById("photoNumber");


function updatePhoto() {

    memoryImage.src =
        photos[photoIndex];

    memoryCaption.textContent =
        captions[photoIndex];

    photoNumber.textContent =
        `${photoIndex + 1} / ${photos.length}`;

}


document
    .getElementById("nextPhoto")
    .addEventListener("click", () => {

        photoIndex++;

        if (photoIndex >= photos.length) {
            photoIndex = 0;
        }

        updatePhoto();

    });


document
    .getElementById("previousPhoto")
    .addEventListener("click", () => {

        photoIndex--;

        if (photoIndex < 0) {
            photoIndex = photos.length - 1;
        }

        updatePhoto();

    });


updatePhoto();