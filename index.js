$(document).ready( function() {
	var b = new B()
	var $bShell = $(b.shell)
	$bShell.css({top: "20%", left: "20%"});
	$bShell.appendTo('#world');
	b.start()
})

