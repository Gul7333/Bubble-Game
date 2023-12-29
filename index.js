let hit
let timer = 60;
let score = 0;

const bottom = document.querySelector(".bottom");
const hitBox = document.querySelector(".hitbox");
const Timer = document.querySelector(".timer");
const scoreBox = document.querySelector(".score");

function makeBubble(n) {
 bottom.innerHTML = "";
 for (let i = 0; i < n; i++) {
  let number = Math.floor(Math.random() * 10);
  bottom.innerHTML += `<div id="bubble"> <h3>${number}</h3></div>`;
 }
}
function getHit() {
  
 hit = Math.floor(Math.random() * 10);
 hitBox.innerText = hit;
}
function startTimer() {
let timerId = setInterval(()=>{
    if(timer > 0){
  timer--
  Timer.innerText = timer
    }else{
      clearInterval(timerId)
      bottom.innerText = `Time Over..You Scored ${score}`
      completed.play()

    }
  },1000)
}
function addScore() {
 score += 10;
 scoreBox.innerText = score;
}

// audio.onerror = function () {
// alert("Cannot play audio file: " + this.error.message);
// };

// audio.addEventListener("canplaythrough", event => {
// // Audio is ready to play
// console.log("Audio is ready to play");
// });
const error = new Audio("../asset/Error.m4a");
const succes = new Audio("../asset/succes.m4a");
const completed = new Audio("../asset/Alert.m4a");
// audio.addEventListener('canplaythrough',()=>{
//   console.log('can played')
// })
function runGame(e) {
 let num = Number(e.target.textContent);
 if (num == hit) {
   
// audio.crossOrigin = "anonymous"
  addScore();
  succes.play()
 } else {
  navigator.vibrate(100);
  error.play()
 }
   makeBubble(45);
  getHit();
}
bottom.addEventListener("click", runGame);
startTimer()
getHit();
makeBubble(45);
