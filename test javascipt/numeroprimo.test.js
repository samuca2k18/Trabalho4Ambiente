const verificarPrimo = require('../javascript/numeroprimo');

test('Número primo: 2 (deve retornar true)', () => {
  expect(verificarPrimo(2)).toBe(true);
});

test('Número primo: 13 (deve retornar true)', () => {
  expect(verificarPrimo(13)).toBe(true);
});

test('Número não primo: 4 (deve retornar false)', () => {
  expect(verificarPrimo(4)).toBe(false);
});

test('Número não primo: 1 (deve retornar false)', () => {
  expect(verificarPrimo(1)).toBe(false);
});

test('Número negativo -7 (deve retornar false)', () => {
  expect(verificarPrimo(-7)).toBe(false);
});

test('Erro ao verificar número primo com entrada inválida ("abc")', () => {
  expect(() => verificarPrimo("abc")).toThrow("O valor deve ser um número válido.");
});
