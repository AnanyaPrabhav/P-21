var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(170, 300, 150, 10);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 300, thickness, height/2);
  wall.shapeColor = "rgb(80, 80, 80)";

  bullet.velocityX = speed;
}

function draw() {
  background("lightblue");  
  drawSprites();

  //0.5 x bullet_weight x bullet_speed x bullet_thickness/thickness of wall ^ 3
  collision();
}

function collision(){
  if(wall.x - bullet.x < wall.width/2+bullet.width/2){
      var damage = 0.5 * weight * speed * thickness/thickness ^ 3;
      if(damage>=10){
        bullet.shapeColor="red";
      }
      if(damage<=10){
        bullet.shapeColor="green";
      }

      bullet.velocityX=0;
    }
}