let bebidas = [
    {
        nome: 'Heineken',
        descricao: 'longneck 330ml',
        quantidade: 12
    },
    {
        nome: 'Jack Daniels',
        descricao: 'garrafa 1l',
        quantidade: 6
    },
    {
        nome: 'OldParr',
        descricao: 'garrafa 750ml',
        quantidade: 12
    },
    {
        nome: 'Campari',
        descricao: 'garrafa 1l',
        quantidade: 10
    },
    {
        nome: 'Slova',
        descricao: 'garrafa 1l',
        quantidade: 7
    },
    {
        nome: 'Vinho São Braz',
        descricao: '1l',
        quantidade: 7
    },
    {
        nome: 'Run Montilla',
        descricao: '1l',
        quantidade: 10
    },
    {
        nome: 'Kaiser',
        descricao: 'lata 350ml',
        quantidade: 20
    },
    {
        nome: 'Glacial',
        descricao: 'lata 350ml',
        quantidade: 48
    },
];

const TABELA = document.getElementById('tabela');

bebidas.forEach(function (cadaBebida) {
    TABELA.innerHTML += `
        <tr>
            <td>${cadaBebida.nome}</td>
            <td>${cadaBebida.descricao}</td>
            <td>${cadaBebida.quantidade}</td>
            <td>
                <button class="btn btn-warning btn-sm">Editar</button>
                <button class="btn btn-danger btn-sm">Excluir</button>
            </td>
        </tr>
    `;
});

const BUSCA = document.getElementById('busca');

BUSCA.addEventListener('keyup', function () {
    for (const i in TABELA.children) {
        let cadaLinha = TABELA.children[i];

        if (cadaLinha.innerHTML.toLowerCase().includes(BUSCA.value.toLowerCase())) {
            cadaLinha.style.display = '';
        } else {
            cadaLinha.style.display = 'none';
        }
    };
});