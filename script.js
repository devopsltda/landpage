document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

  // Aguarde o carregamento do DOM
  document.addEventListener("DOMContentLoaded", function () {
    // Selecione todos os links no nav
    const navLinks = document.querySelectorAll('#main-nav a');

    // Adicione um ouvinte de evento de clique a cada link
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Encontre o checkbox de toggle-mobile
        const toggleMobile = document.getElementById('toggle-mobile');

        // Desmarque o checkbox para fechar a navegação móvel
        toggleMobile.checked = false;
      });
    });
  });