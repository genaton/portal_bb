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

const cardTexts = [
    {
        titulo: "Cartão Ourocard Elo Padrão",
        vantagens: "Vantagens Exclusivas Elo",
        textos: [
            "Benefícios exclusivos para suas compras",
            "Programa de pontos para trocar por prêmios",
            "Segurança para suas transações"
        ]
    },
    {
        titulo: "Cartão Ourocard Visa Platinum",
        vantagens: "Conforto e Segurança",
        textos: [
            "Aproveite vantagens globais Visa",
            "Assistência em viagens internacionais",
            "Compras protegidas com IA avançada"
        ]
    },
    {
        titulo: "Cartão Ourocard Mastercard Black",
        vantagens: "O cartão dos seus sonhos",
        textos: [
            "Acesso às melhores salas VIPs",
            "Descontos em lojas e experiências premium",
            "Segurança nas compras com IA"
        ]
    },
    {
        titulo: "Cartão Ourocard Elo Mais",
        vantagens: "Mais benefícios para você",
        textos: [
            "Descontos exclusivos em parceiros Elo",
            "Seguro viagem gratuito",
            "Programa de fidelidade recompensador"
        ]
    },
    {
        titulo: "Cartão Ourocard Elo Nanquim",
        vantagens: "O melhor Elo para você",
        textos: [
            "Acesso ilimitado a salas VIPs em aeroportos",
            "Vantagens exclusivas no Brasil e no mundo",
            "Cobertura de seguros ampliada"
        ]
    },
    {
        titulo: "Cartão Dotz Platinum",
        vantagens: "Cartão com programa Dotz",
        textos: [
            "Acumule pontos Dotz a cada compra",
            "Troque por produtos e serviços",
            "Benefícios exclusivos para clientes Dotz"
        ]
    }
];
// Função para atualizar o texto do card
function updateCardText() {
    const activeIndex = swiper.activeIndex; // Obtém o índice do slide ativo
    const cardInfo = cardTexts[activeIndex]; // Pega os textos correspondentes do array

    // Atualiza os textos na div `card`
    document.querySelector('.descricao__titulo').textContent = cardInfo.titulo;
    document.querySelector('.descricao__titulo-vantagens').textContent = cardInfo.vantagens;

    const textElements = document.querySelectorAll('.descricao__texto');
    cardInfo.textos.forEach((texto, index) => {
        textElements[index].textContent = texto;
    });
}


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
    },
    on: {
        slideChange: updateCardText // Chama a função ao mudar o slide
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
// Seleciona os grupos de texto
const group1 = document.querySelector('.group1');
const group2 = document.querySelector('.group2');

// Função para alternar os textos
function toggleTexts() {
    if (group1.style.display === 'none') {
        group1.style.display = 'block';
        group2.style.display = 'none';
    } else {
        group1.style.display = 'none';
        group2.style.display = 'block';
    }
}

// Inicializa os textos com o grupo 1 visível
group1.style.display = 'block';
group2.style.display = 'none';

// Alterna os textos a cada 10 segundos
setInterval(toggleTexts, 10000);

//Função de congelar
window.addEventListener('scroll', function() {
    var topicos = document.querySelector('.topicos');
    var rect = topicos.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollPosition = window.scrollY + windowHeight;

    if (rect.top < windowHeight && rect.bottom >= 0 && scrollPosition < documentHeight) {
        topicos.style.display = 'block'; // Exibe a seção quando ela entra na tela e não ultrapassa o tamanho da página
    } else {
        topicos.style.display = 'none'; // Oculta a seção quando ela sai da tela ou ultrapassa o tamanho da página
    }
});

// Configuração do VLibras
document.addEventListener('DOMContentLoaded', function() {
    new window.VLibras.Widget({
        rootPath: 'https://vlibras.gov.br/app',
        personalization: 'https://vlibras.gov.br/api/config',
        opacity: 0.7,     // Opacidade do botão (0 a 1)
        position: 'R',    // Posição (L = esquerda, R = direita)
        avatar: 'female'  // Avatar ('male', 'female' ou 'random')
    });
});

