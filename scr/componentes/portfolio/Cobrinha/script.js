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
    'nav-portfolio': 'Projects',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'title': 'Jogo da cobrinha',
    'introduction': "Control a snake that grows each time it eats an apple, but be careful: the snake can't collide with the walls or itself!<br>Controls: Hold down the ctrl key and use the arrow keys to guide the snake in different directions.",
    'descricao-github': 'Here you can check out the source code of my projects. Feel free to explore and clone the repository for analysis or contribution.',
    'descricao-codepen':'Explore the code and see the live result. You can view, modify, and experiment with the code directly here.<br>To get started, click "Fork" to make a copy and customize the project your way.'
  },
  pt: {
    'nav-home': 'Pagina inicial',
    'nav-skills': 'Skills',
    'nav-portfolio': 'Projetos',
    'nav-about': 'Sobre',
    'nav-contact': 'Contato',
    'title': 'Jogo da cobrinha',
    'introduction': 'Controle uma cobra que cresce cada vez que come uma maçã, mas cuidado: a cobra não pode colidir com as paredes nem consigo mesma!<br>Controles: Mantenha o ctrl pressionado e use as setas do teclado para guiar a cobra em diferentes direções.',
    'descricao-github': 'Aqui você pode conferir o código fonte dos meus projetos. Sinta-se à vontade para explorar e clonar o repositório para análise ou contribuição.',
    'descricao-codepen':'Explore o código e veja o resultado ao vivo. Você pode visualizar, modificar e experimentar com o código diretamente aqui.<br>Para começar, clique em "Fork" para fazer uma cópia e personalizar o projeto à sua maneira.'
  },
  es: {
    'nav-home': 'Página inicial',
    'nav-skills': 'Habilidades',
    'nav-portfolio': 'Proyectos',
    'nav-about': 'Sobre',
    'nav-contact': 'Contacto',
    'title': 'Jogo da cobrinha',
    'introduction': 'Controla una serpiente que crece cada vez que come una manzana, ¡pero ten cuidado: la serpiente no puede chocar con las paredes ni consigo misma!<br> Controles: Mantén presionada la tecla ctrl y usa las flechas del teclado para guiar a la serpiente en diferentes direcciones.',
    'descricao-github': 'Aquí puedes consultar el código fuente de mis proyectos. Siéntete libre de explorar y clonar el repositorio para análisis o contribuciones.',
    'descricao-codepen':'Explora el código y ve el resultado en vivo. Puedes visualizar, modificar y experimentar con el código directamente aquí.<br>Para comenzar, haz clic en "Fork" para hacer una copia y personalizar el proyecto a tu manera.'
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
 
