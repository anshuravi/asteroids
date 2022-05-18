let gameState = 'title';
let fontRegular;
let canvas;
let landscape;
let bgR = 100;
let bgG = 240;
let bgB = 100;
let vortex;
let portal;
var bullets;
var asteroids;
var ship;
var shipImage, bulletImage, particleImage;
let timer = 35;
let clock = 15;
let bgImg;
let score = 0;
let win = false;
let blaster;

var MARGIN = 40;
let noiseMax = 5;
let aoff = 0;
var inc = 0.1;
var scl = 10;
var cols, rows;
let picture=[];
let mr;
let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
let bubble6;
let star1;
let star2;
let star3;
let star4;
let star5;
let star6;
let song;
let bm;




function preload (){
  vortex = loadImage('vortex.gif')
  portal = loadImage('portal.gif')
  landscape = loadImage('landscape1.jpg')
   fontRegular = loadFont('Play-Regular.ttf');
  time = loadImage('purplefire.gif')
    for(let i = 0; i < 8; i++){
    picture[i]=loadImage("images/image"+(i+1)+".jpg");
  }
   bulletImage = loadImage('asteroids_bullet.png');
  shipImage = loadImage('asteroids_ship.png');
  particleImage = loadImage('asteroids_particle.png');
  img = loadImage("firevortex.gif");
  ig = loadImage("firevortexpurple.gif")
   song = loadSound('shoot.mp3');
   bm = loadSound('music.mp3');
}
// Set up
function setup() {
  canvas = createCanvas(500, 500);
  bm.play();
  canvas.parent('sketch-holder');
  frameRate(60);
  textFont(fontRegular);
  bgImg = landscape;
  bubble1 = new Bubble();
 bubble2 = new Bubble();
 bubble3 = new Bubble();
 bubble4 = new Bubble();
 bubble5 = new Bubble();
 bubble6 = new Bubble();
 star1 = new Star();
star2 = new Star();
star3 = new Star();
star4 = new Star();
star5 = new Star();
star6 = new Star();
  ship = createSprite(width/2, height/2);
  ship.maxSpeed = 6;
  ship.friction = 0.98;
  ship.setCollider('circle', 0, 0, 20);

  ship.addImage('normal', shipImage);
  ship.addAnimation('thrust', 'asteroids_ship0002.png', 'asteroids_ship0007.png');

  asteroids = new Group();
  aliens = new Group();
  bullets = new Group();

  for(var i = 0; i<8; i++) {
    var ang = random(360);
    var px = width/2 + 1000 * cos(radians(ang));
    var py = height/2+ 1000 * sin(radians(ang));
    createAsteroid(3, px, py);

  }
function keyPressed(){
    if (key === 's' || key === 'S' ) {
  for(var i = 0; i<8; i++) {
    var ang = random(360);
    var px = width/2 + 1000 * cos(radians(ang));
    var py = height/2+ 1000 * sin(radians(ang));
    createAlien(4, px, py);

}
}
}
}

/* The draw loop content is drawn depending on the current value
of gameState. The 'switch' function here is replacing what could
be an 'if-else' statement. */
function draw() {
  // The switch call expects to find a varible within the parentheses.
  switch (gameState) {
    /* Each 'screen' that you want should be defined with a word,
    this word will correspond to a 'case' as seen below. The case
    will be followed by all of functions you want within that screen
    and end with a 'break;'. */
    case 'title':
      titleScreen();
      break;
    case "instructions":
      instructionScreen();
     break;
    case 'lvl1':
      gameStage1();
      break;
      case 'lvl2':
        gameStage2();
        break;
        case 'youWin':
          youWin();
          break;
    case 'gameover':
      gameOver();
      break;
  }
}

/* Key release listener for starting game while on the title and game
over screens and changing the background color on the main game screen.
Here we can see how the variable 'gameState' gets changed to trigger a
new screen to be displayed. */
function keyReleased() {
  if (gameState === 'title') {
    if (key === 's' || key === 'S' ) {
      gameState = 'instructions';
      bgR = 100;
      bgG = 240;
      bgB = 100;
    }
  }
  else if (gameState === 'instructions') {
    if (key === 's' || key === 'S' ) {
      gameState = 'lvl1';
    }
  }
  else if (gameState === 'lvl1') {
    if (key === 's' || key === 'S' ) {
      gameState = 'lvl2';
    }
  }
  else if (gameState === 'lvl2') {
    if (key === 's' || key === 'S' ) {
      gameState = 'youWin';
    }
    }
  else if (gameState === 'youWin') {
    if (key === 's' || key === 'S' ) {
      gameState = 'gameover';
    }
    }
    if(key == "R" || key == "r"){
    mr = int(random(picture.length));
    bgImg = picture[mr];
    console.log(picture[mr]);
    score += 2;
  }
  }

// Function for rendering the title screen.
function titleScreen() {
 background(portal);
      stroke(255);
  strokeWeight(4.5)
  fill(155, 66, 245);
  textSize(45);
  textAlign(CENTER);
  text('Asteroids of the Vortex', width*0.5, height*0.33);
  textSize(35);
  text('Press "S" To Start Game', width*0.5, height*0.66);
}

