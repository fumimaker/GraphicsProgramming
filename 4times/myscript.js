function setup(){
    createCanvas(400,400);
    background(200);
}

function draw(){
    for(var j=0; j<10; j++){
        for(var i=0; i<10; i++){
            noStroke();
            fill(i*25,i*25-j*25,j*25);
            rect(0,0,39,39);
            translate(0, 40, 0);
        }
        translate(40,-400,0);
    }
}