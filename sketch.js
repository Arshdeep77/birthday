

var patakeArr=[];

function setup(){
  createCanvas(displayWidth,displayHeight);


  stroke(255);
  strokeWeight(4);


}
function draw(){
if(random(1)<=0.05){
patakeArr.push(new Patake());
}



  background(0,25);
  textSize(50);
  fill(255);



  text("ਜਨਮ ਦਿਨ ਮੁਬਾਰਕ \n       dosto",width/2,height/2-100);

for(var i=patakeArr.length-1;i>=0;i--){
	patakeArr[i].update();
patakeArr[i].show();
if(patakeArr[i].done()){
  patakeArr.splice(i,1);
}

}

}
