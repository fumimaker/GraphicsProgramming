//var posX;
//var posY;
var num = 5;
var ball = [];
var jiki_rad = 50;
var attack_particle = [];
var prev_time = 0, delta_t = 0;
var attackRate = 10;

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(500, 900);
  //posX = random(width);
  //posY = random(height);
  for (var i = 0; i < 50; i++) {
    ball[i] = new Particle(i, random(30, 100), random(0, 128),random(100, 1000));
  }
  prev_time = Date.now();
}



function draw() {
  background(255, 190, 240);
  for (var i = 0; i < num; i++) {
    ball[i].update();
    ball[i].draw();
  }
  fill(255, 255, 255, 50);
  circle(mouseX, mouseY, jiki_rad);
  if (Date.now() - prev_time > 1 / attackRate * 1000) {
    attack_particle.push(new Attack_tama());
    prev_time = Date.now();
  }
  for (var i = 0; i < attack_particle.length; i++) {
    attack_particle[i].update();
    attack_particle[i].draw();
  }
  fill(255);
  //text(delta_t, windowWidth/2, windowHeight/2, 50, 50);
}

class Attack_tama {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.speedx = 0;
    this.speedy = -10;
    this.strength = 10;
    this.visible = true;
    this.size = 10;
  }

  update() {
    this.x += this.speedx;
    this.y += this.speedy;
    if (this.y < 0) this.visible = false;
  }

  draw() {
    if (this.visible) {
      fill(255, 255, 255);
      circle(this.x, this.y, this.size);
    }

  }
}

class Particle {
  //member(attribute)属性
  constructor(ball_num, diameter, col, _heart) {
    this.x = random(width);
    this.y = random(height);
    this.size = diameter;
    this.speedx = random(-1, 1);
    this.speedy = random(0, 3);
    this.color = col;
    this.visible = true;
    this.ballnum = ball_num;
    this.isHit = false;
    this.heart = _heart;
  }

  //method(behavior)振る舞い
  update() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;

    if (this.x < 0 + this.size / 2 || this.x > width - this.size / 2) this.speedx = -1.0 * this.speedx;
    if (this.y < 0) this.speedy = -1.0 * this.speedy;
    if (this.y > height + this.size / 2) this.y = 0;
    for (var i = 0; i < attack_particle.length; i++) {
      if (collideCircleCircle(this.x, this.y, this.size, attack_particle[i].x, attack_particle[i].y, attack_particle[i].size)) {
        this.isHit = true;
        this.heart -= attack_particle[i].strength;
      }
      else this.isHit = false;
    }

    if (this.heart < 0) this.visible = false;
    else this.visible = true;

  }

  draw() {
    noStroke();
    if (this.visible) {
      fill(this.color, 200);
      circle(this.x, this.y, this.size);
      fill(255, 255, 255);
      //text(this.ballnum, this.x, this.y, 50, 50);
      var pixsize = 50;
      text(this.heart, this.x - 15, this.y, pixsize, pixsize);
    }
  }
}