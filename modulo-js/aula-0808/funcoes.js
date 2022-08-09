function soma(n1, n2) {
    return n1 + n2;
}

// arrow function
const somar = (n1, n2) => {
    return n1 + n2;
}

const dizerBemVindo = (nome) => `Bem-vindo(a) ${nome}`;

const calcularPorcentagem = (valor, percentagem) => {
    return (valor * percentagem) / 100;
}

console.log(
    calcularPorcentagem(1_000_000, 5)
);