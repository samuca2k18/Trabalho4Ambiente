const gerarFibonacci = require('../javascript/gerarFibonacci');

describe('Teste da Função Gerar Fibonacci', () => {
    test('Deve gerar corretamente a sequência de Fibonacci com 5 termos', () => {
        expect(gerarFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test('Deve lançar erro se o número de termos for inválido', () => {
        expect(() => gerarFibonacci(-1)).toThrow("O número de termos deve ser maior que zero.");
    });
});
