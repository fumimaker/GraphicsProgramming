var i=0;
function setup(){
    //initialize, called only once.
    createCanvas(500,500);
    background(0,0,0);
}

function draw(){
    //called 60times per seconds.
    strokeWeight(1);
    stroke(255);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);

    fill(0,0,0,100);
    stroke(255);
    ellipse(250, 250, 300, 300);

    fill(255,255,255);
    rect(0,0,100,100);
    fill(255, 255, 255);
    rect(0, 500, 100, 100);
    fill(255, 255, 255);
    rect(500, 0, 100, 100);
    fill(255, 255, 255);
    rect(500, 500, 100, 100);

    fill(0,255,0,20);
    ellipse(mouseX, mouseY, 100, 100);
}