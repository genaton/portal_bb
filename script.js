// Exibe ou oculta o botão "Voltar ao início" com base na rolagem da página
window.addEventListener('scroll', function() {
    var button = document.getElementById('voltarAoInicio');
    if (window.scrollY > 100) { // Exibe o botão se a rolagem for maior que 100px
        button.style.display = 'block';
    } else {
        button.style.display = 'none'; // Oculta o botão caso contrário
    }
});

// Exibe o formulário suspenso ao carregar a página e aplica máscaras aos campos
window.addEventListener('load', function() {
    document.getElementById('formularioSuspenso').style.display = 'block';

    // Aplica máscaras nos campos com o atributo `data-mask`
    Masky.apply(document.querySelectorAll('[data-mask]'));
});

// Fecha o formulário suspenso ao clicar no botão de fechar
document.getElementById('fecharFormulario').addEventListener('click', function() {
    document.getElementById('formularioSuspenso').style.display = 'none';
});

// Exibe a mensagem de sucesso ao enviar o formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário
    document.getElementById('formulario').style.display = 'none'; // Oculta o formulário
    document.getElementById('mensagemSucesso').style.display = 'block'; // Exibe a mensagem de sucesso
});

// Array com informações dos cartões para exibição dinâmica
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

// Atualiza o texto do card com base no slide ativo
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

// Configuração do carrossel principal (Swiper)
var swiper = new Swiper('.swiper', {
    slidesPerView: 1.8, // Mostra 1.8 slides ao mesmo tempo
    spaceBetween: 20, // Espaço de 20px entre os slides
    centeredSlides: true, // Centraliza o slide ativo
    loop: false, // Não ativa o loop
    pagination: {
        effect: "slide", // Efeito de transição
        el: '.swiper-pagination',
        clickable: true, // Permite clicar na paginação
    },
    navigation: {
        nextEl: '.swiper-button-next', // Botão "próximo"
        prevEl: '.swiper-button-prev', // Botão "anterior"
    },
    on: {
        slideChange: updateCardText // Atualiza o texto ao mudar o slide
    }
});

// Configuração do segundo carrossel (Swiper)
var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 2, // Exibe 2 slides por vez
    spaceBetween: 70, // Espaço de 70px entre os slides
    centeredSlides: true, // Centraliza os slides
    loop: false, // Não ativa o loop
    pagination: {
        effect: "covesliderflow", // Efeito visual
        el: '.swiper2 .swiper-pagination',
        clickable: true, // Permite clicar na paginação
    },
    navigation: {
        nextEl: '.swiper2 .swiper-button-next', // Botão "próximo"
        prevEl: '.swiper2 .swiper-button-prev', // Botão "anterior"
    },
});

// Alterna entre dois grupos de textos no banner principal
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

// Exibe ou oculta a seção de tópicos com base na posição da rolagem
window.addEventListener('scroll', function() {
    var topicos = document.querySelector('.topicos');
    var rect = topicos.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollPosition = window.scrollY + windowHeight;

    if (rect.top < windowHeight && rect.bottom >= 0 && scrollPosition < documentHeight) {
        topicos.style.display = 'block'; // Exibe a seção quando visível na tela
    } else {
        topicos.style.display = 'none'; // Oculta a seção caso contrário
    }
});

// Configuração do VLibras (acessibilidade)
document.addEventListener('DOMContentLoaded', function() {
    new window.VLibras.Widget({
        rootPath: 'https://vlibras.gov.br/app', // Caminho do VLibras
        personalization: 'https://vlibras.gov.br/api/config', // Configuração personalizada
        opacity: 0.7, // Opacidade do botão
        position: 'R', // Posição do botão (R = direita)
        avatar: 'female' // Avatar do VLibras
    });
});

// Popup
function showPopup(event) {
    event.preventDefault();
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Redirecionamento para o site do Banco do Brasil Cartões
function redirecionar() {
    window.location.href = "https://www.bb.com.br/site/pra-voce/cartoes-de-credito/todos-os-cartoes/";
}

