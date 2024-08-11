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
        'welcome-to-my-portfolio': "Welcome",
        'filter-all':'All',
        'about-me':'About me',
        'sobre-mim':'I have been studying programming since 2021 on my own as a hobby and I am currently in the 4th semester of Computer Science. I learn quickly and enjoy developing projects. I am always looking for new ideas and continually expanding my skills; whenever I can, I dive into GitHub profiles as I believe this helps me develop my knowledge and cultivate my creativity.',
        'onde-me-encontrar': 'Where to find me',
        'contact-text':'Have any questions? Get in touch!',
        'navegue-pelos-meus-projetos':'Browse through my projects',
        'explore-meus-projetos':'Explore my recent projects, take a look at my GitHub profile to see source code and contributions, and discover some study materials I’m using to enhance my skills.',
        'descricao-projeto-github':'Explora mi perfil en GitHub para acceder a una variedad de proyectos y repositorios que he desarrollado a lo largo de los años. Aquí encontrarás código fuente, contribuciones a proyectos de código abierto y ejemplos prácticos de mi trabajo en desarrollo web y otras áreas.',
        'descricao-projeto-codepen':'Access my projects and interactive experiments on CodePen. See how I turn ideas into reality with HTML, CSS, and JavaScript, and explore practical demonstrations of animations, layouts, and other front-end techniques.',
        'descricao-projeto-portfolio':'Browse through my project gallery to see a selection of my most recent and notable work. Each project includes a brief description, images, and links for direct access to the full projects, showcasing my creative approach and technical skills.',
    },
    pt: {
        'nav-home': 'Pagina inicial',
        'nav-projeto': 'Projetos',
        'nav-about': 'Sobre',
        'nav-contact': 'Contato',
        'welcome-to-my-portfolio': "Bem vindo(a)",
        'filter-all':'Todos',
        'about-me':'Sobre mim',
        'sobre-mim':'Estudo programação desde 2021 por conta própria como hobby e atualmente estou no 4º periodo de Ciência da Computação. Aprendo rápido, gosto de desenvolver projetos e estou sempre em busca de novas ideias e sigo ampliando continuamente minhas habilidades, sempre que posso navego em perfis do github, acredito que assim posso desenvolver meu conhecimento e cultivar minha criatividade.',
        'onde-me-encontrar': 'Onde me encontrar',
        'contact-text':'Ficou com alguma dúvida? Entre em contato!',
        'navegue-pelos-meus-projetos':'Navegue pelos meus projetos',
        'explore-meus-projetos':'Explore meus projetos recentes, dê uma olhada no meu perfil no GitHub para ver código-fonte e contribuições, e descubra alguns materiais de estudo que estou utilizando para aprimorar minhas habilidades.',
        'descricao-projeto-github':'Explore meu perfil no GitHub para acessar uma variedade de projetos e repositórios que desenvolvi ao longo dos anos. Aqui você encontrará código-fonte, contribuições para projetos de código aberto e exemplos práticos do meu trabalho em desenvolvimento web e outras áreas.',
        'descricao-projeto-codepen':'Acesse meus projetos e experimentos interativos no CodePen. Veja como transformo ideias em realidade com HTML, CSS e JavaScript, e explore demonstrações práticas de animações, layouts e outras técnicas de front-end.',
        'descricao-projeto-portfolio':'Navegue pela minha galeria de projetos para ver uma seleção dos meus trabalhos mais recentes e destacados. Cada projeto inclui uma breve descrição, imagens e links para acesso direto aos projetos completos, mostrando minha abordagem criativa e habilidades técnicas.',
    },
    es: {
        'nav-home': 'Página inicial',
        'nav-projeto': 'Proyectos',
        'nav-about': 'Sobre',
        'nav-contact': 'Contacto',
        'welcome-to-my-portfolio': 'Bienvenido',
        'filter-all':'Todos',
        'about-me':'Sobre mí',
        'sobre-mim':'He estado estudiando programación desde 2021 por mi cuenta como un pasatiempo y actualmente estoy en el 4º semestre de Ciencias de la Computación. Aprendo rápido, me gusta desarrollar proyectos y siempre estoy buscando nuevas ideas y ampliando continuamente mis habilidades; siempre que puedo, me sumerjo en los perfiles de GitHub, ya que creo que esto me ayuda a desarrollar mi conocimiento y cultivar mi creatividad.',
        'onde-me-encontrar': 'Dónde encontrarme',
        'contact-text':'¿Tienes alguna duda? ¡Ponte en contacto!',
        'navegue-pelos-meus-projetos':'Navega por mis proyectos',
        'explore-meus-projetos':'Explora mis proyectos recientes, revisa mi perfil en GitHub para ver el código fuente y las contribuciones, y descubre algunos materiales de estudio que estoy utilizando para mejorar mis habilidades.',
        'descricao-projeto-github':'Explora mi perfil en GitHub para acceder a una variedad de proyectos y repositorios que he desarrollado a lo largo de los años. Aquí encontrarás código fuente, contribuciones a proyectos de código abierto y ejemplos prácticos de mi trabajo en desarrollo web y otras áreas.',
        'descricao-projeto-codepen':'Accede a mis proyectos y experimentos interactivos en CodePen. Ve cómo transformo ideas en realidad con HTML, CSS y JavaScript, y explora demostraciones prácticas de animaciones, diseños y otras técnicas de front-end.',
        'descricao-projeto-portfolio':'Navega por mi galería de proyectos para ver una selección de mis trabajos más recientes y destacados. Cada proyecto incluye una breve descripción, imágenes y enlaces para acceder directamente a los proyectos completos, mostrando mi enfoque creativo y habilidades técnicas.',
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
