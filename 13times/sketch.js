//var posX;
//var posY;
var num = 5;
var attack_num = 10;
var ball = [];
var jiki_rad = 50;
var attack_particle = [];

function setup(){
  //createCanvas(windowWidth, windowHeight);
  createCanvas(500, 900);
  //posX = random(width);
  //posY = random(height);
  for (var i = 0; i < 50; i++) {
    ball[i] = new Particle(i,random(30,100), random(0, 128));
  }
}

function draw(){
  background(255, 190, 240);
  for (var i = 0; i < num; i++) {
    ball[i].update();
    ball[i].draw();
  }

  for(var i=0; i<num; i++){
    if(ball[i].isHit){
      fill(255, 0, 0, 50);
      circle(mouseX, mouseY, jiki_rad);
    }
    else{
      fill(255, 255, 255, 50);
      circle(mouseX, mouseY, jiki_rad);
    }
  }
  
  if(millis()%100==0){
    attack_particle.push(new Attack_tama());
    println(millis());
  }

  for(var i=0; i<attack_particle.length; i++){
    attack_particle[i].update();
    attack_particle[i].draw();
  }

}

class Attack_tama{
  constructor(){
    this.x = mouseX;
    this.y = mouseY;
    this.speedx = 0;
    this.speedy = 5;
    this.strength = 10;
    this.visible = true;
  }

  update(){
    this.x += this.speedx;
    this.y += this.speedy;
    if(this.y<0) this.visible = false;
  }

  draw(){
    fill(255, 255, 255);
    circle(this.x, this.y, 10);
  }
}

class Particle{
  //member(attribute)属性
  constructor(ball_num, diameter, col){
    this.x = random(width);
    this.y = random(height);
    this.size = diameter;
    this.speedx = random(-1,1);
    this.speedy = random(0,3);
    this.color = col;
    this.visible = true;
    this.ballnum = ball_num;
    this.isHit = false;
    this.heart = 100;
  }
  
  //method(behavior)振る舞い
  update(){
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
    
    if(this.x<0 || this.x>width) this.speedx = -1.0 * this.speedx;
    if(this.y<0) this.speedy = -1.0 * this.speedy;
    if(this.y>height + this.size/2) this.y = 0; 
    
    if(collideCircleCircle(this.x, this.y, this.size, mouseX, mouseY, jiki_rad)){
      this.isHit = true;
    }
    else this.isHit = false;

    if(this.isHit) this.heart -= 10; 

    if(this.heart<0) this.visible = false;
    else this.visible = true;

  }
  
  draw(){
    noStroke();
    if(this.visible){
      fill(this.color, 200);
      circle(this.x, this.y, this.size);
      fill(255,255,255);
      text(this.ballnum, this.x, this.y, 50, 50);
    }
  }
}