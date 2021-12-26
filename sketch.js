
var trex ,trex_running,ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1=loadAnimation("ground2.png");
  cloud1=loadAnimation("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(25,150,10,10);
 trex.addAnimation("treximage",trex_running);
 trex.scale=0.5;
 ground=createSprite(10,180,400,20);
 ground.addAnimation("groundimage",ground1);
 invisibleground=createSprite(200,190,400,20);
invisibleground.visible=false;
//var rand=Math.round(random(1,100));
//console.log(rand);
}

function draw(){
  background("green")
  console.log(frameCount);
  ground.velocityX=-2;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyWentDown("space")&& trex.y>=150){
    trex.velocityY=-10;
  }
spawnclouds();
spawnobstacles();
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(invisibleground);
  drawSprites();
}

function spawnclouds(){
  if(frameCount%60==0){
    var cloud=createSprite(600,100,40,10);
    cloud.addAnimation("cloudimage",cloud1);
    cloud.scale=0.5;
    cloud.y=Math.round(random(10,60));
    cloud.velocityX=-2;
    cloud.lifetime=300;
  }
}

function spawnobstacles(){
  if(frameCount%100==0){
  var obstacle=createSprite(600,170,40,40);
  obstacle.velocityX=-2;
  var rand=Math.round(random(1,6));
  switch(rand){
    case 1: obstacle.addImage(obstacle1);
            break;
    case 2: obstacle.addImage(obstacle2);
            break;
    case 3: obstacle.addImage(obstacle3);
            break;
    case 4: obstacle.addImage(obstacle4);
            break;
    case 5: obstacle.addImage(obstacle5);
            break;
    case 6: obstacle.addImage(obstacle6);
            break;
    default: break;
  }
  obstacle.scale=0.5;
  obstacle.lifetime=300;
  }


}