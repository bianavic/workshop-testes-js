/* const meias = quantidade
const cores = cor

function parDeMeias (quantidade, cor) {
  let quantidadeDeMeias = 0
  let totalMeias = {}

  for (let i = 0; i < quantidade; i++) {
    if (cor[i] in totalMeias) {
      totalMeias[cor[i]] = totalMeias[cor[i]] + 1
    } else {
      totalMeias[cor[i]] = 1
    }
  }

  for (let key in totalMeias) {
    if (totalMeias.hasOwnProperty(key)) {
      quantidade = quantidade + ~~(totalMeias[key])
    }
  }
  return quantidadeDeMeias
}
 */