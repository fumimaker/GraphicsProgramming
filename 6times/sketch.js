var yoko = [];
var tate = [];
var toge = [];
var size = [];
function setup() {
  createCanvas(800, 800);
  for(var i=0; i<1000; i++){
    //yoko[i]=random(width);
    //tate[i]=random(height);
    yoko[i]=random(200,600);
    tate[i]=random(200,600);
    toge[i]=random(3,6);
    size[i]=random(1,5);
  }
}

function draw() {
  
  background(0);
  for(var i=0; i<1000; i++){
    //noFill();
    strokeWeight(1);
    stroke(255, 212, 0);
    drawStar(yoko[i], tate[i], size[i]+random(0,3), toge[i]);
  }
}

function drawStar(x, y, r, prickleNum) {
  var vertexNum = prickleNum*2;  // 頂点数(トゲの数*2)
  var R;  // 中心点から頂点までの距離
  var outR = r;  // 中心点からトゲまでの距離
  var inR = outR/2;  // 中心点から谷までの距離

  //pushMatrix();
  translate(x, y);
  rotate(radians(-90));
  beginShape();
  for (var i = 0; i < vertexNum; i++) {
    if (i%2 == 0) {
      R = outR;
    } else {
      R = inR;
    }
    vertex(R*cos(radians(360*i/vertexNum)), R*sin(radians(360*i/vertexNum)));
  }
  endShape(CLOSE);
  //popMatrix();
}