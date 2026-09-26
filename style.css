/* =================================
   SCREEN
================================= */

const screens = {

  game:
    document.getElementById("gameScreen"),

  flowers:
    document.getElementById("flowerScreen"),

  pin:
    document.getElementById("pinScreen"),

  birthday:
    document.getElementById("birthdayScreen"),

  letter:
    document.getElementById("letterScreen"),

  memory:
    document.getElementById("memoryScreen"),

  closing:
    document.getElementById("closingScreen"),

  final:
    document.getElementById("finalScreen")

};


function showScreen(screen) {

  Object.values(screens).forEach(
    item => item.classList.remove("active")
  );

  screen.classList.add("active");

}


/* =================================
   MUSIC
================================= */

const music =
  document.getElementById("music");

const musicBtn =
  document.getElementById("musicBtn");

let musicPlaying = false;

music.volume = 0.55;


musicBtn.addEventListener(
  "click",
  async () => {

    try {

      if (musicPlaying) {

        music.pause();

        musicPlaying = false;

      } else {

        await music.play();

        musicPlaying = true;

      }

    } catch (error) {

      console.log(
        "Music error:",
        error
      );

    }

  }
);


/* =================================
   GAME
================================= */

const members =
  document.querySelectorAll(".member");

const wrongMessage =
  document.getElementById(
    "wrongMessage"
  );

const keyFound =
  document.getElementById(
    "keyFound"
  );


members.forEach(member => {

  member.addEventListener(
    "click",
    () => {

      const number =
        member.dataset.member;


      /* =========================
         CORRECT = MEMBER 7
      ========================== */

      if (number === "7") {

        members.forEach(
          m => m.disabled = true
        );

        member.classList.add(
          "found"
        );

        keyFound.classList.add(
          "show"
        );

        return;

      }


      /* =========================
         WRONG
      ========================== */

      member.classList.remove(
        "wrong"
      );

      void member.offsetWidth;

      member.classList.add(
        "wrong"
      );


      wrongMessage.classList.remove(
        "show"
      );

      void wrongMessage.offsetWidth;

      wrongMessage.classList.add(
        "show"
      );

    }

  );

});


/* =================================
   FLOWER TRANSITION
================================= */

const flowerContainer =
  document.getElementById(
    "flowerContainer"
  );


const flowerImages = [

  "flower 1.png",
  "flower 2.png",
  "flower 3.png"

];


function createFlowers() {

  flowerContainer.innerHTML = "";


  /*
    BANYAK BANGET BUNGA.
    Dibuat dalam beberapa lingkaran
    supaya tetap terlihat teratur.
  */

  const totalFlowers = 75;


  for (
    let i = 0;
    i < totalFlowers;
    i++
  ) {

    const flower =
      document.createElement("img");


    flower.className =
      "flower";


    flower.src =
      flowerImages[
        i % flowerImages.length
      ];


    /*
      Susunan radial.
      Jadi bukan bunga random
      yang dilempar ke mana-mana.
    */

    const angle =
      (i / totalFlowers)
      * Math.PI
      * 2;


    const ring =
      Math.floor(i / 15);


    const distance =
      90 + ring * 115;


    const x =
      Math.cos(angle)
      * distance;


    const y =
      Math.sin(angle)
      * distance;


    const scale =
      0.9 +
      ((i * 13) % 60)
      / 100;


    const rotation =
      ((i * 29) % 50) - 25;


    flower.style.setProperty(
      "--x",
      `${x}px`
    );


    flower.style.setProperty(
      "--y",
      `${y}px`
    );


    flower.style.setProperty(
      "--scale",
      scale.toFixed(2)
    );


    flower.style.setProperty(
      "--rotate",
      `${rotation}deg`
    );


    /*
      Sedikit delay supaya
      bunga muncul bertahap,
      tapi tetap cepat.
    */

    flower.style.animationDelay =
      `${i * 0.012}s`;


    flowerContainer.appendChild(
      flower
    );

  }

}


