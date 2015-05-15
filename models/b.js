function B(name) {
	this.name = name;
	this.class = 'creature';
	this.shell = '<div id="' + this.name + '" class="' + this.class + '"></div>';
	this.id = '#' + this.name;
	this.lastCoords;
	this.coords;
	this.proximities = {}; // {creature: 5%, poop: 20%} 
	this.moving;
	// this.pooping;
};

// B.prototype.behaviour = function() {
	// setInterval(function() {
		// if (proximity.a < 5) { //collision - behavioural knowledge
		// 	this.stopMovingAbout();
		// 	// this.struggle();
		// } else {
		// 	// this.stopStruggling();
		// 	this.moveAbout();
		// } 
		// if (proximity.poop < 10) {
		// 	this.moveAbout();
		// }
	// }, 100)
// }

B.prototype.moveAbout = function() {
	this.moving = setInterval(this.move.bind(this), 100)
	// this.pooping = setInterval(this.poop.bind(this), 150)
}
B.prototype.stopMovingAbout = function() {
	clearInterval(this.moving)
	// clearInterval(this.pooping)
}

// B.prototype.struggle = function() {
// 	// this.struggling = setInterval(this.shake.bind(this), 100)
// }

// B.prototype.stopStruggling = function() {
// 	// clearInterval(this.struggling)
// }

B.prototype.move = function() { // Abstract to helper?
	console.log('move')
	var newCoords = this.newCoords({coords: {	now: 	this.coords,
																						prev: this.lastCoords},
																	percentScreenMove: 3,
																	bearingMaxVariation: Math.PI/2}); //function
	var timeToReach = Math.random() * 5000 + 1000

	bView.animateTo(this.id, newCoords, timeToReach); // bView Here? knowledge of? ?? ????????????????????????????????
	
	this.lastCoords = currentCoords;
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
