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
  }

  show() {
    image(
      this.image,
      100,
      height - 140,
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
      0,
      height - 140,
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
}
