const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;


var engine,world;
//var backgroundImg;

function preload() {
//preload the images here
//backgroundImg = loadImage("sprites/bag.png");
}

function setup() {
  createCanvas("1200, 800");
engine= Engine.create()
world=engine.world;
man1= new Man(200,200)
chain1= new Chain(man1.body,{x:300,y:50})
  
box1= new Box(900,100)
box2= new Box(900,100)
box3= new Box(900,100)
box4= new Box(900,100)
box5= new Box(900,100)
box6= new Box(900,100)
box7= new Box(900,100)
box8= new Box(900,100)
box9= new Box(900,100)
box10=new Box(800,100)



}

function draw() {
  background("red");  
  Engine.update(engine);
 
  chain1.display()
  man1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
}




function mouseDragged(){
  Matter.Body.setPosition(man1.body,{x:mouseX,y:mouseY})
}