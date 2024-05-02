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

function checkScrollDirection(event) {
  const submenu = event.target;
  const container = submenu.parentElement;

  if (submenu.scrollTop > 0 && !container.classList.contains("scroll-up")) {
    container.classList.add("scroll-up");
  } else if (submenu.scrollTop === 0) {
    container.classList.remove("scroll-up");
  }
}
