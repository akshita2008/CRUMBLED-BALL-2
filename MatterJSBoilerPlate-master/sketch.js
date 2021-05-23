
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 const Body = Matter.Body;

var engine,world;
var paper;
var dustbin1;
var dustbin2;
var dustbin;

var ground;
var paperimage;
var dustbinimage;

function preload()
{
//paperimage= loadImage("images/paper.png");
  dustbinimage= loadImage("images/dustbin.png");
}
function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    paper= new Paper(200,350,50);
   //paper.addImage(paperimage);
    ground = new Ground(0,height,2500,50);
    //dustbin1= new Dustbin(1000,400,30,200);
    dustbin= createSprite(1000,400,30,300);
    dustbin.addImage(dustbinimage);
   // dustbin2= new Dustbin(800,400,30,200);
    
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  drawSprites();

// dustbin1.display();
 //dustbin2.display();

 ground.display();
 paper.display();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-250});
  }
}



