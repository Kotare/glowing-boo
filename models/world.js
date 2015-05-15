function World() {
	var b1 = new B('flim');
	var bView = new BView();
	var b2 = new B('flam');
	var allCreatures = [];
	var allPoops = [];
	allCreatures.push[b1];
	allCreatures.push[b2];
	var $bShell = $(b.shell);
	$bShell.css({top: "20%", left: "20%"});
	$bShell.appendTo('#world');

	setInterval(function() {
		// bCreatureProximity = senses.nearestProximityToClass(allCreatures, b)
		// bPpoopProximity = senses.closestOfClass(allPoops, b)
		// b.proximities = {creature: 5%, poop: 20%} 
		// // aCreatureProximity = senses.nearestProximityToClass(allCreatures, a.id)
		// // aPpoopProximity = senses.closestOfClass('creature', a.id)
		// // a.proximities = {creature: 5%, poop: 20%} 
		b1.moveAbout();
		// b2.moveAbout();
	}, 100)
}

