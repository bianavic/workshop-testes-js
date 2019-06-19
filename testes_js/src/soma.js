function soma(a, b) {
  if (arguments.length > 2) {
    return new Error('voce deve informar 2 numeros e nao pode ser letras')
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return new Error('você deve inserir numeros')
  }

  return a + b
}
module.exports = soma