var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","72071ab4-a354-469b-8bdf-32c5f9b0e47d","b50d3ae2-108e-4b5e-a660-63e26205515b","9e17a306-ff01-4b6c-a19f-fcdc12dd5422","d4be7590-7ce1-40f5-ac6d-275bac7ba165"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"pxXSRfcb3yGH9Yy8_mG8ZvmHmgJeK7.y","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"FTNh3xlV.vp4mVnS2qFXxAuo64cQ4m16","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"XLGuOCIg7Bq5NCguXx_LR3XKaRsAbnaL","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"72071ab4-a354-469b-8bdf-32c5f9b0e47d":{"name":"meadow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png"},"b50d3ae2-108e-4b5e-a660-63e26205515b":{"name":"red_apple_1","sourceUrl":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png","frameSize":{"x":272,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"fMHBc6gLlWB588.zoou2w1zBXJtuuJKM","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":272,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fMHBc6gLlWB588.zoou2w1zBXJtuuJKM/category_food/red_apple.png"},"9e17a306-ff01-4b6c-a19f-fcdc12dd5422":{"name":"orange_1","sourceUrl":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png","frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":2,"version":"beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/api/v1/animation-library/gamelab/beKav7FPDAJPbSxLSOlaNv2O1w.9vbY9/category_food/orange.png"},"d4be7590-7ce1-40f5-ac6d-275bac7ba165":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var medow=createSprite(0,0,400,400);
medow.setAnimation("meadow_1");
medow.scale=2.5;
medow.velocityX=-4
var  monkey=createSprite(50,360,40,10);
monkey.setAnimation("monkey");
monkey.scale=0.15;

var appleGroup=createGroup();
var bananaGroup=createGroup();
var orangeGroup=createGroup();
var stoneGroup=createGroup();

var score=0;
var ground=createSprite(200,400,400,10);
ground.visible=false;
function draw() 
{
  background(255);
  drawSprites();
  text("Score:"+score,300,20);
  if(score>=0)
  {
    if(medow.x<0)
    {
      medow.x=medow.width/2;
    }
    if(keyDown("space"))
    {
      monkey.velocityY=-12;
    }
    monkey.velocityY+=0.8;
    monkey.collide(ground);
    spawnStone();
   
    if(monkey.isTouching(appleGroup))
    {
      appleGroup.destroyEach();
      score+=4;
    }
    else if(monkey.isTouching(bananaGroup))
    {
      bananaGroup.destroyEach();
      score+=8;
    }
    else if(monkey.isTouching(orangeGroup))
    {
      orangeGroup.destroyEach();
      score+=5;
    }
    if(monkey.isTouching(stoneGroup))
    {
      score-=10;
    }
    var r=randomNumber(1,3);
    switch(r)
    {
      case 1: spawnApple();
      break;
      case 2: spawnOrange();
      break;
      case 3: spawnBanana();
      break;
      default: spawnBanana();
      break;
    }
  }
  else
  {
    medow.setAnimation("textGameOver_1");
    medow.x=200;
    medow.y=200;
    medow.velocityX=0;
    medow.scale=1;
    monkey.visible=false;
    appleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    orangeGroup.setVelocityXEach(0);
    stoneGroup.setVelocityXEach(0);
    appleGroup.setLifetimeEach(0);
    bananaGroup.setLifetimeEach(0);
    orangeGroup.setLifetimeEach(0);
    stoneGroup.setLifetimeEach(0);
    
    
    
  }
 
}
function spawnApple()
{
  if(World.frameCount%60===0)
  {
    var apple=createSprite(400,120,20,20);
    apple.setAnimation("red_apple_1");
    apple.scale=0.15;
    apple.velocityX=-4;
    apple.lifetime=100;
    appleGroup.add(apple);
  }
}
function spawnBanana()
{
  if(World.frameCount%60===0)
  {
    var banana=createSprite(400,120,20,20);
    banana.setAnimation("Banana");
    banana.scale=0.05
    banana.velocityX=-4;
    banana.lifetime=100;
    bananaGroup.add(banana);
  }
}
function spawnOrange()
{
  if(World.frameCount%60===0)
  {
    var orange=createSprite(400,120,20,20);
    orange.setAnimation("orange_1");
    orange.scale=0.15;
    orange.velocityX=-4;
    orange.lifetime=100;
    orangeGroup.add(orange);
  }
}
function spawnStone()
{
  if(World.frameCount%60===0)
  {
    var stone=createSprite(400,360,20,20);
    stone.setAnimation("Stone");
   // stone.debug=true;
  //  stone.setCollider("circle",0,0,150)
    stone.scale=0.15;
    stone.velocityX=-4;
    stone.lifetime=100;
    stoneGroup.add(stone);
  }
}



  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
