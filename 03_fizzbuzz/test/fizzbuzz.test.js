const expect = require('chai').expect
const FizzBuzz = require('../src/fizzbuzz')

// Given - dado
// Should - deveria que isso...
// Then - entao espere que

describe('FizzBuzz é uma função', () => {
  it('Precisa ser um numero', () => {
    expect(1).to.be.equal(1)
  })

  it('Deve retornar Fizz se o numero for multiplo de 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz')
  })

  it('Deve retornar Buzz se o numero for multiplo de 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz')
  })
  it('Deve retornar FizzBuzz se for qualquer multiplo de 3 e 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz')
  })
})
