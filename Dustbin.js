class Dustbin {
  constructor(x, y,width,height) {
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   // Matter.Body.setAngle(this.body,angle);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
