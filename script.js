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








function showImage(imageElement) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    
    modal.style.display = "block";
    modalImage.src = imageElement.getElementsByTagName("img")[0].src;
    
    // Adicione um evento para fechar a imagem quando a tecla "Esc" for pressionada
    addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeImageModal();
        }
    });
}

function closeImageModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
    
    // Remova o evento de fechar a imagem ao pressionar "Esc" ao fechar o modal
    removeEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeImageModal();
        }
    });
}

// Adicione um evento para fechar a imagem ao clicar fora do modal
addEventListener("click", function(event) {
    const modal = document.getElementById("image-modal");
    if (event.target === modal) {
        closeImageModal();
    }
});



