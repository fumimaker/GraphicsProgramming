var time = 0;
function setup(){
    createCanvas(1000,1000);
    background(255);
}

function draw(){
    
    for(var j=0; j<10; j++){
        for(var i=0; i<10; i++){
            
            noStroke();
            fill(i * 25, i * 25 - j * 25, j * 25);
            ellipse(i + 10, j + 10, 20, 20);

            translate(j, 40, j);
        }
        translate(40,-400,0);
    }

}