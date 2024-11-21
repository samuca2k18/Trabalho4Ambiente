function quicksort(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("A entrada deve ser um array de números.");
    }

    if (arr.some(isNaN)) {
        throw new Error("Todos os elementos do array devem ser números.");
    }

    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const esquerda = [];
    const direita = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            esquerda.push(arr[i]);
        } else {
            direita.push(arr[i]);
        }
    }

    return quicksort(esquerda).concat([pivot], quicksort(direita));
}

module.exports = quicksort;
