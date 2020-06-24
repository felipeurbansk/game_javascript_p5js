let imageScene;
let imageChar;
let soundBackground;

function preload() {
  imageScene = loadImage("./assets/imagens/cenario/floresta.png");
  imageChar = loadImage("./assets/imagens/personagem/correndo.png");
  soundBackground = loadSound("./assets/sons/trilha_jogo.mp3");
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new Scene(imageScene, 4);
  char = new Char(imageChar);
  frameRate(12);
  // soundBackground.loop();
}

function draw() {
  scene.show();
  scene.move();
  char.anime();
}
