var city
var city1
var invisibleGround

function preload(){
city=loadImage("city picture.png");
ground_image=loadImage("ground.png")

}

function setup() {
 createCanvas(windowWidth, windowHeight)

 
 invisibleGround = createSprite(width/2,height+25,width,1);  
 invisibleGround.addImage(ground_image)
 invisibleGround.x = width/2
 invisibleGround.velocityX=-3


}

function draw() 
{
 background(city);
 if (invisibleGround.x < 0){
    invisibleGround.x = invisibleGround.width/2;
  }


drawSprites();
}




