//var posX;
//var posY;
var pos=[],speed=[],rad=[];
var invisible_rad=500;
var num=5;

function collideUpdate(){
  for (var i = 0; i < num; i++) {
    for (var k = i + 1; k < num; k++) {
      var hit;
      hit = collideCircleCircle(pos[i].x, pos[i].y, rad[i], pos[k].x, pos[k].y, rad[k]);
      if (hit) {
        var rebound = p5.Vector.sub(pos[i], objectPos);
        rebound.normalize();
        rebound.mult(speed[i].mag());
        speed[i] = rebound;
      }
    }
    pos[i].add(speed[i]);

    stroke(10);
    fill(255, 255, 255, 50);

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
  fill(255, 255, 255, 50);
  circle(objectPos.x, objectPos.y, rad);
}

function mouseUpdate(){
  ellipse(mouseX, mouseY, 100,100);
}

function setup(){
  //createCanvas(windowWidth, windowHeight);
  createCanvas(500, 900);
  //posX = random(width);
  //posY = random(height);
  for(var i=0; i<num; i++){
    pos[i] = createVector(random(width), -height);
    speed[i] = createVector(random(-1, 1), random(0, 5));
    rad[i] = random(50,60);
  }
  
  objectPos = createVector(width/2, height/2);
}

function draw(){
  background(255, 190, 240);
  collideUpdate();
  mouseUpdate();
}