//var posX;
//var posY;
var pos;

function setup(){
  createCanvas(windowWidth, windowHeight);
  //posX = random(width);
  //posY = random(height);
  pos = createVector(random(width),random(height));
  speed = createVector(random(-10,10), random(-10,10));
  rad = 100;
}

function draw(){
  pos.add(speed);

  var hit;
  hit = colliderCircleCircle(pos.x, pos.y, rad, objectPos.x, objectPos.y, rad);

  background(255,190,240);
  circle(pos.x, pos.y, rad);

  if(pos.x < 0 + rad/2){
    pos.x = rad/2;
    speed.x *= -1.0;
  }
  else if(pos.x > width - rad/2){
    pos.x = width - rad/2;
    speed.x *= -1.0;
  }
  else if(pos.y<0 + rad/2){
    pos.y = rad/2;
    speed.y *= -1.0;
  }
  else if(pos.y > height - rad/2){
    pos.y = height - rad/2;
    speed.y *= -1.0;
  }
}