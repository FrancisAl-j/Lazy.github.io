let phrase = [
    "Mag laba",
    "Mag kape",
    "Kumain ka na",
    "Chat mo gumawa ng website na to",
    "Magluto ng pagkain",
    "Maglakad lakad",
    "Mag motor",
    "Mag pray at mag pasalamat sa Diyos"
];

const phrasePrint = document.getElementById('what-el');
const randomBtn = document.getElementById('random-btn');
let chances = document.getElementById('chances');
let chancesCount = 3;
let demo = document.getElementById('demo');
const fb = document.getElementById('fb');
const git = document.getElementById('git');
const twit = document.getElementById('twit')

fb.addEventListener('click', () => {
    window.location = "https://www.facebook.com/Bilaso2/";
});

git.addEventListener('click', () => {
    window.location = "https://github.com/FrancisAl-j";
});

twit.addEventListener('click', () => {
    window.location = "https://www.facebook.com/Bilaso2/";
});

randomBtn.addEventListener('click', () => {
    let random = phrase[Math.floor(Math.random() * phrase.length)];
    phrasePrint.textContent = random;
    chancesCount--;
    if(chancesCount === 0) {
        phrasePrint.textContent = "Chat mo gumawa ng website na to!";
        randomBtn.style.display = "none";
    }
    chances.textContent = "You have " + chancesCount + " chances";
});



