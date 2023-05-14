const form = document.getElementById('form-deposito');
const campoA = document.getElementById('Campo-A');
const campoB = document.getElementById('Campo-B');
let formEValido = false;

function validarMaior(campoA, campoB) {
    const valorCampoA = Number(campoA.value);
    const valorCampoB = Number(campoB.value);
    
    if (valorCampoB > valorCampoA) {
        return true;
    } else {
        return false;
    }
}

function exibirMensagemSucesso() {
    const mensagemSucesso = `O número <b>${campoB.value}</b> é maior do que <b>${campoA.value}</b>`;
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    campoA.value = '';
    campoB.value = '';
}

function exibirMensagemErro() {
    campoB.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
}

function removerMensagemErro() {
    campoB.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
    campoB.style.border = 'none';
}

function validarCampos() {
    formEValido = validarMaior(campoA, campoB);

    if (formEValido) {
        exibirMensagemSucesso();
    } else {
        exibirMensagemErro();
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validarCampos();
});

campoA.addEventListener('keyup', function() {
    validarCampos();
});

campoB.addEventListener('keyup', function() {
    if (formEValido) {
        removerMensagemErro();
    }
    validarCampos();
});
