var bg_img
var player1
var player2

function preload() {
  bg_img = loadImage("./assets/bg.png");

}

function setup(){

canvas = createCanvas(1900,1000);
player1 = new Player(900,300,700,0,0)
player2 = new Player(200,300,700,0,90)
}

function draw() {
  background("black");
  image(bg_img,0,0,windowWidth,windowHeight)

 player1.display()
 player2.display()

}