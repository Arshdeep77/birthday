
function Particle(x,y,firework){
	this.firework=firework;
	this.life=255;
this.pos=createVector(x,y);
if(firework){
this.vel=createVector(0,random(-15,-30));
}else{
this.vel=p5.Vector.random2D();
this.vel.mult(random(1,8));

}
	this.acc=createVector(0,0);
this.applyForce=function (force){
	this.acc.add(force);
}
this.done=function(){
	if(this.life==0){
		return true;
	}
	return false;
}
this.update=function (){
if(!this.firework){
	this.life--;

}
	this.vel.add(this.acc);
	this.pos.add(this.vel);
	this.acc.mult(0);
}
this.show=function(){
if(this.firework){
	stroke(255);
	strokeWeight(8);
}else{
	var r=random(1,255);
	var g=random(1,255);
	var b=random(1,255);

	stroke(r,g,b);
	strokeWeight(4);
}
if(this.life<=0){
	stroke(0);
}
	point(this.pos.x,this.pos.y);
  // ellipse(this.pos.x,this.pos.y,20);
// rect(this.pos.x,this.pos.y,20,20);
}



}
