class MappingImage {
  constructor(
    image,
    countTotalSprite,
    countSpriteX,
    countSpriteY,
    initPositionX,
    initPositionY,
    widthSprite,
    heightSprite
  ) {
    this.image = image;
    this.count_frame = 0;
    this.count_sprite_total = countTotalSprite;
    this.count_sprite_x = countSpriteX;
    this.count_sprite_y = countSpriteY;
    this.image_position_x = initPositionX;
    this.image_position_y = initPositionY;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;
    this.mapImage = [];
    this.mappingImage();
  }

  mappingImage() {
    console.log(this.mapImage);
    for (let y = 0; y <= this.count_sprite_y; y++) {
      for (let x = 0; x <= this.count_sprite_x; x++) {
        this.mapImage = [
          ...this.mapImage,
          [this.widthSprite * x, this.heightSprite * y],
        ];
      }
    }
  }

  getMapping() {
    return this.mapImage;
  }
}
