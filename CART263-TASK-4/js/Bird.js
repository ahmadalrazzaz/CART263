class Bird {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;

    this.vx = Math.random() * 3 + 1;
    this.angle = 0;

    this.birdBody = document.createElement("img");
  }

  renderBird() {
    this.birdBody.src = "images/bird.png";
    this.birdBody.style.position = "absolute";
    this.birdBody.style.width = this.size + "px";
    this.birdBody.style.height = this.size + "px";
    this.birdBody.style.left = this.x + "px";
    this.birdBody.style.top = this.y + "px";

    const sky = document.querySelector(".sky");
    if (sky) {
      sky.appendChild(this.birdBody);
    }
  }

  animateBird() {
    this.move();
    requestAnimationFrame(this.animateBird.bind(this));
  }

  move() {
    this.x += this.vx;
    this.y += Math.sin(this.angle) * 2;
    this.angle += 0.05;

    if (this.x > window.innerWidth) {
      this.x = -this.size;
    }

    this.birdBody.style.left = this.x + "px";
    this.birdBody.style.top = this.y + "px";
  }
}