class Char extends MappingImage {
  /** Iniciar o acoplamento de MappingImage */
  // constructor(
  //   image,
  //   countTotalSprite,
  //   countSpriteX,
  //   countSpriteY,
  //   initPositionX,
  //   initPositionY,
  //   widthSprite,
  //   heightSprite
  // ) {
  //   super(
  //     mapeamento,
  //     image,
  //     position_x,
  //     widthChar,
  //     heightChar,
  //     widthSprite,
  //     heightSprite
  //   );
  //   this.mapImage = [];
  //   this.image = image;
  //   this.image_count = 16;
  //   this.image_count_now = 0;
  //   this.image_count_x = 3;
  //   this.image_count_y = 3;
  //   this.image_position_x = 0;
  //   this.image_position_y = 270;
  //   this.const_width = 220;
  //   this.const_height = 270;
  //   this.mappingImage();
  // }
  // show() {
  //   image(
  //     this.image,
  //     0,
  //     height - 140,
  //     110,
  //     135,
  //     this.image_position_x,
  //     this.image_position_y,
  //     this.const_width,
  //     this.const_height
  //   );
  // }
  // anime() {
  //   image(
  //     this.image,
  //     0,
  //     height - 140,
  //     110,
  //     135,
  //     this.mapImage[this.image_count_now][0],
  //     this.mapImage[this.image_count_now][1],
  //     this.const_width,
  //     this.const_height
  //   );
  //   if (++this.image_count_now == this.image_count) {
  //     this.image_count_now = 0;
  //   }
  // }
  // mappingImage() {
  //   for (let y = 0; y <= this.image_count_y; y++) {
  //     for (let x = 0; x <= this.image_count_x; x++) {
  //       this.mapImage = [
  //         ...this.mapImage,
  //         [this.const_width * x, this.const_height * y],
  //       ];
  //     }
  //   }
  // }
}
