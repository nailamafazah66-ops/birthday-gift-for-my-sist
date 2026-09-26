* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
}

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

body {
    font-family: Georgia, "Times New Roman", serif;
    background: #8d0718;
    color: white;
}

button {
    font-family: inherit;
}

.screen {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100dvh;
    display: none;
    overflow: hidden;
}

.screen.active {
    display: flex;
}


/* BUTTON */

.main-btn {
    border: 0;
    background: white;
    color: #a00018;
    padding: 13px 30px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 0 7px 20px rgba(0,0,0,.2);
}

.main-btn:active {
    transform: scale(.94);
}


/* MUSIC */

.music-btn {
    position: fixed;
    right: 15px;
    bottom: 15px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(100,0,15,.8);
    color: white;
    font-size: 20px;
    z-index: 9999;
}

.music-btn.playing {
    animation: musicPulse 1.2s infinite;
}

@keyframes musicPulse {
    50% {
        transform: scale(1.1);
    }
}


/* GAME */

#gameScreen {
    flex-direction: column;
    align-items: center;
    background:
        radial-gradient(circle at center,#d51c37,#a5071c 55%,#70000e);
}

.game-title {
    position: absolute;
    top: 5%;
    width: 92%;
    text-align: center;
    z-index: 20;
}

.game-title h1 {
    font-size: clamp(18px,5vw,28px);
    line-height: 1.25;
    text-shadow: 0 3px 7px rgba(0,0,0,.3);
}


/* MEMBERS */

.members {
    position: absolute;
    top: 19%;
    left: 4%;
    right: 4%;
    height: 57%;
    z-index: 10;
}

.member {
    position: absolute;
    border: 0;
    background: transparent;
    padding: 0;
    width: 27vw;
    max-width: 145px;
    cursor: pointer;
}

.member img {
    width: 100%;
    display: block;
    filter: drop-shadow(0 9px 7px rgba(0,0,0,.25));
    animation: idle 2.8s ease-in-out infinite;
}

.member-1 {
    left: 0;
    top: 0;
}

.member-2 {
    left: 36%;
    top: 0;
}

.member-3 {
    right: 0;
    top: 0;
}

.member-4 {
    left: 5%;
    top: 43%;
}

.member-5 {
    left: 37%;
    top: 42%;
}

.member-6 {
    right: 5%;
    top: 43%;
}

.member-7 {
    left: 36%;
    top: 77%;
}

.member-1 img { animation-delay: 0s; }
.member-2 img { animation-delay: -.5s; }
.member-3 img { animation-delay: -1s; }
.member-4 img { animation-delay: -1.4s; }
.member-5 img { animation-delay: -.3s; }
.member-6 img { animation-delay: -1.8s; }
.member-7 img { animation-delay: -.8s; }

@keyframes idle {
    0%,100% {
        transform: translateY(0) rotate(-1deg);
    }

    50% {
        transform: translateY(-8px) rotate(1deg);
    }
}


/* SPIDERMAN */

.spiderman {
    position: absolute;
    width: 29vw;
    max-width: 145px;
    left: 50%;
    bottom: 3%;
    transform: translateX(-50%);
    z-index: 12;
    filter: drop-shadow(0 8px 7px rgba(0,0,0,.3));
}


/* WRONG */

.wrong-message {
    position: fixed;
    top: 43%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0);
    opacity: 0;
    z-index: 100;
    text-align: center;
    pointer-events: none;
}

.wrong-message span {
    display: block;
    font-family: Arial,sans-serif;
    font-size: 70px;
    font-weight: bold;
}

.wrong-message p {
    font-size: 24px;
    font-weight: bold;
}

.wrong-message.show {
    animation: wrong .8s ease;
}

@keyframes wrong {
    0% {
        opacity: 0;
        transform: translate(-50%,-50%) scale(.3);
    }

    25% {
        opacity: 1;
        transform: translate(-50%,-50%) scale(1.15);
    }

    70% {
        opacity: 1;
        transform: translate(-50%,-50%) scale(1);
    }

    100% {
        opacity: 0;
    }
}

