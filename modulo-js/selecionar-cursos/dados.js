const FORM = document.getElementById('form');

let dados = [
    'PHP',
    'Java',
    'Python',
    'Ruby',
    'Lua',
    'ShellScript'
];

dados.forEach(function (nome) {
    FORM.innerHTML += `
        <div class="form-switch">
            <input onclick="selecionar(this)" value="${nome}" class="form-check-input" type="checkbox" id="${nome}">
            <label class="form-check-label" for="${nome}">${nome}</label>
        </div>
    `;
});