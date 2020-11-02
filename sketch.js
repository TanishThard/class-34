const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(3000,550);
    engine = Engine.create();
    world = engine.world;

    bob = new Bob(200,200,80,80);
    rope = new Rope(bob.body,{x:500,y:50});
    box1 = new Box(700,360,50,50);
    box2 = new Box(920,400,50,50);
    box3 = new Box(920,400,50,50);
    box4 = new Box(700,360,50,50);
    box5 = new Box(920,400,50,50);
    box6 = new Box(700,360,50,50);
    box10 = new Box(920,400,50,50);
    box11 = new Box(700,360,50,50);
    box12 = new Box(920,400,50,50);
    box13 = new Box(700,360,50,50);
    box14 = new Box(700,360,50,50);
    box15 = new Box(700,360,50,50);

    box7 = new Box(700,240,50,50);
    box8 = new Box(920,240,50,50);
    box9 = new Box(810,150,50,50);
    ground = new Ground(1500,height,3000,20);
  

}

function draw(){
    background(0);
    Engine.update(engine);
    bob.display();
    rope.display()
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    ground.display();
   }

   function mouseDragged(){
    Matter.Body.setPosition(bob.body, { x: mouseX, y: mouseY });
   }