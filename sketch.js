var rect1 , rect2;

function setup() {
  createCanvas(800,400);
  rect1=createSprite(200,200,50,20);
  rect2=createSprite(400,400,40,50);

}

function draw() {
  background(255,255,255);  
  drawSprites();
 rect1.x=mouseX
 rect1.y=mouseY

 if (rect1.x-rect2.x<rect1.width/2+rect2.width/2&&
    rect2.x-rect1.x<rect1.width/2+rect2.width/2&&
    rect1.y-rect2.y<rect2.height/2+rect1.height/2&&
   rect2.y-rect1.y<rect2.height/2+rect1.height/2 ) {
   rect2.shapeColor="red"
   rect1.shapeColor="red"
 }
    else{
      rect2.shapeColor="green"
      rect1.shapeColor="green"
    }
  
}