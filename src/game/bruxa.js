class Bruxa extends MappingImage {
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

    this.positionX = 50;
    this.positionY = height - 140;
    this.widthShowSprite = widthShowSprite;
    this.heightShowSprite = heightShowSprite;

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

  jump() {
    this.animation.jump();
  }

  gravity() {
    this.animation.gravity();
  }

  collided(inimigo) {
    const precisao = 0.8;
    return collideRectRect(
      this.positionX,
      this.positionY,
      this.widthShowSprite * precisao,
      this.heightShowSprite * precisao,
      inimigo.positionX,
      inimigo.positionY,
      inimigo.widthShowSprite * precisao,
      inimigo.heightShowSprite * precisao
    );
  }
}
