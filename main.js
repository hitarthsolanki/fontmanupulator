difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550,500);

  canvas = createCanvas(550,550);
  canvas.position(560,150);
    
  poseNet = ml5.poseNet(video, modelLoaded); 
  poseNet.on('pose' , gotPoses);
}
function draw() {
  document.getElementById("font_size").innerHTML = "Side of the square will be =" + difference;
  background('#FF0000');
  fill('#FFC0CB');
  stroke('#FFC0CB');
  square(leftWristX,rightWristX,difference);
} 
function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.rightWristX.x;
        rightWristX = results[0].pose.leftWristX.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX " + leftWristX +"rightWristX " + rightWristX + "difference" + difference );
    }
}

