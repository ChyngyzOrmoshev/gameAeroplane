const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  start();
});

function start() {
  if (cactus.classList != "start") {
    setTimeout(function () {
      cactus.classList.add("start");
    }, 500);
  }
}

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 800);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130) {
    alert("GAME OVER!!");
  }
}, 10);
