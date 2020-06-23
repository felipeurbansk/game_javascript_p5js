let imagemCenario;
let imagePersonagem;
let cenario;

function preload() {
  imageCenario = loadImage("./assets/imagens/cenario/floresta.png");
  imagePersonagem = loadImage("./assets/imagens/personagem/correndo.png");
}

function setup() {
  cenario = new Cenario(imagemCenario, 50);
  image(cenario.image, 0, 0);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(imagePersonagem, 0, height - 140, 110, 135, 0, 0, 220, 270);
}
