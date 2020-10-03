var f1,f2,f3;
var car1,car2,car3,car4; 
var wall,speed,weight,deformation;

function setup() {

  speed=random(-55,-90)
  weight=random(400,1500)

  createCanvas(800,400);
  f1=createSprite(400, 100, 800, 20);
  f2=createSprite(400, 200, 800, 20);
  f3=createSprite(400, 300, 800, 20);

  car1=createSprite(700, 50, 20, 20);
  car2=createSprite(700, 150, 20, 20);
  car3=createSprite(700, 250, 20, 20);
  car4=createSprite(700, 350, 20, 20);

  wall=createSprite(30, 50, 10,50)
  wall=createSprite(30, 150, 10,50)
  wall=createSprite(30, 250, 10,50)
  wall=createSprite(30, 350, 10,50)

  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;

}

function draw() {
  background(10,0,12); 

  if(car1.x-wall.x < wall.width/2+car1.width/2) {
    car1.velocityX=0
   var deformation =(0.5*weight*speed*speed)/22509
    if (deformation>180) {
      car1.shapeColor=('red')
    }

    if (deformation<180 && deformation>100) {
      car1.shapeColor=('yellow')
    }

    if (deformation<100) {
      car1.shapeColor=('green')
    }

  }
  drawSprites();
   }