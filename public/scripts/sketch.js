let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(width),
      y: random(-height, 0),
      size: random(80, 160),
      speed: random(0.5, 1.5),
      offset: random(1000),
    });
  }
}

function draw() {
  background(240, 240, 255, 50);

  for (let c of circles) {
    c.y += c.speed;
    c.x += map(noise(frameCount * 0.01 + c.offset), 0, 1, -1, 1);

    fill(120, 160, 255, 50);
    ellipse(c.x, c.y, c.size);

    if (c.y - c.size / 2 > height) {
      c.y = -c.size / 2;
      c.x = random(width);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
