var gravity;

function Patake(){
  
  this.gravity=new createVector(0,0.3);

  this.fireWork=new Particle(random(0,width),height,true);
  this.exploded=false;
  this.particles=[]
  this.done=function(){
    if(this.exploded && this.particles){
      return false;
    }
    return false;
  }

this.update=function(){

if(this.fireWork){
  this.fireWork.applyForce(this.gravity);
  this.fireWork.update();
  if(this.fireWork.vel.y>=0){
      this.explode();
      this.show();

    this.fireWork=null;

    this.exploded=true;


  }

}

//
for(var i=this.particles.length-1;i>=0;i--){
this.particles[i].applyForce(this.gravity);
this.particles[i].update();
if(this.particles[i].done()){
  this.particles.splice(i,1);
}
}

}
this.explode=function(){
  for(var i=0;i<50;i++){
    var p=new Particle(this.fireWork.pos.x,this.fireWork.pos.y);
  this.particles.push(p);
  }
}
this.show=function(){

  if(this.fireWork && !this.exploded){
this.fireWork.show();}
for(var i=0;i<this.particles.length;i++){


  this.particles[i].show();
}

}


}
