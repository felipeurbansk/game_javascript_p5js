class Cenario {
  construct(image, speed) {
    this.image = image;
    this.speed = speed;
  }

  show() {
    image(this.imagem, -this.speed, width, height);
    image(this.imagem, width - this.speed, width, height);
  }
}
