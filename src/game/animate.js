class Animate {
  constructor() {}

  anime() {
    image(
      this.image,
      0,
      height - 140,
      110,
      135,
      this.mapImage[this.image_count_now][0],
      this.mapImage[this.image_count_now][1],
      this.const_width,
      this.const_height
    );

    if (this.count_frame == this.image_count) {
      this.count_frame = 0;
    }
  }
}
