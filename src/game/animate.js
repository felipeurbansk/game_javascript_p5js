class Animate extends MappingImage {
  constructor(
    mapping,
    image,
    position_x,
    widthChar,
    heightChar,
    widthSprite,
    heightSprite
  ) {
    this.mapping = mapping;
    this.image = image;
    this.position_x = position_x;
    this.position_y = height - heightChar;
    this.widthChar = widthChar;
    this.heightChar = heightChar;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;

    this.count_frame = 0;
  }

  show() {
    image(
      this.image,
      this.position_x,
      this.position_y,
      this.widthChar,
      this.heightChar,
      this.mapeamento[0][0],
      this.mapeamento[0][1],
      this.widthSprite,
      this.heightSprite
    );
  }

  //   anime() {
  //     image(
  //       this.image,
  //       0,
  //       height - 140,
  //       110,
  //       135,
  //       this.mapImage[this.image_count_now][0],
  //       this.mapImage[this.image_count_now][1],
  //       this.const_width,
  //       this.const_height
  //     );

  //     if (this.count_frame == this.image_count) {
  //       this.count_frame = 0;
  //     }
  //   }
}
