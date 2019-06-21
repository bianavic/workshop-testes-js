function quantidadeVogais () {
  let palavra = 0
  if (palavra === '') {
    return 'Por favor, digite uma palavra'
  }
  for (let palavra = 0; palavra < palavra.length; palavra++) { palavra++ }

  if
  (palavra === 'a' || palavra === 'e' || palavra === 'i' || palavra === 'o' || palavra === 'u' ||
  palavra === 'A' || palavra === 'E' || palavra === 'I' || palavra === 'O' || palavra === 'U') { palavra++ }
return "Aeiou são vogais"
}

module.exports = quantidadeVogais
