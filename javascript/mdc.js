function calcularMDC(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Os valores devem ser números válidos.");
    }
  
    while (b !== 0) {
      let resto = a % b;
      a = b;
      b = resto;
    }
  
    return Math.abs(a); // Garante que o resultado seja positivo
  }
  
  module.exports = calcularMDC;
  