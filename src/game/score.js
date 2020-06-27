class Score {
  constructor() {
    this.score = 0;
  }

  show() {
    textAlign("right");
    fill("#FFF");
    textSize(50);
    text(this.score, width - 30, 50);
  }

  incrementScore() {
    this.score = this.score + 5;
  }
}
