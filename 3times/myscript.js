var i = 0;
var col;
var prev = 0;
function setup() {
    //initialize, called only once.
    createCanvas(600, 400);
    background(0, 0, 0);
    col = random(0, 600);
}

function draw() {
    //called 60times per seconds.
    //background(0, 0, 0);
    star(col + i, i, 255, 255, 0, 20);
    
    /*
    strokeWeight(5);
    stroke(255, 255, 255, 20);
    line(random(width), 100, random(width), 300);
    */
    i=i+2;
    if (i > height) {
        i = 0;
        col = random(0, 600);
        prev=0;
    }
    if(i-prev>40){
        star(col + prev, prev, 0 ,0, 0, 100);
        prev++;
    }
}

function star(x, y, r, g, b, a){
    strokeWeight(1);
    stroke(255, 255, 255, 100);
    fill(r, g, b, a);
    beginShape();
    vertex(x,      y - 20);
    vertex(x - 12, y + 15);
    vertex(x + 18, y - 8);
    vertex(x - 18, y - 8);
    vertex(x + 12, y + 15);
    endShape(CLOSE);
    
}