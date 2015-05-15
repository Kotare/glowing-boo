function Senses() {
}

Senses.prototype.nearestProximityToClass = function(classMembers, subject) {
	var minPercentDistance = 500; // set high to handle edge case

	for (var object of classMembers) {
		var percentDistance = this.proximity(object.coords, subject.coords);
		if (minPercentDistance > percentDistance){
			minPercentDistance = percentDistance;
		}
	}
	return minPercentDistance;
}

Senses.prototype.proximity(objectCoords, subjectCoords) { // {x: 20, y: 40}
	
}