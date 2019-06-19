function FizzBuzz (mostraNumeros) {
  if (mostraNumeros % 3 === 0) {
    return 'Fizz'
  } else if (mostraNumeros % 5 === 0) {
    return ('Buzz')
  }

/*   if (mostraNumeros % 3 === 0 && mostraNumeros % 5 === 0) {
    return ('FizzBuzz')
  } else if (mostraNumeros % 3 === 0) {
    return ('Fizz')
  } 
  } else {
    return (mostraNumeros)
  }
}

for (let mostraNumeros = 1; mostraNumeros.length < 100; mostraNumeros++) {
  FizzBuzz(mostraNumeros) */
}

module.exports = FizzBuzz
