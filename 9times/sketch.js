//参考
// https://infosmith.biz/blog/it/p5js-noise
var size = 5;
var noise_fill = 0;
var noiseVal = 50;

 
function setup(){
    createCanvas(500, 500);
    colorMode(HSB);
    background(255);
    noStroke();
}
 
function draw(){
    for(var y=0; y*size < height; y++) {
        for(var x=0; x*size < width; x++) {
            var fillCol = noise(x/noiseVal, y/noiseVal, noise_fill)*500;
            fill(fillCol, 100, 100, random());// 色相
            rect(x*size, y*size, size, size);
        }
    }
    noise_fill += 0.01;
}
