let imageScene;
let imageChar;
let imageHostile;
let soundBackground;
let soundJump;

function preload() {
  imageScene = loadImage("./assets/imagens/cenario/floresta.png");
  imageChar = loadImage("./assets/imagens/personagem/correndo.png");
  imageHostile = loadImage("./assets/imagens/inimigos/gotinha.png");
  soundBackground = loadSound("./assets/sons/trilha_jogo.mp3");
  soundJump = loadSound("./assets/sons/somPulo.mp3");
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new Scene(imageScene, 4);
  bruxa = new Bruxa(imageChar, 16, 4, 4, 110, 135, 220, 270);
  hostile = new Hostile(imageHostile, 28, 4, 7, 54, 54, 104, 104);

  frameRate(30);
  // soundBackground.loop();
}

function draw() {
  bruxa.gravity();
  scene.show();
  scene.move();
  hostile.show();
  bruxa.show();
  hostile.move();

  if (bruxa.collided(hostile)) {
    console.log("Colidiu");
  }
}

function keyPressed() {
  if (key == "ArrowUp") {
    bruxa.jump();
    soundJump.play();
  }
}
