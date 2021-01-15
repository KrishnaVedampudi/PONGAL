function preload ()
{
   img1 = loadImage("https://i.ibb.co/fxnQyS7/XXX.png");
   img2 = loadImage("https://i.ibb.co/z5rYwhS/pongal.png");
   img3 = loadImage("https://i.ibb.co/SQyv6gG/3.png");
   img4 = loadImage("https://i.ibb.co/GRfLMSp/4.png");
}
function setup ()
{
    canvas = createCanvas(550,500);
    canvas.center(); 
    video = createCapture(VIDEO);
    video.size(500,550);
    video.hide();    
}
function draw()
{
    image(video, 0, 0, 550, 550);
    image(img1, 400, 100, 150, 400);
    image(img2, 0, 100, 150, 400);
    image(img3, 0, 0, 100, 100);
    image(img4, 450, 0, 100, 100);
    stroke('red');
    text('Happy Pongal To you and your family members',15, 100);
    textSize(25);
    

}
function take_snapshot()
{
    save('photograph_bhogi');
}