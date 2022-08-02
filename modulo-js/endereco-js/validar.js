const CEP = document.getElementById('cep');
const LOGRADOURO = document.getElementById('logradouro');
const NUMERO = document.getElementById('numero');
const BAIRRO = document.getElementById('bairro');
const CIDADE = document.getElementById('cidade');
const UF = document.getElementById('uf');

/** 
 quando quiser o valor digitado/selecionado no input
 CEP.value
 
 quando quiser alterar o style/css do input
 CEP.style
 pra modificar a cor da fonte
 CEP.style.color = 'red';
 pra modificar a borda
 CEP.style.border = '1px solid red';
 
 pra alterar as classes do input
 CEP.classList.add('form-control')
 CEP.classList.remove('form-control')
*/

function validar() {
    // interromper o envio dos dados
    event.preventDefault();

    if (CEP.value.length !== 8) {
        // CEP.style.border = "1px solid red";
        CEP.classList.remove('is-valid');
        CEP.classList.add('is-invalid');
    } else {
        // CEP.style.border = "1px solid blue";
        CEP.classList.remove('is-invalid');
        CEP.classList.add('is-valid');
    }

    if (LOGRADOURO.value.trim().length < 3) {
        LOGRADOURO.classList.remove('is-valid');
        LOGRADOURO.classList.add('is-invalid');
    } else {
        LOGRADOURO.classList.remove('is-invalid');
        LOGRADOURO.classList.add('is-valid');
    }

    if (NUMERO.value.trim().length < 1) {
        NUMERO.classList.remove('is-valid');
        NUMERO.classList.add('is-invalid');
    } else {
        NUMERO.classList.remove('is-invalid');
        NUMERO.classList.add('is-valid');
    }

    if (BAIRRO.value.trim().length < 1) {
        BAIRRO.classList.remove('is-valid');
        BAIRRO.classList.add('is-invalid');
    } else {
        BAIRRO.classList.remove('is-invalid');
        BAIRRO.classList.add('is-valid');
    }

    if (CIDADE.value.trim().length < 1) {
        CIDADE.classList.remove('is-valid');
        CIDADE.classList.add('is-invalid');
    } else {
        CIDADE.classList.remove('is-invalid');
        CIDADE.classList.add('is-valid');
    }
}