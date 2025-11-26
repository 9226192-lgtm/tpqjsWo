let blink = 0;
let blinkSpeed = 0.05;
let hairOffset = 0;
let bgColors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#B983FF'];
let bgIndex = 0;
let recording = false;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(bgColors[bgIndex]);
  hairOffset = sin(frameCount * 0.05) * 6;
  noStroke();

  fill(0);
  rectMode(CENTER);
  rect(300 + hairOffset, 230, 120, 260, 40);

  fill('#FFE0BD');
  ellipse(300, 180, 90, 110);
  fill('#FFE0BD');
  ellipse(255, 180, 20, 28);
  ellipse(345, 180, 20, 28);
  fill('#FFE0BD');
  rect(300, 240, 24, 40, 6);

  fill('#689ACD');
  quad(255, 255, 345, 255, 380, 400, 220, 400);

  fill(0);
  arc(300, 155, 120, 70, PI, TWO_PI);

  blink += blinkSpeed;
  let blinkValue = abs(sin(blink));
  let eyeHeight = map(blinkValue, 0, 1, 2, 26);

  noStroke();
  fill(255);
  ellipse(280, 175, 26, eyeHeight);
  ellipse(320, 175, 26, eyeHeight);

  fill(0);
  ellipse(280, 175, 8, eyeHeight / 3);
  ellipse(320, 175, 8, eyeHeight / 3);

  noFill();
  stroke(80); strokeWeight(1);
  arc(280, 170, 30, 10, PI, TWO_PI);
  arc(320, 170, 30, 10, PI, TWO_PI);

  stroke(0); strokeWeight(1.8);
  line(272, 163, 275, 167);
  line(280, 161, 280, 167);
  line(288, 163, 285, 167);
  line(312, 163, 315, 167);
  line(320, 161, 320, 167);
  line(328, 163, 325, 167);

  stroke(0); strokeWeight(1.5);
  line(300, 182, 300, 195); noStroke();

  noFill(); stroke('#C94C4C'); strokeWeight(2);
  arc(300, 205, 36, 20, 0, PI);

  fill('#2F2F3D'); stroke(0); strokeWeight(1.5);
  ellipse(275, 140, 40, 22); ellipse(325, 140, 40, 22); line(295, 140, 305, 140);
}

function mousePressed() {
  bgIndex = (bgIndex + 1) % bgColors.length;
}

function keyPressed() {
  if (key === 's' ) {
    saveGif('과제 3', 10);
  }
}
