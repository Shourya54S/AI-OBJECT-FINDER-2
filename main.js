song = "";
function preload(){
song = loadSound("song.mp3");
} 
function setup(){
canvas = createCanvas(380 , 380);
canvas.center(); 
video = createCapture(VIDEO);
video.size(380,380);
video.hide();
canvas.position(570,235)
}
function draw(){}
function play(){ 
song.play(); 
song.setVolume(0.2);
}
function draw(){
image(video , 0 , 0 , 380 , 380);
}