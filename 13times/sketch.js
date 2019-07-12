var winX = 500;
var winY = 900;
var ball = [];
var jiki_rad = 50;
var attack_particle = [];
var prev_time = 0, delta_t = 0;
var attackRate = 10;

var destroied = 0;

var isGameFault = 0;
var pgl = [];

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(500, 900);
  //posX = random(width);
  //posY = random(height);
  for (var i = 0; i < 50; i++) {
    ball[i] = new Particle( random(30, 100), random(-50, 128),random(100, 1000));
  }
  prev_time = Date.now();
}



function draw() {
  switch(isGameFault){
    case 0:

      if (Date.now() - prev_time > 1 / attackRate * 1000) {
        var tmp = attack_particle.length;
        for (var i = 0; i < tmp; i++) {
          if (attack_particle[i].available == false) {
            attack_particle.splice(i, 1);
            tmp = attack_particle.length;
          }
        }

        tmp = ball.length;
        for(var i=0; i<tmp; i++){
          if(ball[i].available == false){
            ball.splice(i,1);
            tmp = ball.length;
          }
        }
        attack_particle.push(new Attack_tama());
        prev_time = Date.now();
      }

      background(255, 190, 240);
      for (var i = 0; i < ball.length; i++) {
        ball[i].update();
        ball[i].draw();
        
      }

      fill(255, 255, 255, 50);
      circle(mouseX, mouseY, jiki_rad);
      for (var i = 0; i < attack_particle.length; i++) {
        attack_particle[i].update();
        attack_particle[i].draw();
        
      }


      for (var i = pgl.length - 1; i >= 0; i--) {
        var pg = pgl[i];
        if (pg.dead) {
          pgl.splice(i, 1);
        } else {
          pg.draw();
        }
      }
      break;

    case 1: //gameover
      background(255,255,255,10);
      
      let fontsize = 40;
      textSize(fontsize);
      //textAlign(CENTER, CENTER);
      fill(0);
      text("Gameover!", winX / 2 - 100, winY / 2);
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
    for(var i=0; i<ball.length; i++){
      if (collideCircleCircle(this.x, this.y, this.size, ball[i].x, ball[i].y, ball[i].size) && this.available) {
        this.available = false;
      }
    }
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
  constructor(diameter, col, _heart) {
    this.x = random(width);
    this.y = random(-200,-100);
    this.size = diameter;
    this.speedx = random(-1, 1);
    this.speedy = random(1, 3);
    this.color = col;
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
      else{
        this.isHit = false;
      }
    }

    if (this.heart < 0){
      this.available = false;
      pgl.push(new PG(this.x, this.y, 50, 3));
    }
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
      var pixsize = 50;
      text(this.heart, this.x - 15, this.y, pixsize, pixsize);
    }
  }
}

function P(x, y, r, th, sp) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.th = th; //0 - TWO_PI
  this.sp = sp;
  this.dead = false;

  this.update = function () {
    if (this.dead) return;
    this.x += sp * cos(th);
    this.y += sp * sin(th);
    //console.log(this.x);
    this.sp *= 0.99; //0.99を変えると減速速度が速くなる
    if (this.x < 0 || this.x > windowWidth) this.dead = true;
    if (this.y < 0 || this.y > windowHeight) this.dead = true;
    if (this.sp < 0.1) this.dead = true;
  }

  this.draw = function () {
    noStroke();
    fill(255, this.sp * 255 * random(0, 1)); //randomは明滅するため
    //      ellipse(x, y, r, r);
    rect(this.x, this.y, this.r, this.r);
  }
}

function PG(x, y, num, r) {
  this.pl = [];
  this.num = num;
  this.r = r;
  this.dead = false;

  for (var i = 0; i < this.num; i++) {
    var xx = x + random(-r, r);
    var yy = y + random(-r, r);
    this.pl.push(new P(xx, yy, this.r, atan2(yy - y, xx - x), random(0.3, 3))); //3は初速の上限
  }

  this.draw = function () {
    for (var i = this.pl.length - 1; i >= 0; i--) {
      var p = this.pl[i];
      p.update();
      if (p.dead) {
        this.pl.splice(i, 1);
        if (this.pl.length == 0) dead = true;
      } else {
        p.draw();
      }
    }
  }
}
function mousePressed() {
  pgl.push(new PG(mouseX, mouseY, 10, 5));
}