var car , wall ,w ;
var carW , carG ,carY , carR ;
var speed , weight ;

function preload (){
  carW = loadImage("carw.png");
  carG = loadImage("carg.png");
  carR = loadImage("carr.png");
  carY = loadImage("cary.png");
  w = loadImage("stop.jpg")
}

function setup() {
  createCanvas(1400,400);

  weight = random(400,1500);
  speed = random(55,90);

  car = createSprite(20,200,50,50);
  car.shapeColor = "white" ;
  car.addImage("car",carW)
  car.scale = 0.15
  //car.debug = true ;
  car.setCollider("rectangle", 0, 0, 20, 80, -45);
  car.velocityX = speed ;
 

  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = "blue";
  wall.addImage("wall",w);
  wall.scale = 0.9
  


}

function draw() {
  background("black");  

  car.addImage("car",carW)

  if(wall.x-car.x < (car.width+wall.width)/2){
    
    car.velocityX = 0 ;
    var deformation =0.5*weight*speed*speed/22500 ;


    if (deformation > 180){
      car.shapeColor = color(255,0,0)
      car.addImage("car",carR)
     }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0)
      car.addImage("car",carY)
     }

    if(deformation < 100){
      car.shapeColor = color(0,255,0)
      car.addImage("car",carG)
     }
   }

  drawSprites();
}