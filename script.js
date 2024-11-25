function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/247729648_515493510175507_3830567035432131950_n.jpg?stp=dst-jpg_tt6&ccb=11-4&oh=01_Q5AaIKr9M0y8f--SxL_ZcTzExDaTG5VfApyNqLi81wdFdlRY&oe=6751DEAF&_nc_sid=5e03e0&_nc_cat=101")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/247729648_515493510175507_3830567035432131950_n.jpg?stp=dst-jpg_tt6&ccb=11-4&oh=01_Q5AaIKr9M0y8f--SxL_ZcTzExDaTG5VfApyNqLi81wdFdlRY&oe=6751DEAF&_nc_sid=5e03e0&_nc_cat=101")
  }
}
