$(document).ready( function() {
	var a = new A()
	var b = new B()
	a.$body.appendTo('svg')
	b.$body.appendTo('svg')
	a.start
	b.start
})

