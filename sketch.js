var canvas;
var block1, block2, block3, block4;
var ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor= "red";
    
    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "blue";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = "pink";

    ball = createSprite(random(20,570),100,40,40);
    ball.shapeColor = "white";
    ball.velocityX=4;
    ball.velocityY= 8;
}
    //create 4 different surfaces



    //create box sprite and give velocity



function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.isTouching(block1)&& ball.bounceOff(block1)){
        ball.shapeColor = 'red'
        music.play();
    }
    
    if(ball.isTouching(block2)){
        ball.shapeColor = 'blue'
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();       
    }
    
    if(ball.isTouching(block3)&& ball.bounceOff(block3)){
        ball.shapeColor = 'yellow'
    }
    
    if(ball.isTouching(block4)&& ball.bounceOff(block4)){
        ball.shapeColor = 'pink'
    }
drawSprites();

    //add condition to check if box touching surface and make it box
}
