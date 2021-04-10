
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(400,50,400,40); 

	bobOb1 = new Bob(325,400,40); 
	bobOb2 = new Bob(400,400,40);
	bobOb3 = new Bob(250,400,40);
	bobOb4 = new Bob(475,400,40);
	bobOb5 = new Bob(550,400,40);

	rope1 = new Rope(bobOb1.body, roof.body,-75,0);
	rope2 = new Rope(bobOb2.body, roof.body,0,0);
	rope3 = new Rope(bobOb3.body, roof.body,-150,0);
	rope4 = new Rope(bobOb4.body, roof.body,75,0);
	rope5 = new Rope(bobOb5.body, roof.body,150,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display(); 

  bobOb1.display(); 
  bobOb2.display(); 
  bobOb3.display(); 
  bobOb4.display(); 
  bobOb5.display(); 
  
  rope1.display(); 
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
if(keyWentDown(UP_ARROW)){
	Matter.Body.setPosition(bobOb3.body, {x: 10, y: 50});


}


}
