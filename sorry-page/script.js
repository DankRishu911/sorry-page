let current = 1;
const music = document.getElementById("music");

// PASSWORD
function unlock() {
    if (document.getElementById("pass").value === "08032006") {
        show(2);
        typeText("Hey... I made this for you ❤️", "intro");
    }
}

// SCREEN SWITCH
function show(n) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("screen" + n).classList.add("active");
    current = n;
}

// NEXT
function next(n, song) {
    show(n);
    play(song);
}

// 🎵 MUSIC (FINAL FIX)
function play(src) {
    music.pause();
    music.currentTime = 0;
    music.src = src;

    music.play().then(() => {
        music.volume = 0.5;
    }).catch(() => {
        console.log("Click required for music");
    });
}

// ✨ TYPE EFFECT
function typeText(text, id) {
    let el = document.getElementById(id);
    el.innerHTML = ""; // clear before typing
    let i = 0;

    let interval = setInterval(() => {
        el.innerHTML += text[i++];
        if (i >= text.length) clearInterval(interval);
    }, 40);
}

// 📸 IMAGE SLIDES (NO FOLDER VERSION)
let imgIndex = 1;
function nextImage() {
    imgIndex++;
    if (imgIndex > 10) imgIndex = 1;

    // IMPORTANT: no "images/" since your files are in root
    document.getElementById("gallery").src = "pic" + imgIndex + ".png";
}

// ❤️ CLICK HEART EFFECT
document.addEventListener("click", function(e){
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "float 1s ease-out";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
});

// ❤️ ANIMATION STYLE
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
0% { transform: translateY(0); opacity: 1; }
100% { transform: translateY(-100px); opacity: 0; }
}`;
document.head.appendChild(style);