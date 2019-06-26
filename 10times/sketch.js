var p1, p2, p3;
var ball = [];
var click = [];
var click_times=0;

function setup() {
  createCanvas(500, 500);
  
  for(var i=0; i<50; i++){
    ball[i] = new Particle(random(100),random(0,128));
  }
}

function draw() {
  background(249, 232, 192, 32);
  for(var i=0; i<50; i++){
    ball[i].update();
    ball[i].draw();
  }
}



//particle

class Particle{
  //member(attribute)属性
  constructor(diameter,col){
    this.x = random(width);
    this.y = random(height);
    this.size = diameter;
    this.speedx = random(-3,3);
    this.speedy = random(-3,3);
    this.color = col;
  }
  
  //method(behavior)振る舞い
  update(){
    
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
    
    if(this.x<0 || this.x>width) this.speedx = -1.0 * this.speedx;
    if(this.y<0 || this.y>height) this.speedy = -1.0 * this.speedy;
  }
  
  draw(){
    noStroke();
    fill(this.color,200);
    circle(this.x, this.y, this.size);
  }
}