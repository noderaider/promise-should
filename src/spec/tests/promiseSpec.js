import Promise from 'bluebird'

/** @test {promise} */
describe('promise', () => {
  const promise = require('../../lib').default
  const createResolve = () => new Promise((resolve, reject) => resolve('resolved'))
  const createReject = () => new Promise((resolve, reject) => reject(new Error('rejected')))

  it('is an object', () => expect(promise).toEqual(jasmine.any(Object)))

  /** @test {promise#is} */
  describe('is =>', () => {
    it('is defined', () => expect(promise.should).toBeDefined())
    it('is an object', () => expect(promise.should).toEqual(jasmine.any(Object)))
    /** @test {promise#is#a} */
    describe('a =>', () => {
      it('is defined', () => expect(promise.is.a).toBeDefined())
      it('is a function', () => expect(promise.is.a).toEqual(jasmine.any(Function)))
    })

    /** @test {promise#is#not} */
    describe('not =>', () => {
      it('be defined', () => expect(promise.is.not).toBeDefined())
      it('be an object', () => expect(promise.is.not).toEqual(jasmine.any(Object)))
      /** @test {promise#is#not#a} */
      describe('a =>', () => {
        it('be defined', () => expect(promise.is.not.a).toBeDefined())
        it('be a function', () => expect(promise.is.not.a).toEqual(jasmine.any(Function)))
      })
    })
  })

  /** @test {promise#should} */
  describe('should =>', () => {
    it('be defined', () => expect(promise.should).toBeDefined())
    it('be an object', () => expect(promise.should).toEqual(jasmine.any(Object)))

    /** @test {promise#should#resolve} */
    describe('resolve =>', () => {
      it('be defined', () => expect(promise.should.resolve).toBeDefined())
      describe('is a function', () => {
        it('type', () => expect(promise.should.resolve).toEqual(jasmine.any(Function)))
        describe('that =>', () => {
          it('returns a function for resolving', () => expect(promise.should.resolve(createResolve())).toEqual(jasmine.any(Function)))
          describe('that =>', () => {
            it('returns undefined for resolving', () => expect(promise.should.resolve(createResolve())(() => {})).toBeUndefined())
          })
        })
      })
    })

    /** @test {promise#should#reject} */
    describe('reject =>', () => {
      it('be defined', () => expect(promise.should.reject).toBeDefined())
      describe('is a function', () => {
        it('type', () => expect(promise.should.reject).toEqual(jasmine.any(Function)))
        describe('that =>', () => {
          it('returns a function for rejecting', () => expect(promise.should.reject(createReject())).toEqual(jasmine.any(Function)))
          describe('that =>', () => {
            it('returns undefined for rejecting', () => expect(promise.should.reject(createReject())(() => {})).toBeUndefined())
          })
        })
      })
    })
  })

})
