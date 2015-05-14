describe ("A()", function() {
  beforeAll(function() {
    this.a = new A();
  })

  describe('height', function() {
    it('is a number', function() {
      expect(this.a.height).toEqual(jasmine.any(Number));
    });
  });

  describe('width', function() {
    it('is a number', function() {
      expect(this.a.width).toEqual(jasmine.any(Number));
    });
  });

  describe('radius', function() {
    it('is a number', function() {
      expect(this.a.radius).toEqual(jasmine.any(Number));
    });
  });

  describe('cx', function() {
    it('is a number', function() {
      expect(this.a.cx).toEqual(jasmine.any(Number));
    });
  });


  describe('cy', function() {
    it('is a number', function() {
      expect(this.a.cy).toEqual(jasmine.any(Number));
    });
  });

  describe('stroke', function() {
    it('is a string', function() {
      expect(this.a.stroke).toEqual(jasmine.any(String));
    });
  });

    describe('stroke-width', function() {
    it('is a number', function() {
      expect(this.a.stroke_width).toEqual(jasmine.any(Number));
    });
  });

  describe('fill', function() {
    it('is a string', function() {
      expect(this.a.fill).toEqual(jasmine.any(String));
    });
  });
});