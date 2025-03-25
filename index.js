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