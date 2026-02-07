/* salvar e recuperar dados do localstorage */
let recordistas = JSON.parse(localStorage.getItem('recordistas')) || [];

const salvar = (listaRecordistas) => {
    localStorage.clear();
    localStorage.setItem('recordistas',JSON.stringify(listaRecordistas));
}

const montaLista = () => {
    let nome = nomeRecordista.value;
    let record = labelRecord.textContent;
    recordistas.push({
        'nome': nome,
        'record' : record,
    });
    salvar(recordistas);
}