var vaccine, corona, back2, playButton, restartButton, youLoose, player;
var gameState="PLAY"
var gameState="1"
var coronaGrp
var veloCheckerGrp
var veloCheckerGrp2

function preload(){

playerw=loadImage("Player.png")
coronaw=loadImage("corona.png")

backgroundw=loadImage("Background.png")
back2w=loadImage("back2.png")

playButtonw=loadImage("playButton.png")
restartButtonw=loadImage("restartButton.png")

youLoosew=loadImage("youLoose.png")

veloCheckerw=loadImage("veloChecker.jpg")

backsound1w=loadSound("BackgroundSound.mp3")
clicksoundw=loadSound("click.mp3")
dyingsoundw=loadSound("dying sound.mp3")
}

function setup() {

  createCanvas(1334, 635)
  edges = createEdgeSprites();
  backsound1w.loop()

  //background
  backGround=createSprite(667,317)
  backGround.addImage(backgroundw)
  backGround.scale=1

  back2=createSprite(667,317)
  back2.addImage(back2w)
  back2.scale=1.04
  back2.visible = false

  //players
  player=createSprite(165,317)
  player.scale=0.40
  player.addImage(playerw)
  player.setCollider("rectangle",15,-50,610,300)
  //player.debug=true;

  //buttons
  playButton=createSprite(667,317)
  playButton.addImage(playButtonw)
  playButton.scale = 0.30
  restartButton=createSprite(970,317)
  restartButton.addImage(restartButtonw)
  restartButton.scale= 0.30

  //others
  youLoose=createSprite(367,317)
  youLoose.addImage(youLoosew)
  youLoose.scale= 0.30

  //group
  coronaGrp=new Group();
  veloCheckerGrp=new Group();
  veloCheckerGrp2=new Group();
}

function draw() {
  background(0)

if (gameState==="1"){
backGround.visible=false
back2.visible=true
playButton.visible=true
player.visible=false
restartButton.visible=false
youLoose.visible=false

if(mousePressedOver(playButton)){
  gameState="PLAY"
}
}

if (gameState==="PLAY"){
  Spawncorona();
  SpawnveloChecker();
  SpawnveloChecker2();

  backGround.visible=true
  back2.visible=false;
  playButton.visible=false;
  restartButton.visible=false;
  youLoose.visible=false
  player.visible=true

  if(player.isTouching(coronaGrp)){
  gameState="END"
  }

  player.bounce(edges);

 if(keyDown("UP") || keyDown("W")) {
  player.y = player.y - 20;
}
if(keyDown("DOWN") || keyDown("S")) {
  player.y = player.y + 20;
}
}

if (gameState==="END"){
  backGround.visible=true
  back2.visible=false
  playButton.visible=false
  restartButton.visible=true
  youLoose.visible=true
  player.visible=false
  veloCheckerGrp.destroyEach()
  veloCheckerGrp2.destroyEach()
  coronaGrp.destroyEach()

  if(mousePressedOver(restartButton)){
    gameState="PLAY"
  }
  if(mousePressedOver(youLoose)){
    gameState="1"
  }
}
 drawSprites();
}

function Spawncorona(){
  if( frameCount % 40 ===0) {
  corona=createSprite(1384,317)
  corona.y = Math.round(random(5,550));
  corona.scale=0.4
  corona.addImage(coronaw)
  corona.setCollider("rectangle",0,0,500,500)
  coronaGrp.add (corona)
  corona.velocityX=-38
  corona.lifetime= 300;
  //corona.debug=true;
}
}
function SpawnveloChecker(){
  if( frameCount % 75 ===0) {
  veloChecker=createSprite(1384,17)
  veloChecker.scale=0.3
  veloChecker.addImage(veloCheckerw)
  veloCheckerGrp.add (veloChecker)
  veloChecker.velocityX=-20
  veloChecker.lifetime=300;
}
}
function SpawnveloChecker2(){
  if( frameCount % 75 ===0) {
  veloChecker2=createSprite(1384,618)
  veloChecker2.scale=0.3
  veloChecker2.addImage(veloCheckerw)
  veloCheckerGrp2.add (veloChecker2)
  veloChecker2.velocityX=-20
  veloChecker2.lifetime=300;
}
}