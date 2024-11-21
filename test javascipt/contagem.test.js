const contarAprovados = require('../javascript/contagem');

describe('Teste da Função Contar Aprovados', () => {
    test('Deve contar corretamente o número de alunos aprovados', () => {
        expect(contarAprovados(5, [60, 70, 40, 50, 30])).toBe(3); // Aprovados: 60, 70, 50
    });

    test('Deve lançar erro se o número de notas não corresponder ao número de alunos', () => {
        expect(() => contarAprovados(3, [60, 70])).toThrow("Você deve fornecer exatamente 3 notas.");
    });
});
