const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myWorld,myEngine,ground,ball;


function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  var groundOption={
    isStatic:true
  }
  //Creating Ground
  ground= Bodies.rectangle(200,380,380,20,groundOption);
  World.add(myWorld,ground);

  var ballOption={
    restitution:1
  }

  ball=Bodies.circle(100,100,20,ballOption)
 World.add(myWorld,ball)
}

function draw() {
  background(0);  
  Engine.update(myEngine);

  //Draw Ground
  fill("brown")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,380,20);

  //Draw ball
  fill('blue')
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  
}