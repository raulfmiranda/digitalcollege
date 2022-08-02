let enderecos = {
    60123400: {
        logradouro: 'Av. Santos Dumont',
        bairro: 'Aldeota',
        cidade: 'FortalCity',
        uf: 'CE'
    },
    60123401: {
        logradouro: 'Av. Santos Dumont1',
        bairro: 'Aldeota1',
        cidade: 'FortalCity1',
        uf: 'SP'
    },
    60123402: {
        logradouro: 'Av. Santos Dumont2',
        bairro: 'Aldeota2',
        cidade: 'FortalCity2',
        uf: 'PI'
    }
};

CEP.addEventListener('blur', function (params) {
    LOGRADOURO.value = enderecos[CEP.value].logradouro;
    BAIRRO.value = enderecos[CEP.value].bairro;
    CIDADE.value = enderecos[CEP.value].cidade;
    UF.value = enderecos[CEP.value].uf;
});