var noseX = 0;
var noseY = 0;
var difference = 0;
function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550, 500);

    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        
    }
   
}
function draw() { background('#969A97');
document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
 fill('#F90093'); 
 stroke('#F90093'); 
square(noseX, noseY, difference); 
}