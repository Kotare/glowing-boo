
function A(name) {
  this.name = name;
  this.shell = '<div class="creature" id="' + this.name + '""></div>';
};

  A.prototype.start = function() { //
    this.animateTo({x: 1, y: 1}, 1000)
    this.animateTo({x: 95, y: 40}, 2000)
    this.animateTo({x: 1, y: 1}, 1000)
  }

A.prototype.animateTo = function(coords, speed) { // {x: 10, y:12}
  $('#' + this.name).animate({top: coords.y + '%', left: coords.x + '%'}, speed)
}