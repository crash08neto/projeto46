var cara_correndo, cara_correndoImg;
var zumbi, zumbiImg;
var parqueImg;
var edges;
var tiroImg
var meteoro, meteoroImg

function preload(){
  cara_correndoImg = loadImage("./assets/cara_correndo.png")
  zumbiImg = loadImage("assets/zumbi.png")
  parqueImg = loadImage("assets/parque.jpg")
  tiroImg = loadImage("assets/tiro.png")
  meteoroImg = loadImage("assets/meteoro.png")
}

function setup() {
  createCanvas(600,600);

  edges = createEdgeSprites()

  parque = createSprite(width/2, height/2)
  parque.addImage(parqueImg)
  parque.scale = 0.8

  cara_correndo = createSprite(450, 500)
  cara_correndo.addImage(cara_correndoImg)
  cara_correndo.scale = 0.2

  tiros = new Group()
  zumbig = new Group()
  meteorg = new Group()
}

function draw() {
  background(0); 

  if(keyDown(UP_ARROW)){
    cara_correndo.y = cara_correndo.y -3
  }

  if(keyDown(DOWN_ARROW)){
    cara_correndo.y = cara_correndo.y +3
  }
  
  if(keyDown(RIGHT_ARROW)){
    cara_correndo.x = cara_correndo.x +3
  }

  if(keyDown(LEFT_ARROW)){
    cara_correndo.x = cara_correndo.x -3
  }

  if(keyDown("space")){
    var  tiro = createSprite(cara_correndo.x + 20, cara_correndo.y - 10, 10, 10)
    tiro.velocityX = 5
    tiro.addImage(tiroImg)
    tiro.scale = 0.09
    tiros.add(tiro)
  }

  if(tiros.isTouching(zumbig)){
    zumbig.destroyEach()
  }

  cara_correndo.collide(edges)

  zumbis()
  meteoros()
 
  drawSprites();
}

function zumbis(){
  if(frameCount%30 === 0){
    x = width
    y = random(50, 550)

    zumbi = createSprite(x, y)
    zumbi.addImage(zumbiImg)
    zumbi.scale = 0.15
    zumbi.velocityX = -2
    zumbi.velocityY = random(-2,2)
    zumbig.add(zumbi)
  }
}

function meteoros(){
  if(frameCount%60 === 0){
    x = random(0, 500)
    y = 0

    meteoro = createSprite(x, y)
    meteoro.addImage(meteoroImg)
    meteoro.scale = 0.5
    meteoro.velocityX = 5
    meteoro.velocityY = 5
    meteorg.add(meteoro)
  }
}