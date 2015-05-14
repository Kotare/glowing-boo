function B() {
	this.name = 'flim';
	this.shell = '<div id="' + this.name + '""></div>';
};

B.prototype.start() { // {x: 10, y:12}
	
}

B.prototype.animateTo(coords, speed) { // {x: 10, y:12}
	$('#' + this.name).animate({top: coords.y + '%', left: coords.x + '%'}, speed)
}