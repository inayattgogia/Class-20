function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 90, 80);
  fixed.shapeColor="Yellow";
fixed.debug=true;

moving=createSprite(600,200,100,160);
moving.shapeColor="lightblue";
moving.debug=true;
}

function draw() {
  background(0); 
  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if (fixed.x-moving.x < fixed.width/2+moving.width/2
&& moving.x-fixed.x < fixed.width/2+moving.width/2
&&fixed.y-moving.y < fixed.height/2+moving.height/2
&& moving.y-fixed.y < fixed.height/2+moving.height/2)
{
moving.shapeColor="red";
fixed.shapeColor="red";
}
else {
  moving.shapeColor="lightblue";
  fixed.shapeColor="yellow";
}


  drawSprites();
}