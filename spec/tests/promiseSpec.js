'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {promise} */
describe('promise', function () {
  var promise = require('../../lib').default;
  var createResolve = function createResolve() {
    return new _bluebird2.default(function (resolve, reject) {
      return resolve('resolved');
    });
  };
  var createReject = function createReject() {
    return new _bluebird2.default(function (resolve, reject) {
      return reject(new Error('rejected'));
    });
  };

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
      it('be defined', function () {
        return expect(promise.is.not).toBeDefined();
      });
      it('be an object', function () {
        return expect(promise.is.not).toEqual(jasmine.any(Object));
      });
      /** @test {promise#is#not#a} */
      describe('a =>', function () {
        it('be defined', function () {
          return expect(promise.is.not.a).toBeDefined();
        });
        it('be a function', function () {
          return expect(promise.is.not.a).toEqual(jasmine.any(Function));
        });
      });
    });
  });

  /** @test {promise#should} */
  describe('should =>', function () {
    it('be defined', function () {
      return expect(promise.should).toBeDefined();
    });
    it('be an object', function () {
      return expect(promise.should).toEqual(jasmine.any(Object));
    });

    /** @test {promise#should#resolve} */
    describe('resolve =>', function () {
      it('be defined', function () {
        return expect(promise.should.resolve).toBeDefined();
      });
      describe('is a function', function () {
        it('type', function () {
          return expect(promise.should.resolve).toEqual(jasmine.any(Function));
        });
        describe('that =>', function () {
          it('returns a function for resolving', function () {
            return expect(promise.should.resolve(createResolve())).toEqual(jasmine.any(Function));
          });
          describe('that =>', function () {
            it('returns undefined for resolving', function () {
              return expect(promise.should.resolve(createResolve())(function () {})).toBeUndefined();
            });
          });
        });
      });
    });

    /** @test {promise#should#reject} */
    describe('reject =>', function () {
      it('be defined', function () {
        return expect(promise.should.reject).toBeDefined();
      });
      describe('is a function', function () {
        it('type', function () {
          return expect(promise.should.reject).toEqual(jasmine.any(Function));
        });
        describe('that =>', function () {
          it('returns a function for rejecting', function () {
            return expect(promise.should.reject(createReject())).toEqual(jasmine.any(Function));
          });
          describe('that =>', function () {
            it('returns undefined for rejecting', function () {
              return expect(promise.should.reject(createReject())(function () {})).toBeUndefined();
            });
          });
        });
      });
    });
  });
});