function gerarFibonacci(n) {
    if (isNaN(n) || n <= 0) {
        throw new Error("O número de termos deve ser maior que zero.");
    }

    const sequencia = [];
    let termo1 = 0, termo2 = 1;

    if (n >= 1) sequencia.push(termo1);
    if (n >= 2) sequencia.push(termo2);

    for (let i = 3; i <= n; i++) {
        const termo3 = termo1 + termo2;
        sequencia.push(termo3);
        termo1 = termo2;
        termo2 = termo3;
    }

    return sequencia;
}

module.exports = gerarFibonacci;
