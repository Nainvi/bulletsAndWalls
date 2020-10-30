var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);
  thickness = random(22,83)
  weight=random(30,52);
  bullet = createSprite(50,200,100,50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor(80,80,80);

}

function draw() {           
  background(255,255,255);  

  if(bullet.x-wall.x < wall.width/2+bullet.width/2 &&
    wall.x-bullet.x < wall.width/2+bullet.width/2 &&
    bullet.y-wall.y < wall.width/2+bullet.width/2 &&
    wall.y-bullet.y < wall.width/2+bullet.width/2)
  drawSprites();
}