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
    slidesPerView: 2,  // Exibe 2 slides por vez
    spaceBetween: 70,   
    centeredSlides: true, // Garante que os slides fiquem centralizados
    loop: false,  // Ativa o loop dos slides
    pagination: {
        effect: "covesliderflow",  // Efeito visual dos slides
        el: '.swiper2 .swiper-pagination',  // Seleciona o elemento de paginação
        clickable: true,  // Habilita a navegação através das bolinhas
    },
    navigation: {
        nextEl: '.swiper2 .swiper-button-next',  // Botão de navegação "próximo"
        prevEl: '.swiper2 .swiper-button-prev',  // Botão de navegação "anterior"
    },
    
});
