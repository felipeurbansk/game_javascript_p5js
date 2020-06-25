class Bruxa extends MappingImage {
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
    this.positionX = 50;
    this.positionY = height - 140;
    this.velocidade = 10;
    this.widthFrame = 54;
    this.heightFrame = 54;
    this.gravity = 3;
  }

  show() {
    image(
      this.image,
      this.positionX,
      this.positionY,
      110,
      135,
      this.positionSpriteX,
      this.positionSpriteY,
      this.widthSprite,
      this.heightSprite
    );
  }

  anime() {
    image(
      this.image,
      this.positionX,
      this.positionY,
      110,
      135,
      this.mapImage[this.spriteCountFrame][0],
      this.mapImage[this.spriteCountFrame][1],
      this.widthSprite,
      this.heightSprite
    );
    if (++this.spriteCountFrame == this.spriteTotal) {
      this.spriteCountFrame = 0;
    }
  }

  jump() {
    this.positionY -= 56;
  }

  gravity() {}
}
