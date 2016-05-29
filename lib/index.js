'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var shouldPromise = function shouldPromise() {
  var isA = function isA(p) {
    expect(p.then).toBeDefined();
    expect(p.catch).toBeDefined();
    expect(p.finally).toBeDefined();
  };
  var isNotA = function isNotA(p) {
    expect(p.then).toBeUndefined();
    expect(p.catch).toBeUndefined();
    expect(p.finally).toBeUndefined();
  };
  var shouldResolve = function shouldResolve(done) {
    return function (result) {
      console.warn('RESOLVE =>', typeof result === 'undefined' ? 'undefined' : _typeof(result), result);
      expect(result).toEqual(jasmine.any(Object));
      done();
    };
  };
  var shouldReject = function shouldReject(done) {
    return function (err) {
      console.warn('REJECT =>', typeof err === 'undefined' ? 'undefined' : _typeof(err), err);
      expect(err).toEqual(jasmine.any(Object));
      done();
    };
  };
  var shouldNotResolve = function shouldNotResolve(done) {
    return function (result) {
      console.warn('RESOLVE UNEXPECTED =>', typeof result === 'undefined' ? 'undefined' : _typeof(result), result);
      expect(result).toBeUndefined();
      done();
    };
  };
  var shouldNotReject = function shouldNotReject(done) {
    return function (err) {
      console.warn('REJECT UNEXPECTED =>', typeof err === 'undefined' ? 'undefined' : _typeof(err), err);
      expect(err).toBeUndefined();
      done();
    };
  };
  var is = { a: isA, not: { a: isNotA } };
  var should = { resolve: shouldResolve,
    reject: shouldReject,
    not: { resolve: shouldNotResolve,
      reject: shouldNotReject
    }
  };
  return { is: is, should: should };
};

exports.default = shouldPromise();