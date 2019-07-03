/*
var pos=[];
var speed = [];
var rad = [];
*/
var pos, speed,rad;

var numParticle;
var objectPos;

function setup(){
  numParticle = 20;
  createCanvas(windowWidth, windowHeight);
  
  pos = createVector(random(width), random(height));
  speed = createVector(random(-10, 10), random(-10, 10));
  rad = random(200);
  
  /*
  for(var i=0; i<numParticle; i++){
    pos[i] = createVector(random(width), random(height));
    speed[i] = createVector(random(-10, 10), random(-10, 10));
    rad[i] = random(200);
  }
  */
}

function draw(){
  background(255, 190, 240);
  /*
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
  */
 pos.add(speed);
  for(var k=0; k<numParticlel; k++){
    if (pos[k].x < 0 + rad[k] / 2) {
      pos[k].x = rad[k] / 2;
      speed[k].x *= -1.0;
    }
    if (pos[k].x > width - rad[k] / 2) {
      pos[k].x = width - rad[k] / 2;
      speed[k].x *= -1.0;
    }
    if (pos[k].y < 0 + rad[k] / 2) {
      pos[k].y = rad[k] / 2;
      speed[k].y *= -1.0;
    }
    if (pos[k].y > height - rad[k] / 2) {
      pos[k].y = height - rad[k] / 2;
      speed[k].y *= -1.0;
    }
    fill(255,255,255);
    circle(pos[k].x, pos[k].y, rad[k]);
  }
}