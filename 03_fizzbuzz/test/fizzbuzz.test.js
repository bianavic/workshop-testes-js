const expect = require('chai').expect
const fizzbuzz = require('../src/fizzbuzz')
fizzbuzz = function()

// Given - dado
// Should - deveria que isso...
// Then - entao espere que
describe('mostre números de 1 a 100', () => {
it('multiplo de 3 ou de 5', () => {
   expect(fizzbuzz).to.be.a('function')
})

/* describe('Se o numero nao for multiplo de 3 ou de 5, ele deve retornar ele', () => {
            fizzbuzz(7)
            it('deve retornar 7 quando passado 7', () => {
                const resultado = fizzbuzz(7)
                // resultado === 7 ?
                expected(resultado).to.be.equal(7)
            })

            it('deve retornar 8 quando passado 8', () => {
                const resultado = fizzbuzz(8)
                // resultado === 8 ?
                expected(resultado).to.be.equal(8)
            })

            it('Se nao for multiplo de 3 ou de 5, ele deve retornar ele mesmo', () => {
                const resultado = fizzbuzz(3)
                expected(resultado).not.equal(3)
            })

            it('Se for multiplo de 5 retorna Buzz', () => {
                const resultado = fizzbuzz(10)
                // resultado === 5 ?
                expected(resultado).to.be.equal('Buzz')
            })

            it('Se for multiplo de 3 ou de 5, ele deve retornar ele mesmo', () => {
                const resultado = fizzbuzz(5)
                expected(resultado).to.be.equal('FizzBuzz')
            })

            it('Se o usuario for sacana e digitar um string', () => {
                const resultado = fizzbuzz('uma string')
                expected(resultado).to.be.equal('error')
            })
        }) */
