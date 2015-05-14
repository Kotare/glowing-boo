describe('B()', function() {
	beforeAll(function() {
		var b = new B({x: 10, y:12});
	})
	describe('initialize', function() {
		it('exists', function() {
			expect(b).not.toBe(null);
		})
		it('has a shell', function() {
			expect(b.shell).toEqual(<)
		})
		it('has coordinates', function(){
			expect(b.coordinates).toEqual({x: 10, y:12})
		})
	});

	describe("move()", function() {
		it('', function(){
			
		})
	});
});