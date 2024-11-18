# Funções em JavaScript: Cálculo de MDC e Verificação de Número Primo

Este documento detalha as implementações de duas funções: **cálculo do Máximo Divisor Comum (MDC)** e **verificação de números primos**. Ambas as funções foram modularizadas e testadas usando Jest, uma biblioteca de testes para JavaScript.

---

## 1. Cálculo do Máximo Divisor Comum (MDC)

### Código: `mdc.js`

```javascript
function calcularMDC(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Os valores devem ser números válidos.");
  }

  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }

  return Math.abs(a); // Garante que o resultado seja positivo
}

module.exports = calcularMDC;
```

#### Explicação:
- A função utiliza o **Algoritmo de Euclides** para calcular o MDC:
  1. Divide o maior número pelo menor.
  2. Substitui o maior número pelo menor e o menor pelo resto da divisão.
  3. Repete o processo até que o resto seja `0`. O último divisor é o MDC.
- Inclui uma validação para garantir que a entrada seja um número válido.
- Retorna o resultado absoluto com `Math.abs`, pois o MDC é sempre positivo.

---

### Testes: `mdc.test.js`

```javascript
const calcularMDC = require('../funcoes/mdc');

test('Cálculo do MDC de 12 e 15 (resultado esperado: 3)', () => {
  expect(calcularMDC(12, 15)).toBe(3);
});

test('Cálculo do MDC de 100 e 25 (resultado esperado: 25)', () => {
  expect(calcularMDC(100, 25)).toBe(25);
});

test('Cálculo do MDC com números negativos (-12 e -15, resultado esperado: 3)', () => {
  expect(calcularMDC(-12, -15)).toBe(3);
});

test('Erro ao calcular MDC com entrada inválida (exemplo: "a" e 5)', () => {
  expect(() => calcularMDC("a", 5)).toThrow("Os valores devem ser números válidos.");
});
```

#### Explicação dos testes:
1. **Casos básicos**:
   - Calcula o MDC de dois números positivos.
2. **Casos com números negativos**:
   - Verifica se o resultado é positivo, mesmo para entradas negativas.
3. **Entradas inválidas**:
   - Garante que a função lança um erro ao receber valores não numéricos.

---

## 2. Verificação de Número Primo

### Código: `numeroprimo.js`

```javascript
function verificarPrimo(n) {
  if (isNaN(n)) {
    throw new Error("O valor deve ser um número válido.");
  }

  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = verificarPrimo;
```

#### Explicação:
- Um número primo é aquele que só pode ser dividido por `1` e por ele mesmo.
- Validações:
  1. Verifica se a entrada é um número válido.
  2. Números menores ou iguais a `1` não são primos.
- Otimização:
  - O loop vai até a raiz quadrada de `n` para reduzir o número de iterações. Divisores maiores que a raiz de `n` já teriam seus pares menores verificados antes.

---

### Testes: `numeroprimo.test.js`

```javascript
const verificarPrimo = require('../funcoes/numeroprimo');

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
```

#### Explicação dos testes:
1. **Casos básicos**:
   - Verifica números primos simples como `2` e `13`.
2. **Casos não primos**:
   - Inclui números como `4`, `1` e números negativos.
3. **Entradas inválidas**:
   - Garante que a função lança um erro para valores como `"abc"`.

---

## Como Executar os Testes

1. Instale o Jest:
   ```bash
   npm install jest --save-dev
   ```

2. Adicione o script de teste ao `package.json`:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

3. Execute os testes no terminal:
   ```bash
   npm test
   ```

---

## Estrutura do Projeto

```
atividade4_ambientes-main/
├── funcoes/
│   ├── mdc.js
│   ├── numeroprimo.js
├── tests/
│   ├── mdc.test.js
│   ├── numeroprimo.test.js
├── package.json
```
