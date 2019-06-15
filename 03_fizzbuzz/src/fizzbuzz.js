function fizzbuzz (numero) {
  if (typeof numero !== 'number') {
    return new Error('Você é sacana, digite um numero pô!')
  }
  /*
    if (numero % 3 == 0 && numero % 5 == 0) {
        return 'FizzBuzz'
    } */
  if (numero % 3 === 0) {
    return 'Fizz'
  }

  if (numero % 5 === 0) {
    return 'Buzz'
  }
  return numero
}

module.export = fizzbuzz
