document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menuheader = document.querySelector('.menuheader');
    const menuItems = document.querySelectorAll('.menuheader a'); // Assuming your menu items are links

    hamburger.addEventListener('click', function() {
        menuheader.classList.toggle('show');
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuheader.classList.remove('show');
        });
    });
});
//PREVIEW

let slideIndex = 0; 

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

showSlides(slideIndex);

//translate
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-skills': 'Skills',
    'nav-portfolio': 'Portfolio',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'title': 'Jogo da cobrinha',
    'introduction': "Control a snake that grows each time it eats an apple, but be careful: the snake can't collide with the walls or itself!<br>Controls: Hold down the ctrl key and use the arrow keys to guide the snake in different directions.",
    'view': 'View',
    'features-title': 'Features',
    'developed-in-react': 'Developed in React',
    'front-end': 'Full Front-End',
    'responsive-interface': 'Responsive and functional interface',
    'basic-js-resources': 'Basic JS resources',
    'repositorie': 'Repository',
  },
  pt: {
    'nav-home': 'Pagina inicial',
    'nav-skills': 'Skills',
    'nav-portfolio': 'Portfólio',
    'nav-about': 'Sobre',
    'nav-contact': 'Contato',
    'title': 'Jogo da cobrinha',
    'introduction': 'Controle uma cobra que cresce cada vez que come uma maçã, mas cuidado: a cobra não pode colidir com as paredes nem consigo mesma!<br>Controles: Mantenha o ctrl pressionado e use as setas do teclado para guiar a cobra em diferentes direções.',
    'view': 'Visualizar',
    'features-title': 'Características',
    'developed-in-react': 'Desenvolvido em React',
    'front-end': 'Front-end completo',
    'responsive-interface': 'Interface responsiva e funcional',
    'basic-js-resources': 'Recursos JS básicos',
    'repositorie': 'Repositorio',
  },
  es: {
    'nav-home': 'Página inicial',
    'nav-skills': 'Habilidades',
    'nav-portfolio': 'Portafolio',
    'nav-about': 'Sobre',
    'nav-contact': 'Contacto',
    'title': 'Jogo da cobrinha',
    'introduction': 'Controla una serpiente que crece cada vez que come una manzana, ¡pero ten cuidado: la serpiente no puede chocar con las paredes ni consigo misma!<br> Controles: Mantén presionada la tecla ctrl y usa las flechas del teclado para guiar a la serpiente en diferentes direcciones.',
    'view': 'Ver',
    'features-title': 'Características',
    'developed-in-react': 'Desarrollado en React',
    'front-end': 'Front-End Completo',
    'responsive-interface': 'Interfaz responsiva y funcional',
    'basic-js-resources': 'Recursos JS básicos',
    'repositorie': 'Repositorio',
  }
};

$(document).ready(function() {
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
 
