noseX=0 ;
noseY=0 ;
function preload(){
    clown_nose=LoadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(420,420);
    canvas.center();
    video= creatCapture(VIDEO);
    Video.size(420,420);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(result)
{
    if(result.lenght>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
    }
}
function draw() {
    image(video, 0, 0, 420,420);
    image(clown_nose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    SVGAElement('myFilterImage.png');
}