class MappingImage {
  constructor(
    image,
    spriteTotal,
    countSpriteX,
    countSpriteY,
    widthSprite,
    heightSprite
  ) {
    this.mapImage = [];
    this.image = image;
    this.count_frame = 0;
    this.spriteTotal = spriteTotal;
    this.countSpriteX = countSpriteX;
    this.countSpriteY = countSpriteY;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;
    this.mappingImage();
  }

  mappingImage() {
    for (let y = 0; y < this.countSpriteY; y++) {
      for (let x = 0; x < this.countSpriteX; x++) {
        this.mapImage = [
          ...this.mapImage,
          [this.widthSprite * x, this.heightSprite * y],
        ];
      }
    }

    this.positionSpriteX = this.mapImage[0][0];
    this.positionSpriteY = this.mapImage[0][1];
  }

  getMapping() {
    return this.mapImage;
  }
}
