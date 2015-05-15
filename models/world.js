function World() {
	var bView = new BView();
	var b1 = new B('flim', {x:50, y:50});
	var b2 = new B('flam');
	var allCreatures = [];
	var allPoops = [];
	allCreatures.push[b1];
	allCreatures.push[b2];
	var $b1Shell = $(b1.shell);
	$b1Shell.css({top: "50%", left: "50%"});
	$b1Shell.appendTo('#world');
	b1.moveAbout();

	// setInterval(function() {
	// 	// bCreatureProximity = senses.nearestProximityToClass(allCreatures, b)
	// 	// bPpoopProximity = senses.closestOfClass(allPoops, b)
	// 	// b.proximities = {creature: 5%, poop: 20%} 
	// 	// // aCreatureProximity = senses.nearestProximityToClass(allCreatures, a.id)
	// 	// // aPpoopProximity = senses.closestOfClass('creature', a.id)
	// 	// // a.proximities = {creature: 5%, poop: 20%} 
	// 	// b2.moveAbout();
	// }, 500);
}

