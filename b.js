function B() {
	this.name = 'flim';
	this.shell = '<div id="' + this.name + '""></div>';
	this.id = '#' + this.name;
	this.lastCoords;
};

// game loop
B.prototype.start = function() { // 
	// this.lastCoords = this.getCoords();
	setInterval(this.move.bind(this), 100)
	// setInterval(this.poop.bind(this), 150)
}

//
B.prototype.move = function() { // Abstract to helper?
	console.log('move')
	var lastCoords = this.lastCoords;
	var currentCoords = this.getCoords();  // function query (DOM)
	var newCoords = this.newCoords({coords: {	now: 	currentCoords,
																						prev: lastCoords},
																	percentScreenMove: 3,
																	bearingMaxVariation: Math.PI/2}); //function
	var timeToReach = Math.random() * 5000 + 1000
	this.animateTo(newCoords, timeToReach); // function
	this.lastCoords = currentCoords;
}

// DOM coupled
B.prototype.getCoords = function() { // Abstract to helper?
	var xNow = parseInt($(this.id).css('left'));
	var yNow = parseInt($(this.id).css('top'));
	return { x: xNow, y: yNow }
}

// Uncoupled
B.prototype.newCoords = function(args) { // Abstract to helper?
	var newCoords;
	if (args.coords.prev === undefined) {
		newCoords = locationBasedNextCoords(args)
	} else {
		newCoords = vectorBasedNextCoords(args)
	}
	return newCoords
}

B.prototype.locationBasedNextCoords = function(args) {
	var xNew = args.currentCoords.xNow + (Math.random() * args.percentScreenMove - args.percentScreenMove/2);
	var yNew = args.currentCoords.yNow + (Math.random() * args.percentScreenMove - args.percentScreenMove/2);
	return {x: xNew, y: yNew};
}

B.prototype.vectorBasedNextCoords = function(args) {
	var currentBearing = Math.atan((args.coords.prev.x - args.coords.now.x)/
													 	(args.coords.prev.y - args.coords.now.y));
	var newBearing = currentBearing + Math.random() * args.bearingMaxVariation;
	var xNew = args.percentScreenMove * Math.sin(newBearing);
	var yNew = args.percentScreenMove * Math.cos(newBearing);
	return {x: xNew, y: yNew};
}

// DOM coupled
B.prototype.animateTo = function(coords, speed) { // Abstract to helper?
	$(this.id).animate({top: coords.y + '%', left: coords.x + '%'}, speed)
}