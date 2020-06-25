let imageScene;
let imageChar;
let imageHostile;
let soundBackground;

function preload() {
  imageScene = loadImage("./assets/imagens/cenario/floresta.png");
  imageChar = loadImage("./assets/imagens/personagem/correndo.png");
  imageHostile = loadImage("./assets/imagens/inimigos/gotinha.png");
  soundBackground = loadSound("./assets/sons/trilha_jogo.mp3");
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new Scene(imageScene, 4);
  bruxa = new Bruxa(imageChar, 16, 4, 4, 220, 270);
  hostile = new Hostile(imageHostile, 28, 4, 7, 104, 104);

  frameRate(30);
  // soundBackground.loop();
}

function draw() {
  scene.show();
  scene.move();
  hostile.anime();
  bruxa.anime();
  hostile.move();
}

function keyPressed() {
  if (key == "ArrowUp") bruxa.jump();
}
