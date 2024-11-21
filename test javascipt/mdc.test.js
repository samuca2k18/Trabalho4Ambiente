const calcularMDC = require('../javascript/mdc');

test('Cálculo do MDC de 12 e 15 (resultado esperado: 3)', () => {
  expect(calcularMDC(12, 15)).toBe(3);
});

test('Cálculo do MDC de 100 e 25 (resultado esperado: 25)', () => {
  expect(calcularMDC(100, 25)).toBe(25);
});

test('Cálculo do MDC de 81 e 27 (resultado esperado: 27)', () => {
  expect(calcularMDC(81, 27)).toBe(27);
});

test('Cálculo do MDC com números negativos (-12 e -15, resultado esperado: 3)', () => {
  expect(calcularMDC(-12, -15)).toBe(3);
});

test('Erro ao calcular MDC com entrada inválida (exemplo: "a" e 5)', () => {
  expect(() => calcularMDC("a", 5)).toThrow("Os valores devem ser números válidos.");
});
