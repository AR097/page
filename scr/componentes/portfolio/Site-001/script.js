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
    'title': 'WebSite - 001',
    'introduction': 'This website was designed to meet basic demands, with four sections: Home, About, Services and Contact.<br>The source code is organized, facilitating maintenance, addition of new features, and scalability to meet various needs.<br>',
    'view': 'View',
    'features-title': 'Features',
    'developed-in-react': 'Developed in React',
    'front-end': 'Front-end',
    'responsive-interface': 'Responsive and functional interface',
    'basic-js-resources': 'Basic JS resources',
    'front-end': 'Front-end',
    'responsive-interface': 'Interface responsiva e funcional',
    'basic-js-resources': 'Recursos JS básicos',
    'title-pay':'Buy with PayPal',
    'modelo-front-end':'Front-end Model',
    'modelo-front-end-description':'Description: One-page website template with an intuitive design that offers simple, focused navigation.',
    'valor':'Price: R$50.00'
  },
  pt: {
    'nav-home': 'Pagina inicial',
    'nav-skills': 'Skills',
    'nav-portfolio': 'Portfólio',
    'nav-about': 'Sobre',
    'nav-contact': 'Contato',
    'title': 'WebSite - 001',
    'introduction': 'Este site foi projetado para atender às demandas básicas, com quatro seções: Página Inicial, Sobre, Serviços e Contato.<br>O código-fonte é organizado, facilitando a manutenção, inclusão de novos recursos e a escalabilidade para atender a diversas necessidades.',
    'view': 'Visualizar',
    'features-title': 'Características',
    'developed-in-react': 'Desenvolvido em React.JS',
    'front-end': 'Front-end',
    'responsive-interface': 'Interface responsiva e funcional',
    'basic-js-resources': 'Recursos JS básicos',
    'title-pay':'Comprar com PayPal',
    'modelo-front-end':'Modelo Front-end',
    'modelo-front-end-description':'Descrição: Modelo de site de uma página, com design intuitivo que oferece navegação simples e focada. ',
    'valor':'Valor: R$50.00'

  },
  es: {
    'nav-home': 'Página inicial',
    'nav-skills': 'Habilidades',
    'nav-portfolio': 'Portafolio',
    'nav-about': 'Sobre',
    'nav-contact': 'Contacto',
    'title': 'WebSite - 001',
    'introduction': 'Este sitio web diseñado para cumplir can las demandas básicas, con cuatro secciones: Inicio, Acerca de, Servicios y Contacto.<br> El código fuente está organizado, facilitando el mantenimiento, la adición de nuevas cracterísticas y la escalabilidad para satisfacer diversas necessidades.',
    'view': 'Ver',
    'features-title': 'Características',
    'developed-in-react': 'Desarrollado en React',
    'front-end': 'Front-end',
    'responsive-interface': 'Interfaz responsiva y funcional',
    'basic-js-resources': 'Recursos JS básicos',
    'title-pay':'Comprar con PayPal',
    'modelo-front-end':'Modelo Front-end',
    'modelo-front-end-description':'Descripción: Plantilla de sitio web de una sola página con un diseño intuitivo que destaca su trabajo y ofrece una navegación simple y enfocada.',
    'valor':'Precio: R$50.00'
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

