function verificarPrimo(n) {
    if (isNaN(n)) {
      throw new Error("O valor deve ser um número válido.");
    }
  
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  module.exports = verificarPrimo;
  