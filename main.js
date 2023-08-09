noseX = 0;
noseY= 0;

function preload()
{
        clown_nose = loadImage('https://t4.ftcdn.net/jpg/05/27/11/63/360_F_527116381_bYxpaONFryp0wVEAOUhAeGekCU8D2mNv.jpg');
}

function setup()
{
         canvas = createCanvas(300, 300);
         canvas.center();
         video = createCapture(VIDEO);
         video.size(300, 300);
         video.hide();

         poseNet = ml5.poseNet(video, modelLoaded);
         poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
         console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
         console.log(results);
         noseX = + results[0].pose.nose.x-15
         noseY = + results[0].pose.nose.y-15
}

function draw()
{
        image(video, 0, 0, 300, 300);
        image(clown_nose, noseX, noseY, 30, 30); 

}

function take_snapshot()
{
         save('myFilterImage.png');
}