let imageCenario;
let imagePersonagem;
let cenario;
let soundBackground;

function preload() {
  imageCenario = loadImage("./assets/imagens/cenario/floresta.png");
  imagePersonagem = loadImage("./assets/imagens/personagem/correndo.png");
  soundBackground = loadSound("./assets/sons/trilha_jogo.mp3");
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new Scene(imageCenario, 4);
  char = new Char(imagePersonagem);
  frameRate(5);
  // soundBackground.loop();
}

function draw() {
  scene.show();
  char.anime();
  scene.move();
}
