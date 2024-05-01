// Função para exibir o conteúdo correto ao clicar no menu
function showContent(id) {
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
  }
  document.getElementById(id).classList.add("active");
}

// Função para exibir ou ocultar o submenu de serviços
function toggleSubMenu(id) {
  const submenu = document.getElementById(id);
  submenu.classList.toggle("active");
}
