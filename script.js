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
//footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
});
