function contagem(n, notas) {
    if (isNaN(n) || n <= 0) {
        throw new Error("O número de alunos deve ser maior que zero.");
    }

    if (!Array.isArray(notas) || notas.length !== n) {
        throw new Error("Você deve fornecer exatamente " + n + " notas.");
    }

    let contador = 0;

    for (let nota of notas) {
        if (isNaN(nota)) {
            throw new Error("Todas as notas devem ser números.");
        }
        if (nota >= 50) {
            contador++;
        }
    }

    return contador;
}

module.exports = contagem;
