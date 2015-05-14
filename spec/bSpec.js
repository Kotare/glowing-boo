describe('B()', function() {
	var b
	beforeAll(function() {
		b = new B();
	})
	describe('initialize', function() {
		it('exists', function() {
			expect(b).not.toBe(null);
		})
		it('has a div shell', function() {
			expect(b.shell).toMatch('<div')
		})
		// it('has coordinates', function(){
		// 	expect(b.coordinates).toEqual({x: 10, y:12})
		// })
	});

	describe("move()", function() {
		it('', function(){

		})
	});
	
	describe("newCoords()", function() {
		it('', function(){

		})
	});

});
