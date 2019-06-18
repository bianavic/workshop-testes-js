const expect = require('chai').expect
const DiaDaSemana = require('../src/diaDaSemana')

describe('Localize e retorne o dia da semana para uma data aleatoria', () => {
  it('Deve retornar MM /DD / AAAA', () => {
    it('10/11/2009 deve ser domingo', () => {
      expect('10/11/2009').to.be.equal('domingo')
    })
  })
})
/*
data no formato MM / DD / AAAA
localize e retorne o dia da semana para essa data.
data 12/07/2016 é uma quarta-feira
Sugestão de teste:
Entrada de Amostra:
10/11/2009
11/10/2010

Amostra de Saída:
domingo
quarta-feira

restricao: É garantido que a entrada consiste apenas de datas válidas.
A função deve retornar uma string indicando o dia da semana correspondente à data
*/
