var cowboy;
var platform;
var bullets;
var GRAVITY = 1;
var JUMP = 20;
var cowboyDied;
var overCode;
var x = 0;
var y = 0;
function setup() {
    var cnv = createCanvas(850,650);
//
//    //json loaing
//    var url = "js/data/setup.json";
//
//    //load the json file with jsonLoaded function as a callback
//    loadJSON(url, jsonLoaded);
//    console.log('setup complete');

    cowboy = createSprite(200,510);
    cowboy.addAnimation("nomal","assets/cb-s1.png", "assets/cb-s2.png");
    cowboy.addAnimation("stretch","assets/cb-jp1.png","assets/cb-jp1.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png", "assets/cb-jp2.png");
    cowboyDied = cowboy.addAnimation("died","assets/cb-die1.png","assets/cb-die2.png","assets/cb-die3.png","assets/cb-die4.png","assets/cb-die5.png","assets/cb-die6.png");
    cowboyDied.looping =false;
    cowboy.addAnimation("asasa","assets/cb-die6.png");

    cowboy.setCollider("rectangle", 0,0,0,253);


//    bullets = createSprite(x+800,y);
    bullets = createSprite(900,500);
    bullets.addAnimation("shoot","assets/b1.png","assets/b2.png","assets/b3.png");
    bullets.addAnimation("boom","assets/b4.png");

    platform = createSprite(400, 600);
    platform.addAnimation("normal", "assets/grd.png");

    overCode = createSprite(450,150);
    overCode.addAnimation("over0","assets/d.png");
    overCode.addAnimation("over1","assets/d1.png","assets/d2.png","assets/d3.png","assets/d3.png","assets/d3.png","assets/d4.png","assets/d5.png","assets/d6.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png","assets/d7.png");

}
//-----------------------------------end setup---------------------------
function draw() {
    background(185,200,200);

    fill (200);

    cowboy.velocity.y += GRAVITY;
    if(cowboy.collide(platform)){
        cowboy.velocity.y = 0;
        cowboy.changeAnimation("nomal");
    }

    setTimeout(function(){bullets.setSpeed(7,180);},2000);

//    for (var i = 0; i <= 10; i++){
//        bullets = createSprite(900,y);
//        y = random(500);
//    }


        if (bullets.collide(cowboy)){
//            bullets.remove();
            cowboy.changeAnimation("died");
            bullets.changeAnimation("boom");
            overCode.changeAnimation("over1");
        }

//
    if(keyWentDown("z"))
        {
        cowboy.changeAnimation("stretch");
        cowboy.animation.rewind();
        cowboy.velocity.y = -JUMP;
        }



//
//        setInterval
//        var intervalID = window.setInterval(myCallback, 500);
//        bullets.position.x;

//  var = function checkDying(){
// //heck if cow
//    if(cowboyDied.playing==false){
//        setTimeout(cowboy.changeAnimation("asasa"),1000);
//    }
//}


    drawSprites();
}

////setInterval function
//  var = function checkDying(){
// //heck if cow
//    if(cowboyDied.playing==false){
//        setTimeout(cowboy.changeAnimation("asasa"),5000);
//    }
//}