function instructionScreen() {
  background(bgImg);
  bubble1.move();
   bubble1.show();
   bubble2.move();
   bubble2.show();
   bubble3.move();
   bubble3.show();
   bubble4.move();
   bubble4.show();
   bubble5.move();
   bubble5.show();
   bubble6.move();
   bubble6.show();

   star1.show();
   star2.move();
   star2.show();
   star3.move();
   star3.show();
   star4.move();
   star4.show();
   star5.move();
   star5.show();
   star6.move();
   star6.show();



  noStroke();
  fill(255, 128, 128);
  textSize(30);
  textAlign(CENTER);
  textAlign(CENTER, CENTER);
 textSize(100);
 fill(155, 66, 245)
 stroke(255);
 strokeWeight(4.5)
 stroke(255);
 fill(155, 66, 245);
 strokeWeight(4.5)
 textSize(50);
 textAlign(CENTER);
 text('Destroy the asteroids!', width*0.5, height*0.1);
 textSize(30);
 text('Press "X" to shoot!', width*0.5, height*0.2);
 textSize(30);
 text('Move with the arrow keys!', width*0.5, height*0.3);
 textSize(30);
 text('Press "R" to travel through time!', width*0.5, height*0.4);
 text('Asteroids and Aliens: +1', width*0.5, height*0.5);
 text('Time Travel: +2', width*0.5, height*0.6);
 text('Press "S" to continue!', width*0.5, height*0.8);
 textSize(50);
  text('Allons-Y!', width*0.5, height*0.7);

 stroke(255);
 fill(255);

}

// Function for rendering the main game play screen.
function gameStage1() {
  background(bgImg);
  image(img, -20,-20);

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }



function keyReleased(){

}
   textAlign(CENTER, CENTER);
  textSize(100);
  fill(155, 66, 245)
  stroke(255);
  strokeWeight(4.5)
  text(timer, width/2, height/2);
  stroke(255);
  fill(155, 66, 245);
  strokeWeight(4.5)
  textSize(50);
  textAlign(CENTER);
  text('Destroy the asteroids!', width*0.5, height*0.1);
  textSize(30);
  textSize(30);
  text('Press "S" to add aliens', width*0.5, height*0.85);
  textSize(30);
  text('Press "R" to travel through time.', width*0.5, height*0.95);
 //The string "Score: " is concatenated to the score variable, which helps explain to the player what the number means
 text("Score: " + score, width*0.5, height*0.2);


  stroke(255);
  fill(255);

  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
    if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
    if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
    if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }

  asteroids.overlap(bullets, asteroidHit);

  ship.bounce(asteroids);

  if(keyDown(LEFT_ARROW))
    ship.rotation -= 4;
  if(keyDown(RIGHT_ARROW))
    ship.rotation += 4;


  if(keyWentDown('x'))
  {
    song.play();
    var bullet = createSprite(ship.position.x, ship.position.y);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10+ship.getSpeed(), ship.rotation);
    bullet.life = 30;
    bullets.add(bullet);
  }

  function asteroidHit(asteroid, bullet) {
  var newType = asteroid.type-1;
  score += 1;

push()
  if(newType>0) {
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
  }
pop()



  bullet.remove();
  asteroid.remove();
}

  drawSprites();
  if (timer == 0) {
    gameState = 'youWin';
     saveCanvas('mycanvas', 'png')
  }
}

function gameStage2() {
  background(bgImg);
  image(ig, -20,-20);

  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    gameState = 'youWin';
  }
function keyPressed(){

}
   textAlign(CENTER, CENTER);
  textSize(100);
  fill(155, 66, 245)
  stroke(255);
  strokeWeight(4.5)
  text(timer, width/2, height/2);
  stroke(255);
  fill(155, 66, 245);
  strokeWeight(4.5)
  textSize(50);
  textAlign(CENTER);
  text('Destroy the asteroids!', width*0.5, height*0.1);
  textSize(30);
  textSize(30);
  textSize(30);
  text('Hurry before time is out!', width*0.5, height*0.9);
  text("Score: " + score, width*0.5, height*0.2);

  stroke(255);
  fill(255);

  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
    if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
    if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
    if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }

  asteroids.overlap(bullets, asteroidHit);

  ship.bounce(asteroids);

  if(keyDown(LEFT_ARROW))
    ship.rotation -= 4;
  if(keyDown(RIGHT_ARROW))
    ship.rotation += 4;

  if(keyWentDown('x'))
  {
    song.play();
    var bullet = createSprite(ship.position.x, ship.position.y);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10+ship.getSpeed(), ship.rotation);
    bullet.life = 30;
    bullets.add(bullet);
  }
  function asteroidHit(asteroid, bullet) {
  var newType = asteroid.type-1;
  score += 1;

  if(newType>0) {
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);

  }

  if(newType>0) {
    createAlien(newType, asteroid.position.x, asteroid.position.y);
    createAlien(newType, asteroid.position.x, asteroid.position.y);
  }


  bullet.remove();
  asteroid.remove();
}

  drawSprites();
  if (timer == 0) {
    gameState = 'youWin';
     saveCanvas('mycanvas', 'png')
  }
}

function youWin() {
  background(portal);
  fill(155, 66, 245)
  stroke(255);
  strokeWeight(5)
  textSize(75);
  textAlign(CENTER);
  text("Score: " + score, width*0.5, height*0.55);
  textSize(45);
  text('Press "S" to continue.', width*0.5, height*0.65);

}




// Function for rendering game over screen.
function gameOver() {
  background(portal);
  fill(155, 66, 245)
  stroke(255);
  strokeWeight(5)
  textSize(75);
  textAlign(CENTER);
  text('GAME OVER', width*0.5, height*0.55);
  textSize(30);
  text('Restart the Vortex to Play Again', width*0.5, height*0.65);
}
class Bubble {
  constructor(x, y, r) {
    this.x = 250;
    this.y = 250;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(255);
    ellipse(this.x, this.y, 5, 5);
  }
}

class Star {
  constructor(x, y, r) {
    this.x = 250;
    this.y = 250;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(255);
    ellipse(this.x, this.y, 1, 1);
  }
}
