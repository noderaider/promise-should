const shouldPromise = () => {
  const isA = p => {
    expect(p.then).toBeDefined()
    expect(p.catch).toBeDefined()
    expect(p.finally).toBeDefined()
  }
  const isNotA = p => {
    expect(p.then).toBeUndefined()
    expect(p.catch).toBeUndefined()
    expect(p.finally).toBeUndefined()
  }
  const shouldResolve = done => result => {
    console.warn('RESOLVE =>', typeof result, result)
    expect(result).toEqual(jasmine.any(Object))
    done()
  }
  const shouldReject = done => err => {
    console.warn('REJECT =>', typeof err, err)
    expect(err).toEqual(jasmine.any(Object))
    done()
  }
  const shouldNotResolve = done => result => {
    console.warn('RESOLVE UNEXPECTED =>', typeof result, result)
    expect(result).toBeUndefined()
    done()
  }
  const shouldNotReject = done => err => {
    console.warn('REJECT UNEXPECTED =>', typeof err, err)
    expect(err).toBeUndefined()
    done()
  }
  const is = { a: isA, not: { a: isNotA }}
  const should =  { resolve: shouldResolve
                  , reject: shouldReject
                  , not:  { resolve: shouldNotResolve
                          , reject: shouldNotReject
                          }
                  }
  return { is, should }
}

export default shouldPromise()
