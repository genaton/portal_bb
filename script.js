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


var swiper = new Swiper('.swiper', {
    slidesPerView: 1.8, // Mostra 3 slides ao mesmo tempo
    spaceBetween: 20, // Espaço de 20px entre eles
    centeredSlides: true, // Centraliza o slide ativo
    loop: false,
    pagination: {
        effect: "slide",
  /* ou "coverflow" para efeito 3D */
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 2,
    spaceBetween: 70,
    centeredSlides: true,
    loop: false,
    pagination: {
        effect: "coverflow",
        el: '.swiper2 .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper2 .swiper-button-next',
        prevEl: '.swiper2 .swiper-button-prev'
    }
});


