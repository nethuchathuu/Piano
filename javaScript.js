const k8 = new Audio("sounds/key08.mp3");
const k9 = new Audio("sounds/key09.mp3");
const k10 = new Audio("sounds/key10.mp3");
const k11 = new Audio("sounds/key11.mp3");
const k12 = new Audio("sounds/key12.mp3");
const k13 = new Audio("sounds/key13.mp3");
const k14 = new Audio("sounds/key14.mp3");
const k15 = new Audio("sounds/key15.mp3");
const k16 = new Audio("sounds/key16.mp3");
const k17 = new Audio("sounds/key17.mp3");
const k18 = new Audio("sounds/key18.mp3");
const k19 = new Audio("sounds/key19.mp3");
const k20 = new Audio("sounds/key20.mp3");
const k21 = new Audio("sounds/key21.mp3");
const k22 = new Audio("sounds/key22.mp3");
const k23 = new Audio("sounds/key23.mp3");
const k24 = new Audio("sounds/key24.mp3");

const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
};

//k8
const k8key = document.querySelector(".k8-key");
const playk8 = () => {
    playSound(k8);
    k8key.classList.add("active");
    setTimeout(() => k8key.classList.remove("active"), 200);
};
k8key.addEventListener("click", playk8);

//k9
const k9key = document.querySelector(".k9-key");
const playk9 = () => {
    playSound(k9);
    k9key.classList.add("active");
    setTimeout(() => k9key.classList.remove("active"), 200);
};
k9key.addEventListener("click", playk9);

//k10
const k10key = document.querySelector(".k10-key");
const playk10 = () => {
    playSound(k10);
    k10key.classList.add("active");
    setTimeout(() => k10key.classList.remove("active"), 200);
};
k10key.addEventListener("click", playk10);

//k11
const k11key = document.querySelector(".k11-key");
const playk11 = () => {
    playSound(k11);
    k11key.classList.add("active");
    setTimeout(() => k11key.classList.remove("active"), 200);
};
k11key.addEventListener("click", playk11);

//k12
const k12key = document.querySelector(".k12-key");
const playk12 = () => {
    playSound(k12);
    k12key.classList.add("active");
    setTimeout(() => k12key.classList.remove("active"), 200);
};
k12key.addEventListener("click", playk12);

//k13
const k13key = document.querySelector(".k13-key");
const playk13 = () => {
    playSound(k13);
    k13key.classList.add("active");
    setTimeout(() => k13key.classList.remove("active"), 200);
};
k13key.addEventListener("click", playk13);

//k14
const k14key = document.querySelector(".k14-key");
const playk14 = () => {
    playSound(k14);
    k14key.classList.add("active");
    setTimeout(() => k14key.classList.remove("active"), 200);
};
k14key.addEventListener("click", playk14);

//k15
const k15key = document.querySelector(".k15-key");
const playk15 = () => {
    playSound(k15);
    k15key.classList.add("active");
    setTimeout(() => k15key.classList.remove("active"), 200);
};
k15key.addEventListener("click", playk15);

//k16
const k16key = document.querySelector(".k16-key");
const playk16 = () => {
    playSound(k16);
    k16key.classList.add("active");
    setTimeout(() => k16key.classList.remove("active"), 200);
};
k16key.addEventListener("click", playk16);

//k17
const k17key = document.querySelector(".k17-key");
const playk17 = () => {
    playSound(k17);
    k17key.classList.add("active");
    setTimeout(() => k17key.classList.remove("active"), 200);
};
k17key.addEventListener("click", playk17);

//k18
const k18key = document.querySelector(".k18-key");
const playk18 = () => {
    playSound(k18);
    k18key.classList.add("active");
    setTimeout(() => k18key.classList.remove("active"), 200);
};
k18key.addEventListener("click", playk18);

//k19
const k19key = document.querySelector(".k19-key");
const playk19 = () => {
    playSound(k19);
    k19key.classList.add("active");
    setTimeout(() => k19key.classList.remove("active"), 200);
};
k19key.addEventListener("click", playk19);

//k20
const k20key = document.querySelector(".k20-key");
const playk20 = () => {
    playSound(k20);
    k20key.classList.add("active");
    setTimeout(() => k20key.classList.remove("active"), 200);
};
k20key.addEventListener("click", playk20);

//k21
const k21key = document.querySelector(".k21-key");
const playk21 = () => {
    playSound(k21);
    k21key.classList.add("active");
    setTimeout(() => k21key.classList.remove("active"), 200);
};
k21key.addEventListener("click", playk21);

//k22
const k22key = document.querySelector(".k22-key");
const playk22 = () => {
    playSound(k22);
    k22key.classList.add("active");
    setTimeout(() => k22key.classList.remove("active"), 200);
};
k22key.addEventListener("click", playk22);

//k23
const k23key = document.querySelector(".k23-key");
const playk23 = () => {
    playSound(k23);
    k23key.classList.add("active");
    setTimeout(() => k23key.classList.remove("active"), 200);
};
k23key.addEventListener("click", playk23);

//k24
const k24key = document.querySelector(".k24-key");
const playk24 = () => {
    playSound(k24);
    k24key.classList.add("active");
    setTimeout(() => k24key.classList.remove("active"), 200);
};
k24key.addEventListener("click", playk24);

window.addEventListener("keydown", ({keyCode}) => {
    //press Q
    if (keyCode === 81) return playk8();

    //press 2
    if (keyCode === 50) return playk9();

    //press W
    if (keyCode === 87) return playk10();

    //press 3
    if (keyCode === 51) return playk11();

    //press E
    if (keyCode === 69) return playk12();

    //press R
    if (keyCode === 82) return playk13();

    //press 5
    if (keyCode === 53) return playk14();

    //press T
    if (keyCode === 84) return playk15();

    //press 6
    if (keyCode === 54) return playk16();

    //press Y
    if (keyCode === 89) return playk17();

    //press 7
    if (keyCode === 55) return playk18();

    //press U
    if (keyCode === 85) return playk19();

    //press I
    if (keyCode === 73) return playk20();

    //press 9
    if (keyCode === 57) return playk21();

    //press O
    if (keyCode === 79) return playk22();

    //press 0
    if (keyCode === 48) return playk23();

    //press P
    if (keyCode === 80) return playk24();
});
