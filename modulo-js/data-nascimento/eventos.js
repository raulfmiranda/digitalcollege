const SELECT_DIA = document.getElementById('dia');
const SELECT_MES = document.getElementById('mes');
const SELECT_ANO = document.getElementById('ano');

for (let d = 1; d <= 31; d++) {
    SELECT_DIA.innerHTML += `<option>${d}</option>`;    
}

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

for (let d = 0; d < meses.length; d++) {
    SELECT_MES.innerHTML += `<option>${meses[d]}</option>`;    
}

for (let d = 2022; d >= 1900; d--) {
    SELECT_ANO.innerHTML += `<option>${d}</option>`;    
}