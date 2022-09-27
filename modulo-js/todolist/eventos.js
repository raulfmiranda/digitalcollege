function getPrioridade(prioridade) {
    let possibilidades = {
        'Alta': `<span class="badge w-100 bg-danger">Alta</span>`,
        'Media': `<span class="badge w-100 bg-warning">Media</span>`,
        'Baixa': `<span class="badge w-100 bg-info">Baixa</span>`
    }
    return possibilidades[prioridade];
}

function concluirTarefa(id) {
    fetch('http://localhost:8000/tarefas/' + id, {
        method: 'PATCH',
        body: JSON.stringify({
            status: "Feito"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

fetch('http://localhost:8000/tarefas')
    .then(resposta => resposta.json())
    .then(tarefas => {
            tarefas.forEach((cadaTarefa) => {
                let status = `<span class="badge w-100 bg-success">Feito</span>`;

                if (cadaTarefa.status === 'Para Fazer') {
                    status = `<span class="badge w-100 bg-warning">Para Fazer</span>`;
                } else if (cadaTarefa.status === 'Fazendo') {
                    status = `<span class="badge w-100 bg-primary">Fazendo</span>`;
                }

                tabela_conteudo.innerHTML += `
                    <tr>
                        <td>${cadaTarefa.titulo}</td>
                        <td>${cadaTarefa.descricao}</td>
                        <td>${status}</td>
                        <td>${getPrioridade(cadaTarefa.prioridade)}</td>
                        <td>
                            <button onclick="concluirTarefa(${cadaTarefa.id})" class="btn btn-outline-success">
                                Concluir
                            </button>
                        </td>
                    </tr>
                `;
            });
        });
