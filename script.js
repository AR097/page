//box text
document.addEventListener('DOMContentLoaded', (event) => {
    //header
    const linkedinIcon = document.getElementById('linkedinIcon');
    const linkedinDescription = document.getElementById('linkedinDescription');
    
        linkedinIcon.addEventListener('mouseover', () => {
            linkedinDescription.style.visibility = 'visible';
            linkedinDescription.style.opacity = '1';
        });
        linkedinIcon.addEventListener('mouseout', () => {
            linkedinDescription.style.visibility = 'hidden';
            linkedinDescription.style.opacity = '0';
        });

    const githubIcon = document.getElementById('githubIcon');
    const githubDescription = document.getElementById('githubDescription');

        githubIcon.addEventListener('mouseover', () => {
            githubDescription.style.visibility = 'visible';
            githubDescription.style.opacity = '1';
        });
        githubIcon.addEventListener('mouseout', () => {
            githubDescription.style.visibility = 'hidden';
            githubDescription.style.opacity = '0';
        });
      
    //profile 
            //hobbies
    const travelicon = document.getElementById('travelicon');
    const travelDescription = document.getElementById('travelDescription')
       
        travelicon.addEventListener('mouseover', () => {
            travelDescription.style.visibility = 'visible';
            travelDescription.style.opacity = '1';
        });
        travelicon.addEventListener('mouseout', () => {
            travelDescription.style.visibility = 'hidden';
            travelDescription.style.opacity = '0';
        });

    const runicon = document.getElementById('runicon');
    const runDescription = document.getElementById('runDescription')
        
        runicon.addEventListener('mouseover', () => {
            runDescription.style.visibility = 'visible';
            runDescription.style.opacity = '1';
        });
        runicon.addEventListener('mouseout', () => {
            runDescription.style.visibility = 'hidden';
            runDescription.style.opacity = '0';
        });

    const musicicon = document.getElementById('musicicon');
    const musicDescription = document.getElementById('musicDescription')
        
        musicicon.addEventListener('mouseover', () => {
            musicDescription.style.visibility = 'visible';
            musicDescription.style.opacity = '1';
        });
        musicicon.addEventListener('mouseout', () => {
            musicDescription.style.visibility = 'hidden';
            musicDescription.style.opacity = '0';
        });

    const photoicon = document.getElementById('photoicon');
    const photoDescription = document.getElementById('photoDescription')
        
        photoicon.addEventListener('mouseover', () => {
            photoDescription.style.visibility = 'visible';
            photoDescription.style.opacity = '1';
        });
        photoicon.addEventListener('mouseout', () => {
            photoDescription.style.visibility = 'hidden';
            photoDescription.style.opacity = '0';
        });

    const motoicon = document.getElementById('motoicon');
    const motoDescription = document.getElementById('motoDescription')
        
        motoicon.addEventListener('mouseover', () => {
            motoDescription.style.visibility = 'visible';
            motoDescription.style.opacity = '1';
        });
        motoicon.addEventListener('mouseout', () => {
            motoDescription.style.visibility = 'hidden';
            motoDescription.style.opacity = '0';
        });

    const cookicon = document.getElementById('cookicon');
    const cookDescription = document.getElementById('cookDescription')
        
        cookicon.addEventListener('mouseover', () => {
            cookDescription.style.visibility = 'visible';
            cookDescription.style.opacity = '1';
        });
        cookicon.addEventListener('mouseout', () => {
            cookDescription.style.visibility = 'hidden';
            cookDescription.style.opacity = '0';
        });

    const idiomasicon = document.getElementById('idiomascookicon');
    const idiomasDescription = document.getElementById('idiomascookDescription')
        
        idiomasicon.addEventListener('mouseover', () => {
            idiomasDescription.style.visibility = 'visible';
            idiomasDescription.style.opacity = '1';
            });
        idiomasicon.addEventListener('mouseout', () => {
            idiomasDescription.style.visibility = 'hidden';
            idiomasDescription.style.opacity = '0';
        });

            //Language

    const pticon = document.getElementById('pticon');
    const ptDescription = document.getElementById('ptDescription')
      
        pticon.addEventListener('mouseover', () => {
            ptDescription.style.visibility = 'visible';
            ptDescription.style.opacity = '1';
        });
        pticon.addEventListener('mouseout', () => {
            ptDescription.style.visibility = 'hidden';
            ptDescription.style.opacity = '0';
        });

    const enicon = document.getElementById('enicon');
    const enDescription = document.getElementById('enDescription')
        
        enicon.addEventListener('mouseover', () => {
            enDescription.style.visibility = 'visible';
            enDescription.style.opacity = '1';
        });
        enicon.addEventListener('mouseout', () => {
            enDescription.style.visibility = 'hidden';
            enDescription.style.opacity = '0';
        });     

    const jpicon = document.getElementById('jpicon');
    const jpDescription = document.getElementById('jpDescription')
        
        jpicon.addEventListener('mouseover', () => {
            jpDescription.style.visibility = 'visible';
            jpDescription.style.opacity = '1';
        });
        jpicon.addEventListener('mouseout', () => {
            jpDescription.style.visibility = 'hidden';
            jpDescription.style.opacity = '0';
        });

    const cnicon = document.getElementById('cnicon');
    const cnDescription = document.getElementById('cnDescription')
        
        cnicon.addEventListener('mouseover', () => {
            cnDescription.style.visibility = 'visible';
            cnDescription.style.opacity = '1';
        });
        cnicon.addEventListener('mouseout', () => {
            cnDescription.style.visibility = 'hidden';
            cnDescription.style.opacity = '0';
        });


});

//modal
document.addEventListener('DOMContentLoaded', (event) => {
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }

    // Função para fechar o modal
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Adiciona event listeners para cada imagem e modal
    var imageModalPairs = [
        { imgId: 'googleicon', modalId: 'ModalGoogle' },
        { imgId: 'microsofticon', modalId: 'ModalMicrosoft' },
        { imgId: 'dadosicon', modalId: 'ModalDados' }
    ];

    imageModalPairs.forEach(pair => {
        var img = document.getElementById(pair.imgId);
        var modal = document.getElementById(pair.modalId);
        var closeBtn = modal.querySelector('.close');

        img.addEventListener('click', () => openModal(pair.modalId));
        closeBtn.addEventListener('click', () => closeModal(modal));
    });

    // Fecha o modal se o usuário clicar fora do conteúdo do modal
    window.addEventListener('click', (event) => {
        imageModalPairs.forEach(pair => {
            var modal = document.getElementById(pair.modalId);
            if (event.target == modal) {
                closeModal(modal);
            }
        });
    });
});

//footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
});
