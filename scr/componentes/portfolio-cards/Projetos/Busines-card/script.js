// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Simulação de carregamento (por exemplo, carregar dados de uma API)
    setTimeout(function() {
        // Esconder o loader
        document.getElementById("loader").style.display = "none";
        
        // Mostrar o conteúdo principal
        document.getElementById("content").style.display = "block";
    }, 3000); // Ajuste o tempo conforme necessário
});