.member.shake {
    animation: shake .45s ease !important;
}

@keyframes shake {
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-7px); }
    80% { transform: translateX(6px); }
}


/* KEY */

.key-found {
    position: fixed;
    inset: 0;
    background: rgba(60,0,10,.75);
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 200;
}

.key-found.show {
    display: flex;
}

.key-box {
    animation: keyAppear .8s ease;
}

.key-box img {
    width: 45vw;
    max-width: 220px;
    filter: drop-shadow(0 10px 12px rgba(0,0,0,.35));
}

.key-found h2 {
    font-size: 34px;
    margin: 10px 0 22px;
}

@keyframes keyAppear {
    0% {
        opacity: 0;
        transform: scale(.1) rotate(-30deg);
    }

    60% {
        transform: scale(1.25) rotate(8deg);
    }

    100% {
        opacity: 1;
        transform: scale(1) rotate(0);
    }
}


/* FLOWERS */

.flower-screen {
    background: #8d0718;
    align-items: center;
    justify-content: center;
    z-index: 500;
}

#flowerContainer {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.flower {
    position: absolute;

    width: clamp(105px,28vw,180px);

    left: calc(50% + var(--x));
    top: calc(50% + var(--y));

    transform:
        translate(-50%,-50%)
        scale(.02);

    opacity: 0;

    animation:
        bloom 1.55s
        cubic-bezier(.2,.75,.25,1)
        forwards;

    animation-delay: var(--delay);
}

.flower img {
    display: block;
    width: 100%;
}

@keyframes bloom {

    0% {
        opacity: 0;
        transform:
            translate(-50%,-50%)
            scale(.02)
            rotate(-15deg);
    }

    15% {
        opacity: 1;
    }

    100% {
        opacity: 1;
        transform:
            translate(-50%,-50%)
            scale(var(--scale))
            rotate(var(--rotation));
    }
}


/* PIN */

.pin-screen {
    background:
        radial-gradient(circle at center,#d31b36,#a1081c 55%,#73000f);
    align-items: center;
    justify-content: center;
    text-align: center;
}

.sparkles {
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(circle,white 1px,transparent 2px),
        radial-gradient(circle,rgba(255,255,255,.8) 1px,transparent 2px),
        radial-gradient(circle,rgba(255,255,255,.5) 1px,transparent 2px);
    background-size: 47px 53px,71px 67px,93px 81px;
    opacity: .8;
}

.pin-content {
    position: relative;
    width: 88%;
    max-width: 400px;
    z-index: 2;
}

.pin-icon {
    font-size: 48px;
    margin-bottom: 10px;
}

.pin-content h1 {
    font-size: 29px;
    margin-bottom: 8px;
}

.pin-content > p {
    font-size: 15px;
    margin-bottom: 20px;
}

#pinInput {
    width: 100%;
    height: 58px;
    border: 2px solid rgba(255,255,255,.8);
    border-radius: 15px;
    background: rgba(255,255,255,.15);
    color: white;
    text-align: center;
    font-size: 27px;
    letter-spacing: 8px;
    outline: none;
    margin-bottom: 14px;
}

#pinInput::placeholder {
    color: rgba(255,255,255,.7);
}

.pin-error {
    display: none;
    color: #ffe0e0 !important;
}

.pin-error.show {
    display: block;
}


/* BIRTHDAY */

