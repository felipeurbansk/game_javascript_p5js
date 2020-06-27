let imageScene;
let imageGameOver;
let imageChar;
let imageHostile;
let imageHostileFly;
let imageTroll;
let soundBackground;
let soundJump;
let score;

function preload() {
  imageScene = loadImage("./assets/imagens/cenario/floresta.png");
  imageGameOver = loadImage("./assets/imagens/assets/game-over.png");
  imageChar = loadImage("./assets/imagens/personagem/correndo.png");
  imageHostile = loadImage("./assets/imagens/inimigos/gotinha.png");
  imageHostileFly = loadImage("./assets/imagens/inimigos/gotinha-voadora.png");
  imageTroll = loadImage("./assets/imagens/inimigos/troll.png");
  soundBackground = loadSound("./assets/sons/trilha_jogo.mp3");
  soundJump = loadSound("./assets/sons/somPulo.mp3");
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  scene = new Scene(imageScene, 4);
  score = new Score();
  bruxa = new Bruxa(imageChar, 16, 4, 4, 110, 135, 220, 270);
  hostile = new Hostile(
    imageHostile,
    28,
    width - 100,
    height - 60,
    4,
    7,
    54,
    54,
    104,
    104
  );
  hostileFly = new Hostile(
    imageHostileFly,
    15,
    width - 100,
    height - 460,
    3,
    5,
    100,
    75,
    200,
    150
  );
  troll = new Hostile(
    imageTroll,
    25,
    width - 150,
    height - 180,
    5,
    5,
    200,
    200,
    400,
    400
  );

  frameRate(28);
  // soundBackground.loop();
}

function draw() {
  bruxa.gravity();
  scene.show();
  scene.move();
  hostile.show();
  hostile.move();
  troll.show();
  troll.move();
  hostileFly.show();
  hostileFly.move();
  bruxa.show();
  score.show();
  score.incrementScore();

  if (bruxa.collided(hostile)) {
    console.log("Colidiu com a gota");
    gameOver();
  }

  if (bruxa.collided(troll)) {
    console.log("Colidiu com o tollzao");
    gameOver();
  }
  if (bruxa.collided(hostileFly)) {
    console.log("Colidiu com a gota voadora");
    gameOver();
  }
}

function gameOver() {
  image(imageGameOver, width / 2 - 200, height / 3);
  noLoop();
}

function keyPressed() {
  if (key == "ArrowUp") {
    bruxa.jump();
    soundJump.play();
  }
}
