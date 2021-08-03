var database
var im1,im2,im3,im4,im5,im6,im7,im8
var an1,an
var PlayerCount
var forms,player,game,GameState=0
var sound
let capture
function preload(){
    
im1 =loadImage("images/2.png")
im2 =loadImage("images/4.png")
im3 =loadImage("images/6.png")
im4 =loadImage("images/8.png")
im5 =loadImage("images/10.png")
im6 =loadImage("images/12.png")
im7 =loadImage("images/14.png")
im8 =loadImage("images/16.png")
/*im9 =loadImage("images/9.png")
im10 =loadImage("images/10.png")
im11 =loadImage("images/11.png")
im12 =loadImage("images/12.png")
im13 =loadImage("images/13.png")
im14 =loadImage("images/14.png")
im15 =loadImage("images/15.png")
im16 =loadImage("images/16.png")*/
/*an1 = loadImage("images/a.jpg")
ann1 = loadAnimation("images/1.png","images/2.png")
ann2 = loadAnimation("images/3.png","images/4.png")
ann3 = loadAnimation("images/5.png","images/6.png")
ann4 = loadAnimation("images/7.png","images/8.png")
ann5 = loadAnimation("images/9.png","images/10.png")
ann6 = loadAnimation("images/11.png","images/12.png")
ann7 = loadAnimation("images/13.png","images/14.png")
ann8 = loadAnimation("images/15.png","images/16.png")
*/
}


function setup(){
var canvas = createCanvas(windowWidth-100,windowHeight-100)
database = firebase.database()
game = new Game()
game.getState()
game.start()

}
/*capture = createCapture(VIDEO)
capture.size(250,200)
}
function draw(){
image(capture,windowWidth/2+300,windowHeight/2-300,150,100)
}*/
function draw(){
if (PlayerCount == 2){
    game.update(1)
}
if (GameState ===1){
    clear()
    game.play() 
}
    
}