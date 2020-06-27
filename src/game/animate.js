class Animate {
  constructor(animation) {
    this.animation = animation;
    this.active = true;
    this.spriteCountFrame = 0;

    this.baseY = height - (this.animation.heightShowSprite + 13);
    this.velocidade = 10;
    this.velocidadePulo = 1;
    this.gravityWeight = 3;
  }

  anime() {
    image(
      this.animation.image,
      this.animation.positionX,
      this.animation.positionY,
      this.animation.widthShowSprite,
      this.animation.heightShowSprite,
      this.animation.mapImage[this.spriteCountFrame][0],
      this.animation.mapImage[this.spriteCountFrame][1],
      this.animation.widthSprite,
      this.animation.heightSprite
    );
    if (this.active) {
      if (++this.spriteCountFrame == this.animation.spriteTotal) {
        this.spriteCountFrame = 0;
      }
    }
  }

  move() {
    if (this.active) {
      this.animation.positionX -= this.velocidade;
      if (this.animation.positionX < -this.animation.widthShowSprite) {
        this.animation.positionX = width;
      }
    }
  }

  gravity() {
    this.animation.positionY += this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravityWeight;

    if (this.animation.positionY > this.baseY) {
      this.animation.positionY = this.baseY;
    }
  }

  jump() {
    this.velocidadePulo = -30;
  }

  stop() {
    this.active = false;
  }

  start() {
    this.active = true;
  }
}
