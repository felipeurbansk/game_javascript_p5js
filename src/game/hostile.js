class Hostile extends MappingImage {
  constructor(
    image,
    spriteTotal,
    positionX,
    positionY,
    countSpriteX,
    countSpriteY,
    widthShowSprite,
    heightShowSprite,
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

    this.positionX = positionX;
    this.positionY = positionY;
    this.widthShowSprite = widthShowSprite;
    this.heightShowSprite = heightShowSprite;

    this.velocidade = 10;
    this.gravity = 3;
    this.marginBottom = 40;

    this.animation = new Animate(this);
  }

  show() {
    this.animation.anime();
  }

  stop() {
    this.animation.stop();
  }

  start() {
    this.animation.start();
  }

  move() {
    this.animation.move();
  }
}
