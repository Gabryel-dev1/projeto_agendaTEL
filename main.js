const form = document.getElementById('form-contatos');
const nomes = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();
});

function adicionalinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-tel');

    if (telefone.includes(inputNumero.value)) {
        alert("O numero de telefone ja existe");
    } else if (nomes.includes(inputNome.value)) {
          alert(`O nome ${inputNome.value} já existe`);
    } else {
        nomes.push(inputNome.value);
        telefone.push(inputNumero.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;

        inputNome.value = ''
        inputNumero.value = ''
    }
}

function atualizatabela() {
    const corpoTbody = document.querySelector('tbody');
    corpoTbody.innerHTML = linhas 
}
