function FizzBuzz(mostraNumeros) {
  for (let mostraNumeros = 1; mostraNumeros.length < 100; mostraNumeros++) {
    FizzBuzz(mostraNumeros)
  }
  if (mostraNumeros % 3 === 0 && mostraNumeros % 5 === 0) {
    return 'FizzBuzz'
  } else if (mostraNumeros % 5 === 0) {
    return 'Buzz'
  } else if (mostraNumeros % 3 === 0) {
    return 'Fizz'
  }
}

module.exports = FizzBuzz