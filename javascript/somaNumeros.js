function somaNumeros(n, numeros) {
    if (isNaN(n) || n <= 0) {
        throw new Error("A quantidade de números deve ser um número maior que zero.");
    }

    if (!Array.isArray(numeros) || numeros.length !== n) {
        throw new Error("Você deve fornecer exatamente " + n + " números.");
    }

    let soma = 0;
    for (let i = 0; i < n; i++) {
        if (isNaN(numeros[i])) {
            throw new Error("Todos os valores devem ser números.");
        }
        soma += numeros[i];
    }

    return soma;
}

module.exports = somaNumeros;