.birthday-screen {
    background:
        url("background.jpg")
        center/cover
        no-repeat;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.birthday-overlay {
    position: absolute;
    inset: 0;
    background: rgba(50,0,10,.42);
}

.birthday-content {
    position: relative;
    z-index: 2;
}

.birthday-content h1 {
    font-size: clamp(32px,9vw,58px);
    line-height: 1.1;
    text-shadow: 0 5px 18px rgba(0,0,0,.5);
}

.birthday-content .main-btn {
    margin-top: 30px;
}


/* LETTER */

.content-screen {
    background: linear-gradient(145deg,#b30b22,#780011);
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.letter-card,
.closing-card {
    width: 100%;
    max-width: 500px;
    max-height: 88dvh;
    overflow-y: auto;
    background: rgba(255,255,255,.97);
    color: #5e0915;
    border-radius: 25px;
    padding: 30px 24px;
    text-align: center;
    box-shadow: 0 20px 50px rgba(0,0,0,.3);
}

.small-title {
    font-family: Arial,sans-serif;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 3px;
    color: #a2091d;
    margin-bottom: 10px;
}

.letter-card h1,
.closing-card h1 {
    font-size: 28px;
    margin-bottom: 22px;
}

.letter-text {
    text-align: left;
    line-height: 1.65;
    font-size: 15px;
}

.letter-text p {
    margin-bottom: 15px;
}

.signature {
    text-align: right;
    font-style: italic;
}

.letter-card .main-btn,
.closing-card .main-btn {
    margin-top: 8px;
}


/* MEMORIES */

.memory-screen {
    background:
        radial-gradient(circle at center,#d51a35,#98071a 60%,#71000e);
    flex-direction: column;
    align-items: center;
    padding: 25px 15px 20px;
}

.memory-header {
    text-align: center;
}

.memory-header p {
    font-family: Arial,sans-serif;
    font-size: 10px;
    letter-spacing: 3px;
    margin-bottom: 8px;
}

.memory-header h1 {
    font-size: 25px;
    margin-bottom: 6px;
}

#photoCounter {
    font-family: Arial,sans-serif;
    font-size: 13px;
}

.polaroid-area {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
}

.polaroid {
    width: min(80vw,340px);
    background: white;
    padding: 13px 13px 24px;
    box-shadow: 0 18px 35px rgba(0,0,0,.3);
    transform: rotate(-1.5deg);
}

.polaroid.change {
    animation: photoChange .45s ease;
}

@keyframes photoChange {

    0% {
        opacity: .3;
        transform: rotate(-3deg) scale(.96);
    }

    50% {
        opacity: .7;
        transform: rotate(3deg) scale(1.02);
    }

    100% {
        opacity: 1;
        transform: rotate(-1.5deg) scale(1);
    }
}

.photo-holder {
    width: 100%;
    aspect-ratio: 1;
    overflow: hidden;
    background: #eee;
}

.photo-holder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.caption-holder {
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
}

.caption-holder p {
    color: #3d2222;
    font-family: "Comic Sans MS",cursive;
    font-size: 14px;
    text-align: center;
    line-height: 1.4;
}

.memory-controls {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding-top: 10px;
}

.circle-btn {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.7);
    background: rgba(255,255,255,.15);
    color: white;
    font-size: 27px;
}

.memory-controls .main-btn {
    min-width: 110px;
}


/* CLOSING */

.heart,
.final-heart {
    font-size: 60px;
    animation: heartBeat 1.5s infinite;
}

@keyframes heartBeat {
    50% {
        transform: scale(1.1);
    }
}

.closing-card > p:not(.small-title) {
    line-height: 1.65;
    font-size: 15px;
    margin-bottom: 15px;
}


/* FINAL */

.final-screen {
    background:
        radial-gradient(circle at center,#d51b36,#99091c 55%,#70000e);
    align-items: center;
    justify-content: center;
    text-align: center;
}

.final-content {
    width: 90%;
    max-width: 500px;
}

.final-heart {
    margin-bottom: 25px;
}

.final-content p {
    font-size: 19px;
    line-height: 1.55;
}

.final-line {
    width: 60px;
    height: 1px;
    background: rgba(255,255,255,.7);
    margin: 25px auto;
}

.final-content h1 {
    font-size: 28px;
}

.final-content .from {
    margin-top: 20px;
    font-size: 15px;
    opacity: .8;
}
