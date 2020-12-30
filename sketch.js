var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500,200,60,height/2)
  car = createSprite(50, 200, 50, 50);
  wall.shapeColor = (80,80,80)
  deform = 0

  speed = random(55,90)
  weight = random(400,1500)
}

function draw() {
  background(255,255,255);
  
  car.velocityX = speed

  if(car.isTouching(wall)){
    deform = (0.5 * weight * speed*speed)/22500
    car.velocityX = 0
  }

  if (deform === 0){
    car.shapeColor = "black"
  }

  if(deform>0 && deform < 100){
    car.shapeColor = "green"
  }
  else if(deform> 99 && deform < 180){
    car.shapeColor = "yellow"
  }
  else{
    car.shapeColor = "red"
  }

  drawSprites();
}