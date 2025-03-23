const goalSound = new Audio('sounds/crowd-cheer.mp3'); // https://pixabay.com/sound-effects/short-crowd-cheer-236776/
const booSound = new Audio('sounds/boo-sound.mp3'); // https://pixabay.com/sound-effects/boo-36556/
const goalLeft = document.getElementById("div-one");
const goalMiddle = document.getElementById("div-two");
const goalRight = document.getElementById("div-three");
const sectionHTML = document.querySelector('section');
const scoreCount = document.createElement("p");

let goalieOne = document.getElementById("goalie-image-one");
let scoreCounter = 0;

sectionHTML.parentNode.insertBefore(scoreCount, sectionHTML); // Code van ChatGPT


function goalieSideChange () {
    const randomSide = Math.ceil(Math.random() * 3);

    goalieOne.style.height = "70vh";
    goalieOne.style.width = "100%";

    scoreCount.style.textAlign = "center";
    scoreCount.style.fontSize = "1.5em";

    if (randomSide === 1) {
        goalLeft.appendChild(goalieOne);
    } else if (randomSide === 2) {
        goalMiddle.appendChild(goalieOne);
    } else {
        goalRight.appendChild(goalieOne);
    }

    if (event.currentTarget === goalieOne.parentElement) { // Code van ChatGPT
        goalieOne.src = "images/goalie-two.png"; // Code van Kevin Yip
        booSound.play();
    } else {
        scoreCounter++;
        goalieOne.src = "images/goalie-one.png"; // Code van Kevin Yip
        goalSound.play();
    }

    if (scoreCounter <= 10) {
        console.log(scoreCounter);
        scoreCount.textContent = `Score: ${scoreCounter}`;
    } else {
        alert("Congratulations, you have finished the game!\nRefresh the page to play again!");
    }
}


goalLeft.addEventListener("click", goalieSideChange);
goalMiddle.addEventListener("click", goalieSideChange);
goalRight.addEventListener("click", goalieSideChange);