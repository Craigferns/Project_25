const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

// 	//Create the Bodies Here.

	 paper = new Paper(300, 400, 20);
	 dustbin = new Dustbin(1200, 650);
	 ground = new Ground(width/2, 670, 1600, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}

