lipX=220;
lipY=200;
function preload(){
  transparent_lip=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup(){
  canvas=createCanvas(500,350)
  canvas.position(110,250)
  video=createCapture(VIDEO)
  video.hide()
  canvas.center();
  canvas.position(500,300);
}

function draw(){
  image (video,0,0,500,500)
  image (transparent_lip,lipX,lipY,70,50)
}

function take_snapshot(){
    save('my_image.png')
}

function modelLoaded() {
  console.log("poseNet is initialized")
}

function gotPoses(results)
{
    if(results.length>0){
        console.log(results)
        console.log("Pose X:" + results[0].pose.lip.x)
        console.log("Pose Y:" + results[0].pose.lip.y)
        lipX= results[0].pose.lip.x-30;
        lipY= results[0].pose.lip.y-30;
    }
}
