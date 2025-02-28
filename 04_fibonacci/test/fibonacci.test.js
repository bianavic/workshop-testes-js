const expect = require('chai').expect;
const fibonacci = require('../fibonacci')

describe('Se for informado 5 a função retorna 1,1,2,3,5', () => {
  
  it('Deve retornar 1 quando recebe 1', () => {
    const resultado = fibonacci(1)
    expect(resultado).to.be.equal('1')
  })

  it('Deve retornar '1,1' quando recebe 2', () => {
    const resultado = fibonacci(2)
    expect(resultado).to.be.equal('1,1')
  })
  it('Deve retornar '1, 1, 2, 3' quando recebe 3', () => {
    const resultado = fibonacci(3)
    expect(resultado).to.be.equal('1, 1, 2, 3')
  })
})
