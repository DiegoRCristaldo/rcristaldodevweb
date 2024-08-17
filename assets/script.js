let currentIndex = 0;
const classNames = ['rcristaldo', 'imc', 'guiafinanceiro'];
const links = {
    'rcristaldo': 'http://rcristaldodevweb.netlify.app',
    'imc': 'http://imc-link.com',
    'guiafinanceiro': 'http://guiafinanceiro.netlify.app'
};

function updateClasses() {
    const mainCard = document.querySelector('.card-principal');
    const secondaryCards = document.querySelectorAll('.card-secundario');
    const carouselLink = document.getElementById('carousel-link');

    // Remover todas as classes específicas das imagens
    classNames.forEach(className => {
        mainCard.classList.remove(className);
        secondaryCards.forEach(card => card.classList.remove(className));
    });

    // Atualizar classes
    mainCard.classList.add(classNames[currentIndex]);
    secondaryCards[0].classList.add(classNames[(currentIndex + 1) % classNames.length]);
    secondaryCards[1].classList.add(classNames[(currentIndex + 2) % classNames.length]);

    // Atualizar o link conforme a classe principal
    carouselLink.href = links[classNames[currentIndex]];
}

function voltar() {
    currentIndex = (currentIndex + 1) % classNames.length;
    updateClasses();
}

function passar() {
    currentIndex = (currentIndex - 1 + classNames.length) % classNames.length;
    updateClasses();
}

// Desativar clique em cartões secundários
document.addEventListener('DOMContentLoaded', function() {
    const secondaryCards = document.querySelectorAll('.card-secundario');
    
    secondaryCards.forEach(card => {
        card.addEventListener('click', function(event) {
            event.stopPropagation();
            event.preventDefault();
        });
    });

    updateClasses();
});
