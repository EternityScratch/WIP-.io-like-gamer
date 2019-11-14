let x = 200;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(40, 79, 20);
  // player
  //hands
  ellipse(x - 15, y, 10, 10);
  ellipse(x + 15, y, 10, 10);
  // body
  fill(60, 30, 20);
  stroke(1);
  strokeWeight(2);
  ellipse(x, y, 30, 30);

  //movments
    if (keyIsPressed && key === 'w') {
      y = y - 2;
  }
   if (keyIsPressed && key === 's') {
     y  = y + 2;
   }
   if (keyIsPressed && key === 'd') {
     x = x + 2;
   }
     if (keyIsPressed && key === 'a') {
     x = x - 2;
   }
}
