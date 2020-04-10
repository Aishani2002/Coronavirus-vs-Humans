const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, virus1,virus2;
var backgroundImg,platform;
var doctor, stethoscope;
var score=0;
var gameState = "onStetho";

function preload() {
    backgroundImg= loadImage("Coronavirus/background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
     box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    
    virus1 = new Virus(810, 350);
    virus2 = new Virus(810, 220);

    log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);

    doctor = new Doctor(200,50);

    stethoscope = new Stethoscope(doctor.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    noStroke()
    textSize(35);
    fill("white");
    text("score ",+score,width-300,50);
    
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    virus1.display();
    virus1.score();
    virus2.display();
    virus2.score();
   
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    
    doctor.display();
    platform.display();
    
    stethoscope.display(); 

    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stethoscope.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    stethoscope.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}