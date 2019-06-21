function quantidadeVogais () {
  for (let palavra = 0; palavra < palavra.length; palavra++) {
    if (palavra === 'a' || palavra === 'e' || palavra === 'i' || palavra === 'o' || palavra === 'u' ||
            palavra === 'A' || palavra === 'E' || palavra === 'I' || palavra === 'O' || palavra === 'U') {
      return palavra++
    } else if (palavra === '') {
      return 'Por favor, digite uma palavra'
    }
  }
}
exports.quantidadeVogais = quantidadeVogais
