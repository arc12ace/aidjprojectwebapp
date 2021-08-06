leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log("PoseNet has been initialized");
}

function draw(){
    image(video, 0, 0, 500, 500);
}

function preload(){
    song1=loadSound("01. Adele - Rolling in the Deep.mp3");
    song2=loadSound("09. Adele - One and Only.mp3");
}
function gotposes(){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log("left wrist x= " + leftwristX + " left wrist y= " + leftwristY);

        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        console.log("right wrist x= " + rightwristX + " right wrist y= " + rightwristY);
    }
}

