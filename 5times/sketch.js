var vx=7, vy=-5;
var left_right_dir=1;
var up_down_dir = 1;
var posx = 10, posy = 200;
var counter = 0, coutner2=1;
function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(0);
  circle(posx,posy,10);
  
  posx = posx+vx;
  posy = posy+vy;
  
  if(posx>=width-10){
    
    vx = -vx;
    vx = vx+0.5;
    
  }
  else if(posx<=10){
    vx = -vx;
    vx = vx-0.5;
    
  }
  else{
    
  }
  
  if(posy>=height-10){
    vy = -vy;
  }
  else if(posy<=10){
    vy = -vy;
  }
  else{
    vy = vy + 1*counter*0.02;
  }
  print(vx, vy);
  counter++;
}