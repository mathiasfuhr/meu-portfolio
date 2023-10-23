const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})


const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => {
    myObserver.observe(element)
})



// Mostra o botão quando o usuário rolar a página para baixo
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};

// Faz a rolagem de volta para o topo quando o botão é clicado
document.getElementById("scrollToTopButton").onclick = function () {
    document.body.scrollTop = 0; // Para navegadores mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
};
