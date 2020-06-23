class Char {
  constructor(image) {
    this.mapImage = [];
    this.image = image;
    this.image_count = 16;
    this.image_count_now = 0;
    this.image_count_x = 3;
    this.image_count_y = 3;
    this.image_position_x = 0;
    this.image_position_y = 270;
    this.const_width = 220;
    this.const_height = 270;
    this.mappingImage();
    console.log(this.mapImage);
  }

  show() {
    image(
      this.image,
      0,
      height - 140,
      110,
      135,
      this.image_position_x,
      this.image_position_y,
      this.const_width,
      this.const_height
    );
  }

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

    if (++this.image_count_now > this.image_count) {
      this.image_count_now = 0;
    } else {
      this.image_count_now++;
    }
  }

  mappingImage() {
    for (let y = 0; y <= this.image_count_y; y++) {
      for (let x = 0; x <= this.image_count_x; x++) {
        this.mapImage = [
          ...this.mapImage,
          [this.const_width * x, this.const_height * y],
        ];
      }
    }
  }
}