document
  .getElementById("nextToFlowers")
  .addEventListener(
    "click",
    () => {

      createFlowers();

      showScreen(
        screens.flowers
      );


      /*
        Tunggu bunga memenuhi
        seluruh layar.
      */

      setTimeout(
        () => {

          screens.flowers
            .classList.add(
              "leaving"
            );


          setTimeout(
            () => {

              screens.flowers
                .classList.remove(
                  "leaving"
                );

              showScreen(
                screens.pin
              );

            },
            500
          );

        },
        1900
      );

    }
  );


/* =================================
   PIN
================================= */

const pinInput =
  document.getElementById(
    "pinInput"
  );

const pinError =
  document.getElementById(
    "pinError"
  );


function checkPin() {

  const pin =
    pinInput.value;


  if (pin === "26092000") {

    pinError.textContent = "";

    pinInput.blur();

    showScreen(
      screens.birthday
    );

  } else {

    pinError.textContent =
      "PIN-nya belum benar ♡";

    pinInput.value = "";

    pinInput.focus();

  }

}


document
  .getElementById("pinButton")
  .addEventListener(
    "click",
    checkPin
  );


pinInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter"
    ) {

      checkPin();

    }

  }
);


/* =================================
   BIRTHDAY → LETTER
================================= */

document
  .getElementById("birthdayNext")
  .addEventListener(
    "click",
    () => {

      showScreen(
        screens.letter
      );

    }
  );


/* =================================
   LETTER → MEMORY
================================= */

document
  .getElementById("letterNext")
  .addEventListener(
    "click",
    () => {

      showScreen(
        screens.memory
      );

    }
  );


/* =================================
   MEMORIES
================================= */

const photos = [

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


const captions = [

  "A little memory I'll always keep close. ♡",

  "One of those moments I'll never forget.",

  "Growing up together, one memory at a time.",

  "Another little piece of our story. ♡",

  "A moment worth keeping forever.",

  "Thank you for all these memories.",

  "Just us, being us. ♡",

  "A memory that still makes me smile.",

  "So many moments, so much love.",

  "And there are still so many memories to come. ♡"

];


let currentPhoto = 0;


const memoryImage =
  document.getElementById(
    "memoryImage"
  );

const memoryCaption =
  document.getElementById(
    "memoryCaption"
  );

const memoryNumber =
  document.getElementById(
    "memoryNumber"
  );

const polaroid =
  document.getElementById(
    "polaroid"
  );


function updateMemory() {

  /*
    Animasi kecil ketika
    foto berganti.
  */

  polaroid.style.transform =
    "rotate(1deg) scale(.96)";


  setTimeout(
    () => {

      memoryImage.src =
        photos[currentPhoto];


      memoryCaption.textContent =
        captions[currentPhoto];


      memoryNumber.textContent =
        `${currentPhoto + 1} / ${photos.length}`;


      if (
        currentPhoto % 2 === 0
      ) {

        polaroid.style.transform =
          "rotate(-1deg) scale(1)";

      } else {

        polaroid.style.transform =
          "rotate(1deg) scale(1)";

      }

    },
    130
  );

}


/* PREVIOUS */

document
  .getElementById("previousPhoto")
  .addEventListener(
    "click",
    () => {

      currentPhoto--;

      if (
        currentPhoto < 0
      ) {

        currentPhoto =
          photos.length - 1;

      }

      updateMemory();

    }
  );


/* NEXT PHOTO */

document
  .getElementById("nextPhoto")
  .addEventListener(
    "click",
    () => {

      currentPhoto++;

      if (
        currentPhoto >=
        photos.length
      ) {

        currentPhoto = 0;

      }

      updateMemory();

    }
  );


/* MEMORY → CLOSING */

document
  .getElementById("memoryNext")
  .addEventListener(
    "click",
    () => {

      showScreen(
        screens.closing
      );

    }
  );


/* CLOSING → FINAL */

document
  .getElementById("closingNext")
  .addEventListener(
    "click",
    () => {

      showScreen(
        screens.final
      );

    }
  );
