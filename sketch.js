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
  char = new Char(imageChar);
  hostile = new Hostile(
    mapeamento,
    image,
    position_x,
    widthChar,
    heightChar,
    widthSprite,
    heightSprite
  );
  frameRate(12);
  // soundBackground.loop();
}

function draw() {
  scene.show();
  scene.move();
  char.anime();
}
