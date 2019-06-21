const expect = require('chai').expect
const quantidadeVogais = require('../src/quantidadeVogais')

describe('quantidadeVogais é uma função', () => {
  it('Verifica se aeiou são vogais', () => {
    expect(quantidadeVogais('Ola Mundo')).to.equal(['a', 'e', 'i', 'o', 'u'])
  })

  it('aceita strings com uma ou mais palavras', () => {

  })

  it('Retornar erro caso o parametro da funcao não seja uma string', () => {
    expect(quantidadeVogais === '').Throw('error')
  })

  it('deve ser capaz de contar vogais maiúsculas e minúsculas', () => {
  })
})
