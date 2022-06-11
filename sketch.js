//creating global variables
var trex;
var trexrunning;

function preload(){ 
  //to load images for animation
  trexrunning= loadAnimation("trex1.png","trex3.png","trex4.png");

}
//creation part
function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex= createSprite(50,160,20,50)
  //adding animation
 trex.addAnimation("abc",trexrunning);
  //resizing
  trex.scale=0.5;
 //creating edgesprites and storing it in a variable called edges
 edges= createEdgeSprites();
}

function draw(){
  background("pink");
 // if space is pressed
  if( keyDown("space")){

    //jumping up
   trex.velocityY=  -12;

   }

   console.log(trex.y);
 
    
    
  //adding gravity to trex
 trex.velocityY= trex.velocityY+0.8;
  
 //trex is colliding to bottom edge (to prevent if from falling)
  trex.collide(edges[3]);
  drawSprites();
  

}
