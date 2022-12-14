var bucket,background,bomb  ,ticket,redeem;
var speedbuff,exp_sd,collect;
var bucketimg,bombimg,bgImg,redeemimg,ticketimg,speedimg,speedbuff;
var gamestate=0,text,score=0;
var b=2, a=3.3 ;

function preload() {
  bucketimg = loadImage("assets/bucket.png");
  bombimg= loadImage("assets/bombdebuff.png");

  bgImg = loadImage("assets/background.jpg");
  redeemimg=loadImage("assets/redeem.png");
  ticketimg=loadImage("assets/ticket.png");
  speedimg=loadImage("assets/speedbuff.png");
  //explosionimg=loadImage("assets/exp-bg.png");
  exp_sd=loadSound("assets/explosion.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 bucket=createSprite(750,500, 50, 50);
  bucket.addImage(bucketimg);
  bucket.scale = 0.3;
  bucket.debug = true;
  bucket.setCollider("rectangle",0,0,300,500);

  


  redeem=createSprite(width-110,height-50,50,50)
  redeem.addImage(redeemimg)
  redeem.scale=0.5


  

  ticketGroup =new Group()
  bombGroup= new Group()
  speedGroup= new Group()

}

function draw() {
  background(255,255,255); 
  image(bgImg,0,0,width,height)

  if(keyDown("LEft_ARROW")||touches.length>0){
    if(bucket.x> 0 ){
     bucket.x = bucket.x-30
    }
          
  }
  if(keyDown("Right_ARROW")||touches.length>0){
    if(bucket.x<width){
   bucket.x = bucket.x+30;
    }
  }


  if(ticketGroup.isTouching(bucket)){
  for(var i=0;i<ticketGroup.length;i++){     
      if(ticket.isTouching(bucket)){
        ticket.destroy();
        exp_sd.play();
        score = score+1;
        } 
  
  }
}

if(bombGroup.isTouching(bucket)){
  for(var i=0;i<bombGroup.length;i++){     
      if(bomb.isTouching(bucket)){
        bomb.destroy();
        score = score-3;

        } 
  
  }
}


if(speedGroup.isTouching(bucket)){
  for(var i=0;i<speedGroup.length;i++){     
      if(speedbuff.isTouching(bucket)){
        speedbuff.destroy();
        exp_sd.play();
        score = score+1;
        b=b+2;
        a=a+2;

        } 
  
  }
  
  
}


if (a>10 || b>9){

  b=3.2,
  a=5; 
}
  spawnspeedbuffs();  
  spawnTickets();
  spawnBomb();
  drawSprites();




  textSize(20)
fill("white")
text("Score = "+ score,displayWidth-150,displayHeight/2-369)
}




function spawnTickets(){

  if(frameCount% 150===0 ){

  ticket=createSprite(windowWidth,-100,50,50);
  ticket.addImage(ticketimg);
  ticket.scale=0.35;
  ticket.debug= true;
  ticket.setCollider("rectangle",0,0,300,250);


  ticket.x= Math.round(random(0,width));


  ticket.velocityY=a;

  ticket.lifetime= 400;

  ticketGroup.add(ticket);
  }
}

function spawnBomb(){

  if(frameCount% 269===0 ){

  bomb=createSprite(windowWidth,-100,50,50);
  bomb.addImage(bombimg);
  bomb.scale=0.35;
  bomb.debug= true;
  bomb.setCollider("rectangle",0,0,300,250);


  bomb.x= Math.round(random(0,width));


  bomb.velocityY=b;

  bomb.lifetime= 400;

  bombGroup.add(bomb);
  }
}

function spawnspeedbuffs(){

  if(frameCount% 369 ===0 ){

  speedbuff=createSprite(windowWidth,-100,50,50);
  speedbuff.addImage(speedimg);
  speedbuff.scale=0.35;
  speedbuff.debug= true;
  speedbuff.setCollider("rectangle",0,0,300,250);


  speedbuff.x= Math.round(random(0,width));


  speedbuff.velocityY+= 10;

  speedbuff.lifetime= 400;

  speedGroup.add(speedbuff);
  }
}
