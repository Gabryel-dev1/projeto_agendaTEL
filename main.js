const form = document.getElementById('form-contatos');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();

});

function adicionalinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-tel');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNome.value = ''
    inputNumero.value = ''
}

function atualizatabela() {
    const corpoTbody = document.querySelector('tbody');
    corpoTbody.innerHTML = linhas 
}