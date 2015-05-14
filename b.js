function B() {
	this.name = 'flim';
	this.shell = '<div id="' + this.name + '""></div>';
	this.id = '#' + this.name;
	this.lastCoords = this.getCoords();
};

B.prototype.start = function() { // 
	setInterval(this.move.bind(this), 100)
	// setInterval(this.poop.bind(this), 150)
}
		
B.prototype.move = function() {
	console.log('move')
	var lastCoords = this.lastCoords;
	var currentCoords = this.getCoords();
	var newCoords = this.newCoords({now: 	currentCoords,
															prev: lastCoords});
	var timeToReach = Math.random() * 5000 + 1000
	this.animateTo(newCoords, timeToReach);
	this.lastCoords = currentCoords;
}

B.prototype.getCoords = function() {
	var xNow = parseInt($(this.id).css('left'));
	var yNow = parseInt($(this.id).css('top'));
	return { x: xNow, y: yNow }
}

B.prototype.newCoords = function(coords) {
	console.log('coords')
	var moveStepPercent = 3 
	var currentBearing = Math.atan((coords.prev.x - coords.now.x)/
													 	(coords.prev.y - coords.now.y));
	var newBearing = currentBearing + Math.random() * 45;
	var xNew = moveStepPercent * Math.sin(newBearing);
	var yNew = moveStepPercent * Math.cos(newBearing);
	return {x: xNew, y: yNew}
}

B.prototype.animateTo = function(coords, speed) { // {x: 10, y:12}
	$('#' + this.name).animate({top: coords.y + '%', left: coords.x + '%'}, speed)
}