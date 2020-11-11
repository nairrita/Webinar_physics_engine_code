const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world,backdrop;

function preload(){
backdrop = loadImage("bg.jpeg")
}

function setup(){
  createCanvas(400,400)
  engine = Engine.create()
  world= engine.world
  ball1 = new Ball(100,200,20)
  ball2 = new Ball(200,150,20)
  ground = new Ground(200,390,400,20)
  connect = new Connect(ball1.body,ball2.body)
  bob = new Bob(300,200,40,40)
  chain = new Chain(bob.body,{x:280,y:10})
}

function draw(){
  background(backdrop)
  Engine.update(engine)

  ground.display()
  
  
  ball1.display()
  
  ball2.display()
  connect.display()
 bob.display()
 chain.display()
}