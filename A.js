
function A(name) {
  this.name = name;
  this.shell = '<div class="creature" id="' + this.name + '""></div>';
};

A.prototype.start = function() {

  // go to work
  this.cleanUpRoom();

  // exercise
  this.goJogging();

  // bounce
  this.bounceAround();

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

  for(i=0; i<5;i++) {
    this.moveStraightRight();
    this.moveStraightDown();
    this.moveStraightLeft();
    this.moveStraightUp();
  }

}

A.prototype.bounceAround = function() {
  for(var i = 0; i < 5; i++) {
    this.animateTo({x: 0, y: this.getRandomValue()}, 3000);
    this.animateTo({x: this.getRandomValue(), y: 0}, 3000);
    this.animateTo({x: 95, y: this.getRandomValue()}, 3000);
    this.animateTo({x: this.getRandomValue(), y: 95}, 3000);
  }
}


A.prototype.moveToUpperLeftCorner = function() {
  this.animateTo({x: 0, y: 0}, 2000);
}

A.prototype.moveStraightDown = function() {
  this.animateTo({x: '+=0', y: 95}, 3000);
}

A.prototype.moveOneStepRight = function() {
  this.animateTo({x: '+=5', y: '+=0'}, 1000);
}

A.prototype.moveOneStepLeft = function() {
  this.animateTo({x: '-=5', y: '+=0'}, 1000);
}


A.prototype.moveStraightUp = function() {
  this.animateTo({x: "+=0", y: 0}, 3000);
}

A.prototype.moveStraightRight = function() {
  this.animateTo({x: 95, y: '+=0'}, 3000);
}

A.prototype.moveStraightLeft = function() {
  this.animateTo({x: 0, y: '+=0'}, 3000);
}


A.prototype.getPositionInPercent = function() {
  return parseInt($('#' + this.name)[0].style.top);
}

A.prototype.animateTo = function(coords, speed) { // {x: 10, y:12}
  $('#' + this.name).animate({top: coords.y + '%', left: coords.x + '%'}, speed, 'linear');
}