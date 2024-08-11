//filtro portfolio
function filterItems(filter) {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Inicializar com todos os itens visíveis
document.addEventListener('DOMContentLoaded', () => {
    filterItems('all');
});

//hamburguer
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menuheader = document.querySelector('.menuheader');
    const menuItems = document.querySelectorAll('.menuheader a');

    hamburger.addEventListener('click', function() {
        menuheader.classList.toggle('show');
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuheader.classList.remove('show');
        });
    });
});

//translate
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-projeto': 'Projects',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'Galeria-de-projetos':'Project gallery',
        'descricao-galeria':'Welcome to the projects section of my portfolio! Here, you’ll find a selection of my most recent and innovative work, reflecting my passion for technology and development.',
    },
    pt: {
        'nav-home': 'Pagina inicial',
        'nav-projeto': 'Projects',
        'nav-about': 'Sobre',
        'nav-contact': 'Contato',
        'Galeria-de-projetos':'Galeria de projetos',
        'descricao-galeria':'Seja bem-vindo à seção de projetos do meu portfólio! Aqui, você encontrará uma seleção dos meus trabalhos mais recentes e inovadores, que refletem minha paixão por tecnologia e desenvolvimento.',
    },
    es: {
        'nav-home': 'Página inicial',
        'nav-projeto': 'Projects',
        'nav-about': 'Sobre',
        'nav-contact': 'Contacto',
        'Galeria-de-projetos':'Galería de Proyectos',
        'descricao-galeria':'¡Bienvenido a la sección de proyectos de mi portafolio! Aquí encontrarás una selección de mis trabajos más recientes e innovadores, que reflejan mi pasión por la tecnología y el desarrollo.'
    }
  };$(document).ready(function() {
    $('.language-icons a').click(function(e) {
      e.preventDefault();
      const lang = $(this).data('lang');
      $('[data-translate]').each(function() {
        const key = $(this).data('translate');
        $(this).html(translations[lang][key]);
      });
    });
  });

//footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
});
