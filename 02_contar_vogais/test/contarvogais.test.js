const chai = require('chai'),
  expect = chai.expect,
  should = chai.should()

const contarVogais = require('../src/contarVogais')
const vogais = ['a', 'e', 'i', 'o', 'u']

describe('Contar vogais', () => {
  it('São vogais', () => {
      expect(contarVogais).to.be.a('function')
  })
    it('Aceita string', () => {
    })
    it('retornar erro', () => {
        expect(contarVogais()).not.to.be.an('error')
    })
    it('Difere maiusculas de minusculas' () => {
        // if vogais === lowerCase || vogais === upperCase
        expect(contarVogais.toLowerCase()).
    })
})

/* = is a function();
vogais = ['a', 'e', 'i', 'o', 'u'];
expect vogais toString.be.a('string')
it('Should accept strings' >= vogais.length(2))
it('should return error if' vogais !== String)
it('should be able to count' vogais) */
