const TABELA_ALUNOS = document.getElementById('tabela-alunos');
// const TABELA_ALUNOS = document.querySelector('#tabela-alunos');
// const TABELA_ALUNOS = document.querySelector('[id="tabela-alunos"]');

const CONTEUDO_NOVO = document.getElementById('conteudo-novo');
const CONTEUDO_LISTAR = document.getElementById('conteudo-listar');

const FORM_NOVO = document.getElementById('form-novo');
const INPUT_NOME = document.getElementById('novo-nome');
const INPUT_EMAIL = document.getElementById('novo-email');
const INPUT_TELEFONE = document.getElementById('novo-telefone');
const INPUT_CIDADE = document.getElementById('conteudo-listar');

FORM_NOVO.addEventListener('submit', function () {
    event.preventDefault();

    let dados = {
        nome: INPUT_NOME.value,
        email: INPUT_EMAIL.value,
        telefone: INPUT_TELEFONE.value,
        cidade: INPUT_CIDADE.value,
    }

    let lista = JSON.parse(
        localStorage.getItem('alunos') || '[]'
    );
    
    lista.push(dados);
    localStorage.setItem('alunos', JSON.stringify(lista));

    FORM_NOVO.reset();
})

alunos.map(function (cadaAluno) {
    TABELA_ALUNOS.innerHTML += `
        <tr>
            <td>${cadaAluno.nome}</td>
            <td>${cadaAluno.email}</td>
            <td>${cadaAluno.telefone}</td>
            <td>${cadaAluno.cidade}</td>
            <td>
                <button class="btn btn-sm btn-warning">Editar</button>
                <button class="btn btn-sm btn-danger">Excluir</button>
            </td>
        </tr>
    `;
});

function alterarConteudo(conteudo) {
    if (conteudo === 'listar') {
        // CONTEUDO_LISTAR.style.display = '';
        // CONTEUDO_NOVO.style.display = 'none';
        CONTEUDO_NOVO.classList.remove('form-animar');
        CONTEUDO_LISTAR.classList.add('form-animar');
        window.history.pushState(null, null, '#listar');
    }

    if (conteudo === 'novo') {
        // CONTEUDO_LISTAR.style.display = 'none';
        CONTEUDO_NOVO.classList.add('form-animar');
        CONTEUDO_LISTAR.classList.remove('form-animar');
        window.history.pushState(null, null, '#novo');
    }
}