var ballSpeed = 10;
var ballNum=100;
var speedX=[];
var speedY=[];
var posX=[];
var posY=[];

function setup() {
  createCanvas(600, 600);
  
  for(var i=0; i<ballNum; i++){
    posX[i]=width/2;
    posY[i]=height/2;
    speedX[i]=random(-1*ballSpeed, ballSpeed);
    speedY[i]=random(-1*ballSpeed, ballSpeed);
    
  }
}

function draw() {
  background(0);
  for(var i=0; i<ballNum; i++){
    posX[i]=posX[i]+speedX[i];
    posY[i]=posY[i]+speedY[i];
  
    if(posX[i]<0||posX[i]>width) speedX[i]=-1.0*(speedX[i]-1);
    if(posY[i]<0||posY[i]>height) speedY[i]=-1.0*(speedY[i]-1);
    //noStroke();
    fill(255,255,255);
    //fill(random(0,255),random(0,255),random(0,255));
    circle(posX[i],posY[i],5);
    for(var k=0; k<ballNum; k++){
      var d = dist(posX[i], posY[i], posX[k], posY[k]);
      if(d<100){
        stroke(200,200,200);
        line(posX[i], posY[i], posX[k], posY[k]);
      }
    }
  }
}