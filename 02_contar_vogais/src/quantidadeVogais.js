function quantidadeVogais () {
  let palavra = 0

  for (let palavra = 0; palavra < palavra.length; palavra++) { palavra++ }

  if (palavra === '') {
    return 'Por favor, digite uma palavra'
  } else {
    (palavra === 'a' || palavra === 'e' || palavra === 'i' || palavra === 'o' || palavra === 'u' ||
  palavra === 'A' || palavra === 'E' || palavra === 'I' || palavra === 'O' || palavra === 'U')
    palavra++
  }
}

module.exports = quantidadeVogais
