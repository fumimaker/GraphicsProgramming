var color;

function setup(){
    //initialize, called only once.
    createCanvas(600,400);
    background(0,0,0);
    color = 255;
}

function draw(){
    //called 60times per seconds.
    stroke(255, 255, 255);
    fill(color, 128, 255);
    rect(width/2 * 1.5, height/2 * 1.5, 100, 100);
}