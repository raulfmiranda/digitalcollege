const PASSWORD = document.getElementById('password');

function alterarFeedback(msg, percent, backcolor) {
    const DIV_PROGRESSO = document.getElementById('senha-progresso');
    document.getElementById('errorMsg').innerHTML = msg;
    DIV_PROGRESSO.style.width = percent;
    DIV_PROGRESSO.style.backgroundColor = backcolor;
}

function validarSenha() {
    const ERRORMSG = document.getElementById('errorMsg');
    const password = document.getElementById('password').value;
    
    if (password.length < 8) {
        alterarFeedback('Senha Inválida', '1%', 'red');
        return;
    }
    
    if (!isNaN(password)) {
        alterarFeedback('Senha Fraca', '30%', 'red');
        return;
    }

    // var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var format = /\W/;
    
    if (!format.test(password)) {
        alterarFeedback('Senha Média', '70%', 'yellow');
    } else {
        alterarFeedback('Senha Forte', '100%', 'green');
    }
}


PASSWORD.addEventListener('keyup', validarSenha);