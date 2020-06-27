class Hostile extends MappingImage {
  constructor(
    image,
    spriteTotal,
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

    this.positionX = width - 100;
    this.positionY = height - 60;
    this.velocidade = 10;
    this.widthShowSprite = widthShowSprite;
    this.heightShowSprite = heightShowSprite;
    this.gravity = 3;

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
