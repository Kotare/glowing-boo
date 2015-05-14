function B() {
	this.name = 'flim';
	this.shell = '<div id="' + this.name + '""></div>';
};

B.prototype.start = function() { // 
	// loop
		if 
			mover(7)
		else
			balska()
		end

		this.animateTo({x: 1, y: 1}, 2000)
	// 
}

B.prototype.animateTo = function(coords, speed) { // {x: 10, y:12}
	$('#' + this.name).animate({top: coords.y + '%', left: coords.x + '%'}, speed)
}