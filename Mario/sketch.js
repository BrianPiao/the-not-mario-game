
function preload(){

 mario_running = loadAnimation("Capture1.png","Capture3.png","Capture4.png");
 mario_collided = loadImage("mariodead.png");   
 coinImage = loadImage("coin.png");
 gameOverImage = loadImage("gameOver.png");
 obstacle1Image = loadImage("obstacle1.png");
 obstacle2Image = loadImage("obstacle2.png");
 obstacle3Image = loadImage("obstacle3.png");
 backgImage = loadImage("backg.jpg");

    
}
function setup(){
createCanvas(800,400)
ground = createSprite(0,350,1200,10);
ground.x = ground.width / 2

backg = createSprite(0,120,10,10)
backg.addImage(backgImage);

mario = createSprite(width/width+40,height/2,10,10);
mario.addAnimation("running",mario_running);
coinGroup = new Group();
obstaclesGroup = new Group();
}

function draw(){
background(0);
if (keyDown("space") && mario.y >= 239) {
    mario.velocityY = -15;
}

mario.velocityY = mario.velocityY + 0.8
if (backg.x < 0) {
    backg.x = backg.width / 2;
}

mario.collide(ground);
spawnObstacles()
spawnCoin();
drawSprites();
}
function spawnCoin() {
    if (frameCount % 120 === 0){
        var coin = createSprite(900,120,40,10);
        coin.y = Math.round(random(120,220));
        coin.addImage(coinImage);
        coin.scale = 0.1;
        coin.velocityX = -3;
        coin.lifetime = 200
        coin.depth = mario.depth;
        mario.depth = mario.depth + 1

        coinGroup.add(coin);
    }
}

function spawnObstacles() {
    if (frameCount % 60 === 0) { 
        var obstacle = createSprite(600,280,10,40);
        var rand = Math.round(random(1,3));
        switch (rand) {
        case 1:
            obstacle.addImage(obstacle1Image);
            break;
        case 2:
            obstacle.addImage(obstacle2Image);
            break;
        case 3:
            obstacle.addImage(obstacle3Image);
            break;
         }

         obstacle.velocityX = -(6);

         obstacle.scale = 0.2;
         obstacle.lifetime = 300;
         obstaclesGroup.add(obstacle);
    }
}