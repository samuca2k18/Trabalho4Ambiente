const quicksort = require('../javascript/quicksort');

describe('Teste da Função Quicksort', () => {
    test('Deve ordenar um array de números corretamente', () => {
        expect(quicksort([5, 2, 9, 1, 5, 6])).toEqual([1, 2, 5, 5, 6, 9]);
    });

    test('Deve lançar erro se a entrada não for um array', () => {
        expect(() => quicksort("não é um array")).toThrow("A entrada deve ser um array de números.");
    });
});
