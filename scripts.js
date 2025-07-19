function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Quando mudar para light mode, mudar para outra imagem através da img no html

  // Pegar a tag img
  const img = document.querySelector(".profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "assets/avatar-light.svg")
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/avatar.svg")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto do Tulio, com fundo azul");
  } else {
    img.setAttribute("alt", "Foto do Tulio, com fundo laranja");
  }
}
