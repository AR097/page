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

//skills



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
//translate
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-portfolio': 'Portfolio',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'welcome-to-my-portfolio': "Welcome",
        'filter-all':'All',
        'about-me':'About me',
        'sobre-mim':'I have been studying programming since 2021 on my own as a hobby and I am currently in the 4th semester of Computer Science. I learn quickly and enjoy developing projects. I am always looking for new ideas and continually expanding my skills; whenever I can, I dive into GitHub profiles as I believe this helps me develop my knowledge and cultivate my creativity.',
        'onde-me-encontrar': 'Where to find me',
        'contact-text':'Have any questions? Get in touch!',
    },
    pt: {
        'nav-home': 'Pagina inicial',
        'nav-portfolio': 'Portfólio',
        'nav-about': 'Sobre',
        'nav-contact': 'Contato',
        'welcome-to-my-portfolio': "Bem vindo(a)",
        'filter-all':'Todos',
        'about-me':'Sobre mim',
        'sobre-mim':'Estudo programação desde 2021 por conta própria como hobby e atualmente estou no 4º periodo de Ciência da Computação. Aprendo rápido, gosto de desenvolver projetos e estou sempre em busca de novas ideias e sigo ampliando continuamente minhas habilidades, sempre que posso navego em perfis do github, acredito que assim posso desenvolver meu conhecimento e cultivar minha criatividade.',
        'onde-me-encontrar': 'Onde me encontrar',
        'contact-text':'Ficou com alguma dúvida? Entre em contato!'

    },
    es: {
        'nav-home': 'Página inicial',
        'nav-portfolio': 'Portafolio',
        'nav-about': 'Sobre',
        'nav-contact': 'Contacto',
        'welcome-to-my-portfolio': 'Bienvenido',
        'filter-all':'Todos',
        'about-me':'Sobre mí',
        'sobre-mim':'He estado estudiando programación desde 2021 por mi cuenta como un pasatiempo y actualmente estoy en el 4º semestre de Ciencias de la Computación. Aprendo rápido, me gusta desarrollar proyectos y siempre estoy buscando nuevas ideas y ampliando continuamente mis habilidades; siempre que puedo, me sumerjo en los perfiles de GitHub, ya que creo que esto me ayuda a desarrollar mi conocimiento y cultivar mi creatividad.',
        'onde-me-encontrar': 'Dónde encontrarme',
        'contact-text':'¿Tienes alguna duda? ¡Ponte en contacto!'

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
