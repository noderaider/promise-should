/** @test {promise} */
describe('promise', () => {
  const promise = require('../../lib').default

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
      it('is defined', () => expect(promise.is.not).toBeDefined())
      it('is an object', () => expect(promise.is.not).toEqual(jasmine.any(Object)))
      /** @test {promise#is#not#a} */
      describe('a =>', () => {
        it('is defined', () => expect(promise.is.not.a).toBeDefined())
        it('is a function', () => expect(promise.is.not.a).toEqual(jasmine.any(Function)))
      })
    })
  })

  /** @test {promise#should} */
  describe('should =>', () => {
    it('is defined', () => expect(promise.should).toBeDefined())
    it('is an object', () => expect(promise.should).toEqual(jasmine.any(Object)))

    /** @test {promise#should#resolve} */
    describe('resolve =>', () => {
      it('is defined', () => expect(promise.should.resolve).toBeDefined())
      it('is a function', () => expect(promise.should.resolve).toEqual(jasmine.any(Function)))
    })

    /** @test {promise#should#reject} */
    describe('reject =>', () => {
      it('is defined', () => expect(promise.should.reject).toBeDefined())
      it('is a function', () => expect(promise.should.reject).toEqual(jasmine.any(Function)))
    })

    /** @test {promise#should#not} */
    describe('not =>', () => {
      it('is defined', () => expect(promise.should.not).toBeDefined())
      it('is an object', () => expect(promise.should.not).toEqual(jasmine.any(Object)))
      /** @test {promise#should#not#resolve} */
      describe('resolve =>', () => {
        it('is defined', () => expect(promise.should.not.resolve).toBeDefined())
        it('is a function', () => expect(promise.should.not.resolve).toEqual(jasmine.any(Function)))
      })

      /** @test {promise#should#not#reject} */
      describe('reject =>', () => {
        it('is defined', () => expect(promise.should.not.reject).toBeDefined())
        it('is a function', () => expect(promise.should.not.reject).toEqual(jasmine.any(Function)))
      })
    })
  })

})
