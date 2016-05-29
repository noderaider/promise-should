'use strict';

/** @test {promise} */
describe('promise', function () {
  var promise = require('../../lib').default;

  it('is an object', function () {
    return expect(promise).toEqual(jasmine.any(Object));
  });

  /** @test {promise#is} */
  describe('is =>', function () {
    it('is defined', function () {
      return expect(promise.should).toBeDefined();
    });
    it('is an object', function () {
      return expect(promise.should).toEqual(jasmine.any(Object));
    });
    /** @test {promise#is#a} */
    describe('a =>', function () {
      it('is defined', function () {
        return expect(promise.is.a).toBeDefined();
      });
      it('is a function', function () {
        return expect(promise.is.a).toEqual(jasmine.any(Function));
      });
    });

    /** @test {promise#is#not} */
    describe('not =>', function () {
      it('is defined', function () {
        return expect(promise.is.not).toBeDefined();
      });
      it('is an object', function () {
        return expect(promise.is.not).toEqual(jasmine.any(Object));
      });
      /** @test {promise#is#not#a} */
      describe('a =>', function () {
        it('is defined', function () {
          return expect(promise.is.not.a).toBeDefined();
        });
        it('is a function', function () {
          return expect(promise.is.not.a).toEqual(jasmine.any(Function));
        });
      });
    });
  });

  /** @test {promise#should} */
  describe('should =>', function () {
    it('is defined', function () {
      return expect(promise.should).toBeDefined();
    });
    it('is an object', function () {
      return expect(promise.should).toEqual(jasmine.any(Object));
    });

    /** @test {promise#should#resolve} */
    describe('resolve =>', function () {
      it('is defined', function () {
        return expect(promise.should.resolve).toBeDefined();
      });
      it('is a function', function () {
        return expect(promise.should.resolve).toEqual(jasmine.any(Function));
      });
    });

    /** @test {promise#should#reject} */
    describe('reject =>', function () {
      it('is defined', function () {
        return expect(promise.should.reject).toBeDefined();
      });
      it('is a function', function () {
        return expect(promise.should.reject).toEqual(jasmine.any(Function));
      });
    });

    /** @test {promise#should#not} */
    describe('not =>', function () {
      it('is defined', function () {
        return expect(promise.should.not).toBeDefined();
      });
      it('is an object', function () {
        return expect(promise.should.not).toEqual(jasmine.any(Object));
      });
      /** @test {promise#should#not#resolve} */
      describe('resolve =>', function () {
        it('is defined', function () {
          return expect(promise.should.not.resolve).toBeDefined();
        });
        it('is a function', function () {
          return expect(promise.should.not.resolve).toEqual(jasmine.any(Function));
        });
      });

      /** @test {promise#should#not#reject} */
      describe('reject =>', function () {
        it('is defined', function () {
          return expect(promise.should.not.reject).toBeDefined();
        });
        it('is a function', function () {
          return expect(promise.should.not.reject).toEqual(jasmine.any(Function));
        });
      });
    });
  });
});