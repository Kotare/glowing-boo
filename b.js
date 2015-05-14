function B() {
	this.name = 'flim'
	this.$shell = $('<circle id="' + this.name + '"">')
  
}

B.prototype.start() { // {x: 10, y:12}
}

B.prototype.moveTo(coords) { // {x: 10, y:12}
	$('#' + this.name).animate()
	
}