const SELECT_DIA = document.getElementById('dia');
const SELECT_MES = document.getElementById('mes');
const SELECT_ANO = document.getElementById('ano');

for (let d = 1; d <= 31; d++) {
    SELECT_DIA.innerHTML += `<option>${d}</option>`;    
}

for (let d = 1; d <= 12; d++) {
    SELECT_MES.innerHTML += `<option>${d}</option>`;    
}

for (let d = 2022; d >= 1900; d--) {
    SELECT_ANO.innerHTML += `<option>${d}</option>`;    
}