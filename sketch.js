function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background("#000000");

  frameRate(120);
}

function draw() {
  fill("black");

  let myColor = lerpColor(color("#ffffff"), color("#00ff00"), frameCount / 800);
  stroke(myColor);

  strokeWeight(frameCount % 2);
  translate(width / 2, height / 2);
  rotate(frameCount * 23);
  smooth();
  line(0, 0, 0, frameCount / 4);
  circle(0, frameCount / 2, 25);

  colorMode(HSB, 50);
  c = color(0, 0, 0);

  loop();
}
