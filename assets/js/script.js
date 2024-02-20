

/* controle do botao do menu*/
function controlarMenu() {
  const toggleMenuBtn = document.getElementById("toggle-menu-btn");

  const mainMenu = document.getElementById("main-menu");
  // Adiciona um evento de clique ao botão de alternância do menu
  toggleMenuBtn.addEventListener("click", function () {
    // Alterna a classe 'menu-open' no elemento body
    document.body.classList.toggle("menu-open");
  });

  // Adiciona um listener para fechar o menu quando um item é clicado (opcional)
  mainMenu.addEventListener("click", function () {
    document.body.classList.remove("menu-open");
  });
}

// Chama a função para controlar o menu quando o DOM é carregado
document.addEventListener("DOMContentLoaded", function () {
  // Iniciar slider automaticamente

  //inicia o controle do menu
  controlarMenu();
});
