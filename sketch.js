//creating variables
var hr, mn, sc;
var bg;
var clock, clockImg;

function preload(){
  //loading images
  bg = loadImage("officeWall.jpg");
  clockImg = loadImage("clock.png");
}

function setup() {
  createCanvas(800,400);

  //creating clock
  clock = createSprite(500, 100);
  clock.addImage(clockImg);
  clock.scale = 0.5;

  angleMode(DEGREES);
  
}

function draw() {
  background(bg); 
  
  clock.display();

  hr = hour();
  mn = minute();
  sc = second();

  translate(500, 100);
  rotate(-90);

  //creating the hands of the clock to be synced to computer time
  //creating arcs that are synced to the hands of clock
  scAngle = map(sc, 0, 60, 0, 360);
  stroke("#FF00FF");
  strokeWeight(3);
  fill(255, 255, 255, 60)
  arc(0, 0, 145, 145, 0, scAngle);
  push();
  rotate(scAngle);
  stroke("#FF00FF");
  strokeWeight(2);
  line(0, 0, 60, 0)
  pop();

  mnAngle = map(mn, 0, 60, 0, 360);
  stroke("#b57edc");
  strokeWeight(3);
  fill(255, 255, 255, 1)
  arc(0, 0, 160, 160, 0, mnAngle);
  push();
  rotate(mnAngle);
  stroke("#b57edc");
  strokeWeight(4);
  line(0, 0, 55, 0);
  pop();

  hrAngle = map(hr % 12, 0, 12, 0, 360);
  stroke("#7df9ff");
  strokeWeight(3);
  fill(255, 255, 255, 1)
  arc(0, 0, 175, 175, 0, hrAngle);
  push();
  rotate(hrAngle);
  stroke("#7df9ff");
  strokeWeight(5);
  line(0, 0, 40, 0);
  pop();


  drawSprites();
}