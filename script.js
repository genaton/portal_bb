window.addEventListener('scroll', function() {
    var button = document.getElementById('voltarAoInicio');
    if (window.scrollY > 100) { // Ajuste o valor conforme necessário
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

window.addEventListener('load', function() {
    document.getElementById('formularioSuspenso').style.display = 'block';

    // Aplicar máscaras aos campos
    Masky.apply(document.querySelectorAll('[data-mask]'));
});

document.getElementById('fecharFormulario').addEventListener('click', function() {
    document.getElementById('formularioSuspenso').style.display = 'none';
});

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('mensagemSucesso').style.display = 'block';
});