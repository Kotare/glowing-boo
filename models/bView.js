function BView() {

}

BView.prototype.animateTo = function(coords, speed) {
	$(this.id).animate({top: coords.y + '%', left: coords.x + '%'}, speed)
}