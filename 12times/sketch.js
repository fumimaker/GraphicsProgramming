//var posX;
//var posY;
var pos=[],speed=[],rad=[];
var invisible_rad=500;
var num=500;
function setup(){
  createCanvas(windowWidth, windowHeight);
  //posX = random(width);
  //posY = random(height);
  for(var i=0; i<num; i++){
    pos[i] = createVector(random(width), random(height));
    speed[i] = createVector(random(-50, 50), random(-50, 50));
    rad[i] = random(50,60);
  }

  objectPos = createVector(width/2, height/2);
}

function draw(){
  background(255, 190, 240);
  
  for(var i=0; i<num; i++){
    var hit;
    pos[i].add(speed[i]);
    hit = collideCircleCircle(pos[i].x, pos[i].y, rad[i], objectPos.x, objectPos.y, invisible_rad);
    if (hit) {
      var rebound = p5.Vector.sub(pos[i], objectPos);
      rebound.normalize();
      rebound.mult(speed[i].mag());
      speed[i] = rebound;
    }
    noStroke();
    fill(255,255,255,50);
    circle(pos[i].x, pos[i].y, rad[i]);
    if (pos[i].x < 0 + rad[i] / 2) {
      pos[i].x = rad[i] / 2;
      speed[i].x *= -1.0;
    }
    else if (pos[i].x > width - rad[i] / 2) {
      pos[i].x = width - rad[i] / 2;
      speed[i].x *= -1.0;
    }
    else if (pos[i].y < 0 + rad[i] / 2) {
      pos[i].y = rad[i] / 2;
      speed[i].y *= -1.0;
    }
    else if (pos[i].y > height - rad[i] / 2) {
      pos[i].y = height - rad[i] / 2;
      speed[i].y *= -1.0;
    }
  }
  //circle(objectPos.x, objectPos.y, rad);
}