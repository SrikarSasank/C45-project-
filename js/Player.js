 class Player {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.player = loadImage("assets/player.png");
   //   this.shooter = loadImage("assets/shooter.png");
    }
    display() {
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.player, 0, 0, this.width, this.height);
      pop();
     
    }
  }