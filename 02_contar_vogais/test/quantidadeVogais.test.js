const expect = require('chai').expect
const quantidadeVogais = require('../src/quantidadeVogais')

describe('Retornar quantidade de vogais', () => {
  it('Quantidade de vogais deve ser uma funcao', () => {
    expect(quantidadeVogais).to.be.a('function')
  })
})
