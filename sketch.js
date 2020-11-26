const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var g2;

var divisionHeight=300;



function setup(){

    var canvas = createCanvas(500, 800);

engine = Engine.create();
world = engine.world;

ground = new Ground(width/2,height,width,20);
g2 = new Divisions(width/2,760,1000,20)

for (var k = 0; k <=width; k = k + 80) {
divisions.push(new Divisions(k, height-divisionHeight/1.5, 10, divisionHeight));
}
for (var j = 75; j <=width; j=j+50) {
plinkos.push(new Plinko(j,75));
}
for (var j = 50; j <=width-10; j=j+50) {
plinkos.push(new Plinko(j,175));
}
for (var j = 75; j <=width; j=j+50) {
plinkos.push(new Plinko(j,275));
}
for (var j = 50; j <=width-10; j=j+50) {
plinkos.push(new Plinko(j,375));
}   

}

function draw(){

background(0);
Engine.update(engine);

ground.display();
g2.display();

for (var i = 0; i < plinkos.length; i++) {
plinkos[i].display();  
} 
for (var k = 0; k < divisions.length; k++) 
{
divisions[k].display();
}
for (var j = 0; j < particles.length; j++) {
particles[j].display();  
} 
if(frameCount%60===0){
particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}




}

