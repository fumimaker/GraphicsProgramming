//var posX;
//var posY;
var num = 5;
var ball = [];
var jiki_rad = 50;
var attack_particle = [];
var prev_time = 0, delta_t = 0;
var attackRate = 10;

var isGameFault = 0;

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(500, 900);
  //posX = random(width);
  //posY = random(height);
  for (var i = 0; i < 50; i++) {
    ball[i] = new Particle(i, random(30, 100), random(-50, 128),random(100, 1000));
  }
  prev_time = Date.now();
}



function draw() {

  switch(isGameFault){
    case 0:
      background(255, 190, 240);
      for (var i = 0; i < ball.length; i++) {
        ball[i].update();
        ball[i].draw();
      }
      
      fill(255, 255, 255, 50);
      circle(mouseX, mouseY, jiki_rad);

      if (Date.now() - prev_time > 1 / attackRate * 1000) {

        var tmp = attack_particle.length;
        for (var i = 0; i < tmp; i++) {
          if (attack_particle[i].available == false) {
            attack_particle.splice(i, 1);
            tmp = attack_particle.length;
          }
        }

        attack_particle.push(new Attack_tama());
        prev_time = Date.now();
      }
      for (var i = 0; i < attack_particle.length; i++) {
        attack_particle[i].update();
        attack_particle[i].draw();
      }
      break;

    case 1: //gameover
      background(255,255,255,10);
      fill(0);
      let fontsize = 40;
      textSize(fontsize);
      textAlign(CENTER, CENTER);
      text("Gameover!", windowWidth/2-50, windowHeight/2);
      break;
  }
}

class Attack_tama {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.speedx = 0;
    this.speedy = -10;
    this.strength = 10;
    this.size = 10;
    this.available = true;
  }

  update() {
    this.x += this.speedx;
    this.y += this.speedy;
    if (this.y < 0) this.available = false;
  }

  draw() {
    if (this.available) {
      fill(255, 255, 255);
      circle(this.x, this.y, this.size);
    }
  }
}

class Particle {
  //member(attribute)属性
  constructor(ball_num, diameter, col, _heart) {
    this.x = random(width);
    this.y = random(-200,-100);
    this.size = diameter;
    this.speedx = random(-1, 1);
    this.speedy = random(1, 3);
    this.color = col;
    this.ballnum = ball_num;
    this.isHit = false;
    this.heart = _heart;
    this.available = true;
    this.through = true;
  }

  //method(behavior)振る舞い
  update() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;

    if(this.y>0) this.through = false;

    if (this.x < 0 + this.size / 2 || this.x > width - this.size / 2) this.speedx = -1.0 * this.speedx;
    if (this.y < 0 && !this.through) this.speedy = -1.0 * this.speedy;
    if (this.y > height + this.size / 2) this.y = 0;
    for (var i = 0; i < attack_particle.length; i++) {
      if (collideCircleCircle(this.x, this.y, this.size, attack_particle[i].x, attack_particle[i].y, attack_particle[i].size)) {
        this.isHit = true;
        this.heart -= attack_particle[i].strength;
      }
    }
    if (this.heart < 0) this.available = false;
    if (collideCircleCircle(this.x, this.y, this.size, mouseX, mouseY, jiki_rad) && this.available){
      isGameFault = 1;
    }
  }

  draw() {
    noStroke();
    if (this.available) {
      fill(this.color, 200);
      circle(this.x, this.y, this.size);
      fill(255, 255, 255);
      //text(this.ballnum, this.x, this.y, 50, 50);
      var pixsize = 50;
      text(this.heart, this.x - 15, this.y, pixsize, pixsize);
    }
  }
}