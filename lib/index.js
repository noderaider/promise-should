'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var promiseShould = function promiseShould() {
  var isPromise = function isPromise(p) {
    var swallowErrors = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    expect(p.then).toBeDefined();
    expect(p.catch).toBeDefined();
    //expect(p.finally).toBeDefined()
    if (swallowErrors) p.catch(function () {});
  };
  var isNotPromise = function isNotPromise(p) {
    expect(p.then).toBeUndefined();
    expect(p.catch).toBeUndefined();
    //expect(p.finally).toBeUndefined()
  };
  var shouldResolve = function shouldResolve(p) {
    return function (done) {
      p.then(function (result) {
        expect(result).toBeDefined();
        done();
      }).catch(function (err) {
        expect(err).toBeUndefined();
        done();
      });
    };
  };
  var shouldReject = function shouldReject(p) {
    return function (done) {
      p.then(function (result) {
        expect(result).toBeUndefined();
        done();
      }).catch(function (err) {
        expect(err).toBeDefined();
        done();
      });
    };
  };
  var is = { a: isPromise, not: { a: isNotPromise } };
  var should = { resolve: shouldResolve,
    reject: shouldReject
  };
  return { is: is, should: should };
};

exports.default = promiseShould();