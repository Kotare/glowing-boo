$(document).ready( function() {
	var b = new B('flim')
	var $bShell = $(b.shell)
	var world = new World()
	world()
	$bShell.css({top: "20%", left: "20%"});
	$bShell.appendTo('#world');
	b.start()

})