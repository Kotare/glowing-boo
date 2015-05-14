$(document).ready( function() {
	// var b = new B()
	// var $bShell = $(b.shell)
	// $bShell.css({top: "20%", left: "20%"});
	// $bShell.appendTo('#world');
	// b.start()

  var a = new A('a');
  var $aShell = $(a.shell)
  $aShell.css({top: "20%", left: "20%"});
  $aShell.appendTo('#world');
  a.start();

  var b = new A('b');
  var $bShell = $(b.shell)
  $bShell.css({top: "40%", left: "40%"});
  $bShell.appendTo('#world');
  b.start();

})
