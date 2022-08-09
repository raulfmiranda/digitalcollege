function salvar() {
    let dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('password').value
    };

    localStorage.setItem('usuarios', JSON.stringify(dados));
}
