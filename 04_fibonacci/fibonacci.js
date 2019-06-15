const fibonacci = (numero) => {
  if (numero === '1' || numero === '2') {
    return '1'
  } else {
    return fibonacci(numero - 1) + fibonacci(numero - 2) 
}
}
