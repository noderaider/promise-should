import Promise from 'bluebird'

const promiseShould = () => {
  const isPromise = (p, swallowErrors = true) => {
    expect(p.then).toBeDefined()
    expect(p.catch).toBeDefined()
    //expect(p.finally).toBeDefined()
    if(swallowErrors)
      p.catch(() => {})
  }
  const isNotPromise = p => {
    expect(p.then).toBeUndefined()
    expect(p.catch).toBeUndefined()
    //expect(p.finally).toBeUndefined()
  }
  const shouldResolve = p => done => {
    p.then(result => {
      expect(result).toBeDefined()
      done()
    }).catch(err => {
      expect(err).toBeUndefined()
      done()
    })
  }
  const shouldReject = p => done => {
    p.then(result => {
      expect(result).toBeUndefined()
      done()
    }).catch(err => {
      expect(err).toBeDefined()
      done()
    })
  }
  const is = { a: isPromise, not: { a: isNotPromise }}
  const should =  { resolve: shouldResolve
                  , reject: shouldReject
                  }
  return { is, should }
}

export default promiseShould()
