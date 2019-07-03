var pos=[];
var speed = [];
var rad = [];
var numParticle;
var objectPos;

function setup(){
  numParticle = 20;
  createCanvas(windowWidth, windowHeight);
  for(var i=0; i<numParticle; i++){
    pos[i] = createVector(random(width), random(height));
    speed[i] = createVector(random(-10, 10), random(-10, 10));
    rad[i] = random(200);
  }
}

function draw(){
  for(var i=0; i<numParticle; i++){
    pos[i].add(speed[i]);
    for(var j=0; j<numParticle; j++){
      var hit;
      if(i != j){
        hit = collideCircleCircle(pos[i].x, pos[i].y, rad[i], pos[j].x, pos[j].y, rad[j]);
        if(hit){
          var rebound = p5.Vector.sub(pos[i], pos[j]);
          rebound.normalize();
          rebound.mult(speed[i].mag());
          speed[i] = rebound;
        }
      }
    }
  }
  background(255, 190, 240);
  for(var i=0; i<numParticlel; i++){
    if (pos[i].x < 0 + rad[i] / 2) {
      pos[i].x = rad[i] / 2;
      speed[i].x *= -1.0;
    }
    if (pos[i].x > width - rad[i] / 2) {
      pos[i].x = width - rad[i] / 2;
      speed[i].x *= -1.0;
    }
    if (pos[i].y < 0 + rad[i] / 2) {
      pos[i].y = rad[i] / 2;
      speed[i].y *= -1.0;
    }
    if (pos[i].y > height - rad[i] / 2) {
      pos[i].y = height - rad[i] / 2;
      speed[i].y *= -1.0;
    }
    circle(pos[i].x, pos[i].y, rad[i]);
  }
}