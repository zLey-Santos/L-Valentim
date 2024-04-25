// Função para atualizar o conteúdo do artigo com base no serviço selecionado
function updateArticle(serviceName) {
  const articleTitle = document.querySelector("article > h2");
  const articleContent = document.querySelector("article > .content");

  // Mapeamento dos serviços e suas descrições
  const services = {
    Inicio: "Conteudo da Página inicial",
    Galeria: "Conteudo da Galeria",
    Serviços: "Conteudo da Serviço",
    Micropigmentação: "Conteúdo da Micropigmentação",
    "Limpeza de Pele": "Conteúdo da Limpeza de Pele",
    "Remoção a Lazer": "Conteúdo da Remoção a Lazer",
    Outros: "Conteúdo de Outros Serviços",
    Contactos: "Informações de contacto",
    Sobrancelha: "conteudo sobre sobrancelhas",
  };

  // Atualiza o conteúdo do artigo com base no serviço selecionado
  if (services.hasOwnProperty(serviceName)) {
    articleTitle.textContent = serviceName;
    articleContent.textContent = services[serviceName];
  } else {
    // Caso nenhum serviço correspondente seja encontrado, exibe conteúdo padrão
    articleTitle.textContent = "Artigo indisponivel";
    articleContent.textContent = getDefaultContent();
  }
}

// Função para obter o conteúdo padrão da página inicial
function getDefaultContent() {
  return "Pedimos desculpas pelo inconveniente. Por favor, escolha outro serviço.";
}

// Adiciona evento de clique para cada item do menu principal
document.querySelectorAll("nav ul.menu a").forEach((menuItem) => {
  menuItem.addEventListener("click", (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão do link
    const serviceName = menuItem.textContent.trim();
    updateArticle(serviceName);
  });
});

// Define o conteúdo inicial ao carregar a página
updateArticle("Inicio"); // Inicializa o conteúdo com "Inicio" ao carregar a página
