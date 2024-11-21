const somarNumeros = require('../javascript/somaNumeros');

describe('Teste da Função Somar Números', () => {
    test('Deve retornar a soma correta para uma lista de números válida', () => {
        expect(somarNumeros(3, [1, 2, 3])).toBe(6); // Soma 1 + 2 + 3 = 6
    });

    test('Deve lançar erro se o número de itens na lista não corresponder a `n`', () => {
        expect(() => somarNumeros(3, [1, 2])).toThrow("Você deve fornecer exatamente 3 números.");
    });
});
