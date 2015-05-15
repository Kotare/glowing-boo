function BView() {

}

BView.prototype.animateTo = function(id, coords, speed) {
	$(id).animate({top: coords.y + '%', left: coords.x + '%'}, speed)
}