
function A(name) {
  this.name = name;
  this.shell = '<div class="creature" id="' + this.name + '""></div>';
};

A.prototype.start = function() {


  this.moveToCenter();
  this.emphasizeBreath();

  // bounce
  this.bounceAround();

 // exercise
  this.goJogging();

  // go to work
  this.cleanUpRoom();

 this.moveToCenter();
 this.emphasizeBreath();




  //play
  //$('#' + this.name).animate({top: coords.y + '3%', left: coords.x + '%'}, speed, 'linear');
}


A.prototype.getRandomValue = function() {
  return Math.floor(Math.random() * 100) + 1;
}

A.prototype.cleanUpRoom = function() {
  //move to upper left corner
  this.moveToUpperLeftCorner();

  for(var i= 0; i < 10; i++) {
    //move straight down
    this.moveStraightDown();

    this.moveOneStepRight();

    //move straight up
    this.moveStraightUp();

    if (i < 9) {
      //move one step right
      this.moveOneStepRight();

    }
  }
}

A.prototype.goJogging = function() {
  //move to upper left corner
  this.moveToUpperLeftCorner();

  for(i=0; i<3;i++) {
    this.moveStraightRight();
    this.moveStraightDown();
    this.moveStraightLeft();
    this.moveStraightUp();
  }

}

A.prototype.bounceAround = function() {
  for(var i = 0; i < 3; i++) {
    this.animateTo({x: 0, y: this.getRandomValue()}, 1000);
    this.animateTo({x: this.getRandomValue(), y: 0}, 1000);
    this.animateTo({x: 95, y: this.getRandomValue()}, 1000);
    this.animateTo({x: this.getRandomValue(), y: 95}, 1000);
  }
}


A.prototype.moveToUpperLeftCorner = function() {
  this.animateTo({x: 0, y: 0}, 1000);
}

A.prototype.moveToCenter = function() {
  //this.animateTo({x: 50, y:50}, 1500, 'swing', this.emphasizeBreath);
  $('#' + this.name).animate({top:'50%', left:'50%'}, 1500, 'linear', this.emphasizeBreath.bind(this));
}

A.prototype.moveStraightDown = function() {
  this.animateTo({x: '+=0', y: 95}, 1000);
}

A.prototype.moveOneStepRight = function() {
  this.animateTo({x: '+=5', y: '+=0'}, 500);
}

A.prototype.moveOneStepLeft = function() {
  this.animateTo({x: '-=5', y: '+=0'}, 500);
}


A.prototype.moveStraightUp = function() {
  this.animateTo({x: "+=0", y: 0}, 1000);
}

A.prototype.moveStraightRight = function() {
  this.animateTo({x: 95, y: '+=0'}, 1000);
}

A.prototype.moveStraightLeft = function() {
  this.animateTo({x: 0, y: '+=0'}, 1000);
}


A.prototype.getPositionInPercent = function() {
  return parseInt($('#' + this.name)[0].style.top);
}

A.prototype.animateTo = function(coords, speed) { // {x: 10, y:12}
  $('#' + this.name).animate({top: coords.y + '%', left: coords.x + '%'}, speed, 'linear');
}

A.prototype.breathSound = function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'breathing_sound.mp3');
  //audioElement.setAttribute('autoplay', 'autoplay');
  audioElement.play();
}

A.prototype.emphasizeBreath = function() {
  console.log('breath called')
  this.breathSound();
  //this.breathSound.call();
  $('#' + this.name).animate({height: '+=30%', width: '+=30%'},1000);
  $('#' + this.name).animate({height: '-=20%', width: '-=20%'},1000);
  $('#' + this.name).animate({height: '+=20%', width: '+=20%'},2000);
  $('#' + this.name).animate({height: '-=30%', width: '-=30%'},3000);
  $('#' + this.name).animate({height: '+=10%', width: '+=10%'},3000);
  $('#' + this.name).animate({height: '-=10%', width: '-=10%'},4000);
  $('#' + this.name).animate({height: '+=.5%', width: '+=.5%'},4000);
  $('#' + this.name).animate({height: '-=.5%', width: '-=.5%'},5000);

  }

