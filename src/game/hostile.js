class Hostile extends MappingImage {
  constructor(
    image,
    spriteTotal,
    countSpriteX,
    countSpriteY,
    widthSprite,
    heightSprite
  ) {
    super(
      image,
      spriteTotal,
      countSpriteX,
      countSpriteY,
      widthSprite,
      heightSprite
    );

    this.spriteCountFrame = 0;
    this.positionX = width - 100;
    this.velocidade = 10;
    this.widthFrame = 54;
    this.heightFrame = 54;
  }

  show() {
    image(
      this.image,
      width - 150, // Localização X na tela
      height - 140, // Localização Y na tela
      this.widthFrame, // Width de cada animação
      this.heightFrame, // Height de cada animação
      this.positionSpriteX, // Posição Y inicial do mapImage[0][0]
      this.positionSpriteY, // Posição X inicial do mapImage[0][1]
      this.widthSprite, // Width do frame de um sprite
      this.heightSprite // Height do frame de um sprite
    );
  }

  anime() {
    image(
      this.image,
      this.positionX,
      height - 60,
      54,
      54,
      this.mapImage[this.spriteCountFrame][0],
      this.mapImage[this.spriteCountFrame][1],
      this.widthSprite,
      this.heightSprite
    );
    if (++this.spriteCountFrame == this.spriteTotal) {
      this.spriteCountFrame = 0;
    }
  }

  move() {
    this.positionX -= this.velocidade;
    if (this.positionX < -this.widthFrame) {
      this.positionX = width;
    }
  }
}
